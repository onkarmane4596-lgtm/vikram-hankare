"use client";

import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Shield, Terminal, CheckCircle2, ChevronRight, Play,
  Award, Laptop, IndianRupee, BookOpen, Star, Quote, Code,
  Lock, Database, Network, Users, Target, Zap, Activity, Cpu,
  Server, Cloud, Search, Briefcase, ChevronDown, Download, Send, PenTool,
  Key, Scan, Unlock, Globe, Box, Wifi, ArrowUpRight
} from 'lucide-react';
import { ThreatMap } from "@/components/premium/threat-map";
import { useRef, useState, useEffect } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Data
const featuredPrograms = [
  { title: "Certified Ethical Hacker (CEHv13)", target: "Core Offensive Security", desc: "Take the next step toward a rewarding career. Designed to build your skills, boost your confidence, and help you secure tomorrow in a fully equipped digital lab environment.", certs: ["Industry-Recognized Certification", "Hands-on Lab Experience", "Expert-Led Training", "Affordable Education"], icon: Terminal, color: "from-[#0055FF]/20 to-[#60A5FA]/20", borderColor: "group-hover:border-[#0055FF]/50" },
  { title: "Computer Hacking Forensic Investigator", target: "Digital Forensics", desc: "Master the art of digital investigations. Identify, collect, preserve, analyze, and present digital evidence while following industry-standard forensic procedures.", certs: ["Industry-Recognized Certification", "Hands-on Lab Experience", "Expert-Led Training", "Job-Ready Skills"], icon: Search, color: "from-[#0033AA]/20 to-[#0055FF]/20", borderColor: "group-hover:border-[#0055FF]/40" },
];

const roadmapSteps = [
  { step: "01", title: "Networking Basics", desc: "Build a strong foundation in networking concepts.", icon: Network },
  { step: "02", title: "Essentials of Linux", desc: "Learn Linux fundamentals, commands and system administration.", icon: Terminal },
  { step: "03", title: "CEH", desc: "Understand ethical hacking methodologies and attack techniques.", icon: Shield },
  { step: "04", title: "Project", desc: "Apply your skills in a real-world project and build your portfolio.", icon: Code },
  { step: "05", title: "Master Certificate", desc: "Earn your Master Certificate and validate your expertise.", icon: Award },
  { step: "06", title: "CSA, CHFI or CPENT", desc: "Choose your path and specialize with an industry-recognized certification.", icon: Target },
  { step: "07", title: "CCISO", desc: "Reach the pinnacle with CCISO and lead with confidence.", icon: Lock }
];

const toolsLearned = [
  { name: "Nmap", role: "Network scanning and discovery", icon: Search },
  { name: "Burpsuite", role: "Web app security testing", icon: Zap },
  { name: "Nessus", role: "Vulnerability scanning", icon: Target },
  { name: "Wireshark", role: "Network protocol analyzer", icon: Activity },
  { name: "Zenmap", role: "Nmap graphical interface", icon: Search },
  { name: "Hashcat", role: "Advanced password recovery", icon: Key },
  { name: "THC-Hydra", role: "Network login cracking", icon: Cpu },
  { name: "Metasploit", role: "Exploitation framework", icon: Shield },
  { name: "OpenVAS", role: "Vulnerability management", icon: Server },
  { name: "Nikto", role: "Web server scanner", icon: Scan },
  { name: "John the Ripper", role: "Password cracking tool", icon: Unlock },
  { name: "OWASP Zap", role: "Web application proxy", icon: Globe },
  { name: "Ettercap", role: "Network sniffing", icon: Network },
  { name: "SET", role: "Social engineering framework", icon: Users },
  { name: "Docker", role: "Containerization", icon: Box },
  { name: "Maltego", role: "OSINT and link analysis", icon: Activity },
  { name: "Aircrack-ng", role: "Wireless network security", icon: Wifi },
  { name: "SQL Map", role: "Automated SQL injection", icon: Database }
];

const partners = ["EC-Council", "CompTIA", "Cisco", "OffSec", "Palo Alto", "Fortinet"];

export default function HomePage() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress: roadmapScroll } = useScroll({ 
    target: roadmapRef, 
    offset: ["start start", "end end"] 
  });

  const smoothProgress = useSpring(roadmapScroll, { damping: 25, stiffness: 120, mass: 0.1 });
  const roadmapX = useTransform(smoothProgress, [0, 1], [0, -trackWidth]);
  const laserWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const [formState, setFormState] = useState({ name: '', email: '', phone: '', program: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-brand-blue/30 selection:text-white relative">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712] pt-20 pb-16">
        {/* Seamless Luxury Executive Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/hero/hero-seamless.png"
            alt="Seamless Executive Cybersecurity Backdrop"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 object-center"
          />
          {/* Soft Balanced Ambient Overlay */}
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(3,7,18,0.2)_0%,_#030712_85%)]"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60"></div>
          {/* Soft Central Blue Ambient Glow Spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-sky-500/10 via-blue-600/10 to-transparent blur-[140px] pointer-events-none"></div>
        </div>

        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-20 max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center px-4 md:px-8 mt-4 sm:mt-8"
        >
          {/* General Cybersecurity Concept Top Badge Tag */}
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
            <Shield className="w-4 h-4 text-sky-400" />
            <span>Advanced <strong className="text-white font-semibold">Cyber Security & Digital Forensics Academy</strong></span>
          </motion.div>

          {/* Authoritative Academic Headline */}
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.12]">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Where Security Meets
            </span>{" "}
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD] drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
              Intelligence
            </span>
          </motion.h1>

          {/* Academic Subtitle Description */}
          <motion.p variants={fadeUp} className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl font-normal leading-relaxed mx-auto">
            Empowering the next generation of Cyber Security Professionals, Digital Forensic Experts, Ethical Hackers, and Security Leaders through world-class training, research, and industry collaboration.
          </motion.p>

          {/* Live Dynamic Action CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-10">
            {/* Primary Live Action Button */}
            <Link 
              href="https://wa.me/919890424040" 
              target="_blank" 
              className="relative group flex items-center justify-center pl-7 pr-2.5 py-3 rounded-full overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0055FF] border border-[#60A5FA]/60 shadow-[0_0_25px_rgba(59,130,246,0.5),0_0_50px_rgba(56,189,248,0.25)] hover:shadow-[0_0_45px_rgba(56,189,248,0.8)] hover:scale-[1.04] active:scale-[0.97]"
            >
              {/* Dynamic Sweeping Light Beam Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <span className="relative z-10 flex items-center gap-3 text-white tracking-wider font-extrabold text-xs uppercase">
                {/* Live White Pulse Beacon Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span>Start Learning Now</span>
                <div className="p-1.5 rounded-full bg-white flex items-center justify-center text-[#1D4ED8] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-12deg] shadow-md">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </span>
            </Link>

            {/* Secondary Live Glass Action Button */}
            <Link 
              href="/certifications" 
              className="relative group flex items-center justify-center px-7 py-3 rounded-full overflow-hidden transition-all duration-300 bg-slate-900/80 backdrop-blur-2xl border border-slate-700/80 text-slate-200 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:bg-slate-800/90 hover:text-white hover:border-[#38BDF8]/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:scale-[1.04] active:scale-[0.97]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative z-10 font-extrabold tracking-wider text-xs flex items-center gap-2 uppercase">
                <span>Explore Programs</span>
                <ChevronRight className="w-4 h-4 text-[#38BDF8] transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>
          </motion.div>

          {/* Academic Trust Highlights Bar */}
          <motion.div variants={fadeUp} className="w-full max-w-3xl mx-auto pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {[
                { title: "100% Practical Labs", icon: Terminal },
                { title: "EC-Council Partner", icon: Award },
                { title: "Govt Collaborations", icon: Globe },
                { title: "Placement Assistance", icon: Briefcase }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                    <IconComp className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs font-medium text-slate-300">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 2. CORE CAPABILITIES BENTO MATRIX SECTION */}
      <section className="py-20 border-y border-slate-800/80 bg-slate-950/80 backdrop-blur-3xl relative z-20 overflow-hidden">
        {/* Ambient Grid Pattern & Central Blue Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-sky-500/10 via-blue-600/10 to-transparent blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Shield className="w-3.5 h-3.5" /> Core Institutional Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Empowering Digital Security <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#E2E8F0]">
                Across All Fronts
              </span>
            </h2>
          </div>

          {/* Masterpiece Creative Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {[
              { 
                title: "Industry-Oriented Training", 
                badge: "Hands-on Labs", 
                desc: "Real-world cyber simulation labs, malware analysis toolsets, and practical attack/defense exercises.", 
                features: ["SANS & EC-Council Standard", "Live Attack Range"],
                icon: Terminal 
              },
              { 
                title: "Cyber & Forensics Labs", 
                badge: "Hardware & Tools", 
                desc: "Equipped with state-of-the-art digital investigation workstations, write blockers, and forensic suites.", 
                features: ["FTK & EnCase Workstations", "Mobile Forensics Kits"],
                icon: Search 
              },
              { 
                title: "Real-Time Exposure", 
                badge: "Live Cases", 
                desc: "Direct practical exposure to real incident response, breach investigations, and threat hunting cases.", 
                features: ["Active Case Studies", "Incident Handling"],
                icon: Shield 
              },
              { 
                title: "Research & Innovation", 
                badge: "R&D Ecosystem", 
                desc: "Dedicated R&D hub developing next-generation threat intelligence, malware research, and security tooling.", 
                features: ["Threat Intel Research", "Proprietary Tooling"],
                icon: Cpu 
              },
              { 
                title: "Govt & Industry Alliances", badge: "Official Partners", desc: "Strategic partnerships with law enforcement agencies, cyber cells, and corporate enterprise partners.", features: ["Law Enforcement Ties", "Enterprise Alliances"],
                icon: Globe 
              },
              { 
                title: "Career Placement Support", 
                badge: "100% Dedicated", 
                desc: "End-to-end career assistance, resume crafting, mock security interviews, and corporate hiring connections.", 
                features: ["Direct Campus Hiring", "Resume & Interview Prep"],
                icon: Award 
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="relative group overflow-hidden flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-[#38BDF8]/60 backdrop-blur-2xl hover:shadow-[0_15px_40px_rgba(56,189,248,0.25)] hover:-translate-y-1.5 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#38BDF8] before:to-transparent"
                >
                  <div>
                    {/* Top Row: Icon Container & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 via-[#2563EB]/25 to-sky-950 border border-[#38BDF8]/40 text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-slate-950 transition-colors duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/90 text-[#38BDF8] border border-sky-500/30 group-hover:border-sky-400 group-hover:bg-sky-500/20 transition-all">
                        {item.badge}
                      </span>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Feature Tags Row */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {item.features.map((feat, fIdx) => (
                      <span key={fIdx} className="text-[10px] font-medium text-slate-300 px-2.5 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/60">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY / ECOSYSTEM SECTION */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-3xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-sm text-slate-500 font-semibold mb-8 uppercase tracking-widest">Authorized Training Ecosystem</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-1000">
            {partners.map((partner, i) => (
              <div key={i} className="text-xl md:text-2xl font-bold text-white opacity-60 hover:opacity-100 hover:text-brand-blue transition-all duration-300 flex items-center gap-2 cursor-pointer">
                <Network className="w-6 h-6 text-brand-blue" /> {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIRECTOR & FOUNDER MESSAGE */}
      <section className="py-24 md:py-32 relative z-10 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-[#38BDF8] font-mono text-sm tracking-widest uppercase mb-4 block">Guided by Visionaries</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Messages from the <span className="text-slate-500">Founders</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Founder - Electric Blue Side */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="space-y-6">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/5 rotate-180" />
                <p className="text-slate-300 text-lg leading-relaxed relative z-10 pl-6 border-l-2 border-[#38BDF8]/40 italic">
                  "Our objective is to provide affordable, industry-oriented, and internationally recognized training that empowers students, professionals, and aspiring entrepreneurs with practical skills. Our mission extends beyond imparting technical knowledge; we aim to cultivate ethical professionals, responsible digital citizens, and future leaders capable of protecting and strengthening the cyber ecosystem."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  <Users className="w-8 h-8 text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Prof. Vikram K. Hankare</h4>
                  <p className="text-[#38BDF8] text-sm font-medium">Founder</p>
                </div>
              </div>
            </motion.div>

            {/* Director - Metallic Silver Side */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="space-y-6">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/5 rotate-180" />
                <p className="text-slate-300 text-lg leading-relaxed relative z-10 pl-6 border-l-2 border-slate-300/40 italic">
                  "We are committed to nurturing future-ready professionals equipped with the knowledge, skills, and ethical values required to excel in this dynamic field. Our mission is to bridge the gap between academic learning and industry expectations through practical training, innovation, research, and hands-on experience."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-300/10 border border-slate-300/30 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Shield className="w-8 h-8 text-slate-200" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Mrs. Sangeeta R. Chikhale</h4>
                  <p className="text-slate-300 text-sm font-medium">Director</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CYBERSECURITY ROAD MAP (Responsive: Sticky Horizontal on Desktop, Touch-Friendly on Mobile) */}
      
      {/* DESKTOP STICKY HORIZONTAL TRACK (lg:block) */}
      <section ref={roadmapRef} className="hidden lg:block relative h-[280vh] md:h-[320vh] bg-[#020617] border-y border-slate-800/80">

        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full">

          {/* Background Grid & Ambient Glows */}
          <div className="absolute inset-0 bg-[#020617] opacity-10 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[150px] pointer-events-none"></div>

          {/* Fixed Section Header */}
          <div className="absolute top-16 md:top-20 left-0 w-full text-center z-30 pointer-events-none px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/30 text-xs font-bold text-[#38BDF8] tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(56,189,248,0.25)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping"></span> Scroll Slowly to Navigate
            </motion.div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#E2E8F0]">Mastery</span> Timeline
            </h2>
          </div>

          {/* HORIZONTAL SCROLLING TRACK FOR DESKTOP */}
          <motion.div ref={trackRef} style={{ x: roadmapX }} className="flex items-center gap-12 md:gap-24 w-max px-[8vw] lg:px-[12vw] relative z-20 mt-16 md:mt-24">

            {/* Background Laser Connector Track */}
            <div className="absolute top-[42%] left-0 w-full h-[2px] bg-slate-800 pointer-events-none"></div>

            {/* Animated Laser beam following progress */}
            <motion.div style={{ width: laserWidth }} className="absolute top-[42%] left-0 h-[3px] bg-gradient-to-r from-transparent via-[#38BDF8] to-[#60A5FA] shadow-[0_0_20px_#38BDF8] -translate-y-1/2 pointer-events-none z-0"></motion.div>

            {/* 1. START FLAG NODE (0.png) */}
            <div className="relative shrink-0 flex flex-col items-center justify-center w-64 md:w-80 group pt-6">
              <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#38BDF8]/25 rounded-full blur-[45px] pointer-events-none"></div>
              <motion.img
                animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                src="/roadmap/0.png" alt="Start Position" className="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-[0_15px_30px_rgba(56,189,248,0.5)] relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-6 relative z-20 text-center bg-gradient-to-r from-[#38BDF8]/20 to-[#2563EB]/20 backdrop-blur-xl border border-[#38BDF8]/40 px-6 py-2.5 rounded-full text-white font-black tracking-[0.2em] text-xs md:text-sm shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                INITIATE PROTOCOL
              </div>
            </div>

            {/* STEPS 1 through 7 (1.png - 7.png) */}
            {roadmapSteps.map((step, i) => (
              <div key={i} className="relative shrink-0 flex flex-col items-center justify-center w-[280px] md:w-[360px] group transition-all pt-6">

                {/* Node Intersection Glow */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#38BDF8]/0 rounded-full blur-[35px] pointer-events-none transition-colors duration-500 group-hover:bg-[#38BDF8]/30 z-0"></div>
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#020617] border-3 border-[#38BDF8] rounded-full shadow-[0_0_15px_#38BDF8] z-10 group-hover:bg-[#60A5FA] transition-colors duration-500"></div>

                {/* 3D Icon Image Component */}
                <motion.div
                  className="relative z-20 mb-8"
                  animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 + (i % 2), ease: "easeInOut", delay: i * 0.2 }}
                >
                  <img src={`/roadmap/${i + 1}.png`} alt={step.title} className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-500 hover:scale-110" />
                </motion.div>

                {/* Informational Glass Card */}
                <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-2xl border border-slate-800 p-6 md:p-8 rounded-3xl w-full text-center relative overflow-hidden group-hover:border-[#38BDF8]/60 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] group-hover:-translate-y-2">

                  {/* Step Number Watermark */}
                  <div className="absolute -top-3 -right-1 text-white/[0.03] font-black text-8xl pointer-events-none group-hover:text-[#38BDF8]/[0.08] transition-colors duration-500">{step.step}</div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-800 text-[#38BDF8] border border-sky-500/30 inline-block mb-3">
                    STEP {step.step}
                  </span>

                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 relative z-10 group-hover:text-[#38BDF8] transition-colors duration-300">{step.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal relative z-10">{step.desc}</p>
                </div>

              </div>
            ))}

            {/* END CAP */}
            <div className="shrink-0 w-24 h-screen flex items-center justify-center relative pr-[8vw]">
              <div className="absolute top-[42%] left-0 w-24 h-24 bg-[#38BDF8]/40 rounded-full blur-[50px] animate-pulse"></div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* MOBILE & TABLET FLUID SECTION (lg:hidden - Never Gets Stuck!) */}
      <section className="lg:hidden py-16 bg-[#020617] border-y border-slate-800/80 px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Zap className="w-3.5 h-3.5" /> Structured Learning Path
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#E2E8F0]">Mastery</span> Timeline
            </h2>
            <p className="text-slate-400 text-xs mt-2">Step-by-step roadmap from networking basics to CCISO executive leadership.</p>
          </div>

          {/* Vertical Connecting Step Stack for Mobile */}
          <div className="relative pl-6 border-l-2 border-[#38BDF8]/40 space-y-6">
            
            {/* Start Node (0.png) */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-2 w-8 h-8 rounded-full bg-[#38BDF8] text-slate-950 flex items-center justify-center font-extrabold text-xs shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                00
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-[#38BDF8]/50 flex items-center gap-3.5 shadow-lg">
                <img src="/roadmap/0.png" alt="Start" className="w-14 h-14 object-contain shrink-0 drop-shadow-[0_8px_16px_rgba(56,189,248,0.4)]" />
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8]">START HERE</span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">INITIATE PROTOCOL</h3>
                  <p className="text-[11px] text-slate-400">Begin your cybersecurity journey</p>
                </div>
              </div>
            </div>

            {/* Mobile Steps 1 through 7 (1.png - 7.png) */}
            {roadmapSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-2 w-8 h-8 rounded-full bg-slate-900 border-2 border-[#38BDF8] text-[#38BDF8] flex items-center justify-center font-extrabold text-xs shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  {step.step}
                </div>

                <div className="p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#38BDF8]/60 backdrop-blur-xl transition-all flex items-center gap-4 shadow-md">
                  <img src={`/roadmap/${idx + 1}.png`} alt={step.title} className="w-16 h-16 object-contain shrink-0 drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold text-[#38BDF8] uppercase tracking-wider">STEP {step.step}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 leading-snug">{step.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TOOLS YOU'LL LEARN */}
      <section className="py-24 md:py-32 relative bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase mb-4 block">Industry-Leading Arsenal</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tools You'll <span className="text-slate-500">Master</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {toolsLearned.map((tool, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00d4ff]/30 transition-all hover:bg-white/[0.04] group cursor-default text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-transparent text-[#00d4ff] group-hover:scale-110 transition-transform mb-4">
                  <tool.icon className="w-8 h-8" />
                </div>
                <h4 className="text-white font-bold text-[15px] mb-1">{tool.name}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{tool.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROGRAMS SECTION */}
      <section className="py-24 md:py-32 relative z-10 bg-[#050B14] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center mb-16 md:mb-24">
            <span className="text-brand-blue font-mono text-sm tracking-widest uppercase mb-4 block">Master The Frameworks</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Programs</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Industry-recognized certifications backed by EC-Council and other global authorities.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
            {featuredPrograms.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.15 }}
                className={`group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:border-brand-blue/30`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute -inset-24 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-brand-blue group-hover:bg-brand-blue/10">
                    <program.icon className="w-7 h-7" />
                  </div>
                  <div className="text-brand-blue text-sm font-bold mb-2 uppercase tracking-wider">{program.target}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{program.title}</h3>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{program.desc}</p>

                  <div className="space-y-3 mb-8">
                    {program.certs.map(cert => (
                      <div key={cert} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue" /> {cert}
                      </div>
                    ))}
                  </div>

                  <Link href="/programs" className="mt-auto flex items-center justify-between w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors group/btn hover:border-brand-blue/30">
                    <span className="font-semibold text-sm">View Curriculum</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 text-brand-blue transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ADMISSION / INQUIRY FORM */}
      <section id="admission-form" className="py-24 md:py-32 relative bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#60A5FA]/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Admission <span className="text-slate-500">Inquiry Form</span></h2>
            <p className="text-slate-400 text-lg">Secure your seat in our upcoming batches. Fill out the form below and our counseling team will get in touch with you.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all" placeholder="John Doe" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all" placeholder="john@example.com" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Phone Number</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all" placeholder="+91 98765 43210" value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Program of Interest</label>
                  <select required className="w-full bg-[#0a1122] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all appearance-none" value={formState.program} onChange={e => setFormState({ ...formState, program: e.target.value })}>
                    <option value="" disabled>Select a Program</option>
                    <option value="CEH">Certified Ethical Hacker (CEHv13)</option>
                    <option value="CHFI">Computer Hacking Forensic Investigator</option>
                    <option value="CND">Certified Network Defender</option>
                    <option value="CSA">Certified SOC Analyst</option>
                    <option value="Other">Other Vocational Course</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full relative group flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 bg-brand-blue/90 hover:bg-brand-blue text-white font-bold text-lg shadow-[0_0_20px_rgba(0,85,255,0.3)] mt-8">
                <span className="relative z-10 flex items-center gap-2">
                  Submit Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
