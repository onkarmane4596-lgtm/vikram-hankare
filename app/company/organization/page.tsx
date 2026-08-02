"use client";

import { motion, Variants } from "framer-motion";
import {
  Building2, Shield, Server, Search, Fingerprint, FileText, Target, Lightbulb,
  Presentation, Users, Library, CheckCircle2, Lock, FileCheck, Award, ArrowRight,
  Globe, Briefcase, ChevronRight, Zap, Scale, HeartHandshake
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function OrganizationPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden">
      {/* HEADER SECTION */}
      <section className="relative w-full flex items-center justify-center pt-32 sm:pt-40 pb-12 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/hero/hero1.png"
            alt="Organization Infrastructure Backdrop"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-25 mix-blend-luminosity object-center"
          />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.3)_0%,_#020617_95%)]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-slate-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.15)]"
          >
            <Building2 className="w-4 h-4 text-sky-400" />
            <span>Institutional Architecture & Governance</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-tight text-white"
          >
            Organization & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]">Infrastructure</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore Skyline&apos;s state-of-the-art laboratory facilities, institutional compliance policies, consultancy framework, and strategic MoUs.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* SECTION 1: FACILITIES & INFRASTRUCTURE (ID: facilities, infrastructure) */}
        {/* ========================================================================= */}
        <section id="facilities" className="py-16 border-t border-slate-800/80 scroll-mt-28 relative">
          <div id="infrastructure" className="scroll-mt-28" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Server className="w-3.5 h-3.5" /> Submenu 01
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Facilities & Labs</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Our 1,500 sq. ft. dedicated cyber facility features specialized laboratories designed for live attack-and-defense ranges, evidence examination, and R&D.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Cyber Security Laboratory", desc: "Advanced 30-seat infrastructure for penetration testing, malware analysis, vulnerability assessment, and live attack simulation.", type: "ETHICAL HACKING", icon: Server },
              { name: "Digital Forensics Laboratory", desc: "Dedicated investigation workstation suite with FTK, Autopsy, Volatility, EnCase, write-blockers, and evidence imaging tools.", type: "DIGITAL INVESTIGATIONS", icon: Search },
              { name: "Forensic Fingerprint Examination Lab", desc: "Specialized lab for latent fingerprint development, powdering, chemical processing, comparison, and AFIS database matching.", type: "PHYSICAL FORENSICS", icon: Fingerprint },
              { name: "Forensic Document Examination Lab", desc: "Advanced optical verification setup for detecting handwriting forgery, ink analysis, document tampering, and currency inspection.", type: "DOCUMENT FORENSICS", icon: FileText },
              { name: "Cyber Range & Sandbox Centre", desc: "Safely execute live malware strains and simulate enterprise breach scenarios in a logically isolated sandbox network.", type: "ATTACK/DEFENSE RANGE", icon: Target },
              { name: "Research & Innovation Cell", desc: "Dedicated R&D hub developing proprietary threat intelligence frameworks, security tools, and open-source intelligence.", type: "R&D ECOSYSTEM", icon: Lightbulb },
              { name: "Smart Classrooms", desc: "Interactive smart classrooms featuring LED interactive touchboards, high-definition projection, and hybrid online streaming.", type: "SMART LEARNING", icon: Presentation },
              { name: "Conference & Executive Hall", desc: "Professional executive environment for law enforcement seminars, corporate workshops, and guest lectures.", type: "EXECUTIVE HALL", icon: Users },
              { name: "Digital Security Library", desc: "Comprehensive repository of cybersecurity textbooks, research journals, EC-Council lab manuals, and legal case studies.", type: "KNOWLEDGE REPOSITORY", icon: Library }
            ].map((facility, i) => {
              const IconComp = facility.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 shadow-xl shadow-black/40 group hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#38BDF8] before:to-transparent"
                >
                  <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#38BDF8] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/20 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0 shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-slate-950/80 text-slate-300 border border-slate-800 uppercase">
                        {facility.type}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span>Operational Facility</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: POLICIES (ID: policies) */}
        {/* ========================================================================= */}
        <section id="policies" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Lock className="w-3.5 h-3.5" /> Submenu 02
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Academic & Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Policies</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Our operational guidelines ensure strict adherence to ethical standards, quality education, and campus safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Academic Policy", desc: "Commitment to quality education, transparency, and continuous improvement." },
              { name: "Code of Conduct", desc: "Ethical and professional behavior expected from all learners and staff." },
              { name: "Privacy Policy", desc: "Protection of personal information and data security practices." },
              { name: "Equal Opportunity Policy", desc: "Inclusive learning environment free from discrimination." },
              { name: "Anti-Ragging Policy", desc: "Zero tolerance toward ragging and harassment." },
              { name: "Intellectual Property Policy", desc: "Guidelines for ownership and use of research and innovation outputs." },
              { name: "Information Security Policy", desc: "Protection of institutional digital assets and information systems." },
              { name: "Refund & Cancellation Policy", desc: "Transparent procedures regarding admissions and fee refunds." },
              { name: "Scholarship Policy", desc: "Eligible students may avail scholarship benefits as per the institute's approved scholarship policy and selection criteria." },
            ].map((policy, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-slate-900/70 border border-slate-800 hover:border-[#38BDF8]/50 p-6 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">{policy.name}</h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed font-normal">{policy.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: CONSULTANCY POLICIES (ID: consultancy-policies) */}
        {/* ========================================================================= */}
        <section id="consultancy-policies" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Briefcase className="w-3.5 h-3.5" /> Submenu 03
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Skyline Consultancy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Policies</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Guidelines governing our professional forensic examination, consultancy, and client interactions.
            </p>
          </motion.div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              {[
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
              ].map((cp, j) => (
                <div key={j} className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{cp.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{cp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: MOUS & PARTNERSHIPS (ID: mous) */}
        {/* ========================================================================= */}
        <section id="mous" className="py-20 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <HeartHandshake className="w-3.5 h-3.5" /> Submenu 04
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              MoUs & Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Alliances</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Institutional MoUs and collaborative partnerships strengthening our academic, technical, and placement ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "EC-Council Authorized Partner", desc: "Official Accredited Training Center (ATC) partnership delivering global certifications including CEH v13, CHFI, CND, and CPENT.", partner: "Global Certification", icon: Award },
              { title: "Law Enforcement Alliances", desc: "Strategic collaboration with police academies, cyber cells, and investigation departments for capacity building and training.", partner: "Government & Law", icon: Shield },
              { title: "University Academic MoUs", desc: "Joint academic collaborations, faculty development programs (FDP), and student credit courses with leading technical universities.", partner: "Higher Education", icon: Globe },
              { title: "Enterprise Hiring MoUs", desc: "Corporate recruitment MoUs with cybersecurity firms, SOC operations providers, and IT enterprises for direct candidate placement.", partner: "Industry Recruitment", icon: Briefcase }
            ].map((mou, idx) => {
              const IconComp = mou.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800 hover:border-[#38BDF8]/60 p-6 rounded-3xl backdrop-blur-sm transition-all duration-300 shadow-xl group hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/20 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 text-[#38BDF8] border border-slate-800">
                        {mou.partner}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">{mou.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{mou.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#38BDF8]">
                    <span>Active Partnership</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
