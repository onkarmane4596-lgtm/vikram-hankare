"use client";

import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Users,
  Search,
  ArrowRight,
  ChevronRight,
  Award,
  Terminal,
  Cpu,
  BookOpen,
  Building2,
  CheckCircle2
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

export default function WorkshopsHubPage() {
  const workshops = [
    {
      id: "security-awareness",
      title: "Security Awareness Programs",
      href: "/workshops/security-awareness",
      icon: ShieldCheck,
      badge: "Corporate & Institutional",
      desc: "Interactive security awareness sessions, phishing simulations, password hygiene, and safe digital practices tailored for corporate employees, students, and government departments.",
      highlights: ["Phishing & Social Engineering Simulations", "Remote Work & Password Safety", "Data Privacy & Mobile Protection"]
    },
    {
      id: "research",
      title: "Research & Development in Forensic Sciences",
      href: "/workshops/research",
      icon: Search,
      badge: "Scientific Innovation",
      desc: "Specialized workshops covering modern R&D methodologies in digital evidence carving, audio/video spectrographic analysis, anti-forensics, and emerging cyber investigative tech.",
      highlights: ["Custom Tool & Script Development", "Deepfake Audio/Video Detection", "AI-Assisted Evidence Carving"]
    },
    {
      id: "capacity-building",
      title: "Capacity Building Programs",
      href: "/workshops/capacity-building",
      icon: Building2,
      badge: "Law Enforcement & Gov",
      desc: "Comprehensive technical capacity building for police personnel, judiciary, government intelligence, financial auditors, and corporate investigation units.",
      highlights: ["Crime Scene & Digital Evidence Handling", "Section 45 Expert Testimony Prep", "Financial Fraud & Crypto Tracing"]
    },
    {
      id: "faculty-development",
      title: "Faculty Development Programs (FDP)",
      href: "/workshops/faculty-development",
      icon: GraduationCap,
      badge: "Academic Institutions",
      desc: "Upskilling academic faculty, professors, and lab mentors with state-of-the-art forensic science curricula, modern lab setups, and industry cyber defense practices.",
      highlights: ["Curriculum & Lab Manual Design", "Hands-On Tool Mentorship", "Academic-Industry Collaboration"]
    },
    {
      id: "ai-cybersecurity",
      title: "AI in Cyber Security & Forensics",
      href: "/workshops/ai-cybersecurity",
      icon: Cpu,
      badge: "Next-Gen Cyber Tech",
      desc: "Exploring AI-assisted vulnerability scanning, machine learning threat detection, automated SOC triage, LLM security risks, and AI-driven deepfake forensics.",
      highlights: ["AI-Assisted Pentesting & Detection", "Deepfake Audio/Video Forensic Auditing", "LLM Security & Prompt Injection Mitigation"]
    },
    {
      id: "ctf-bootcamp",
      title: "Capture The Flag (CTF) Bootcamp",
      href: "/workshops/ctf-bootcamp",
      icon: Terminal,
      badge: "Competitive Cyber Range",
      desc: "Intensive 1-3 day hands-on CTF bootcamp featuring jeopardy & attack-defense cyber range challenges covering web exploitation, cryptography, reverse engineering, and forensics.",
      highlights: ["Real-World Offensive & Defensive Challenges", "Live Leaderboard & Cyber Range", "Hands-On Mentorship by CTF Veterans"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pb-24 overflow-x-hidden relative">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-white/[0.06]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Skyline Workshops Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/75 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">Workshops</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00d4ff]" /> Skyline Specialized Workshops & Bootcamps
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Workshops & Capacity Building</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we organize immersive short-term workshops, Faculty Development Programs (FDP), capacity building sessions for law enforcement, AI cyber seminars, and Capture The Flag (CTF) bootcamps designed to deliver immediate practical impact.
            </motion.p>

          </motion.div>

          {/* Quick Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Interactive Sessions</p>
                <p className="text-xs text-slate-400">Live Hands-On & Case Studies</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Expert Faculty</p>
                <p className="text-xs text-slate-400">Industry Leaders & Mentors</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Certificates</p>
                <p className="text-xs text-slate-400">Skyline Workshop Certification</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Tailored Solutions</p>
                <p className="text-xs text-slate-400">Corporate, Police & Academics</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WORKSHOPS GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workshops</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Select a specialized workshop program below to view agenda details, target participants, and request a customized session.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((w, idx) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#020617] to-[#040d21] border border-white/10 hover:border-[#00d4ff]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                      <w.icon className="w-7 h-7 text-[#00d4ff] group-hover:text-slate-950" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold">
                      {w.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors leading-snug">
                    {w.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {w.desc}
                  </p>

                  <div className="space-y-2 mb-8">
                    {w.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00d4ff] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Customizable Program</span>
                  <Link
                    href={w.href}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-xs shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:scale-[1.03] transition-all flex items-center gap-1.5"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
