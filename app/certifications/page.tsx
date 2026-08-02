"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Award, Shield, Search, Server, Activity, ArrowRight, CheckCircle2, Lock,
  Terminal, Cpu, Network, Briefcase, Zap, BookOpen, Clock, Users,
  Sparkles, Layers, FileCheck, ExternalLink, ChevronRight, Fingerprint,
  FileText, Globe, Code, Key, ShieldCheck, Compass, HelpCircle, MessageSquare, Eye, Crown
} from 'lucide-react';
import { CyberBackground } from "@/components/premium/cyber-background";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export interface CertificationItem {
  id: string;
  code: string;
  title: string;
  category: "eccouncil" | "core" | "forensic" | "enterprise";
  categoryName: string;
  icon: any;
  duration: string;
  mode: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  desc: string;
  competencies: string[];
  popular?: boolean;
}

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const certifications: CertificationItem[] = [
    {
      id: "ceh-v13",
      code: "CEH v13",
      title: "Certified Ethical Hacker (AI-Enhanced)",
      category: "eccouncil",
      categoryName: "EC-Council Global",
      icon: Shield,
      duration: "40 Hrs / 8 Weeks",
      mode: "Classroom & Live Online",
      level: "Intermediate",
      desc: "The world's #1 ethical hacking certification, now integrated with AI-driven threat intelligence, automated vulnerability assessment, and 20 specialized security domains.",
      competencies: [
        "AI-Assisted Hacking & Attack Vectors",
        "Web Application & Cloud Penetration",
        "Malware Analysis & Reverse Engineering",
        "Wireless & IoT System Exploitation"
      ],
      popular: true
    },
    {
      id: "chfi",
      code: "CHFI v11",
      title: "Computer Hacking Forensic Investigator",
      category: "eccouncil",
      categoryName: "EC-Council Global",
      icon: Search,
      duration: "40 Hrs / 8 Weeks",
      mode: "Classroom & Live Online",
      level: "Advanced",
      desc: "Master digital forensics and evidence analysis. Learn to identify, collect, preserve, analyze, and present court-admissible digital evidence following global legal standards.",
      competencies: [
        "Hard Disk & Volatile Memory Forensics",
        "Mobile & Cloud Investigation Frameworks",
        "Anti-Forensics Detection & Uncovering",
        "Legal Chain of Custody & Court Witness"
      ],
      popular: true
    },
    {
      id: "cnd",
      code: "CND v2",
      title: "Certified Network Defender",
      category: "eccouncil",
      categoryName: "EC-Council Global",
      icon: Server,
      duration: "40 Hrs / 8 Weeks",
      mode: "Classroom & Live Online",
      level: "Intermediate",
      desc: "Comprehensive network defense certification focusing on perimeter security, firewall architecture, VPNs, IDS/IPS configuration, and proactive security monitoring.",
      competencies: [
        "Network Perimeter & Firewall Hardening",
        "IDS/IPS Configuration & Tuning",
        "Vulnerability Scanning & Patching",
        "Zero-Trust Architecture Implementation"
      ]
    },
    {
      id: "csa",
      code: "CSA",
      title: "Certified SOC Analyst",
      category: "eccouncil",
      categoryName: "EC-Council Global",
      icon: Activity,
      duration: "40 Hrs / 8 Weeks",
      mode: "Classroom & Live Online",
      level: "Intermediate",
      desc: "First step toward working in a Security Operations Center (SOC). Master SIEM log monitoring, threat hunting, incident detection, and rapid containment protocols.",
      competencies: [
        "SIEM Log Analysis (Splunk / Elastic)",
        "SOC Incident Triage & Escalation",
        "Threat Intelligence Integration",
        "Use Case Engineering & Alert Tuning"
      ]
    },
    {
      id: "ecih",
      code: "ECIH v3",
      title: "EC-Council Certified Incident Handler",
      category: "eccouncil",
      categoryName: "EC-Council Global",
      icon: ShieldCheck,
      duration: "40 Hrs / 8 Weeks",
      mode: "Classroom & Live Online",
      level: "Intermediate",
      desc: "Lead incident response and threat containment. Master NIST SP 800-61 frameworks, volatile memory evidence preservation, ransomware containment, and post-incident recovery.",
      competencies: [
        "NIST SP 800-61 Incident Response Playbooks",
        "Live Ransomware & Threat Containment",
        "Evidence Preservation & Chain of Custody",
        "System Eradication & Root Cause Analysis"
      ]
    },
    {
      id: "ctia",
      code: "CTIA v2",
      title: "Certified Threat Intelligence Analyst",
      category: "eccouncil",
      categoryName: "EC-Council Global",
      icon: Eye,
      duration: "40 Hrs / 8 Weeks",
      mode: "Classroom & Live Online",
      level: "Advanced",
      desc: "Transform threat data into actionable cyber intelligence. Master OSINT collection, STIX/TAXII standards, OpenCTI & MISP threat sharing, and MITRE ATT&CK adversary mapping.",
      competencies: [
        "OSINT & Dark Web Threat Gathering",
        "STIX/TAXII & MISP Threat Sharing",
        "MITRE ATT&CK TTP Adversary Profiling",
        "Hypothesis-Driven Threat Hunting"
      ]
    },
    {
      id: "cciso",
      code: "CCISO",
      title: "Certified Chief Information Security Officer",
      category: "eccouncil",
      categoryName: "EC-Council Global",
      icon: Crown,
      duration: "40 Hrs / 8 Weeks",
      mode: "Executive Classroom & Online",
      level: "Expert",
      desc: "The gold standard executive credential. Align security strategy with business objectives across 5 domains: Governance, Risk Management, Program Ops, Core Controls, and Financial Planning.",
      competencies: [
        "Information Security Governance & Policy",
        "Enterprise Risk Management & GRC",
        "Cyber Crisis Management & Boardroom Metrics",
        "Security Budgeting, ROI & Resource Allocation"
      ],
      popular: true
    },
    {
      id: "cpent",
      code: "CPENT",
      title: "Certified Penetration Testing Professional",
      category: "eccouncil",
      categoryName: "EC-Council Global",
      icon: Zap,
      duration: "40 Hrs / 8 Weeks",
      mode: "Classroom & Live Cyber Range",
      level: "Expert",
      desc: "Master advanced penetration testing. Perform multi-tiered enterprise range exploitation, Active Directory attacks, double pivoting, and custom binary modification.",
      competencies: [
        "Active Directory & Kerberos Attack Chains",
        "Multi-Homed Network Double Pivoting",
        "Cloud & Web API Penetration Testing",
        "Professional Red Team Report Writing"
      ],
      popular: true
    },
    {
      id: "ics-scada",
      code: "SPEC-02",
      title: "ICS/SCADA Security & Critical Infrastructure",
      category: "enterprise",
      categoryName: "Industrial & Enterprise Track",
      icon: Cpu,
      duration: "40 Hrs / 8 Weeks",
      mode: "Classroom & Practical OT Lab",
      level: "Advanced",
      desc: "Protect industrial control systems and operational technology against cyber threats. Master Purdue model architecture, Modbus/DNP3 deep packet inspection, and OT ransomware containment.",
      competencies: [
        "Purdue Model Architecture & OT Micro-Segmentation",
        "Modbus TCP & DNP3 Protocol Analysis",
        "ISA/IEC 62443 & NIST SP 800-82 Risk Assessment",
        "Industrial Emergency Containment & OT Forensics"
      ]
    },
    {
      id: "linux-cyber",
      code: "CORE-01",
      title: "Linux for Cybersecurity & Forensics",
      category: "core",
      categoryName: "Core Technical Track",
      icon: Terminal,
      duration: "30 Hrs / 6 Weeks",
      mode: "100% Practical Hands-On",
      level: "Beginner",
      desc: "Command-line to containment. Master Linux security administration, kernel hardening, bash scripting for automation, systemd logging, and live forensic acquisition.",
      competencies: [
        "Advanced Linux Command Line Mastery",
        "Security Administration & Permissions",
        "Bash & Python Security Automation",
        "System Log Analysis & Process Forensics"
      ]
    },
    {
      id: "cyber-networking",
      code: "CORE-02",
      title: "Cyber-Savvy Networking & Packet Analysis",
      category: "core",
      categoryName: "Core Technical Track",
      icon: Network,
      duration: "30 Hrs / 6 Weeks",
      mode: "100% Practical Hands-On",
      level: "Beginner",
      desc: "Fundamentals for defenders. Deep-dive into TCP/IP protocol architecture, Wireshark packet capture, routing security, DNS analysis, and network traffic decapsulation.",
      competencies: [
        "TCP/IP & OSI Layer Deep Dive",
        "Wireshark Live Packet Analysis",
        "Network Protocol Anomaly Detection",
        "Router & Switch Security Baseline"
      ]
    },
    {
      id: "doc-forensics",
      code: "SPEC-01",
      title: "Forensic Document Examination",
      category: "forensic",
      categoryName: "Forensic Specialization",
      icon: BookOpen,
      duration: "40 Hrs / 8 Weeks",
      mode: "Specialized Physical Lab",
      level: "Advanced",
      desc: "Advanced physical forensic verification. Learn to detect handwriting forgeries, ink composition differences, paper tampering, typewriter analysis, and stamp verification.",
      competencies: [
        "Handwriting & Signature Verification",
        "Ink Chromatography & Paper Analysis",
        "Counterfeit Currency & Document Inspection",
        "Optical Microscopy & VSC Examination"
      ]
    },
    {
      id: "fingerprint-lab",
      code: "SPEC-02",
      title: "Forensic Fingerprint & Biometric Lab",
      category: "forensic",
      categoryName: "Forensic Specialization",
      icon: Fingerprint,
      duration: "40 Hrs / 8 Weeks",
      mode: "Specialized Physical Lab",
      level: "Advanced",
      desc: "Latent fingerprint development and biometric comparison. Methodological approach to lifting prints using powdering, chemical fuming, ridge analysis, and AFIS database matching.",
      competencies: [
        "Latent Print Lifting & Chemical Fuming",
        "Fingerprint Ridge Analysis & Classification",
        "AFIS Database Comparison & Matching",
        "Biometric Forensic Evidence Reports"
      ]
    }
  ];

  const upcomingCertifications = [
    { title: "CPENT | Certified Penetration Testing Professional", partner: "EC-Council", icon: Code, tag: "Advanced Pen Testing" },
    { title: "ECIH | Certified Incident Handler", partner: "EC-Council", icon: ShieldCheck, tag: "Incident Response" },
    { title: "CTIA | Certified Threat Intelligence Analyst", partner: "EC-Council", icon: Search, tag: "Threat Intel" },
    { title: "CCISO | Chief Information Security Officer", partner: "EC-Council", icon: Lock, tag: "Executive Leadership" },
    { title: "ICS/SCADA Industrial Cybersecurity", partner: "Skyline Specialized", icon: Cpu, tag: "Critical Infrastructure" }
  ];

  const filteredCertifications = activeCategory === "all"
    ? certifications
    : certifications.filter(c => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden pb-24">
      {/* HERO SECTION */}
      <section className="relative w-full flex items-center justify-center pt-32 sm:pt-40 pb-16 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/hero/hero1.png"
            alt="Certifications Center Backdrop"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-25 mix-blend-luminosity object-center"
          />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.3)_0%,_#020617_95%)]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-slate-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.15)]"
          >
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>EC-Council Authorized Accredited Training Center</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-tight text-white"
          >
            Global Cyber & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]">Forensic Certifications</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Master globally accredited EC-Council programs and hands-on technical tracks delivered in state-of-the-art cyber simulation ranges.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            {[
              { label: "EC-Council ATC", desc: "Global Accredited Center", icon: Award },
              { label: "100% Practical Labs", desc: "Live Attack Ranges", icon: Terminal },
              { label: "Official Vouchers", desc: "Global Exam Support", icon: FileCheck },
              { label: "Career Support", desc: "Dedicated Placement", icon: Briefcase }
            ].map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <Icon className="w-4 h-4 text-[#38BDF8] mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">{m.label}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{m.desc}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* LOWER PAGE CONTAINER */}
      <div className="relative z-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* CATEGORY FILTER TABS */}
        {/* ========================================================================= */}
        <section className="py-6 mb-10 border-t border-b border-slate-800/80">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: "all", label: "All Certifications" },
              { id: "eccouncil", label: "EC-Council Global" },
              { id: "core", label: "Core Technical Tracks" },
              { id: "forensic", label: "Forensic Specializations" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-gradient-to-r from-[#0055FF] to-[#38BDF8] text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CERTIFICATIONS SHOWCASE GRID */}
        {/* ========================================================================= */}
        <section className="py-6 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {filteredCertifications.map((cert) => {
              const IconComp = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800 hover:border-[#38BDF8]/60 p-6 sm:p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 shadow-xl group hover:-translate-y-1 relative flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Bar: Icon + Partner Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-3.5 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-colors shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-extrabold text-[#38BDF8] uppercase tracking-widest">{cert.code}</span>
                          <div className="text-[10px] text-slate-400 font-medium">Level: {cert.level}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {cert.popular && (
                          <span className="text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0055FF]/20 text-[#38BDF8] border border-[#38BDF8]/40">
                            ★ POPULAR
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                          {cert.categoryName}
                        </span>
                      </div>
                    </div>

                    {/* Certification Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Course Metadata Pills */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-5 text-xs text-slate-300 font-medium">
                      <span className="px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#38BDF8]" /> {cert.duration}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#38BDF8]" /> {cert.mode}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {cert.desc}
                    </p>

                    {/* Competencies Checklist */}
                    <div className="space-y-2 pt-4 border-t border-slate-800/80 mb-6">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-2 font-bold">Key Technical Modules</div>
                      {cert.competencies.map((comp, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2.5">
                    <Link
                      href={
                        cert.id === "ceh-v13" ? "/certifications/ceh-v13" :
                        cert.id === "chfi" ? "/certifications/chfi" :
                        cert.id === "linux-cyber" || cert.id === "linux-cybersecurity" ? "/certifications/linux-cybersecurity" :
                        cert.id === "cyber-networking" || cert.id === "networking-defender" ? "/certifications/networking-defender" :
                        cert.id === "doc-forensics" ? "/trainings/document-examination" :
                        cert.id === "fingerprint-lab" ? "/trainings/fingerprint" :
                        `/certifications/${cert.id}`
                      }
                      className="w-full sm:w-auto flex-1 py-3 px-4 bg-gradient-to-r from-[#0055FF] to-[#38BDF8] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl text-center shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>View Course Details</span> <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/admissions"
                      className="w-full sm:w-auto py-3 px-4 bg-slate-950 border border-slate-800 hover:border-[#38BDF8]/60 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center transition-all"
                    >
                      Enroll
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* CERTIFICATION LEARNING PATH / ROADMAP */}
        {/* ========================================================================= */}
        <section className="py-16 border-t border-slate-800/80 mb-20 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> Career Progression
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Recommended Certification <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Roadmap</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              A structured progression pathway from IT fundamentals to advanced cyber forensics and SOC operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "STAGE 01",
                title: "Foundation & Core Systems",
                level: "Beginner Track",
                courses: ["Linux for Cybersecurity", "Cyber-Savvy Networking"],
                icon: Terminal,
                color: "from-sky-500/20 to-slate-900"
              },
              {
                step: "STAGE 02",
                title: "Ethical Hacking & Defense",
                level: "Intermediate Global",
                courses: ["CEH v13 (Certified Ethical Hacker)", "CND (Certified Network Defender)"],
                icon: Shield,
                color: "from-[#0055FF]/20 to-slate-900"
              },
              {
                step: "STAGE 03",
                title: "Forensics & SOC Operations",
                level: "Advanced Specialization",
                courses: ["CHFI Forensic Investigator", "CSA Certified SOC Analyst", "Forensic Document Examination"],
                icon: Search,
                color: "from-[#38BDF8]/20 to-slate-900"
              }
            ].map((st, idx) => {
              const IconComp = st.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl backdrop-blur-sm shadow-xl relative overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono font-extrabold text-[#38BDF8] uppercase tracking-widest">{st.step}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800">{st.level}</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] w-fit mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{st.title}</h3>

                    <div className="space-y-2 mb-6">
                      {st.courses.map((c, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] text-[#38BDF8] font-bold flex items-center justify-between">
                    <span>Career Level 0{idx + 1}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* UPCOMING CERTIFICATIONS MATRIX */}
        {/* ========================================================================= */}
        <section className="py-16 border-t border-slate-800/80 mb-20 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Upcoming Batches
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Future-Proof <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Upcoming Certifications</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Pre-register your interest for upcoming specialized global certifications.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingCertifications.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="bg-slate-900/60 border border-slate-800 hover:border-[#38BDF8]/50 p-5 rounded-2xl backdrop-blur-sm transition-all flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-colors shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#38BDF8] font-bold uppercase">{item.tag}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">{item.title}</h4>
                    </div>
                  </div>

                  <Link
                    href={`https://wa.me/919890424040?text=I%20am%20interested%20in%20pre-registering%20for%20the%20upcoming%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-[#38BDF8]/60 transition-colors shrink-0"
                    title="Register Interest"
                  >
                    <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="py-16 border-t border-slate-800/80 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative overflow-hidden p-6 sm:p-12 rounded-3xl bg-slate-900/90 border border-[#38BDF8]/40 text-center">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-[#38BDF8]/40 text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" /> Start Certification Training
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Earn Globally Accredited Cyber Credentials?
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Connect with our certification advisors, verify course prerequisites, and reserve your seat for the upcoming practical training batch.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] to-[#38BDF8] text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all text-center"
                >
                  Apply For Admission
                </Link>
                <Link
                  href="https://wa.me/919890424040"
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-extrabold text-xs uppercase tracking-widest hover:border-[#38BDF8]/60 hover:text-white transition-all text-center"
                >
                  Speak With A Certification Counselor
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
