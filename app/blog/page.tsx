"use client";

import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const posts = [
  { category: "Cyber Awareness", title: "10 Most Common Phishing Tactics in 2024", date: "Oct 15, 2024", author: "Skyline Research", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" },
  { category: "News Update", title: "Skyline Partners with Global Security Firm for Placements", date: "Oct 10, 2024", author: "Admin", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
  { category: "Student Achievement", title: "Batch 4 Student Discovers Zero-Day Vulnerability", date: "Oct 05, 2024", author: "Faculty", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" },
  { category: "Event", title: "Upcoming Webinar: State of Digital Forensics", date: "Sep 28, 2024", author: "Admin", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600" },
  { category: "Cyber Awareness", title: "Securing Your Remote Workforce: Best Practices", date: "Sep 20, 2024", author: "Skyline Research", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600" },
  { category: "Student Achievement", title: "100% Placement Record for Advanced Diploma Batch", date: "Sep 15, 2024", author: "Admin", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A1F44] text-slate-300 font-sans selection:bg-[#00E5FF]/30 selection:text-white pt-32 pb-20 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-[20%] left-0 w-[50vw] h-[50vh] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-24">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-[#00E5FF] tracking-widest uppercase mb-6">
            <Newspaper className="w-4 h-4" /> Media & Insights
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-medium text-white mb-6">
            Skyline <span className="font-light text-[#00E5FF]">Updates</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stay updated with the latest in cyber security awareness, institutional news, and student achievements.
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#0D2B60] border border-white/5 rounded-3xl overflow-hidden hover:border-[#00E5FF]/30 transition-all group flex flex-col h-full">
              
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-[#0A1F44]/90 backdrop-blur-md border border-white/10 text-xs font-bold text-[#00E5FF] px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl text-white font-medium mb-4 group-hover:text-[#00E5FF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </div>
                </div>

                <div className="flex items-center text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors cursor-pointer w-max">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
