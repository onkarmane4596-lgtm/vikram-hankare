"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Flame,
  Search,
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
  Scale,
  Zap,
  Microscope,
  FileCheck2,
  AlertTriangle,
  FileText,
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

export default function FireExplosionServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "origin" | "arson" | "support">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Insurance Company / Claims Auditor",
    investigationType: "Fire Origin & Cause Determination",
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
        organizationType: "Insurance Company / Claims Auditor",
        investigationType: "Fire Origin & Cause Determination",
        caseBrief: ""
      });
    }, 1200);
  };

  // 12 Core Fire & Explosion Services Offered
  const servicesList = [
    {
      code: "FIRE-ORIGIN-01",
      title: "Fire Origin & Cause Investigation",
      category: "origin",
      icon: Flame,
      desc: "Scientific determination of initial fire ignition points, fuel sources, heat mechanics, and progression paths."
    },
    {
      code: "FIRE-BLAST-01",
      title: "Explosion Cause Analysis",
      category: "origin",
      icon: AlertTriangle,
      desc: "Analyzing blast dynamics, blast seat location, overpressure patterns, fuel-air mixtures, and vessel ruptures."
    },
    {
      code: "FIRE-ORIGIN-02",
      title: "Fire Scene Examination & Documentation",
      category: "origin",
      icon: Search,
      desc: "High-resolution 3D laser photogrammetry, thermal imaging, panoramic scene mapping, and grid documentation."
    },
    {
      code: "FIRE-ORIGIN-03",
      title: "Evidence Identification, Collection & Preservation",
      category: "origin",
      icon: Lock,
      desc: "Sterile extraction of accelerant residues, arc mapping specimens, charred debris, and tamper-proof chain of custody."
    },
    {
      code: "FIRE-ARSON-01",
      title: "Electrical Fire Investigations",
      category: "arson",
      icon: Zap,
      desc: "Arc mapping analysis, short-circuit vs fire-caused arc distinguishability, fuse box auditing, and appliance failures."
    },
    {
      code: "FIRE-ARSON-02",
      title: "Industrial & Commercial Fire Investigations",
      category: "arson",
      icon: Building2,
      desc: "Investigating chemical plant fires, manufacturing facility explosions, dust explosions, and machinery overheating."
    },
    {
      code: "FIRE-ARSON-03",
      title: "Residential Fire Investigations",
      category: "arson",
      icon: Flame,
      desc: "Evaluating residential structure fires, heating equipment failures, wiring faults, and accidental ignition vectors."
    },
    {
      code: "FIRE-ORIGIN-04",
      title: "Gas Leakage & Explosion Investigations",
      category: "origin",
      icon: Activity,
      desc: "LPG / PNG pipeline leak detection analysis, valve failure mechanics, pressure buildup, and ignition source tracing."
    },
    {
      code: "FIRE-ARSON-04",
      title: "Arson & Suspected Deliberate Fire Investigations",
      category: "arson",
      icon: ShieldCheck,
      desc: "Detecting accelerant pour patterns, multiple independent points of origin, incendiary devices, and fraud indicators."
    },
    {
      code: "FIRE-SUPP-01",
      title: "Insurance Claim Fire Investigations",
      category: "support",
      icon: FileCheck2,
      desc: "Independent cause verification for underwriters, fraudulent arson claim detection, and property loss audits."
    },
    {
      code: "FIRE-ORIGIN-05",
      title: "Fire Pattern & Burn Analysis",
      category: "origin",
      icon: Microscope,
      desc: "Evaluating char depth, V-patterns, spalling, glass crazing, calcination, and thermal vector directionality."
    },
    {
      code: "FIRE-SUPP-02",
      title: "Expert Consultation & Litigation Support",
      category: "support",
      icon: Scale,
      desc: "Formulating court-admissible forensic reports, NFPA 921 compliant technical briefs, and expert witness testimony."
    }
  ];

  // 5-Stage Scientific Fire Investigation Workflow
  const investigationSteps = [
    {
      step: "01",
      title: "Scene Securement & Hazard Assessment",
      desc: "Establishing perimeter security, structural stability assessment, air quality safety, and initial scene preservation.",
      tag: "SCENE SECURE"
    },
    {
      step: "02",
      title: "Systematic Exterior to Interior Inspection",
      desc: "Methodical examination of external burn indicators, utility entry points, roof damage, and progression vectors.",
      tag: "EXTERIOR EXAMINATION"
    },
    {
      step: "03",
      title: "Burn Pattern & Arc Mapping Analysis",
      desc: "Documenting V-patterns, char depth, thermal lines of demarcation, and electrical arc mapping to pinpoint origin.",
      tag: "ORIGIN PINPOINT"
    },
    {
      step: "04",
      title: "Debris Sampling & Gas Chromatography (GC-MS)",
      desc: "Sterile retrieval of suspected accelerant residues for GC-MS laboratory chemical extraction and identification.",
      tag: "ACCELERANT TESTING"
    },
    {
      step: "05",
      title: "NFPA 921 Compliant Forensic Report",
      desc: "Formulating objective origin & cause reports backed by scientific method guidelines for insurance and judicial use.",
      tag: "NFPA 921 REPORT"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "NFPA 921 Scientific Guidelines",
      desc: "Every fire investigation follows strict scientific methodology established under NFPA 921 and NFPA 1033 international standards.",
      icon: Flame,
      node: "01 // NFPA 921"
    },
    {
      title: "Certified Fire & Explosion Investigators",
      desc: "Our forensic engineers and fire investigators possess extensive field experience across residential, commercial, and industrial blazes.",
      icon: ShieldCheck,
      node: "02 // CERTIFIED UNIT"
    },
    {
      title: "GC-MS Chemical Accelerant Testing",
      desc: "Equipped with Gas Chromatography-Mass Spectrometry laboratory analysis to identify liquid accelerants with high precision.",
      icon: Microscope,
      node: "03 // GC-MS LAB"
    },
    {
      title: "Insurance Claim & Underwriting Integrity",
      desc: "Providing objective origin & cause reports for insurance claims, fraudulent arson detection, and subrogation litigation.",
      icon: FileCheck2,
      node: "04 // INSURANCE AUDIT"
    },
    {
      title: "Section 45 Courtroom Expert Witness",
      desc: "Our senior fire investigators deliver sworn testimony and technical photographic evidence charts in judicial proceedings.",
      icon: Scale,
      node: "05 // COURT ADMISSIBLE"
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
            alt="Fire & Explosion Investigation Background"
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
              <span className="text-[#00d4ff] font-bold">Fire & Explosion Investigation</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-FIRE-09</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <Flame className="w-4 h-4 text-[#00d4ff]" /> FORENSIC FIRE & ARSON INVESTIGATION LABORATORY
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Fire & Explosion <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Investigation Services</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                Determining the precise origin and cause of structural fires, industrial explosions, electrical short circuits, gas leaks, and suspected arson requires rigorous scientific methodology. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we provide scientific Fire &amp; Explosion Investigation Services adhering to NFPA 921 guidelines. We combine arc mapping, burn pattern analysis, GC-MS chemical accelerant testing, and court-admissible Section 45 expert reporting for insurance companies, industrial enterprises, and legal authorities.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <Flame className="w-4 h-4 text-sky-200" />
                  <span>Request Fire Investigation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#fire-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Microscope className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 12 Fire Modules</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">FIRE INVESTIGATION UNIT</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    NFPA 921 COMPLIANT
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Flame className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Origin & Cause Determination</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Scientific identification of ignition point, fuel package & heat source.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Zap className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Electrical Arc Mapping</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Distinguishing cause-versus-victim electrical arc beads & wiring faults.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Microscope className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">GC-MS Accelerant Analysis</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Gas chromatography extraction identifying petroleum accelerants & arson.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <FileCheck2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Insurance Claim Verification</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Independent technical cause audits for underwriters & subrogation claims.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919890424040"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  <span>Call Fire Investigation Unit (+91 9890424040)</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 CORE SERVICES OFFERED */}
      {/* ========================================================================= */}
      <section id="fire-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              FIRE & EXPLOSION MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Fire & Explosion <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Origin &amp; cause determination, blast dynamics, electrical arc mapping, industrial explosion auditing, gas leak tracing, and GC-MS accelerant testing.
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
                onClick={() => setActiveCategory("origin")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "origin"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Origin, Cause & Blast Dynamics
              </button>
              <button
                onClick={() => setActiveCategory("arson")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "arson"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Electrical, Industrial & Arson
              </button>
              <button
                onClick={() => setActiveCategory("support")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "support"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Insurance Claims & Litigation
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
                  <span>Request Fire Scope</span>
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
              NFPA 921 Protocol
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Fire <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A scientific investigation protocol adhering strictly to NFPA 921 standards for origin determination and court admissibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {investigationSteps.map((step, idx) => (
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Fire Unit</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              NFPA 921 scientific methodology, GC-MS accelerant testing, and independent insurance claim audits.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Fire Case Intake
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Schedule Fire & Explosion Investigation
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding structural fires, industrial explosions, electrical short circuits, or insurance claim audits under strict Non-Disclosure Agreements.
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
                <h3 className="text-2xl font-bold text-white">Fire Investigation Intake Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for contacting Skyline Fire Unit. Our certified fire investigators will review your case details under strict Non-Disclosure Agreements.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Submit Another Investigation Request
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
                      placeholder="e.g. S. K. Kadam / Senior Claims Surveyor"
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
                      placeholder="e.g. claims@insurance.com"
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
                      <option value="Insurance Company / Claims Auditor">Insurance Company / Claims Auditor</option>
                      <option value="Industrial Enterprise">Industrial / Manufacturing Plant</option>
                      <option value="Commercial Business">Commercial Enterprise / Property Owner</option>
                      <option value="Legal Firm / Advocate">Legal Firm / Defense Advocate</option>
                      <option value="Law Enforcement / Fire Brigade">Law Enforcement / Fire Brigade</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Fire Investigation Module
                  </label>
                  <select
                    value={formData.investigationType}
                    onChange={(e) => setFormData({ ...formData, investigationType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Fire Origin & Cause Determination">Fire Origin & Cause Determination</option>
                    <option value="Explosion Cause Analysis">Explosion Cause Analysis</option>
                    <option value="Electrical Arc Mapping Analysis">Electrical Arc Mapping Analysis</option>
                    <option value="Arson & Accelerant Detection (GC-MS)">Arson & Accelerant Detection (GC-MS)</option>
                    <option value="Insurance Claim & Subrogation Audit">Insurance Claim & Subrogation Audit</option>
                    <option value="NFPA 921 Court Expert Witness Testimony">NFPA 921 Court Expert Witness Testimony</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Incident Location & Property Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on incident location, property type (industrial, commercial, residential), date of incident, or insurance claim parameters..."
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
                    <span>Processing Investigation Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Fire Investigation Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Fire scene disclosures and debris sample data remain protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
