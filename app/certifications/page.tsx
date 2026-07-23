"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Award, Shield, Search, Server, Activity, ArrowRight, CheckCircle2, Lock, Terminal, Cpu, Network, Briefcase, Zap, BookOpen } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CertificationsPage() {
  const activeCertifications = [
    {
      title: "Certified Ethical Hacker (CEHv13)",
      icon: Shield,
      partner: "EC-Council",
      desc: "Take the next step toward a rewarding career. Designed to build your skills, boost your confidence, and help you secure tomorrow in a fully equipped digital lab environment."
    },
    {
      title: "Computer Hacking Forensic Investigator",
      icon: Search,
      partner: "EC-Council",
      desc: "Master the art of digital investigations. Identify, collect, preserve, analyze, and present digital evidence while following industry-standard forensic procedures."
    },
    {
      title: "Linux for Cybersecurity",
      icon: Terminal,
      partner: "Core Track",
      desc: "Command-line to Containment. Develop mastery over the Linux environment for advanced cyber operations."
    },
    {
      title: "Cyber-Savvy Networking",
      icon: Network,
      partner: "Core Track",
      desc: "Fundamentals for Defenders. Understand the intricate architecture of secure network deployments."
    },
    {
      title: "Forensic Document Examination",
      icon: BookOpen,
      partner: "Specialization",
      desc: "Hands-on Analysis. Advanced verification of documents, detecting forgeries, inks, and tampering."
    },
    {
      title: "Fingerprint Evidence Lab",
      icon: Zap,
      partner: "Specialization",
      desc: "From Latent to Matches. Methodological approach to recovering and matching biometric data."
    },
    {
      title: "Digital Forensic Toolbox",
      icon: Activity,
      partner: "Practical Lab",
      desc: "Hands-on Tools and Techniques. Gain fluency with industry-standard forensic software suites."
    },
    {
      title: "ATC-friendly Practical Training",
      icon: Briefcase,
      partner: "Enterprise",
      desc: "Custom-tailored training modules serving academic institutional needs and corporate compliance."
    }
  ];

  const upcomingCertifications = [
    { title: "(CND) Certified Network Defender", icon: Server },
    { title: "(CSA) Certified SOC Analyst", icon: Activity },
    { title: "(CPENT) Certified Penetration Testing Professional", icon: Code },
    { title: "(ECIH) Certified Incident Handler", icon: Shield },
    { title: "(CTIA) Certified Threat Intelligence Analyst", icon: Search },
    { title: "(CCISO) Certified Chief Information Security Officer", icon: Lock },
    { title: "ICS/SCADA Cybersecurity", icon: Cpu }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-[#00d4ff]/30 selection:text-white overflow-hidden pb-32">

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] bg-[#0055FF]/5 rounded-full blur-[200px] pointer-events-none" />

      {/* =========================================
          1. HERO SECTION 
      ========================================= */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/[0.05]">
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-8 backdrop-blur-md">
            <Award className="w-4 h-4" /> Professional Training Center
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Master Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">Skills</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Take the next step toward a rewarding career. Highly-acclaimed certifications designed to build your skills, boost your confidence, and help you secure tomorrow.
          </motion.p>
        </motion.div>
      </section>

      {/* =========================================
          2. ACTIVE CERTIFICATIONS GRID 
      ========================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Available Now</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent rounded-full"></div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-6 md:gap-8"
          >
            {activeCertifications.map((cert, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-[#00d4ff]/30 hover:bg-white/[0.04] transition-all duration-500 group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/5 blur-3xl rounded-full transition-colors duration-500 pointer-events-none" />

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:bg-[#00d4ff]/10 group-hover:border-[#00d4ff]/30 transition-all duration-300">
                    <cert.icon className="w-6 h-6 text-slate-400 group-hover:text-[#00d4ff] transition-colors" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">{cert.partner}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#00d4ff] transition-colors duration-300">{cert.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-grow relative z-10">{cert.desc}</p>

                <Link href={`https://wa.me/919890424040?text=I am interested in the ${cert.title} program`} target="_blank" className="mt-8 relative z-10 inline-flex items-center justify-between w-full py-4 px-6 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 text-white text-sm font-bold rounded-xl transition-all duration-300 group/btn">
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#00d4ff] group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          3. UPCOMING CERTIFICATIONS
      ========================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-gradient-to-b from-[#020617] to-brand-blue/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-slate-500 font-mono text-sm tracking-widest uppercase mb-4 block">Future Proof</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Upcoming <span className="text-slate-500">Certifications</span></h2>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {upcomingCertifications.map((upcoming, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center justify-center text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-slate-500/30 transition-colors">
                <upcoming.icon className="w-6 h-6 text-slate-500 mb-4" />
                <h4 className="text-slate-300 font-medium text-sm">{upcoming.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}

// Temporary internal Code icon to avoid lucide-react export issues if missing
function Code(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
