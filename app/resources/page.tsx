"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  BookOpen, FileText, Video, Server, GraduationCap, ShieldCheck, Download,
  ExternalLink, ArrowRight, Sparkles, Calendar, TrendingUp, Layers, Search,
  Bookmark, Clock, Shield, CheckCircle2, Cpu, Globe, Lock, Users, Zap, HelpCircle
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);

  const handleDownload = (itemTitle: string) => {
    setDownloadedItem(itemTitle);
    setTimeout(() => {
      setDownloadedItem(null);
    }, 2500);
  };

  const researchPapers = [
    {
      title: "Memory Analysis & Volatile Data Acquisition in Ransomware Investigations",
      type: "Research Paper",
      date: "Jan 2026",
      desc: "Comprehensive study on acquiring volatile RAM artefacts from compromised enterprise systems without triggering anti-forensic triggers.",
      downloads: "1.4k Downloads",
      tag: "Memory Forensics"
    },
    {
      title: "Deepfake Voice Authentication & Forensic Audio Analysis Frameworks",
      type: "Technical Report",
      date: "Dec 2025",
      desc: "Algorithmic methodology for identifying synthetic voice clones, spectral anomalies, and tampered audio recordings presented as evidence.",
      downloads: "2.1k Downloads",
      tag: "Audio Forensics"
    },
    {
      title: "Cryptographic Verification & Tamper Detection in Document Examination",
      type: "Case Study",
      date: "Nov 2025",
      desc: "Forensic protocol for verifying questioned physical & electronic documents using multi-spectral imaging and cryptographic hashing.",
      downloads: "980 Downloads",
      tag: "Document Forensics"
    }
  ];

  const learningItems = [
    {
      title: "Digital Forensic Toolbox Guide",
      category: "Toolkits",
      icon: Server,
      desc: "Curated toolkit featuring FTK Imager, Autopsy, Volatility 3, and Wireshark cheat sheets for rapid investigation triage.",
      badge: "Free Download"
    },
    {
      title: "Memory & Network Analysis Tutorials",
      category: "Tutorials",
      icon: Video,
      desc: "Step-by-step practical guides on PCAP analysis, malware reverse engineering, and threat hunting in Windows environments.",
      badge: "Video Guides"
    },
    {
      title: "Cyber Security Practical Manuals",
      category: "Study Materials",
      icon: FileText,
      desc: "Handbook covering network defense, web application vulnerability testing (OWASP Top 10), and cloud security controls.",
      badge: "Lab Manual"
    }
  ];

  const awarenessChecklists = [
    { title: "Personal Digital Security Checklist", category: "General Public", desc: "Essential steps to secure mobile devices, email accounts, and personal financial apps." },
    { title: "Corporate Phishing & Email Defense Guide", category: "Enterprises", desc: "Protocol for recognizing spear-phishing, spoofed headers, and suspicious file attachments." },
    { title: "Secure Password Hygiene & MFA Standards", category: "Authentication", desc: "Best practices for passkeys, multi-factor authentication, and password manager deployment." },
    { title: "Wi-Fi & Remote Work Hardening Manual", category: "Remote Work", desc: "Security checklist for remote employees, VPN usage, and encrypted home router configuration." },
    { title: "Social Engineering Attack Mitigation", category: "Human Defense", desc: "Guide to recognizing pretexting, impersonation calls, and honeytrap schemes." },
    { title: "Mobile Forensic Security Hardening", category: "Mobile Safety", desc: "Hardening Android and iOS devices against rogue spyware, unauthorized access, and data leaks." }
  ];

  const upcomingEvents = [
    {
      title: "Masterclass: Practical Memory Forensics & Triage",
      date: "Feb 18, 2026",
      time: "4:00 PM IST",
      type: "Webinar",
      speaker: "Skyline Senior Forensic Analyst",
      status: "Registration Open"
    },
    {
      title: "National Webinar: AI & Deepfakes in Digital Forensics",
      date: "Mar 05, 2026",
      time: "2:30 PM IST",
      type: "National Seminar",
      speaker: "Cyber Law & Audio Experts",
      status: "Upcoming"
    },
    {
      title: "Hands-on Workshop: Network Threat Hunting & PCAP Analysis",
      date: "Mar 22, 2026",
      time: "10:00 AM IST",
      type: "Interactive Workshop",
      speaker: "Skyline Incident Response Team",
      status: "Early Bird"
    }
  ];

  const industryInsights = [
    {
      title: "Zero-Day Threat Matrix: Q1 2026 Forensic Outlook",
      category: "Threat Intelligence",
      date: "Jan 28, 2026",
      desc: "Analysis of emerging ransomware variants targeting critical infrastructure, cloud instances, and supply chain dependencies."
    },
    {
      title: "Sec 65B Electronic Evidence Certification Updates",
      category: "Legal & Compliance",
      date: "Jan 15, 2026",
      desc: "Key judicial precedent updates regarding electronic evidence admissibility, chain of custody logs, and expert witness affidavits."
    },
    {
      title: "ICS/SCADA Industrial Security Benchmark 2026",
      category: "Industrial Cyber",
      date: "Dec 30, 2025",
      desc: "Technical framework for securing OT networks, PLC controllers, and SCADA monitoring systems against cyber sabotage."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden pt-28 sm:pt-36 pb-32">
      {/* BACKGROUND ELEMENTS & HERO GLOW */}
      <div className="absolute top-0 left-0 right-0 h-[700px] z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero/hero1.png"
          alt="Resources Hero Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.3)_0%,_#020617_95%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
      </div>

      <div className="fixed top-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-[#38BDF8]/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#0055FF]/5 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION & QUICK JUMP NAVIGATION */}
        {/* ========================================================================= */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-slate-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.15)] mb-6"
          >
            <BookOpen className="w-4 h-4 text-[#38BDF8]" />
            <span>Knowledge Repository & Research Hub</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Knowledge & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Cyber Resources</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Empowering cybersecurity professionals, researchers, students, and organizations with cutting-edge publications, practical toolkits, threat intelligence, and awareness programs.
          </motion.p>

          {/* QUICK JUMP LINKS */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { name: "Research Publications", href: "#research-publications", icon: GraduationCap },
              { name: "Learning Resources", href: "#learning-resources", icon: Layers },
              { name: "Cyber Awareness Portal", href: "#cyber-awareness", icon: ShieldCheck },
              { name: "Events & Workshops", href: "#events-workshops", icon: Calendar },
              { name: "Industry Insights", href: "#industry-insights", icon: TrendingUp }
            ].map((link, idx) => {
              const IconComp = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#38BDF8]/50 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center gap-2 group shadow-md"
                >
                  <IconComp className="w-3.5 h-3.5 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* DOWNLOAD NOTIFICATION BADGE */}
        <AnimatePresence>
          {downloadedItem && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 right-6 z-50 bg-[#0055FF] border border-[#38BDF8] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-white" />
              <div className="text-xs">
                <p className="font-bold">Resource Download Initiated</p>
                <p className="text-slate-200 text-[11px]">{downloadedItem}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* 2. RESEARCH PUBLICATIONS SECTION (ID: research-publications) */}
        {/* ========================================================================= */}
        <section id="research-publications" className="py-16 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
                  <GraduationCap className="w-3.5 h-3.5" /> Academic & Industry Papers
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Publications</span>
                </h2>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed">
                Access to peer-reviewed research papers, technical reports, articles, case studies, and forensic investigation methodologies.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchPapers.map((paper, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 p-6 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-[#0055FF]/10 text-[#38BDF8] border border-[#38BDF8]/30 uppercase">
                      {paper.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{paper.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                    {paper.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px] font-medium">{paper.downloads}</span>
                  <button
                    onClick={() => handleDownload(paper.title)}
                    className="inline-flex items-center gap-1.5 text-[#38BDF8] font-bold hover:text-white transition-colors"
                  >
                    <span>Download PDF</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 3. LEARNING RESOURCES SECTION (ID: learning-resources) */}
        {/* ========================================================================= */}
        <section id="learning-resources" className="py-16 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
                  <Layers className="w-3.5 h-3.5" /> Educational Toolkits & Manuals
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Resources</span>
                </h2>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed">
                Study materials, practical lab tutorials, step-by-step investigation guides, and curated cybersecurity toolkits for students and professionals.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningItems.map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 p-8 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="p-3.5 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 text-[#38BDF8] border border-slate-800">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDownload(item.title)}
                    className="w-full py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-[#38BDF8] text-xs font-bold text-white transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Access Resource Material</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CYBER AWARENESS PORTAL SECTION (ID: cyber-awareness) */}
        {/* ========================================================================= */}
        <section id="cyber-awareness" className="py-16 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Public Safety & Defense
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Cyber Awareness <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Portal</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Empowering individuals, students, and organizations with free, actionable security checklists, awareness guides, and digital safety practices.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {awarenessChecklists.map((chk, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {chk.category}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">{chk.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{chk.desc}</p>
                </div>

                <button
                  onClick={() => handleDownload(chk.title)}
                  className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#38BDF8] hover:text-white transition-colors"
                >
                  <span>Download Free Guide</span>
                  <Download className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 5. EVENTS & WORKSHOPS SECTION (ID: events-workshops) */}
        {/* ========================================================================= */}
        <section id="events-workshops" className="py-16 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
                  <Calendar className="w-3.5 h-3.5" /> Seminars & Professional Development
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Workshops</span>
                </h2>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed">
                Upcoming seminars, webinars, academic conferences, faculty development programs, and practical hands-on workshops.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 p-6 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-[#0055FF]/10 text-[#38BDF8] border border-[#38BDF8]/30 uppercase">
                      {evt.type}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      {evt.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{evt.date} • {evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Speaker: {evt.speaker}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/workshops"
                  className="w-full py-3 rounded-xl bg-[#0055FF] hover:bg-[#0044CC] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,85,255,0.3)]"
                >
                  <span>View Details & Register</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 6. INDUSTRY INSIGHTS SECTION (ID: industry-insights) */}
        {/* ========================================================================= */}
        <section id="industry-insights" className="py-16 border-t border-slate-800/80 scroll-mt-28 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
                  <TrendingUp className="w-3.5 h-3.5" /> Trends & Intelligence
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Insights</span>
                </h2>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed">
                Latest cybersecurity trends, threat intelligence updates, regulatory compliance analysis, and technology developments.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryInsights.map((insight, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 p-6 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-slate-950 text-[#38BDF8] border border-slate-800 uppercase">
                      {insight.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{insight.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {insight.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                    {insight.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#38BDF8]">
                  <span>Read Insight Bulletin</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </main>
  );
}
