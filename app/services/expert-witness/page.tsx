"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Scale,
  Search,
  CheckCircle2,
  Lock,
  Building2,
  Mail,
  Send,
  Check,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Layers,
  FileText,
  Gavel,
  BookOpen,
  Cpu,
  FileCheck2,
  Users,
  Fingerprint,
  Phone,
  Shield
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ExpertWitnessServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "testimony" | "opinions" | "support">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Legal Firm / Advocate",
    serviceType: "Court Testimony & Sworn Expert Witness",
    caseBrief: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organizationType: "Legal Firm / Advocate",
        serviceType: "Court Testimony & Sworn Expert Witness",
        caseBrief: ""
      });
    }, 1200);
  };

  // 12 Core Expert Witness & Court Testimony Services Offered
  const servicesList = [
    {
      code: "WIT-OP-01",
      title: "Independent Forensic Expert Opinions",
      category: "opinions",
      icon: Scale,
      desc: "Scientific evaluation of physical and digital evidence under Section 45 of the Indian Evidence Act (BSA 2023)."
    },
    {
      code: "WIT-TEST-01",
      title: "Court Testimony & Expert Witness Services",
      category: "testimony",
      icon: Gavel,
      desc: "Providing objective, articulate, and sworn expert witness testimony in Sessions Courts, High Courts, and Tribunals."
    },
    {
      code: "WIT-OP-02",
      title: "Interpretation of Forensic & Scientific Evidence",
      category: "opinions",
      icon: Search,
      desc: "Translating complex technical data, hash logs, chemical reports, and spectrographic charts into clear judicial explanations."
    },
    {
      code: "WIT-SUPP-01",
      title: "Review & Evaluation of Forensic Reports",
      category: "support",
      icon: FileCheck2,
      desc: "Critical second-opinion auditing of opposing laboratory reports, identifying analytical flaws, chain of custody gaps, or procedural errors."
    },
    {
      code: "WIT-OP-03",
      title: "Digital & Cyber Forensic Expert Opinions",
      category: "opinions",
      icon: Cpu,
      desc: "Court-admissible opinions on Section 65B (BSA Sec 63) electronic certificates, disk forensics, mobile extractions, and BEC fraud."
    },
    {
      code: "WIT-OP-04",
      title: "Crime Scene Investigation & Reconstruction Opinions",
      category: "opinions",
      icon: ShieldCheck,
      desc: "Expert opinions on bloodstain pattern dynamics, 3D spatial reconstruction, ballistic trajectory, and physical scene evidence."
    },
    {
      code: "WIT-OP-05",
      title: "Questioned Document & Signature Examination Opinions",
      category: "opinions",
      icon: FileText,
      desc: "Formulating legal opinion certificates on questioned signatures, altered wills, forged cheques, and paper/ink analysis."
    },
    {
      code: "WIT-OP-06",
      title: "Fingerprint & Impression Evidence Interpretation",
      category: "opinions",
      icon: Fingerprint,
      desc: "Evaluating friction ridge minutiae comparisons, footwear casting accuracy, tool mark striations, and latent print validity."
    },
    {
      code: "WIT-OP-07",
      title: "Financial Crime & Fraud Investigation Opinions",
      category: "opinions",
      icon: BookOpen,
      desc: "Expert forensic accounting opinions quantifying embezzlement losses, corporate fraud, tax diversion, and insurance claims."
    },
    {
      code: "WIT-SUPP-02",
      title: "Technical Consultation for Legal Teams",
      category: "support",
      icon: Users,
      desc: "Assisting advocates during pre-trial preparation, drafting cross-examination questions for opposing technical witnesses."
    },
    {
      code: "WIT-TEST-02",
      title: "Arbitration, Tribunal & Regulatory Hearing Support",
      category: "testimony",
      icon: Building2,
      desc: "Delivering expert witness testimony in corporate arbitration tribunals, NCLT hearings, banking ombudsmen, and regulatory panels."
    },
    {
      code: "WIT-SUPP-03",
      title: "Litigation & Case Preparation Assistance",
      category: "support",
      icon: Layers,
      desc: "End-to-end evidence preparation, trial exhibit formatting, technical brief drafting, and legal strategy alignment."
    }
  ];

  // 5-Stage Litigation Support Workflow
  const processSteps = [
    {
      step: "01",
      title: "Initial Case Intake & File Audit",
      desc: "Reviewing court pleadings, police charge sheets, forensic lab reports, and physical/digital evidence parameters.",
      tag: "FILE AUDIT"
    },
    {
      step: "02",
      title: "Independent Scientific Analysis",
      desc: "Conducting unbiased re-examination of evidence, verifying laboratory methodologies, and assessing technical validity.",
      tag: "SCIENTIFIC AUDIT"
    },
    {
      step: "03",
      title: "Sworn Expert Opinion Formulation",
      desc: "Drafting detailed Section 45 opinion certificates complete with annotated visual exhibits and scientific citations.",
      tag: "SEC 45 OPINION"
    },
    {
      step: "04",
      title: "Pre-Trial Briefing & Cross-Exam Strategy",
      desc: "Briefing legal counsel, formulating technical cross-examination lines of questioning, and evaluating rebuttal angles.",
      tag: "LEGAL BRIEFING"
    },
    {
      step: "05",
      title: "Courtroom Sworn Witness Testimony",
      desc: "Delivering clear, objective, and unflappable expert witness testimony under cross-examination in judicial trials.",
      tag: "COURT TESTIMONY"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Section 45 IEA / BSA 2023 Sec 63 Compliance",
      desc: "Our senior forensic experts are qualified under statutory Indian evidence laws to deliver court-admissible expert witness testimony.",
      icon: Scale,
      node: "01 // STATUTORY STANDARDS"
    },
    {
      title: "Articulate & Unshakeable Courtroom Presence",
      desc: "Decades of experience delivering testimony in High Courts, Sessions Courts, NCLT, and arbitration tribunals.",
      icon: Gavel,
      node: "02 // COURTROOM EXPERIENCE"
    },
    {
      title: "Opposing Report Audit & Rebuttal",
      desc: "Identifying analytical errors, unvalidated software usages, or chain-of-custody breaches in opposing laboratory submissions.",
      icon: FileCheck2,
      node: "03 // SECOND OPINION"
    },
    {
      title: "Cross-Examination Advisory for Advocates",
      desc: "Drafting precise, technically grounded cross-examination question sequences for legal teams facing expert witnesses.",
      icon: Users,
      node: "04 // ADVOCATE SUPPORT"
    },
    {
      title: "Uncompromising Integrity & Objectivity",
      desc: "Adhering strictly to scientific neutrality and professional ethics, ensuring absolute credibility before judges and tribunals.",
      icon: Lock,
      node: "05 // UNBIASED INTEGRITY"
    }
  ];

  const filteredServices = activeCategory === "all"
    ? servicesList
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pb-24 overflow-x-hidden relative">

      {/* BACKGROUND GRAPHIC GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* BACKGROUND AMBIENT LIGHTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#00d4ff]/8 rounded-full blur-[220px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-cyan-900/30 z-10">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Expert Witness & Litigation Support Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 filter brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/85 to-[#020617]" />
        </div>

        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent shadow-[0_0_15px_#00d4ff]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <Link href="/services" className="hover:text-[#00d4ff] transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-[#00d4ff] font-bold">Expert Witness & Litigation Support</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-WIT-12</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <Scale className="w-4 h-4 text-[#00d4ff]" /> FORENSIC LITIGATION SUPPORT & COURT WITNESS UNIT
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Expert Witness & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Litigation Support Services</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                In complex criminal, civil, and corporate litigation, scientific evidence interpretation and unshakeable expert testimony can determine case outcomes. Under Section 45 of the Indian Evidence Act (BSA 2023 Sec 63), courts rely on certified forensic experts to evaluate questioned documents, digital artifacts, fingerprint minutiae, and financial records. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we deliver independent Expert Witness &amp; Litigation Support Services, formulating court-admissible opinion reports, auditing opposing lab reports, and providing sworn testimony in High Courts, Sessions Courts, NCLT, and arbitration tribunals.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <Gavel className="w-4 h-4 text-sky-200" />
                  <span>Retain Expert Witness</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#witness-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Scale className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 12 Litigation Services</span>
                </a>
              </motion.div>

            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-900/40 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] relative overflow-hidden group">
                
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-[#0055FF]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#00d4ff] animate-ping" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">LITIGATION UNIT</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    SEC 45 IEA / BSA 63 VALIDATED
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Gavel className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Sworn Courtroom Testimony</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Objective, articulate expert witness testimony in High Courts & Tribunals.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <FileCheck2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Opposing Report Audits</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Second-opinion technical auditing isolating procedural flaws in lab reports.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Users className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Cross-Examination Advisory</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Formulating technical cross-examination lines of questioning for legal counsel.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Scale className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Section 45 Opinion Certificates</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Court-admissible scientific opinion reports with enlarged visual exhibits.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919890424040"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  <span>Call Litigation Support Unit (+91 9890424040)</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 CORE SERVICES OFFERED */}
      {/* ========================================================================= */}
      <section id="witness-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              LITIGATION MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Expert Witness & Litigation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Courtroom sworn testimony, Section 45 expert opinion certificates, second-opinion lab report audits, cross-examination assistance, and arbitration support.
            </p>

            <div className="inline-flex p-1.5 mt-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex-wrap justify-center gap-1.5 shadow-xl">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                All 12 Modules
              </button>
              <button
                onClick={() => setActiveCategory("testimony")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "testimony"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Courtroom Testimony & Arbitration
              </button>
              <button
                onClick={() => setActiveCategory("opinions")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "opinions"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Section 45 Opinion Certificates
              </button>
              <button
                onClick={() => setActiveCategory("support")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "support"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Legal Briefing & Cross-Exam Support
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-7 rounded-3xl bg-slate-950/90 border border-slate-800 hover:border-[#00d4ff]/40 transition-all group flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                      <service.icon className="w-6 h-6 text-[#00d4ff] group-hover:text-slate-950" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#00d4ff] bg-[#00d4ff]/10 px-2.5 py-1 rounded-full border border-[#00d4ff]/20 uppercase">
                      {service.code}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <a
                  href="#consultation-form"
                  className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-[#00d4ff] font-bold group-hover:text-white transition-colors"
                >
                  <span>Request Witness Scope</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00d4ff]" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5-STAGE WORKFLOW */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/60 border-y border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00d4ff]/30">
              Litigation Support Protocol
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Litigation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A structured litigation support workflow ensuring independent evidence evaluation, advocate briefing, and court-admissible testimony.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00d4ff]/50 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 right-0 p-3 text-2xl font-mono font-extrabold text-slate-800 group-hover:text-[#00d4ff]/20 transition-colors">
                  {step.step}
                </div>
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] font-mono font-bold text-xs flex items-center justify-center mb-4 border border-[#00d4ff]/20">
                    {step.step}
                  </div>
                  <h4 className="text-white font-bold text-base mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800">
                  <span className="text-[10px] font-mono font-bold text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded border border-[#00d4ff]/20 uppercase">
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY CHOOSE SKYLINE (5 PILLARS) */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Witness Unit</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Qualified forensic scientists, unshakeable courtroom demeanor, and second-opinion lab report audits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 hover:border-[#00d4ff]/40 transition-all group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-[#00d4ff]/40 group-hover:bg-[#00d4ff]/10 transition-colors">
                      <p.icon className="w-7 h-7 text-slate-300 group-hover:text-[#00d4ff] transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{p.node}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONFIDENTIAL CONSULTATION FORM */}
      {/* ========================================================================= */}
      <section id="consultation-form" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-slate-950/95 border border-[#00d4ff]/40 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent shadow-[0_0_20px_#00d4ff]" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />
            
            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-[#00d4ff]/40 text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Expert Witness Retention
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Retain Expert Witness / Request Legal Advisory
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding pending court trials, tribunal hearings, opposing lab reports, or pre-trial cross-examination briefing needs under strict Non-Disclosure Agreements.
              </p>
            </div>

            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#00d4ff] text-slate-950 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Retention Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline Witness Unit. Our senior forensic experts will review your trial parameters under strict Non-Disclosure Agreements.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Submit Another Retention Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name / Official Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adv. M. S. Wagle / High Court Counsel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. counsel@chamber.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Organization Category
                    </label>
                    <select
                      value={formData.organizationType}
                      onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                    >
                      <option value="Legal Firm / Advocate">Legal Firm / Advocate Chamber</option>
                      <option value="Corporate Enterprise">Corporate Enterprise / In-House Legal</option>
                      <option value="Government / PSU Entity">Government / PSU Entity</option>
                      <option value="Private Litigant">Private Litigant / Client</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Expert Witness Service
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Court Testimony & Sworn Expert Witness">Court Testimony & Sworn Expert Witness</option>
                    <option value="Section 45 IEA / BSA 63 Opinion Certificate">Section 45 IEA / BSA 63 Opinion Certificate</option>
                    <option value="Review & Audit of Opposing Lab Report">Review & Audit of Opposing Lab Report</option>
                    <option value="Pre-Trial Cross-Examination Advisory">Pre-Trial Cross-Examination Advisory for Advocates</option>
                    <option value="Arbitration & NCLT Tribunal Testimony">Arbitration & NCLT Tribunal Testimony</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Trial Details & Case Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="State court forum (e.g. High Court, Sessions Court, NCLT), nature of evidence, upcoming trial/hearing dates, or cross-examination goals..."
                    value={formData.caseBrief}
                    onChange={(e) => setFormData({ ...formData, caseBrief: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-[#00d4ff]/40"
                >
                  {formStatus === "submitting" ? (
                    <span>Processing Retention Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Witness Retention Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Case pleadings, expert disclosures, and legal strategy remain protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
