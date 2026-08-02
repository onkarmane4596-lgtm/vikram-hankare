"use client";

import { motion, Variants } from "framer-motion";
import {
  Shield, Target, Eye, Building2, Zap, Lock, Terminal, Activity,
  CheckCircle2, Users, Lightbulb, Star, Award, BookOpen, Clock,
  Server, ArrowRight, ChevronRight, Compass, Rocket
} from 'lucide-react';
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 25 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION 1: INTRODUCTION HEADER (ID: introduction) */}
      {/* ========================================================================= */}
      <section id="introduction" className="relative w-full flex items-center justify-center pt-32 sm:pt-40 pb-12 overflow-hidden bg-[#020617] scroll-mt-36">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/hero/hero1.png"
            alt="Cybersecurity Executive Backdrop"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-luminosity object-center"
          />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.3)_0%,_#020617_95%)]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-slate-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.15)]"
          >
            <Shield className="w-4 h-4 text-sky-400" />
            <span>An Initiative of CSMS Sanstha</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-tight text-white"
          >
            Pioneering Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]">Excellence & Trust</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Developing highly skilled cyber security professionals and forensic experts capable of addressing modern cyber threats.
          </motion.p>
        </div>
      </section>

      {/* LOWER PAGE CONTENT CONTAINER */}
      <div className="relative z-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Highlights Grid Bar */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-20">
          {[
            { title: "Advanced Cyber Labs", label: "State-of-the-Art Labs", icon: Terminal },
            { title: "Practical Pedagogy", label: "100% Live Investigations", icon: Shield },
            { title: "Expert Mentorship", label: "Law Enforcement & Industry", icon: Users },
            { title: "Ethical Ecosystem", label: "Nation-Building Focus", icon: Award }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-[#38BDF8]/50 transition-colors duration-200 shadow-lg text-center">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/20 text-[#38BDF8] mb-2">
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white mb-0.5">{item.title}</span>
                <span className="text-[10px] text-slate-400 font-medium">{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTION 2: HISTORY OF THE SANSTHA (ID: history) */}
        {/* ========================================================================= */}
        <section id="history" className="py-16 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" /> Institutional Legacy
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              History of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Sanstha</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="relative group overflow-hidden p-6 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-[#38BDF8]/50 shadow-xl transition-colors duration-300">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Text Block */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0055FF]/10 text-[#38BDF8] text-xs font-mono font-bold border border-[#38BDF8]/30">
                  CHHATRAPATI SHAHU MAHARAJ SEVABHAVI SANSTHA
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Empowering Youth Through Education, Innovation, and Nation-Building
                </h3>

                <div className="space-y-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p className="border-l-2 border-[#38BDF8]/50 pl-4 italic text-slate-200 bg-slate-950/60 py-2.5 rounded-r-lg">
                    Established with a vision of social transformation through education, skill development, and community service, Chhatrapati Shahu Maharaj Sevabhavi Sanstha has continuously worked towards empowering youth through quality educational initiatives.
                  </p>
                  <p>
                    Recognizing the growing demand for cyber security professionals and the rapidly expanding threat landscape in the digital world, the Sanstha established the <strong className="text-white font-semibold">Skyline Centre of Excellence in Cyber Security and Forensics</strong> to create a dedicated platform combining high-caliber education, technical innovation, research, and professional excellence.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-2.5">
                  {["Established Vision", "Youth Empowerment", "Community Service", "Technological Excellence"].map((tag, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/80 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Visual Card */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-80" />
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                    alt="Chhatrapati Shahu Maharaj Sevabhavi Sanstha Skill Development"
                    className="w-full h-72 sm:h-88 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800">
                      <div className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider mb-1">FOUNDATIONAL PILLAR</div>
                      <div className="text-sm font-extrabold text-white">Chhatrapati Shahu Maharaj Sevabhavi Sanstha</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Driving Skill Development & Technical Literacy</div>
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
        <section id="mission-vision" className="py-16 border-t border-slate-800/80 scroll-mt-36 relative">
          <div id="vision" className="scroll-mt-36" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> Strategic Direction
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Vision</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* MISSION BENTO CONTAINER */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideInRight}
              className="relative group overflow-hidden p-6 sm:p-10 rounded-3xl bg-slate-950/50 border border-[#38BDF8]/40 hover:border-[#38BDF8] transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Creative Cyber Background Artwork (/design/5.png) */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src="/design/5.png"
                  alt="Our Mission Cyber Background"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out filter brightness-110 contrast-125 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/60" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-[#38BDF8]/60 text-[#38BDF8] group-hover:scale-105 transition-transform duration-300 backdrop-blur-md shadow-md">
                    <Target className="w-7 h-7" />
                  </div>

                  <span className="inline-flex items-center gap-2 text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-950/80 text-[#38BDF8] border border-sky-500/50 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    CORE MISSION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-[#38BDF8] transition-colors drop-shadow-md">
                  OUR MISSION
                </h3>

                <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium mb-8 drop-shadow-md">
                  &quot;To develop competent cyber security and forensic professionals through advanced education, practical training, research, innovation, and industry engagement while promoting cyber awareness and digital safety.&quot;
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                {["Advanced Education", "Practical Training", "Research & Innovation", "Digital Safety"].map((pill, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/80 text-slate-200 border border-slate-700/80 group-hover:border-[#38BDF8]/50 transition-colors backdrop-blur-md shadow-sm">
                    ✓ {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* VISION BENTO CONTAINER */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideInRight}
              className="relative group overflow-hidden p-6 sm:p-10 rounded-3xl bg-slate-950/50 border border-[#00D4FF]/40 hover:border-[#00D4FF] transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Creative Cyber Background Artwork (Mirrored Perspective /design/5.png) */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src="/design/5.png"
                  alt="Our Vision Cyber Background"
                  className="w-full h-full object-cover scale-x-[-1] opacity-50 group-hover:opacity-75 group-hover:scale-x-[-1.05] group-hover:scale-y-105 transition-all duration-700 ease-out filter brightness-110 contrast-125 saturate-150 hue-rotate-15"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 via-transparent to-slate-950/60" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-[#00D4FF]/60 text-[#00D4FF] group-hover:scale-105 transition-transform duration-300 backdrop-blur-md shadow-md">
                    <Eye className="w-7 h-7" />
                  </div>

                  <span className="inline-flex items-center gap-2 text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-950/80 text-[#00D4FF] border border-[#00D4FF]/50 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                    LONG-TERM VISION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-[#00D4FF] transition-colors drop-shadow-md">
                  OUR VISION
                </h3>

                <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium mb-8 drop-shadow-md">
                  &quot;To become India&apos;s leading Centre of Excellence in Cyber Security, Digital Forensics, Cyber Intelligence, and Emerging Technologies by creating skilled professionals, conducting impactful research, and contributing to a secure digital future.&quot;
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                {["India's Leading Hub", "Digital Forensics", "Cyber Intelligence", "Secure Digital Future"].map((pill, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/80 text-slate-200 border border-slate-700/80 group-hover:border-[#00D4FF]/50 transition-colors backdrop-blur-md shadow-sm">
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
        <section id="core-values" className="py-16 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]">Values</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              The fundamental ethics and principles driving our educational ecosystem.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Integrity", desc: "Uncompromising honesty, truthfulness, and ethical principles in all security practices.", icon: Shield },
              { title: "Innovation", desc: "Pioneering new methodologies, forensic tools, and defensive research solutions.", icon: Lightbulb },
              { title: "Excellence", desc: "Striving for the highest benchmark in academic rigor, practical labs, and training.", icon: Star },
              { title: "Professionalism", desc: "Conducting operations with total discipline, procedural rigor, and corporate standards.", icon: Activity },
              { title: "Continuous Learning", desc: "Adapting constantly to evolving global threat vectors and emerging technologies.", icon: BookOpen },
              { title: "Ethical Conduct", desc: "Instilling deep respect for cyber law, privacy rights, and responsible disclosure.", icon: Lock },
              { title: "Social Responsibility", desc: "Educating communities, institutions, and citizens on digital safety and cyber hygiene.", icon: Users },
              { title: "National Service", desc: "Dedicated to protecting national cyber infrastructure and strengthening digital sovereignty.", icon: Award }
            ].map((value, idx) => {
              const IconComp = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 shadow-lg group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/20 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-colors w-fit mb-4 shrink-0">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: WHY CHOOSE SKYLINE? (ID: why-choose-us) */}
        {/* ========================================================================= */}
        <section id="why-choose-us" className="py-16 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Zap className="w-3.5 h-3.5" /> Institutional Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Skyline?</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              9 distinct reasons why our academy stands out in cyber security and digital forensics training.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {[
              { title: "Industry-Relevant Curriculum", desc: "Programs aligned with current cyber security trends and industry requirements.", badge: "Up-to-Date", icon: BookOpen },
              { title: "Practical Learning Environment", desc: "Hands-on training through live labs, cyber ranges, forensic investigations, and simulation exercises.", badge: "100% Practical", icon: Terminal },
              { title: "Expert Faculty & Mentors", desc: "Training delivered by experienced professionals from cyber security, digital forensics, law enforcement, and industry domains.", badge: "Law Enforcement Ties", icon: Users },
              { title: "Research & Innovation Focus", desc: "Encouraging students and professionals to work on research projects, publications, and innovative cyber solutions.", badge: "R&D Hub", icon: Lightbulb },
              { title: "Career Development", desc: "Placement support, internship opportunities, career counseling, and professional certification guidance.", badge: "Placement Support", icon: Award },
              { title: "Modern Infrastructure", desc: "State-of-the-art cyber labs and digital forensic facilities designed to replicate real-world environments.", badge: "High-Tech Labs", icon: Server },
              { title: "Ethical & Professional Development", desc: "Developing responsible cyber professionals with strong ethical foundations and defensive mindsets.", badge: "Ethical Core", icon: Shield },
              { title: "Flexible Learning Options", desc: "Weekday, Weekend and Fast track batches available to suit your academic or professional schedule.", badge: "Flexible Batches", icon: Clock },
              { title: "Small Batch Sizes", desc: "Ensuring highly personalized attention, direct instructor mentorship, and significantly better learning outcomes.", badge: "Focused Attention", icon: Target }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 shadow-lg group hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/20 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-colors shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950 text-[#38BDF8] border border-slate-800">
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
        {/* SECTION 6: CALL TO ACTION (ID: contact) */}
        {/* ========================================================================= */}
        <section id="contact" className="py-16 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative overflow-hidden p-6 sm:p-12 rounded-3xl bg-slate-900/90 border border-[#38BDF8]/40 text-center">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-[#38BDF8]/40 text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5" /> Start Your Cyber Career Today
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Join India&apos;s Premier Cyber Excellence Centre?
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Connect with our academic counselors, tour our state-of-the-art digital forensics labs, and explore our industry-recognized certification programs.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] to-[#38BDF8] text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all text-center"
                >
                  Apply For Admission
                </Link>
                <Link
                  href="https://wa.me/919890424040"
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-extrabold text-xs uppercase tracking-widest hover:border-[#38BDF8]/60 hover:text-white transition-all text-center"
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
