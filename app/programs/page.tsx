"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProgramsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/certifications");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-slate-400 font-sans">
      <div className="text-center space-y-3">
        <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm">Redirecting to Certifications & Training Programs...</p>
      </div>
    </div>
  );
}
