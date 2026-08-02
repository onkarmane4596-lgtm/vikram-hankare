"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Server,
  FileCheck2,
  Database,
  Building2,
  Cpu,
  Mail,
  Send,
  Check,
  ChevronRight,
  ArrowRight,
  Shield,
  Layers,
  Search,
  Activity,
  FileText,
  AlertTriangle,
  Scale,
  RefreshCw,
  HardDrive,
  UserCheck,
  Cloud,
  Phone,
  FileSpreadsheet
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

export default function ITAuditsComplianceServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "itgc" | "compliance" | "risk">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise",
    auditType: "IT General Controls (ITGC) Audit",
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
        auditType: "IT General Controls (ITGC) Audit",
        caseBrief: ""
      });
    }, 1200);
  };

  // 12 Core IT Audit & Compliance Services Offered
  const servicesList = [
    {
      code: "AUD-ITGC-01",
      title: "Information Technology (IT) General Controls (ITGC) Audits",
      category: "itgc",
      icon: Server,
      desc: "Evaluating access controls, change management, system operations, and data center security to ensure foundational IT control stability."
    },
    {
      code: "AUD-ITGC-02",
      title: "Information Security Audits",
      category: "itgc",
      icon: ShieldCheck,
      desc: "Comprehensive evaluation of security policies, access privilege enforcement, network perimeter defense, and data protection mechanisms."
    },
    {
      code: "AUD-COMP-01",
      title: "Cybersecurity Compliance Assessments",
      category: "compliance",
      icon: CheckCircle2,
      desc: "Assessing organizational readiness and alignment against CERT-In mandates, ISO 27001, SOC 2, NIST CSFs, and industry security benchmarks."
    },
    {
      code: "AUD-ITGC-03",
      title: "IT Infrastructure & Network Security Audits",
      category: "itgc",
      icon: HardDrive,
      desc: "Auditing active directory structures, firewall configurations, router/switch rulesets, Wi-Fi security, and core routing hygiene."
    },
    {
      code: "AUD-ITGC-04",
      title: "Cloud Security Assessments",
      category: "itgc",
      icon: Cloud,
      desc: "Reviewing AWS, Azure, Google Cloud, and SaaS configurations for IAM misconfigurations, open storage buckets, and API security gaps."
    },
    {
      code: "AUD-ITGC-05",
      title: "Vulnerability Assessment & Security Review",
      category: "itgc",
      icon: Search,
      desc: "Automated and manual vulnerability identification across internal/external IP ranges, web apps, and critical server infrastructure."
    },
    {
      code: "AUD-RISK-01",
      title: "Risk Assessment & IT Governance Evaluation",
      category: "risk",
      icon: Activity,
      desc: "Aligning IT strategies with business risk tolerance, evaluating COBIT frameworks, executive reporting, and IT risk matrices."
    },
    {
      code: "AUD-COMP-02",
      title: "Regulatory & Compliance Audits",
      category: "compliance",
      icon: FileCheck2,
      desc: "Audits tailored for statutory mandates under RBI Cyber Security Framework, SEBI cybersecurity guidelines, IRDAI, and IT Act mandates."
    },
    {
      code: "AUD-COMP-03",
      title: "Data Privacy & Protection Compliance Assessments",
      category: "compliance",
      icon: Lock,
      desc: "Assessing data flows, privacy impact, consent mechanisms, and organizational readiness for DPDPA 2023, GDPR, and privacy laws."
    },
    {
      code: "AUD-RISK-02",
      title: "Third-Party Vendor & Technology Risk Assessments",
      category: "risk",
      icon: Building2,
      desc: "Evaluating vendor ecosystem vulnerabilities, supply chain digital risks, third-party SLA compliance, and external integration points."
    },
    {
      code: "AUD-RISK-03",
      title: "Business Continuity & Disaster Recovery Readiness Reviews",
      category: "risk",
      icon: RefreshCw,
      desc: "Testing BCP/DR plans, backup restoration capabilities, RTO/RPO threshold verification, and failover simulation reviews."
    },
    {
      code: "AUD-RISK-04",
      title: "Internal IT Control Evaluation & Compliance Advisory",
      category: "risk",
      icon: FileText,
      desc: "Providing continuous internal audit support, control gap remediation roadmaps, management reporting, and compliance advisory."
    }
  ];

  // 5-Stage Audit Workflow
  const auditSteps = [
    {
      step: "01",
      title: "Scoping & Audit Planning",
      desc: "Defining audit boundaries, regulatory mandates (CERT-In / ISO), system inventories, and establishing non-disruptive review schedules.",
      tag: "AUDIT CHARTER"
    },
    {
      step: "02",
      title: "Evidence Gathering & Fieldwork",
      desc: "Examining ITGC controls, policy documentation, active directory configurations, sample logs, and conducting staff interviews.",
      tag: "FIELDWORK AUDIT"
    },
    {
      step: "03",
      title: "Gap Analysis & Risk Evaluation",
      desc: "Benchmarking control efficacy against ISO 27001 / NIST standards, calculating residual risk scores, and identifying non-compliances.",
      tag: "GAP MATRIX"
    },
    {
      step: "04",
      title: "Reporting & Executive Briefing",
      desc: "Formulating formal audit reports detailing executive risk summaries, technical control gaps, and prioritized remediation matrices.",
      tag: "FINAL AUDIT REPORT"
    },
    {
      step: "05",
      title: "Remediation Tracking & Re-Audit",
      desc: "Conducting post-remediation verification reviews to validate control gap closure and issuing compliance certification statements.",
      tag: "COMPLIANCE CLEARANCE"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Certified Lead Auditors & Cyber Specialists",
      desc: "Our audit teams comprise experienced CISA, ISO 27001 Lead Auditors, and cybersecurity professionals with deep technical knowledge.",
      icon: ShieldCheck,
      node: "01 // AUDITOR CERTIFIED"
    },
    {
      title: "Regulatory Alignment & CERT-In Readiness",
      desc: "We ensure your organizational IT controls align seamlessly with CERT-In directives, RBI cyber frameworks, SEBI mandates, and DPDPA 2023.",
      icon: FileCheck2,
      node: "02 // CERT-In & DPDPA"
    },
    {
      title: "Risk-Based Audit Methodology",
      desc: "We focus on high-consequence risk vectors, evaluating both technical configuration hygiene and procedural compliance.",
      icon: Activity,
      node: "03 // RISK DRIVEN"
    },
    {
      title: "Practical Remediation Guidance",
      desc: "Beyond flagging control gaps, we provide actionable step-by-step technical roadmaps to help IT teams achieve compliant baseline status.",
      icon: RefreshCw,
      node: "04 // ACTIONABLE ROADMAP"
    },
    {
      title: "Absolute Integrity & Confidentiality",
      desc: "Every IT audit is executed under strict Non-Disclosure Agreements, maintaining complete confidentiality of proprietary architecture.",
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
            alt="IT Audits & Compliance Background"
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
              <span className="text-[#00d4ff] font-bold">IT Audits & Compliance</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-AUDIT-04</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <FileCheck2 className="w-4 h-4 text-[#00d4ff]" /> IT GOVERNANCE, AUDITS & COMPLIANCE
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                IT Audits & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Compliance Services</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                In an era of stringent regulatory mandates and complex cyber threat landscapes, organizations must verify that their IT infrastructure, operational processes, and data security controls adhere to statutory standards. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we deliver comprehensive IT Audit &amp; Compliance Services to evaluate IT General Controls (ITGC), audit network integrity, measure regulatory readiness (CERT-In, RBI, SEBI, DPDPA 2023), and strengthen enterprise cybersecurity governance.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <FileCheck2 className="w-4 h-4 text-sky-200" />
                  <span>Request IT Audit Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#audit-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Server className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore Audit Modules</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">COMPLIANCE FRAMEWORKS</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    CERT-In & DPDPA READY
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Server className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">ITGC & Controls Audit</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Evaluating access controls, system changes, and operational security governance.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <FileCheck2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">CERT-In & RBI Mandates</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Statutory cybersecurity compliance auditing for banks, NBFCs & enterprises.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Lock className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">DPDPA 2023 Data Privacy</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Assessing data principal rights, consent architectures & privacy impact compliance.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <RefreshCw className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Remediation Gap Roadmap</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Prioritized step-by-step guidance to achieve baseline compliance certification.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#consultation-form"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <FileCheck2 className="w-4 h-4 text-[#00d4ff]" />
                  <span>Reserve IT Audit Consultation</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 CORE IT AUDIT & COMPLIANCE SERVICES OFFERED */}
      {/* ========================================================================= */}
      <section id="audit-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              AUDIT CAPABILITY MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Comprehensive IT Audit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Systematic evaluation of IT General Controls, regulatory compliance, data privacy architectures, cloud security, and third-party vendor risks.
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
                onClick={() => setActiveCategory("itgc")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "itgc"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                ITGC & Infrastructure
              </button>
              <button
                onClick={() => setActiveCategory("compliance")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "compliance"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Regulatory & Privacy (DPDPA)
              </button>
              <button
                onClick={() => setActiveCategory("risk")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "risk"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Risk Governance & BCP/DR
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
                  <span>Request Audit Scope</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00d4ff]" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5-STAGE AUDIT WORKFLOW */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/60 border-y border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00d4ff]/30">
              Audit Protocol
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Audit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A structured audit process ensuring thorough evidence gathering, objective risk evaluation, and clear compliance certification.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {auditSteps.map((step, idx) => (
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Audit Services</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Certified Lead Auditors, deep statutory framework knowledge, and practical control remediation roadmaps.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Audit Proposal Request
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Schedule IT Audit & Compliance Review
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding your organization, regulatory framework goals (CERT-In, ISO 27001, RBI, DPDPA), or ITGC scope.
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
                <h3 className="text-2xl font-bold text-white">Audit Proposal Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for contacting Skyline. Our Lead Audit team will review your parameters under strict Non-Disclosure Agreements.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Submit Another Proposal Request
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
                      placeholder="e.g. S. P. Deshmukh / Head of Internal Audit"
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
                      placeholder="e.g. audit@company.com"
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
                      <option value="Corporate Enterprise">Corporate Enterprise</option>
                      <option value="Bank / Financial Institution">Bank / Financial Institution</option>
                      <option value="Government Entity">Government Body / Public Sector</option>
                      <option value="Healthcare & E-Commerce">Healthcare & E-Commerce</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Audit Module
                  </label>
                  <select
                    value={formData.auditType}
                    onChange={(e) => setFormData({ ...formData, auditType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="IT General Controls (ITGC) Audit">IT General Controls (ITGC) Audit</option>
                    <option value="CERT-In & ISO 27001 Compliance Audit">CERT-In & ISO 27001 Compliance Audit</option>
                    <option value="DPDPA 2023 Data Privacy Assessment">DPDPA 2023 Data Privacy Assessment</option>
                    <option value="RBI / SEBI Cybersecurity Mandate Audit">RBI / SEBI Cybersecurity Mandate Audit</option>
                    <option value="Cloud & Third-Party Risk Assessment">Cloud & Third-Party Risk Assessment</option>
                    <option value="Business Continuity & DR Readiness Audit">Business Continuity & DR Readiness Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Scope Brief & Regulatory Mandate Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details regarding system count, compliance deadlines, audit scope, or specific regulatory mandates..."
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
                    <span>Processing Audit Proposal...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Audit Proposal Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> All corporate data and audit scope disclosures are protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
