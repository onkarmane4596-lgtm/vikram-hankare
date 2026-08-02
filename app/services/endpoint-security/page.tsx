"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Laptop,
  ShieldCheck,
  Cpu,
  Lock,
  Server,
  Smartphone,
  HardDrive,
  Activity,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldAlert,
  Zap,
  Building2,
  Mail,
  Send,
  Check,
  Layers,
  FileCode,
  Search,
  Radio,
  FileText,
  RefreshCw,
  Usb,
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

export default function EndpointSecurityServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "protection" | "hardening" | "policy">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise",
    serviceType: "Endpoint Detection & Response (EDR / XDR)",
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
        serviceType: "Endpoint Detection & Response (EDR / XDR)",
        caseBrief: ""
      });
    }, 1200);
  };

  // 12 Core Endpoint Security Services Offered
  const servicesList = [
    {
      code: "END-EPP-01",
      title: "Endpoint Protection Platform (EPP) Implementation",
      category: "protection",
      icon: ShieldCheck,
      desc: "Deploying next-gen antivirus, behavior-based threat prevention, firewall integration, and centralized policy management across all devices."
    },
    {
      code: "END-EDR-01",
      title: "Endpoint Detection & Response (EDR)",
      category: "protection",
      icon: Cpu,
      desc: "Real-time process telemetry capture, automated threat hunting, behavioral anomaly detection, and rapid endpoint containment."
    },
    {
      code: "END-XDR-01",
      title: "Extended Detection & Response (XDR) Solutions",
      category: "protection",
      icon: Radio,
      desc: "Correlating endpoint telemetry with network traffic, cloud workloads, email security gateways, and identity providers."
    },
    {
      code: "END-MAL-01",
      title: "Anti-Malware & Anti-Ransomware Protection",
      category: "protection",
      icon: FileCode,
      desc: "Zero-day ransomware blocking, shadow copy protection, automated file rollback, and memory injection prevention."
    },
    {
      code: "END-MON-01",
      title: "Endpoint Threat Monitoring & Analysis",
      category: "protection",
      icon: Activity,
      desc: "24/7 SOC monitoring of endpoint alerts, triage of suspicious process executions, and root cause analysis."
    },
    {
      code: "END-HARD-01",
      title: "Device Hardening & Security Configuration",
      category: "hardening",
      icon: Laptop,
      desc: "CIS benchmark alignment, disabling unneeded services, enforcing OS hardening, and credential guard implementation."
    },
    {
      code: "END-PATCH-01",
      title: "Patch & Vulnerability Management",
      category: "hardening",
      icon: RefreshCw,
      desc: "Automated OS and third-party software vulnerability scanning, patch testing, and scheduled zero-day patch deployments."
    },
    {
      code: "END-COMP-01",
      title: "Endpoint Compliance & Security Assessments",
      category: "policy",
      icon: CheckCircle2,
      desc: "Auditing endpoint security posture against ISO 27001, CERT-In guidelines, HIPAA, PCI-DSS, and internal corporate mandates."
    },
    {
      code: "END-DEV-01",
      title: "USB & Peripheral Device Control",
      category: "hardening",
      icon: Usb,
      desc: "Enforcing strict peripheral access rules, blocking unauthorized USB storage devices, and preventing physical data exfiltration."
    },
    {
      code: "END-MDM-01",
      title: "Mobile Device Security (MDM / MAM)",
      category: "protection",
      icon: Smartphone,
      desc: "Securing corporate iOS and Android devices with containerization, remote wipe capabilities, and mobile threat defense."
    },
    {
      code: "END-FOR-01",
      title: "Incident Response & Endpoint Forensics",
      category: "policy",
      icon: Search,
      desc: "On-demand endpoint forensic isolation, memory dump parsing, malicious artifact extraction, and post-breach remediation."
    },
    {
      code: "END-POL-01",
      title: "Endpoint Security Policy Development & Advisory",
      category: "policy",
      icon: FileText,
      desc: "Formulating acceptable device usage policies, remote work guidelines, BYOD security protocols, and security awareness training."
    }
  ];

  // 5-Stage Endpoint Protection Process
  const processSteps = [
    {
      step: "01",
      title: "Endpoint Inventory & Baseline Discovery",
      desc: "Automated discovery of all workstations, laptops, servers, BYOD mobile devices, and unmanaged endpoints across subnets.",
      tag: "ASSET DISCOVERY"
    },
    {
      step: "02",
      title: "EDR Agent Deployment & Policy Tuning",
      desc: "Centralized silent deployment of EDR/EPP agent binaries, defining process whitelist rules, and configuring USB control policies.",
      tag: "EDR DEPLOYMENT"
    },
    {
      step: "03",
      title: "OS Hardening & Vulnerability Patching",
      desc: "Benchmarking endpoint settings against CIS controls, enforcing BitLocker/FileVault encryption, and applying critical OS patches.",
      tag: "CIS HARDENING"
    },
    {
      step: "04",
      title: "24/7 SOC Telemetry & Threat Isolation",
      desc: "Continuous real-time process monitoring, behavioral ransomware blocking, and automated endpoint isolation upon detection.",
      tag: "24/7 MONITORING"
    },
    {
      step: "05",
      title: "Compliance Verification & Policy Auditing",
      desc: "Regular automated compliance auditing against ISO 27001 / CERT-In guidelines with board-level health dashboards.",
      tag: "COMPLIANCE CLEARANCE"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Next-Gen EDR & Zero-Day Ransomware Protection",
      desc: "Combining machine learning process heuristics, automated shadow copy protection, and instant network isolation.",
      icon: ShieldCheck,
      node: "01 // NEXT-GEN EDR"
    },
    {
      title: "CIS Benchmark OS Hardening",
      desc: "Enforcing strict CIS hardening configurations across Windows, macOS, Linux, Android, and iOS enterprise deployments.",
      icon: Laptop,
      node: "02 // CIS BENCHMARK"
    },
    {
      title: "24/7 Managed SOC Telemetry",
      desc: "Our security operations center monitors endpoint alerts continuously, filtering false positives and responding instantly.",
      icon: Radio,
      node: "03 // 24/7 SOC MONITOR"
    },
    {
      title: "USB Hardware & Peripheral Control",
      desc: "Preventing physical data theft through encrypted USB white-listing, read-only policies, and peripheral blocking.",
      icon: Usb,
      node: "04 // HARDWARE CONTROL"
    },
    {
      title: "Zero Downtime Deployment Protocol",
      desc: "Silent, non-disruptive agent installation and policy enforcement configured for continuous employee productivity.",
      icon: RefreshCw,
      node: "05 // ZERO DOWNTIME"
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
            alt="Endpoint Security & Protection Background"
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
              <span className="text-[#00d4ff] font-bold">Endpoint Security & Protection</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-END-14</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <Laptop className="w-4 h-4 text-[#00d4ff]" /> ENDPOINT SECURITY, EDR & DEVICE HARDENING
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Endpoint Security & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Protection Services</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                Corporate workstations, laptops, remote employee endpoints, and mobile devices serve as the primary entry points for ransomware, phishing payloads, and data exfiltration. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we provide comprehensive Endpoint Security Services—combining Next-Gen Endpoint Detection &amp; Response (EDR/XDR), zero-day ransomware rollback, CIS OS hardening, USB peripheral control, and centralized 24/7 SOC monitoring.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <Cpu className="w-4 h-4 text-sky-200" />
                  <span>Request EDR Protection Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#endpoint-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Laptop className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore 12 Endpoint Modules</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">ENDPOINT PROTECTION HUB</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    EDR / XDR READY
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Cpu className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Real-Time EDR Telemetry</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Behavioral process monitoring & instant automated endpoint isolation.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <FileCode className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Anti-Ransomware & Rollback</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Zero-day payload blocking with automated VSS shadow copy restoration.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Laptop className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">CIS OS Hardening & Patching</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Benchmarking Win/macOS/Linux devices against CIS & vulnerability patches.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Usb className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">USB Peripheral Blocking</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Enforcing strict device whitelist rules to block physical data leaks.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#consultation-form"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <ShieldCheck className="w-4 h-4 text-[#00d4ff]" />
                  <span>Reserve Endpoint Security Audit</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 CORE SERVICES OFFERED */}
      {/* ========================================================================= */}
      <section id="endpoint-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              ENDPOINT SECURITY MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Endpoint Protection <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Next-Gen EPP/EDR deployment, anti-ransomware rollback, CIS OS hardening, automated vulnerability patching, USB controls, and MDM mobile security.
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
                onClick={() => setActiveCategory("protection")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "protection"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                EDR / XDR & Threat Protection
              </button>
              <button
                onClick={() => setActiveCategory("hardening")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "hardening"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Device Hardening & USB Controls
              </button>
              <button
                onClick={() => setActiveCategory("policy")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "policy"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Compliance & Policy Advisory
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
                  <span>Request Protection Scope</span>
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
              Endpoint Protection Framework
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our 5-Stage Protection <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A structured deployment workflow ensuring zero disruption, CIS OS hardening, real-time EDR telemetry, and continuous compliance auditing.
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Endpoint Unit</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Next-Gen EDR/XDR technology, CIS OS hardening benchmarks, and 24/7 SOC monitoring integration.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Endpoint Scope Proposal
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Schedule Endpoint Security Audit & EDR Deployment
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit details regarding workstation count, server fleet, mobile endpoints, or CIS hardening goals under strict Non-Disclosure Agreements.
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
                <h3 className="text-2xl font-bold text-white">EDR Proposal Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline Endpoint Unit. Our security engineers will review your infrastructure parameters under strict Non-Disclosure Agreements.
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
                      placeholder="e.g. S. M. Kulkarni / IT Operations Manager"
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
                      placeholder="e.g. itops@company.com"
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
                      <option value="Government Entity">Government Body / Public Sector</option>
                      <option value="Software & SaaS Provider">Software & SaaS Provider</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Endpoint Module
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Endpoint Detection & Response (EDR / XDR)">Endpoint Detection & Response (EDR / XDR)</option>
                    <option value="Anti-Ransomware & Rollback Protection">Anti-Ransomware & Shadow Copy Rollback</option>
                    <option value="CIS OS Hardening & Patch Management">CIS OS Hardening & Patch Management</option>
                    <option value="USB & Peripheral Hardware Control">USB & Peripheral Hardware Access Control</option>
                    <option value="Mobile Device Security (MDM / MAM)">Mobile Device Security (MDM / MAM)</option>
                    <option value="Endpoint Forensics & Incident Response">Endpoint Forensics & Incident Response</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Endpoint Count & Deployment Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on total endpoint count (Windows, macOS, Linux workstations/servers), remote sites, current antivirus software, or compliance goals..."
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
                      <Send className="w-4 h-4" /> Submit Confidential Endpoint Proposal Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Endpoint fleet data and security disclosures remain protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
