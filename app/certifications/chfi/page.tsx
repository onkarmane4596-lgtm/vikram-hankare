"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Lock,
  Building2,
  Mail,
  Send,
  Check,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Cpu,
  UserCheck,
  FileCheck2,
  HardDrive,
  Scale
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

export default function CHFICertificationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applicantCategory: "Digital Forensic Investigator",
    preferredMode: "Classroom (EC-Council ATC Lab)",
    message: ""
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
        applicantCategory: "Digital Forensic Investigator",
        preferredMode: "Classroom (EC-Council ATC Lab)",
        message: ""
      });
    }, 1200);
  };

  const programHighlights = [
    "Fundamentals of Digital Forensics & Scientific Evidence Principles",
    "Digital Evidence Identification, Acquisition, Seizure, and Chain of Custody",
    "Legal Considerations, Search Warrants, and Courtroom Admissibility Standards",
    "Computer Crime Investigation Methodologies & Incident Response Frameworks",
    "Write-Blocked Hardware/Software Disk Imaging & Evidence Verification (MD5/SHA256)",
    "Windows Forensics (Registry, Prefetch, LNK, MFT, Event Logs, UserAssist)",
    "Linux Forensics (Ext4/XFS File Systems, Systemd Logs, Shell Histories)",
    "Mobile Device Forensics (iOS & Android Logical/Physical Extractions & SQLite DB Parsing)",
    "Volatile RAM Memory Forensics & Live System Triage (Volatility, FTK)",
    "Email Header Forensic Tracing, Web Browser History & Social Media Artifacts",
    "Log Correlation, Super-Timeline Analysis, and Incident Event Reconstruction",
    "Malware Analysis & Ransomware Incident Investigation Basics",
    "Cloud & Network Forensics (AWS/Azure Log Inspection & Packet PCAP Carving)",
    "Anti-Forensic Techniques Detection (Steganography, Data Hiding, Wiping)",
    "File Recovery, Unallocated Space Data Carving & Header/Footer Rebuilding",
    "Professional Forensic Report Writing & Section 45 Courtroom Presentation"
  ];

  const practicalTraining = [
    "Bit-Stream Evidence Acquisition & Hash Integrity Verification using Write-Blockers",
    "Disk Imaging & Verification using FTK Imager, EnCase & Autopsy Forensic Suites",
    "Windows System Artifact Examination (MFT, Registry Hives, Event Logs)",
    "Linux Server Log Parsing and Shell History Reconstruction",
    "Android & iOS Device Logical Backup Parsing and Chat Database Recovery",
    "Volatile RAM Dump Analysis isolating malicious DLL injections and network sockets",
    "Email Header Analysis & Tracing Malicious Phishing Origin IPs",
    "Log Correlation, Event ID Filtering, and Super-Timeline Event Reconstruction",
    "Steganography Detection, Password Cracking, and Encrypted Volume Carving",
    "Drafting Court-Admissible Forensic Examination Reports and Expert Witness Mock Testimony"
  ];

  const careerRoles = [
    { title: "Digital Forensic Investigator", desc: "Government & Private Forensic Labs" },
    { title: "Cyber Crime Investigator", desc: "State Cyber Cell & Police Agencies" },
    { title: "Incident Response Analyst", desc: "DFIR Containment & Triage Teams" },
    { title: "Digital Evidence Examiner", desc: "Legal & Forensic Lab Specialist" },
    { title: "Malware Analyst", desc: "Reverse Engineering & Threat Labs" },
    { title: "Cybersecurity Consultant", desc: "Corporate Incident Management" },
    { title: "Information Security Analyst", desc: "Enterprise Audit & Threat Hunting" },
    { title: "Threat Intelligence Analyst", desc: "IOC & Dark Web Intelligence" },
    { title: "SOC Analyst Tier 3", desc: "Advanced Breach Investigation" },
    { title: "eDiscovery Specialist", desc: "Legal Electronic Evidence Discovery" },
    { title: "Cyber Investigation Consultant", desc: "Private Consultancy Specialist" },
    { title: "Forensic Consultant", desc: "Independent Forensic Expert Witness" }
  ];

  const targetAudience = [
    "Digital Forensic Professionals seeking global EC-Council credential",
    "Cybersecurity Professionals and DFIR Specialists",
    "Law Enforcement Personnel, Cyber Cell Officers & Police Investigators",
    "Incident Response Teams and Threat Hunters",
    "Information Security Analysts and SOC Engineers",
    "IT Auditors, Fraud Examiners & Risk Compliance Professionals",
    "System & Network Administrators handling breach investigations",
    "Engineering, B.Sc. Forensic Science & BCA Graduates"
  ];

  const whyChoosePillars = [
    {
      title: "EC-Council Authorized ATC",
      desc: "Receive official instructor-led CHFI training from an EC-Council Authorized Accredited Training Centre (ATC), guaranteeing globally recognized curriculum, official forensic iLabs, and authentic learning resources.",
      icon: Award
    },
    {
      title: "Expert Forensic Faculty",
      desc: "Learn from experienced digital forensic investigators, court expert witnesses, and incident response leaders with extensive real-world case experience.",
      icon: GraduationCap
    },
    {
      title: "Industry-Focused Practical Learning",
      desc: "Our emphasis on hands-on laboratory exercises, live evidence extractions, and simulated cybercrime cases enables participants to confidently conduct forensic investigations.",
      icon: Search
    },
    {
      title: "Certification & Career Readiness",
      desc: "Skyline prepares participants for both the official CHFI examination and high-impact careers in digital forensics through structured mentoring and exam preparation.",
      icon: Briefcase
    },
    {
      title: "Advanced Digital Forensic Labs",
      desc: "Train in professionally designed forensic laboratories equipped with write-blockers, FTK, Autopsy, Volatility, and hardware investigation workstations.",
      icon: HardDrive
    }
  ];

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
            alt="Computer Hacking Forensic Investigator CHFI Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/75 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/certifications" className="hover:text-[#00d4ff] transition-colors">Certifications</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">CHFI</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-[#00d4ff]" /> Official EC-Council Authorized ATC Program
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Computer Hacking Forensic Investigator <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">(CHFI v11)</span>
            </motion.h1>

            {/* Subtitle & Overview */}
            <motion.p variants={fadeUp} className="text-lg font-semibold text-[#00d4ff] mb-4">
              Master Digital Forensics. Investigate Cyber Incidents with Scientific Precision.
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              In today&apos;s digital era, cyber incidents have become increasingly sophisticated, making digital evidence a critical component of modern investigations. The <strong className="text-white font-semibold">Computer Hacking Forensic Investigator (CHFI)</strong> certification by EC-Council is a globally recognized credential equipping professionals with advanced knowledge in digital forensics and evidence handling. As an <strong className="text-[#00d4ff]">EC-Council Authorized Accredited Training Centre (ATC)</strong>, Skyline Centre of Excellence delivers the official CHFI program integrating hands-on evidence acquisition, RAM carving, disk imaging, and courtroom readiness.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#enroll-form"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Enroll for CHFI Training <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#program-highlights"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-[#00d4ff]/40 transition-all flex items-center gap-2"
              >
                Explore CHFI Highlights
              </a>
            </motion.div>

          </motion.div>

          {/* Quick Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">EC-Council Authorized</p>
                <p className="text-xs text-slate-400">Official ATC Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Digital Forensics</p>
                <p className="text-xs text-slate-400">Disk, RAM & Mobile Labs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Court Admissible</p>
                <p className="text-xs text-slate-400">Chain of Custody & Sec 45</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Career Opportunities</p>
                <p className="text-xs text-slate-400">Police, DFIR & Law Labs</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section id="program-highlights" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              CHFI Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Highlights</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Comprehensive digital forensic curriculum covering disk imaging, Windows/Linux/Mobile artifact analysis, RAM carving, anti-forensics, and court reporting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-[#020617] border border-white/10 hover:border-[#00d4ff]/30 transition-all flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00d4ff]" />
                </div>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* HANDS-ON PRACTICAL TRAINING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
              Practical Forensic Labs
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hands-On Practical <span className="text-slate-400">Training</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Work with write-blockers, FTK Imager, Autopsy, Volatility, memory parsers, and simulated cybercrime investigation cases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {practicalTraining.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] font-bold text-xs flex items-center justify-center shrink-0 border border-[#00d4ff]/20">
                  0{idx + 1}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed font-medium pt-1">
                  {exp}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" /> High-Demand Positions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Career <span className="text-[#00d4ff]">Opportunities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              The CHFI credential is highly sought after by law enforcement, government intelligence, financial institutions, and corporate DFIR labs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {careerRoles.map((role, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{role.title}</h4>
                <p className="text-slate-400 text-xs">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ENROLL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-4">
              <UserCheck className="w-3.5 h-3.5" /> Target Audience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Who Should <span className="text-[#00d4ff]">Enroll?</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {targetAudience.map((target, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-slate-300 text-xs font-medium">
                  <Check className="w-4 h-4 text-[#00d4ff] shrink-0 stroke-[3] mt-0.5" />
                  <span>{target}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE SKYLINE (5 PILLARS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline (EC-Council ATC)</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Authorized accredited training, certified digital forensic mentors, official iLabs, and exam voucher support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 transition-all group flex flex-col justify-between"
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

      {/* ENROLLMENT INQUIRY FORM */}
      <section id="enroll-form" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />
            
            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs font-bold text-[#00d4ff] uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5" /> Official CHFI Registration Inquiry
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Enroll in CHFI Official Program
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit your details to receive official courseware details, iLab access info, and upcoming ATC batch schedules.
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
                <h3 className="text-2xl font-bold text-white">CHFI Registration Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for registering! Our EC-Council certified ATC advisor will connect with you to provide batch schedules and exam voucher details.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Hankare"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number *
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
                      Applicant Category
                    </label>
                    <select
                      value={formData.applicantCategory}
                      onChange={(e) => setFormData({ ...formData, applicantCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                    >
                      <option value="Digital Forensic Investigator">Digital Forensic Investigator / DFIR</option>
                      <option value="Police / Law Enforcement">Police / Cyber Crime Officer</option>
                      <option value="Cybersecurity Analyst">Cybersecurity Analyst / SOC Tier 2</option>
                      <option value="IT Auditor / Legal">IT Auditor / Forensic Consultant</option>
                      <option value="Student / Graduate">B.Sc. Forensic / Computer Science Graduate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Preferred Mode of Learning
                  </label>
                  <select
                    value={formData.preferredMode}
                    onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Classroom (EC-Council ATC Lab)">Classroom & Official ATC Cyber Lab (On-Site at Skyline CoE)</option>
                    <option value="Live Virtual Instructor-Led">Live Virtual Instructor-Led Online (Global ATC)</option>
                    <option value="Corporate Custom Batch">Custom Corporate Team Batch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Special Academic / Career Objectives (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mention any specific forensic tool goals, lab requirements, or exam scheduling targets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <span>Processing CHFI Registration...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit CHFI Registration
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Official EC-Council Accredited Training Centre (ATC) Partner.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
