"use client";

import { motion, Variants } from "framer-motion";
import {
  Shield, Target, Eye, Building2, Zap, Lock, Terminal, Activity,
  CheckCircle2, Users, Lightbulb, Star, Quote, Award, BookOpen, Clock,
  Layout, Cpu, Server, Network, Search, Scan, ArrowRight, ArrowUpRight,
  ChevronRight, Globe, Fingerprint, FileText, Presentation, Library, Sparkles, Compass, Key, Rocket
} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden">

      {/* GLOBAL AMBIENT BACKGROUND LIGHTING */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[75vw] h-[55vh] bg-[#38BDF8]/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-[45%] left-1/2 -translate-x-1/2 w-[85vw] h-[65vh] bg-[#0055FF]/10 rounded-full blur-[220px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* BACKGROUND DECRYPT CODE STREAM WATERMARK */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-15">
        <div className="absolute top-[18%] left-[8%] font-mono text-xs text-[#38BDF8]/40 tracking-widest">[SKYLINE_EXCELLENCE_INIT]</div>
        <div className="absolute top-[32%] right-[10%] font-mono text-xs text-[#60A5FA]/30 tracking-widest">SYS_AUTH_LEVEL_01</div>
        <div className="absolute top-[55%] left-[5%] font-mono text-xs text-emerald-400/30 tracking-widest">CSMSS_EST_2007</div>
        <div className="absolute top-[75%] right-[8%] font-mono text-xs text-sky-300/30 tracking-widest">DIGITAL_FORENSICS_CORE</div>
      </div>

      <div className="relative z-10 pt-28 sm:pt-36 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* SECTION 1: HERO & INTRODUCTION (ID: introduction) */}
        {/* ========================================================================= */}
        <section id="introduction" className="relative min-h-[75vh] sm:min-h-[85vh] w-full flex items-center justify-center pt-12 pb-24 scroll-mt-32 overflow-hidden bg-[#030712]">
          
          {/* Executive Dark Background Image Backdrop */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/hero/hero-seamless.png"
              alt="Cybersecurity Executive Backdrop"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 object-center"
            />
            {/* Dark Ambient Overlays */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(3,7,18,0.3)_0%,_#030712_85%)]" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-[#030712]/80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-sky-500/10 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />
          </div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-20 text-center max-w-4xl mx-auto px-4 mt-4">
            
            {/* Category Top Badge Tag */}
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <Shield className="w-4 h-4 text-sky-400" />
              <span>An Initiative of <strong className="text-white font-semibold">Chhatrapati Shahu Maharaj Sevabhavi Sanstha</strong></span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.12] text-white">
              Pioneering Cyber <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD] drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                Excellence & Digital Trust
              </span>
            </motion.h1>

            {/* Intro Paragraphs */}
            <motion.p variants={fadeUp} className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 font-normal max-w-3xl mx-auto">
              The <strong className="text-white font-semibold">Skyline Centre of Excellence in Cyber Security and Forensics</strong> is an initiative of Chhatrapati Shahu Maharaj Sevabhavi Sanstha dedicated to developing highly skilled cyber security professionals and forensic experts capable of addressing modern cyber threats.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-3xl mx-auto">
              The Centre serves as a hub for education, research, innovation, cyber awareness, forensic investigations, and professional capacity building. Through advanced laboratories, expert faculty, practical training methodologies, and industry partnerships, Skyline aims to bridge the gap between academic knowledge and real-world cyber security requirements.
              <br /><br />
              We are committed to nurturing ethical, skilled, and industry-ready professionals who contribute towards creating a secure digital ecosystem.
            </motion.p>

            {/* Highlights Grid Bar */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-2">
              {[
                { title: "Advanced Cyber Labs", label: "State-of-the-Art Labs", icon: Terminal },
                { title: "Practical Pedagogy", label: "100% Live Case Investigations", icon: Shield },
                { title: "Expert Mentorship", label: "Law Enforcement & Industry", icon: Users },
                { title: "Ethical Ecosystem", label: "Nation-Building Focus", icon: Award }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#38BDF8]/50 transition-all duration-300 group shadow-xl backdrop-blur-md">
                    <div className="p-2.5 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-slate-950 transition-colors mb-2">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-white mb-0.5">{item.title}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{item.label}</span>
                  </div>
                );
              })}
            </motion.div>

          </motion.div>

          {/* 3D Curved Metallic Wave Graphics at Bottom of Hero */}
          <div className="absolute bottom-0 inset-x-0 w-full overflow-hidden leading-none pointer-events-none z-10">
            <svg
              className="relative block w-full h-[120px] sm:h-[180px] md:h-[220px]"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="skylineWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0055FF" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="skylineStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.1" />
                  <stop offset="40%" stopColor="#38BDF8" stopOpacity="1" />
                  <stop offset="80%" stopColor="#60A5FA" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0055FF" stopOpacity="0.0" />
                </linearGradient>
                <filter id="metallicGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <path
                d="M 0 260 C 380 340, 780 110, 1440 220 L 1440 320 L 0 320 Z"
                fill="url(#skylineWaveGrad)"
              />
              <path
                d="M 0 260 C 380 340, 780 110, 1440 220"
                fill="none"
                stroke="url(#skylineStrokeGrad)"
                strokeWidth="3.5"
                filter="url(#metallicGlow)"
              />
            </svg>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: HISTORY OF THE SANSTHA (ID: history) */}
        {/* ========================================================================= */}
        <section id="history" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Building2 className="w-3.5 h-3.5" /> Institutional Legacy
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              History of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Sanstha</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative group overflow-hidden p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 backdrop-blur-2xl shadow-2xl before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#38BDF8] before:to-transparent">
            
            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Text Block */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-mono font-bold">
                  CHHATRAPATI SHAHU MAHARAJ SEVABHAVI SANSTHA
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Empowering Youth Through Education, Innovation, and Nation-Building
                </h3>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p className="border-l-2 border-[#38BDF8]/50 pl-4 italic text-slate-200 bg-white/[0.01] py-2 rounded-r-lg">
                    Established with a vision of social transformation through education, skill development, and community service, Chhatrapati Shahu Maharaj Sevabhavi Sanstha has continuously worked towards empowering youth through quality educational initiatives.
                  </p>
                  <p>
                    Recognizing the growing demand for cyber security professionals and the rapidly expanding threat landscape in the digital world, the Sanstha established the <strong className="text-white font-semibold">Skyline Centre of Excellence in Cyber Security and Forensics</strong> to create a dedicated platform combining high-caliber education, technical innovation, research, and professional excellence.
                  </p>
                  <p>
                    Today, the Sanstha continues to expand its educational and skill-development initiatives while remaining deeply committed to nation-building, workforce transformation, and technological advancement.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  {["Established Vision", "Youth Empowerment", "Community Service", "Technological Excellence"].map((tag, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/80 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Visual Card */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-80" />
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                    alt="Chhatrapati Shahu Maharaj Sevabhavi Sanstha Skill Development"
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                      <div className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider mb-1">FOUNDATIONAL PILLAR</div>
                      <div className="text-sm font-extrabold text-white">Chhatrapati Shahu Maharaj Sevabhavi Sanstha</div>
                      <div className="text-[11px] text-slate-400 mt-1">Driving Skill Development & Technical Literacy</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: MISSION & VISION (ID: mission-vision, vision) */}
        {/* ========================================================================= */}
        <section id="mission-vision" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          {/* Scroll anchor alias for header submenu */}
          <div id="vision" className="scroll-mt-28" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Compass className="w-3.5 h-3.5" /> Strategic Direction
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-emerald-400">Vision</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* MISSION BENTO CONTAINER WITH BG IMAGE & GLASSMORPHISM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative group overflow-hidden p-8 sm:p-12 rounded-3xl border border-[#38BDF8]/40 hover:border-[#38BDF8] transition-all duration-500 shadow-2xl hover:shadow-[0_25px_60px_rgba(56,189,248,0.35)] hover:-translate-y-2 flex flex-col justify-between before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-[#38BDF8] before:to-transparent z-10"
            >
              {/* Background Image Container - Mission Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="/about/mission.png"
                  alt="Mission Background"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out"
                />
                {/* Translucent Electric Blue Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/75 via-slate-950/65 to-[#020617]/80 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/25 rounded-full blur-[70px] group-hover:bg-[#38BDF8]/45 transition-all duration-500 pointer-events-none" />
                
                {/* Sweeping Light Beam Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  {/* Rotating Animated Icon Container */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-[#38BDF8]/60 text-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.5)] group-hover:scale-110 transition-transform duration-500 backdrop-blur-md">
                    <Target className="w-8 h-8 group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out" />
                  </div>

                  <span className="inline-flex items-center gap-2 text-[10px] font-mono font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-slate-950/90 text-[#38BDF8] border border-sky-500/50 shadow-md backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
                    </span>
                    CORE MISSION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 group-hover:text-[#38BDF8] transition-colors duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  OUR MISSION
                </h3>

                <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-medium mb-8 group-hover:text-white transition-colors drop-shadow-md">
                  "To develop competent cyber security and forensic professionals through advanced education, practical training, research, innovation, and industry engagement while promoting cyber awareness and digital safety."
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-700/80 flex flex-wrap gap-2">
                {["Advanced Education", "Practical Training", "Research & Innovation", "Digital Safety"].map((pill, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/85 text-white border border-slate-700/90 group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8]/20 transition-all duration-300 backdrop-blur-md shadow-sm">
                    ✓ {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* VISION BENTO CONTAINER WITH BG IMAGE & GLASSMORPHISM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative group overflow-hidden p-8 sm:p-12 rounded-3xl border border-emerald-500/40 hover:border-emerald-400 transition-all duration-500 shadow-2xl hover:shadow-[0_25px_60px_rgba(52,211,153,0.35)] hover:-translate-y-2 flex flex-col justify-between before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-emerald-400 before:to-transparent z-10"
            >
              {/* Background Image Container - Vision Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="/about/vision.png"
                  alt="Vision Background"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out"
                />
                {/* Translucent Emerald Cyber Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/75 via-slate-950/65 to-[#020617]/80 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/25 rounded-full blur-[70px] group-hover:bg-emerald-400/45 transition-all duration-500 pointer-events-none" />
                
                {/* Sweeping Light Beam Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  {/* Rotating Animated Icon Container */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-400/60 text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.5)] group-hover:scale-110 transition-transform duration-500 backdrop-blur-md">
                    <Eye className="w-8 h-8 group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out" />
                  </div>

                  <span className="inline-flex items-center gap-2 text-[10px] font-mono font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-slate-950/90 text-emerald-400 border border-emerald-500/50 shadow-md backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    LONG-TERM VISION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  OUR VISION
                </h3>

                <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-medium mb-8 group-hover:text-white transition-colors drop-shadow-md">
                  "To become India's leading Centre of Excellence in Cyber Security, Digital Forensics, Cyber Intelligence, and Emerging Technologies by creating skilled professionals, conducting impactful research, and contributing to a secure digital future."
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-700/80 flex flex-wrap gap-2">
                {["India's Leading Hub", "Digital Forensics", "Cyber Intelligence", "Secure Digital Future"].map((pill, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/85 text-white border border-slate-700/90 group-hover:border-emerald-400 group-hover:bg-emerald-400/20 transition-all duration-300 backdrop-blur-md shadow-sm">
                    ★ {pill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: CORE VALUES (ID: core-values) */}
        {/* ========================================================================= */}
        <section id="core-values" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Sparkles className="w-3.5 h-3.5" /> Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]">Values</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              The fundamental ethics and principles driving our educational ecosystem.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Integrity", desc: "Uncompromising honesty, truthfulness, and ethical principles in all security practices.", icon: Shield, color: "text-sky-400" },
              { title: "Innovation", desc: "Pioneering new methodologies, forensic tools, and defensive research solutions.", icon: Lightbulb, color: "text-[#38BDF8]" },
              { title: "Excellence", desc: "Striving for the highest benchmark in academic rigor, practical labs, and training.", icon: Star, color: "text-amber-400" },
              { title: "Professionalism", desc: "Conducting operations with total discipline, procedural rigor, and corporate standards.", icon: Activity, color: "text-blue-400" },
              { title: "Continuous Learning", desc: "Adapting constantly to evolving global threat vectors and emerging technologies.", icon: BookOpen, color: "text-indigo-400" },
              { title: "Ethical Conduct", desc: "Instilling deep respect for cyber law, privacy rights, and responsible disclosure.", icon: Lock, color: "text-emerald-400" },
              { title: "Social Responsibility", desc: "Educating communities, institutions, and citizens on digital safety and cyber hygiene.", icon: Users, color: "text-cyan-400" },
              { title: "National Service", icon: Award, desc: "Dedicated to protecting national cyber infrastructure and strengthening digital sovereignty.", color: "text-rose-400" }
            ].map((value, idx) => {
              const IconComp = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-[#38BDF8]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 w-fit mb-4 group-hover:bg-[#38BDF8] group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <IconComp className={`w-6 h-6 ${value.color} group-hover:text-slate-950 transition-colors`} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: WHY CHOOSE SKYLINE? (ID: why-choose-us) */}
        {/* ========================================================================= */}
        <section id="why-choose-us" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-sky-500/10 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Zap className="w-3.5 h-3.5" /> Institutional Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Skyline?</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              9 distinct reasons why our academy stands out in cyber security and digital forensics training.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Industry-Relevant Curriculum",
                desc: "Programs aligned with current cyber security trends and industry requirements.",
                badge: "Up-to-Date",
                icon: BookOpen
              },
              {
                title: "Practical Learning Environment",
                desc: "Hands-on training through live labs, cyber ranges, forensic investigations, and simulation exercises.",
                badge: "100% Practical",
                icon: Terminal
              },
              {
                title: "Expert Faculty & Mentors",
                desc: "Training delivered by experienced professionals from cyber security, digital forensics, law enforcement, and industry domains.",
                badge: "Law Enforcement Ties",
                icon: Users
              },
              {
                title: "Research & Innovation Focus",
                desc: "Encouraging students and professionals to work on research projects, publications, and innovative cyber solutions.",
                badge: "R&D Hub",
                icon: Lightbulb
              },
              {
                title: "Career Development",
                desc: "Placement support, internship opportunities, career counseling, and professional certification guidance.",
                badge: "Placement Support",
                icon: Award
              },
              {
                title: "Modern Infrastructure",
                desc: "State-of-the-art cyber labs and digital forensic facilities designed to replicate real-world environments.",
                badge: "High-Tech Labs",
                icon: Server
              },
              {
                title: "Ethical & Professional Development",
                desc: "Developing responsible cyber professionals with strong ethical foundations and defensive mindsets.",
                badge: "Ethical Core",
                icon: Shield
              },
              {
                title: "Flexible Learning Options",
                desc: "Weekday, Weekend and Fast track batches available to suit your academic or professional schedule.",
                badge: "Flexible Batches",
                icon: Clock
              },
              {
                title: "Small Batch Sizes",
                desc: "Ensuring highly personalized attention, direct instructor mentorship, and significantly better learning outcomes.",
                badge: "Focused Attention",
                icon: Target
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative group overflow-hidden flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-[#38BDF8]/60 backdrop-blur-2xl hover:shadow-[0_15px_40px_rgba(56,189,248,0.2)] hover:-translate-y-1.5 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#38BDF8] before:to-transparent"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 via-[#2563EB]/25 to-sky-950 border border-[#38BDF8]/40 text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-slate-950 transition-colors duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/90 text-[#38BDF8] border border-sky-500/30 group-hover:border-sky-400 group-hover:bg-sky-500/20 transition-all">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-[#38BDF8] font-semibold">
                    <span>Skyline Pillar 0{idx + 1}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FACILITIES & INFRASTRUCTURE (ID: facilities, infrastructure) */}
        {/* ========================================================================= */}
        <section id="facilities" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          {/* Scroll anchor alias */}
          <div id="infrastructure" className="scroll-mt-28" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Layout className="w-3.5 h-3.5" /> High-Tech Environment
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Facilities & Labs</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Our labs and specialized facilities are built to simulate enterprise attack ranges, forensic investigation units, and R&D environments.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Cyber Security Laboratory",
                desc: "Advanced infrastructure for ethical hacking, penetration testing, malware analysis, and vulnerability assessment.",
                type: "ETHICAL HACKING",
                icon: Server
              },
              {
                name: "Digital Forensics Laboratory",
                desc: "Hands-on investigation environment for mobile, computer, cloud, network, and multimedia forensics.",
                type: "DIGITAL INVESTIGATIONS",
                icon: Search
              },
              {
                name: "Forensic Fingerprint Examination Lab",
                desc: "Hands-on Investigation environment for examination of Fingerprints and Footprints samples.",
                type: "PHYSICAL FORENSICS",
                icon: Fingerprint
              },
              {
                name: "Forensic Document Examination Lab",
                desc: "Hands-on investigation environment for examination of documents, signatures, printers, typewriters, and inks.",
                type: "DOCUMENT FORENSICS",
                icon: FileText
              },
              {
                name: "Cyber Range & Simulation Centre",
                desc: "Realistic cyber-attack and defense simulations for practical scenario-based learning.",
                type: "ATTACK/DEFENSE RANGE",
                icon: Target
              },
              {
                name: "Research & Innovation Cell",
                desc: "Dedicated facility for cybersecurity research, innovation projects, and technology development.",
                type: "R&D ECOSYSTEM",
                icon: Lightbulb
              },
              {
                name: "Smart Classrooms",
                desc: "Technology-enabled learning spaces with interactive teaching methodologies and dual-display setups.",
                type: "INTERACTIVE LEARNING",
                icon: Presentation
              },
              {
                name: "Conference & Training Hall",
                desc: "Professional environment for workshops, seminars, guest lectures, and corporate industry interactions.",
                type: "EXECUTIVE HALL",
                icon: Users
              },
              {
                name: "Digital Library",
                desc: "Access to cybersecurity resources, journals, publications, research papers, and learning materials.",
                type: "KNOWLEDGE REPOSITORY",
                icon: Library
              }
            ].map((facility, i) => {
              const IconComp = facility.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-[#38BDF8]/60 backdrop-blur-2xl transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-slate-950 transition-colors shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-slate-800/90 text-slate-300 border border-slate-700 uppercase">
                        {facility.type}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Operational Facility</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FUTURE INITIATIVES (ID: initiatives) */}
        {/* ========================================================================= */}
        <section id="initiatives" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Card: Future Initiatives List */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800/90 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-mono font-bold mb-4 border border-[#38BDF8]/30">
                ROADMAP & HORIZONS
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Future Initiatives</h3>
              
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  "Cyber Innovation Hub",
                  "AI Security Research Centre",
                  "Cyber Threat Intelligence Unit",
                  "Digital Investigation Support Cell",
                  "Industry Collaboration Centre",
                  "National Cyber Awareness Mission",
                  "Cyber Security Startup Incubation Program"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/90 text-slate-300 text-xs sm:text-sm font-mono italic">
                "Empowering Cyber Defenders. Advancing Digital Trust. Securing the Future."
              </div>
            </motion.div>

            {/* Right Card: Institutional Mandate Callout */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="lg:col-span-5 flex flex-col justify-center space-y-6 p-8 rounded-3xl bg-gradient-to-br from-[#38BDF8]/10 via-slate-900/90 to-slate-950 border border-[#38BDF8]/30 shadow-2xl">
              <div className="p-3 rounded-2xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] w-fit">
                <Rocket className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-white leading-snug">
                Driving National Technological Self-Reliance in Cyber Security
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Our future roadmap focuses on building proprietary threat intelligence platforms, fostering startup incubation for young cyber entrepreneurs, and establishing specialized AI security labs.
              </p>

              <div className="pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#0055FF] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transition-all"
                >
                  Join The Movement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: CALL TO ACTION (ID: contact) */}
        {/* ========================================================================= */}
        <section id="contact" className="py-16 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative overflow-hidden p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#030712] via-slate-900 to-[#030712] border border-[#38BDF8]/40 shadow-[0_0_50px_rgba(56,189,248,0.15)] text-center">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5" /> Start Your Cyber Career Today
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Join India's Premier Cyber Excellence Centre?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our academic counselors, tour our state-of-the-art digital forensics labs, and explore our industry-recognized certification programs.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0055FF] text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 transition-all text-center"
                >
                  Apply For Admission
                </Link>
                <Link
                  href="https://wa.me/919890424040"
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 font-extrabold text-xs uppercase tracking-widest hover:border-[#38BDF8]/60 hover:text-white transition-all text-center"
                >
                  Speak With A Counselor
                </Link>
              </div>
            </div>

          </motion.div>
        </section>

      </div>
    </main>
  );
}
