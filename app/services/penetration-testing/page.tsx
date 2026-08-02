"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Terminal,
  ShieldCheck,
  Zap,
  Globe,
  Server,
  Lock,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldAlert,
  Building2,
  Mail,
  Send,
  Check,
  Layers,
  Smartphone,
  Wifi,
  Cloud,
  Cpu,
  RefreshCw,
  FileCode,
  Users,
  Search,
  Key,
  Shield,
  Crosshair,
  Radio
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

export default function PenetrationTestingServicePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "network" | "apps" | "social">("all");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise",
    testingType: "Full Web & Infrastructure Pen Test",
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
        testingType: "Full Web & Infrastructure Pen Test",
        caseBrief: ""
      });
    }, 1200);
  };

  // 12 Core Penetration Testing Services Offered
  const servicesList = [
    {
      code: "PT-NET-01",
      title: "External Network Penetration Testing",
      category: "network",
      icon: Server,
      desc: "Simulating external adversary attacks targeting perimeter firewalls, routers, VPN gateways, public IPs, and mail servers."
    },
    {
      code: "PT-NET-02",
      title: "Internal Network Penetration Testing",
      category: "network",
      icon: ShieldAlert,
      desc: "Testing internal network segementation, privilege escalation vectors, lateral movement capabilities, and rogue device risks."
    },
    {
      code: "PT-APP-01",
      title: "Web Application Penetration Testing",
      category: "apps",
      icon: Globe,
      desc: "Ethical hacking of web applications targeting OWASP Top 10 vulnerabilities (SQLi, XSS, SSRF, IDOR, business logic flaws)."
    },
    {
      code: "PT-APP-02",
      title: "Mobile Application Penetration Testing",
      category: "apps",
      icon: Smartphone,
      desc: "Simulating attacks against iOS and Android applications, reverse engineering binaries, API tampering, and storage security."
    },
    {
      code: "PT-NET-03",
      title: "Wireless Network Penetration Testing",
      category: "network",
      icon: Wifi,
      desc: "Auditing corporate Wi-Fi WPA2/WPA3 enterprise encryption, rogue AP deployment, captive portal bypass, and RADIUS exploits."
    },
    {
      code: "PT-CLOUD-01",
      title: "Cloud Security Penetration Testing",
      category: "apps",
      icon: Cloud,
      desc: "Simulating cloud account takeovers, IAM privilege escalation, container escapes, open S3 buckets, and serverless exploit paths."
    },
    {
      code: "PT-APP-03",
      title: "API Security Testing",
      category: "apps",
      icon: FileCode,
      desc: "Testing RESTful, GraphQL, and SOAP API endpoints for broken object-level authorization (BOLA), rate limiting, and mass assignment."
    },
    {
      code: "PT-[#00d4ff]-01",
      title: "Active Directory Security Assessment",
      category: "social",
      icon: Key,
      desc: "Auditing Kerberoasting, AS-REP roasting, DCSync vulnerabilities, GPO misconfigurations, and Domain Admin path exploits."
    },
    {
      code: "PT-NET-04",
      title: "Endpoint Security Testing",
      category: "network",
      icon: Cpu,
      desc: "Bypassing EDR/AV solutions, testing application whitelisting rules, process injection, and local privilege escalation."
    },
    {
      code: "PT-SOC-01",
      title: "Social Engineering Security Assessment",
      category: "social",
      icon: Users,
      desc: "Controlled spear-phishing campaigns, vishing, pretexting, and physical facility access testing to measure human security awareness."
    },
    {
      code: "PT-NET-05",
      title: "Configuration & Security Control Validation",
      category: "network",
      icon: CheckCircle2,
      desc: "Validating firewall rulesets, SIEM detection responsiveness, EDR containment speed, and Intrusion Prevention System (IPS) rules."
    },
    {
      code: "PT-RETEST-01",
      title: "Post-Remediation Verification Testing",
      category: "apps",
      icon: RefreshCw,
      desc: "Re-testing patched vulnerabilities to confirm complete closure of exploited vectors and issuing certified compliance statements."
    }
  ];

  // 5-Stage Pen Testing Process
  const testingSteps = [
    {
      step: "01",
      title: "Reconnaissance & Scope Baseline",
      desc: "OSINT gathering, defining rules of engagement (RoE), target IP range mapping, and establishing non-disruptive testing windows.",
      tag: "ROE DEFINITION"
    },
    {
      step: "02",
      title: "Vulnerability Identification",
      desc: "Automated scanning combined with deep manual analysis to isolate exploitable security flaws and misconfigurations.",
      tag: "DEEP RECON"
    },
    {
      step: "03",
      title: "Controlled Exploitation",
      desc: "Executing ethical exploits, chaining vulnerability vectors, demonstrating proof of concept (PoC), and evaluating business risk.",
      tag: "ETHICAL EXPLOIT"
    },
    {
      step: "04",
      title: "Risk Scoring & Report Delivery",
      desc: "Delivering executive summaries, technical PoC documentation, CVSS severity ratings, and prioritized remediation guidance.",
      tag: "POC REPORTING"
    },
    {
      step: "05",
      title: "Post-Remediation Re-Testing",
      desc: "Re-verifying patched vulnerabilities to validate complete vector closure and issuing final penetration test certification.",
      tag: "RE-TEST AUDIT"
    }
  ];

  // Why Choose Us Pillars (5 Pillars)
  const pillars = [
    {
      title: "Real-World Attack Simulation",
      desc: "Our penetration tests replicate the tactics, techniques, and procedures used by real-world attackers to accurately assess your organization's security posture.",
      icon: Terminal,
      node: "01 // ATT&CK ALIGNED"
    },
    {
      title: "Experienced Ethical Hackers",
      desc: "Our cybersecurity professionals possess expertise in ethical hacking, penetration testing, digital forensics, and threat assessment across diverse technology environments.",
      icon: ShieldCheck,
      node: "02 // CERTIFIED PENTESTERS"
    },
    {
      title: "Comprehensive Security Testing",
      desc: "We evaluate networks, applications, cloud infrastructure, wireless environments, and endpoint devices to provide a complete view of your organization's security risks.",
      icon: Zap,
      node: "03 // FULL COVERAGE"
    },
    {
      title: "Actionable and Risk-Based Reporting",
      desc: "Beyond identifying vulnerabilities, we prioritize risks based on business impact and provide practical recommendations to strengthen your security controls.",
      icon: RefreshCw,
      node: "04 // CVSS PRIORITIZED"
    },
    {
      title: "Confidential and Professional",
      desc: "Every engagement is conducted with strict confidentiality, professionalism, and adherence to internationally recognized security testing standards.",
      icon: Lock,
      node: "05 // STRICT NDA"
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
            alt="Penetration Testing Background"
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
              <span className="text-[#00d4ff] font-bold">Penetration Testing</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-[#00d4ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span>SERVICE CODE: SRV-PT-03</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs font-bold text-[#00d4ff] uppercase tracking-widest backdrop-blur-md">
                <Terminal className="w-4 h-4 text-[#00d4ff]" /> OFFENSIVE SECURITY & PENETRATION TESTING
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Penetration <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Testing Services</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                As cyber threats become more sophisticated, organizations must go beyond identifying vulnerabilities and actively test their security defenses against real-world attack scenarios. Penetration Testing (Pen Testing) is a controlled and authorized security assessment that simulates cyberattacks to evaluate the effectiveness of an organization&apos;s security controls, identify exploitable vulnerabilities, and measure its resilience against potential threats. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we provide professional Penetration Testing Services to help organizations proactively identify security weaknesses before they can be exploited by malicious actors.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0055FF] via-[#0044CC] to-[#00d4ff] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-[#00d4ff]/40"
                >
                  <Crosshair className="w-4 h-4 text-sky-200" />
                  <span>Schedule Penetration Test</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#pentest-services"
                  className="px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-[#00d4ff]/40 transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-[#00d4ff]" />
                  <span>Explore Testing Modules</span>
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
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">OFFENSIVE SECURITY HUB</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase">
                    MITRE ATT&CK ALIGNED
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Terminal className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Certified Ethical Hackers</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Offensive security specialists simulating advanced TTP attack vectors.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Zap className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Controlled Exploitation</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Proof-of-concept vulnerability validation with zero operational downtime.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <RefreshCw className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Free Re-Testing Guarantee</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Post-remediation scan verification and compliance validation statement.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                    <Lock className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Protected Rules of Engagement</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Strict Non-Disclosure Agreements and defined testing parameters.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#consultation-form"
                  className="w-full py-3.5 rounded-xl bg-slate-900 border border-cyan-900/60 hover:border-[#00d4ff] text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Crosshair className="w-4 h-4 text-[#00d4ff]" />
                  <span>Reserve Pen Test Window</span>
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CORE PENETRATION TESTING SERVICES */}
      {/* ========================================================================= */}
      <section id="pentest-services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              OFFENSIVE SECURITY MATRIX
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Comprehensive Pen Testing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Simulating real-world attacks across external networks, internal Active Directory, web apps, mobile apps, wireless, cloud, and social engineering.
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
                onClick={() => setActiveCategory("network")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "network"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Network & Endpoints
              </button>
              <button
                onClick={() => setActiveCategory("apps")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "apps"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Apps, APIs & Cloud
              </button>
              <button
                onClick={() => setActiveCategory("social")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  activeCategory === "social"
                    ? "bg-[#00d4ff] text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                Social Engineering & AD
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
                  <span>Request Pen Test</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00d4ff]" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5-STAGE PEN TESTING WORKFLOW */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/60 border-y border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00d4ff]/30">
              Ethical Hacking Protocol
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our Penetration Testing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Workflow</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A 5-stage controlled exploitation methodology guaranteeing zero operational downtime and clear PoC findings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {testingSteps.map((step, idx) => (
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
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Pen Testing</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Real-world attack simulations, certified offensive security specialists, and actionable risk remediation.
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
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" /> Confidential Assessment Inquiry
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Schedule Penetration Test
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Define your target scope, network boundaries, and scheduling preferences with our offensive security leads.
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
                <h3 className="text-2xl font-bold text-white">Pen Test Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Skyline. Our offensive security team will review your target parameters under strict Non-Disclosure Agreements.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Submit Another Inquiry
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
                      placeholder="e.g. K. V. Salunkhe / CISO"
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
                      placeholder="e.g. security@company.com"
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
                      <option value="Financial Institution">Bank / FinTech Institution</option>
                      <option value="Government Entity">Government / Public Sector</option>
                      <option value="Healthcare & E-Commerce">Healthcare & E-Commerce</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Pen Test Target
                  </label>
                  <select
                    value={formData.testingType}
                    onChange={(e) => setFormData({ ...formData, testingType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Full Web & Infrastructure Pen Test">Full Web & Infrastructure Pen Test</option>
                    <option value="External & Internal Network Pen Test">External & Internal Network Pen Test</option>
                    <option value="Web & Mobile Application Pen Test">Web & Mobile Application Pen Test</option>
                    <option value="API & Cloud Security Pen Test">API & Cloud Security Pen Test</option>
                    <option value="Active Directory Security Assessment">Active Directory Security Assessment</option>
                    <option value="Social Engineering Campaign">Social Engineering & Spear Phishing Test</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Target Scope & Testing Window Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on target IP count, web app URLs, API endpoints, preferred execution windows, or compliance goals..."
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
                    <span>Processing Pen Test Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Confidential Pen Test Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Rules of engagement and target scope disclosures are protected under strict Non-Disclosure Agreements.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
