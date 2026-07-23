"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A1F44] text-slate-300 font-sans selection:bg-[#00E5FF]/30 selection:text-white pt-32 pb-20 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vh] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-24">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-[#00E5FF] tracking-widest uppercase mb-6">
            Get in touch
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-medium text-white mb-6">
            Contact <span className="font-light text-[#00E5FF]">Skyline</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have questions about our cyber security programs or consultancy services? We're here to help. Reach out to us.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Map */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-6">
               <motion.div variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 rounded-3xl">
                 <MapPin className="w-8 h-8 text-[#00E5FF] mb-6" />
                 <h3 className="text-white font-medium text-lg mb-2">Visit Campus</h3>
                 <p className="text-sm text-slate-400">Satara, Maharashtra, India<br/>(Under Chatrapati Shahu Maharaj Sevabhavi Sanstha)</p>
               </motion.div>

               <motion.div variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 rounded-3xl">
                 <Mail className="w-8 h-8 text-[#00E5FF] mb-6" />
                 <h3 className="text-white font-medium text-lg mb-2">Email Us</h3>
                 <p className="text-sm text-slate-400">admissions@skylinecyber.edu.in<br/>info@skylinecyber.edu.in</p>
               </motion.div>

               <motion.div variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 rounded-3xl sm:col-span-2">
                 <Phone className="w-8 h-8 text-[#00E5FF] mb-6" />
                 <h3 className="text-white font-medium text-lg mb-2">Call Us</h3>
                 <p className="text-sm text-slate-400">+91 XXXXX XXXXX<br/>Mon-Sat, 9:00 AM - 6:00 PM</p>
               </motion.div>
            </div>

            {/* Embedded Map */}
            <motion.div variants={fadeUp} className="w-full h-64 bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm">
                  [Google Map Embedded View for Satara, Maharashtra]
               </div>
               {/* Actual map iframe can be placed here once specific coordinates are provided */}
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-[#0D2B60] border border-white/5 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 blur-[100px] pointer-events-none" />
             
             <h2 className="text-2xl font-medium text-white mb-8">Send us a Message</h2>
             <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-[#0A1F44] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Email</label>
                  <input type="email" className="w-full bg-[#0A1F44] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-[#0A1F44] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white font-bold hover:bg-[#00E5FF] hover:border-[#00E5FF] hover:text-[#0A1F44] transition-all flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
             </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
