export const dynamic = 'force-dynamic';

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { LogOut, LayoutDashboard, Users, Settings, Bell, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { AdminSidebar } from "@/components/admin/sidebar";
import { db } from "@/lib/db";

export default async function AdminFollowupsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const followupsResult = await db.query(`
    SELECT id, full_name, program, status, assigned_to, next_followup_date, followup_notes 
    FROM admission_enquiries 
    WHERE next_followup_date IS NOT NULL 
    AND status NOT IN ('Converted', 'Rejected')
    ORDER BY next_followup_date ASC
  `);
  const followups = followupsResult.rows;

  return (
    <div className="min-h-screen bg-[#0A1F44] font-sans text-slate-300">
      <AdminSidebar session={session} />

      {/* Main Content */}
      <main className="ml-64 p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium text-white">Follow-ups Management</h1>
            <p className="text-slate-400 mt-1">Track and manage all scheduled follow-ups.</p>
          </div>
        </header>

        <div className="bg-[#0D2B60] border border-white/5 rounded-[2rem] shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Lead Name</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Scheduled For</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Notes</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300">Assigned To</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-300 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {followups.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                      No follow-ups scheduled at the moment.
                    </td>
                  </tr>
                ) : (
                  followups.map((f) => {
                    const isOverdue = new Date(f.next_followup_date) < new Date();
                    return (
                      <tr key={f.id} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <p className="font-medium text-white">{f.full_name}</p>
                          <p className="text-xs text-slate-500 mt-1">{f.program}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Calendar className={`w-4 h-4 ${isOverdue ? "text-red-400" : "text-slate-400"}`} />
                            <span className={isOverdue ? "text-red-400 font-medium" : "text-slate-300"}>
                              {new Date(f.next_followup_date).toLocaleString([], {
                                month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'
                              })}
                            </span>
                          </div>
                          {isOverdue && <span className="inline-block mt-1 text-[10px] uppercase font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full">Overdue</span>}
                        </td>
                        <td className="px-6 py-4 max-w-xs">
                          <p className="text-sm text-slate-400 truncate" title={f.followup_notes}>
                            {f.followup_notes || "—"}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-300">{f.assigned_to || "Unassigned"}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link 
                            href={`/admin/leads/${f.id}`}
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
