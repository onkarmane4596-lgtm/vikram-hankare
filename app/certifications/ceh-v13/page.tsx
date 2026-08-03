"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Zap,
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
  Globe,
  Radio,
  FileCheck2,
  Sparkles
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

export default function CEHv13CertificationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applicantCategory: "Cybersecurity Analyst",
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
        applicantCategory: "Cybersecurity Analyst",
        preferredMode: "Classroom (EC-Council ATC Lab)",
        message: ""
      });
    }, 1200);
  };

  const programHighlights = [
    "Ethical Hacking Methodologies and Engagement Legal Frameworks",
    "Information Gathering, Footprinting, and Open-Source Intelligence (OSINT)",
    "Network Scanning, Port Inspection, and Host Enumeration Techniques",
    "Vulnerability Assessment, Risk Analysis, and CVSS v3.1 Scoring",
    "System Exploitation Techniques, Privilege Escalation, and Credential Dumping",
    "Malware, Ransomware, Trojan, Virus, and Threat Intelligence Analysis",
    "Network Sniffing, Traffic Analysis, and Man-in-the-Middle (MitM) Attacks",
    "Social Engineering, Baiting, Pretexting, and Spear-Phishing Simulations",
    "Web Application Security Testing (OWASP Top 10: SQLi, XSS, SSRF, IDOR)",
    "Wireless Network Security (WPA2/WPA3 Enterprise & Rogue AP Audits)",
    "Cloud Security Fundamentals (AWS, Azure, GCP Identity & Container Security)",
    "Mobile Platform Security (iOS & Android Vulnerability Testing)",
    "Cryptography, Public Key Infrastructure (PKI), and Data Protection",
    "Incident Detection, Threat Hunting, and Honeypot Deployment",
    "Penetration Testing Reporting, Executive Summaries, and Documentation"
  ];

  const practicalTraining = [
    "Live Ethical Hacking Demonstrations guided by EC-Council Certified Instructors",
    "Enterprise Network Penetration Testing Labs using Kali Linux & Parrot OS",
    "Web Application Security Assessments on vulnerable target environments",
    "Automated & Manual Vulnerability Assessment exercises using Nessus & OpenVAS",
    "Capture-The-Flag (CTF) Challenges testing offensive and defensive skills",
    "Real-World Cyberattack Threat Simulation Scenarios",
    "Security Tool Configuration and Practical Usage (Burp Suite, Nmap, Metasploit, Wireshark)",
    "Exploitation and Post-Exploitation Techniques (within authorized lab environments)",
    "Incident Response, Threat Containment, and RAM Triage",
    "Professional Security Audit and Penetration Test Report Writing"
  ];

  const careerRoles = [
    { title: "Ethical Hacker", desc: "Red Team & Vulnerability Specialist" },
    { title: "Penetration Tester", desc: "Web, App & Network Pen Tester" },
    { title: "Cybersecurity Analyst", desc: "Enterprise Defense & Triage Lead" },
    { title: "Security Consultant", desc: "Vulnerability & Risk Advisor" },
    { title: "Vulnerability Specialist", desc: "Patch & Risk Governance Lead" },
    { title: "SOC Analyst", desc: "Security Operations Centre Tier 2/3" },
    { title: "Incident Response Analyst", desc: "Breach Containment & DFIR Lead" },
    { title: "Network Security Engineer", desc: "Perimeter & Firewall Architect" },
    { title: "Information Security Officer", desc: "CISO & Security Manager" },
    { title: "Digital Forensic Investigator", desc: "Cyber Crime Evidence Specialist" },
    { title: "Red Team Operator", desc: "Adversary Simulation Operator" },
    { title: "Cyber Security Auditor", desc: "Compliance & Controls Reviewer" }
  ];

  const targetAudience = [
    "Cybersecurity Professionals seeking globally recognized credentials",
    "IT & Network Administrators managing enterprise infrastructure",
    "Security Engineers, SOC Analysts & Vulnerability Assessors",
    "Penetration Testers and Ethical Hacking Aspirants",
    "Systems Administrators & Network Engineers",
    "Digital Forensic Investigators & Law Enforcement Personnel",
    "Engineering, B.Sc. IT & Computer Science Graduates",
    "Professionals transitioning into cybersecurity from IT/networking roles"
  ];

  const whyChoosePillars = [
    {
      title: "EC-Council Authorized ATC",
      desc: "Receive official instructor-led CEH v13 training from an EC-Council Authorized Accredited Training Centre (ATC), ensuring access to official iLabs, authentic learning resources, and globally accepted standards.",
      icon: Award
    },
    {
      title: "Expert Faculty",
      desc: "Learn from experienced cybersecurity practitioners with extensive expertise in ethical hacking, penetration testing, cyber defense, digital forensics, and incident response.",
      icon: GraduationCap
    },
    {
      title: "Industry-Focused Practical Learning",
      desc: "Our emphasis on practical laboratory sessions, real-world case studies, and attack simulations enables participants to confidently apply ethical hacking techniques in professional environments.",
      icon: Terminal
    },
    {
      title: "Certification & Career Readiness",
      desc: "Skyline prepares participants for both the CEH certification examination and successful careers in cybersecurity through exam-focused mentoring, technical guidance, and practical skill development.",
      icon: Briefcase
    },
    {
      title: "State-of-the-Art Cyber Labs",
      desc: "Train in professionally designed cybersecurity laboratories equipped with industry-standard tools, enterprise-grade environments, and realistic cyberattack scenarios.",
      icon: Cpu
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
            alt="Certified Ethical Hacker CEHv13 Background"
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
            <span className="text-[#00d4ff] font-medium">CEH v13</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-[#00d4ff]" /> Official EC-Council Authorized ATC Program
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Certified Ethical Hacker <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">(CEHv13)</span>
            </motion.h1>

            {/* Subtitle & Overview */}
            <motion.p variants={fadeUp} className="text-lg font-semibold text-[#00d4ff] mb-4">
              Master the Art of Ethical Hacking. Defend Against Modern Cyber Threats.
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              Cyber threats are evolving at an unprecedented pace, making skilled cybersecurity professionals indispensable. The <strong className="text-white font-semibold">Certified Ethical Hacker (CEHv13)</strong> certification by EC-Council is the world&apos;s #1 globally recognized credential empowering professionals to think like attackers and defend like security experts. As an <strong className="text-[#00d4ff]">EC-Council Authorized Accredited Training Centre (ATC)</strong>, Skyline Centre of Excellence delivers the official CEH v13 curriculum integrated with AI-assisted hacking tools, practical iLabs, and official certification exam preparation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#enroll-form"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Enroll for CEHv13 Training <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#program-highlights"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-[#00d4ff]/40 transition-all flex items-center gap-2"
              >
                Explore CEH Highlights
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
                <Sparkles className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">CEH v13 AI-Assisted</p>
                <p className="text-xs text-slate-400">Latest 20 Hacking Domains</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Official iLabs</p>
                <p className="text-xs text-slate-400">Live Cyber Range Access</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Global Recognition</p>
                <p className="text-xs text-slate-400">Government & Fortune 500</p>
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
              CEH v13 Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Highlights</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Comprehensive 20-domain ethical hacking curriculum covering AI-assisted hacking, vulnerability assessment, cloud, web apps, and wireless exploitation.
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
              Practical iLabs & Simulations
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hands-On Practical <span className="text-slate-400">Training</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Work inside real-world cyberattack simulation environments, CTF ranges, and enterprise-grade penetration testing labs.
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
              The CEH credential is required by government agencies, defense units, IT MNCs, banks, and global consulting firms.
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
              Authorized accredited training, certified ethical hacking mentors, official iLabs, and exam voucher support.
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
                <Mail className="w-3.5 h-3.5" /> Official CEHv13 Registration Inquiry
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Enroll in CEHv13 Official Program
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
                <h3 className="text-2xl font-bold text-white">CEHv13 Registration Received</h3>
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
                      placeholder="e.g. Onkar Mane"
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
                      placeholder="e.g. onkar@example.com"
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
                      <option value="Cybersecurity Analyst">Cybersecurity Analyst / Engineer</option>
                      <option value="IT & Network Admin">IT & Network Administrator</option>
                      <option value="SOC Analyst / Penetration Tester">SOC Analyst / Penetration Tester</option>
                      <option value="Student / Graduate (Any Stream)">Students / Graduates (School / College / Any Stream)</option>
                      <option value="Corporate Team">Corporate IT / Security Team</option>
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
                    placeholder="Mention any specific exam date goals, prior experience, or corporate sponsorship requirements..."
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
                    <span>Processing CEHv13 Registration...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit CEHv13 Registration
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
