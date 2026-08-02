"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Mail, Phone, Globe, MapPin, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#02050a] pt-20 pb-10 border-t border-cyan-900/30 text-slate-400 relative overflow-hidden">
      {/* Background Video Layer (/design/footer.mp4) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-30 filter brightness-75 contrast-110 saturate-110"
        >
          <source src="/design/footer.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] via-[#02050a]/70 to-[#02050a]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-start gap-3.5 mb-6 group">
              <img src="/logo.png" alt="SKYLINE Shield Logo" className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col pt-0.5">
                <img src="/name.png" alt="SKYLINE" className="h-6 sm:h-7 w-auto object-contain object-left block" />
                <span className="text-[9px] sm:text-[10px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 tracking-[0.28em] sm:tracking-[0.32em] uppercase mt-1 whitespace-nowrap block">
                  Centre of Excellence
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Advanced Cyber Security Training, Digital Forensics, Incident Response, and Industry Certification Programs. Guardians of the Digital Skyline.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61590718920061" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-900 hover:text-cyan-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/skyline-centre-of-excellence-in-cybersecurity-and-forensics-725507415" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-900 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/skyline_cyberforensics" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-900 hover:text-cyan-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Admissions", href: "/admissions" },
                { name: "Certifications", href: "/certifications" },
                { name: "Infrastructure", href: "/infrastructure" },
                { name: "Institutional Policies", href: "/policies" },
                { name: "Placement Support", href: "/placement" },
                { name: "Admin Portal", href: "/admin/login" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-400 rounded-full"></span>
              Services & Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Vulnerability Assessment", href: "/services/vulnerability-assessment" },
                { name: "Digital Forensics & IR", href: "/services/digital-forensics" },
                { name: "IT Audits & Compliance", href: "/services/it-audits-compliance" },
                { name: "Hands-on Trainings", href: "/trainings" },
                { name: "Learning Resources", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "#") e.preventDefault();
                    }}
                    className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-400 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Satara, Maharashtra<br />
                  Under Chhatrapati Shahu Maharaj Sevabhavi Sanstha
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919890424040" className="text-sm hover:text-cyan-400 transition-colors">+91 9890424040</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <a href="mailto:info@skycyberforensics.in" className="text-sm hover:text-cyan-400 transition-colors">
                  info@skycyberforensics.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
            <span>&copy; {currentYear} SKYLINE Centre of Excellence. All rights reserved.</span>
            <span className="hidden md:inline text-slate-700">•</span>
            <span>
              Powered by{" "}
              <a
                href="https://www.techsarthiservices.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-slate-400 hover:text-cyan-400 transition-colors"
              >
                TECHSARTHI
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/policies" className="hover:text-cyan-400 transition-colors">Institutional Policies</Link>
            <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link>
            <Link href="/refund-policy" className="hover:text-cyan-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
