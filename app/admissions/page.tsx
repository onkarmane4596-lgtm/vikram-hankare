"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Shield, CheckCircle2, FileText, UserSquare, BookOpen, Fingerprint,
  Users, ArrowRight, Zap, GraduationCap, Briefcase, Building2, ShieldAlert,
  Award, Sparkles, Phone, Mail, UploadCloud, Check, ChevronRight, HelpCircle,
  Laptop, Compass, Clock, Send
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

const ELIGIBILITY_GROUPS = [
  {
    title: "Students (School / Graduation / Post Graduation / Any Stream)",
    subtitle: "School, College, B.Sc, BCA, MCA, B.Com, Arts, Science & Tech (Any Stream)",
    icon: GraduationCap,
    desc: "Open for school & college students from any academic stream seeking foundational and specialized industry credentials in cybersecurity and forensics.",
    color: "from-sky-500/20 to-blue-600/10",
    badge: "Students (All Streams)"
  },
  {
    title: "Engineering & Technology Students",
    subtitle: "CS, IT, ECE, Electrical & Tech Undergrads",
    icon: Laptop,
    desc: "Tailored for engineering students looking to master offensive security, vulnerability analysis (VAPT), and ethical hacking frameworks.",
    color: "from-cyan-500/20 to-sky-600/10",
    badge: "Engineering Track"
  },
  {
    title: "Working Professionals",
    subtitle: "IT Admins, Software Devs & SOC Analysts",
    icon: Briefcase,
    desc: "Designed for IT & software professionals aiming to upskill into cybersecurity roles, penetration testing, or CISO leadership.",
    color: "from-blue-500/20 to-indigo-600/10",
    badge: "Career Advancement"
  },
  {
    title: "Law Enforcement Personnel",
    subtitle: "Police Officers & Crime Branch Investigators",
    icon: ShieldAlert,
    desc: "Specialized training in mobile data extraction, electronic evidence chain of custody (Sec 65B), and digital crime scene triage.",
    color: "from-emerald-500/20 to-teal-600/10",
    badge: "Law Enforcement"
  },
  {
    title: "Government Officials",
    subtitle: "PSU IT Security Teams & FSL Analysts",
    icon: Building2,
    desc: "Capacity building programs for public sector enterprise IT officers, infrastructure guardians, and forensic lab specialists.",
    color: "from-purple-500/20 to-indigo-600/10",
    badge: "Govt Sector"
  },
  {
    title: "Faculty Members",
    subtitle: "Professors, Lecturers & Academic Researchers",
    icon: Users,
    desc: "Faculty Development Programs (FDP) to integrate contemporary cybersecurity, AI threats, and digital forensic tools into college curricula.",
    color: "from-amber-500/20 to-orange-600/10",
    badge: "FDP & Educators"
  }
];

const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Submit Application Form",
    subtitle: "Online Registration",
    icon: FileText,
    desc: "Fill out the online application form with your academic details, contact info, and program of interest."
  },
  {
    step: "02",
    title: "Counseling & Guidance Session",
    subtitle: "1-on-1 Career Advisory",
    icon: UserSquare,
    desc: "Attend a personalized session with our senior cyber mentors to align program selection with your career goals."
  },
  {
    step: "03",
    title: "Program Selection",
    subtitle: "Curriculum Customization",
    icon: CheckCircle2,
    desc: "Finalize your course track, choosing between EC-Council certifications, hands-on labs, or specialized forensic modules."
  },
  {
    step: "04",
    title: "Registration & Documentation",
    subtitle: "Verification & Seat Lock",
    icon: BookOpen,
    desc: "Submit identity verification documents, confirm prerequisites, and lock your lab workstation seat."
  },
  {
    step: "05",
    title: "Enrollment Confirmation",
    subtitle: "Onboarding & LMS Access",
    icon: Fingerprint,
    desc: "Receive official admission letter, student ID credentials, LMS portal access, and batch commencement schedule."
  }
];

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function AdmissionsFormContent() {
  const searchParams = useSearchParams();
  const courseParam = searchParams ? searchParams.get("course") : null;

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "Students (Graduation / Post Graduation)",
    program: courseParam || "CEH v13 - Certified Ethical Hacker",
    message: ""
  });

  useEffect(() => {
    if (courseParam) {
      setFormData(prev => ({ ...prev, program: courseParam }));
    }
  }, [courseParam]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      fullName: "",
      email: "",
      phone: "",
      category: "Students (Graduation / Post Graduation)",
      program: courseParam || "CEH v13 - Certified Ethical Hacker",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden pt-28 sm:pt-36 pb-32">
      {/* BACKGROUND GRAPHICS & HERO GLOW */}
      <div className="absolute top-0 left-0 right-0 h-[700px] z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero/hero1.png"
          alt="Admissions Hero Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-screen object-center filter brightness-110 contrast-125"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(2,6,23,0.1)_0%,_#020617_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
      </div>

      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] bg-[#0055FF]/5 rounded-full blur-[220px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] w-[50vw] h-[50vh] bg-[#38BDF8]/5 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16 sm:mb-24 max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-slate-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.15)] mb-6"
          >
            <Shield className="w-4 h-4 text-[#38BDF8] animate-pulse" />
            <span>ADMISSIONS 2026-2027 NOW OPEN</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Cyber Security Journey</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Applications are open for students, graduates, working professionals, and organizations seeking specialized training in cyber security and digital forensics.
          </motion.p>

          {/* DYNAMIC HIGHLIGHT BADGES */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-slate-300"
          >
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>100% Practical Lab Training</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-400" />
              <span>EC-Council Partner Training</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>1-on-1 Mentorship & Placement</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. ADMISSION PROCESS (INTERACTIVE 5-STEP STEPPER) */}
        {/* ========================================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> Structured Onboarding
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Process</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Our streamlined 5-step onboarding path ensures seamless registration, personalized counseling, and lab allocation.
            </p>
          </div>

          {/* STEPPER BUTTONS FOR MOBILE/DESKTOP */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {ADMISSION_STEPS.map((s, idx) => {
              const IconComp = s.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                    isActive
                      ? "bg-gradient-to-b from-[#0055FF]/20 to-slate-900 border-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.02]"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                      isActive
                        ? "bg-[#0055FF] text-white border-[#38BDF8]"
                        : "bg-slate-950 text-[#38BDF8] border-slate-800"
                    }`}>
                      {s.step}
                    </span>
                    <IconComp className={`w-5 h-5 ${isActive ? "text-[#38BDF8]" : "text-slate-500 group-hover:text-slate-300"}`} />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase tracking-wider mb-1 ${isActive ? "text-[#38BDF8]" : "text-slate-500"}`}>
                      {s.subtitle}
                    </h4>
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-[#38BDF8] transition-colors">
                      {s.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE STEP FEATURED DISPLAY CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/5 blur-3xl pointer-events-none" />
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-[#0055FF]/20 border border-[#38BDF8]/40 text-[#38BDF8] shrink-0">
                  {(() => {
                    const Icon = ADMISSION_STEPS[activeStep].icon;
                    return <Icon className="w-8 h-8" />;
                  })()}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-widest">STEP {ADMISSION_STEPS[activeStep].step} OF 05</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span className="text-xs text-slate-400 font-semibold">{ADMISSION_STEPS[activeStep].subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {ADMISSION_STEPS[activeStep].title}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                    {ADMISSION_STEPS[activeStep].desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    className="px-5 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-bold text-slate-300 hover:text-white transition-all"
                  >
                    Previous Step
                  </button>
                )}
                {activeStep < ADMISSION_STEPS.length - 1 ? (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="px-6 py-3 rounded-xl bg-[#0055FF] hover:bg-[#0044CC] text-xs font-bold text-white transition-all shadow-lg flex items-center gap-2 ml-auto"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href="#apply-form"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0055FF] text-xs font-bold text-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center gap-2 ml-auto"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. ELIGIBILITY CRITERIA GRID */}
        {/* ========================================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" /> Target Audience & Profiles
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Who Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">Eligible?</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Our industry-oriented training programs cater to diverse academic backgrounds, engineering tracks, working professionals, and government personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ELIGIBILITY_GROUPS.map((group, idx) => {
              const IconComp = group.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-slate-900/70 border border-slate-800/90 hover:border-[#38BDF8]/60 p-6 sm:p-8 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${group.color} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />
                  
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5 relative z-10">
                      <div className="p-3.5 rounded-2xl bg-[#0055FF]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-slate-950 text-[#38BDF8] border border-slate-800 uppercase">
                        {group.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {group.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#38BDF8] mb-3">
                      {group.subtitle}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                      {group.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-[#38BDF8] transition-colors">
                    <span>Eligible for Full Enrollment</span>
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 4. DYNAMIC APPLICATION FORM (ID: apply-form) */}
        {/* ========================================================================= */}
        <motion.section
          id="apply-form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto mb-24 scroll-mt-28"
        >
          <div className="bg-slate-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/5 blur-[120px] pointer-events-none" />

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-3">
                <FileText className="w-3.5 h-3.5" /> Online Enrollment Portal
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Start Your Application</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
                Submit your registration details to schedule a 1-on-1 counseling & guidance session with our academic team.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-950/90 border border-[#38BDF8]/40 rounded-2xl p-8 text-center space-y-4 my-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0055FF]/20 border border-[#38BDF8] text-[#38BDF8] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                    <CheckCircle2 className="w-9 h-9 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Application Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#38BDF8] font-bold">{formData.fullName}</span>. Your application for <span className="text-white font-semibold">{formData.program}</span> has been received. Our academic counselor will call you at <span className="text-white font-mono">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#38BDF8] text-xs font-bold text-white transition-all"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                        placeholder="+91 98904 24040"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Eligibility Category <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                      >
                        {ELIGIBILITY_GROUPS.map((g, idx) => (
                          <option key={idx} value={g.title} className="bg-slate-900 text-white">
                            {g.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Program of Interest <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                    >
                      <option value="Digital Forensics Internship" className="bg-slate-900">Digital Forensics Internship (3 to 6 Months)</option>
                      <option value="SOC Analyst Traineeship" className="bg-slate-900">SOC Analyst Traineeship (6 Months)</option>
                      <option value="Ethical Hacking & VAPT Internship" className="bg-slate-900">Ethical Hacking & VAPT Internship (3 to 6 Months)</option>
                      <option value="CEH v13 - Certified Ethical Hacker" className="bg-slate-900">Certified Ethical Hacker (CEHv13)</option>
                      <option value="CHFI - Computer Hacking Forensic Investigator" className="bg-slate-900">Computer Hacking Forensic Investigator (CHFI)</option>
                      <option value="CND - Certified Network Defender" className="bg-slate-900">Certified Network Defender (CND)</option>
                      <option value="CCISO - Chief Info Security Officer" className="bg-slate-900">Chief Info Security Officer (CCISO)</option>
                      <option value="Digital Forensic Toolbox Practical" className="bg-slate-900">Digital Forensic Toolbox Practical</option>
                      <option value="Forensic Document & Fingerprint Lab" className="bg-slate-900">Forensic Document & Fingerprint Lab</option>
                      <option value="Cyber-Savvy Networking Defender" className="bg-slate-900">Cyber-Savvy Networking Defender</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Additional Query or Prerequisites Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors resize-none"
                      placeholder="Mention any specific career goals, batch timing preferences, or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#0055FF] hover:bg-[#0044CC] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-[0_0_25px_rgba(0,85,255,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Admission Application</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 5. ADMISSIONS COUNSELING CONTACT BANNER */}
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
              Have Questions About Admission Eligibility?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Speak directly with our academic counselors for course syllabus guidance, fee structures, and batch availability.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919890424040"
                className="px-6 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#38BDF8] text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>Call Admissions Desk (+91 9890424040)</span>
              </a>
              <a
                href="mailto:info@skycyberforensics.in"
                className="px-6 py-3.5 rounded-2xl bg-[#0055FF] hover:bg-[#0044CC] text-white font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Admissions Officer</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

export default function AdmissionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#020617] pt-36 text-center text-slate-400">Loading Admissions Portal...</div>}>
      <AdmissionsFormContent />
    </Suspense>
  );
}
