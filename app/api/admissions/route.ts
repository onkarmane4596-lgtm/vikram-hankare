import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { admissionEnquirySchema } from '@/types/admissions';
import { z } from 'zod';
import { sendAdminNotification, sendStudentConfirmation } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the incoming data
    const validatedData = admissionEnquirySchema.parse(body);

    // Save to PostgreSQL
    const text = `
      INSERT INTO admission_enquiries (
        full_name,
        email,
        phone,
        program,
        lead_source,
        notes
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;

    const values = [
      validatedData.fullName,
      validatedData.email,
      validatedData.phone,
      validatedData.program,
      validatedData.leadSource || null,
      validatedData.notes || null,
    ];

    const result = await db.query(text, values);
    const savedEnquiry = result.rows[0];

    // Trigger emails asynchronously (don't await them so the response isn't blocked)
    sendAdminNotification({
      ...validatedData,
      created_at: savedEnquiry.created_at
    }).catch(console.error);

    sendStudentConfirmation(validatedData).catch(console.error);

    return NextResponse.json(
      { success: true, data: savedEnquiry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error saving admission enquiry:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation Error', errors: error.errors },
        { status: 400 }
      );
    }

    // Return a generic error to the client, avoid leaking database details
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
