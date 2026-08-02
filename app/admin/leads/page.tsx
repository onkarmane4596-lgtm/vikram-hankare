export const dynamic = 'force-dynamic';

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AdminSidebar } from "@/components/admin/sidebar";
import { db } from "@/lib/db";

export default async function AdminLeadsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  let leads: any[] = [];
  let dbError: string | null = null;

  try {
    // Fetch all leads
    const leadsResult = await db.query(`
      SELECT id, full_name, email, phone, program, status, created_at
      FROM admission_enquiries 
      ORDER BY created_at DESC
    `);
    leads = leadsResult.rows;
  } catch (err: any) {
    console.error("Database Query Error in Admin Leads:", err.message);
    dbError = err.message || "Failed to query database";
  }

  return (
    <div className="min-h-screen bg-[#0A1F44] font-sans text-slate-300">
      <AdminSidebar session={session} />

      {/* Main Content */}
      <main className="ml-64 p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium text-white">All Leads & Enquiries</h1>
            <p className="text-slate-400 mt-1">View and manage all incoming admission enquiries.</p>
          </div>
        </header>

        {dbError && (
          <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm">
            ⚠️ <strong>Database Connection Issue:</strong> {dbError}. Please ensure Supabase project is active or check <code className="text-amber-300">DATABASE_URL</code> in <code className="text-amber-300">.env</code>.
          </div>
        )}

        <div className="bg-[#0D2B60] border border-white/5 rounded-[2rem] shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Date</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Lead Name</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Contact</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Program</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Status</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => {
                    return (
                      <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <span className="text-slate-300">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-medium text-white">{lead.full_name}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-slate-300">{lead.email}</p>
                          <p className="text-xs text-slate-500">{lead.phone}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-slate-300">{lead.program}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lead.status === 'New' ? 'bg-blue-400/10 text-blue-400' :
                            lead.status === 'Contacted' ? 'bg-amber-400/10 text-amber-400' :
                            lead.status === 'Converted' ? 'bg-emerald-400/10 text-emerald-400' :
                            'bg-slate-400/10 text-slate-400'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link 
                            href={`/admin/leads/${lead.id}`}
                            className="inline-flex items-center gap-1 text-sm font-medium text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                          >
                            Open <ChevronRight className="w-4 h-4" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
