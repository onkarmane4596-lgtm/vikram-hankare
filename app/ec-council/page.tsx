"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Target, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const benefits = [
  { title: "Global Certifications", icon: Award, desc: "Earn credentials recognized by employers and governments worldwide, including the US Department of Defense." },
  { title: "Industry-Recognized Curriculum", icon: ShieldCheck, desc: "Study materials and syllabi that are constantly updated to reflect the latest threat vectors and defensive technologies." },
  { title: "Hands-on Training", icon: Target, desc: "Learn by doing. Our EC-Council programs include rigorous practical labs (iLabs) to build real-world muscle memory." },
  { title: "Career-Focused Programs", icon: Briefcase, desc: "Structured pathways designed to take you from a novice to an employable SOC Analyst, Ethical Hacker, or Forensics Investigator." }
];

export default function ECCouncilPage() {
  return (
    <div className="min-h-screen bg-[#0A1F44] text-slate-300 font-sans selection:bg-[#00E5FF]/30 selection:text-white pt-32 pb-20 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center text-center mb-24">
          <motion.div variants={fadeUp} className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-[0_0_50px_rgba(255,255,255,0.1)] mb-8">
             {/* Placeholder for EC-Council Logo */}
             <span className="text-[#0A1F44] font-black text-xl">EC-C</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-medium text-white mb-6">
            Authorized <span className="font-light text-[#00E5FF]">Training Center</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
            Skyline is proud to be associated with <strong>EC-Council</strong> (Proposed), a globally recognized cybersecurity certification body. This partnership ensures our students receive the highest standard of information security education.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-6 mb-24">
          {benefits.map((benefit, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 rounded-[2rem] flex items-start gap-6 hover:border-[#00E5FF]/30 transition-all">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <div>
                <h3 className="text-xl text-white font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-r from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/20 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-medium text-white mb-2">Ready to earn your global certification?</h2>
            <p className="text-slate-400">Explore our EC-Council aligned programs and start your journey today.</p>
          </div>
          <Link href="/programs" className="inline-flex items-center justify-center bg-[#00E5FF] text-[#0A1F44] hover:bg-white shrink-0 px-8 py-4 rounded-full text-sm font-bold transition-all">
            View Programs <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
