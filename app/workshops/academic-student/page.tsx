"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Users,
  Shield,
  Laptop,
  UserCheck,
  Search,
  Phone,
  Mail,
  Zap,
  Award,
  Terminal,
  Brain,
  Rocket,
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

const STUDENT_DEV_PROGRAMS = [
  { name: "Cyber Security Bootcamp", desc: "Hands-on fundamentals covering network defense, web security, and core cyber hygiene.", icon: Shield },
  { name: "Ethical Hacking Workshop", desc: "Interactive penetration testing, vulnerability scanning, and ethical exploit analysis.", icon: Terminal },
  { name: "Cyber Career Roadmap", desc: "Strategic career counseling mapping high-demand cyber security & forensic specializations.", icon: Rocket },
  { name: "Artificial Intelligence for Students", desc: "Understanding AI threat vectors, LLM security risks, and AI-assisted cyber tools.", icon: Brain },
  { name: "Digital Investigation & Cyber Crime Awareness", desc: "Real-world case studies on digital crime scene triage and evidence preservation.", icon: BookOpen },
  { name: "Digital Forensic Science Workshop", desc: "Introduction to forensic imaging, evidence carving, and lab investigation suites.", icon: Award },
  { name: "Linux & Open-Source Security", desc: "Command line mastery, security hardening, and Linux open-source utility tools.", icon: Laptop },
  { name: "Capture The Flag (CTF) Challenge", desc: "Jeopardy & attack-defense cyber range challenge solving web, crypto, and forensic puzzles.", icon: Zap },
  { name: "Secure Coding Fundamentals", desc: "Best practices for writing vulnerability-resistant code in Python, C++, and Web apps.", icon: Terminal },
  { name: "Cloud Security Essentials", desc: "Introduction to AWS/Azure cloud security, identity access management, and container safety.", icon: Shield },
  { name: "Cyber Resume & Interview Masterclass", desc: "Tailoring technical resumes, project portfolios, and cracking cyber technical interviews.", icon: Users },
  { name: "Bug Bounty Fundamentals", desc: "Methodology for web vulnerability hunting, responsible disclosure, and bounty platforms.", icon: Search },
  { name: "Research & Innovation Workshop", desc: "Guided methodology for academic research papers, patents, and cyber tool creation.", icon: BookOpen }
];

const SCHOOL_TARGETS = [
  "Schools",
  "Higher Secondary Schools",
  "Junior Colleges"
];

const SCHOOL_AWARENESS_PROGRAMS = [
  "Safe Internet Practices",
  "Cyber Bullying Awareness",
  "Social Media Safety",
  "Online Gaming Safety",
  "Mobile Security",
  "Password Protection",
  "Fake News & Digital Literacy",
  "Responsible Digital Behavior",
  "Digital Footprint Awareness",
  "Online Privacy",
  "AI Safety for Students",
  "Safe Use of Digital Devices",
  "Parents' Digital Safety Workshop",
  "Teacher Capacity Building"
];

const COLLEGE_SERIES_PROGRAMS = [
  "Cyber Security as a Career",
  "Women in Cyber Security",
  "Ethical Hacking Live Demonstration",
  "AI & Emerging Technologies",
  "Cyber Entrepreneurship",
  "Digital Investigation Fundamentals",
  "National Cyber Security Challenges",
  "Innovation & Startups"
];

export default function AcademicStudentWorkshopsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudentDev = STUDENT_DEV_PROGRAMS.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSchoolProg = SCHOOL_AWARENESS_PROGRAMS.filter(p =>
    p.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCollegeSeries = COLLEGE_SERIES_PROGRAMS.filter(p =>
    p.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#38BDF8]/30 selection:text-white pb-32 overflow-x-hidden relative">
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-sky-500/5 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#0055FF]/5 rounded-full blur-[220px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Academic Workshops Backdrop"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/80 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
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
            <span className="text-[#38BDF8] font-bold">Academic & Student Development</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            {/* Pill Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-xs font-bold text-sky-400 uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>ACADEMIC & STUDENT DEVELOPMENT TRACK</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]"
            >
              Academic & Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-white">Development Programs</span>
            </motion.h1>

            {/* Audience Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-xl font-semibold text-sky-400 tracking-wide mb-6 font-mono"
            >
              (Students • Schools • Colleges • Faculty • Educational Institutions)
            </motion.p>

            {/* Intro Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8"
            >
              Comprehensive skill-building workshops, digital literacy campaigns, ethical hacking bootcamps, and faculty development programs designed to inspire young minds and foster cyber awareness across schools and universities.
            </motion.p>

            {/* Highlights Count */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl"
            >
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-sky-400">13</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Student Bootcamps</div>
              </div>
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-[#38BDF8]">14</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">School Safety Modules</div>
              </div>
              <div className="p-3 text-center border-r border-slate-800/80 last:border-0">
                <div className="text-xl sm:text-2xl font-black text-blue-400">08</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">College Career Series</div>
              </div>
              <div className="p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Interactive Labs</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEARCH & NAVIGATION BAR */}
      {/* ========================================================================= */}
      <section className="sticky top-20 z-30 bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/90 py-4 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider">35 Academic Modules Active</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search student & school workshops..."
              className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRACK 1: STUDENT DEVELOPMENT PROGRAMS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Section 01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Student Development Programs</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Hands-on bootcamps, technical workshops, and career acceleration modules for university students and tech enthusiasts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudentDev.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-slate-900/70 border border-slate-800 hover:border-sky-400/50 p-6 rounded-3xl backdrop-blur-md shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5 group-hover:bg-sky-400 group-hover:text-slate-950 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-sky-400">
                  <span>Hands-on Lab Included</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TRACK 2: SCHOOL CYBER AWARENESS PROGRAMS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-t border-slate-800/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">Section 02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">School Cyber Awareness Programs</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Empowering students, teachers, and parents with essential cyber hygiene, online privacy, and safe digital practices.
          </p>

          {/* Designed For Box */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono shrink-0 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" /> Designed For:
            </div>
            <div className="flex flex-wrap gap-2">
              {SCHOOL_TARGETS.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-950 text-slate-200 border border-slate-800 text-xs font-medium">
                  • {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSchoolProg.map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-400/40 transition-all flex items-center gap-3 group"
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
      {/* 5. TRACK 3: COLLEGE CYBER AWARENESS SERIES */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-t border-slate-800/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">Section 03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">College Cyber Awareness Series</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
            Specialized seminars, live demonstrations, and career insight sessions tailored for college & university campuses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCollegeSeries.map((prog, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-400/40 transition-all flex flex-col justify-between group"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-400 group-hover:text-slate-950 transition-colors">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors mb-4">{prog}</h4>
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Campus Series</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INQUIRY BANNER */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-sky-950/60 via-slate-900 to-blue-950/60 border border-sky-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Schedule an Academic Workshop for Your School or College
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bring Skyline Centre of Excellence certified cyber experts to your institution for student bootcamps, awareness drives, or Faculty Development Programs.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919890424040?text=Hi%2C%20I%20would%20like%20to%20request%20workshop%20details%20for%20Academic%20%26%20Student%20Development%20Workshops."
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
                className="px-8 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-sky-400 text-white font-bold text-xs transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call Academic Coordinator (+91 9890424040)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
