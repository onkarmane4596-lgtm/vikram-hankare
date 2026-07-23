"use client";

import { motion } from "framer-motion";
import { BookOpen, Shield, ShieldAlert, Code, Server, Crosshair, Award, CheckCircle2, Activity, Search } from "lucide-react";
import Link from "next/link";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const foundation = [
  { title: "Cyber Security Basics", icon: Shield, desc: "A comprehensive introduction to information security principles, threat landscapes, and defensive mechanisms." },
  { title: "Networking Fundamentals", icon: Server, desc: "Deep dive into OSI models, TCP/IP, subnetting, and secure network architectures." },
  { title: "Linux & Python for Security", icon: Code, desc: "Master the command line and scripting languages essential for automation and ethical hacking." }
];

const professional = [
  { title: "Ethical Hacking", icon: Crosshair, desc: "Learn offensive techniques to identify and exploit vulnerabilities before malicious hackers do." },
  { title: "SOC Analyst", icon: Activity, desc: "Master security operations, incident response, and continuous monitoring using modern SIEM tools." },
  { title: "Digital Forensics", icon: Search, desc: "Investigate cybercrimes, recover data, and maintain strict chain-of-custody protocols for legal cases." },
  { title: "Network Security", icon: ShieldAlert, desc: "Implement firewalls, IDS/IPS, and secure VPNs to defend enterprise perimeters." }
];

const certifications = ["CEH", "CHFI", "CND", "CSA", "CPENT"];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#0A1F44] text-slate-300 font-sans selection:bg-[#00E5FF]/30 selection:text-white pt-32 pb-20 overflow-hidden relative">

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-[#00E5FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-24">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00E5FF] tracking-widest uppercase mb-6">
            <BookOpen className="w-4 h-4" /> Academic Structure
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-medium text-white mb-6">
            Elite Cyber Security <span className="font-light text-[#00E5FF]">Programs</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose from our industry-aligned curriculum, designed to take you from a beginner to a globally certified professional.
          </motion.p>
        </motion.div>

        {/* Foundation Programs */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
          <motion.h2 variants={fadeUp} className="text-3xl font-medium text-white mb-10 flex items-center gap-4">
            <span className="w-8 h-px bg-[#00E5FF]"></span> Foundation Programs
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {foundation.map((prog, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 rounded-[2rem] hover:border-[#00E5FF]/30 transition-all group">
                <prog.icon className="w-10 h-10 text-[#00E5FF] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl text-white font-medium mb-3">{prog.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Professional Programs */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
          <motion.h2 variants={fadeUp} className="text-3xl font-medium text-white mb-10 flex items-center gap-4">
            <span className="w-8 h-px bg-[#00E5FF]"></span> Professional Programs
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professional.map((prog, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 rounded-[2rem] hover:border-[#00E5FF]/30 transition-all group">
                <prog.icon className="w-10 h-10 text-[#00E5FF] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg text-white font-medium mb-3">{prog.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Global Certifications */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeUp} className="bg-gradient-to-r from-[#0D2B60] to-[#0A1F44] border border-[#00E5FF]/20 rounded-[2rem] p-10 md:p-16 text-center shadow-[0_0_50px_rgba(0,229,255,0.05)] relative overflow-hidden">

            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />

            <Award className="w-12 h-12 text-[#00E5FF] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Global Certifications</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
              As an authorized training center, we prepare and facilitate our students for the most demanded global certifications in the industry.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-white px-6 py-3 rounded-full font-bold tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" /> {cert}
                </div>
              ))}
            </div>

            <Link href="/admissions" className="inline-flex items-center justify-center bg-[#00E5FF] text-[#0A1F44] hover:bg-white px-8 py-4 rounded-full text-sm font-bold transition-all">
              Start Your Certification Journey
            </Link>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}
