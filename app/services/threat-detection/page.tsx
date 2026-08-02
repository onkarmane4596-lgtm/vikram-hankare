"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldAlert,
  Search,
  Zap,
  Activity,
  Server,
  Lock,
  FileCode,
  Wifi,
  AlertTriangle,
  Radio,
  FileCheck2,
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
  Terminal,
  Database,
  Clock,
  Sparkles,
  RefreshCw,
  HardDrive,
  Siren,
  Scale,
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

export default function ThreatDetectionServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "detection" | "investigation" | "recovery">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise",
    urgencyLevel: "High (Active Incident / Suspicious Activity)",
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
        urgencyLevel: "High (Active Incident / Suspicious Activity)",
        caseBrief: ""
      });
    }, 1200);
  };

  // 5-Stage Incident Response Framework
  const approachStages = [
    {
      stage: "01",
      title: "Preparation",
      subtitle: "Readiness & Baseline Modeling",
      desc: "Developing custom incident response playbooks, tabletop simulation exercises, baseline log monitoring, threat modeling, and establishing rapid 24/7 escalation channels.",
      icon: ShieldAlert,
      highlights: ["IR Playbooks & Escalation Trees", "Tabletop Breach Simulations", "Baseline Log Configuration"]
    },
    {
      stage: "02",
      title: "Threat Detection",
      subtitle: "24/7 Telemetry & Proactive Hunting",
      desc: "Continuous SIEM/EDR log telemetry monitoring, automated behavior analysis, threat intelligence ingestion, and proactive threat hunting across endpoints and networks.",
      icon: Radio,
      highlights: ["24/7 SIEM / EDR Event Correlation", "Behavioral Anomaly Detection", "Active Threat Hunting"]
    },
    {
      stage: "03",
      title: "Investigation & Analysis",
      subtitle: "Forensic Triage & Patient Zero Tracing",
      desc: "Rapid triage assessment, patient zero tracing, dynamic malware sandbox analysis, blast radius determination, and volatile digital evidence collection.",
      icon: Search,
      highlights: ["Patient Zero & Vector Identification", "Malware & Ransomware Triage", "Volatile Forensic Collection"]
    },
    {
      stage: "04",
      title: "Containment & Eradication",
      subtitle: "Attacker Eviction & Threat Elimination",
      desc: "Immediate network segment isolation, compromised credential revocation, malicious process termination, backdoor removal, and vulnerability patching.",
      icon: Zap,
      highlights: ["Network Segment Containment", "Compromised ID Revocation", "Malicious Persistence Removal"]
    },
    {
      stage: "05",
      title: "Recovery & Lessons Learned",
      subtitle: "Resilient Restoration & Post-Mortem",
      desc: "Secure system restoration from clean backups, post-incident forensic validation, root cause reporting, board-level briefings, and security posture hardening.",
      icon: RefreshCw,
      highlights: ["Clean System Restoration", "Root Cause & Impact Report", "Security Posture Hardening"]
    }
  ];

  // 15 Core Services Offered
  const servicesList = [
    {
      code: "TDR-DET-01",
      title: "Continuous Security Monitoring & Threat Detection",
      category: "detection",
      icon: Radio,
      desc: "24/7 real-time monitoring of security event logs across networks, servers, endpoints, and cloud infrastructure to catch threat vectors early."
    },
    {
      code: "TDR-INV-01",
      title: "Security Incident Investigation & Analysis",
      category: "investigation",
      icon: Search,
      desc: "In-depth forensic examination of security events to determine the scope, lateral movement, data exposure, and intent of adversaries."
    },
    {
      code: "TDR-DET-02",
      title: "Incident Response Planning & Readiness",
      category: "detection",
      icon: ShieldCheck,
      desc: "Formulating customized incident response policies, communication protocols, emergency escalation matrices, and breach simulation exercises."
    },
    {
      code: "TDR-INV-02",
      title: "Malware & Ransomware Investigation",
      category: "investigation",
      icon: FileCode,
      desc: "Reverse engineering malicious payloads, ransomware binaries, C2 communication channels, and persistence mechanisms."
    },
    {
      code: "TDR-REC-01",
      title: "Root Cause Analysis & Vector Elimination",
      category: "recovery",
      icon: CheckCircle2,
      desc: "Identifying the precise entry vector (patient-zero) used by threat actors and eliminating underlying security vulnerabilities."
    },
    {
      code: "TDR-DET-03",
      title: "Proactive Threat Hunting",
      category: "detection",
      icon: Terminal,
      desc: "Searching across corporate endpoints and Active Directory for dormant threat actors, webshells, and zero-day indicators of compromise (IOCs)."
    },
    {
      code: "TDR-REC-02",
      title: "Emergency Incident Containment & Eviction",
      category: "recovery",
      icon: Zap,
      desc: "Deploying rapid containment protocols to sever adversary access, isolate compromised subnets, and evict malicious persistence."
    },
    {
      code: "TDR-INV-03",
      title: "Digital Evidence Collection & Preservation",
      category: "investigation",
      icon: Lock,
      desc: "ISO-compliant volatile memory dumps, RAM captures, disk imaging, and network packet capture preserved for legal proceedings."
    },
    {
      code: "TDR-DET-04",
      title: "SIEM & Log Telemetry Integration",
      category: "detection",
      icon: Database,
      desc: "Configuring SIEM platforms, log collectors, firewall telemetry, and EDR agents to achieve unified SOC visibility."
    },
    {
      code: "TDR-INV-04",
      title: "Cloud & Endpoint Forensics",
      category: "investigation",
      icon: Cpu,
      desc: "Auditing AWS CloudTrail, Azure Audit Logs, M365 tenant compromises, and workstation artifacts for malicious actions."
    },
    {
      code: "TDR-REC-03",
      title: "Post-Incident Recovery & System Hardening",
      category: "recovery",
      icon: RefreshCw,
      desc: "Guided restoration of domain controllers and critical infrastructure, accompanied by security hardening roadmaps."
    },
    {
      code: "TDR-REC-04",
      title: "Executive & Board Incident Reporting",
      category: "recovery",
      icon: FileCheck2,
      desc: "Formulating clear, non-technical executive breach summaries, regulatory notifications (CERT-In compliant), and loss assessments."
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "24/7 Rapid Incident Response Team",
      desc: "Our Incident Response Unit operates round-the-clock to contain active breaches, analyze malware, and evict adversaries.",
      icon: Siren,
      node: "01 // 24/7 IR UNIT"
    },
    {
      title: "CERT-In Compliant Incident Reporting",
      desc: "We ensure mandatory 6-hour CERT-In incident reporting compliance and formulate regulatory disclosures for legal peace of mind.",
      icon: FileCheck2,
      node: "02 // CERT-In READY"
    },
    {
      title: "Advanced Threat Hunting & EDR Telemetry",
      desc: "Proactively uncovering dormant webshells, stolen credentials, and APT persistence across complex enterprise networks.",
      icon: Radio,
      node: "03 // PROACTIVE HUNT"
    },
    {
      title: "Patient Zero & Blast Radius Isolation",
      desc: "Determining exact breach entry vectors, tracing lateral movement, and isolating compromised subnets before data exfiltration.",
      icon: Search,
      node: "04 // PATIENT ZERO"
    },
    {
      title: "Strict Confidentiality & NDA Protection",
      desc: "Every incident inquiry and network telemetry review is protected under strict Non-Disclosure Agreements.",
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
            alt="Threat Detection & Incident Response Background"
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
              <span className="text-[#00d4ff] font-bold">Threat Detection & Incident Response</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-TDR-13</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <Siren className="w-4 h-4 text-[#00d4ff]" /> 24/7 INCIDENT RESPONSE & THREAT HUNTING UNIT
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Threat Detection & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Incident Response</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                When a security breach occurs, every minute counts. Ransomware deployment, unauthorized Active Directory access, webshell persistence, and data exfiltration demand immediate, decisive incident response. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we deliver 24/7 Threat Detection &amp; Incident Response Services to contain active cyberattacks, trace patient-zero entry vectors, evict malicious persistence, and restore enterprise operations securely.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <Siren className="w-4 h-4 text-sky-200" />
                  <span>Request Emergency Incident Triage</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#threat-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Radio className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 12 Response Modules</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">INCIDENT COMMAND UNIT</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    24/7 EMERGENCY TRIAGE
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Zap className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Immediate Attack Containment</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Severing adversary access, revoking compromise credentials & subnet isolation.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Search className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Patient-Zero & Root Cause Analysis</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Tracing initial breach vectors, malware payloads & lateral movement paths.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Radio className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Active Threat Hunting</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Proactively scanning endpoints & Active Directory for webshells & backdoors.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <FileCheck2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">CERT-In Compliance Briefing</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Statutory 6-hour breach notifications & executive board incident reports.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919890424040"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  <span>Call Incident Command Unit (+91 9890424040)</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 CORE SERVICES OFFERED */}
      {/* ========================================================================= */}
      <section id="threat-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              INCIDENT RESPONSE MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Threat Detection & Response <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Continuous security monitoring, emergency attack containment, malware reverse engineering, root cause analysis, and resilient system recovery.
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
                onClick={() => setActiveCategory("detection")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "detection"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Monitoring & Threat Hunting
              </button>
              <button
                onClick={() => setActiveCategory("investigation")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "investigation"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Forensic Investigation & Malware
              </button>
              <button
                onClick={() => setActiveCategory("recovery")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "recovery"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Containment, Eviction & Recovery
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
                  <span>Request Response Scope</span>
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
              Incident Response Framework
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Incident <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A structured 5-stage framework ensuring rapid breach containment, adversary eviction, and resilient operational recovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {approachStages.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00d4ff]/50 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 right-0 p-3 text-2xl font-mono font-extrabold text-slate-800 group-hover:text-[#00d4ff]/20 transition-colors">
                  {step.stage}
                </div>
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] font-mono font-bold text-xs flex items-center justify-center mb-4 border border-[#00d4ff]/20">
                    {step.stage}
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
                    {step.subtitle}
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Incident Response</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              24/7 rapid response teams, CERT-In compliance readiness, and proactive threat hunting capabilities.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Incident Response Triage
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Report Active Incident / Request Threat Triage
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding an active ransomware attack, suspicious network intrusion, compromised domain credentials, or SOC alert under strict Non-Disclosure Agreements.
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
                <h3 className="text-2xl font-bold text-white">Incident Triage Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline Incident Command. Our 24/7 incident leads will contact you immediately under strict Non-Disclosure Agreements.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Submit Another Incident Report
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
                      placeholder="e.g. S. T. Shinde / VP Security & Infrastructure"
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
                      placeholder="e.g. secops@company.com"
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
                      <option value="Banking / Financial Institution">Bank / Financial Institution</option>
                      <option value="Government / Public Sector">Government / Public Sector</option>
                      <option value="Software & SaaS Provider">Software & SaaS Provider</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Urgency & Incident Nature
                  </label>
                  <select
                    value={formData.urgencyLevel}
                    onChange={(e) => setFormData({ ...formData, urgencyLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Critical (Active Ransomware / Active Data Exfiltration)">Critical (Active Ransomware / Active Data Exfiltration)</option>
                    <option value="High (Active Incident / Suspicious Activity)">High (Suspicious Active Intrusion / Compromised ID)</option>
                    <option value="Medium (Proactive Threat Hunting / SIEM Setup)">Medium (Proactive Threat Hunting / SIEM Setup)</option>
                    <option value="Low (IR Readiness Playbook Development)">Low (IR Readiness Playbook & Tabletop Setup)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Incident Details & Affected Subnets
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on affected endpoints/servers, ransomware extension (.locked, etc.), SIEM alerts, or estimated blast radius..."
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
                    <span>Processing Incident Triage...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Incident Triage Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Incident disclosures and network telemetry remain protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
