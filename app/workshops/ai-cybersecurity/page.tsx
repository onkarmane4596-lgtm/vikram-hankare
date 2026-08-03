"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Cpu,
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
  Zap,
  Terminal,
  ShieldCheck
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

export default function AICybersecurityWorkshopPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
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
        companyName: "",
        message: ""
      });
    }, 1200);
  };

  const aiModules = [
    "AI & Machine Learning in Modern Threat Detection & Behavioral Analytics",
    "Deepfake Audio & Video Forensic Auditing (Spectrographic & AI Artifact Detection)",
    "AI-Assisted Penetration Testing, Automated Vulnerability Discovery & Payload Tuning",
    "LLM Security Risks: Prompt Injection, Data Poisoning, and Model Inversion Attacks",
    "Automated SIEM & SOAR Log Triage using Generative AI Agents",
    "AI Security Policy, Governance, and Ethical AI Deployment in Enterprise Environments"
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
            alt="AI in Cyber Security Background"
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
            <span className="text-[#00d4ff] font-medium">AI in Cyber Security</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-[#00d4ff]" /> Cutting-Edge Frontier Tech
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              AI in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Cyber Security &amp; Forensics</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              Explore how artificial intelligence is transforming cyber defense, offensive penetration testing, deepfake evidence detection, and automated incident triage.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              AI Workshop <span className="text-[#00d4ff]">Modules</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiModules.map((item, idx) => (
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
