import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    // Get all leads that have a follow up date set, ordered by closest first (including overdue)
    const result = await db.query(`
      SELECT id, full_name, program, status, assigned_to, next_followup_date, followup_notes 
      FROM admission_enquiries 
      WHERE next_followup_date IS NOT NULL 
      ORDER BY next_followup_date ASC
    `);

    return NextResponse.json({ success: true, data: result.rows }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching follow-ups:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
