"use client";

import { motion } from "framer-motion";
import { Users, Linkedin, Mail } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-[#0A1F44] text-slate-300 font-sans selection:bg-[#00E5FF]/30 selection:text-white pt-32 pb-20 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-[20%] right-0 w-[50vw] h-[50vh] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-24">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00E5FF] tracking-widest uppercase mb-6">
            <Users className="w-4 h-4" /> Academic Leadership
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-medium text-white mb-6">
            Our <span className="font-light text-[#00E5FF]">Faculty & Mentors</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Learn from the best. Our team comprises seasoned industry professionals, ethical hackers, and academic leaders dedicated to your success.
          </motion.p>
        </motion.div>

        {/* Director Profile */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-32">
          <div className="bg-[#0D2B60] border border-white/5 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 blur-[100px] pointer-events-none" />
             
             <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full bg-[#0A1F44] border-4 border-[#00E5FF]/20 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Sangeeta Chikhale" className="w-full h-full object-cover" />
             </div>
             
             <div className="relative z-10 text-center md:text-left">
               <div className="text-[#00E5FF] font-bold text-sm tracking-wider uppercase mb-2">Director</div>
               <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Sangeeta Chikhale</h2>
               <p className="text-slate-400 leading-relaxed mb-6">
                 With years of experience in educational leadership and institutional development, Sangeeta Chikhale spearheads Skyline's mission to bridge the cybersecurity skills gap. Under her guidance, Skyline has established robust academic frameworks and strategic partnerships with global entities like EC-Council.
               </p>
               <div className="flex items-center justify-center md:justify-start gap-4">
                 <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00E5FF] hover:text-[#0A1F44] transition-colors">
                   <Linkedin className="w-4 h-4" />
                 </button>
                 <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00E5FF] hover:text-[#0A1F44] transition-colors">
                   <Mail className="w-4 h-4" />
                 </button>
               </div>
             </div>
          </div>
        </motion.section>

        {/* Trainers Grid */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
          <motion.h2 variants={fadeUp} className="text-3xl font-medium text-white mb-10 text-center md:text-left">
             Expert Trainers
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Deshmukh", role: "Lead Offensive Security Trainer", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400" },
              { name: "Priya Sharma", role: "Digital Forensics Expert", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
              { name: "Vikram Patil", role: "SOC & Network Defender", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" }
            ].map((trainer, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 rounded-[2rem] text-center hover:border-[#00E5FF]/30 transition-all group">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-[#00E5FF]/50 transition-colors">
                  <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl text-white font-medium mb-1">{trainer.name}</h3>
                <p className="text-sm text-[#00E5FF] mb-4">{trainer.role}</p>
                <div className="flex items-center justify-center gap-3">
                   <Linkedin className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Advisors Grid */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="text-3xl font-medium text-white mb-10 text-center md:text-left">
             Industry Advisors
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/10 mb-4 animate-pulse" />
                <div className="h-4 bg-white/10 rounded w-2/3 mx-auto mb-2" />
                <div className="h-3 bg-white/5 rounded w-1/2 mx-auto" />
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
