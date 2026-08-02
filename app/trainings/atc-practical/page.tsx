"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Search,
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
  Terminal,
  Cpu,
  Layers,
  Flag,
  UserCheck
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

export default function ATCPracticalTrainingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    attendeeCategory: "Cybersecurity Aspirant",
    preferredProgram: "Ethical Hacking & Penetration Testing",
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
        attendeeCategory: "Cybersecurity Aspirant",
        preferredProgram: "Ethical Hacking & Penetration Testing",
        message: ""
      });
    }, 1200);
  };

  const trainingDomains = [
    { title: "Ethical Hacking & Penetration Testing", icon: Terminal, desc: "Hands-on network exploitation, web application security (OWASP Top 10), wireless attacks, and privilege escalation." },
    { title: "Digital & Cyber Forensics", icon: Cpu, desc: "Disk imaging, RAM memory extraction, file system analysis, deleted data carving, and timeline reconstruction." },
    { title: "Incident Response & Threat Hunting", icon: Zap, desc: "Volatile memory triage, ransomware containment, log correlation, IOC hunting, and incident playbook execution." },
    { title: "Vulnerability Assessment & Security Testing", icon: Search, desc: "Infrastructure scanning, Nessus/Nmap automation, CVSS v3.1 scoring, and prioritized remediation guidance." },
    { title: "Network Security & Defensive Operations", icon: ShieldCheck, desc: "Firewall ruleset configuration, IPS/IDS tuning, VPN architecture, traffic packet analysis, and Wireshark inspection." },
    { title: "Security Operations Centre (SOC) Fundamentals", icon: Building2, desc: "SIEM log monitoring, threat alert triage, MITRE ATT&CK framework mapping, and SOC analyst workflows." },
    { title: "Malware Analysis Basics", icon: Lock, desc: "Static and dynamic malware analysis, reverse engineering binaries, sandboxing, and C2 traffic detection." },
    { title: "Cyber Crime Investigation", icon: Briefcase, desc: "BEC fraud tracing, crypto-asset tracking, email header forensics, dark web investigations, and evidence tagging." },
    { title: "Cloud & Endpoint Security", icon: Layers, desc: "AWS/Azure IAM role auditing, EPP/EDR deployment, device hardening, and container security basics." }
  ];

  const practicalExperience = [
    "Modern Cybersecurity & Forensic Laboratories equipped with industry-standard tools",
    "Live attack and defense demonstrations conducted by certified industry practitioners",
    "Real-world cyberattack simulations and incident response scenarios",
    "In-depth case studies and scenario-based hands-on lab exercises",
    "Tool-based practical exercises using Burp Suite, Metasploit, Nmap, Wireshark, Volatility, and Autopsy",
    "Capture-The-Flag (CTF) challenges and red vs. blue team exercises",
    "Digital evidence handling, chain of custody maintenance, and write-blocker usage",
    "Professional security audit and forensic report writing documentation"
  ];

  const careerBenefits = [
    { title: "Cybersecurity Operations", desc: "Security Engineer & Defender" },
    { title: "Digital Forensics", desc: "DFIR Examiner & Cyber Investigator" },
    { title: "Security Consulting", desc: "Vulnerability & Pen Testing Lead" },
    { title: "Ethical Hacking", desc: "Offensive Security & Red Team Lead" },
    { title: "Incident Response", desc: "Incident Handler & Threat Hunter" },
    { title: "SOC Operations", desc: "Tier 1/2/3 SOC Analyst" },
    { title: "Law Enforcement & Gov", desc: "Cyber Cell Tech Specialist" },
    { title: "Corporate Security & Risk", desc: "Enterprise Risk & Compliance Manager" }
  ];

  const whyChoosePillars = [
    {
      title: "Practical-First Approach",
      desc: "Every program emphasizes hands-on learning through laboratories, simulations, and real-world case studies that bridge theoretical knowledge with industry expectations.",
      icon: Terminal
    },
    {
      title: "Industry-Experienced Trainers",
      desc: "Learn from certified cybersecurity professionals, forensic experts, and industry practitioners with extensive operational field experience.",
      icon: GraduationCap
    },
    {
      title: "Modern Training Infrastructure",
      desc: "Access well-equipped cybersecurity and forensic laboratories loaded with industry-standard open-source and enterprise tools.",
      icon: Cpu
    },
    {
      title: "Certification-Oriented Learning",
      desc: "Our practical training complements globally recognized certification programs (CEH, CHFI, OSCP, CISSP) and builds workplace execution confidence.",
      icon: Award
    },
    {
      title: "Career-Focused Development",
      desc: "Gain technical skills, analytical thinking, and practical experience that improve employability and workplace readiness across cybersecurity sectors.",
      icon: Briefcase
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
            alt="ATC-Friendly Practical Training Programs Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/75 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/trainings" className="hover:text-[#00d4ff] transition-colors">Trainings</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">ATC-Friendly Practical Training</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-[#00d4ff]" /> Certification-Aligned Practical Programs
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              ATC-Friendly <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Practical Training Programs</span>
            </motion.h1>

            {/* Course Overview */}
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we believe that practical skills are the foundation of professional excellence. Our <strong className="text-[#00d4ff]">ATC-Friendly Practical Training Programs</strong> are designed to complement globally recognized certification pathways by providing intensive hands-on learning, real-world scenario simulations, CTF challenges, and laboratory exercises that bridge the gap between theoretical knowledge and industry requirements.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#enroll-form"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Enroll / Request Syllabus <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#domains"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-[#00d4ff]/40 transition-all flex items-center gap-2"
              >
                Explore Training Domains
              </a>
            </motion.div>

          </motion.div>

          {/* Quick Course Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Practical First</p>
                <p className="text-xs text-slate-400">CTF & Cyber Range Labs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Flag className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">ATC Certification</p>
                <p className="text-xs text-slate-400">Complements Global Certs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Certification</p>
                <p className="text-xs text-slate-400">Skyline Certificate of Merit</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Career Growth</p>
                <p className="text-xs text-slate-400">SOC, DFIR, Red & Blue Teams</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* TRAINING DOMAINS */}
      <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Domains</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Hands-on practical modules aligned with modern cybersecurity operations, offensive ethical hacking, and digital forensics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingDomains.map((domain, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-[#020617] border border-white/10 hover:border-[#00d4ff]/30 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-5 group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                    <domain.icon className="w-6 h-6 text-[#00d4ff] group-hover:text-slate-950" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors leading-snug">
                    {domain.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {domain.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#00d4ff] font-semibold">
                  <span>ATC Aligned</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PRACTICAL LEARNING EXPERIENCE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
              Practical Methodology
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Practical Learning <span className="text-slate-400">Experience</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Work with live CTF cyber ranges, industry-standard tools, capture evidence, and solve real incident scenarios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {practicalExperience.map((exp, idx) => (
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

      {/* CAREER BENEFITS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Career <span className="text-[#00d4ff]">Benefits</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Build operational competencies that open high-demand career pathways across public and private cybersecurity sectors.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerBenefits.map((b, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{b.title}</h4>
                <p className="text-slate-400 text-xs">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYLINE (5 PILLARS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Training</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Practical-first learning approach, certified trainers, and certification-aligned lab scenarios.
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
                <Mail className="w-3.5 h-3.5" /> Program Inquiry & Registration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Enroll in ATC-Friendly Practical Training
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit your registration request to secure your seat for the upcoming practical batch.
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
                <h3 className="text-2xl font-bold text-white">Enrollment Inquiry Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for registering! Our course coordinator will review your application and send batch schedule details shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                >
                  Submit Another Registration
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
                      placeholder="e.g. S. M. Mane"
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
                      placeholder="e.g. mane@example.com"
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
                      Preferred Training Domain
                    </label>
                    <select
                      value={formData.preferredProgram}
                      onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                    >
                      <option value="Ethical Hacking & Penetration Testing">Ethical Hacking & Penetration Testing</option>
                      <option value="Digital & Cyber Forensics">Digital & Cyber Forensics</option>
                      <option value="Incident Response & Threat Hunting">Incident Response & Threat Hunting</option>
                      <option value="Vulnerability Assessment & Security Testing">Vulnerability Assessment & Security Testing</option>
                      <option value="SOC Fundamentals & Operations">Security Operations Centre (SOC) Fundamentals</option>
                      <option value="Malware Analysis Basics">Malware Analysis Basics</option>
                      <option value="Cyber Crime Investigation">Cyber Crime Investigation</option>
                      <option value="Cloud & Endpoint Security">Cloud & Endpoint Security</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Special Academic / Career Objectives (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mention any specific certification goals (e.g. CEH, CHFI, OSCP), lab requirements, or questions..."
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
                    <span>Processing Enrollment...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Course Registration
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Practical training certificate issued upon successful laboratory practical assessment.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
