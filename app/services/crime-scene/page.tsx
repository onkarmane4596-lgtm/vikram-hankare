"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Search,
  Scan,
  Fingerprint,
  Camera,
  Ruler,
  Microscope,
  FileCheck2,
  ShieldCheck,
  Scale,
  FileText,
  CheckCircle2,
  ArrowRight,
  Lock,
  Building2,
  Activity,
  Flame,
  Car,
  AlertTriangle,
  Briefcase,
  ChevronRight,
  PhoneCall,
  Mail,
  User,
  Layers,
  Eye,
  Gavel,
  Sparkles,
  Send,
  Check,
  Shield,
  HelpCircle
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

export default function CrimeSceneServicePage() {
  const [activeTab, setActiveTab] = useState<"investigation" | "reconstruction">("investigation");
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Legal Professionals",
    serviceType: "Crime Scene Investigation",
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
        organizationType: "Legal Professionals",
        serviceType: "Crime Scene Investigation",
        caseBrief: ""
      });
    }, 1200);
  };

  // Investigation Items (10 Items)
  const csiItems = [
    {
      title: "Comprehensive Crime Scene Assessment",
      desc: "Methodical initial walkthrough, scene preservation, risk assessment, and establishing strict perimeter controls to prevent contamination.",
      icon: Search
    },
    {
      title: "Forensic Photography & Videography",
      desc: "High-resolution forensic photogrammetry, panoramic 360° capture, close-up macro evidence photos with certified scale markers.",
      icon: Camera
    },
    {
      title: "Scene Measurements & Sketch Preparation",
      desc: "Precision laser spatial measuring, scaled 2D floor plans, 3D CAD environmental rendering, and spatial relation mapping.",
      icon: Ruler
    },
    {
      title: "Physical Evidence Identification & Preservation",
      desc: "Systematic collection, sterile packaging, and contamination-free preservation of physical artifacts and biological traces.",
      icon: Microscope
    },
    {
      title: "Fingerprint & Latent Print Examination",
      desc: "Advanced chemical development (cyanoacrylate, ninhydrin), laser light source detection, high-contrast imaging, and AFIS comparison.",
      icon: Fingerprint
    },
    {
      title: "Bloodstain Pattern Analysis (BPA)",
      desc: "Scientific evaluation of blood spatter dynamics, impact angles, directionality, point of origin triangulation, and motion sequencing.",
      icon: Activity
    },
    {
      title: "Trace Evidence Examination",
      desc: "Microscopic extraction and evaluation of fibers, hair, glass fragments, paint chips, accelerant residues, and explosive particulates.",
      icon: Scan
    },
    {
      title: "Footwear & Impression Evidence Documentation",
      desc: "3D dental stone casting, electrostatic dust lifting (ESDL), tire tread analysis, and high-resolution optical comparison.",
      icon: Eye
    },
    {
      title: "Digital Evidence Identification & Preservation",
      desc: "On-scene forensic triage of mobile devices, CCTV DVRs, storage media, IoT hardware, and write-blocked bitstream imaging.",
      icon: Lock
    },
    {
      title: "Chain of Custody Management",
      desc: "Tamper-evident sealing, rigorous evidence tracking logs, barcoded custody records, and court-admissible audit documentation.",
      icon: FileCheck2
    }
  ];

  // Reconstruction Items (8 Case Types)
  const csrCases = [
    {
      title: "Homicides & Suspicious Deaths",
      desc: "Manner and mechanism of death analysis, wound orientation correlation, trajectory mapping, and victim-suspect interaction dynamics.",
      icon: SkullOrShield,
      tag: "Violent Crimes"
    },
    {
      title: "Assault & Violent Crime Investigations",
      desc: "Reconstruction of physical altercations, struggle dynamics, weapon impact trajectories, and defensiveness evaluations.",
      icon: AlertTriangle,
      tag: "Personal Injury"
    },
    {
      title: "Burglary & Robbery Cases",
      desc: "Point-of-entry determination, tool mark comparison, sequence of room traversal, and forced-entry mechanism analysis.",
      icon: Lock,
      tag: "Property Crime"
    },
    {
      title: "Fire & Explosion Incidents",
      desc: "Origin and cause analysis, pour pattern identification, burn depth profiling, accelerant detection, and blast force calculations.",
      icon: Flame,
      tag: "Arson & Hazards"
    },
    {
      title: "Road Traffic Accident Reconstruction",
      desc: "Vehicle kinetics, collision dynamics, skid mark velocity calculations, crush energy analysis, and occupant kinematics.",
      icon: Car,
      tag: "MVA & Transport"
    },
    {
      title: "Workplace & Industrial Accidents",
      desc: "Machinery failure root-cause analysis, OSHA safety protocol audits, hazard exposure, and procedural timeline reconstruction.",
      icon: Building2,
      tag: "Industrial Safety"
    },
    {
      title: "Insurance Claim Investigations",
      desc: "Detection of staged accidents, fraudulent arson claims, fraudulent burglary claims, and physical evidence verification.",
      icon: FileText,
      tag: "Fraud Prevention"
    },
    {
      title: "Civil Disputes Involving Forensic Evidence",
      desc: "Property damage causation, boundary violation physical evidence, product liability testing, and litigation support.",
      icon: Scale,
      tag: "Litigation Support"
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Scene Triage & Preservation",
      desc: "Immediate evaluation, establishing security perimeters, preventing contamination, and initial scene assessment."
    },
    {
      step: "02",
      title: "Systematic Evidence Capture",
      desc: "3D laser scanning, forensic photography, latent print recovery, and sterile physical artifact collection."
    },
    {
      step: "03",
      title: "Laboratory Analysis & Correlation",
      desc: "Multidisciplinary scientific testing, microscopic analysis, trajectory calculations, and digital evidence extraction."
    },
    {
      step: "04",
      title: "Analytical Sequence Reconstruction",
      desc: "Correlating physical evidence, witness statements, and forensic findings to establish the chronological sequence of events."
    },
    {
      step: "05",
      title: "Court-Admissible Reporting",
      desc: "Formulating comprehensive forensic reports, high-impact 3D visual graphics, and expert witness testimony support."
    }
  ];

  // Why Choose Us Pillars (6 Pillars)
  const pillars = [
    {
      title: "Scientific & Evidence-Based Approach",
      desc: "Every conclusion is derived strictly from verifiable physical evidence, mathematical modeling, and established forensic principles to ensure absolute accuracy and reliability.",
      icon: Microscope
    },
    {
      title: "Experienced Forensic Professionals",
      desc: "Our team consists of certified forensic specialists, former law enforcement investigators, and scientific experts with decades of combined experience across diverse disciplines.",
      icon: ShieldCheck
    },
    {
      title: "Independent & Unbiased Analysis",
      desc: "Skyline maintains complete organizational neutrality, providing objective, factual findings based solely on scientific examination regardless of prosecution or defense retention.",
      icon: Scale
    },
    {
      title: "Legal & Procedural Compliance",
      desc: "All investigations and evidence handling strictly comply with international ISO standards, statutory legal protocols, and rules of evidence to guarantee court admissibility.",
      icon: Gavel
    },
    {
      title: "Advanced Forensic Techniques",
      desc: "We deploy state-of-the-art technological tools including 3D laser photogrammetry, ballistics trajectory software, latent print chemistry, and digital write-blockers.",
      icon: Sparkles
    },
    {
      title: "Confidentiality & Professionalism",
      desc: "Sensitive investigations are executed under strict non-disclosure agreements, encrypted communications, and the highest standards of professional ethics and client privacy.",
      icon: Lock
    }
  ];

  // Target Sectors
  const targetSectors = [
    "Law Enforcement Agencies",
    "Legal Professionals & Defense Counsel",
    "Government Investigative Departments",
    "Insurance Underwriters & Claims Adjusters",
    "Corporate Security & Risk Teams",
    "Private Individuals & Family Representatives"
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pb-24 overflow-x-hidden relative">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="fixed top-[40%] left-[-10%] w-[45vw] h-[45vh] bg-[#38BDF8]/5 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-white/[0.06]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Forensic Crime Scene Header Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/70 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/services" className="hover:text-[#00d4ff] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">Crime Scene Investigation & Reconstruction</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-[#00d4ff]" /> Forensic Consultancy & Reconstruction
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Crime Scene Investigation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Reconstruction</span>
            </motion.h1>

            {/* Introductory Text */}
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we provide specialized Crime Scene Investigation (CSI) and Crime Scene Reconstruction Consultancy Services designed to support law enforcement agencies, legal professionals, government departments, insurance companies, corporate organizations, and private clients. Our services combine scientific methodology, forensic expertise, and advanced analytical techniques to help establish the facts surrounding an incident with accuracy and objectivity.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#consultation-form"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Request Forensic Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services-breakdown"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-[#00d4ff]/40 transition-all flex items-center gap-2"
              >
                Explore Forensic Services
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
                <CheckCircle2 className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">ISO Standard</p>
                <p className="text-xs text-slate-400">Court-Admissible Protocols</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Microscope className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Multi-Disciplinary</p>
                <p className="text-xs text-slate-400">Forensic Scientists & Experts</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Chain of Custody</p>
                <p className="text-xs text-slate-400">Strict Integrity Preserved</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">100% Unbiased</p>
                <p className="text-xs text-slate-400">Neutral Scientific Findings</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CORE FORENSIC PHILOSOPHY & EVIDENCE IMPORTANCE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00d4ff] uppercase tracking-wider">
                  <Layers className="w-4 h-4" /> Evidence Integrity & Scientific Standards
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  Transforming Raw Crime Scene Data into Irrefutable Scientific Evidence
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  Crime scenes contain critical physical and digital evidence that can reveal how an event occurred, identify the individuals involved, and assist investigators in determining the sequence of actions leading to the incident. Skyline’s forensic experts follow internationally accepted forensic standards to ensure that every investigation is conducted with professionalism, integrity, and strict adherence to evidence-handling protocols.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                  <Fingerprint className="w-6 h-6 text-[#00d4ff] shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Latent Evidence Recovery</h4>
                    <p className="text-xs text-slate-400">Microscopic & Chemical Detection</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#00d4ff] shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Chronological Reconstruction</h4>
                    <p className="text-xs text-slate-400">Probable Sequence Mapping</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                  <Gavel className="w-6 h-6 text-[#00d4ff] shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Courtroom Admissibility</h4>
                    <p className="text-xs text-slate-400">Defensible Expert Testimony</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES BREAKDOWN (INTERACTIVE TABS & CARDS) */}
      <section id="services-breakdown" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Forensic Offerings</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Dual specialized domains designed to provide end-to-end investigative clarity from initial scene containment to advanced analytical reconstruction.
            </p>

            {/* TAB SELECTOR */}
            <div className="inline-flex p-1.5 mt-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setActiveTab("investigation")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === "investigation"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Search className="w-4 h-4" /> Crime Scene Investigation
              </button>
              <button
                onClick={() => setActiveTab("reconstruction")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === "reconstruction"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Layers className="w-4 h-4" /> Crime Scene Reconstruction
              </button>
            </div>
          </motion.div>

          {/* TAB CONTENT: CRIME SCENE INVESTIGATION */}
          {activeTab === "investigation" && (
            <motion.div
              key="investigation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
                    Domain Overview
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Crime Scene Investigation Services
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    Our investigators conduct systematic examinations of crime scenes to identify, document, preserve, and analyze evidence while maintaining the integrity of the investigation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {csiItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00d4ff]/30 hover:bg-white/[0.04] transition-all group flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                        <item.icon className="w-5 h-5 text-[#00d4ff] group-hover:text-slate-950" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base mb-1 group-hover:text-[#00d4ff] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB CONTENT: CRIME SCENE RECONSTRUCTION */}
          {activeTab === "reconstruction" && (
            <motion.div
              key="reconstruction"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
                    Domain Overview
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Crime Scene Reconstruction Consultancy
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    Crime Scene Reconstruction is a scientific process that recreates the most probable sequence of events by correlating physical evidence, witness statements, forensic findings, and investigative data. Our reconstruction consultancy assists in cases involving:
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {csrCases.map((c, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00d4ff]/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff]/20">
                            <c.icon className="w-5 h-5 text-[#00d4ff]" />
                          </div>
                          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                            {c.tag}
                          </span>
                        </div>
                        <h4 className="text-white font-bold text-base mb-2 group-hover:text-[#00d4ff] transition-colors">
                          {c.title}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed mb-4">
                          {c.desc}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#00d4ff] font-semibold">
                        <span>Reconstruction Scope</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* STEP-BY-STEP FORENSIC WORKFLOW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
              Standard Operating Procedure
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Investigation & Reconstruction <span className="text-slate-400">Workflow</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              A rigorous 5-phase scientific pipeline guaranteeing zero evidence contamination, strict chain of custody, and bulletproof legal admissibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {processSteps.map((step, idx) => (
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

      {/* WHY CHOOSE US (6 PILLARS) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Engineered for accuracy, legal compliance, and absolute objective integrity in complex forensic investigations.
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

      {/* TARGET SECTORS & WHO WE SERVE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" /> Beneficiaries & Clients
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Who We Serve
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Our consultancy supports key stakeholders who require precise, verifiable, and legally defensible forensic evidence and incident reconstruction.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {targetSectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 transition-all flex items-center gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
                  </div>
                  <span className="text-slate-200 font-semibold text-sm">
                    {sector}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CONSULTATION INQUIRY & CONTACT FORM */}
      <section id="consultation-form" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />
            
            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs font-bold text-[#00d4ff] uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5" /> Confidential Inquiry
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Request Crime Scene Consultancy
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding your investigation or reconstruction requirement. Our senior forensic directors maintain total confidentiality.
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
                <h3 className="text-2xl font-bold text-white">Consultation Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for contacting Skyline. Our forensic investigation team will review your details under strict confidentiality protocols and reach out shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name / Official Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adv. Rajesh Sharma / Capt. V. K. Singh"
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
                      placeholder="e.g. client@legal-chambers.com"
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
                      <option value="Law Enforcement">Law Enforcement Agency</option>
                      <option value="Legal Professionals">Legal Professionals / Law Firm</option>
                      <option value="Insurance Company">Insurance Company / Auditor</option>
                      <option value="Corporate Client">Corporate Enterprise</option>
                      <option value="Private Individual">Private Individual / Family</option>
                      <option value="Government Department">Government Department</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Service Requirement
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Crime Scene Investigation">Crime Scene Investigation (CSI)</option>
                    <option value="Crime Scene Reconstruction">Crime Scene Reconstruction (CSR)</option>
                    <option value="Combined CSI & Reconstruction">Combined Investigation & Reconstruction</option>
                    <option value="Expert Witness & Court Opinion">Expert Witness / Court Opinion</option>
                    <option value="Second Opinion / Review">Second Opinion & Evidence Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Case Summary / Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe the incident context, evidence status, or specific scientific reconstruction objectives..."
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
                    <span>Processing Confidential Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Inquiry
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> All disclosures are encrypted and protected under non-disclosure agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}

// Helper SkullOrShield Icon fallback for violent crime cases
function SkullOrShield(props: any) {
  return <AlertTriangle {...props} />;
}
