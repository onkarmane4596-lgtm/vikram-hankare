"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Globe, Rocket, Camera, Newspaper, HelpCircle, Shield, Building,
  CheckCircle2, ArrowRight, ChevronRight, Layers, Sparkles, Plus, Minus,
  ExternalLink, Tv, Award, Users, BookOpen
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

export default function EcosystemMediaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What programs and certifications does Skyline Centre of Excellence offer?",
      a: "Skyline offers EC-Council globally accredited certifications including CEH v13 (Certified Ethical Hacker), CHFI (Computer Hacking Forensic Investigator), CND (Certified Network Defender), CSA (Certified SOC Analyst), and specialized vocational core tracks in Linux for Cybersecurity and Forensic Document Examination."
    },
    {
      q: "Are the practical training labs hands-on?",
      a: "Yes! 100% of our practical modules are conducted in state-of-the-art live laboratory environments, equipped with FTK Imager, Autopsy, Volatility Framework, Wireshark, Nmap, Metasploit, and isolated cyber-attack simulation ranges."
    },
    {
      q: "Who is eligible to enroll in cyber security and digital forensics programs?",
      a: "Our programs cater to IT aspirants, computer science students, engineering graduates, working IT/security professionals, law enforcement officers, forensic students, and legal advisors. Foundation tracks are available for complete beginners."
    },
    {
      q: "Does Skyline provide placement assistance after course completion?",
      a: "Yes! We provide dedicated 100% career placement support, including resume crafting, mock security interviews, corporate hiring campus drives, and direct referrals to our network of hiring enterprise partners."
    },
    {
      q: "Can organizations engage Skyline for corporate VAPT and forensic audit services?",
      a: "Absolutely. Skyline provides professional consultancy services including Vulnerability Assessment & Penetration Testing (VAPT), Digital Incident Response, Forensic Audits, and Expert Witness Courtroom Testimony."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden">
      {/* HERO HEADER SECTION */}
      <section className="relative w-full flex items-center justify-center pt-32 sm:pt-40 pb-12 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/hero/hero1.png"
            alt="Ecosystem and Media Backdrop"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-25 mix-blend-luminosity object-center"
          />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.3)_0%,_#020617_95%)]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-slate-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.15)]"
          >
            <Globe className="w-4 h-4 text-sky-400" />
            <span>Outreach, Media & Strategic Horizons</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-tight text-white"
          >
            Ecosystem & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]">Media</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Discover the sectors we empower, future technology initiatives, media gallery highlights, milestone news, research projects, internships, and FAQs.
          </motion.p>
        </div>
      </section>

      {/* STICKY QUICK JUMP NAVIGATION BAR (Hidden on Mobile) */}
      <div className="hidden md:block sticky top-20 z-30 bg-slate-950/85 backdrop-blur-2xl border-y border-slate-800/80 py-3 mb-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar flex items-center justify-start md:justify-center gap-2 sm:gap-3">
          {[
            { id: "industries", label: "01. Industries", icon: Building },
            { id: "initiatives", label: "02. Initiatives", icon: Rocket },
            { id: "gallery", label: "03. Gallery", icon: Camera },
            { id: "news", label: "04. News & Events", icon: Newspaper },
            { id: "research", label: "05. Research", icon: BookOpen },
            { id: "internships", label: "06. Internships", icon: Award },
            { id: "faqs", label: "07. FAQs", icon: HelpCircle }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-[#38BDF8] text-xs font-semibold text-slate-300 hover:text-white transition-all whitespace-nowrap shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              >
                <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* SECTION 1: INDUSTRIES WE SERVE (ID: industries) */}
        {/* ========================================================================= */}
        <section id="industries" className="py-16 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Building className="w-3.5 h-3.5" /> 01 • Industries We Serve
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">We Serve</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Delivering specialized training, forensic support, and security audits across critical industry sectors.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Law Enforcement & Defense", desc: "Digital forensic investigation support, cyber crime cell training, evidence acquisition, and mobile data recovery.", tag: "GOVERNMENT", icon: Shield },
              { title: "Banking, Financial & Insurance", desc: "Fraud investigation, SOC operations training, PCI-DSS compliance audits, and financial crime digital forensics.", tag: "BFSI SECTOR", icon: Award },
              { title: "Corporate IT & Enterprise Tech", desc: "Corporate Red Team penetration testing, Vulnerability Assessment (VAPT), and employee cyber awareness training.", tag: "ENTERPRISE IT", icon: Globe },
              { title: "Healthcare & Pharmaceuticals", desc: "Medical device security assessment, patient record privacy protection (HIPAA), and ransomware defense.", tag: "HEALTHCARE", icon: Users },
              { title: "Higher Education & Academics", desc: "Faculty Development Programs (FDP), university cyber curriculum integration, and joint research labs.", tag: "ACADEMICS", icon: BookOpen },
              { title: "Critical Infrastructure & Power Grids", desc: "ICS/SCADA cybersecurity hardening, industrial network defense, and operational technology (OT) monitoring.", tag: "INFRASTRUCTURE", icon: Layers }
            ].map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800 hover:border-[#38BDF8]/60 p-6 rounded-3xl backdrop-blur-sm transition-all duration-300 shadow-xl group hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/20 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 text-[#38BDF8] border border-slate-800">
                        {ind.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">{ind.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{ind.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#38BDF8]">
                    <span>Sector Solutions</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: FUTURE INITIATIVES (ID: initiatives) */}
        {/* ========================================================================= */}
        <section id="initiatives" className="py-20 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Rocket className="w-3.5 h-3.5" /> 02 • Future Initiatives
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Initiatives</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Our strategic roadmap for advancing technology, research, and national cyber resilience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 bg-slate-900/60 border border-slate-800 hover:border-[#38BDF8]/50 p-8 sm:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0055FF]/10 text-[#38BDF8] text-xs font-mono font-bold mb-4 border border-[#38BDF8]/30">
                STRATEGIC HORIZONS
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Flagship Future Projects</h3>
              
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  "Cyber Innovation Hub",
                  "AI Security Research Centre",
                  "Cyber Threat Intelligence Unit",
                  "Digital Investigation Support Cell",
                  "Industry Collaboration Centre",
                  "National Cyber Awareness Mission",
                  "Cyber Security Startup Incubation Program"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/90 text-slate-300 text-xs sm:text-sm font-mono italic">
                &quot;Empowering Cyber Defenders. Advancing Digital Trust. Securing the Future.&quot;
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 flex flex-col justify-center space-y-6 p-8 rounded-3xl bg-gradient-to-br from-[#0055FF]/15 via-slate-900 to-slate-950 border border-[#38BDF8]/30 shadow-2xl">
              <div className="p-3 rounded-2xl bg-[#0055FF]/20 border border-[#38BDF8]/40 text-[#38BDF8] w-fit">
                <Rocket className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-white leading-snug">
                Driving National Technological Self-Reliance in Cyber Security
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Our future roadmap focuses on building proprietary threat intelligence platforms, fostering startup incubation for young cyber entrepreneurs, and establishing specialized AI security labs.
              </p>

              <div className="pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0055FF] to-[#38BDF8] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all"
                >
                  <span>Join The Movement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: GALLERY SHOWCASE (ID: gallery) */}
        {/* ========================================================================= */}
        <section id="gallery" className="py-20 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <Camera className="w-4 h-4 text-[#38BDF8]" /> 03 • Photo & Video Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Watch <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">In Action</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Explore key ceremony highlights, campus tree plantation drives, lab infrastructure tours, and institutional video features.
            </p>
          </motion.div>

          {/* 1. FEATURED FULL LANDSCAPE VIDEO (Inauguration Event) */}
          <div className="mb-12">
            <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-[#38BDF8]/50 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* 16:9 Widescreen Embedded Frame */}
                <div className="w-full lg:w-3/5 aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_0_30px_rgba(0,85,255,0.2)]">
                  <iframe
                    src="https://www.youtube.com/embed/ZBoz5SnQ5mg"
                    title="Grand Inauguration Ceremony — Skyline Centre of Excellence"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Video Info Container */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0055FF]/10 border border-[#0055FF]/30 text-[#38BDF8] text-xs font-mono font-bold uppercase tracking-wider mb-4 w-fit">
                    <Tv className="w-3.5 h-3.5" /> Featured Launch Event
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                    Grand Inauguration Ceremony — Skyline CoE
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Watch the official inauguration highlights of Skyline Centre of Excellence in Cyber Security & Digital Forensics, featuring keynote addresses by law enforcement leadership and founding experts.
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://youtu.be/ZBoz5SnQ5mg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0055FF] to-[#38BDF8] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]"
                    >
                      <Tv className="w-4 h-4" /> Watch Video Feature
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. INSTITUTION HIGHLIGHTS VIDEO GRID (3 Vertical Video Cards) */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#38BDF8]" /> Institutional Video Highlights
              </h3>
              <span className="text-xs text-slate-400 font-mono">Video Showcase</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "DDWimZpLl7Q",
                  url: "https://youtube.com/shorts/DDWimZpLl7Q?si=M_TzYwTtrVmW_ZBG",
                  title: "Skyline Centre of Excellence — Official Highlights",
                  tag: "CAMPUS HIGHLIGHT",
                  category: "Campus Life"
                },
                {
                  id: "hHsC3fKlBZ8",
                  url: "https://youtube.com/shorts/hHsC3fKlBZ8?feature=share",
                  title: "Skyline Sankalp 100 — Tree Plantation Drive Video",
                  tag: "GREEN INITIATIVE",
                  category: "Environment"
                },
                {
                  id: "ibAHgq8OM60",
                  url: "https://youtube.com/shorts/ibAHgq8OM60?feature=share",
                  title: "High-Tech Cyber Security & Forensics Lab Tour",
                  tag: "LAB INFRASTRUCTURE",
                  category: "Lab Tour"
                }
              ].map((videoItem, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-slate-900/80 border border-slate-800 hover:border-[#38BDF8]/60 p-4 rounded-3xl backdrop-blur-xl transition-all duration-300 shadow-xl group hover:-translate-y-1 flex flex-col justify-between"
                >
                  {/* Vertical Video Frame Container */}
                  <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 mb-4 border border-slate-800 group-hover:border-[#38BDF8]/40 shadow-inner">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoItem.id}`}
                      title={videoItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-[#38BDF8] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#0055FF]/20 border border-[#0055FF]/40">
                        {videoItem.category}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        {videoItem.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-3 leading-snug">
                      {videoItem.title}
                    </h4>

                    <a
                      href={videoItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8] hover:text-white transition-colors"
                    >
                      <span>Watch Full Video</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/company/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-extrabold text-xs uppercase tracking-widest hover:border-[#38BDF8] hover:bg-[#0055FF]/10 transition-all shadow-lg"
            >
              <span>Explore Complete Photo & Video Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: NEWS & EVENTS (ID: news) */}
        {/* ========================================================================= */}
        <section id="news" className="py-20 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Newspaper className="w-3.5 h-3.5" /> 04 • News & Events
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Events</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Key institution announcements, environmental drives, and official launch events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                date: "Institutional Drive",
                title: "Tree Plantation Event — Skyline Sankalp 100",
                desc: "Skyline Centre of Excellence organized the 'Sankalp 100' Tree Plantation Event, planting 100 native trees across the campus to promote environmental sustainability alongside technological excellence.",
                tag: "ENVIRONMENT DRIVE",
                img: "/gallery/8.jpeg"
              },
              {
                date: "Grand Ceremony",
                title: "Inauguration Event — Official Launch of Skyline CoE",
                desc: "The grand inauguration event of Skyline Centre of Excellence in Cyber Security & Digital Forensics, attended by senior law enforcement representatives, academic leaders, and industry veterans.",
                tag: "GRAND INAUGURATION",
                img: "/gallery/1.jpeg"
              }
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-slate-900/70 border border-slate-800 hover:border-[#38BDF8]/50 p-8 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-800">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono text-[#38BDF8] font-bold uppercase tracking-widest">{event.date}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">{event.tag}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors leading-snug">{event.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{event.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#38BDF8]">
                  <span>View Event Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: RESEARCH PROJECTS (ID: research) */}
        {/* ========================================================================= */}
        <section id="research" className="py-20 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <BookOpen className="w-3.5 h-3.5" /> 05 • Research Projects
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Pioneering applied research in threat intelligence, RAM memory forensics, and automated document analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "AI-Powered Malware Threat Intelligence & Anomaly Classification",
                domain: "Machine Learning & Cyber Defense",
                desc: "Developing machine learning models to detect zero-day polymorphic malware strains through behavioral dynamic analysis.",
                status: "Active R&D"
              },
              {
                title: "Automated Volatile Memory (RAM) Evidence Extraction Framework",
                domain: "Digital Forensics & Incident Response",
                desc: "Building lightweight forensic tools for volatile memory artifact parsing during active breach containment.",
                status: "Published Paper"
              },
              {
                title: "SCADA & Industrial Control System Security Resilience Testing",
                domain: "Operational Technology (OT) Security",
                desc: "Simulating protocol-level attacks on critical infrastructure PLCs to harden defense mechanisms against APT groups.",
                status: "Ongoing Pilot"
              },
              {
                title: "Deep-Learning Document & Handwriting Authentication System",
                domain: "Questioned Document Forensics",
                desc: "Creating high-resolution image analysis algorithms for forgery verification in questioned legal documents.",
                status: "Testing Phase"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-slate-900/60 border border-slate-800 hover:border-[#38BDF8]/40 p-8 rounded-3xl backdrop-blur-sm shadow-lg transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider">{project.domain}</span>
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#0055FF]/20 text-sky-300 border border-[#0055FF]/40">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: INTERNSHIP PROGRAMS (ID: internships) */}
        {/* ========================================================================= */}
        <section id="internships" className="py-20 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Award className="w-3.5 h-3.5" /> 06 • Internship Programs
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Programs</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Gain practical hands-on experience working alongside forensic investigators and cybersecurity engineers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Digital Forensics Internship",
                duration: "3 to 6 Months",
                desc: "Hands-on exposure to evidence acquisition, hard drive cloning, mobile forensics, and report writing.",
                badge: "Forensics Track"
              },
              {
                title: "SOC Analyst Traineeship",
                duration: "6 Months",
                desc: "Real-time SIEM log monitoring, incident detection, threat hunting, and firewall configuration labs.",
                badge: "SOC Operations"
              },
              {
                title: "Ethical Hacking & VAPT Internship",
                duration: "3 to 6 Months",
                desc: "Penetration testing, web application security auditing, vulnerability scanning, and remediation guidance.",
                badge: "Offensive Security"
              }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-slate-900/70 border border-slate-800 hover:border-[#38BDF8]/50 p-8 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded bg-slate-950 text-[#38BDF8] border border-slate-800">
                      {program.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-semibold">{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{program.desc}</p>
                </div>
                <Link
                  href="/placement"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors"
                >
                  <span>Learn More & Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (ID: faqs) */}
        {/* ========================================================================= */}
        <section id="faqs" className="py-20 border-t border-slate-800/80 scroll-mt-36 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <HelpCircle className="w-3.5 h-3.5" /> 07 • Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Questions</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Got questions? Answers to queries on gallery videos, events, research, internships, and admissions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              ...faqs,
              {
                q: "Where can I view the Tree Plantation, Inauguration, and Infrastructure videos?",
                a: "You can view full videos for the Tree Plantation drive, Inauguration ceremony, and high-tech Infrastructure lab tour directly in our Media Gallery section and YouTube channel."
              },
              {
                q: "How can students apply for Skyline's Internship Programs?",
                a: "Students can apply through our Placement & Career Support portal or submit an application during campus drive notifications. Selection is based on foundational technical screening."
              },
              {
                q: "Can academic institutions collaborate with Skyline on Research Projects?",
                a: "Yes! Skyline collaborates with universities, government bodies, and R&D partners on joint research in threat intelligence, RAM forensics, and OT security."
              }
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-slate-900/80 border border-slate-800 hover:border-[#38BDF8]/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all shadow-md"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-white text-base sm:text-lg flex items-center gap-3">
                      <span className="text-[#38BDF8] font-mono text-sm font-extrabold">0{idx + 1}.</span>
                      {faq.q}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-800 text-[#38BDF8] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 font-normal">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
