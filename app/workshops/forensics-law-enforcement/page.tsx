"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldAlert,
  Fingerprint,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Search,
  Phone,
  Scale,
  FileText,
  UserCheck,
  Zap,
  Award,
  Microscope,
  Shield,
  Briefcase,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const LAW_ENFORCEMENT_TARGETS = [
  "Police Officers",
  "Investigation Officers",
  "Prosecutors",
  "Public Prosecutors",
  "Lawyers",
  "Judicial Officers",
  "Vigilance Departments",
  "Anti-Corruption Bureaus",
  "Intelligence Units"
];

const LAW_ENFORCEMENT_PROGRAMS = [
  "Digital Evidence Handling",
  "Cyber Crime Investigation",
  "Mobile Phone Investigation Basics",
  "Open-Source Intelligence (OSINT)",
  "Crime Scene Management",
  "Chain of Custody",
  "Cyber Laws & Digital Evidence",
  "Social Media Investigation",
  "Dark Web Awareness",
  "Cryptocurrency Investigation Fundamentals",
  "Online Financial Crime Investigation",
  "Scientific Investigation Techniques",
  "Forensic Science in Criminal Investigation",
  "Courtroom Presentation of Scientific Evidence",
  "Emerging Trends in Cyber Crime"
];

const FORENSIC_SCIENCE_WORKSHOPS = [
  "Crime Scene Investigation",
  "Fingerprint Science",
  "Questioned Document Examination",
  "Forensic Biology",
  "Forensic Chemistry",
  "Toxicology",
  "Ballistics & Firearms",
  "Forensic Anthropology",
  "Wildlife Forensics",
  "Forensic Psychology",
  "DNA Evidence Basics",
  "Scientific Evidence Collection",
  "Expert Witness & Court Testimony"
];

export default function ForensicsLawEnforcementWorkshopsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterList = (list: string[]) => list.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#38BDF8]/30 selection:text-white pb-32 overflow-x-hidden relative">
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-teal-500/5 rounded-full blur-[220px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Forensic Workshops Backdrop"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/80 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-mono"
          >
            <Link href="/" className="hover:text-[#38BDF8] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/workshops" className="hover:text-[#38BDF8] transition-colors">Workshops</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-emerald-400 font-bold">Forensics & Law Enforcement</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            {/* Pill Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>FORENSIC INVESTIGATION & LAW ENFORCEMENT</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]"
            >
              Forensic Investigation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white">Law Enforcement Programs</span>
            </motion.h1>

            {/* Audience Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-xl font-semibold text-emerald-400 tracking-wide mb-6 font-mono"
            >
              (Police • Investigation Agencies • Judiciary • Forensic Professionals)
            </motion.p>

            {/* Intro Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8"
            >
              Specialized technical capacity-building for police officers, judicial members, intelligence agencies, and forensic scientists in digital evidence carving, OSINT, mobile forensics, chain of custody, and Section 65B courtroom testimony.
            </motion.p>

            {/* Metrics Bar */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl"
            >
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">15</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Investigation Modules</div>
              </div>
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-teal-400">13</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Forensic Lab Workshops</div>
              </div>
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">09</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Target Agencies</div>
              </div>
              <div className="p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-sky-400">Section 65B</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Courtroom Standards</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEARCH BAR */}
      {/* ========================================================================= */}
      <section className="sticky top-20 z-30 bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/90 py-4 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider">28 Law Enforcement & Forensic Modules Active</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search OSINT, evidence, fingerprint, ballistics..."
              className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRACK 1: LAW ENFORCEMENT & INVESTIGATION PROGRAMS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Section 01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Law Enforcement & Investigation Programs</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Specialized training for police, prosecutors, judicial officers, and intelligence personnel in evidence acquisition and courtroom presentation.
          </p>

          {/* Designed For Target Box */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono mb-2 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" /> Designed For:
            </div>
            <div className="flex flex-wrap gap-2">
              {LAW_ENFORCEMENT_TARGETS.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-950 text-slate-200 border border-slate-800 text-xs font-medium">
                  • {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterList(LAW_ENFORCEMENT_PROGRAMS).map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-400/50 transition-all flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">{prog}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TRACK 2: SPECIALIZED FORENSIC SCIENCE WORKSHOPS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-t border-slate-800/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Microscope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">Section 02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Specialized Forensic Science Workshops</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Comprehensive physical and digital forensic laboratory techniques covering fingerprint analysis, questioned documents, ballistics, and toxicology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterList(FORENSIC_SCIENCE_WORKSHOPS).map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-400/50 transition-all flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 group-hover:bg-teal-400 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">{prog}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INQUIRY BANNER */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Request Law Enforcement & Forensic Training
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We deliver official capacity building programs for police academies, judicial officers, crime branch units, and forensic science laboratories.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919890424040?text=Hi%2C%20I%20would%20like%20to%20request%20workshop%20details%20for%20Forensic%20Investigation%20%26%20Law%20Enforcement%20Workshops."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>REQUEST WORKSHOP DETAILS VIA WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919890424040"
                className="px-8 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-400 text-white font-bold text-xs transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Forensic Desk (+91 9890424040)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
