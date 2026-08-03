"use client";

import { useState, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import {
  Shield,
  GraduationCap,
  Building2,
  ShieldAlert,
  Search,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  UserCheck,
  Zap,
  Phone,
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

const DOMAIN_CARDS = [
  {
    id: "academic-student",
    href: "/workshops/academic-student",
    title: "Academic & Student Development Programs",
    subtitle: "Students • Schools • Colleges • Faculty • Educational Institutions",
    badge: "DOMAIN 01",
    desc: "Hands-on bootcamps, ethical hacking workshops, cyber career roadmaps, and digital safety drives for school & college students and faculty.",
    icon: GraduationCap,
    accentColor: "text-sky-400",
    gradientColor: "from-sky-500/20 via-blue-500/10 to-transparent",
    borderColor: "border-sky-500/30 hover:border-sky-400",
    btnColor: "bg-[#0055FF] hover:bg-[#0044CC]",
    moduleCount: "35 Modules",
    highlights: [
      "Student Development Bootcamps (13)",
      "School Cyber Awareness (14)",
      "College Cyber Awareness Series (8)"
    ]
  },
  {
    id: "enterprise-government",
    href: "/workshops/enterprise-government",
    title: "Enterprise & Government Capacity Building",
    subtitle: "Corporate • Banking • Government • Leadership",
    badge: "DOMAIN 02",
    desc: "Workforce cyber resilience, ransomware defense, RBI banking compliance, e-governance security, and executive board-level risk management.",
    icon: Building2,
    accentColor: "text-blue-400",
    gradientColor: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "border-blue-500/30 hover:border-blue-400",
    btnColor: "bg-[#0055FF] hover:bg-[#0044CC]",
    moduleCount: "52 Modules",
    highlights: [
      "Corporate Training Programs (19)",
      "Banking & Financial Sector (13)",
      "Government Capacity Building (12)",
      "Executive Leadership Programs (8)"
    ]
  },
  {
    id: "forensics-law-enforcement",
    href: "/workshops/forensics-law-enforcement",
    title: "Forensic Investigation & Law Enforcement Programs",
    subtitle: "Police • Investigation Agencies • Judiciary • Forensic Professionals",
    badge: "DOMAIN 03",
    desc: "Specialized capacity building in digital evidence handling, mobile forensics, OSINT, crime scene management, and Section 65B courtroom presentation.",
    icon: ShieldAlert,
    accentColor: "text-emerald-400",
    gradientColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderColor: "border-emerald-500/30 hover:border-emerald-400",
    btnColor: "bg-[#0055FF] hover:bg-[#0044CC]",
    moduleCount: "28 Modules",
    highlights: [
      "Law Enforcement & Investigation (15)",
      "Specialized Forensic Science Labs (13)",
      "9 Target Law Enforcement Agencies"
    ]
  }
];

export default function WorkshopsHubPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#38BDF8]/30 selection:text-white pb-32 overflow-x-hidden relative">
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/5 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#38BDF8]/5 rounded-full blur-[220px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Skyline Workshops Background"
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
            <span className="text-[#38BDF8] font-bold">Specialized Workshops Hub</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            {/* Pill Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-xs font-bold text-[#38BDF8] uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              <Shield className="w-4 h-4 text-[#38BDF8]" />
              <span>SPECIALIZED WORKSHOPS & CAPACITY BUILDING</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]"
            >
              Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Workshops Hub</span>
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-xl font-semibold text-[#38BDF8] tracking-wide mb-6 font-mono"
            >
              Empowering Students | Strengthening Organizations | Securing the Nation
            </motion.p>

            {/* Introductory Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8"
            >
              At <strong className="text-white font-semibold">Skyline Centre of Excellence in Cyber Security and Forensic Science</strong>, we deliver industry-oriented workshops, executive training programs, awareness campaigns, and capacity-building initiatives across 3 dedicated domain tracks.
            </motion.p>

            {/* Metrics Bar */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl"
            >
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-[#38BDF8]">03</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Dedicated Pages</div>
              </div>
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-sky-400">115+</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Specialized Modules</div>
              </div>
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-[#38BDF8]">100%</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Practical Hands-On</div>
              </div>
              <div className="p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">Custom</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">On-Site & Virtual</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE DEDICATED DOMAIN SHOWCASE CARDS */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#38BDF8] text-xs font-bold font-mono uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5 text-[#38BDF8]" /> Specialized Domain Tracks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Select a Specialized Domain Page</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Explore dedicated workshops, detailed curricula, target audience guidelines, and module lists for each domain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DOMAIN_CARDS.map((domain, idx) => {
            const Icon = domain.icon;

            return (
              <motion.div
                key={domain.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`bg-slate-900/70 border ${domain.borderColor} p-8 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0055FF]/5 blur-3xl rounded-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center ${domain.accentColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono font-bold text-[#38BDF8] uppercase tracking-widest px-3 py-1 rounded-full bg-slate-950 border border-slate-800">
                        {domain.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400 mt-1">{domain.moduleCount}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#38BDF8] transition-colors mb-3 leading-snug">
                    {domain.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-mono mb-4 leading-relaxed">
                    {domain.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {domain.desc}
                  </p>

                  <div className="space-y-2 mb-8 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Key Program Areas:</div>
                    {domain.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={domain.href}
                    className={`w-full py-3.5 px-6 rounded-2xl ${domain.btnColor} text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group/btn`}
                  >
                    <span>EXPLORE MORE</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INQUIRY BANNER */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8 relative z-10">
        <div className="bg-gradient-to-r from-[#0055FF]/20 via-slate-900 to-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-950 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold font-mono uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 text-[#38BDF8]" /> Customized On-Demand Training
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Need a Custom Workshop for Your Organization?
            </h2>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We design specialized, module-driven workshops for universities, law enforcement agencies, corporate enterprises, and government departments. Contact our training coordinator today to schedule an on-site or online session.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919890424040?text=Hi%2C%20I%20would%20like%20to%20request%20workshop%20details%20for%20Specialized%20Workshops."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>REQUEST WORKSHOP DETAILS VIA WHATSAPP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+919890424040"
                className="px-8 py-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#38BDF8] text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>Call Coordinator (+91 9890424040)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
