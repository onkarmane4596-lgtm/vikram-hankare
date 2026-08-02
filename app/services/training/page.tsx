"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Award,
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
  Search,
  Cpu,
  FileText,
  FileCheck2,
  Flame,
  CreditCard,
  Scale,
  RefreshCw,
  Terminal,
  Zap,
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

export default function ForensicTrainingServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "investigation" | "cyber" | "custom">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise",
    programType: "Digital & Cyber Forensics Training",
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
        programType: "Digital & Cyber Forensics Training",
        caseBrief: ""
      });
    }, 1200);
  };

  // 13 Core Training Programs Offered
  const programsList = [
    {
      code: "TRN-CSI-01",
      title: "Crime Scene Investigation & Evidence Management",
      category: "investigation",
      icon: Search,
      desc: "Practical hands-on training in scene securement, 3D measurement, photogrammetry, latent print dusting, and chain-of-custody protocols."
    },
    {
      code: "TRN-CYB-01",
      title: "Digital & Cyber Forensics Training",
      category: "cyber",
      icon: Cpu,
      desc: "Mastering disk imaging, memory analysis, unallocated space carving, mobile extractions, and file system timeline analysis."
    },
    {
      code: "TRN-CYB-02",
      title: "Cyber Crime Investigation Training",
      category: "cyber",
      icon: Terminal,
      desc: "Investigating financial fraud, BEC email spoofing, ransomware entry vectors, identity theft, and online harassment tracing."
    },
    {
      code: "TRN-QDE-01",
      title: "Questioned Document Examination Training",
      category: "investigation",
      icon: FileText,
      desc: "Forensic document analysis, detecting alterations, mechanical erasures, paper/ink analysis, and counterfeit document verification."
    },
    {
      code: "TRN-SIG-01",
      title: "Signature Examination & Verification Training",
      category: "investigation",
      icon: FileCheck2,
      desc: "Scientific handwriting comparison, stroke speed evaluation, detecting simulated/traced forgery, and Sec 45 legal testimony."
    },
    {
      code: "TRN-FPR-01",
      title: "Fingerprint Examination & Identification Training",
      category: "investigation",
      icon: ShieldCheck,
      desc: "Friction ridge analysis, chemical print development (Cyanoacrylate/Ninhydrin), AFIS comparison, and latent print reporting."
    },
    {
      code: "TRN-FIN-01",
      title: "Financial Crime & Fraud Investigation Training",
      category: "cyber",
      icon: CreditCard,
      desc: "Forensic accounting methodologies, asset tracing, ERP ledger audits, SWIFT/UPI transaction forensics, and insurance fraud detection."
    },
    {
      code: "TRN-FIRE-01",
      title: "Fire & Explosion Investigation Training",
      category: "investigation",
      icon: Flame,
      desc: "NFPA 921 compliant fire origin and cause determination, electrical arc mapping, burn pattern analysis, and arson detection."
    },
    {
      code: "TRN-IR-01",
      title: "Incident Response & Digital Evidence Handling",
      category: "cyber",
      icon: ShieldCheck,
      desc: "Triage containment, volatile RAM acquisition, write-blocked media isolation, incident playbooks, and breach response."
    },
    {
      code: "TRN-AWR-01",
      title: "Information Security & Cybersecurity Awareness",
      category: "cyber",
      icon: Lock,
      desc: "Employee security awareness, phishing defenses, password hygiene, remote work security, and data protection best practices."
    },
    {
      code: "TRN-AUD-01",
      title: "IT Audits, Risk Management & Compliance Training",
      category: "cyber",
      icon: RefreshCw,
      desc: "ITGC control auditing, ISO 27001, CERT-In guidelines, DPDPA 2023 privacy frameworks, and third-party risk management."
    },
    {
      code: "TRN-CUST-01",
      title: "Customized Capacity Building Programs",
      category: "custom",
      icon: Building2,
      desc: "Tailor-made training modules for law enforcement agencies, defense personnel, judicial officers, and corporate security teams."
    },
    {
      code: "TRN-CUST-02",
      title: "Workshops, FDPs & Executive Seminars",
      category: "custom",
      icon: GraduationCap,
      desc: "Faculty Development Programs (FDP), university guest lectures, executive seminars, and specialized technical workshops."
    }
  ];

  // 5-Stage Training Delivery Framework
  const trainingLifecycle = [
    {
      step: "01",
      title: "Training Needs Analysis (TNA)",
      desc: "Evaluating organizational skill gaps, participant technical baselines, and defining custom learning outcomes.",
      tag: "NEEDS ANALYSIS"
    },
    {
      step: "02",
      title: "Custom Syllabus & Lab Setup",
      desc: "Designing modular courseware, hands-on lab exercises, case studies, and deploying virtual forensic environments.",
      tag: "LAB SETUP"
    },
    {
      step: "03",
      title: "Hands-On Practical Delivery",
      desc: "Delivering immersive training with live hardware/software tools, crime scene mock setups, and simulated cyber incident drills.",
      tag: "HANDS-ON DELIVERY"
    },
    {
      step: "04",
      title: "Evaluation & Practical Assessment",
      desc: "Assessing participant competencies through practical evidence analysis challenges, mock court trials, and exams.",
      tag: "COMPETENCY EVAL"
    },
    {
      step: "05",
      title: "Certification & Capacity Support",
      desc: "Issuing institutional certificates of completion and providing ongoing technical support for trained personnel.",
      tag: "CERTIFICATION ISSUED"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Expert-Led Practical Instruction",
      desc: "Our courses are taught by veteran forensic scientists, cybercrime investigators, and lead security auditors with real-world case experience.",
      icon: GraduationCap,
      node: "01 // EXPERT FACULTY"
    },
    {
      title: "80% Practical Hands-On Lab Work",
      desc: "We prioritize real software tools, chemical lab equipment, 3D photogrammetry, and live network sandboxes over theoretical lectures.",
      icon: Terminal,
      node: "02 // 80% PRACTICAL"
    },
    {
      title: "Customized Capacity Building for LEAs & Corporates",
      desc: "Tailored training tracks designed specifically for police departments, legal professionals, corporate IT teams, and universities.",
      icon: Building2,
      node: "03 // CAPACITY BUILDING"
    },
    {
      title: "ISO & Section 45 Legal Standard Alignment",
      desc: "Curriculum designed to align with ISO 17025 laboratory standards, Indian Evidence Act mandates, and CERT-In compliance requirements.",
      icon: Scale,
      node: "04 // LEGAL COMPLIANT"
    },
    {
      title: "Industry Recognized Certification",
      desc: "Participants receive official certificates of completion from Skyline Centre of Excellence in Cyber Security & Forensics.",
      icon: Award,
      node: "05 // CERTIFIED RECOGNITION"
    }
  ];

  const filteredServices = activeCategory === "all"
    ? programsList
    : programsList.filter(s => s.category === activeCategory);

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
            alt="Forensic & Cyber Security Training Background"
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
              <span className="text-[#00d4ff] font-bold">Forensic & Cyber Security Training</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-TRN-17</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <GraduationCap className="w-4 h-4 text-[#00d4ff]" /> PROFESSIONAL FORENSIC & CYBER CAPACITY BUILDING
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Forensic & Cyber <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Security Training</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                Building specialized technical capability in digital forensics, crime scene management, questioned document analysis, fingerprint verification, and incident response is critical for law enforcement agencies, corporate security personnel, legal advocates, and academic institutions. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we provide professional Forensic &amp; Cyber Security Training Services—delivering hands-on laboratory instruction, custom capacity-building programs, Faculty Development Programs (FDPs), and executive technical seminars.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <GraduationCap className="w-4 h-4 text-sky-200" />
                  <span>Request Training Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#training-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 13 Training Programs</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">TRAINING ACADEMY HUB</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    80% HANDS-ON LABS
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Cpu className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Digital & Cyber Forensics Labs</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Disk imaging, memory analysis, mobile extractions & timeline carving.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Search className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Physical Crime Scene & Fingerprints</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Mock scene investigations, latent print chemical fuming & 3D casting.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Building2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">LEA & Corporate Capacity Building</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Customized training tracks for police officers, legal counsel & IT teams.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Award className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Institutional Certification</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Industry-recognized certificates issued by Skyline Centre of Excellence.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919890424040"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  <span>Call Training Academy (+91 9890424040)</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13 CORE TRAINING PROGRAMS */}
      {/* ========================================================================= */}
      <section id="training-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              ACADEMY TRAINING MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Forensic & Cyber Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Programs</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Hands-on lab training in digital forensics, crime scene management, questioned documents, fingerprint identification, financial fraud, and IT audits.
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
                All 13 Programs
              </button>
              <button
                onClick={() => setActiveCategory("cyber")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "cyber"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Cyber & Digital Forensics
              </button>
              <button
                onClick={() => setActiveCategory("investigation")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "investigation"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Physical Forensics & Documents
              </button>
              <button
                onClick={() => setActiveCategory("custom")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "custom"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Capacity Building & FDPs
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
                  <span>Request Course Curriculum</span>
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
              Training Delivery Framework
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A structured training delivery framework ensuring needs analysis, lab setup, 80% practical instruction, competency evaluation, and certification.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {trainingLifecycle.map((step, idx) => (
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Training Academy</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Veteran forensic instructors, 80% practical lab ratio, and capacity building for law enforcement and corporate teams.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Training Proposal Request
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Request Capacity Building / Training Program Proposal
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding participant batch size, preferred training domain (Digital Forensics, Document Examination, Incident Response), or custom LEA module requirements.
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
                <h3 className="text-2xl font-bold text-white">Training Proposal Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline Training Academy. Our instructional leads will review your batch requirements and contact you shortly.
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
                      Full Name / Training Coordinator *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. R. Mane / Training Officer"
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
                      placeholder="e.g. training@agency.gov.in"
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
                      <option value="Law Enforcement Agency">Law Enforcement Agency / Police</option>
                      <option value="Corporate Enterprise">Corporate Enterprise / Bank</option>
                      <option value="Academic Institution / University">Academic Institution / University</option>
                      <option value="Legal Firm / Judiciary">Legal Firm / Judicial Officers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Training Domain
                  </label>
                  <select
                    value={formData.programType}
                    onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Digital & Cyber Forensics Training">Digital & Cyber Forensics Training</option>
                    <option value="Crime Scene Investigation & Evidence Management">Crime Scene Investigation & Evidence Management</option>
                    <option value="Questioned Document & Signature Examination">Questioned Document & Signature Examination</option>
                    <option value="Fingerprint Examination & Identification">Fingerprint Examination & Identification</option>
                    <option value="Financial Crime & Fraud Investigation">Financial Crime & Fraud Investigation</option>
                    <option value="Incident Response & Digital Evidence Handling">Incident Response & Digital Evidence Handling</option>
                    <option value="Custom LEA & Corporate Capacity Building">Custom LEA & Corporate Capacity Building</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Batch Size & Training Objectives
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on expected batch size (e.g. 25 officers, 50 corporate analysts), preferred duration (3 days, 1 week, 2 weeks), and delivery mode (on-site lab / online)..."
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
                    <span>Processing Training Proposal...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Training Proposal Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Batch parameters and agency disclosures remain protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
