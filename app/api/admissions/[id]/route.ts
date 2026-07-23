import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { updateEnquirySchema } from '@/types/admissions';
import { z } from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const leadResult = await db.query('SELECT * FROM admission_enquiries WHERE id = $1', [id]);
    
    if (leadResult.rows.length === 0) {
      return NextResponse.json({ success: false, message: 'Lead not found' }, { status: 404 });
    }

    const activityResult = await db.query('SELECT * FROM lead_activity WHERE lead_id = $1 ORDER BY created_at DESC', [id]);

    return NextResponse.json(
      { success: true, data: { lead: leadResult.rows[0], activity: activityResult.rows } },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching lead:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    const validatedData = updateEnquirySchema.parse(body);

    // Fetch current to compare
    const currentResult = await db.query('SELECT * FROM admission_enquiries WHERE id = $1', [id]);
    if (currentResult.rows.length === 0) {
      return NextResponse.json({ success: false, message: 'Lead not found' }, { status: 404 });
    }
    const currentLead = currentResult.rows[0];

    // Build update query dynamically
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    Object.entries(validatedData).forEach(([key, value]) => {
      if (value !== undefined) {
        // Map camelCase to snake_case
        let dbKey = key;
        if (key === 'fullName') dbKey = 'full_name';
        if (key === 'assignedTo') dbKey = 'assigned_to';
        if (key === 'nextFollowupDate') dbKey = 'next_followup_date';
        if (key === 'followupNotes') dbKey = 'followup_notes';
        updates.push(`${dbKey} = $${paramIndex}`);
        values.push(value);
        paramIndex++;
      }
    });

    if (updates.length === 0) {
      return NextResponse.json({ success: false, message: 'No fields to update' }, { status: 400 });
    }

    // Update lead
    values.push(id);
    const updateQuery = `
      UPDATE admission_enquiries 
      SET ${updates.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING *
    `;
    const updatedResult = await db.query(updateQuery, values);
    const updatedLead = updatedResult.rows[0];

    // Log activities
    const activities = [];
    
    if (validatedData.status && validatedData.status !== currentLead.status) {
      activities.push({
        type: 'status_change',
        desc: `Status changed from ${currentLead.status} to ${validatedData.status}`
      });
    }
    
    if (validatedData.notes !== undefined && validatedData.notes !== currentLead.notes) {
      activities.push({
        type: 'note_added',
        desc: `Notes updated: ${validatedData.notes}`
      });
    }

    if (validatedData.nextFollowupDate !== undefined) {
      const newTime = validatedData.nextFollowupDate ? new Date(validatedData.nextFollowupDate).getTime() : 0;
      const oldTime = currentLead.next_followup_date ? new Date(currentLead.next_followup_date).getTime() : 0;
      
      if (newTime !== oldTime) {
        activities.push({
          type: 'follow_up',
          desc: `Next follow-up set to ${validatedData.nextFollowupDate ? new Date(validatedData.nextFollowupDate).toLocaleString() : 'None'}`
        });
      }
    }

    if (validatedData.followupNotes !== undefined && validatedData.followupNotes !== currentLead.followup_notes) {
      activities.push({
        type: 'follow_up',
        desc: `Follow-up notes updated: ${validatedData.followupNotes}`
      });
    }

    if (validatedData.assignedTo !== undefined && validatedData.assignedTo !== currentLead.assigned_to) {
      activities.push({
        type: 'info_update',
        desc: `Assigned to: ${validatedData.assignedTo}`
      });
    }

    const infoFieldsChanged = [];
    if (validatedData.fullName && validatedData.fullName !== currentLead.full_name) infoFieldsChanged.push('name');
    if (validatedData.email && validatedData.email !== currentLead.email) infoFieldsChanged.push('email');
    if (validatedData.phone && validatedData.phone !== currentLead.phone) infoFieldsChanged.push('phone');
    if (validatedData.program && validatedData.program !== currentLead.program) infoFieldsChanged.push('program');
    
    if (infoFieldsChanged.length > 0) {
      activities.push({
        type: 'info_update',
        desc: `Updated lead info: ${infoFieldsChanged.join(', ')}`
      });
    }

    for (const activity of activities) {
      await db.query(
        'INSERT INTO lead_activity (lead_id, action_type, description) VALUES ($1, $2, $3)',
        [id, activity.type, activity.desc]
      );
    }

    return NextResponse.json({ success: true, data: updatedLead }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating lead:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: 'Validation Error', errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
