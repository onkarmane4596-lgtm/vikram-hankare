export const dynamic = 'force-dynamic';

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import LeadDetailsClient from "./lead-details-client";
import { AdmissionEnquiry, LeadActivity } from "@/types/admissions";
import { AdminSidebar } from "@/components/admin/sidebar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function LeadDetailsPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const { id } = await params;

  let lead: AdmissionEnquiry | null = null;
  let activities: LeadActivity[] = [];
  let dbError: string | null = null;

  try {
    // Fetch lead data
    const leadResult = await db.query('SELECT * FROM admission_enquiries WHERE id = $1', [id]);
    if (leadResult.rows.length > 0) {
      lead = leadResult.rows[0];
      const activityResult = await db.query('SELECT * FROM lead_activity WHERE lead_id = $1 ORDER BY created_at DESC', [id]);
      activities = activityResult.rows;
    }
  } catch (err: any) {
    console.error("Database Query Error in Lead Details:", err.message);
    dbError = err.message || "Failed to query database";
  }

  if (dbError || !lead) {
    return (
      <div className="min-h-screen bg-[#0A1F44] p-8 text-white flex flex-col items-center justify-center">
        <AdminSidebar session={session} />
        <h1 className="text-2xl font-bold mb-2 ml-64">{dbError ? "Database Connection Error" : "Lead Not Found"}</h1>
        <p className="text-sm text-slate-400 mb-6 ml-64 text-center max-w-md">
          {dbError ? `Error: ${dbError}. Please ensure your Supabase database is active and unpaused.` : "The requested lead enquiry could not be found."}
        </p>
        <Link href="/admin/dashboard" className="ml-64 text-[#00E5FF] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1F44] font-sans text-slate-300">
      <AdminSidebar session={session} />
      <main className="ml-64 p-8 max-w-5xl">
        <Link href="/admin/leads" className="text-slate-400 hover:text-[#00E5FF] transition-colors inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Leads
        </Link>

        <LeadDetailsClient initialLead={lead} initialActivities={activities} />
      </main>
    </div>
  );
}
