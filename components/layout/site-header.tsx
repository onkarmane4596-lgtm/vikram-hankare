"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Linkedin, Instagram, Youtube, MapPin, Mail, Phone, MousePointerClick, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll } from "framer-motion";

type NavLink = {
  name: string;
  href: string;
  megaMenu?: {
    title: string;
    items: { name: string; href: string }[];
  }[];
  subLinks?: { name: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  {
    name: "Certifications",
    href: "/certifications",
    megaMenu: [
      {
        title: "Core Concepts",
        items: [
          { name: "Linux for Cybersecurity", href: "/certifications/linux" },
          { name: "Cyber-Savvy Networking", href: "/certifications/networking" }
        ]
      },
      {
        title: "Practitioner Track",
        items: [
          { name: "Certified Ethical Hacker (CEHv13)", href: "/certifications/ceh" },
          { name: "Computer Hacking Forensic Investigator", href: "/certifications/chfi" },
          { name: "Certified Network Defender (CND)", href: "/certifications/cnd" }
        ]
      },
      {
        title: "Advanced Operations",
        items: [
          { name: "Certified SOC Analyst (CSA)", href: "/certifications/csa" },
          { name: "Certified Penetration Tester (CPENT)", href: "/certifications/cpent" },
          { name: "Certified Incident Handler (ECIH)", href: "/certifications/ecih" },
          { name: "Threat Intelligence Analyst (CTIA)", href: "/certifications/ctia" }
        ]
      },
      {
        title: "Leadership & Specialized",
        items: [
          { name: "Chief Information Security Officer", href: "/certifications/cciso" },
          { name: "ICS/SCADA CYBERSECURITY", href: "/certifications/ics-scada" }
        ]
      }
    ]
  },
  {
    name: "Services",
    href: "/services",
    megaMenu: [
      {
        title: "Digital Forensics & IR",
        items: [
          { name: "Crime Scene Investigation", href: "/services/crime-scene" },
          { name: "Digital Forensics & IR", href: "/services/digital-forensics" },
          { name: "Accident Reconstruction", href: "/services/accident-reconstruction" },
          { name: "Fire & Explosion Investigation", href: "/services/fire-explosion" },
          { name: "Expert Witness Services", href: "/services/expert-witness" }
        ]
      },
      {
        title: "Audits, Compliance & Risk",
        items: [
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
          { name: "Document Verification", href: "/services/document-examination" },
          { name: "Questioned Document Exam", href: "/services/questioned-document" },
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
    megaMenu: [
      {
        title: "Specialized Workshops",
        items: [
          { name: "Security Awareness Programs", href: "/workshops/security-awareness" },
          { name: "Research & Development", href: "/workshops/research" },
          { name: "Capacity Building Programs", href: "/workshops/capacity-building" },
          { name: "Faculty Development Programs", href: "/workshops/faculty-development" },
          { name: "AI in Cyber Security", href: "/workshops/ai-cybersecurity" },
          { name: "Capture The Flag (CTF) Bootcamp", href: "/workshops/ctf-bootcamp" }
        ]
      }
    ]
  },
  {
    name: "Other Courses",
    href: "/other-courses",
    megaMenu: [
      {
        title: "Vocational Courses",
        items: [
          { name: "CCTV Surveillance Operator", href: "/other-courses/cctv" },
          { name: "Solar PV Installation", href: "/other-courses/solar-pv" },
          { name: "EV Repair Technician", href: "/other-courses/ev-repair" },
          { name: "Digital Marketing", href: "/other-courses/digital-marketing" },
          { name: "AI and Data Science", href: "/other-courses/ai-data-science" },
          { name: "Data Protection Officer", href: "/other-courses/data-protection" }
        ]
      }
    ]
  },
  {
    name: "Company",
    href: "/company",
    megaMenu: [
      {
        title: "About & Vision",
        items: [
          { name: "About Us", href: "/about" },
          { name: "History of Sanstha", href: "/about" },
          { name: "Mission & Vision", href: "/about#vision" },
          { name: "Core Values", href: "/about#vision" },
          { name: "Why Choose Skyline?", href: "/about" }
        ]
      },
      {
        title: "Organization",
        items: [
          { name: "Facilities", href: "/about#infrastructure" },
          { name: "Policies", href: "/policies" },
          { name: "Consultancy Policies", href: "/policies" },
          { name: "MoUs", href: "/company/mous" }
        ]
      },
      {
        title: "Ecosystem & Media",
        items: [
          { name: "Industries We Serve", href: "/company/industries" },
          { name: "Future Initiatives", href: "/company/initiatives" },
          { name: "Gallery", href: "/company/gallery" },
          { name: "News & Events", href: "/company/news" },
          { name: "FAQs", href: "/company/faqs" }
        ]
      }
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    subLinks: [
      { name: "Research Publications", href: "/resources/publications" },
      { name: "Learning Resources", href: "/resources/learning" },
      { name: "Cyber Awareness Portal", href: "/resources/awareness" },
      { name: "Events & Workshops", href: "/workshops" },
      { name: "Industry Insights", href: "/resources/insights" }
    ]
  },
  {
    name: "Placement",
    href: "/placement"
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

  if (pathname.startsWith("/admin")) return null;

  const handleNavLeave = () => {
    setHoveredNav(null);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col w-full font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-brand-blue z-[100] origin-left shadow-[0_0_10px_rgba(0,85,255,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Topbar - Ultra Minimal */}
      <div className={cn(
        "w-full bg-[#020617] text-slate-400 flex items-center justify-between text-[11px] font-medium px-4 md:px-8 border-b border-white/5 transition-all duration-300 relative z-20",
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-9 opacity-100"
      )}>
        <div className="flex gap-4 sm:gap-6">
          <span className="text-brand-blue uppercase tracking-widest font-bold">Follow Us</span>
          <div className="flex gap-4 opacity-70">
            <a href="#" aria-label="Facebook" className="hover:text-white hover:opacity-100 transition-colors"><Facebook className="w-3.5 h-3.5 fill-current" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white hover:opacity-100 transition-colors"><Linkedin className="w-3.5 h-3.5 fill-current" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white hover:opacity-100 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Youtube" className="hover:text-white hover:opacity-100 transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 opacity-80">
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors"><MapPin className="w-3 h-3 text-brand-blue" /> Satara, Maharashtra</div>
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors"><Mail className="w-3 h-3 text-brand-blue" /> info@skycyberforensics.in</div>
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors"><Phone className="w-3 h-3 text-brand-blue" /> +91 9922779934</div>
        </div>
      </div>

      {/* Optional Background Dimmer when Mega Menu is Open */}
      <AnimatePresence>
        {hoveredNav && NAV_LINKS.find(l => l.name === hoveredNav)?.megaMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020617]/60 backdrop-blur-sm z-0 pointer-events-none transition-all duration-500"
          />
        )}
      </AnimatePresence>

      {/* Main Navbar - Edge to Edge */}
      <div className={cn(
        "w-full transition-all duration-500 relative z-10 border-b backdrop-blur-xl",
        isScrolled
          ? "bg-[#020617]/95 border-white/10 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          : "bg-[#050B14]/85 border-transparent py-4 md:py-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      )}>
        <div className="max-w-[100rem] w-full px-4 md:px-8 mx-auto flex items-center justify-between relative z-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group relative z-20">
            <div className="relative">
              <img src="/logo.png" alt="SKYLINE Logo" className="h-9 md:h-10 w-auto object-contain transition-transform duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-105" />
            </div>
            <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight group-hover:text-brand-blue transition-colors duration-300 hidden sm:block">
              SKYLINE
            </span>
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
                    className={cn(
                      "text-[13px] font-semibold transition-all duration-300 flex items-center gap-1.5 px-3 py-2 relative z-10 whitespace-nowrap",
                      isActive || isHovered ? "text-white" : "text-slate-300 hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {(link.subLinks || link.megaMenu) && (
                      <ChevronDown className={cn(
                        "w-3 h-3 relative z-10 transition-transform duration-300 opacity-60",
                        isHovered && "rotate-180 opacity-100 text-brand-blue"
                      )} />
                    )}

                    {/* Active/Hover Background Pill */}
                    {isHovered && (
                      <motion.div
                        layoutId="navHeaderPill"
                        className="absolute inset-0 bg-white/5 border border-white/5 -z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>

                  {/* Single Column Submenu (Attached to specific link) */}
                  <AnimatePresence>
                    {link.subLinks && !link.megaMenu && isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98, transition: { duration: 0.15 } }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className={cn(
                          "absolute top-[100%] z-50 pointer-events-auto",
                          isRightAligned ? "right-0" : "left-0"
                        )}
                      >
                        <div className="bg-[#020617]/95 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.95)] border border-white/10 py-3 min-w-[240px] flex flex-col relative overflow-hidden">
                          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50"></div>
                          {link.subLinks.map(subLink => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="group/item relative px-5 py-3 text-[13px] font-medium text-slate-400 hover:text-white transition-colors overflow-hidden"
                            >
                              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover/item:scale-y-100 origin-center transition-transform duration-300"></div>
                              <div className="flex items-center gap-2 transition-transform duration-300 group-hover/item:translate-x-2">
                                <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-brand-blue">
                                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </span>
                                <span className="whitespace-nowrap">{subLink.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center shrink-0 relative z-20">
            <Link
              href="/admissions"
              className="px-6 py-2.5 text-[13px] font-bold text-white bg-transparent border border-brand-blue hover:bg-brand-blue/10 transition-all duration-300 flex items-center gap-2 relative overflow-hidden group shadow-[0_0_15px_rgba(0,85,255,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-[#0033AA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <MousePointerClick className="w-3.5 h-3.5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <span>APPLY NOW</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center relative z-30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Centered Attached Mega Menu Layer */}
          <AnimatePresence>
            {hoveredNav && NAV_LINKS.find(n => n.name === hoveredNav)?.megaMenu && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.98, transition: { duration: 0.15 } }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] xl:w-max z-[10] pointer-events-auto"
                onMouseEnter={() => setHoveredNav(hoveredNav)}
                onMouseLeave={handleNavLeave}
              >
                <div className="bg-[#020617]/95 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.95)] border border-white/10 p-8 w-full max-w-[85vw] relative overflow-hidden group/mega mx-auto">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#0055FF] to-transparent opacity-20 group-hover/mega:opacity-100 transition-opacity duration-700"></div>

                  <div className="flex gap-12 lg:gap-16 justify-between relative z-10 w-full">
                    {NAV_LINKS.find(n => n.name === hoveredNav)?.megaMenu?.map((group) => (
                      <div key={group.title} className="flex flex-col flex-1 shrink-0 min-w-48">
                        <h4 className="text-white font-bold mb-4 border-b border-white/5 pb-2 text-xs uppercase tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue opacity-80"></span>
                          {group.title}
                        </h4>
                        <div className="flex flex-col gap-1.5">
                          {group.items.map(item => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group/item relative flex items-center py-2 text-[13px] font-medium text-slate-400 hover:text-white transition-all duration-300 hover:pl-2"
                              onClick={handleNavLeave}
                            >
                              <span className="absolute left-0 opacity-0 -translate-x-full group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-brand-blue">
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

                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100%-2rem)] mx-auto bg-[#020617]/95 backdrop-blur-2xl border border-white/10 mt-2 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] xl:hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)] absolute top-full left-4 right-4 z-40 pb-[env(safe-area-inset-bottom,2rem)] max-h-[80vh]"
          >
            <div className="flex flex-col py-6 px-6 gap-2">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-white/5 last:border-0 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "py-3 text-[15px] font-semibold transition-colors flex-1",
                        pathname === link.href ? "text-brand-blue" : "text-slate-200"
                      )}
                    >
                      {link.name}
                    </Link>
                    {(link.subLinks || link.megaMenu) && (
                      <button
                        aria-label={`Toggle ${link.name} submenu`}
                        aria-expanded={expandedMobileLink === link.name}
                        onClick={() => setExpandedMobileLink(expandedMobileLink === link.name ? null : link.name)}
                        className="p-3 text-slate-400 hover:bg-white/5 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      >
                        <ChevronDown className={cn("w-4 h-4 transition-transform", expandedMobileLink === link.name && "rotate-180")} />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {(link.subLinks || link.megaMenu) && expandedMobileLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-1 pl-4 pb-2 border-l border-brand-blue/30 ml-2 overflow-hidden"
                      >
                        {link.megaMenu ? (
                          link.megaMenu.map(group => (
                            <div key={group.title} className="mb-5 last:mb-0 pt-2">
                              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                                {group.title}
                              </div>
                              <div className="flex flex-col gap-1">
                                {group.items.map(item => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-2 text-[14px] font-medium text-slate-400 hover:text-brand-blue hover:translate-x-1 transition-all"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : link.subLinks ? (
                          link.subLinks.map(subLink => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-2.5 text-[14px] font-medium text-slate-400 hover:text-brand-blue hover:translate-x-1 transition-all"
                            >
                              {subLink.name}
                            </Link>
                          ))
                        ) : null}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-6 py-4 text-[15px] font-bold text-center text-white bg-gradient-to-r from-brand-blue to-[#0033AA] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,163,255,0.4)] sticky bottom-6 z-10 hover:shadow-[0_0_30px_rgba(0,163,255,0.6)]"
              >
                <MousePointerClick className="w-4 h-4" />
                APPLY NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
