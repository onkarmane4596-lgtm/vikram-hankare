"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Search,
  ShieldAlert,
  Lock,
  FileCheck2,
  FileText,
  Terminal,
  Activity,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building2,
  Cpu,
  Mail,
  User,
  Phone,
  Send,
  Check,
  Layers,
  Database,
  Smartphone,
  HardDrive,
  AlertTriangle,
  Scale,
  CreditCard,
  UserX,
  FileCode,
  Shield,
  Radio,
  Siren,
  Zap
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

export default function CybercrimeInvestigationServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "financial" | "digital" | "misconduct">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise",
    investigationType: "Financial & Banking Fraud",
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
        organizationType: "Corporate Enterprise",
        investigationType: "Financial & Banking Fraud",
        caseBrief: ""
      });
    }, 1200);
  };

  // 10 Core Services Offered
  const servicesList = [
    {
      code: "CRIME-FIN-01",
      title: "Financial & Online Banking Fraud Investigations",
      category: "financial",
      icon: CreditCard,
      desc: "Tracing unauthorized fund transfers, banking trojans, UPI/ACH debits, payment gateway exploits, and card fraud."
    },
    {
      code: "CRIME-DIG-01",
      title: "Phishing, Email & Social Engineering Investigations",
      category: "digital",
      icon: Mail,
      desc: "Analyzing spear-phishing campaigns, Business Email Compromise (BEC), email header tracing, and malicious domain spoofing."
    },
    {
      code: "CRIME-DIG-02",
      title: "Ransomware & Malware Investigations",
      category: "digital",
      icon: FileCode,
      desc: "Extracting malware payloads, patient-zero entry analysis, reverse engineering binaries, and C2 server identification."
    },
    {
      code: "CRIME-DIG-03",
      title: "Data Breach & Unauthorized Access Investigations",
      category: "digital",
      icon: Database,
      desc: "Determining breach scope, exfiltrated dataset analysis, database compromise auditing, and log access parsing."
    },
    {
      code: "CRIME-FIN-02",
      title: "Identity Theft & Online Fraud Investigations",
      category: "financial",
      icon: UserX,
      desc: "Investigating SIM swap fraud, credential harvesting, synthetic identity creation, impersonation, and account takeovers."
    },
    {
      code: "CRIME-MISC-01",
      title: "Insider Threat & Employee Misconduct Investigations",
      category: "misconduct",
      icon: User,
      desc: "Auditing unauthorized IP exfiltration, covert file transfers prior to resignation, and rogue administrative actions."
    },
    {
      code: "CRIME-MISC-02",
      title: "Social Media & Online Harassment Investigations",
      category: "misconduct",
      icon: AlertTriangle,
      desc: "Tracing fake profile creators, cyberbullying, online defamation, extortion, and digital footprint attribution."
    },
    {
      code: "CRIME-DIG-04",
      title: "Mobile Device & Computer Forensics",
      category: "digital",
      icon: Smartphone,
      desc: "Physical and logical extractions from iOS, Android, Windows, macOS, and Linux hardware with unallocated space carving."
    },
    {
      code: "CRIME-DIG-05",
      title: "Digital Evidence Collection & Preservation",
      category: "digital",
      icon: Lock,
      desc: "ISO-compliant bitstream imaging, write-blocked isolation, SHA-256 cryptographic hashing, and chain-of-custody logging."
    },
    {
      code: "CRIME-MISC-03",
      title: "Cyber Incident Analysis & Expert Consultation",
      category: "misconduct",
      icon: Scale,
      desc: "Formulating court-admissible forensic reports, technical briefs for law enforcement, and Section 65B expert testimony."
    }
  ];

  // 5-Stage Investigation Process
  const investigationSteps = [
    {
      step: "01",
      title: "Incident Intake & Triage",
      desc: "Immediate consultation, assessing the nature of the cybercrime, establishing security perimeters, and preserving volatile evidence.",
      tag: "RAPID INTAKE"
    },
    {
      step: "02",
      title: "Forensic Acquisition & Isolation",
      desc: "Write-blocked imaging of digital devices, memory dumps, cloud data harvesting, and tamper-evident chain of custody logging.",
      tag: "EVIDENCE ISOLATION"
    },
    {
      step: "03",
      title: "Deep Technical Analysis",
      desc: "Microscopic artifact parsing, IP header tracing, transaction log tracking, deleted data carving, and timeline reconstruction.",
      tag: "DIGITAL ATTRIBUTION"
    },
    {
      step: "04",
      title: "Evidence Correlation & Attribution",
      desc: "Synthesizing cross-platform logs to identify threat actors, entry vectors, exfiltration paths, and modus operandi.",
      tag: "ATTACK RECONSTRUCTION"
    },
    {
      step: "05",
      title: "Court-Ready Forensic Reporting",
      desc: "Formulating objective, legally admissible forensic reports backed by Section 65B certificates and expert testimony.",
      tag: "COURT ADMISSIBLE"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Experienced Cybercrime Investigators",
      desc: "Our team combines expertise in digital forensics, financial fraud tracing, cyber law, and law enforcement support to investigate complex digital crimes.",
      icon: ShieldAlert,
      node: "01 // CRIME UNIT"
    },
    {
      title: "Scientific & Legal Rigor",
      desc: "Every investigation follows internationally accepted forensic standards, ensuring evidence is collected, preserved, and documented for judicial proceedings.",
      icon: Scale,
      node: "02 // SEC 65B READY"
    },
    {
      title: "Rapid Response & Containment",
      desc: "We provide swift incident triage to minimize financial damage, contain data leaks, and secure digital evidence before contamination occurs.",
      icon: Zap,
      node: "03 // RAPID TRIAGE"
    },
    {
      title: "Comprehensive Digital Tracing",
      desc: "From complex wire fraud to email spoofing and social media harassment, we utilize advanced tools to trace digital footprints to source IPs.",
      icon: Search,
      node: "04 // IP FOOTPRINTING"
    },
    {
      title: "Strict Confidentiality & Integrity",
      desc: "All client disclosures and case details are maintained under non-disclosure agreements with complete privacy and objective integrity.",
      icon: Lock,
      node: "05 // STRICT NDA"
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
            alt="Cybercrime Investigation Background"
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
              <span className="text-[#00d4ff] font-bold">Cybercrime Investigation</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-[#00d4ff]-05</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <ShieldAlert className="w-4 h-4 text-[#00d4ff]" /> SPECIALIZED CYBERCRIME INVESTIGATION UNIT
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Cybercrime <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Investigation Services</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                As digital transactions, corporate networks, and online communication channels expand, cybercrimes have become increasingly sophisticated, targeted, and financially damaging. From online banking fraud and ransomware attacks to employee data theft and identity impersonation, cyber incidents require immediate, scientific, and legally admissible investigation. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we deliver specialized Cybercrime Investigation Services to help organizations, legal professionals, and law enforcement agencies uncover digital evidence, trace threat actors, and build court-ready cases.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <Siren className="w-4 h-4 text-sky-200" />
                  <span>Request Emergency Case Intake</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#investigation-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Search className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 10 Investigation Modules</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">CYBER CRIME UNIT</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    24/7 INCIDENT INTAKE
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <CreditCard className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Financial & Banking Fraud Tracing</h4>
                      <p className="text-slate-400 text-xs mt-0.5">UPI, wire fraud, ransomware extortion & payment gateway breach tracking.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">BEC & Phishing Analysis</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Email header spoofing, malicious domain attribution & spear-phishing audits.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <UserX className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">SIM Swap & Identity Theft</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Credential harvesting, account takeover triage & impersonation forensics.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Scale className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Section 65B Evidence Certificate</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Court-admissible technical documentation under Indian Evidence Act.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919890424040"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  <span>Call Emergency Crime Unit (+91 9890424040)</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 CORE SERVICES OFFERED */}
      {/* ========================================================================= */}
      <section id="investigation-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              INVESTIGATION MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Comprehensive Cybercrime <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              End-to-end investigative capabilities for banking fraud, phishing, ransomware, insider exfiltration, and online harassment.
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
                All 10 Modules
              </button>
              <button
                onClick={() => setActiveCategory("financial")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "financial"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Financial & Identity Fraud
              </button>
              <button
                onClick={() => setActiveCategory("digital")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "digital"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Digital Breaches & Ransomware
              </button>
              <button
                onClick={() => setActiveCategory("misconduct")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "misconduct"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Insider Threats & Harassment
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
                  <span>Request Case Inquiry</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00d4ff]" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5-STAGE INVESTIGATION WORKFLOW */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/60 border-y border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00d4ff]/30">
              Investigation Protocol
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Investigation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A systematic investigative protocol ensuring rapid evidence acquisition, digital footprint tracing, and court-admissible documentation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {investigationSteps.map((step, idx) => (
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Crime Unit</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Scientific digital evidence collection, experienced fraud investigators, and legally defensible report findings.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Cybercrime Case Intake
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Request Cybercrime Investigation Consultation
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding financial fraud, BEC phishing, ransomware, insider theft, or harassment under strict Non-Disclosure Agreements.
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
                <h3 className="text-2xl font-bold text-white">Case Intake Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline Cybercrime Unit. Senior investigators will contact you under strict Non-Disclosure Agreements.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Submit Another Case Inquiry
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
                      placeholder="e.g. A. R. Patil / Legal Counsel"
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
                      placeholder="e.g. counsel@company.com"
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
                      Organization / Individual Category
                    </label>
                    <select
                      value={formData.organizationType}
                      onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                    >
                      <option value="Corporate Enterprise">Corporate Enterprise</option>
                      <option value="Law Enforcement / Police">Law Enforcement / Police Unit</option>
                      <option value="Legal Firm / Advocate">Legal Firm / Defense Advocate</option>
                      <option value="Individual Victim / HNW">Individual Victim / High-Net-Worth</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Crime Category
                  </label>
                  <select
                    value={formData.investigationType}
                    onChange={(e) => setFormData({ ...formData, investigationType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Financial & Banking Fraud">Financial & Banking Wire Fraud</option>
                    <option value="Phishing & BEC Scam">BEC Phishing & Email Spoofing</option>
                    <option value="Ransomware & System Breach">Ransomware & Database Breach</option>
                    <option value="Insider Data Theft">Insider IP Exfiltration & Misconduct</option>
                    <option value="SIM Swap & Identity Theft">SIM Swap & Identity Theft</option>
                    <option value="Online Harassment & Defamation">Online Extortion & Defamation Tracing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Incident Summary & Evidence Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe the incident timeline, financial loss amount, affected devices, or email headers..."
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
                    <span>Processing Case Intake...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Case Intake Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> All case intake disclosures and digital evidence disclosures are protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
