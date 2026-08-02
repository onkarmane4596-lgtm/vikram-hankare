"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldAlert,
  Users,
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
  GraduationCap,
  Sparkles,
  Key,
  Globe,
  Smartphone,
  Eye,
  FileCheck2,
  Activity,
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

export default function CyberAwarenessServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "corporate" | "academic" | "phishing">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise",
    awarenessType: "Employee Security Awareness & Phishing Drills",
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
        awarenessType: "Employee Security Awareness & Phishing Drills",
        caseBrief: ""
      });
    }, 1200);
  };

  // 12 Core Cyber Awareness Initiatives Offered
  const servicesList = [
    {
      code: "AWR-CORP-01",
      title: "Cyber Security Awareness Workshops",
      category: "corporate",
      icon: Users,
      desc: "Interactive workshops educating staff on threat vectors, social engineering tactics, and active cyber hygiene habits."
    },
    {
      code: "AWR-CORP-02",
      title: "Employee Security Awareness Programs",
      category: "corporate",
      icon: ShieldCheck,
      desc: "Structured training modules targeting human risk reduction, confidential data handling, and clean desk security policies."
    },
    {
      code: "AWR-ACAD-01",
      title: "Student & Faculty Awareness Sessions",
      category: "academic",
      icon: GraduationCap,
      desc: "Academic cyber safety programs covering cyberbullying, safe social media habits, online identity theft, and digital well-being."
    },
    {
      code: "AWR-CORP-03",
      title: "Executive Cyber Risk Awareness Training",
      category: "corporate",
      icon: Building2,
      desc: "C-suite and board-level briefings on Business Email Compromise (BEC), spear-phishing threats, regulatory liabilities, and risk governance."
    },
    {
      code: "AWR-PHISH-01",
      title: "Phishing & Social Engineering Awareness",
      category: "phishing",
      icon: Eye,
      desc: "Live phishing simulation campaigns, baiting defense exercises, credential harvesting recognition, and rapid reporting."
    },
    {
      code: "AWR-ACAD-02",
      title: "Safe Internet & Digital Privacy Education",
      category: "academic",
      icon: Globe,
      desc: "Guiding users on secure web browsing, public Wi-Fi risks, VPN utilization, tracking cookies, and online privacy settings."
    },
    {
      code: "AWR-CORP-04",
      title: "Password Security & MFA Awareness",
      category: "corporate",
      icon: Key,
      desc: "Promoting password manager adoption, eliminating credential reuse, multi-factor authentication (MFA) enforcement, and passphrase strength."
    },
    {
      code: "AWR-PHISH-02",
      title: "Email & Social Media Security Awareness",
      category: "phishing",
      icon: Mail,
      desc: "Recognizing suspicious email headers, malicious links, fake social media profiles, and impersonation attempts."
    },
    {
      code: "AWR-CORP-05",
      title: "Data Protection & Privacy Awareness",
      category: "corporate",
      icon: FileCheck2,
      desc: "Training employees on DPDPA 2023, GDPR compliance, PII handling, secure file sharing, and data classification guidelines."
    },
    {
      code: "AWR-CORP-06",
      title: "Ransomware & Malware Awareness",
      category: "corporate",
      icon: ShieldAlert,
      desc: "Educating staff on drive-by downloads, suspicious email attachments, USB malware threats, and ransomware early warning signs."
    },
    {
      code: "AWR-ACAD-03",
      title: "Cyber Hygiene & Best Practices",
      category: "academic",
      icon: Activity,
      desc: "Establishing day-to-day security habits, OS updating schedules, device screen locks, and mobile application permission audits."
    },
    {
      code: "AWR-PHISH-03",
      title: "Customized Awareness Campaigns",
      category: "phishing",
      icon: Sparkles,
      desc: "Tailored multi-channel awareness campaigns combining posters, micro-learning videos, gamified quizzes, and newsletter series."
    }
  ];

  // 5-Stage Awareness Campaign Model
  const campaignSteps = [
    {
      step: "01",
      title: "Baseline Human Risk Assessment",
      desc: "Evaluating current employee security knowledge, running baseline unannounced phishing simulations, and mapping risk hotspots.",
      tag: "RISK BASELINE"
    },
    {
      step: "02",
      title: "Tailored Curriculum & Workshop Design",
      desc: "Customizing training modules based on organizational roles (Finance, HR, IT, C-Suite, Academic Students).",
      tag: "CURRICULUM DESIGN"
    },
    {
      step: "03",
      title: "Interactive Training & Simulation Drills",
      desc: "Delivering hands-on workshops, simulated phishing tests, micro-learning videos, and gamified security quizzes.",
      tag: "SIMULATION DRILLS"
    },
    {
      step: "04",
      title: "Knowledge Evaluation & Reporting",
      desc: "Measuring click rates, vulnerability reporting speeds, quiz scores, and providing executive human risk dashboards.",
      tag: "HUMAN RISK DASHBOARD"
    },
    {
      step: "05",
      title: "Continuous Reinforcement & Security Culture",
      desc: "Sustaining security awareness through quarterly refresher sessions, phishing newsletters, and recognition awards.",
      tag: "CULTURE REINFORCEMENT"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Hands-On & Interactive Methodology",
      desc: "We replace dry lecture presentations with engaging real-world scenarios, live phishing simulations, and gamified challenges.",
      icon: Users,
      node: "01 // INTERACTIVE DRILLS"
    },
    {
      title: "Role-Specific Security Curriculum",
      desc: "Customized training tracks specifically tailored for C-suite executives, finance teams, HR personnel, and academic students.",
      icon: GraduationCap,
      node: "02 // ROLE TAILORED"
    },
    {
      title: "DPDPA 2023 Data Privacy Compliance",
      desc: "Ensuring staff understand statutory data privacy mandates, consent handling, and PII protection requirements.",
      icon: FileCheck2,
      node: "03 // DPDPA READY"
    },
    {
      title: "Measurable Human Risk Analytics",
      desc: "Providing detailed reporting on employee click rates, threat reporting speeds, and vulnerability reduction over time.",
      icon: Activity,
      node: "04 // RISK METRICS"
    },
    {
      title: "Experienced Cybersecurity Instructors",
      desc: "Led by certified cybersecurity professionals, forensic investigators, and experienced security awareness trainers.",
      icon: ShieldCheck,
      node: "05 // CERTIFIED TRAINERS"
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
            alt="Cyber Security Awareness Background"
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
              <span className="text-[#00d4ff] font-bold">Cyber Security Awareness</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-AWR-15</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <Users className="w-4 h-4 text-[#00d4ff]" /> HUMAN RISK MANAGEMENT & CYBER AWARENESS
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Cyber Security <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Awareness Programs</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                Over 85% of security breaches involve a human element—such as clicking on phishing links, weak passwords, social engineering tricks, or accidental data leaks. Building a strong human firewall is essential for any resilient security posture. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we deliver customized Cyber Security Awareness Programs, interactive workshops, live phishing simulation drills, DPDPA 2023 privacy education, and executive risk briefings for corporate enterprises and academic institutions.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <Users className="w-4 h-4 text-sky-200" />
                  <span>Schedule Awareness Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#awareness-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 12 Awareness Modules</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">HUMAN FIREWALL HUB</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    SIMULATED DRILLS
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Eye className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Simulated Phishing & Social Engineering</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Controlled spear-phishing drills & credential harvesting defense training.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Building2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">C-Suite & Board Briefings</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Executive risk awareness covering BEC scams & regulatory liabilities.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <FileCheck2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">DPDPA 2023 Privacy Awareness</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Educating staff on statutory data privacy rules, PII & consent handling.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <GraduationCap className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Student & Faculty Cyber Safety</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Academic sessions covering safe browsing, social media & cyberbullying.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#consultation-form"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Users className="w-4 h-4 text-[#00d4ff]" />
                  <span>Reserve Awareness Session</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 CORE SERVICES OFFERED */}
      {/* ========================================================================= */}
      <section id="awareness-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              AWARENESS CAPABILITY MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Cyber Awareness <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Initiatives</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Corporate employee workshops, simulated phishing campaigns, C-suite executive briefings, academic cyber safety, and DPDPA privacy training.
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
                onClick={() => setActiveCategory("corporate")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "corporate"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Corporate & Executive Programs
              </button>
              <button
                onClick={() => setActiveCategory("phishing")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "phishing"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Phishing Simulations & Campaigns
              </button>
              <button
                onClick={() => setActiveCategory("academic")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "academic"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Academic & Community Safety
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
                  <span>Request Program Proposal</span>
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
              Awareness Campaign Framework
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Awareness <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A structured 5-stage campaign model ensuring baseline risk assessment, role-specific curriculum design, simulated drills, and continuous risk reduction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {campaignSteps.map((step, idx) => (
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Awareness Team</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Interactive hands-on methodology, role-tailored security tracks, and measurable human risk analytics.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Awareness Proposal Request
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Schedule Cyber Security Awareness Program
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding employee count, student numbers, phishing simulation goals, or executive briefing schedules.
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
                <h3 className="text-2xl font-bold text-white">Proposal Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for contacting Skyline Cyber Awareness Team. Our trainers will review your parameters and contact you shortly.
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
                      placeholder="e.g. P. K. Joshi / Head of HR & Training"
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
                      placeholder="e.g. hr@company.com"
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
                      <option value="Academic Institution / University">Academic Institution / University</option>
                      <option value="Government Body">Government Body / Public Sector</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Awareness Initiative
                  </label>
                  <select
                    value={formData.awarenessType}
                    onChange={(e) => setFormData({ ...formData, awarenessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Employee Security Awareness & Phishing Drills">Employee Security Awareness & Phishing Drills</option>
                    <option value="Executive C-Suite Risk Briefing">Executive C-Suite & Board Risk Briefing</option>
                    <option value="Student & Faculty Cyber Safety Session">Student & Faculty Cyber Safety Session</option>
                    <option value="DPDPA 2023 Data Privacy Compliance Training">DPDPA 2023 Data Privacy Compliance Training</option>
                    <option value="Custom Multi-Channel Campaign">Custom Multi-Channel Awareness Campaign</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Participant Count & Program Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on total audience size (e.g. 500 employees, 2000 students), preferred delivery mode (online / on-site), or specific threat concerns..."
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
                    <span>Processing Proposal Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Awareness Proposal Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> All participant data and organizational disclosures remain protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
