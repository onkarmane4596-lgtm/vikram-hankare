"use client";

import { motion, Variants } from "framer-motion";
import { 
    Briefcase, Target, Users, Shield, BookOpen, GraduationCap, Building2, CheckCircle2, 
    Compass, FileText, Linkedin, MessageSquare, Bell, Info, Sparkles, ChevronRight, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function PlacementPage() {
    const placementServices = [
        {
            title: "Personalized Career Counselling",
            desc: "One-on-one sessions to map your career goals, evaluate skill sets, and align with high-growth cybersecurity pathways.",
            icon: Compass,
            badge: "Guidance"
        },
        {
            title: "Resume & CV Building Assistance",
            desc: "Tailored resume drafting and ATS-friendly optimization highlighting technical competencies, certifications, and forensic labs.",
            icon: FileText,
            badge: "Branding"
        },
        {
            title: "LinkedIn Profile Optimization",
            desc: "Strategic personal branding, keyword optimization, and summary crafting to capture recruiter attention in the cyber sector.",
            icon: Linkedin,
            badge: "Visibility"
        },
        {
            title: "Mock Interviews",
            desc: "Rigorous technical and HR mock interview sessions with industry veterans to build confidence and refine responses.",
            icon: MessageSquare,
            badge: "Practice"
        },
        {
            title: "Aptitude & Interview Preparation",
            desc: "Comprehensive prep covering logical reasoning, quantitative aptitude, core domain fundamentals, and scenario tests.",
            icon: Target,
            badge: "Preparation"
        },
        {
            title: "Soft Skills & Communication Training",
            desc: "Empowering students with executive presentation skills, corporate etiquette, business communication, and teamwork skills.",
            icon: Users,
            badge: "Soft Skills"
        },
        {
            title: "Industry-Specific Career Mentoring",
            desc: "Direct mentorship from practicing cyber security leaders, incident responders, and forensic investigators.",
            icon: Briefcase,
            badge: "Mentorship"
        },
        {
            title: "Internship & Project Guidance",
            desc: "Hands-on mentorship on live cyber security projects, case studies, and corporate internship placements.",
            icon: BookOpen,
            badge: "Hands-on"
        },
        {
            title: "Job Opportunity Notifications",
            desc: "Real-time job alerts, corporate hiring drives, and exclusive vacancy updates from our hiring partner network.",
            icon: Bell,
            badge: "Alerts"
        },
        {
            title: "Post-Certification Career Support",
            desc: "Ongoing career counseling, alumni network access, and continuous professional growth guidance after certification.",
            icon: GraduationCap,
            badge: "Continuous"
        }
    ];

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

            {/* BACKGROUND ELEMENTS & HERO BG */}
            <div className="absolute top-0 left-0 right-0 h-[700px] z-0 overflow-hidden pointer-events-none">
                <img
                    src="/hero/hero1.png"
                    alt="Cybersecurity Hero Backdrop"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity object-center"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.2)_0%,_#020617_90%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
            </div>
            <div className="fixed top-[0%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none" />
            <div className="fixed bottom-[10%] left-[-10%] w-[50vw] h-[50vh] bg-[#0055FF]/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* =========================================
                    1. HERO SECTION 
                ========================================= */}
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-20">
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#0055FF]/10 border border-[#0055FF]/30 text-sm font-bold text-[#00d4ff] tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,85,255,0.2)]">
                        <GraduationCap className="w-5 h-5 text-[#00d4ff]" /> Career Ecosystem
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                        Placement & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Career Support</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive placement and career support system designed to bridge the gap between academic capability and enterprise opportunity. We ensure you are industry-ready at every stage.
                    </motion.p>
                </motion.div>

                {/* =========================================
                    2. 10 CORE PLACEMENT & CAREER SUPPORT SERVICES
                ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold text-[#00d4ff] tracking-widest uppercase mb-4">
                            <Sparkles className="w-4 h-4 text-[#00d4ff]" /> Complete Support Suite
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Placement Services</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Personalized guidance, skill development, and active recruitment support for every student.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {placementServices.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div 
                                    variants={fadeUp} 
                                    key={i} 
                                    className="bg-slate-900/60 border border-slate-800/80 hover:border-[#00d4ff]/40 p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-full blur-2xl group-hover:bg-[#00d4ff]/15 transition-all pointer-events-none" />
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0055FF]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] group-hover:bg-[#00d4ff] group-hover:text-[#020617] transition-all shadow-[0_0_20px_rgba(0,212,255,0.15)]">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                                                {service.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            {service.desc}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#00d4ff]">
                                        <span>Industry Focused</span>
                                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* =========================================
                    3. THE PLACEMENT APPROACH 
                ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Placement Approach</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Dedicated Placement Cell", desc: "A proactive team connecting students with top cyber security and forensic organizations." },
                            { step: "2", title: "Industry Mentorship", desc: "Expert guidance on career pathways, specializations, and industry expectations." },
                            { step: "3", title: "Resume & Mock Preparation", desc: "Rigorous preparation for technical interviews and professional representation." },
                            { step: "4", title: "Internship Opportunities", desc: "Access to practical, hands-on exposure to build robust working experience." }
                        ].map((item, i) => (
                            <motion.div variants={fadeUp} key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-[#00d4ff]/30 transition-colors relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/5 blur-3xl transition-colors pointer-events-none" />
                                <div className="text-6xl font-black text-white/[0.03] absolute top-4 right-6 group-hover:text-white/[0.05] transition-colors">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* =========================================
                    4. KEY CAREER ROLES 
                ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Career <span className="text-slate-500">Roles</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Explore high-demand roles that our training programs and certifications prepare you for.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {careerRoles.map((role, i) => (
                            <motion.div variants={fadeUp} key={i} className="flex gap-4 p-6 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                                    <role.icon className="w-6 h-6 text-[#00d4ff]" />
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
                    5. HIRING SECTORS & DISCLAIMER NOTICE
                ========================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className="bg-[#020617] border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center shadow-2xl">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00d4ff]/5 blur-[150px] pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 relative z-10">Where Our Alumni Serve</h2>

                        <div className="flex flex-wrap justify-center gap-4 relative z-10 mb-12">
                            {hiringSectors.map((sector, i) => (
                                <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/20 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-[#00d4ff] opacity-70" />
                                    <span className="text-slate-300 font-medium text-sm">{sector}</span>
                                </div>
                            ))}
                        </div>

                        {/* OFFICIAL DISCLAIMER BOX */}
                        <div className="relative z-10 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200/90 text-sm flex flex-col md:flex-row items-center md:items-start gap-4 text-left shadow-lg">
                            <Info className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-amber-300 text-base mb-1.5 uppercase tracking-wide">Placement Policy Disclaimer</h4>
                                <p className="leading-relaxed text-amber-100/90 font-medium">
                                    Skyline provides placement guidance and assistance; final hiring decisions are made solely by the recruiting organization based on its selection criteria.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center relative z-10">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d4ff] hover:bg-white text-[#020617] font-bold rounded-xl transition-all shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)]">
                                <span>Inquire About Placements</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}

