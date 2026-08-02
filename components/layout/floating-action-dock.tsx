"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Phone, Mail, GraduationCap, X, ChevronUp } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function FloatingActionDock() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hi Skyline Cyber Forensics team, I would like to inquire about training programs and forensic services."
  );

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto selection:bg-none">
      {/* Expanded Quick Action Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="p-3.5 rounded-3xl bg-slate-950/95 border border-[#38BDF8]/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(56,189,248,0.25)] flex flex-col gap-2.5 min-w-[250px] text-left"
          >
            {/* Top Header */}
            <div className="px-3 py-1.5 border-b border-slate-800/80 flex items-center justify-between text-[11px] font-mono font-bold text-sky-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                SKYLINE DIRECT DOCK
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Action 1: WhatsApp Chat with Pre-Message */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-2xl bg-emerald-950/50 hover:bg-emerald-900/80 border border-emerald-500/40 text-white transition-all flex items-center gap-3 group shadow-md"
            >
              <div className="p-2 rounded-xl bg-emerald-500 text-slate-950 group-hover:scale-110 transition-transform shrink-0">
                <MessageSquare className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-emerald-300 group-hover:text-emerald-200">
                  WhatsApp Support
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Chat with Counselor</span>
              </div>
            </a>

            {/* Action 2: Contact Us Page Link */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-[#38BDF8]/60 text-white transition-all flex items-center gap-3 group"
            >
              <div className="p-2 rounded-xl bg-[#0055FF]/20 text-[#38BDF8] border border-[#38BDF8]/40 group-hover:bg-[#0055FF] group-hover:text-white transition-colors shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">
                  Contact Us Page
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Send Service Inquiry</span>
              </div>
            </Link>

            {/* Action 3: Admissions Portal Link */}
            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-[#38BDF8]/60 text-white transition-all flex items-center gap-3 group"
            >
              <div className="p-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/40 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-white group-hover:text-sky-300 transition-colors">
                  Admissions Portal
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Apply & Reserve Seat</span>
              </div>
            </Link>

            {/* Action 4: Direct Helpline Call */}
            <a
              href={`tel:${CONTACT_INFO.phoneLink}`}
              className="p-2.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white transition-all flex items-center gap-3 group"
            >
              <div className="p-2 rounded-xl bg-slate-800 text-slate-300 group-hover:bg-[#38BDF8] group-hover:text-slate-950 transition-colors shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200">Call Helpline</span>
                <span className="text-[10px] text-slate-400 font-mono">+91 9890424040</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Trigger Pill */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-3 rounded-full border backdrop-blur-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 group cursor-pointer ${
          isOpen
            ? "bg-slate-900 border-[#38BDF8] text-white shadow-[0_0_30px_rgba(56,189,248,0.4)]"
            : "bg-slate-950/90 border-slate-800 hover:border-[#38BDF8]/60 text-slate-200 hover:text-white"
        }`}
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-40 animate-ping" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0055FF] to-[#38BDF8] text-white flex items-center justify-center shrink-0 shadow-md">
            {isOpen ? <X className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
          </div>
        </div>

        <div className="flex flex-col text-left pr-1 hidden sm:flex">
          <span className="text-xs font-extrabold tracking-wide leading-none">
            {isOpen ? "Close Menu" : "Contact & Support"}
          </span>
          <span className="text-[10px] font-mono text-sky-400 mt-0.5 leading-none">
            WhatsApp & Inquiries
          </span>
        </div>

        <ChevronUp className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#38BDF8]" : "group-hover:-translate-y-0.5"}`} />
      </motion.button>
    </div>
  );
}
