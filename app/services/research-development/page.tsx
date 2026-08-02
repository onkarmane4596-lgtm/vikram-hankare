"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  Cpu,
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
  Microscope,
  FileText,
  BookOpen,
  FlaskConical,
  Award,
  Globe,
  Database,
  Brain,
  Share2,
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

export default function ResearchDevelopmentServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "forensics" | "ai" | "projects">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Academic Institution / University",
    researchDomain: "AI & Emerging Technologies in Forensics",
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
        organizationType: "Academic Institution / University",
        researchDomain: "AI & Emerging Technologies in Forensics",
        caseBrief: ""
      });
    }, 1200);
  };

  // 12 Core R&D Activities Offered
  const rdActivities = [
    {
      code: "RD-SCI-01",
      title: "Applied Research in Forensic Science",
      category: "forensics",
      icon: FlaskConical,
      desc: "Investigating novel physical, chemical, and optical evidence analysis techniques to advance evidence reliability."
    },
    {
      code: "RD-CYB-01",
      title: "Digital & Cyber Forensics Research",
      category: "forensics",
      icon: Cpu,
      desc: "Developing novel memory extraction algorithms, IoT forensic parsing models, and cloud log reconstruction tools."
    },
    {
      code: "RD-SCI-02",
      title: "Crime Scene Investigation & Reconstruction Research",
      category: "forensics",
      icon: Search,
      desc: "Advancing 3D spatial photogrammetry, automated trajectory modeling, and bloodstain pattern analytics."
    },
    {
      code: "RD-SCI-03",
      title: "Questioned Document & Handwriting Research",
      category: "forensics",
      icon: FileText,
      desc: "Researching spectral ink chemistry, optical resolution modeling, and automated handwriting stroke comparisons."
    },
    {
      code: "RD-SCI-04",
      title: "Fingerprint & Biometric Research",
      category: "forensics",
      icon: ShieldCheck,
      desc: "Developing enhanced chemical latent print reagents, high-resolution biometric matching, and contactless friction ridge imaging."
    },
    {
      code: "RD-AI-01",
      title: "Financial Crime & Fraud Analytics Research",
      category: "ai",
      icon: Database,
      desc: "Applying graph neural networks, Benford's Law algorithms, and automated ledger anomaly detection for fraud prevention."
    },
    {
      code: "RD-AI-02",
      title: "AI & Emerging Technologies in Forensics",
      category: "ai",
      icon: Brain,
      desc: "Integrating deep learning, computer vision, natural language processing, and predictive analytics into forensic workflows."
    },
    {
      code: "RD-PROJ-01",
      title: "Development of Forensic Tools & Methodologies",
      category: "projects",
      icon: Sparkles,
      desc: "Engineering custom open-source and proprietary software tools, hardware write-blockers, and validation frameworks."
    },
    {
      code: "RD-PROJ-02",
      title: "Research Publications & Technical Documentation",
      category: "projects",
      icon: BookOpen,
      desc: "Publishing peer-reviewed scientific papers, technical whitepapers, forensic manuals, and standard operating procedures."
    },
    {
      code: "RD-PROJ-03",
      title: "Academic & Industry Collaborative Projects",
      category: "projects",
      icon: Share2,
      desc: "Partnering with universities, national labs, and technology partners on joint research grants and product R&D."
    },
    {
      code: "RD-PROJ-04",
      title: "Validation of Forensic Techniques & Best Practices",
      category: "projects",
      icon: Award,
      desc: "Empirical validation studies verifying tool accuracy, error rates, and compliance with international ISO standards."
    },
    {
      code: "RD-PROJ-05",
      title: "Consultancy for R&D, Innovation & Product Dev",
      category: "projects",
      icon: Globe,
      desc: "Advising startups, law enforcement labs, and tech vendors on forensic software design, IP patenting, and commercialization."
    }
  ];

  // 5-Stage R&D Lifecycle
  const rdLifecycle = [
    {
      step: "01",
      title: "Problem Identification & Literature Review",
      desc: "Isolating emerging forensic challenges, zero-day threat vectors, or gap areas in statutory evidence frameworks.",
      tag: "GAP IDENTIFICATION"
    },
    {
      step: "02",
      title: "Hypothesis & Experimental Design",
      desc: "Formulating rigorous scientific hypotheses, designing controlled laboratory experiments, and establishing baseline metrics.",
      tag: "EXPERIMENTAL MODEL"
    },
    {
      step: "03",
      title: "Prototyping & Algorithmic Engineering",
      desc: "Coding software tools, training AI/ML models, testing chemical reagent formulations, and building hardware prototypes.",
      tag: "ALGORITHMIC DEPLOY"
    },
    {
      step: "04",
      title: "Empirical Testing & ISO Validation",
      desc: "Subjecting tools to rigorous stress testing, ground-truth error rate auditing, and compliance validation under ISO 17025.",
      tag: "ISO 17025 AUDIT"
    },
    {
      step: "05",
      title: "Peer-Review Publication & Deployment",
      desc: "Publishing findings in recognized forensic journals, patenting IP, and releasing validated tools to industry partners.",
      tag: "PEER REVIEWED"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Pioneering Forensic Innovation",
      desc: "Our R&D division bridges academic research with real-world law enforcement and corporate security requirements.",
      icon: Sparkles,
      node: "01 // PIONEERING LAB"
    },
    {
      title: "AI & Neural Graph Analytics Integration",
      desc: "Developing custom deep learning models for automated document forgery detection, audio deepfake analysis, and financial graph mining.",
      icon: Brain,
      node: "02 // AI FORENSICS"
    },
    {
      title: "ISO 17025 Compliant Tool Validation",
      desc: "Empirical error rate testing ensuring custom tools meet rigorous judicial admissibility standards.",
      icon: Award,
      node: "03 // ISO VALIDATED"
    },
    {
      title: "Joint Academic & Grant Collaborations",
      desc: "Active research partnerships with leading universities, government funding bodies, and international forensic research centers.",
      icon: Share2,
      node: "04 // JOINT GRANTS"
    },
    {
      title: "IP Protection & Commercialization Advisory",
      desc: "Guiding forensic tech startups through software architecture design, patent filings, and commercial deployment.",
      icon: Globe,
      node: "05 // IP ADVANCE"
    }
  ];

  const filteredServices = activeCategory === "all"
    ? rdActivities
    : rdActivities.filter(s => s.category === activeCategory);

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
            alt="Research & Development Background"
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
              <span className="text-[#00d4ff] font-bold">Research & Development</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-RD-16</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <FlaskConical className="w-4 h-4 text-[#00d4ff]" /> ADVANCED FORENSIC INNOVATION & R&D LAB
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Research & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Development (R&D)</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                Forensic science and cybersecurity must constantly evolve to stay ahead of complex cybercrimes, AI deepfakes, encrypted channels, and sophisticated physical tampering. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, our Research &amp; Development division conducts cutting-edge research in digital forensics, AI-driven evidence analysis, spectral document imaging, friction ridge algorithms, and novel tool engineering to advance scientific accuracy and judicial admissibility.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <FlaskConical className="w-4 h-4 text-sky-200" />
                  <span>Propose Joint R&D Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#rd-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 12 R&D Domains</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">R&D INNOVATION HUB</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    ISO 17025 VALIDATED
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Brain className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">AI & Neural Graph Forensics</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Deep learning algorithms for automated forgery detection & graph mining.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Sparkles className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Custom Tool Engineering</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Development of open-source & proprietary forensic extraction utilities.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <BookOpen className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Peer-Reviewed Publications</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Authoring technical whitepapers, SOP manuals & scientific journals.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Share2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Academic & Grant Projects</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Joint university research collaborations & government R&D grants.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919890424040"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  <span>Call R&D Innovation Desk (+91 9890424040)</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 CORE R&D ACTIVITIES */}
      {/* ========================================================================= */}
      <section id="rd-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              R&D CAPABILITY MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Research & Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Domains</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Applied forensic research, AI deepfake algorithms, custom tool development, peer-reviewed publishing, and academic joint projects.
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
                All 12 Domains
              </button>
              <button
                onClick={() => setActiveCategory("forensics")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "forensics"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Forensic Sciences & Cyber R&D
              </button>
              <button
                onClick={() => setActiveCategory("ai")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "ai"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                AI & Fraud Analytics R&D
              </button>
              <button
                onClick={() => setActiveCategory("projects")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "projects"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Tool Engineering & Collaborations
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
                  <span>Request Collaboration Scope</span>
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
              R&D Lifecycle Protocol
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage R&D <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A scientific 5-stage lifecycle ensuring empirical hypothesis testing, algorithmic development, ISO validation, and peer-reviewed publishing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {rdLifecycle.map((step, idx) => (
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
              Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline R&D Division</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Pioneering forensic research, AI deep learning integration, and ISO 17025 tool validation standards.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential R&D Collaboration Request
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Propose Joint R&D / Research Collaboration
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding academic joint research, AI forensic tool development, grant applications, or technical consultancy.
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
                <h3 className="text-2xl font-bold text-white">R&D Proposal Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline R&D Division. Our research lead team will review your proposal and contact you shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Submit Another R&D Proposal
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name / Principal Investigator *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. A. V. Deshpande / Professor & R&D Head"
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
                      placeholder="e.g. pi@university.ac.in"
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
                      <option value="Academic Institution / University">Academic Institution / University</option>
                      <option value="Government Research Lab">Government Research Laboratory</option>
                      <option value="Tech Startup / Vendor">Tech Startup / Forensic Software Vendor</option>
                      <option value="Corporate Enterprise">Corporate Enterprise R&D</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Research Domain
                  </label>
                  <select
                    value={formData.researchDomain}
                    onChange={(e) => setFormData({ ...formData, researchDomain: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="AI & Emerging Technologies in Forensics">AI & Emerging Technologies in Forensics</option>
                    <option value="Digital & Cyber Forensics Algorithm Research">Digital & Cyber Forensics Algorithm Research</option>
                    <option value="Questioned Document & Spectral Ink Chemistry">Questioned Document & Spectral Ink Chemistry</option>
                    <option value="Financial Fraud & Benford Analytics R&D">Financial Fraud & Benford Analytics R&D</option>
                    <option value="Joint Academic Research Grant Collaboration">Joint Academic Research Grant Collaboration</option>
                    <option value="Forensic Software Tool Commercialization">Forensic Software Tool Commercialization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Project Abstract & Collaboration Scope
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide a brief summary of the proposed research project, timeline, technical objectives, or funding mechanisms..."
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
                    <span>Processing Proposal...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential R&D Proposal Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Project abstracts and intellectual property disclosures remain protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
