"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Shield,
  Zap,
  BookOpen,
  Award,
  Briefcase,
  Terminal,
  Sparkles,
  Building2,
  FileText,
  Target,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll } from "framer-motion";

type NavLink = {
  name: string;
  href: string;
  icon: any;
  badge?: string;
  megaMenu?: {
    title: string;
    items: { name: string; href: string }[];
  }[];
  subLinks?: { name: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  {
    name: "Admissions",
    href: "/admissions",
    icon: GraduationCap,
    badge: "OPEN"
  },
  {
    name: "Certifications",
    href: "/certifications",
    icon: Award,
    badge: "EC-COUNCIL",
    megaMenu: [
      {
        title: "Core Concepts",
        items: [
          { name: "Cyber-Savvy Networking", href: "/certifications/networking-defender" },
          { name: "Linux for Cybersecurity", href: "/certifications/linux-cybersecurity" }
        ]
      },
      {
        title: "Practitioner Track",
        items: [
          { name: "Certified Ethical Hacker (CEHv13)", href: "/certifications/ceh-v13" },
          { name: "Computer Hacking Forensic Investigator", href: "/certifications/chfi" },
          { name: "Certified Network Defender (CND)", href: "/certifications/cnd" }
        ]
      },
      {
        title: "Advanced Operations",
        items: [
          { name: "Certified SOC Analyst (CSA)", href: "/certifications/csa" },
          { name: "Certified Incident Handler (ECIH)", href: "/certifications/ecih" },
          { name: "Threat Intelligence Analyst (CTIA)", href: "/certifications/ctia" },
          { name: "Certified Penetration Tester (CPENT)", href: "/certifications/cpent" }
        ]
      },
      {
        title: "Leadership & Specialized",
        items: [
          { name: "Chief Info Security Officer (CCISO)", href: "/certifications/cciso" },
          { name: "ICS/SCADA Security", href: "/certifications/ics-scada" }
        ]
      }
    ]
  },
  {
    name: "Services",
    href: "/services",
    icon: Briefcase,
    megaMenu: [
      {
        title: "Digital Forensics & IR",
        items: [
          { name: "Crime Scene Investigation", href: "/services/crime-scene" },
          { name: "Digital Forensics & IR", href: "/services/digital-forensics" },
          { name: "Threat Detection & IR", href: "/services/threat-detection" },
          { name: "Penetration Testing", href: "/services/penetration-testing" },
          { name: "Endpoint Security", href: "/services/endpoint-security" },
          { name: "Cybercrime Investigation", href: "/services/cybercrime-investigation" },
          { name: "Accident Reconstruction", href: "/services/accident-reconstruction" },
          { name: "Fire & Explosion Investigation", href: "/services/fire-explosion" },
          { name: "Expert Witness Services", href: "/services/expert-witness" }
        ]
      },
      {
        title: "Audits, Compliance & Risk",
        items: [
          { name: "Vulnerability Assessment", href: "/services/vulnerability-assessment" },
          { name: "IT Audits & Compliance", href: "/services/it-audits-compliance" },
          { name: "Cyber Advocacy & Legal", href: "/services/cyber-advocacy" },
          { name: "Forensic Audit & Fraud", href: "/services/forensic-audit" },
          { name: "Financial Crime Investigation", href: "/services/financial-crime" },
          { name: "Compliance & Risk Assessment", href: "/services/compliance-risk" },
          { name: "Insurance Fraud Investigation", href: "/services/insurance-fraud" },
          { name: "Corporate Internal Investigation", href: "/services/corporate-investigation" }
        ]
      },
      {
        title: "Specialized Investigations",
        items: [
          { name: "Signature Examination", href: "/services/signature-examination" },
          { name: "Document Verification", href: "/services/document-examination" },
          { name: "Questioned Document Exam", href: "/services/questioned-document" },
          { name: "Fingerprint & Impressions", href: "/services/fingerprint-impressions" },
          { name: "Intellectual Property Forensic", href: "/services/ip-forensic" },
          { name: "Speaker Identification", href: "/services/speaker-identification" },
          { name: "Voice Authentication", href: "/services/voice-authentication" }
        ]
      },
      {
        title: "Consulting & Programs",
        items: [
          { name: "Forensic Lab Setup", href: "/services/lab-setup" },
          { name: "Forensic Training Programs", href: "/services/training" },
          { name: "Cyber Security Awareness", href: "/services/cyber-awareness" },
          { name: "Expert Review of Reports", href: "/services/expert-review" },
          { name: "R&D in Forensic Sciences", href: "/services/research-development" },
          { name: "Audio Evidence Governance", href: "/services/audio-governance" }
        ]
      }
    ]
  },
  {
    name: "Trainings",
    href: "/trainings",
    icon: Terminal,
    megaMenu: [
      {
        title: "Hands-on Trainings",
        items: [
          { name: "Forensic Document Examination", href: "/trainings/document-examination" },
          { name: "Fingerprint Evidence Lab", href: "/trainings/fingerprint" },
          { name: "Digital Forensic Toolbox", href: "/trainings/digital-toolbox" },
          { name: "ATC-friendly Practical Training", href: "/trainings/atc-practical" }
        ]
      }
    ]
  },
  {
    name: "Workshops",
    href: "/workshops",
    icon: Sparkles,
    megaMenu: [
      {
        title: "Academic & Student Development",
        items: [
          { name: "Student Development Programs", href: "/workshops/academic-student" },
          { name: "School Cyber Awareness", href: "/workshops/academic-student" },
          { name: "College Cyber Awareness Series", href: "/workshops/academic-student" }
        ]
      },
      {
        title: "Enterprise & Governance",
        items: [
          { name: "Corporate Training Programs", href: "/workshops/enterprise-government" },
          { name: "Banking & Financial Sector", href: "/workshops/enterprise-government" },
          { name: "Government Capacity Building", href: "/workshops/enterprise-government" },
          { name: "Executive Leadership Programs", href: "/workshops/enterprise-government" }
        ]
      },
      {
        title: "Forensics & Law Enforcement",
        items: [
          { name: "Law Enforcement & Investigation", href: "/workshops/forensics-law-enforcement" },
          { name: "Specialized Forensic Science", href: "/workshops/forensics-law-enforcement" }
        ]
      }
    ]
  },
  {
    name: "Company",
    href: "/company/about",
    icon: Building2,
    megaMenu: [
      {
        title: "About & Vision",
        items: [
          { name: "About Us", href: "/company/about#introduction" },
          { name: "History of Sanstha", href: "/company/about#history" },
          { name: "Mission & Vision", href: "/company/about#mission-vision" },
          { name: "Core Values", href: "/company/about#core-values" },
          { name: "Why Choose Skyline?", href: "/company/about#why-choose-us" }
        ]
      },
      {
        title: "Organization",
        items: [
          { name: "Facilities", href: "/company/organization#facilities" },
          { name: "Policies", href: "/company/organization#policies" },
          { name: "Consultancy Policies", href: "/company/organization#consultancy-policies" },
          { name: "MoUs", href: "/company/organization#mous" }
        ]
      },
      {
        title: "Ecosystem & Media",
        items: [
          { name: "01. Industries We Serve", href: "/company/ecosystem#industries" },
          { name: "02. Future Initiatives", href: "/company/ecosystem#initiatives" },
          { name: "03. Media Gallery", href: "/company/ecosystem#gallery" },
          { name: "04. News & Events", href: "/company/ecosystem#news" },
          { name: "05. Research Projects", href: "/company/ecosystem#research" },
          { name: "06. Internship Programs", href: "/company/ecosystem#internships" },
          { name: "07. FAQs", href: "/company/ecosystem#faqs" }
        ]
      }
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    icon: FileText,
    megaMenu: [
      {
        title: "Publications & Research",
        items: [
          { name: "Research Publications", href: "/company/ecosystem#research" },
          { name: "Industry Insights", href: "/company/ecosystem#industries" }
        ]
      },
      {
        title: "Learning & Portals",
        items: [
          { name: "Learning Resources", href: "/resources" },
          { name: "Cyber Awareness Portal", href: "/workshops/security-awareness" },
          { name: "Events & Workshops", href: "/workshops" }
        ]
      }
    ]
  },
  {
    name: "Placement",
    href: "/placement",
    icon: Target
  }
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileLink, setExpandedMobileLink] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  if (pathname.startsWith("/admin")) return null;

  const handleNavLeave = () => {
    setHoveredNav(null);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col w-full font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0055FF] via-[#38BDF8] to-sky-400 z-[100] origin-left shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Topbar - Fixed layout shift and formatted clickables */}
      <div className="w-full bg-[#020617]/95 text-slate-300 text-xs font-medium px-4 md:px-8 border-b border-slate-800/80 backdrop-blur-md hidden sm:flex items-center justify-between py-2 relative z-20 transition-colors">
        {/* Left Contact & Location info */}
        <div className="flex items-center gap-5 text-slate-300 text-[11px]">
          <a
            href="tel:+919890424040"
            className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>+91 9890424040</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href="mailto:info@skycyberforensics.in"
            className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>info@skycyberforensics.in</span>
          </a>
          <span className="hidden lg:inline text-slate-700">•</span>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Satara, Maharashtra</span>
          </div>
        </div>

        {/* Right Social & Certification badge */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-sky-400">
            <Shield className="w-3 h-3 text-[#38BDF8]" />
            <span>Authorized Training Center</span>
          </div>
          <div className="flex items-center gap-3 opacity-90">
            <a href="https://www.linkedin.com/in/skyline-centre-of-excellence-in-cybersecurity-and-forensics-725507415" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0A66C2] transition-colors">
              <Linkedin className="w-3.5 h-3.5 fill-current" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61590718920061" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#1877F2] transition-colors">
              <Facebook className="w-3.5 h-3.5 fill-current" />
            </a>
            <a href="https://www.instagram.com/skyline_cyberforensics" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E4405F] transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com/@skylinecyberforensics?si=rI7ZCJAG0HxajVrA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#FF0000] transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop Dimmer when Mega Menu is Open */}
      <AnimatePresence>
        {hoveredNav && NAV_LINKS.find((l) => l.name === hoveredNav)?.megaMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020617]/70 backdrop-blur-md z-0 pointer-events-none transition-all duration-500"
          />
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <div
        className={cn(
          "w-full transition-all duration-300 relative z-10 border-b backdrop-blur-xl",
          isScrolled
            ? "bg-[#020617]/95 border-slate-800/80 py-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            : "bg-[#020617]/90 border-slate-800/40 py-3 md:py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        )}
      >
        <div className="max-w-[100rem] w-full px-4 md:px-8 mx-auto flex items-center justify-between relative z-20">
          {/* Logo with icon + sleek name.png */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group relative z-20">
            <div className="relative flex items-center gap-2">
              <img
                src="/logo.png"
                alt="SKYLINE Logo Icon"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-500 drop-shadow-[0_0_12px_rgba(56,189,248,0.3)] group-hover:scale-105"
              />
              <img
                src="/name.png"
                alt="SKYLINE Cyber Forensics"
                className="h-4.5 sm:h-5 md:h-6 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.12)] group-hover:brightness-110"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 mx-auto relative z-20" onMouseLeave={handleNavLeave}>
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              const isHovered = hoveredNav === link.name;
              const isRightAligned = idx > NAV_LINKS.length / 2;

              return (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => setHoveredNav(link.name)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "#") e.preventDefault();
                    }}
                    className={cn(
                      "text-[13px] font-semibold transition-all duration-300 flex items-center gap-1.5 px-3.5 py-2 relative z-10 whitespace-nowrap rounded-xl",
                      isActive
                        ? "text-[#38BDF8]"
                        : isHovered
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {(link.subLinks || link.megaMenu) && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 relative z-10 transition-transform duration-300 opacity-70",
                          isHovered && "rotate-180 opacity-100 text-[#38BDF8]"
                        )}
                      />
                    )}

                    {/* Active/Hover Background Pill */}
                    {isHovered && (
                      <motion.div
                        layoutId="navHeaderPill"
                        className="absolute inset-0 bg-slate-800/80 border border-slate-700/80 rounded-xl -z-0 shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </Link>

                  {/* Single Column Submenu (Full-Width Panel) */}
                  <AnimatePresence>
                    {link.subLinks && !link.megaMenu && isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5, transition: { duration: 0.15 } }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-screen z-50 pointer-events-auto"
                      >
                        <div className="bg-[#020617]/95 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.95)] border-t border-b border-slate-800/80 py-8 px-6 sm:px-12 w-full relative overflow-hidden">
                          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-80" />
                          <div className="max-w-7xl mx-auto flex flex-col gap-2 relative z-10 w-full max-w-xs">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className="group/item relative px-4 py-2 text-[13px] font-medium text-slate-300 hover:text-white transition-colors overflow-hidden flex items-center gap-2 hover:bg-slate-900/60 rounded-xl"
                                onClick={handleNavLeave}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/item:bg-[#38BDF8] transition-colors" />
                                <span className="whitespace-nowrap">{subLink.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Actions - ENROLL NOW Button */}
          <div className="hidden md:flex items-center shrink-0 relative z-20">
            <Link
              href="/admissions"
              className="px-5 py-2.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-[#0055FF] to-[#38BDF8] hover:brightness-110 active:scale-95 transition-all duration-200 flex items-center gap-2 border border-sky-400/30 shadow-sm group"
            >
              <Zap className="w-3.5 h-3.5 text-sky-200" />
              <span className="tracking-wide font-medium">Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-white opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden text-white p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center relative z-50 rounded-full bg-slate-900/90 border border-slate-800 hover:border-[#38BDF8]/50 transition-all shadow-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#38BDF8]" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>

          {/* Full-Width Edge-to-Edge Mega Menu Layer */}
          <AnimatePresence>
            {hoveredNav && NAV_LINKS.find((n) => n.name === hoveredNav)?.megaMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5, transition: { duration: 0.15 } }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-screen z-50 pointer-events-auto"
                onMouseEnter={() => setHoveredNav(hoveredNav)}
                onMouseLeave={handleNavLeave}
              >
                <div className="bg-[#020617]/95 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.95)] border-t border-b border-slate-800/80 py-8 px-6 sm:px-12 w-full relative overflow-hidden group/mega">
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-80" />

                  <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-8 lg:gap-14 justify-between relative z-10 w-full">
                    {NAV_LINKS.find((n) => n.name === hoveredNav)?.megaMenu?.map((group) => (
                      <div key={group.title} className="flex flex-col flex-1 shrink-0 min-w-[200px]">
                        <h4 className="text-white font-bold mb-4 border-b border-slate-800/80 pb-2.5 text-xs uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                          {group.title}
                        </h4>
                        <div className="flex flex-col gap-1.5">
                          {group.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group/item relative flex items-center py-1.5 text-[13px] font-medium text-slate-400 hover:text-white transition-all duration-300 hover:pl-2"
                              onClick={(e) => {
                                if (item.href === "#") {
                                  e.preventDefault();
                                } else {
                                  handleNavLeave();
                                }
                              }}
                            >
                              <span className="absolute left-0 opacity-0 -translate-x-full group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#38BDF8]">
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                              <span className="relative z-10 transition-transform duration-300 group-hover/item:translate-x-3 whitespace-nowrap">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#0055FF]/10 rounded-full blur-[120px] pointer-events-none" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* OVERHAULED MOBILE NAVIGATION DRAWER - PREMIUM SLIDE-OVER SHEET */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-lg"
            />

            {/* Slide-in Full Height Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-[#020617] border-l border-slate-800/80 shadow-2xl shadow-black flex flex-col justify-between overflow-hidden z-50"
            >
              {/* Top Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Drawer Top Header */}
              <div className="p-6 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/80 relative z-10">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="SKYLINE Logo" className="h-8 w-auto object-contain" />
                  <img src="/name.png" alt="SKYLINE" className="h-5 w-auto object-contain" />
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all shadow-md"
                >
                  <X className="w-5 h-5 text-[#38BDF8]" />
                </button>
              </div>

              {/* Scrollable Navigation List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-3 relative z-10">
                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;
                  const isExpanded = expandedMobileLink === link.name;
                  const isActive = pathname === link.href;

                  return (
                    <div key={link.name} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden transition-all">
                      <div className="flex items-center justify-between p-3.5">
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            if (link.href === "#") {
                              e.preventDefault();
                            } else {
                              setMobileMenuOpen(false);
                            }
                          }}
                          className="flex items-center gap-3 flex-1"
                        >
                          <div className={cn(
                            "p-2.5 rounded-xl transition-colors",
                            isActive
                              ? "bg-[#0055FF] text-white"
                              : "bg-slate-800/80 text-[#38BDF8]"
                          )}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className={cn(
                              "text-sm font-bold block",
                              isActive ? "text-[#38BDF8]" : "text-white"
                            )}>
                              {link.name}
                            </span>
                            {link.badge && (
                              <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-md bg-[#0055FF]/20 text-sky-300 border border-[#38BDF8]/30 uppercase tracking-wider">
                                {link.badge}
                              </span>
                            )}
                          </div>
                        </Link>

                        {(link.subLinks || link.megaMenu) && (
                          <button
                            onClick={() => setExpandedMobileLink(isExpanded ? null : link.name)}
                            className="p-2.5 rounded-xl bg-slate-800/60 text-slate-400 hover:text-white transition-colors"
                          >
                            <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 text-[#38BDF8]", isExpanded && "rotate-180")} />
                          </button>
                        )}
                      </div>

                      {/* Expandable Child Links */}
                      <AnimatePresence>
                        {(link.subLinks || link.megaMenu) && isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-slate-950/80 border-t border-slate-800/80 px-4 py-3 space-y-3"
                          >
                            {link.megaMenu ? (
                              link.megaMenu.map((group) => (
                                <div key={group.title} className="space-y-1.5">
                                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 pt-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                                    {group.title}
                                  </div>
                                  <div className="space-y-1 pl-3 border-l border-slate-800">
                                    {group.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                          if (item.href === "#") {
                                            e.preventDefault();
                                          } else {
                                            setMobileMenuOpen(false);
                                          }
                                        }}
                                        className="py-1.5 px-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-[#38BDF8] hover:bg-slate-900 transition-all flex items-center justify-between group"
                                      >
                                        <span>{item.name}</span>
                                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#38BDF8]" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : link.subLinks ? (
                              <div className="space-y-1 pl-2 border-l border-slate-800">
                                {link.subLinks.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    onClick={(e) => {
                                      if (subLink.href === "#") {
                                        e.preventDefault();
                                      } else {
                                        setMobileMenuOpen(false);
                                      }
                                    }}
                                    className="py-1.5 px-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-[#38BDF8] hover:bg-slate-900 transition-all flex items-center justify-between group"
                                  >
                                    <span>{subLink.name}</span>
                                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#38BDF8]" />
                                  </Link>
                                ))}
                              </div>
                            ) : null}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Drawer Bottom Actions & Quick Contact Bar */}
              <div className="p-6 bg-slate-950 border-t border-slate-800/80 space-y-4 relative z-10">
                {/* Mobile Direct Contact Strip */}
                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  <a
                    href="tel:+919890424040"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="mailto:info@skycyberforensics.in"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Email Us</span>
                  </a>
                </div>

                {/* High Impact CTA */}
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-xs font-medium text-center text-white rounded-full bg-gradient-to-r from-[#0055FF] to-[#38BDF8] flex items-center justify-center gap-2 shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5 text-sky-200" />
                  <span className="tracking-wide font-medium">Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
