"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Terminal,
  ShieldCheck,
  Zap,
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
  Flag,
  Flame,
  Layers
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

export default function CPENTCertificationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applicantCategory: "Penetration Tester / Red Team",
    preferredMode: "Classroom (EC-Council ATC Cyber Range)",
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
        applicantCategory: "Penetration Tester / Red Team",
        preferredMode: "Classroom (EC-Council ATC Cyber Range)",
        message: ""
      });
    }, 1200);
  };

  const programHighlights = [
    "Advanced Penetration Testing Methodologies & Multi-Tier Enterprise Range Exploitation",
    "Enterprise Network Penetration Testing & Complex Pivoting / Double Pivoting",
    "Active Directory Security Assessment (Kerberoasting, AS-REP Roasting, DCSync, Golden Ticket)",
    "Internal and External Network Perimeter Exploitation & Evasion Techniques",
    "Web Application and API Penetration Testing (REST, GraphQL, OAuth2, JWT Vulnerabilities)",
    "Wireless Network Penetration Testing (WPA3 Enterprise, PMKID Attack, Enterprise RADIUS)",
    "Cloud Security Assessment (AWS, Azure, GCP Role Misconfigurations & Container Breakouts)",
    "Internet of Things (IoT) & Operational Technology (OT) Firmware Security Testing",
    "Exploitation of Enterprise Infrastructure (Multi-Homed Hosts, VLAN Hopping, Router Exploits)",
    "Advanced Binary Vulnerability Analysis & Custom Exploit Modification",
    "Privilege Escalation Techniques (Windows Kernel, Token Manipulation, Linux SUID/Capabilities)",
    "Lateral Movement, Post-Exploitation Persistence, and Defense Evasion",
    "Password Cracking Automation, Kerberos Authentication Attacks, and Hash Dumping",
    "Professional Penetration Testing Report Writing & Remediation Roadmap Executive Summaries",
    "Legal, Ethical, Scope of Work (SOW), and Rules of Engagement (ROE) Compliance"
  ];

  const practicalTraining = [
    "Enterprise Network Penetration Testing inside Live EC-Council Cyber Range Environments",
    "Active Directory Attack Simulations (BloodHound Recon, Mimikatz, Impacket, DCSync)",
    "Web Application & API Penetration Testing using Burp Suite Professional & OWASP ZAP",
    "Cloud Environment Security Assessments (AWS IAM Role Chaining & S3 Bucket Escalation)",
    "Buffer Overflow & Binary Exploitation Modification Labs",
    "Windows & Linux Kernel Privilege Escalation Exercises",
    "Double-Pivoting & Network Tunneling (Chisel, SSH Dynamic SOCKS, Ligolo-ng)",
    "Wireless Enterprise PMKID & Rogue AP Exploitation Drills",
    "Advanced OSINT, Perimeter Port Inspection, and Custom Payload Generation",
    "Real-World Red Team Adversary Simulation & Multi-Phase Penetration Test Report Writing"
  ];

  const careerRoles = [
    { title: "Penetration Tester", desc: "Advanced Enterprise Pen Testing Lead" },
    { title: "Red Team Operator", desc: "Adversary Emulation & Physical/Digital Cyber Range" },
    { title: "Ethical Hacker", desc: "Offensive Security Lead" },
    { title: "Offensive Security Consultant", desc: "Enterprise Risk & Threat Assessment" },
    { title: "Cybersecurity Consultant", desc: "Commercial & Defense Advisory" },
    { title: "Security Assessment Specialist", desc: "System & Infrastructure Audit Lead" },
    { title: "Vulnerability Assessment Engineer", desc: "Threat Analysis & Remediation Lead" },
    { title: "Application Security Engineer", desc: "AppSec Code Audit & DevSecOps Lead" },
    { title: "Cloud Security Consultant", desc: "AWS/Azure Cloud Pen Tester" },
    { title: "Cybersecurity Engineer", desc: "Enterprise Security Architecture" },
    { title: "Information Security Consultant", desc: "Strategic Advisory & SOW Auditor" },
    { title: "Security Researcher", desc: "Zero-Day & Vulnerability Research" }
  ];

  const targetAudience = [
    "Ethical Hackers & Penetration Testers seeking advanced CPENT certification",
    "Cybersecurity Consultants and Red Team Practitioners",
    "SOC Analysts seeking offensive security & adversary simulation skills",
    "Network Security Engineers & Application Security Specialists",
    "Information Security Professionals and Risk Auditors",
    "Professionals preparing for advanced offensive security roles",
    "Engineering & Computer Science Graduates with ethical hacking foundations",
    "Individuals seeking globally recognized EC-Council CPENT certification"
  ];

  const whyChoosePillars = [
    {
      title: "EC-Council Authorized ATC",
      desc: "Receive official CPENT training from an EC-Council Authorized Accredited Training Centre (ATC), guaranteeing authentic courseware, official 24-hour cyber range access, and globally accepted training standards.",
      icon: Award
    },
    {
      title: "Expert Red Team Faculty",
      desc: "Learn from experienced penetration testers, offensive security leads, and red team operators with extensive enterprise engagement experience.",
      icon: GraduationCap
    },
    {
      title: "Enterprise Cyber Range Laboratories",
      desc: "Train in advanced cyber range environments that replicate modern enterprise infrastructures, providing realistic pivoting, Active Directory, and cloud attack targets.",
      icon: Flag
    },
    {
      title: "Certification & Career Readiness",
      desc: "Skyline prepares participants for both the CPENT certification examination and professional penetration testing engagements through expert mentoring and attack simulations.",
      icon: Briefcase
    },
    {
      title: "Industry-Oriented Learning",
      desc: "Our curriculum emphasizes practical offensive security skills, enabling participants to conduct comprehensive penetration tests and provide actionable security recommendations.",
      icon: Terminal
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
            alt="Certified Penetration Testing Professional CPENT Background"
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
            <span className="text-[#00d4ff] font-medium">CPENT</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-[#00d4ff]" /> Official EC-Council Authorized ATC Program
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Certified Penetration Testing Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">(CPENT)</span>
            </motion.h1>

            {/* Subtitle & Overview */}
            <motion.p variants={fadeUp} className="text-lg font-semibold text-[#00d4ff] mb-4">
              Master Advanced Penetration Testing. Simulate Real-World Cyber Attacks.
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              Modern enterprise environments require advanced penetration testers capable of performing deep Active Directory attacks, double pivoting, cloud breakouts, and custom binary exploitation. The <strong className="text-white font-semibold">Certified Penetration Testing Professional (CPENT)</strong> certification by EC-Council is globally recognized for training elite red team operators. As an <strong className="text-[#00d4ff]">EC-Council Authorized Accredited Training Centre (ATC)</strong>, Skyline delivers official CPENT training inside enterprise cyber range environments.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#enroll-form"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Enroll for CPENT Training <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#program-highlights"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-[#00d4ff]/40 transition-all flex items-center gap-2"
              >
                Explore CPENT Highlights
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
                <Flag className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Live Cyber Range</p>
                <p className="text-xs text-slate-400">Multi-Tier Network Pivoting</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Active Directory Labs</p>
                <p className="text-xs text-slate-400">Kerberoasting & Golden Ticket</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Red Team Mastery</p>
                <p className="text-xs text-slate-400">Advanced Pen Testing Roles</p>
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
              CPENT Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Highlights</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Advanced penetration testing curriculum covering Active Directory attacks, double pivoting, web/API security, IoT firmware, cloud breakouts, and red team reporting.
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
              Practical Cyber Range Labs
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hands-On Practical <span className="text-slate-400">Training</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Work inside live 24-hour EC-Council cyber ranges executing Active Directory attacks, double pivoting tunnels, and multi-phase penetration testing.
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
              The CPENT credential qualifies you for senior red team, offensive security consulting, and penetration testing positions globally.
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
              Authorized accredited training, certified red team mentors, official cyber range iLabs, and exam voucher support.
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
                <Mail className="w-3.5 h-3.5" /> Official CPENT Registration Inquiry
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Enroll in CPENT Official Program
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit your details to receive official courseware details, cyber range iLab access info, and upcoming ATC batch schedules.
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
                <h3 className="text-2xl font-bold text-white">CPENT Registration Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for registering! Our EC-Council certified ATC advisor will connect with you to provide batch schedules and cyber range exam voucher details.
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
                      placeholder="e.g. Ananya Deshmukh"
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
                      placeholder="e.g. ananya@example.com"
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
                      <option value="Penetration Tester / Red Team">Penetration Tester / Red Team Operator</option>
                      <option value="Ethical Hacker / Pen Tester">Ethical Hacker (CEH Certified)</option>
                      <option value="SOC Analyst / Blue Team">SOC Analyst / Security Engineer</option>
                      <option value="Security Consultant">Offensive Security Consultant</option>
                      <option value="Corporate Security Team">Corporate Security Operations Team</option>
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
                    <option value="Classroom (EC-Council ATC Cyber Range)">Classroom & Official Cyber Range (On-Site at Skyline CoE)</option>
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
                    placeholder="Mention any specific cyber range requirements, Active Directory goals, or exam scheduling targets..."
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
                    <span>Processing CPENT Registration...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit CPENT Registration
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
