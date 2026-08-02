"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Shield, MapPin, Phone, Mail, Send, Clock, MessageSquare, CheckCircle2,
  Building2, Sparkles, ArrowRight, Headphones, Globe, HelpCircle, Zap,
  ChevronDown, ExternalLink, Lock, AlertTriangle, User, FileText, Check,
  Instagram, Facebook, Linkedin
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const INQUIRY_TYPES = [
  { id: "forensics", label: "Digital Forensics & IR", icon: Shield },
  { id: "vapt", label: "VAPT & Security Audit", icon: Zap },
  { id: "training", label: "Training & Certifications", icon: FileText },
  { id: "consulting", label: "Corporate Consulting", icon: Building2 },
  { id: "general", label: "General Inquiry", icon: MessageSquare }
];

const FAQS = [
  {
    question: "How quickly will I receive a response to my inquiry?",
    answer: "Our general inquiry desk responds within 2 business hours. For emergency cyber incident response (IR), our hotline operates 24/7 with immediate triage."
  },
  {
    question: "Can I schedule an in-person visit to the Satara Cyber Lab?",
    answer: "Yes, visitors and prospective students are welcome. Please schedule a prior appointment via the contact form or by calling our helpline so our lab personnel can assist you."
  },
  {
    question: "How do I report an urgent live cyber incident or breach?",
    answer: "For emergency incidents requiring immediate forensic preservation or triage, call our hotline directly at +91 9890424040 for priority dispatch."
  },
  {
    question: "What details should I prepare for a forensic case evaluation?",
    answer: "Please keep ready basic details regarding affected devices, digital evidence parameters, timeline of events, and relevant legal/case documentation."
  }
];

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams ? searchParams.get("service") : null;
  const typeParam = searchParams ? searchParams.get("type") : null;

  const [selectedCategory, setSelectedCategory] = useState("forensics");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    category: typeParam || "forensics",
    message: serviceParam ? `I am inquiring about a consultation for ${serviceParam}.` : ""
  });

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        message: `I am inquiring about a consultation for ${serviceParam}.`
      }));
    }
    if (typeParam) {
      setSelectedCategory(typeParam);
      setFormData(prev => ({ ...prev, category: typeParam }));
    }
  }, [serviceParam, typeParam]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    setFormData((prev) => ({ ...prev, category: id }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      category: "forensics",
      message: serviceParam ? `I am inquiring about a consultation for ${serviceParam}.` : ""
    });
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden pt-28 sm:pt-36 pb-24">
      {/* BACKGROUND GRAPHICS & GLOWS */}
      <div className="absolute top-0 left-0 right-0 h-[700px] z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero/hero1.png"
          alt="Cyber Contact Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.3)_0%,_#020617_95%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/70 to-[#020617]" />
      </div>
      
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] bg-[#0055FF]/5 rounded-full blur-[220px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] w-[50vw] h-[50vh] bg-[#38BDF8]/5 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-slate-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.15)] mb-6"
          >
            <Headphones className="w-4 h-4 text-[#38BDF8] animate-pulse" />
            <span>24/7 Security Operations & Inquiry Desk</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Connect with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Cyber Experts</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Have questions regarding digital forensics, vulnerability assessments, or professional certification programs? Reach out to our specialized teams today.
          </motion.p>

          {/* SLA FEATURE BADGES */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300"
          >
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#38BDF8]" />
              <span>&lt; 2 Hours Response SLA</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Lock className="w-4 h-4 text-sky-400" />
              <span>Encrypted & Confidential</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>24/7 Emergency Triage Desk</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* MAIN 2-COLUMN SECTION: CONTACT INFO & FORM */}
        {/* ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* LEFT COLUMN: CONTACT CARDS & EMERGENCY HOTLINE (5 COLS) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 space-y-6"
          >
            {/* EMERGENCY INCIDENT RESPONSE BANNER */}
            <motion.div
              variants={fadeUp}
              className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-slate-950 border border-[#38BDF8]/40 p-6 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.15)] group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#0055FF]/20 border border-[#38BDF8]/40 text-[#38BDF8] shrink-0">
                  <AlertTriangle className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase">EMERGENCY HOTLINE</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Live Cyber Breach or Incident?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Call our emergency response hotline directly for instant forensic evidence triage.
                  </p>
                  <a
                    href="tel:+919890424040"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#38BDF8] hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>+91 9890424040</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CAMPUS LOCATION CARD */}
            <motion.div
              variants={fadeUp}
              className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/50 p-6 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
                    Visit Campus & Lab
                  </h3>
                  <p className="text-sm font-semibold text-slate-200 mb-1">
                    SKYLINE Centre of Excellence
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Satara, Maharashtra, India<br />
                    <span className="text-slate-500">Under Chhatrapati Shahu Maharaj Sevabhavi Sanstha</span>
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-[#38BDF8]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* EMAIL CARD */}
            <motion.div
              variants={fadeUp}
              className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/50 p-6 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
                    Official Email Desk
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">
                    Send detailed inquiry specifications or official correspondence.
                  </p>
                  <div className="space-y-1.5">
                    <a
                      href="mailto:info@skycyberforensics.in"
                      className="text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-[#38BDF8] transition-colors flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800"
                    >
                      <span>info@skycyberforensics.in</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PHONE NUMBER CARD */}
            <motion.div
              variants={fadeUp}
              className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/50 p-6 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
                    Helpline Number
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">
                    Direct phone support for admissions, consulting & training.
                  </p>
                  <a
                    href="tel:+919890424040"
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-[#38BDF8]/40 transition-all flex items-center justify-between text-slate-200 hover:text-[#38BDF8]"
                  >
                    <span className="text-sm font-mono font-bold text-white">+91 9890424040</span>
                    <Phone className="w-4 h-4 text-[#38BDF8]" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* SOCIAL CONNECT CARD */}
            <motion.div
              variants={fadeUp}
              className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/50 p-6 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
                    Connect With Us
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Follow our social channels for research updates & news.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.instagram.com/skyline_cyberforensics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-[#38BDF8]/40 transition-all flex items-center justify-between text-xs text-slate-300 hover:text-white"
                    >
                      <div className="flex items-center gap-2.5">
                        <Instagram className="w-4 h-4 text-pink-400" />
                        <span className="font-semibold">Instagram</span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">@skyline_cyberforensics</span>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61590718920061"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-[#38BDF8]/40 transition-all flex items-center justify-between text-xs text-slate-300 hover:text-white"
                    >
                      <div className="flex items-center gap-2.5">
                        <Facebook className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold">Facebook Page</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/skyline-centre-of-excellence-in-cybersecurity-and-forensics-725507415"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-[#38BDF8]/40 transition-all flex items-center justify-between text-xs text-slate-300 hover:text-white"
                    >
                      <div className="flex items-center gap-2.5">
                        <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                        <span className="font-semibold">LinkedIn Profile</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: HIGH-TECH INTERACTIVE FORM (7 COLS) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-7 bg-slate-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/5 blur-[120px] pointer-events-none" />

            <div className="mb-8">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Send Us a Message</h2>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-950 text-[#38BDF8] border border-slate-800">
                  SECURE TRANSMISSION
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Select your primary inquiry category below to route your request to the right department.
              </p>
            </div>

            {/* TOPIC SELECTION CHIPS */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Inquiry Topic
              </label>
              <div className="flex flex-wrap gap-2.5">
                {INQUIRY_TYPES.map((type) => {
                  const IconComp = type.icon;
                  const isSelected = selectedCategory === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleCategorySelect(type.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                        isSelected
                          ? "bg-[#0055FF] text-white border-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.3)] scale-[1.02]"
                          : "bg-slate-950/70 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <IconComp className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-[#38BDF8]"}`} />
                      <span>{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FORM BODY */}
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-950/90 border border-[#38BDF8]/40 rounded-2xl p-8 text-center space-y-4 my-8"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0055FF]/20 border border-[#38BDF8] text-[#38BDF8] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Transmitted Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to SKYLINE. Your inquiry has been routed to our <span className="text-[#38BDF8] font-bold">{INQUIRY_TYPES.find(t => t.id === selectedCategory)?.label}</span> department. A specialist will get back to you within 2 hours.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#38BDF8] text-xs font-bold text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#38BDF8]" /> Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                        placeholder="e.g. Vikram Mane"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#38BDF8]" /> Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                        placeholder="vikram@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#38BDF8]" /> Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" /> Organization / College
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                        placeholder="Company or Institute name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#38BDF8]" /> Message / Case Overview <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors resize-none"
                      placeholder="Describe your inquiry, forensic case requirement, or training program questions..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Shield className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>Your contact details are kept strictly confidential under ISO 27001 standards.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#0055FF] hover:bg-[#0044CC] text-white font-bold transition-all duration-200 shadow-[0_0_25px_rgba(0,85,255,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry Now</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE MAP & LAB LOCATION SECTION */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Globe className="w-3.5 h-3.5" /> Geographic Location
            </div>
            <h2 className="text-3xl font-extrabold text-white">Find Us in Satara</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              Our modern cyber laboratory and training center is located in Satara, Maharashtra.
            </p>
          </div>

          <div className="w-full h-[400px] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden relative shadow-2xl group">
            <div className="absolute inset-0 z-0">
              <iframe
                title="SKYLINE Satara Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79155986873!2d73.95764085820311!3d17.680464299999998!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239be08d96d43%3A0x6b4923f5b7468160!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* MAP OVERLAY BADGE */}
            <div className="absolute bottom-6 left-6 z-10 bg-slate-950/90 border border-slate-800 p-4 rounded-2xl backdrop-blur-md max-w-xs shadow-xl hidden sm:block">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <MapPin className="w-4 h-4 text-[#38BDF8]" />
                <span>Satara Headquarters</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Chhatrapati Shahu Maharaj Sevabhavi Sanstha Campus, Satara, MH.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5" /> Quick Assistance
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-[#38BDF8] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#38BDF8] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* BOTTOM WHATSAPP & PHONE ACTION BANNER */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-gradient-to-r from-[#0055FF]/20 via-slate-900 to-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Immediate Consultation or Case Advice?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our experts are available to discuss corporate audits, forensic evidence preservation, and student enrollment options.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919890424040"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+919890424040"
                className="px-6 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#38BDF8] text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>Call Helpline (+91 9890424040)</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#020617] pt-36 text-center text-slate-400">Loading Contact Portal...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
