"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  CreditCard,
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
  Scale,
  FileText,
  AlertTriangle,
  TrendingUp,
  Database,
  UserCheck,
  ShieldAlert,
  PieChart,
  HardDrive,
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

export default function FinancialCrimeServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "fraud" | "insurance" | "audit">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise / Financial Institution",
    investigationType: "Financial Fraud Investigation",
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
        organizationType: "Corporate Enterprise / Financial Institution",
        investigationType: "Financial Fraud Investigation",
        caseBrief: ""
      });
    }, 1200);
  };

  // 10 Core Financial & Insurance Fraud Services Offered
  const servicesList = [
    {
      code: "FIN-FRAUD-01",
      title: "Financial Fraud Investigations",
      category: "fraud",
      icon: CreditCard,
      desc: "Forensic accounting and digital evidence analysis targeting accounting manipulations, wire fraud, and unauthorized fund diversions."
    },
    {
      code: "FIN-INS-01",
      title: "Insurance Claim Fraud Investigations",
      category: "insurance",
      icon: AlertTriangle,
      desc: "Investigating fraudulent property, motor, health, and life insurance claims, staged accidents, and forged claim documentation."
    },
    {
      code: "FIN-FRAUD-02",
      title: "Banking & Financial Crime Analysis",
      category: "fraud",
      icon: Building2,
      desc: "Analyzing SWIFT/UPI transaction anomalies, loan fraud, credit card syndicates, and fraudulent bank instrument issuance."
    },
    {
      code: "FIN-FRAUD-03",
      title: "Asset Misappropriation & Embezzlement",
      category: "fraud",
      icon: TrendingUp,
      desc: "Tracing covert fund siphoning, payroll fraud, procurement kickbacks, inventory theft, and shell company transactions."
    },
    {
      code: "FIN-FRAUD-04",
      title: "Corporate Fraud & Employee Misconduct",
      category: "fraud",
      icon: ShieldAlert,
      desc: "Auditing executive misconduct, conflict of interest, bribery, revenue misstatement, and breach of fiduciary duties."
    },
    {
      code: "FIN-AUDIT-01",
      title: "Document & Financial Record Examination",
      category: "audit",
      icon: FileText,
      desc: "Forensic auditing of altered balance sheets, forged invoices, duplicate ledger entries, and falsified tax filings."
    },
    {
      code: "FIN-AUDIT-02",
      title: "Digital Evidence & Transaction Analysis",
      category: "audit",
      icon: Database,
      desc: "Reconstructing ERP/SAP transaction databases, database log forensics, email communication trails, and crypto-asset tracing."
    },
    {
      code: "FIN-AUDIT-03",
      title: "Due Diligence & Background Investigations",
      category: "audit",
      icon: UserCheck,
      desc: "Pre-merger forensic due diligence, high-risk executive vetting, beneficial ownership mapping, and asset tracing."
    },
    {
      code: "FIN-AUDIT-04",
      title: "Fraud Risk Assessment & Controls Review",
      category: "audit",
      icon: PieChart,
      desc: "Identifying internal control deficiencies, evaluating anti-fraud governance, and establishing fraud prevention controls."
    },
    {
      code: "FIN-INS-02",
      title: "Litigation Support & Expert Consultation",
      category: "insurance",
      icon: Scale,
      desc: "Delivering court-admissible forensic accounting reports, damages quantification, and expert witness testimony in court."
    }
  ];

  // 5-Stage Investigation Process
  const investigationSteps = [
    {
      step: "01",
      title: "Allegation Intake & Scoping",
      desc: "Initial confidential intake, scoping financial parameters, identifying key ledgers and digital systems, and establishing non-disclosure protocols.",
      tag: "CONFIDENTIAL INTAKE"
    },
    {
      step: "02",
      title: "Forensic Data & Ledger Acquisition",
      desc: "Extracting ERP transaction logs, banking records, email archives, and imaging endpoints under strict chain of custody.",
      tag: "EVIDENCE EXTRACTION"
    },
    {
      step: "03",
      title: "Data Analytics & Pattern Mining",
      desc: "Applying Benford's Law, pattern recognition algorithms, link analysis, and ledger reconciliation to isolate fraudulent transactions.",
      tag: "BENFORD DATA MINING"
    },
    {
      step: "04",
      title: "Asset Tracing & Misconduct Reconstruction",
      desc: "Reconstructing hidden fund flows, identifying shell entity networks, quantifying financial loss, and gathering corroborating evidence.",
      tag: "ASSET RECONSTRUCTION"
    },
    {
      step: "05",
      title: "Court-Admissible Forensic Report",
      desc: "Formulating objective forensic accounting reports complete with transaction flowcharts, damages assessment, and Section 45 expert testimony.",
      tag: "SEC 45 EXPERT REPORT"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Forensic Accountants & Digital Experts",
      desc: "Our team combines certified forensic accountants, digital forensic examiners, and fraud risk specialists with deep financial domain knowledge.",
      icon: CreditCard,
      node: "01 // FORENSIC ACCOUNTING"
    },
    {
      title: "Advanced Data Analytics & Benford's Mining",
      desc: "Utilizing advanced data analytics software to parse millions of ERP transaction entries and flag anomalous journal vouchers.",
      icon: Database,
      node: "02 // BENFORD ANALYTICS"
    },
    {
      title: "Section 45 Court-Admissible Reporting",
      desc: "Every forensic accounting report is structured for submission in High Courts, NCLT, Debt Recovery Tribunals, and Economic Offences Wings.",
      icon: Scale,
      node: "03 // JUDICIAL ADMISSIBLE"
    },
    {
      title: "Insurance Underwriting & Claims Audit",
      desc: "Independent origin & loss evaluation for insurance claim auditors, detecting fraudulent arson, staged losses, and padded claims.",
      icon: AlertTriangle,
      node: "04 // CLAIMS INTEGRITY"
    },
    {
      title: "Absolute Integrity & NDA Protection",
      desc: "All financial data, ledger exports, and executive disclosures remain protected under strict corporate Non-Disclosure Agreements.",
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
            alt="Financial & Insurance Crime Background"
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
              <span className="text-[#00d4ff] font-bold">Financial & Insurance Crime</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-FIN-11</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <CreditCard className="w-4 h-4 text-[#00d4ff]" /> FORENSIC ACCOUNTING & FINANCIAL CRIME UNIT
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Financial & Insurance <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Crime Investigations</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                Financial fraud, corporate embezzlement, banking trojans, procurement kickbacks, shell company siphoning, and fraudulent insurance claims cost enterprises and financial institutions billions annually. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we deliver specialized Financial &amp; Insurance Crime Investigation Services combining forensic accounting, ERP data mining, digital log analytics, asset tracing, and court-admissible Section 45 expert reporting.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <CreditCard className="w-4 h-4 text-sky-200" />
                  <span>Request Financial Investigation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#financial-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Database className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 10 Financial Modules</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">FINANCIAL CRIME UNIT</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    BENFORD DATA MINING
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <CreditCard className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Embezzlement & Wire Fraud</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Tracing covert fund siphoning, payroll fraud & shell company transfers.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <AlertTriangle className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Insurance Claim Fraud Audits</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Investigating fraudulent property, motor & life insurance claims.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Database className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">ERP & Ledger Data Forensics</h4>
                      <p className="text-slate-400 text-xs mt-0.5">SAP/ERP transaction mining, altered balance sheets & invoice audits.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Scale className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Section 45 Court Testimony</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Forensic accounting reports & damages assessment for tribunals.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919890424040"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  <span>Call Financial Crime Unit (+91 9890424040)</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 CORE SERVICES OFFERED */}
      {/* ========================================================================= */}
      <section id="financial-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              FINANCIAL CRIME MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Financial & Insurance Crime <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Forensic accounting, insurance fraud detection, banking crime analysis, embezzlement tracing, ERP transaction mining, and court expert testimony.
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
                onClick={() => setActiveCategory("fraud")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "fraud"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Financial & Banking Fraud
              </button>
              <button
                onClick={() => setActiveCategory("insurance")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "insurance"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Insurance Claim Audits
              </button>
              <button
                onClick={() => setActiveCategory("audit")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "audit"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                ERP Data & Record Analytics
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
                  <span>Request Financial Scope</span>
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
              Forensic Accounting Protocol
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A scientific financial accounting workflow ensuring ledger reconstruction, asset tracing, and court-admissible expert reports.
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Financial Unit</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Forensic accounting precision, Benford data analytics software, and Section 45 expert courtroom testimony.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Financial Crime Intake
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Schedule Financial Crime Investigation
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding embezzlement, banking fraud, insurance claim fraud, shell company siphoning, or ERP audit parameters under strict Non-Disclosure Agreements.
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
                <h3 className="text-2xl font-bold text-white">Financial Intake Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline Financial Unit. Our forensic accounting specialists will review your case details under strict Non-Disclosure Agreements.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Submit Another Investigation Request
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
                      placeholder="e.g. M. K. Aggarwal / Chief Risk Officer"
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
                      placeholder="e.g. cro@bank.com"
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
                      <option value="Corporate Enterprise / Financial Institution">Corporate Enterprise / Bank</option>
                      <option value="Insurance Company">Insurance Company / Claims Auditor</option>
                      <option value="Legal Firm / Advocate">Legal Firm / Defense Advocate</option>
                      <option value="Government / Regulatory Agency">Government / Regulatory Agency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Financial Crime Module
                  </label>
                  <select
                    value={formData.investigationType}
                    onChange={(e) => setFormData({ ...formData, investigationType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Financial Fraud Investigation">Financial Fraud & Embezzlement</option>
                    <option value="Insurance Claim Fraud Audit">Insurance Claim Fraud Audit</option>
                    <option value="Banking & Wire Fraud Analysis">Banking & Wire Fraud Analysis</option>
                    <option value="ERP & Ledger Data Mining">ERP & Ledger Data Mining (Benford)</option>
                    <option value="Pre-Merger Forensic Due Diligence">Pre-Merger Forensic Due Diligence</option>
                    <option value="Section 45 IEA Court Expert Witness Testimony">Section 45 IEA Court Expert Witness Testimony</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Financial Scope & Case Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on estimated financial loss, affected ERP systems (SAP/Tally), key transaction dates, or audit parameters..."
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
                    <span>Processing Investigation Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Financial Investigation Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Financial ledgers, ERP exports, and case disclosures remain protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
