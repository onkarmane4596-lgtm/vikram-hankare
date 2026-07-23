"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Bell, Settings } from "lucide-react";
import LogoutButton from "@/app/admin/dashboard/logout-button";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";

export function AdminSidebar({ session }: { session: Session | null }) {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#0D2B60] border-r border-white/5 flex flex-col z-20">
      <div className="p-6 border-b border-white/5">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <LayoutDashboard className="text-[#00E5FF] w-5 h-5" />
          Admin Panel
        </h2>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <Link 
          href="/admin/dashboard" 
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors",
            pathname === "/admin/dashboard" 
              ? "bg-[#00E5FF]/10 text-[#00E5FF]" 
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          )}
        >
          <LayoutDashboard className="w-5 h-5" />
          Overview
        </Link>
        <Link 
          href="/admin/leads" 
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors",
            pathname.startsWith("/admin/leads") 
              ? "bg-[#00E5FF]/10 text-[#00E5FF]" 
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          )}
        >
          <Users className="w-5 h-5" />
          All Leads
        </Link>
        <Link 
          href="/admin/follow-ups" 
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors",
            pathname === "/admin/follow-ups" 
              ? "bg-[#00E5FF]/10 text-[#00E5FF]" 
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          )}
        >
          <Bell className="w-5 h-5" />
          Follow-ups
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl">
          <div className="truncate pr-4">
            <p className="text-sm font-medium text-white truncate">{session?.user?.name || "Admin"}</p>
            <p className="text-xs text-slate-400 truncate">{session?.user?.email}</p>
          </div>
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}
