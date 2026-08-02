"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Lock,
  Mail,
  Send,
  Check,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  ShieldCheck,
  Users,
  Scale,
  FileCheck2
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CapacityBuildingWorkshopPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "State Police / Cyber Cell",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        department: "State Police / Cyber Cell",
        message: ""
      });
    }, 1200);
  };

  const programModules = [
    "Digital Evidence Acquisition & Chain of Custody Protocol for Field Officers",
    "Crime Scene Securement, 3D Measurement & Evidence Tagging",
    "Mobile Phone & CDR / IPDR Log Analysis for Criminal Investigations",
    "Financial Fraud Tracing (UPI, SWIFT, Cryptocurrency & Banking Logs)",
    "Questioned Document & Signature Verification Fundamentals for Officers",
    "Audio & Video Evidence Governance and Tampering Verification",
    "Courtroom Testimony, Section 45 Opinion Drafting & Legal Defense Prep",
    "Dark Web Investigation, Crypto Asset Tracing & Cyber Crime Cell Operations"
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pb-24 overflow-x-hidden relative">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Capacity Building Programs Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/75 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/workshops" className="hover:text-[#00d4ff] transition-colors">Workshops</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">Capacity Building</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-[#00d4ff]" /> Specialized Law Enforcement &amp; Judicial Upskilling
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Capacity Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Programs</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              Empowering law enforcement agencies, state police departments, judiciary members, government officers, and corporate fraud teams with modern investigative technical competencies.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Capacity Building <span className="text-[#00d4ff]">Modules</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programModules.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#020617] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                <p className="text-slate-300 text-xs leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
