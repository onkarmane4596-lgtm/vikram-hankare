"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, FileText, Video, Server, GraduationCap, ShieldCheck, Download, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ResourcesPage() {
    const learningResources = [
        { title: "Blogs & Threat Intelligence", icon: FileText, desc: "Articles, how-to guides, and latest cyber threat breakdowns.", badge: "Reading" },
        { title: "Open-Source Forensic Tools", icon: Server, desc: "A curated list of validated community tools recommended by Skyline.", badge: "Downloads" },
        { title: "Masterclass Webinars", icon: Video, desc: "Free recorded sessions and deep dives with industry experts.", badge: "Video" },
    ];

    const awarenessChecklists = [
        "Personal Digital Security Checklist",
        "Corporate Email Phishing Defense",
        "Secure Password Management Guide",
        "Safe Web Browsing & VPN Usage",
        "Social Engineering Attack Mitigation",
        "Mobile Device Forensic Hardening"
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white pt-32 pb-32 overflow-hidden relative">

            {/* BACKGROUND ELEMENTS */}
            <div className="fixed top-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#0055FF]/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* =========================================
            1. HERO SECTION 
        ========================================= */}
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-24">
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-sm font-bold text-[#00d4ff] tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                        <BookOpen className="w-4 h-4" /> Knowledge Base
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">Resources</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Leading the industry with thought leadership. Access our comprehensive library of research papers, forensic toolboxes, and community awareness guides.
                    </motion.p>
                </motion.div>

                {/* =========================================
            2. RESEARCH PUBLICATIONS (Featured)
        ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
                    <motion.div variants={fadeUp} className="bg-gradient-to-br from-white/[0.03] to-[#020617] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0055FF]/10 blur-[100px] pointer-events-none" />
                        <div className="flex items-center justify-between mb-8 relative z-10">
                            <h2 className="text-3xl font-bold text-white">Research Publications</h2>
                            <GraduationCap className="w-10 h-10 text-slate-500 opacity-50" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            <div>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Explore Skyline's latest case studies, whitepapers, and academic publications on advanced digital forensics, threat intelligence matrices, and vulnerability frameworks.
                                </p>
                                <div className="flex gap-4">
                                    <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium text-white transition-colors flex items-center gap-2">
                                        Browse Papers <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-[#020617] border border-white/5 rounded-2xl p-6 shadow-inner">
                                <div className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-3">Latest Release</div>
                                <h4 className="text-white font-medium text-lg mb-2">Analyzing Memory Architectures for Zero-Day Threats</h4>
                                <p className="text-sm text-slate-500 mb-4">Published: Jan 2026 • Journal of Advanced Forensics</p>
                                <Link href="#" className="text-sm font-bold text-brand-blue flex items-center gap-1 hover:text-white transition-colors">
                                    Read Abstract <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* =========================================
            3. LEARNING RESOURCES 
        ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32">
                    <h2 className="text-3xl font-bold text-white mb-10 border-b border-white/10 pb-6">Learning Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {learningResources.map((res, i) => (
                            <motion.div variants={fadeUp} key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-brand-blue/30 transition-all flex flex-col items-start group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                                    <res.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-blue" />
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 border border-white/10 px-2 py-1 rounded-md">{res.badge}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{res.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{res.desc}</p>
                                <button className="text-brand-blue font-bold text-sm flex items-center gap-2 group-hover:text-white transition-colors">
                                    Explore <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* =========================================
            4. CYBER AWARENESS PORTAL 
        ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className="flex flex-col md:flex-row bg-[#020617] border border-white/10 rounded-[2rem] overflow-hidden">
                        <div className="md:w-2/5 p-10 md:p-12 bg-white/[0.02] relative">
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00ff88] to-[#00d4ff]"></div>
                            <ShieldCheck className="w-10 h-10 text-[#00ff88] mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4">Cyber Awareness Portal</h2>
                            <p className="text-slate-400 leading-relaxed">
                                Public defense begins with awareness. Download our free, expertly curated checklists designed to defend individuals and enterprises against day-to-day threats.
                            </p>
                        </div>

                        <div className="md:w-3/5 p-10 md:p-12">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {awarenessChecklists.map((chk, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors group cursor-pointer">
                                        <span className="text-sm font-medium text-slate-300">{chk}</span>
                                        <Download className="w-4 h-4 text-slate-500 group-hover:text-[#00ff88]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
