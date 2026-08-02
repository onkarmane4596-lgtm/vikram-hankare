"use client";

import { motion, Variants } from "framer-motion";
import { Shield, Book, ScrollText, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function PoliciesPage() {
    const academicPolicies = [
        { name: "Academic Policy", desc: "Commitment to quality education, transparency, and continuous improvement." },
        { name: "Code of Conduct", desc: "Ethical and professional behavior expected from all learners and staff." },
        { name: "Privacy Policy", desc: "Protection of personal information and data security practices." },
        { name: "Equal Opportunity Policy", desc: "Inclusive learning environment free from discrimination." },
        { name: "Anti-Ragging Policy", desc: "Zero tolerance toward ragging and harassment." },
        { name: "Intellectual Property Policy", desc: "Guidelines for ownership and use of research and innovation outputs." },
        { name: "Information Security Policy", desc: "Protection of institutional digital assets and information systems." },
        { name: "Refund & Cancellation Policy", desc: "Transparent procedures regarding admissions and fee refunds." },
        { name: "Scholarship Policy", desc: "Eligible students may avail scholarship benefits as per the institute's approved scholarship policy and selection criteria." },
    ];

    const consultancyPolicies = [
        { title: "1. Confidentiality Policy", desc: "All client information, documents, and evidence are handled with the highest level of confidentiality and are not disclosed without proper authorization or legal requirement." },
        { title: "2. Ethics & Integrity Policy", desc: "All examinations and opinions are based solely on scientific findings and professional ethics, free from bias or external influence." },
        { title: "3. Evidence Handling Policy", desc: "All physical and digital evidence is received, documented, stored, and handled using secure chain-of-custody procedures to maintain its integrity." },
        { title: "4. Client Acceptance Policy", desc: "Consultancy services are accepted only after a preliminary review of the case and subject to the availability of adequate information and evidence." },
        { title: "5. Scope of Services Policy", desc: "Skyline provides forensic consultancy, examination, analysis, and expert opinions. Investigative or law enforcement powers are not exercised unless legally authorized." },
        { title: "6. Reporting Policy", desc: "Reports are prepared based on scientific examination and available evidence and are intended for professional, legal, or investigative purposes." },
        { title: "7. Legal Compliance Policy", desc: "All consultancy services are carried out in accordance with applicable laws, regulations, and accepted forensic standards." },
        { title: "8. Data Privacy Policy", desc: "Digital data obtained during examinations is securely stored, protected from unauthorized access, and disposed of according to retention policies." },
        { title: "9. Conflict of Interest Policy", desc: "Skyline reserves the right to decline or withdraw from cases where a conflict of interest may compromise impartiality." },
        { title: "10. Quality Assurance Policy", desc: "Every examination undergoes quality checks to ensure accuracy, consistency, and professional standards." },
        { title: "11. Turnaround Time Policy", desc: "Estimated completion timelines are communicated at the time of engagement and may vary depending on the complexity of the case." },
        { title: "12. Payment Policy", desc: "Consultancy fees are payable as per agreed terms before commencement or according to the approved service agreement." },
        { title: "13. Cancellation & Refund Policy", desc: "Cancellation requests are subject to the terms of engagement. Fees for work already performed are non-refundable." },
        { title: "14. Record Retention Policy", desc: "Case records and reports are retained securely for a specified period in accordance with legal and organizational requirements." },
        { title: "15. Court Appearance Policy", desc: "Expert witness services, affidavits, and court appearances are provided upon request and are subject to separate professional fees and scheduling." },
        { title: "16. Limitation of Opinion Policy", desc: "Expert opinions are based solely on the evidence submitted for examination. Conclusions may change if additional evidence becomes available." },
        { title: "17. Communication Policy", desc: "All official communications, reports, and updates are shared only with authorized clients or their designated representatives." },
        { title: "18. Non-Tampering Policy", desc: "Skyline will not examine evidence that has been intentionally altered, illegally obtained, or presented in violation of applicable laws." },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pt-32 pb-32 overflow-hidden relative">

            {/* BACKGROUND SCENE & HERO BG */}
            <div className="absolute top-0 left-0 right-0 h-[700px] z-0 overflow-hidden pointer-events-none">
                <img
                    src="/hero/hero1.png"
                    alt="Cybersecurity Hero Backdrop"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity object-center"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.2)_0%,_#020617_90%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
            </div>
            <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] bg-[#0055FF]/5 rounded-full blur-[200px] pointer-events-none" />
            <div className="fixed bottom-[0%] right-[-10%] w-[60vw] h-[60vh] bg-[#00d4ff]/5 rounded-full blur-[250px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* HERO */}
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-24">
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-slate-400 tracking-widest uppercase mb-6">
                        <Shield className="w-4 h-4 text-[#00d4ff]" /> Legal & Compliance
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Policies</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Commitment to transparency, ethical operations, and strict adherence to institutional and consulting standards.
                    </motion.p>
                </motion.div>

                {/* 1. ACADEMIC & CAMPUS POLICIES */}
                <motion.section id="academic-policies" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-24 scroll-mt-28">
                    <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                        <Book className="w-8 h-8 text-[#00d4ff]" />
                        <h2 className="text-3xl font-bold text-white">Academic & Campus Policies</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {academicPolicies.map((policy, i) => (
                            <motion.div variants={fadeUp} key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-[#00d4ff]/30 transition-all flex flex-col gap-3 group">
                                <h4 className="text-white font-bold text-lg group-hover:text-[#00d4ff] transition-colors">{policy.name}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{policy.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 2. CONSULTANCY OPERATING GUIDELINES */}
                <motion.section id="consultancy-policies" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="scroll-mt-28">
                    <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                        <ScrollText className="w-8 h-8 text-[#00d4ff]" />
                        <h2 className="text-3xl font-bold text-white">Skyline Consultancy Policies</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 bg-white/[0.015] p-8 md:p-12 rounded-3xl border border-white/5">
                        {consultancyPolicies.map((cp, j) => (
                            <motion.div variants={fadeUp} key={j} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                                <CheckCircle2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold text-md mb-2">{cp.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{cp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
