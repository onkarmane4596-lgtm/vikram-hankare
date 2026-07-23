"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Search, Users, Target, Building2, Lock, FileSearch, Shield, ArrowRight, Scan, PenTool, CheckCircle2, Clock, Microscope, Briefcase } from 'lucide-react';
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ConsultancyPage() {
  const services = [
    {
      title: "Fingerprint Examination Consultancy",
      icon: Scan,
      desc: "Scientific examination, development, and comparison of friction ridge skin impressions.",
      items: ["Fingerprint examination and comparison.", "Latent fingerprint development.", "Fingerprint identity verification.", "Crime scene fingerprint consultation.", "Expert forensic opinion.", "Scientific examination reports.", "Technical support for investigations.", "Court-admissible documentation."]
    },
    {
      title: "Questioned Document Examination",
      icon: PenTool,
      desc: "Comprehensive forensic analysis to verify authenticity and detect forgery in critical documents.",
      items: ["Signature authenticity verification.", "Handwriting examination and comparison.", "Detection of forged and altered documents.", "Ink, paper, and printing analysis.", "Examination of stamps and seals.", "Counterfeit document identification.", "Expert forensic reports.", "Technical consultation for legal disputes."]
    },
    {
      title: "Digital & Cyber Forensics",
      icon: Search,
      desc: "Advanced investigation services to uncover digital evidence, analyze cyberattacks, and support legal proceedings.",
      items: ["Computer and mobile device forensics.", "Digital evidence collection/preservation.", "Deleted data recovery and analysis.", "Email and social media investigations.", "CCTV and multimedia evidence analysis.", "Cyber incident investigation.", "Malware and cyberattack analysis.", "Digital forensic reports and expert consultation."]
    }
  ];

  const industries = [
    "Law Enforcement Agencies",
    "Courts & Legal Professionals",
    "Government Departments",
    "Corporate Organizations",
    "Financial Institutions",
    "Educational Institutions",
    "Insurance Companies",
    "Private Investigators",
    "Individual Clients"
  ];

  const advantages = [
    "Scientific Approach", "Qualified Experts", "Confidentiality Assured",
    "Accurate & Unbiased Results", "Professional Reporting", "Advanced Technology",
    "Legal & Investigation Support", "Standards-Driven Process", "Timely Service",
    "Client-Focused Solutions", "Multi-Disciplinary Expertise", "Integrity & Excellence"
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white overflow-hidden pb-32">

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] w-[50vw] h-[50vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none" />

      {/* =========================================
          1. HERO SECTION 
      ========================================= */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/[0.05]">
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-8 backdrop-blur-md">
            <Building2 className="w-4 h-4" /> Professional Investigation Services
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
            Enterprise <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">Consultancy</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Unbiased, court-admissible forensic analysis. Providing multi-disciplinary expertise to uncover the truth through methodical scientific principles and advanced technology.
          </motion.p>
        </motion.div>
      </section>

      {/* =========================================
          2. CORE CONSULTANCY SERVICES 
      ========================================= */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-[#00d4ff]/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/5 blur-3xl rounded-full transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#00d4ff]/30 group-hover:bg-[#00d4ff]/10 transition-colors duration-500`}>
                    <service.icon className={`w-8 h-8 text-slate-400 group-hover:text-[#00d4ff] transition-colors`} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">{service.desc}</p>

                  <div className="space-y-3 mt-auto">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl group-hover:border-[#00d4ff]/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-300 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          3. INDUSTRIES WE SERVE 
      ========================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Industries We <span className="text-slate-500">Serve</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Delivering specialized forensic intelligence to sectors where precision and irrefutable evidence are paramount.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          >
            {industries.map((ind, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 px-6 py-3.5 bg-white/[0.02] border border-white/10 rounded-full hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5 transition-all text-slate-300 hover:text-white cursor-default">
                <Briefcase className="w-4 h-4 text-[#00ff88] opacity-70" />
                <span className="font-medium text-sm">{ind}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. THE SKYLINE ADVANTAGE 
      ========================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/3">
              <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase mb-4 block">Our Commitment</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why Choose <span className="text-slate-500">Us?</span></h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                We handle every investigation with the highest degree of ethics, rigorous scientific methodology, and strict confidentiality, ensuring our findings stand up to the most intense forensic scrutiny.
              </p>
              <Link href="https://wa.me/919890424040" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white border border-[#00d4ff]/50 bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 hover:border-[#00d4ff] rounded-full transition-all group">
                Consult an Expert <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {advantages.map((adv, i) => (
                <motion.div key={i} variants={fadeUp} className="p-5 bg-white/[0.015] border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/[0.03] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300">{adv}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
