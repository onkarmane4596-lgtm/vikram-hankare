import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Bell, Calendar, BarChart3, PieChart } from "lucide-react";
import Link from "next/link";
import { AdminSidebar } from "@/components/admin/sidebar";
import { db } from "@/lib/db";
import { TrendChart, ProgramChart } from "./analytics-charts";

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  let followups: any[] = [];
  let statusCounts: Record<string, number> = {};
  let totalLeads = 0;
  let newLeads = 0;
  let contactedLeads = 0;
  let convertedLeads = 0;
  let conversionRate = 0;
  let programData: { program: string; count: number }[] = [];
  let trendData: { month: string; count: number }[] = [];
  let dbError: string | null = null;

  try {
    // Fetch pending follow-ups
    const followupsResult = await db.query(`
      SELECT id, full_name, next_followup_date, assigned_to 
      FROM admission_enquiries 
      WHERE next_followup_date IS NOT NULL 
      AND status NOT IN ('Converted', 'Rejected')
      ORDER BY next_followup_date ASC
      LIMIT 5
    `);
    followups = followupsResult.rows;

    // Analytics: Status Breakdown
    const statusResult = await db.query(`SELECT status, COUNT(*) as count FROM admission_enquiries GROUP BY status`);
    statusCounts = statusResult.rows.reduce((acc, row) => {
      acc[row.status] = parseInt(row.count, 10);
      return acc;
    }, {} as Record<string, number>);

    totalLeads = (Object.values(statusCounts) as number[]).reduce((sum, count) => sum + count, 0);
    newLeads = statusCounts['New'] || 0;
    contactedLeads = statusCounts['Contacted'] || 0;
    convertedLeads = statusCounts['Converted'] || 0;
    conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;

    // Analytics: Program Distribution
    const programResult = await db.query(`SELECT program, COUNT(*) as count FROM admission_enquiries GROUP BY program ORDER BY count DESC`);
    programData = programResult.rows.map(r => ({
      program: (r.program || 'Other').replace('Foundation: ', '').replace('Professional: ', '').replace('Global Cert: ', ''),
      count: parseInt(r.count, 10)
    }));

    // Analytics: Monthly Trends (Last 6 Months)
    const trendResult = await db.query(`
      SELECT to_char(date_trunc('month', created_at), 'Mon YY') as month, COUNT(*) as count 
      FROM admission_enquiries 
      WHERE created_at >= NOW() - INTERVAL '6 months' 
      GROUP BY date_trunc('month', created_at) 
      ORDER BY date_trunc('month', created_at) ASC
    `);
    trendData = trendResult.rows.map(r => ({ month: r.month, count: parseInt(r.count, 10) }));
  } catch (err: any) {
    console.error("Database Query Error in Admin Dashboard:", err.message);
    dbError = err.message || "Failed to connect to database";
  }

  return (
    <div className="min-h-screen bg-[#0A1F44] font-sans text-slate-300 pb-12">
      <AdminSidebar session={session} />

      {/* Main Content */}
      <main className="ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-medium text-white">Dashboard Overview</h1>
          <p className="text-slate-400 mt-1">Analytics and key metrics for your admission enquiries.</p>
        </header>

        {/* Database Connection Alert if Error */}
        {dbError && (
          <div className="mb-8 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 backdrop-blur-md flex items-start gap-4 shadow-lg">
            <Bell className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-300 text-sm uppercase tracking-wider mb-1">Database Connection Warning</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
                Unable to query PostgreSQL database. Error: <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300 font-mono text-xs">{dbError}</code>
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p>💡 <strong>How to resolve:</strong></p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                  <li>If using <strong>Supabase</strong>, log into your Supabase Dashboard and click <strong>"Restore / Unpause Project"</strong> (free tier projects pause after inactivity).</li>
                  <li>Verify your <code className="text-amber-200">DATABASE_URL</code> in <code className="text-amber-200">.env</code> contains correct credentials.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#0D2B60] border border-white/5 rounded-2xl p-6 shadow-lg">
            <p className="text-slate-400 text-sm font-medium mb-1">Total Leads</p>
            <p className="text-4xl font-light text-white">{totalLeads}</p>
          </div>
          <div className="bg-[#0D2B60] border border-white/5 rounded-2xl p-6 shadow-lg">
            <p className="text-slate-400 text-sm font-medium mb-1">New Leads</p>
            <p className="text-4xl font-light text-white">{newLeads}</p>
          </div>
          <div className="bg-[#0D2B60] border border-white/5 rounded-2xl p-6 shadow-lg relative overflow-hidden">
            <p className="text-slate-400 text-sm font-medium mb-1">Contacted Leads</p>
            <p className="text-4xl font-light text-white">{contactedLeads}</p>
          </div>
          <div className="bg-[#0D2B60] border border-[#00E5FF]/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,229,255,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 blur-[50px]" />
            <p className="text-slate-400 text-sm font-medium mb-1 relative z-10">Conversion Rate</p>
            <div className="flex items-end gap-2 relative z-10">
              <p className="text-4xl font-medium text-[#00E5FF]">{conversionRate}%</p>
              <p className="text-sm text-slate-400 mb-1">({convertedLeads} won)</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* Trends Chart */}
          <div className="xl:col-span-2 bg-[#0D2B60] border border-white/5 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-[#00E5FF]" />
              <h3 className="text-lg font-medium text-white">Monthly Enquiry Trends</h3>
            </div>
            <TrendChart data={trendData} />
          </div>

          {/* Program Distribution Chart */}
          <div className="bg-[#0D2B60] border border-white/5 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-[#00E5FF]" />
              <h3 className="text-lg font-medium text-white">Program Distribution</h3>
            </div>
            <ProgramChart data={programData} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#0D2B60] border border-white/5 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#00E5FF]" /> Pending Follow-ups
              </h3>
              <Link href="/admin/follow-ups" className="text-xs text-[#00E5FF] hover:underline">View All</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {followups.length === 0 ? (
                <p className="text-sm text-slate-400 py-4 col-span-full">No pending follow-ups</p>
              ) : (
                followups.map((f) => {
                  const isOverdue = new Date(f.next_followup_date) < new Date();
                  return (
                    <Link key={f.id} href={`/admin/leads/${f.id}`} className="block p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-white text-sm truncate pr-2">{f.full_name}</p>
                        {isOverdue && <span className="text-[10px] uppercase font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full shrink-0">Overdue</span>}
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span className={isOverdue ? "text-red-400" : ""}>
                            {new Date(f.next_followup_date).toLocaleDateString()}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-md">{f.assigned_to || 'Unassigned'}</span>
                      </div>
                    </Link>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
