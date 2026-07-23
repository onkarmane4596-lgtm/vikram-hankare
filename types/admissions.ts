import { z } from 'zod';

export const admissionEnquirySchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  program: z.string().min(1, 'Program of interest is required'),
  leadSource: z.string().optional(),
  notes: z.string().optional(),
});

export const updateEnquirySchema = z.object({
  fullName: z.string().min(1, 'Full name is required').optional(),
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().min(10, 'Phone number is required').optional(),
  program: z.string().min(1, 'Program of interest is required').optional(),
  status: z.enum(['New', 'Contacted', 'Interested', 'Follow Up', 'Converted', 'Rejected']).optional(),
  notes: z.string().optional(),
  assignedTo: z.string().nullable().optional(),
  nextFollowupDate: z.string().nullable().optional(),
  followupNotes: z.string().nullable().optional(),
});

export type AdmissionEnquiryInput = z.infer<typeof admissionEnquirySchema>;
export type UpdateEnquiryInput = z.infer<typeof updateEnquirySchema>;

export interface AdmissionEnquiry {
  id: string; // UUID
  full_name: string;
  email: string;
  phone: string;
  program: string;
  lead_source: string | null;
  status: 'New' | 'Contacted' | 'Interested' | 'Follow Up' | 'Converted' | 'Rejected';
  notes: string | null;
  assigned_to: string | null;
  next_followup_date: Date | null;
  followup_notes: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface LeadActivity {
  id: string;
  lead_id: string;
  action_type: 'status_change' | 'note_added' | 'info_update' | 'follow_up';
  description: string;
  created_at: Date;
}
