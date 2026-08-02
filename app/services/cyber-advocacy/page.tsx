"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Scale,
  Gavel,
  ShieldCheck,
  FileText,
  Lock,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Shield,
  Layers,
  Search,
  BookOpen,
  FileCheck2,
  UserCheck,
  Briefcase,
  Mail,
  Send,
  Check,
  Cpu,
  Sparkles,
  AlertTriangle,
  Award
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

export default function CyberAdvocacyServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "legal" | "compliance" | "corporate">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Legal Professionals / Law Firm",
    advisoryType: "Cybercrime Legal Consultation",
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
        organizationType: "Legal Professionals / Law Firm",
        advisoryType: "Cybercrime Legal Consultation",
        caseBrief: ""
      });
    }, 1200);
  };

  // 12 Core Advocacy & Advisory Services Offered
  const servicesList = [
    {
      title: "Cybercrime Legal Consultation",
      category: "legal",
      icon: Gavel,
      desc: "Expert legal advice on provisions under the IT Act 2000/2008, Section 65B compliance, IPC cyber offenses, and criminal complaint drafting."
    },
    {
      title: "Digital Evidence Review & Legal Assessment",
      category: "legal",
      icon: Search,
      desc: "Evaluation of opposing forensic reports, verification of evidence integrity, chain-of-custody audits, and cross-examination question formulation."
    },
    {
      title: "Cyber Law & Regulatory Compliance Advisory",
      category: "compliance",
      icon: BookOpen,
      desc: "Guiding organizations through CERT-In cyber directives, IT Rules, sector-specific RBI/SEBI guidelines, and statutory compliance frameworks."
    },
    {
      title: "Data Protection & Privacy Compliance Guidance",
      category: "compliance",
      icon: Lock,
      desc: "Assisting enterprises with the Digital Personal Data Protection Act (DPDPA 2023), GDPR compliance, Data Protection Impact Assessments (DPIA), and privacy policy drafting."
    },
    {
      title: "Legal Support for Data Breach & Cyber Incident Cases",
      category: "legal",
      icon: AlertTriangle,
      desc: "Regulatory breach notification drafting, legal liability mitigation, statutory disclosures, and coordinating response with law enforcement."
    },
    {
      title: "Expert Consultation on Digital Forensic Findings",
      category: "legal",
      icon: FileCheck2,
      desc: "Translating complex technical digital evidence, mobile/disk artifacts, and network logs into clear, persuasive legal submissions."
    },
    {
      title: "Assistance in Cyber Fraud & Financial Crime Matters",
      category: "legal",
      icon: Scale,
      desc: "Legal recourse and advisory for banking fraud victims, unauthorized fund transfers, crypto asset recovery, and adjudication proceedings."
    },
    {
      title: "Intellectual Property & Digital Asset Protection Advisory",
      category: "corporate",
      icon: Award,
      desc: "Protecting trade secrets, software source code copyrights, digital assets, domain name disputes, and non-disclosure enforcement."
    },
    {
      title: "Corporate Cyber Risk & Compliance Advisory",
      category: "corporate",
      icon: Building2,
      desc: "Board-level governance advisory, vendor risk legal audits, cyber insurance policy coverage review, and Director liability protection."
    },
    {
      title: "Litigation Support for Cyber-Related Disputes",
      category: "legal",
      icon: FileText,
      desc: "Formulating legal strategies, drafting affidavits, court applications, and technical filings for civil, corporate, and criminal litigation."
    },
    {
      title: "Expert Witness Coordination & Technical Consultation",
      category: "legal",
      icon: UserCheck,
      desc: "Coordinating qualified forensic expert witness testimonies, Section 65B certificates, and sworn technical deposition support."
    },
    {
      title: "Cybersecurity Policy & Governance Advisory",
      category: "compliance",
      icon: ShieldCheck,
      desc: "Drafting acceptable use policies, remote work cyber guidelines, incident response policies, and employee non-disclosure agreements."
    }
  ];

  // 5-Stage Advocacy Workflow
  const advocacySteps = [
    {
      step: "01",
      title: "Legal & Technical Intake",
      desc: "Initial confidential case review, understanding the intersection of technical evidence and statutory legal requirements."
    },
    {
      step: "02",
      title: "Digital Evidence Evaluation",
      desc: "Auditing digital artifacts, verifying Section 65B compliance, assessing chain of custody, and scrutinizing forensic admissibility."
    },
    {
      step: "03",
      title: "Strategic Advisory Formulation",
      desc: "Developing clear legal strategies, compliance roadmaps, data breach mitigation steps, or trial defense arguments."
    },
    {
      step: "04",
      title: "Documentation & Drafting",
      desc: "Drafting expert affidavits, legal notices, regulatory disclosures, privacy frameworks, and courtroom technical submissions."
    },
    {
      step: "05",
      title: "Litigation & Advisory Representation",
      desc: "Providing ongoing expert consultation, trial support, regulatory defense, and board-level risk governance briefings."
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Integrated Technical and Legal Expertise",
      desc: "We combine cybersecurity, digital forensics, and legal advisory capabilities to provide practical solutions for complex cyber legal matters.",
      icon: Scale
    },
    {
      title: "Evidence-Based Advisory",
      desc: "Our recommendations are supported by scientific forensic analysis and industry best practices, ensuring credibility and reliability.",
      icon: ShieldCheck
    },
    {
      title: "Regulatory and Compliance Focus",
      desc: "We help organizations understand and meet evolving cybersecurity, privacy, and data protection obligations while reducing legal and operational risks.",
      icon: BookOpen
    },
    {
      title: "Confidential and Professional",
      desc: "Every engagement is handled with strict confidentiality, integrity, and the highest standards of professional ethics.",
      icon: Lock
    },
    {
      title: "Comprehensive Support",
      desc: "From legal consultation and compliance guidance to litigation support and digital evidence interpretation, Skyline delivers end-to-end advisory services tailored to each client's needs.",
      icon: Layers
    }
  ];

  const filteredServices = activeCategory === "all"
    ? servicesList
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pb-24 overflow-x-hidden relative">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-white/[0.06]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Cyber Advocacy & Legal Advisory Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/75 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/services" className="hover:text-[#00d4ff] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">Cyber Advocacy & Legal Advisory</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Scale className="w-3.5 h-3.5 text-[#00d4ff]" /> Cyber Advocacy & Legal Advisory
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Cyber Advocacy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Legal Advisory</span>
            </motion.h1>

            {/* Introductory Text */}
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              With the rapid growth of digital technologies and cybercrime, organizations and individuals increasingly face complex legal challenges involving data breaches, cyber fraud, privacy violations, intellectual property theft, and regulatory compliance. Successfully addressing these issues requires not only technical expertise but also sound legal guidance. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we provide Cyber Advocacy &amp; Legal Advisory Services to bridge the gap between technology and law. Our services support businesses, government organizations, legal professionals, and individuals by offering expert guidance on cyber laws, digital evidence, regulatory compliance, and cybercrime litigation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#consultation-form"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Request Legal Advisory <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#advisory-services"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-[#00d4ff]/40 transition-all flex items-center gap-2"
              >
                Explore Advisory Offerings
              </a>
            </motion.div>

          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Gavel className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">IT Act & Sec 65B</p>
                <p className="text-xs text-slate-400">Statutory Legal Expertise</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">DPDPA 2023 / GDPR</p>
                <p className="text-xs text-slate-400">Data Privacy & Compliance</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Litigation Support</p>
                <p className="text-xs text-slate-400">Court-Ready Affidavits & Briefs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Integrated Expertise</p>
                <p className="text-xs text-slate-400">Forensics + Legal Counsel</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CORE ADVISORY SERVICES */}
      <section id="advisory-services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Advisory Offerings</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Bridging cybersecurity technical findings with legal strategy, statutory compliance, litigation support, and corporate governance.
            </p>

            {/* CATEGORY FILTER */}
            <div className="inline-flex p-1.5 mt-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex-wrap justify-center gap-1">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                All 12 Services
              </button>
              <button
                onClick={() => setActiveCategory("legal")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "legal"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Legal Consultation & Litigation
              </button>
              <button
                onClick={() => setActiveCategory("compliance")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "compliance"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Regulatory Compliance & Privacy
              </button>
              <button
                onClick={() => setActiveCategory("corporate")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "corporate"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Corporate Cyber Risk & IP Protection
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-5 group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                    <service.icon className="w-6 h-6 text-[#00d4ff] group-hover:text-slate-950" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#00d4ff] font-semibold">
                  <span>Legal & Technical Synthesis</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5-STAGE ADVOCACY WORKFLOW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
              Standard Operating Procedure
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Advisory & Advocacy <span className="text-slate-400">Workflow</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              A structured 5-stage process translating complex technical evidence into persuasive, legally sound solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {advocacySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00d4ff]/30 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 text-3xl font-extrabold text-white/5 group-hover:text-[#00d4ff]/10 transition-colors">
                  {step.step}
                </div>
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] font-bold text-xs flex items-center justify-center mb-4 border border-[#00d4ff]/20">
                    {step.step}
                  </div>
                  <h4 className="text-white font-bold text-base mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (5 PILLARS) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Legal</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Integrated technical and legal excellence designed for law firms, corporate boards, and individuals.
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
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00d4ff]/40 group-hover:bg-[#00d4ff]/10 transition-colors">
                    <p.icon className="w-7 h-7 text-slate-300 group-hover:text-[#00d4ff] transition-colors" />
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

      {/* CONFIDENTIAL LEGAL ADVISORY FORM */}
      <section id="consultation-form" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />
            
            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs font-bold text-[#00d4ff] uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5" /> Confidential Legal Consultation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Request Cyber Advocacy & Legal Consultation
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Schedule a confidential legal advisory session with our cyber law counsel and senior forensic directors.
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
                <h3 className="text-2xl font-bold text-white">Advisory Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline Legal. Our cyber legal advisors will evaluate your parameters under attorney-client privilege protocols and connect with you shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                >
                  Submit Another Consultation Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name / Legal Counsel *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adv. Priya Nambiar / General Counsel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. legal@chambers-advocates.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Organization Category
                    </label>
                    <select
                      value={formData.organizationType}
                      onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                    >
                      <option value="Legal Professionals / Law Firm">Legal Professionals / Law Firm</option>
                      <option value="Corporate Enterprise">Corporate Enterprise</option>
                      <option value="Government Body">Government Body / Public Sector</option>
                      <option value="Financial Institution">Bank / Financial Institution</option>
                      <option value="Private Individual">Private Individual</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Legal Advisory Domain
                  </label>
                  <select
                    value={formData.advisoryType}
                    onChange={(e) => setFormData({ ...formData, advisoryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Cybercrime Legal Consultation">Cybercrime Legal Consultation (IT Act)</option>
                    <option value="Digital Evidence Review">Digital Evidence Review & Sec 65B Audit</option>
                    <option value="Data Protection & DPDPA">Data Protection & Privacy Compliance (DPDPA 2023)</option>
                    <option value="Data Breach Legal Support">Data Breach Legal Support & Disclosure</option>
                    <option value="Litigation & Expert Witness">Litigation Strategy & Expert Witness Testimony</option>
                    <option value="IP & Source Code Protection">IP & Digital Asset Protection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Case Summary / Legal Guidance Objective
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide a brief summary of the cyber legal dispute, compliance requirements, digital evidence status, or court representation goals..."
                    value={formData.caseBrief}
                    onChange={(e) => setFormData({ ...formData, caseBrief: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <span>Processing Confidential Brief...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Legal Inquiry
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Strict attorney-client privilege and encrypted communications maintained.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
