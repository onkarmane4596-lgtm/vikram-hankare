"use client";

import { motion } from "framer-motion";
import { Server, Monitor, Shield, Zap, Wifi, Video, CheckCircle2 } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const specs = [
  { title: "Advanced Computer Lab", icon: Monitor, desc: "State-of-the-art 30-seat laboratory equipped with high-performance workstations for rigorous penetration testing and analysis." },
  { title: "Digital Forensics Lab", icon: Search, desc: "Dedicated forensic environment with industry-standard write-blockers, imaging tools, and investigation software." },
  { title: "Isolated Sandbox", icon: Shield, desc: "Safely execute malware and simulate advanced cyber attacks in a 100% physically and logically isolated network environment." },
  { title: "High-Speed Network", icon: Wifi, desc: "Enterprise-grade routing and switching infrastructure with dedicated high-bandwidth leased lines for uninterrupted operations." },
  { title: "Smart Classrooms", icon: Video, desc: "Interactive learning environments featuring LED smart boards, high-definition projectors, and hybrid learning capabilities." },
  { title: "Server Simulation Setup", icon: Server, desc: "Live racks containing Windows, Linux, and custom vulnerable machines to practice network pivoting and exploitation." }
];

const gallery = [
  { title: "Lab Setup", src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" },
  { title: "Smart Classroom", src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" },
  { title: "Reception Area", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
  { title: "Director Cabin", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" }
];

// Quick polyfill
import { Search } from "lucide-react";

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-[#0A1F44] text-slate-300 font-sans selection:bg-[#00E5FF]/30 selection:text-white pt-32 pb-20 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-[20%] left-0 w-[50vw] h-[50vh] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-24">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00E5FF] tracking-widest uppercase mb-6">
            <Server className="w-4 h-4" /> 1500 Sq. Ft. Facility
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-medium text-white mb-6">
            World-Class <span className="font-light text-[#00E5FF]">Infrastructure</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Skyline offers a dedicated cyber training facility equipped with enterprise-grade hardware to provide an immersive, hands-on learning experience.
          </motion.p>
        </motion.div>

        {/* Specs Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {specs.map((spec, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 rounded-[2rem] hover:border-[#00E5FF]/30 transition-all group">
              <spec.icon className="w-8 h-8 text-[#00E5FF] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg text-white font-medium mb-3">{spec.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="text-3xl font-medium text-white mb-10 text-center">
             Campus Gallery
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
             {gallery.map((img, i) => (
               <motion.div key={i} variants={fadeUp} className="relative aspect-video rounded-[2rem] overflow-hidden group border border-white/10">
                 <div className="absolute inset-0 bg-[#0A1F44]/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
                 <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-[#0A1F44]/80 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {img.title}
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
