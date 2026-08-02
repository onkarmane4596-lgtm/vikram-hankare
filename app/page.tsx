"use client";

import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Shield, Terminal, CheckCircle2, ChevronRight, Play,
  Award, Laptop, IndianRupee, BookOpen, Star, Quote, Code,
  Lock, Database, Network, Users, Target, Zap, Activity, Cpu,
  Server, Cloud, Search, Briefcase, ChevronDown, ChevronUp, Download, Send, PenTool,
  Key, Scan, Unlock, Globe, Box, Wifi, ArrowUpRight, Building2, Eye, X, ExternalLink,
  GraduationCap, UserCheck, MessageSquare
} from 'lucide-react';
import { ThreatMap } from "@/components/premium/threat-map";
import { DynamicWaveBackground } from "@/components/premium/dynamic-wave-background";
import { InteractiveSecurityBg } from "@/components/premium/interactive-security-bg";
import dynamic from "next/dynamic";
const CyberArsenal3D = dynamic(() => import("@/components/premium/cyber-arsenal-3d").then(m => ({ default: m.CyberArsenal3D })), { ssr: false, loading: () => <div className="h-[600px] bg-[#02030A]" /> });
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
  { 
    title: "Certified Ethical Hacker (CEHv13)", 
    target: "Core Offensive Security", 
    href: "/certifications/ceh-v13",
    desc: "Take the next step toward a rewarding career. Designed to build your skills, boost your confidence, and help you secure tomorrow in a fully equipped digital lab environment.", 
    certs: ["Industry-Recognized Certification", "Hands-on Lab Experience", "Expert-Led Training", "Affordable Education"], 
    icon: Terminal, 
    color: "from-[#0055FF]/20 to-[#60A5FA]/20", 
    borderColor: "group-hover:border-[#0055FF]/50",
    whatsappMsg: "Hi, I have a question regarding the Certified Ethical Hacker (CEHv13) program."
  },
  { 
    title: "Computer Hacking Forensic Investigator", 
    target: "Digital Forensics", 
    href: "/certifications/chfi",
    desc: "Master the art of digital investigations. Identify, collect, preserve, analyze, and present digital evidence while following industry-standard forensic procedures.", 
    certs: ["Industry-Recognized Certification", "Hands-on Lab Experience", "Expert-Led Training", "Job-Ready Skills"], 
    icon: Search, 
    color: "from-[#0033AA]/20 to-[#0055FF]/20", 
    borderColor: "group-hover:border-[#0055FF]/40",
    whatsappMsg: "Hi, I have a question regarding the Computer Hacking Forensic Investigator (CHFI) program."
  },
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

function FoundersLeadershipSection() {
  const [expandedFounder, setExpandedFounder] = useState(false);
  const [expandedDirector, setExpandedDirector] = useState(false);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      {/* ============================================================ */}
      {/* 1. PROF. VIKRAM K. HANKARE (FOUNDER & EDUCATIONAL TRUSTEE) */}
      {/* ============================================================ */}
      <motion.div
        layout
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-slate-900/90 border border-slate-800 hover:border-[#38BDF8]/50 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-500"
      >
        {/* Existing Background Texture (/design/3.jpg) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/3.jpg"
            alt="Executive Backdrop"
            className="w-full h-full object-cover opacity-20 mix-blend-soft-light filter brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
        </div>

        <Quote className="absolute top-8 right-8 w-24 h-24 text-white/[0.03] rotate-180 pointer-events-none" />

        <div className="relative z-10">
          {/* Executive Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 pb-6 border-b border-slate-800/80">
            {/* Executive Illustration Frame */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-[#38BDF8]/40 bg-gradient-to-br from-[#0055FF]/20 via-slate-900 to-slate-950 flex items-center justify-center text-[#38BDF8] shadow-xl">
                <UserCheck className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-950 border border-sky-400/40 text-[9px] font-extrabold text-[#38BDF8] uppercase tracking-widest whitespace-nowrap shadow-md">
                FOUNDER
              </span>
            </div>

            {/* Title & Organization Details */}
            <div className="pt-2 sm:pt-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-[#38BDF8]/30 text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" /> Founder's Message
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Prof. Vikram K. Hankare</h3>
              <p className="text-[#38BDF8] font-semibold text-xs sm:text-sm mt-0.5">Founder & Educational Trustee</p>
              <p className="text-slate-400 text-xs mt-1">
                Skyline Centre of Excellence in Cyber Security & Forensics
              </p>
            </div>
          </div>

          {/* Motto & Initial Teaser */}
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-[#38BDF8] font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">Motto:</span>
              <p className="text-white font-bold text-base italic">"Where Security Meets Intelligence"</p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              It gives me immense pleasure to welcome you to Skyline Centre of Excellence in Cyber Security and Forensics, Satara, an initiative of Chhatrapati Shahu Maharaj Sevabhavi Sanstha, a trusted educational and social service organization committed to nation-building and human development since 2007.
            </p>
          </div>

          {/* Expandable Full Message */}
          {expandedFounder && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-4 pt-4 mb-6 border-t border-slate-800/80 text-slate-300 text-xs sm:text-sm leading-relaxed"
            >
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 italic font-medium text-slate-200">
                "Our vision is not merely to create professionals, but to nurture ethical innovators and cyber defenders who will secure the digital future of society."
              </div>
              <p>
                We are living in an era where cyber security, digital transformation, and technological innovation are redefining every aspect of society. The increasing demand for skilled professionals in Cyber Security, Ethical Hacking, Digital Forensics, Artificial Intelligence, Cloud Computing, and Emerging Technologies presents unprecedented opportunities for today's youth. However, quality training and internationally recognized certifications often remain inaccessible to students from semi-urban and rural regions due to the high costs associated with metropolitan institutions.
              </p>
              <p>
                With this vision, we established Skyline Centre of Excellence in Cyber Security and Forensics to bridge the gap between global standards and local aspirations. Our objective is to provide affordable, industry-oriented, and internationally recognized training that empowers students, professionals, and aspiring entrepreneurs with practical skills and globally accepted certifications.
              </p>
              <p>
                As an EC-Council Accredited Training Centre (ATC), we are committed to delivering world-class education through advanced laboratories, expert mentorship, hands-on learning, research initiatives, and industry collaborations. Our mission extends beyond imparting technical knowledge; we aim to cultivate ethical professionals, responsible digital citizens, and future leaders capable of protecting and strengthening the cyber ecosystem.
              </p>
              <p>
                Guided by the principles of excellence, integrity, innovation, and social responsibility, Skyline strives to create opportunities for deserving students and contribute meaningfully to India's vision of becoming a global knowledge and cyber security powerhouse.
              </p>
              <p>
                I firmly believe that education is the most powerful instrument of transformation. Through Skyline, we aspire to nurture talent, inspire innovation, and build a secure digital future for society.
              </p>
              <p>
                I invite students, academicians, industry leaders, and organizations to join us in this journey of learning, innovation, and excellence.
              </p>
            </motion.div>
          )}

          {/* Action Control Button */}
          <div className="pt-2">
            <button
              onClick={() => setExpandedFounder(!expandedFounder)}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-[#38BDF8] hover:text-white bg-slate-950 border border-slate-800 hover:border-[#38BDF8]/60 px-5 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <span>{expandedFounder ? "Show Less" : "Read Full Address"}</span>
              {expandedFounder ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </motion.div>


      {/* ============================================================ */}
      {/* 2. MRS. SANGEETA R. CHIKHALE (DIRECTOR & ACADEMIC STRATEGIST) */}
      {/* ============================================================ */}
      <motion.div
        layout
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-slate-900/90 border border-slate-800 hover:border-[#38BDF8]/50 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-500"
      >
        {/* Same Background Texture (/design/3.jpg) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/3.jpg"
            alt="Director Backdrop"
            className="w-full h-full object-cover opacity-20 mix-blend-soft-light filter brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
        </div>

        <Quote className="absolute top-8 right-8 w-24 h-24 text-white/[0.03] rotate-180 pointer-events-none" />

        <div className="relative z-10">
          {/* Executive Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 pb-6 border-b border-slate-800/80">
            {/* Executive Illustration Frame */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-[#38BDF8]/40 bg-gradient-to-br from-[#0055FF]/20 via-slate-900 to-slate-950 flex items-center justify-center text-[#38BDF8] shadow-xl">
                <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-950 border border-sky-400/40 text-[9px] font-extrabold text-[#38BDF8] uppercase tracking-widest whitespace-nowrap shadow-md">
                DIRECTOR
              </span>
            </div>

            {/* Title & Organization Details */}
            <div className="pt-2 sm:pt-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-[#38BDF8]/30 text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-2">
                <Shield className="w-3.5 h-3.5" /> Director's Message
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Mrs. Sangeeta R. Chikhale</h3>
              <p className="text-[#38BDF8] font-semibold text-xs sm:text-sm mt-0.5">Director & Academic Strategist</p>
              <p className="text-slate-400 text-xs mt-1">
                Skyline Centre of Excellence in Cyber Security & Forensics
              </p>
            </div>
          </div>

          {/* Motto & Initial Teaser */}
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-[#38BDF8] font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">Theme:</span>
              <p className="text-white font-bold text-base italic">“Securing the Digital World, Empowering the Future.”</p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              In today’s rapidly evolving digital world, cybersecurity is no longer an option—it is a necessity. As technology continues to transform every aspect of our lives, the demand for skilled professionals who can protect digital assets, investigate cyber incidents, and uphold cyber resilience has never been greater.
            </p>
          </div>

          {/* Expandable Full Message */}
          {expandedDirector && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-4 pt-4 mb-6 border-t border-slate-800/80 text-slate-300 text-xs sm:text-sm leading-relaxed"
            >
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 italic font-medium text-slate-200">
                "At Skyline, we are committed to nurturing future-ready professionals equipped with the knowledge, skills, and ethical values required to excel in this dynamic field."
              </div>
              <p className="font-semibold text-white">
                Dear Students, Parents, Industry Partners, and Visitors,
              </p>
              <p>
                Welcome to Skyline Centre of Excellence in Cyber Security and Forensics.
              </p>
              <p>
                At Skyline Centre of Excellence in Cyber Security and Forensics, we are committed to nurturing future-ready professionals equipped with the knowledge, skills, and ethical values required to excel in this dynamic field. Our mission is to bridge the gap between academic learning and industry expectations through practical training, innovation, research, and hands-on experience.
              </p>
              <p>
                We believe that education should not merely impart knowledge but should inspire confidence, critical thinking, and leadership. Our dedicated team strives to create an environment where students can explore emerging technologies, develop problem-solving abilities, and build successful careers in cybersecurity and digital forensics.
              </p>
              <p>
                As Director, I assure every student and stakeholder of our unwavering commitment to academic excellence, professional development, and continuous innovation. We are determined to provide world-class learning opportunities that empower individuals to become responsible digital citizens and cybersecurity leaders of tomorrow.
              </p>
              <p>
                Together, let us build a secure digital future, embrace lifelong learning, and contribute meaningfully to society through knowledge, integrity, and excellence.
              </p>
              <p>
                I invite you to join us on this exciting journey of learning, innovation, and transformation.
              </p>
            </motion.div>
          )}

          {/* Action Control Button */}
          <div className="pt-2">
            <button
              onClick={() => setExpandedDirector(!expandedDirector)}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-[#38BDF8] hover:text-white bg-slate-950 border border-slate-800 hover:border-[#38BDF8]/60 px-5 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <span>{expandedDirector ? "Show Less" : "Read Full Address"}</span>
              {expandedDirector ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

const ECOSYSTEM_CERTIFICATIONS = [
  { name: "CEH v13", href: "/certifications/ceh-v13" },
  { name: "CHFI v11", href: "/certifications/chfi" },
  { name: "CND v2", href: "/certifications/cnd" },
  { name: "CSA", href: "/certifications/csa" },
  { name: "CPENT", href: "/certifications/cpent" },
  { name: "CCISO", href: "/certifications/cciso" },
  { name: "FTK Imager", href: "/services/digital-forensics" },
  { name: "Autopsy Suite", href: "/services/digital-forensics" },
  { name: "Volatility Framework", href: "/services/digital-forensics" },
  { name: "Splunk SIEM", href: "/services/threat-detection" },
  { name: "Burp Suite Pro", href: "/services/penetration-testing" },
  { name: "Wireshark", href: "/services/threat-detection" },
  { name: "Law Enforcement Alliances", href: "/company/organization" },
  { name: "Govt PSU Defense", href: "/company/organization" },
  { name: "ICS / SCADA Defense", href: "/certifications/ics-scada" },
];

function EcosystemInteractiveSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-10 rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-950/70 backdrop-blur-md shadow-2xl">
      {/* Top & Bottom Glowing Laser Lines for Card */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_15px_#38BDF8]" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_15px_#38BDF8]" />

      {/* Background Graphic Asset (/design/5.png) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/design/5.png"
          alt="Cyber Ecosystem Texture"
          className="w-full h-full object-cover opacity-50 mix-blend-soft-light filter brightness-110 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-950/30 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-10 relative z-10">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Cyber Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Ecosystem</span>
        </h2>
      </div>

      {/* Slow & Smooth Framer Motion Horizontal Looping Marquee */}
      <div
        className="relative w-full overflow-hidden py-4 sm:py-8 z-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 sm:before:w-40 before:bg-gradient-to-r before:from-[#020617] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 sm:after:w-40 after:bg-gradient-to-l after:from-[#020617] after:to-transparent after:z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex items-center gap-8 sm:gap-20 whitespace-nowrap w-max"
          animate={isPaused ? false : { x: ["0%", "-33.333%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 65,
              ease: "linear",
            },
          }}
        >
          {[...ECOSYSTEM_CERTIFICATIONS, ...ECOSYSTEM_CERTIFICATIONS, ...ECOSYSTEM_CERTIFICATIONS].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="inline-block text-lg sm:text-2xl lg:text-3xl font-bold tracking-normal transition-all duration-300 select-none shrink-0 px-1.5 sm:px-2 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 text-transparent bg-clip-text hover:bg-none hover:text-[#0055FF] active:text-[#38BDF8] active:scale-95 touch-manipulation"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const PILLARS_DATA = [
  { 
    num: "01",
    title: "Industry-Oriented Training", 
    tagline: "Hands-on Offensive & Defensive Security",
    desc: "Real-world cyber simulation labs, malware analysis toolsets, and practical attack/defense exercises designed around actual threat vectors.", 
    tag: "SANS & EC-Council Standards",
    icon: Terminal,
    stats: "100% Practical Labs",
    highlight: "Simulated Cyber Attack Ranges"
  },
  { 
    num: "02",
    title: "Cyber & Forensics Labs", 
    tagline: "State-of-the-Art Evidence Workstations",
    desc: "Equipped with specialized digital investigation workstations, physical write blockers, RAM dump extractors, and forensic suites.", 
    tag: "FTK, Autopsy & Hardware Kits",
    icon: Search,
    stats: "ISO 27037 Compliant",
    highlight: "Hardened Hardware Imaging Workstations"
  },
  { 
    num: "03",
    title: "Real-Time Exposure", 
    tagline: "Live Incident Triage & Breach Analysis",
    desc: "Direct practical exposure to real incident response, breach investigations, threat hunting cases, and courtroom digital report drafting.", 
    tag: "Live Breach Investigation",
    icon: Shield,
    stats: "Live Threat Hunting",
    highlight: "Active Breach Triage & Case Studies"
  },
  { 
    num: "04",
    title: "Research & Innovation", 
    tagline: "Threat Intel & Next-Gen Tooling",
    desc: "Dedicated R&D hub developing next-generation threat intelligence, malware reverse engineering, and custom security scripts.", 
    tag: "Threat Intel & Tooling",
    icon: Cpu,
    stats: "Proprietary R&D",
    highlight: "Malware Analysis & OSINT Research"
  },
  { 
    num: "05",
    title: "Govt & Industry Alliances", 
    tagline: "Strategic Partnerships & Law Enforcement",
    desc: "Strategic partnerships with law enforcement agencies, police cyber crime cells, government PSUs, and corporate enterprise partners.", 
    tag: "Law Enforcement & PSUs",
    icon: Globe,
    stats: "Official Alliances",
    highlight: "Police Cyber Cell & Enterprise Ties"
  },
  { 
    num: "06",
    title: "Career Placement Support", 
    tagline: "Dedicated Placement & Mock Interviews",
    desc: "End-to-end career assistance, resume crafting, 1-on-1 mock security interviews, and direct hiring connections with top recruiters.", 
    tag: "Direct Campus Hiring",
    icon: Award,
    stats: "Career Assistance",
    highlight: "Direct Corporate Hiring Network"
  }
];

function ThreeDPillarCard({ item }: { item: { num: string; title: string; desc: string; tag: string; icon: any } }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const ItemIcon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div variants={fadeUp} className="no-cursor-frame [perspective:1000px]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) scale(1.02)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)",
          transition: isHovered
            ? "transform 0.1s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease-out, border-color 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
        className={`group relative bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border rounded-2xl p-7 sm:p-8 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 overflow-hidden touch-manipulation cursor-pointer ${
          isHovered
            ? "border-slate-700/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85),0_0_20px_1px_rgba(255,255,255,0.06)] bg-slate-900/80"
            : "border-slate-800/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
        }`}
      >
        {/* Subtle Specular Off-White Interactive Glare Light */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.05), transparent 70%)`,
            }}
          />
        )}

        {/* Subtle Off-White Top Rim Lighting Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* 3D Deep Dark Ambient Bottom Shadow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-black/60 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

        <div className="relative z-20">
          {/* Top HUD Metrics Row */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="font-mono text-[11px] font-bold text-slate-400 group-hover:text-slate-200 tracking-widest px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 group-hover:border-slate-700 shadow-inner transition-colors duration-300">
              // {item.num}
            </span>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 group-hover:text-white group-hover:bg-slate-800/80 group-hover:border-slate-700 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all duration-300 transform group-hover:translate-z-6">
              <ItemIcon className="w-5 h-5" />
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors duration-300 mb-2.5 leading-snug">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-6">
            {item.desc}
          </p>
        </div>

        {/* Bottom Tagline Hairline */}
        <div className="relative z-20 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="group-hover:text-slate-200 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-slate-200 opacity-70 group-hover:opacity-100 transition-all" />
            {item.tag}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

function CorePillarsSection() {
  return (
    <section className="py-24 sm:py-32 border-y border-slate-800/60 bg-[#020617] relative z-20 overflow-hidden">
      {/* Subtle Ambient Radial Lighting Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#0055FF]/10 via-[#38BDF8]/10 to-transparent blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[#38BDF8] text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
            <Shield className="w-3.5 h-3.5" /> [ 01 — CORE INSTITUTIONAL PILLARS ]
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Empowering Digital Security <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">
              Across All Fronts
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            From practical hands-on labs to digital forensic investigations and high-impact R&D, Skyline delivers complete cyber ecosystem capabilities.
          </p>
        </motion.div>

        {/* Minimal, Sleek & Highly Interactive Floating 3D Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {[
            { 
              num: "01",
              title: "Industry-Oriented Training", 
              desc: "Real-world cyber simulation labs, malware analysis toolsets, and practical attack/defense exercises.", 
              tag: "SANS & EC-Council Standards",
              icon: Terminal 
            },
            { 
              num: "02",
              title: "Cyber & Forensics Labs", 
              desc: "Equipped with state-of-the-art digital investigation workstations, write blockers, and forensic suites.", 
              tag: "FTK, Autopsy & Hardware Kits",
              icon: Search 
            },
            { 
              num: "03",
              title: "Real-Time Exposure", 
              desc: "Direct practical exposure to real incident response, breach investigations, and threat hunting cases.", 
              tag: "Live Breach Investigation",
              icon: Shield 
            },
            { 
              num: "04",
              title: "Research & Innovation", 
              desc: "Dedicated R&D hub developing next-generation threat intelligence, malware research, and security tooling.", 
              tag: "Threat Intel & Tooling",
              icon: Cpu 
            },
            { 
              num: "05",
              title: "Govt & Industry Alliances", 
              desc: "Strategic partnerships with law enforcement agencies, cyber cells, and corporate enterprise partners.", 
              tag: "Law Enforcement & PSUs",
              icon: Globe 
            },
            { 
              num: "06",
              title: "Career Placement Support", 
              desc: "End-to-end career assistance, resume crafting, mock security interviews, and corporate hiring connections.", 
              tag: "Direct Campus Hiring",
              icon: Award 
            }
          ].map((item, idx) => (
            <ThreeDPillarCard key={idx} item={item} />
          ))}
        </motion.div>

        {/* Bottom Minimal Trust Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>100% Practical Labs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>EC-Council Authorized ATC Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Police & Govt Sector Alliances</span>
          </div>
        </div>

      </div>
    </section>
  );
}

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
    <main className="min-h-screen bg-[#02030A] text-slate-300 font-sans selection:bg-[#007BFF]/30 selection:text-white relative">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617] pt-28 pb-20">
        {/* Dynamic Interactive Wave Canvas Background Layer */}
        <DynamicWaveBackground
          intensity={1.3}
          showGrid={true}
          showParticles={true}
          interactive={true}
          className="z-[1] opacity-75"
        />

        {/* Upscaled Highlighted Background Image & Ambient Cyber Backdrop Overlays */}
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          {/* Highlighted Hero Backdrop Image with Color Overlay & Floating Animation */}
          <div className="absolute inset-0 z-0 scale-105 transition-transform duration-1000 ease-out">
            <img
              src="/hero/hero1.png"
              alt="Cybersecurity Executive Backdrop"
              className="w-full h-full object-cover opacity-55 sm:opacity-65 mix-blend-screen object-center filter brightness-110 contrast-125 saturate-125"
            />
            {/* Subtle Blue/Cyan Color Grading Mesh Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#0055FF]/20 to-[#38BDF8]/15 mix-blend-color" />
          </div>

          {/* Cyber Target Reticle & Orbital Defense Rings (Dynamic HUD Depth) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] rounded-full border border-[#38BDF8]/20 animate-[spin_40s_linear_infinite] pointer-events-none z-1" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full border border-[#0055FF]/30 border-dashed animate-[spin_25s_linear_infinite_reverse] pointer-events-none z-1" />

          {/* Radial Dark Vignette Gradients */}
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_rgba(2,6,23,0.1)_0%,_#020617_85%)]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />
          
          {/* Dual High-Vibrancy Neon Spotlight Orbs */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#0055FF]/40 via-[#38BDF8]/35 to-sky-400/20 blur-[170px] pointer-events-none" />
          <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-[#00A8FF]/20 blur-[130px] pointer-events-none" />
        </div>

        {/* Centered Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-2 sm:mt-6"
        >
          {/* Top Badge Tag (Compact Solid Metallic Silver Finish — No Glow) */}
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-900 text-xs font-medium shadow-sm text-center sm:text-left leading-none"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0055FF]"></span>
            </span>
            <span className="text-slate-900 font-medium">
              SKYLINE — <span className="text-slate-600 font-normal">Training division of Chhatrapati Shahu Maharaj Sevabhavi Sanstha</span>
            </span>
          </motion.div>

          {/* Authoritative Academic Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-5 sm:mb-6 leading-[1.15]"
          >
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Where Security Meets
            </span>{" "}
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD] drop-shadow-[0_0_55px_rgba(56,189,248,0.7)]">
              Intelligence
            </span>
          </motion.h1>

          {/* Academic Subtitle Description */}
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-xs sm:text-base md:text-lg mb-8 max-w-2xl font-normal leading-relaxed mx-auto drop-shadow-md px-1 sm:px-0"
          >
            Skyline is the training division of Chhatrapati Shahu Maharaj Sevabhavi Sanstha, empowering the next generation of Cyber Security Professionals, Digital Forensic Experts, Ethical Hackers, and Security Leaders through world-class training, research, and industry collaboration.
          </motion.p>

          {/* Live Action CTAs (Compact Professional Pill Buttons) */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-md sm:max-w-none mb-10">
            {/* Primary Action Button */}
            <Link
              href="/admissions"
              className="relative group flex items-center justify-center w-full sm:w-auto px-5.5 py-2.5 sm:py-3 rounded-full overflow-hidden transition-all duration-200 bg-gradient-to-r from-[#0055FF] to-[#38BDF8] border border-sky-400/40 text-white shadow-sm hover:brightness-110 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 text-white font-medium text-xs sm:text-sm tracking-wide">
                <Zap className="w-3.5 h-3.5 text-sky-200" />
                <span>Apply for Admissions</span>
                <ArrowRight className="w-3.5 h-3.5 text-white opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            {/* Secondary Action Button */}
            <Link
              href="/certifications"
              className="relative group flex items-center justify-center w-full sm:w-auto px-5.5 py-2.5 sm:py-3 rounded-full overflow-hidden transition-all duration-200 bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-slate-600 active:scale-95"
            >
              <span className="relative z-10 font-medium text-xs sm:text-sm tracking-wide flex items-center gap-2">
                <span>View Certifications</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Academic Trust Highlights Bar */}
          <motion.div variants={fadeUp} className="w-full max-w-4xl mx-auto pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
              {[
                { title: "100% Practical Labs", icon: Terminal },
                { title: "EC-Council Partner", icon: Award },
                { title: "Govt Collaborations", icon: Globe },
                { title: "Placement Assistance", icon: Briefcase }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2 sm:gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl hover:border-[#38BDF8]/50 transition-all duration-300 shadow-xl group/trust"
                  >
                    <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#38BDF8] shrink-0 group-hover/trust:scale-110 transition-transform" />
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-200">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. CORE CAPABILITIES (MINIMAL & ELEGANT SHOWCASE) */}
      <CorePillarsSection />

      {/* 2. AUTHENTIC ACCREDITED TRAINING, FORENSICS & INSTITUTIONAL ECOSYSTEM */}
      <section className="py-16 sm:py-20 border-y border-slate-800/80 bg-slate-950/90 backdrop-blur-3xl relative z-20 overflow-hidden">
        {/* Top Glowing Laser Edge */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_15px_#38BDF8]" />

        {/* Ambient Radial Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#0055FF]/10 via-[#38BDF8]/15 to-transparent blur-[150px] pointer-events-none" />

        <EcosystemInteractiveSection />

        {/* Bottom Glowing Laser Edge */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_15px_#38BDF8]" />
      </section>

      {/* 3. DIRECTOR & FOUNDER MESSAGE (ULTRA-DYNAMIC LEADERSHIP SHOWCASE) */}
      <section id="leadership-messages" className="py-24 md:py-32 relative z-10 bg-[#02030A] overflow-hidden border-t border-[#8D929B]/20">
        
        {/* Ambient Glowing Background Elements */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00A8FF]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0052D4]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B1026] border border-[#00A8FF]/30 text-xs sm:text-sm font-bold text-[#00A8FF] tracking-widest uppercase mb-4 backdrop-blur-xl shadow-[0_0_25px_rgba(0,168,255,0.2)]">
              <Building2 className="w-4 h-4 text-[#00A8FF]" />
              <span>Institutional Leadership & Vision</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Messages from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F4F7] via-[#D1D5DB] to-[#8D929B]">Founders</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Empowering the next generation through ethical cybersecurity education, global accreditations, and nation-building since 2007.
            </p>
          </motion.div>

          {/* Dynamic Dual Leadership Container */}
          <FoundersLeadershipSection />

        </div>
      </section>

      {/* 4. CYBERSECURITY ROAD MAP (Responsive: Sticky Horizontal on Desktop, Touch-Friendly on Mobile) */}
      
      {/* 4. CYBERSECURITY ROAD MAP */}
      
      {/* DESKTOP STICKY HORIZONTAL TRACK (lg:block - Smooth Scroll Pinning for Large Screens) */}
      <section ref={roadmapRef} className="hidden lg:block relative h-[280vh] md:h-[320vh] bg-[#02030A] border-y border-[#8D929B]/20">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full">

          {/* Background Grid & Ambient Glows */}
          <div className="absolute inset-0 bg-[#02030A] opacity-10 pointer-events-none mix-blend-overlay" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A8FF]/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0052D4]/15 rounded-full blur-[150px] pointer-events-none" />

          {/* Fixed Section Header */}
          <div className="absolute top-16 md:top-20 left-0 w-full text-center z-30 pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#0B1026] border border-[#00A8FF]/30 text-xs font-bold text-[#00A8FF] tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(0,168,255,0.25)] backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A8FF] animate-ping" />
              <span>Scroll Down to Explore Timeline</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Mastery</span> Timeline
            </h2>
          </div>

          {/* HORIZONTAL SCROLLING TRACK (DESKTOP ONLY) */}
          <motion.div
            ref={trackRef}
            style={{ x: roadmapX }}
            className="flex items-center gap-16 md:gap-24 w-max px-[10vw] relative z-20 mt-20 md:mt-24"
          >
            {/* Background Laser Connector Track */}
            <div className="absolute top-[42%] left-0 w-full h-[2px] bg-[#8D929B]/20 pointer-events-none" />
            <motion.div
              style={{ width: laserWidth }}
              className="absolute top-[42%] left-0 h-[3px] bg-gradient-to-r from-transparent via-[#00A8FF] to-[#007BFF] shadow-[0_0_20px_#00A8FF] -translate-y-1/2 pointer-events-none z-0"
            />

            {/* 0. START NODE */}
            <div className="relative shrink-0 flex flex-col items-center justify-center w-64 md:w-80 group pt-6">
              <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#00A8FF]/25 rounded-full blur-[45px] pointer-events-none" />
              <motion.img
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                src="/roadmap/0.png"
                alt="Start Position"
                className="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-[0_15px_30px_rgba(0,168,255,0.5)] relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-6 relative z-20 text-center bg-gradient-to-r from-[#00A8FF]/20 via-[#007BFF]/20 to-[#0052D4]/20 backdrop-blur-xl border border-[#00A8FF]/40 px-6 py-2.5 rounded-full text-white font-black tracking-[0.2em] text-xs md:text-sm shadow-[0_0_25px_rgba(0,168,255,0.35)]">
                INITIATE PROTOCOL
              </div>
            </div>

            {/* STEPS 1 through 7 */}
            {roadmapSteps.map((step, i) => (
              <div
                key={i}
                className="relative shrink-0 flex flex-col items-center justify-center w-[290px] md:w-[360px] group transition-all pt-6"
              >
                {/* Node Intersection Glow */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00A8FF]/0 rounded-full blur-[35px] pointer-events-none transition-colors duration-500 group-hover:bg-[#00A8FF]/30 z-0" />
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#02030A] border-3 border-[#00A8FF] rounded-full shadow-[0_0_15px_#00A8FF] z-10 group-hover:bg-[#4DD0FF] transition-colors duration-500" />

                {/* 3D Icon Image */}
                <motion.div
                  className="relative z-20 mb-8"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + (i % 2), ease: "easeInOut", delay: i * 0.2 }}
                >
                  <img
                    src={`/roadmap/${i + 1}.png`}
                    alt={step.title}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_35px_rgba(0,168,255,0.6)] transition-all duration-500 hover:scale-110"
                  />
                </motion.div>

                {/* Informational Glass Card */}
                <div className="bg-gradient-to-br from-[#0B1026] via-[#08101F] to-[#02030A] backdrop-blur-2xl border border-[#8D929B]/20 p-6 md:p-8 rounded-3xl w-full text-center relative overflow-hidden group-hover:border-[#00A8FF]/60 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_50px_rgba(0,168,255,0.2)]">
                  <div className="absolute -top-3 -right-1 text-white/[0.03] font-black text-8xl pointer-events-none group-hover:text-[#00A8FF]/[0.08] transition-colors duration-500">
                    {step.step}
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#08101F] text-[#00A8FF] border border-[#00A8FF]/30 inline-block mb-3">
                    STEP {step.step}
                  </span>

                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 relative z-10 group-hover:text-[#00A8FF] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal relative z-10">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* END CAP */}
            <div className="shrink-0 w-24 h-screen flex items-center justify-center relative pr-[8vw]">
              <div className="absolute top-[42%] left-0 w-24 h-24 bg-[#00A8FF]/40 rounded-full blur-[50px] animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE & TABLET USER-FRIENDLY SWIPEABLE CAROUSEL (lg:hidden - Natural, Fluid & Ultra-Smooth) */}
      <section className="lg:hidden py-12 sm:py-16 bg-[#02030A] border-y border-[#8D929B]/20 relative z-10 overflow-hidden">
        <div className="max-w-xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1026] border border-[#00A8FF]/30 text-[#00A8FF] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,168,255,0.2)]">
              <Zap className="w-3.5 h-3.5" /> Structured Learning Path
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Mastery</span> Timeline
            </h2>
            <p className="text-slate-400 text-xs mt-2">Swipe left or right to explore your career progression from beginner to CCISO executive.</p>
          </div>

          {/* Touch-Swipeable Horizontal Snap Track */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 pb-6 pt-2 scrollbar-none">
            
            {/* Start Card (00 INITIATE PROTOCOL) */}
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="snap-center shrink-0 w-[82vw] max-w-[320px] bg-gradient-to-br from-[#0B1026] via-[#08101F] to-[#02030A] border border-[#00A8FF]/40 active:border-[#00A8FF] rounded-3xl p-6 flex flex-col items-center justify-between text-center shadow-xl relative overflow-hidden active:scale-98 transition-all duration-300 touch-manipulation cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A8FF]/10 rounded-full blur-[40px] pointer-events-none" />
              <div>
                <span className="text-[10px] font-extrabold text-[#00A8FF] uppercase tracking-widest px-3 py-1 rounded-full bg-slate-950 border border-[#00A8FF]/30 inline-block mb-4">
                  START HERE
                </span>
                <div className="my-2">
                  <img src="/roadmap/0.png" alt="Initiate Protocol" className="w-24 h-24 object-contain mx-auto drop-shadow-[0_10px_20px_rgba(0,168,255,0.5)]" />
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-wider mb-2">INITIATE PROTOCOL</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Begin your cybersecurity journey with fundamental skills and core principles.</p>
              </div>
              <div className="mt-6 w-full py-2 rounded-xl bg-[#0055FF]/20 border border-[#00A8FF]/40 text-[#38BDF8] font-bold text-xs uppercase tracking-widest">
                STEP 00 — START
              </div>
            </motion.div>

            {/* Steps 1 through 7 Cards */}
            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.98 }}
                className="snap-center shrink-0 w-[82vw] max-w-[320px] bg-gradient-to-br from-[#0B1026] via-[#08101F] to-[#02030A] border border-slate-800 hover:border-[#00A8FF]/50 active:border-[#00A8FF] rounded-3xl p-6 flex flex-col justify-between text-center shadow-xl relative overflow-hidden active:scale-98 transition-all duration-300 touch-manipulation cursor-pointer"
              >
                <div className="absolute -top-2 -right-1 text-white/[0.03] font-black text-7xl pointer-events-none">
                  {step.step}
                </div>
                
                <div>
                  <span className="text-[10px] font-extrabold text-[#00A8FF] uppercase tracking-widest px-3 py-1 rounded-full bg-slate-950 border border-[#00A8FF]/30 inline-block mb-3">
                    STEP {step.step} OF 07
                  </span>
                  
                  <div className="my-3">
                    <img src={`/roadmap/${idx + 1}.png`} alt={step.title} className="w-24 h-24 object-contain mx-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]" />
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[#00A8FF] font-bold">STAGE {step.step}</span>
                  <span className="text-slate-500">SWIPE NEXT →</span>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Swipe Helper Pill Indicator */}
          <div className="flex items-center justify-center gap-2 mt-2 text-slate-500 text-xs font-mono">
            <span>← Swipe steps to explore →</span>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE 3D CYBER ARSENAL (50+ OFFICIAL LAB TOOLS) */}
      <CyberArsenal3D />

      {/* 6. FEATURED PROGRAMS SECTION */}
      <section className="py-24 md:py-32 relative z-10 bg-[#050816] border-y border-[#8D929B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="text-center mb-16 md:mb-24">
            <span className="text-[#00A8FF] font-mono text-sm tracking-widest uppercase mb-4 block">Master The Frameworks</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F4F7] via-[#D1D5DB] to-[#8D929B]">Programs</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Industry-recognized certifications backed by EC-Council and other global authorities.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
            {featuredPrograms.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.15 }}
                className="group relative p-8 sm:p-9 rounded-3xl border border-[#8D929B]/25 bg-[#0B1026]/95 backdrop-blur-md overflow-hidden hover:-translate-y-2.5 active:scale-[0.98] transition-all duration-500 hover:border-[#00A8FF]/70 active:border-[#00A8FF] shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,168,255,0.25)] touch-manipulation cursor-pointer"
              >
                {/* 1. Creative Design Asset Background Texture (/design/4.png) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src="/design/4.png"
                    alt="Featured Program Cyber Artwork Backdrop"
                    className="w-full h-full object-cover object-center opacity-30 mix-blend-soft-light filter brightness-110 contrast-125 group-hover:scale-110 group-hover:opacity-60 group-hover:brightness-130 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Gradient Masks for optimal contrast & text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-[#0B1026]/75 to-[#0B1026]/40 group-hover:via-[#0B1026]/60 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A8FF]/10 via-transparent to-[#0052D4]/20 group-hover:from-[#00A8FF]/20 transition-all duration-500" />
                  
                  {/* Interactive Light Sweeper Ray */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Top Accent Gradient Bar & Ambient Radial Corner Glow */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color} opacity-70 group-hover:opacity-100 group-hover:h-1.5 transition-all duration-300 z-10`} />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00A8FF]/15 group-hover:bg-[#00A8FF]/30 rounded-full blur-3xl transition-all duration-700 pointer-events-none z-0" />

                {/* Futuristic Cyber L-Corner Brackets on Hover */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#00A8FF]/0 group-hover:border-[#00A8FF] transition-all duration-500 z-10" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#00A8FF]/0 group-hover:border-[#00A8FF] transition-all duration-500 z-10" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#00A8FF]/0 group-hover:border-[#00A8FF] transition-all duration-500 z-10" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#00A8FF]/0 group-hover:border-[#00A8FF] transition-all duration-500 z-10" />

                {/* Main Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Cyber Icon Container with Tech Glow */}
                  <div className="w-14 h-14 rounded-2xl bg-[#08101F] border border-[#8D929B]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#00A8FF]/70 group-hover:bg-[#00A8FF]/20 group-hover:shadow-[0_0_25px_rgba(0,168,255,0.4)] transition-all duration-500 text-[#00A8FF]">
                    <program.icon className="w-7 h-7 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <div className="text-[#00A8FF] text-xs sm:text-sm font-bold mb-2 uppercase tracking-wider group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-all">
                    {program.target}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-slate-100 group-hover:to-[#38BDF8] transition-all duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-8 flex-grow leading-relaxed text-sm sm:text-base font-normal">
                    {program.desc}
                  </p>

                  <div className="space-y-3.5 mb-8">
                    {program.certs.map(cert => (
                      <div key={cert} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-200 group/cert">
                        <div className="p-1 rounded-full bg-[#00A8FF]/10 border border-[#00A8FF]/30 group-hover/cert:border-[#00A8FF] group-hover/cert:bg-[#00A8FF]/20 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8FF] shrink-0" />
                        </div>
                        <span className="group-hover/cert:text-white transition-colors">{cert}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <Link 
                      href={program.href} 
                      className="flex-1 flex items-center justify-between w-full px-4 py-3 rounded-xl bg-[#08101F]/90 border border-[#8D929B]/30 text-white hover:bg-[#0055FF]/20 active:scale-95 transition-all duration-300 group/btn hover:border-[#38BDF8]/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] touch-manipulation"
                    >
                      <span className="font-semibold text-xs sm:text-sm tracking-wide">View Curriculum</span>
                      <div className="p-1.5 rounded-lg bg-[#00A8FF]/20 text-[#00A8FF] group-hover/btn:bg-[#00A8FF] group-hover/btn:text-white transition-all duration-300 group-hover/btn:translate-x-0.5">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>

                    <a
                      href={`https://wa.me/919890424040?text=${encodeURIComponent(program.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 active:bg-emerald-800 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 hover:text-white text-xs sm:text-sm font-semibold active:scale-95 transition-all duration-300 shadow-md group/wa w-full sm:w-auto touch-manipulation"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400 group-hover/wa:scale-110 transition-transform shrink-0" />
                      <span className="whitespace-nowrap">Ask a Question</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ADMISSION / INQUIRY FORM */}
      <section id="admission-form" className="py-24 md:py-32 relative bg-[#02030A] overflow-hidden">
        {/* Creative Design Asset 3: Sapphire Blue Layered Wave Backdrop */}
        <img
          src="/design/3.jpg"
          alt="Sapphire Wave Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#007BFF]/5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A8FF]/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0052D4]/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F4F7] via-[#D1D5DB] to-[#8D929B]">Inquiry Form</span></h2>
            <p className="text-slate-400 text-lg">Secure your seat in our upcoming batches. Fill out the form below and our counseling team will get in touch with you.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-br from-[#0B1026] via-[#08101F] to-[#02030A] backdrop-blur-xl border border-[#8D929B]/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Full Name</label>
                  <input required type="text" className="w-full bg-[#02030A] border border-[#8D929B]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00A8FF] focus:ring-1 focus:ring-[#00A8FF] transition-all" placeholder="John Doe" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input required type="email" className="w-full bg-[#02030A] border border-[#8D929B]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00A8FF] focus:ring-1 focus:ring-[#00A8FF] transition-all" placeholder="john@example.com" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Phone Number</label>
                  <input required type="tel" className="w-full bg-[#02030A] border border-[#8D929B]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00A8FF] focus:ring-1 focus:ring-[#00A8FF] transition-all" placeholder="+91 98765 43210" value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Program of Interest</label>
                  <select required className="w-full bg-[#02030A] border border-[#8D929B]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00A8FF] focus:ring-1 focus:ring-[#00A8FF] transition-all appearance-none" value={formState.program} onChange={e => setFormState({ ...formState, program: e.target.value })}>
                    <option value="" disabled>Select a Program</option>
                    <option value="CEH">Certified Ethical Hacker (CEHv13)</option>
                    <option value="CHFI">Computer Hacking Forensic Investigator</option>
                    <option value="CND">Certified Network Defender</option>
                    <option value="CSA">Certified SOC Analyst</option>
                    <option value="Other">Other Vocational Course</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full relative group flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#00A8FF] via-[#007BFF] to-[#0052D4] border border-[#00A8FF]/60 text-white font-bold text-lg shadow-[0_0_25px_rgba(0,168,255,0.4)] mt-8">
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
