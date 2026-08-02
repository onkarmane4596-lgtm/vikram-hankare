'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Shield } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1020] border-t border-[#1e3a52] px-4 py-16 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-[#0a1020]/70 to-[#0a1020]/90" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3.5">
              <img src="/logo.png" alt="SKYLINE Shield Logo" className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]" />
              <div className="flex flex-col pt-0.5">
                <img src="/name.png" alt="SKYLINE" className="h-6 w-auto object-contain object-left block" />
                <span className="text-[9px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 tracking-[0.28em] uppercase mt-1 whitespace-nowrap block">
                  Centre of Excellence
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of cybersecurity professionals with world-class education.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Courses', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-white">Courses</h3>
            <ul className="space-y-2">
              {['CEH', 'OSCP', 'Security+', 'CISSP'].map((course) => (
                <li key={course}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phoneLink}`}
                  className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="text-gray-400">{CONTACT_INFO.address}</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e3a52] my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm font-normal">
            &copy; {currentYear} SKYLINE Centre of Excellence. All rights reserved. • Powered by{" "}
            <a
              href="https://www.techsarthiservices.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-slate-300 hover:text-cyan-400 transition-colors"
            >
              TECHSARTHI
            </a>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Instagram, href: '#' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#0d1b2a] border border-[#1e3a52] flex items-center justify-center text-gray-400 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
