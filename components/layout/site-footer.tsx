"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Mail, Phone, Globe, MapPin, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#02050a] pt-20 pb-10 border-t border-cyan-900/30 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="SKYLINE Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">SKYLINE</span>
                <span className="text-[10px] text-cyan-400 font-medium tracking-widest uppercase">Centre of Excellence</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Advanced Cyber Security Training, Digital Forensics, Incident Response, and Industry Certification Programs. Guardians of the Digital Skyline.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-900 hover:text-cyan-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-900 hover:text-cyan-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-900 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-900 hover:text-cyan-400 transition-colors">
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
                { name: "Programs", href: "/programs" },
                { name: "Certifications", href: "/certifications" },
                { name: "Infrastructure", href: "/infrastructure" },
                { name: "Faculty", href: "/faculty" },
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
              Consultancy & Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Security Assessment", href: "/consultancy" },
                { name: "Digital Forensics", href: "/consultancy" },
                { name: "Corporate Training", href: "/consultancy" },
                { name: "EC-Council Path", href: "/ec-council" },
                { name: "Blog & News", href: "/blog" },
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
                  <a href="tel:+919922779934" className="text-sm hover:text-cyan-400 transition-colors">+91 9922779934</a>
                  <a href="tel:+919130092227" className="text-sm hover:text-cyan-400 transition-colors">+91 9130092227</a>
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

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} SKYLINE Centre of Excellence. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors">Terms & Conditions</Link>
            <Link href="/refund-policy" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
