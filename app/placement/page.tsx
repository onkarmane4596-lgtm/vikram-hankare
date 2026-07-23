"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Target, Users, Shield, BookOpen, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function PlacementPage() {
    const hiringSectors = [
        "Law Enforcement Agencies",
        "IT & ITES Companies",
        "Cyber Defense Centers",
        "Banking & Finance Sector",
        "E-commerce Platforms",
        "Cyber Crime Cells",
        "Forensic Science Laboratories",
        "Govt. & Defense Organizations",
        "Compliance & Auditing Firms",
        "Independent Security Consultancies"
    ];

    const careerRoles = [
        { title: "Penetration Tester", icon: Target, desc: "Ethically probe networks and systems to find and fix vulnerabilities." },
        { title: "SOC Analyst", icon: Shield, desc: "Monitor networks continuously to detect, analyze, and respond to incidents." },
        { title: "Digital Forensic Investigator", icon: Briefcase, desc: "Recover and investigate material found in digital devices for legal cases." },
        { title: "Cyber Security Consultant", icon: Users, desc: "Advise organizations on securing their infrastructure and achieving compliance." },
        { title: "Network Security Engineer", icon: Building2, desc: "Design and implement secure network architectures." },
        { title: "Incident Responder", icon: BookOpen, desc: "First responders in mitigating and containing active cyber breaches." }
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pt-32 pb-32 overflow-hidden relative">

            {/* BACKGROUND ELEMENTS */}
            <div className="fixed top-[0%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none" />
            <div className="fixed bottom-[10%] left-[-10%] w-[50vw] h-[50vh] bg-[#0055FF]/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* =========================================
            1. HERO SECTION 
        ========================================= */}
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-24">
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#0055FF]/10 border border-[#0055FF]/30 text-sm font-bold text-[#00d4ff] tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,85,255,0.2)]">
                        <GraduationCap className="w-5 h-5 text-[#00d4ff]" /> Career Support
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                        Launch Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">Cyber Career</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive placement and career support system designed to bridge the gap between academic capability and enterprise opportunity. We ensure you are industry-ready.
                    </motion.p>
                </motion.div>

                {/* =========================================
            2. THE PLACEMENT APPROACH 
        ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Placement Approach</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Dedicated Placement Cell", desc: "A proactive team connecting students with top cyber security and forensic organizations." },
                            { step: "2", title: "Industry Mentorship", desc: "Expert guidance on career pathways, specializations, and industry expectations." },
                            { step: "3", title: "Resume Building & Mock Interviews", desc: "Preparation for technical interviews and professional representation." },
                            { step: "4", title: "Internship Opportunities", desc: "Access to practical, hands-on exposure to build robust working experience." }
                        ].map((item, i) => (
                            <motion.div variants={fadeUp} key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-[#00d4ff]/30 transition-colors relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/5 blur-3xl transition-colors pointer-events-none"></div>
                                <div className="text-6xl font-black text-white/[0.03] absolute top-4 right-6 group-hover:text-white/[0.05] transition-colors">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* =========================================
            3. KEY CAREER ROLES 
        ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Career <span className="text-slate-500">Roles</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Explore high-demand roles that our certifications prepare you for.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {careerRoles.map((role, i) => (
                            <motion.div variants={fadeUp} key={i} className="flex gap-4 p-6 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                                    <role.icon className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">{role.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{role.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* =========================================
            4. HIRING SECTORS 
        ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className="bg-[#020617] border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center shadow-2xl">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00ff88]/5 blur-[150px] pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 relative z-10">Where Our Alumni Serve</h2>

                        <div className="flex flex-wrap justify-center gap-4 relative z-10">
                            {hiringSectors.map((sector, i) => (
                                <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/20 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-[#00ff88] opacity-70" />
                                    <span className="text-slate-300 font-medium text-sm">{sector}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center relative z-10">
                            <Link href="/contact" className="inline-flex px-8 py-4 bg-[#00d4ff] hover:bg-white text-[#020617] font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                                Inquire About Placements
                            </Link>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
