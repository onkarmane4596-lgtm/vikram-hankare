"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Search,
  ShieldCheck,
  ShieldAlert,
  Cpu,
  HardDrive,
  Smartphone,
  Server,
  Globe,
  Lock,
  FileCheck2,
  FileText,
  Terminal,
  Activity,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Scale,
  Building2,
  Sparkles,
  Send,
  Check,
  Shield,
  Layers,
  FileCode,
  Database,
  Wifi,
  AlertTriangle,
  Briefcase,
  Mail,
  User,
  Clock,
  KeyRound,
  Download,
  Phone,
  Radio,
  FileSpreadsheet,
  Layers3
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

export default function DigitalForensicsServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "media" | "network" | "incident">("all");

  // Investigation Approach Stages (5 Stages)
  const approachStages = [
    {
      stage: "01",
      title: "Identification & Preservation",
      subtitle: "Containment & Volatile Evidence Capture",
      desc: "Rapid incident assessment, isolating affected systems, volatile RAM acquisition, write-blocked media preservation, and establishing uncompromised chain of custody records.",
      icon: Lock,
      highlights: ["Volatile RAM Capture", "Write-Blocked Media Isolation", "Chain of Custody Tracking"]
    },
    {
      stage: "02",
      title: "Forensic Acquisition",
      subtitle: "Bitstream Disk & Cloud Harvesting",
      desc: "Creating bit-stream forensic images (E01/RAW/DD), chip-off / JTAG mobile extractions, cloud API evidence harvesting, and verifying cryptographic hashes (SHA-256 / MD5).",
      icon: HardDrive,
      highlights: ["Bitstream Image Duplication", "Cryptographic Hash Validation", "Mobile & Cloud Harvesting"]
    },
    {
      stage: "03",
      title: "In-Depth Analysis",
      subtitle: "Artifact Parsing & Deep Forensic Inspection",
      desc: "Microscopic artifact parsing, unallocated space carving, registry timeline analysis, email header tracing, malware reverse engineering, and deleted data recovery.",
      icon: Cpu,
      highlights: ["File System Timeline Parsing", "Deleted Data Carving", "Malware & Log Inspection"]
    },
    {
      stage: "04",
      title: "Correlation & Reconstruction",
      subtitle: "Cross-System Footprint Mapping",
      desc: "Synthesizing disparate digital footprints across endpoints, domain controllers, firewall logs, and cloud services to reconstruct the exact timeline of user activity and attacker TTPs.",
      icon: Activity,
      highlights: ["Multi-Device Log Correlation", "User Activity Mapping", "Attack Chain Timeline"]
    },
    {
      stage: "05",
      title: "Reporting & Expert Opinion",
      subtitle: "Court-Ready Forensic Documentation",
      desc: "Formulating objective, peer-reviewed forensic investigation reports, technical briefs, and court-admissible documentation backed by sworn expert witness testimony.",
      icon: FileCheck2,
      highlights: ["Court-Admissible Reports", "Technical Briefings", "Expert Witness Testimony"]
    }
  ];

  // Core Service Modules
  const serviceModules = [
    {
      code: "MODULE: MEDIA-01",
      title: "Computer & Endpoint Forensics",
      category: "media",
      icon: HardDrive,
      desc: "Deep-level investigation of Windows, macOS, and Linux workstations, laptops, and servers to uncover user activity and system manipulation.",
      capabilities: [
        "Unallocated space data carving & file recovery",
        "Registry & System Artifact Analysis (LNK, Prefetch, Shimcache)",
        "Email & Chat communication reconstruction",
        "USB & external storage connection history"
      ]
    },
    {
      code: "MODULE: MEDIA-02",
      title: "Mobile & IoT Device Forensics",
      category: "media",
      icon: Smartphone,
      desc: "Physical and logical extractions of iOS, Android, encrypted messaging apps, GPS telemetry, and smart IoT device logs.",
      capabilities: [
        "Encrypted backup parsing (WhatsApp, Signal, Telegram)",
        "Location history & cell tower triangulation data",
        "Application artifact & SQLite database extraction",
        "Bypassing screen locks & hardware-level acquisitions"
      ]
    },
    {
      code: "MODULE: NET-01",
      title: "Network & Traffic Forensics",
      category: "network",
      icon: Wifi,
      desc: "Full packet capture (PCAP) parsing, firewall log analysis, proxy audit trails, and tracing unauthorized network intrusions.",
      capabilities: [
        "Packet-level intrusion analysis & C2 channel tracing",
        "NetFlow & VPN connection log correlation",
        "DNS query log auditing & beaconing detection",
        "Rogue device identification on corporate networks"
      ]
    },
    {
      code: "MODULE: NET-02",
      title: "Cloud & Virtual Environment Forensics",
      category: "network",
      icon: Server,
      desc: "Forensic audits of AWS, Azure, Google Cloud, Microsoft 365, and virtualized hypervisors for unauthorized access and data exfiltration.",
      capabilities: [
        "M365 & Google Workspace audit log examination",
        "Cloud storage bucket access & download timeline",
        "IAM role elevation & account takeover analysis",
        "VM snapshot forensic imaging & memory dump parsing"
      ]
    },
    {
      code: "MODULE: INC-01",
      title: "Ransomware & Malware Analysis",
      category: "incident",
      icon: FileCode,
      desc: "Static and dynamic analysis of malicious binaries, ransomware payloads, rootkits, and fileless malware persistence mechanisms.",
      capabilities: [
        "Disassembly & decompilation of malicious executables",
        "Initial access vector & patient zero identification",
        "Ransomware encryption key feasibility analysis",
        "Indicator of Compromise (IoC) extraction & rule generation"
      ]
    },
    {
      code: "MODULE: INC-02",
      title: "Insider Threat & Data Exfiltration",
      category: "incident",
      icon: Lock,
      desc: "Investigating IP theft, employee misconduct, unauthorized database queries, and covert data exfiltration prior to resignation.",
      capabilities: [
        "Cloud upload & webmail attachment tracing",
        "Removable media file transfer auditing",
        "Print spooler & document access log parsing",
        "Steganography & encrypted archive detection"
      ]
    }
  ];

  // Deliverables List (12 Key Deliverables)
  const deliverables = [
    { title: "Digital Forensic Investigation Reports", icon: FileText, tag: "PRIMARY REPORT", code: "EVD-01" },
    { title: "Cyber Incident Investigation Reports", icon: AlertTriangle, tag: "INCIDENT RESPONSE", code: "EVD-02" },
    { title: "Digital Evidence Collection & Preservation Docs", icon: Lock, tag: "CHAIN OF CUSTODY", code: "EVD-03" },
    { title: "Chain of Custody Records & Audit Logs", icon: FileCheck2, tag: "LEGAL COMPLIANCE", code: "EVD-04" },
    { title: "Device Examination Reports (Disk, Mobile, Storage)", icon: HardDrive, tag: "MEDIA ANALYSIS", code: "EVD-05" },
    { title: "Timeline and User Activity Analysis", icon: Clock, tag: "CHRONOLOGY", code: "EVD-06" },
    { title: "Malware & Ransomware Analysis Reports", icon: FileCode, tag: "PAYLOAD DEEP DIVE", code: "EVD-07" },
    { title: "Network and Log Analysis Reports", icon: Server, tag: "TRAFFIC AUDIT", code: "EVD-08" },
    { title: "Data Recovery & File Reconstruction Reports", icon: Database, tag: "RECOVERY AUDIT", code: "EVD-09" },
    { title: "Expert Technical Opinions", icon: Scale, tag: "LITIGATION SUPPORT", code: "EVD-10" },
    { title: "Court-Ready Forensic Documentation", icon: ShieldCheck, tag: "ADMISSIBLE EVIDENCE", code: "EVD-11" },
    { title: "Technical Briefings for Investigators & Legal Teams", icon: User, tag: "ADVISORY BRIEF", code: "EVD-12" }
  ];

  // Why Choose Us Pillars (6 Value Pillars)
  const pillars = [
    {
      title: "Scientific & Evidence-Based Approach",
      desc: "Our investigations rely on validated forensic methodologies and objective analysis, ensuring conclusions are supported by verifiable digital evidence.",
      icon: Search,
      node: "01 // METHODOLOGY"
    },
    {
      title: "Experienced Forensic Professionals",
      desc: "Our multidisciplinary team combines expertise in cybersecurity, digital forensics, incident response, and cyber investigations to handle complex cases with precision.",
      icon: ShieldCheck,
      node: "02 // EXPERTISE"
    },
    {
      title: "Advanced Forensic Technologies",
      desc: "We employ industry-standard forensic tools and modern investigative techniques to analyze digital devices, networks, cloud environments, and cyber incidents efficiently and accurately.",
      icon: Cpu,
      node: "03 // TECHNOLOGY"
    },
    {
      title: "Integrity & Confidentiality",
      desc: "Every engagement is handled with the highest level of professionalism, maintaining strict confidentiality and preserving the integrity of all digital evidence.",
      icon: Lock,
      node: "04 // CONFIDENTIALITY"
    },
    {
      title: "Legal & Regulatory Compliance",
      desc: "Our forensic processes align with internationally accepted best practices, ensuring evidence is collected, preserved, and documented in a legally defensible manner.",
      icon: Scale,
      node: "05 // COMPLIANCE"
    },
    {
      title: "Comprehensive Investigation Support",
      desc: "From initial incident response and evidence preservation to forensic analysis, expert reporting, and litigation support, Skyline provides complete end-to-end forensic consultancy under one roof.",
      icon: Layers,
      node: "06 // END-TO-END"
    }
  ];

  // Beneficiaries
  const targetSectors = [
    { title: "Law Enforcement & Security Agencies", desc: "Mobile data extractions, electronic evidence chain of custody, and forensic crime triage.", icon: ShieldAlert },
    { title: "Corporate Enterprises & Financial Institutions", desc: "Insider threat audits, IP exfiltration tracing, ransomware containment, and compromise assessments.", icon: Building2 },
    { title: "Legal Professionals & Defense Attorneys", desc: "Sec 65B Indian Evidence Act compliance, expert witness testimony, and independent report review.", icon: Scale },
    { title: "Government Departments & Regulatory Bodies", desc: "PSU IT infrastructure breaches, sovereign data leak triage, and compliance audits.", icon: Globe },
    { title: "Insurance Underwriters & Risk Managers", desc: "Root cause analysis, cyber claim validation, and ransomware loss verification.", icon: FileSpreadsheet },
    { title: "Private Investigators & High-Net-Worth Individuals", desc: "Unauthorised access detection, spyware removal, and personal digital asset audits.", icon: User }
  ];

  const filteredModules = activeCategory === "all"
    ? serviceModules
    : serviceModules.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pb-24 overflow-x-hidden relative">

      {/* BACKGROUND GRAPHIC GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* BACKGROUND AMBIENT LIGHTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#00d4ff]/8 rounded-full blur-[220px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 1. ENTERPRISE SERVICES HERO SECTION (COMMAND CONSOLE LAYOUT) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-cyan-900/30 z-10">
        {/* Hero Background Texture */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Digital & Cyber Forensics Header Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 filter brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/85 to-[#020617]" />
        </div>

        {/* Top Laser Edge */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent shadow-[0_0_15px_#00d4ff]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Service Console Header Bar */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <Link href="/services" className="hover:text-[#00d4ff] transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-[#00d4ff] font-bold">Digital & Cyber Forensics</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-DFIR-01</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content Column */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              {/* Pillar Tag */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <Cpu className="w-4 h-4 text-[#00d4ff]" /> DIGITAL & CYBER FORENSICS CONSULTANCY
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Digital & Cyber <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Forensics Services</span>
              </motion.h1>

              {/* Mission Statement */}
              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                In today&apos;s digitally connected world, cyber incidents can have significant legal, financial, and reputational consequences. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we provide comprehensive Digital &amp; Cyber Forensics Consultancy Services to help organizations, law enforcement agencies, legal professionals, and individuals investigate cyber incidents, recover digital evidence, and uncover the truth through scientifically sound forensic methodologies.
              </motion.p>

              {/* Dual Action CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#case-intake"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <ShieldCheck className="w-4 h-4 text-sky-200" />
                  <span>Request Forensic Case Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#deliverables-section"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#00d4ff]" />
                  <span>View Forensic Deliverables</span>
                </a>
              </motion.div>

            </motion.div>

            {/* Right Interactive Laboratory Console Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-900/40 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] relative overflow-hidden group">
                
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-[#0055FF]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Console Badge */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#00d4ff] animate-ping" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">LAB DISPATCH STATUS</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    ISO/IEC 27037 VALIDATED
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <ShieldCheck className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Scientific Evidence Standard</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Strict adherence to validated forensic procedures & zero-contamination policies.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <HardDrive className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Deep Media Extractions</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Physical & bit-stream imaging of encrypted disks, mobile hardware & cloud nodes.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Lock className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Strict Chain of Custody</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Cryptographic SHA-256 hash tracking and secure forensic vault storage.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Scale className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Court-Admissible Findings</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Indian Evidence Act Section 65B compliance & expert witness testimony.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919890424040"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff] group-hover/btn:animate-bounce" />
                  <span>Confidential Unit (+91 9890424040)</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE PHILOSOPHY & LEGAL ADMISSIBILITY HUB */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-slate-950/80 border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-80" />

            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00d4ff] uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-[#00d4ff]" /> INTEGRITY, CONFIDENTIALITY & LEGAL COMPLIANCE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  Uncovering Objective Digital Truth While Maintaining Absolute Integrity
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  Our forensic experts specialize in identifying, preserving, analyzing, and presenting digital evidence while maintaining the highest standards of integrity, confidentiality, and legal compliance. Every investigation follows internationally accepted forensic procedures to ensure that digital evidence remains authentic, reliable, and admissible in judicial and administrative proceedings.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Whether responding to cybercrime, corporate fraud, data breaches, insider threats, intellectual property theft, or digital disputes, Skyline delivers impartial, evidence-based forensic solutions that support investigations and informed decision-making. Our team utilizes industry-recognized forensic tools and proven investigative techniques to ensure accurate findings while preserving the integrity of digital evidence.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
                  <Terminal className="w-6 h-6 text-[#00d4ff] shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Proven Cyber Tools</h4>
                    <p className="text-xs text-slate-400">EnCase, FTK, Autopsy, Volatility</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
                  <Database className="w-6 h-6 text-[#00d4ff] shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Cryptographic Verification</h4>
                    <p className="text-xs text-slate-400">MD5 / SHA-256 Hash Matching</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
                  <Scale className="w-6 h-6 text-[#00d4ff] shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Judicial Admissibility</h4>
                    <p className="text-xs text-slate-400">Indian Evidence Act Sec 65B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INVESTIGATION APPROACH (5-STAGE CHAIN OF CUSTODY PROTOCOL) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/60 border-y border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00d4ff]/30">
              Standard Operating Procedure
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our Forensic Investigation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Methodology</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A 5-stage scientific protocol ensuring digital evidence authenticity, zero contamination, and legally defensible findings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {approachStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00d4ff]/50 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 right-0 p-3 text-2xl font-mono font-extrabold text-slate-800 group-hover:text-[#00d4ff]/20 transition-colors">
                  {stage.stage}
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center mb-4 group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                    <stage.icon className="w-5 h-5 text-[#00d4ff] group-hover:text-slate-950" />
                  </div>
                  <h4 className="text-white font-bold text-base mb-1 group-hover:text-[#00d4ff] transition-colors">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] text-[#00d4ff] font-mono font-semibold mb-3">
                    {stage.subtitle}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-slate-800">
                  {stage.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-[#00d4ff] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SPECIALIZED FORENSIC DOMAINS (INTERACTIVE SERVICE MATRIX) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              TECHNICAL CAPABILITY MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Specialized Forensic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Domains</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              End-to-end analytical capabilities spanning endpoints, mobile hardware, network traffic, cloud hypervisors, and ransomware payloads.
            </p>

            {/* CATEGORY FILTER */}
            <div className="inline-flex p-1.5 mt-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex-wrap justify-center gap-1.5 shadow-xl">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                All Capabilities
              </button>
              <button
                onClick={() => setActiveCategory("media")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "media"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Computer & Mobile Media
              </button>
              <button
                onClick={() => setActiveCategory("network")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "network"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Network & Cloud
              </button>
              <button
                onClick={() => setActiveCategory("incident")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "incident"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Ransomware & Insider Threats
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((mod, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-7 rounded-3xl bg-slate-950/90 border border-slate-800 hover:border-[#00d4ff]/40 transition-all group flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                      <mod.icon className="w-6 h-6 text-[#00d4ff] group-hover:text-slate-950" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#00d4ff] bg-[#00d4ff]/10 px-2.5 py-1 rounded-full border border-[#00d4ff]/20 uppercase">
                      {mod.code}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {mod.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {mod.capabilities.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00d4ff] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#case-intake"
                  className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-[#00d4ff] font-bold group-hover:text-white transition-colors"
                >
                  <span>Inquire for Investigation</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00d4ff]" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INVESTIGATIVE DELIVERABLES (EVIDENCE VAULT MATRIX) */}
      {/* ========================================================================= */}
      <section id="deliverables-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-t border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00d4ff]/30">
              Forensic Output & Documentation
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Investigative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Deliverables</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Skyline provides clear, comprehensive, and professionally prepared forensic documentation tailored to investigative and legal requirements.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((d, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.5 }}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-[#00d4ff]/40 transition-all group flex items-start gap-4 shadow-lg relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center shrink-0 group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                  <d.icon className="w-5 h-5 text-[#00d4ff] group-hover:text-slate-950" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-white font-bold text-sm leading-snug group-hover:text-[#00d4ff] transition-colors">
                      {d.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="inline-block text-[9px] font-mono font-bold text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded border border-[#00d4ff]/20 uppercase">
                      {d.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{d.code}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center max-w-3xl mx-auto shadow-xl">
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              <strong className="text-white">Quality Assurance:</strong> Each report is prepared with clarity, technical accuracy, supporting evidence hashes, and visual timeline charts to facilitate effective decision-making and legal admissibility.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY CHOOSE SKYLINE (INSTITUTIONAL EVIDENCE STANDARDS GRID) */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Engineered for accuracy, legal compliance, and absolute objective integrity in digital investigations.
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
      {/* 7. BENEFICIARIES & TARGET SECTORS (ENTERPRISE ACCESS HUB) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/70 border-t border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider border border-[#00d4ff]/30">
                <Briefcase className="w-4 h-4 text-[#00d4ff]" /> Beneficiaries & Sectors
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Who We Serve
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                From initial incident response and evidence preservation to forensic analysis, expert reporting, and litigation support, Skyline provides complete end-to-end forensic consultancy under one roof.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {targetSectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00d4ff]/40 transition-all flex items-start gap-3.5 shadow-md group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                    <sector.icon className="w-4 h-4 text-[#00d4ff] group-hover:text-slate-950" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm block group-hover:text-[#00d4ff] transition-colors">
                      {sector.title}
                    </span>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. UNIFIED HIGH-CONVERTING INCIDENT RESPONSE INTAKE CONSOLE */}
      {/* ========================================================================= */}
      <section id="case-intake" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden p-8 sm:p-14 rounded-3xl bg-slate-950/95 border border-[#00d4ff]/40 text-center shadow-2xl">
            
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent shadow-[0_0_20px_#00d4ff]" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#0055FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-[#00d4ff]/40 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Cyber Forensics Unit
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Require Expert Digital Forensic Examination or Incident Response?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Consult with our senior digital forensic investigators, reserve emergency incident triage, or request a Sec 65B evidence certificate under strict NDA.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact?service=Digital+Forensics"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-[#00d4ff]/40"
                >
                  <ShieldCheck className="w-4 h-4 text-sky-200" />
                  <span>Request Confidential Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919890424040"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#00d4ff]/60 text-slate-200 hover:text-white text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  <span>Call Forensic Unit (+91 9890424040)</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
