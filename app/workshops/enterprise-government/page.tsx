"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ShieldAlert,
  Search,
  Phone,
  Briefcase,
  Lock,
  Landmark,
  Crown,
  FileCheck,
  Building,
  UserCheck,
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

const CORPORATE_PROGRAMS = [
  "Protecting Businesses Through Cyber Resilience",
  "Executive Cyber Security Awareness",
  "Ransomware Prevention & Response",
  "Phishing Attack Simulation",
  "Secure Email & Communication Practices",
  "Password & Identity Management",
  "Data Privacy & Protection",
  "Insider Threat Awareness",
  "Social Engineering Defense",
  "Incident Response Planning",
  "Business Continuity & Disaster Recovery",
  "Secure Remote Working",
  "Artificial Intelligence in Cyber Security",
  "Cyber Risk Management for Leadership",
  "Cyber Security Compliance & Governance",
  "Secure Digital Workplace",
  "Cyber Hygiene for Employees",
  "Digital Fraud Prevention",
  "Vendor & Third-Party Risk Management"
];

const BANKING_PROGRAMS = [
  "Strengthening Digital Trust in Financial Services",
  "Banking Cyber Security Awareness",
  "UPI & Digital Payment Fraud Prevention",
  "ATM & Card Fraud Investigation",
  "Banking Fraud Risk Management",
  "Secure Online Banking Practices",
  "Cyber Security Compliance for Banks",
  "Financial Cyber Crime Investigation",
  "Customer Data Protection",
  "RBI Cyber Security Awareness Programs",
  "Insider Threat Management in Banking",
  "Social Engineering & Fraud Prevention",
  "Incident Reporting & Response"
];

const GOVT_PROGRAMS = [
  "Building Secure Digital Governance",
  "Cyber Security for Government Officers",
  "e-Governance Security",
  "Cyber Risk Management",
  "Data Protection & Privacy",
  "Secure Digital Communication",
  "Information Security Awareness",
  "Digital Evidence Preservation",
  "AI for Government Services",
  "Cyber Crisis Management",
  "Critical Infrastructure Security",
  "Secure Digital Documentation"
];

const EXECUTIVE_PROGRAMS = [
  "Cyber Security for CEOs",
  "Cyber Risk for Directors",
  "Board-Level Information Security",
  "AI Governance",
  "Data Protection Leadership",
  "Crisis Communication During Cyber Incidents",
  "Cyber Insurance Awareness",
  "Strategic Security Planning"
];

export default function EnterpriseGovernmentWorkshopsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterList = (list: string[]) => list.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white pb-32 overflow-x-hidden relative">
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/5 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-blue-500/5 rounded-full blur-[220px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Enterprise Workshops Backdrop"
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
            <span className="text-[#38BDF8] font-bold">Enterprise & Government</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            {/* Pill Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-xs font-bold text-blue-400 uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,85,255,0.2)]"
            >
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>ENTERPRISE & GOVERNMENT CAPACITY BUILDING</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]"
            >
              Enterprise & Government <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">Capacity Building</span>
            </motion.h1>

            {/* Audience Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-xl font-semibold text-blue-400 tracking-wide mb-6 font-mono"
            >
              (Corporate • Banking • Government • Leadership)
            </motion.p>

            {/* Intro Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8"
            >
              Tailored cyber resilience, ransomware defense, RBI banking compliance, e-governance security, and executive board-level risk management workshops engineered for organizations, financial institutions, and government bodies.
            </motion.p>

            {/* Metrics Bar */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl"
            >
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-blue-400">19</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Corporate Modules</div>
              </div>
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-[#38BDF8]">13</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Banking Modules</div>
              </div>
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-indigo-400">12</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Govt Officers Track</div>
              </div>
              <div className="p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">08</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">CEO & Board Series</div>
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
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider">52 Enterprise & Governance Modules Active</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search corporate, banking & govt workshops..."
              className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRACK 1: CORPORATE TRAINING PROGRAMS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">Section 01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Corporate Training Programs</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Empowering workforce cyber hygiene, ransomware prevention, phishing simulation, data privacy, and third-party risk management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterList(CORPORATE_PROGRAMS).map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-400/50 transition-all flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-400 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">{prog}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TRACK 2: BANKING & FINANCIAL SECTOR PROGRAMS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-t border-slate-800/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Section 02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Banking & Financial Sector Programs</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Strengthening digital trust in financial services, UPI/ATM fraud investigation, customer data protection, and RBI regulatory compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterList(BANKING_PROGRAMS).map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-400/50 transition-all flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">{prog}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TRACK 3: GOVERNMENT CAPACITY BUILDING */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-t border-slate-800/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">Section 03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Government Capacity Building Programs</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Safeguarding e-governance assets, critical infrastructure, public sector data, and secure digital communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterList(GOVT_PROGRAMS).map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-400/50 transition-all flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-400 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">{prog}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TRACK 4: EXECUTIVE LEADERSHIP PROGRAMS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-t border-slate-800/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">Section 04</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Executive Leadership Programs</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Strategic cyber risk advisory, AI governance, board-level information security, and crisis communication for C-suite leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filterList(EXECUTIVE_PROGRAMS).map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/40 transition-all flex flex-col justify-between group"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                <Crown className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-4">{prog}</h4>
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Executive Track</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INQUIRY BANNER */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Schedule Enterprise Cyber Training For Your Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We design custom, on-site, and remote corporate cyber security & RBI compliance workshops tailored to your organization's risk profile.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919890424040?text=Hi%2C%20I%20would%20like%20to%20request%20workshop%20details%20for%20Enterprise%20%26%20Government%20Capacity%20Building%20Workshops."
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
                className="px-8 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-400 text-white font-bold text-xs transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Corporate Helpdesk (+91 9890424040)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
