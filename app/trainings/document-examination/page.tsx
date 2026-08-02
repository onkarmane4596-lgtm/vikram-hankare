"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FileText,
  Search,
  CheckCircle2,
  Lock,
  Building2,
  Mail,
  Send,
  Check,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Microscope,
  FileCheck2,
  UserCheck
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function DocumentExaminationTrainingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    attendeeCategory: "Student / Aspirant",
    preferredMode: "Hands-on Lab (On-Site)",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        attendeeCategory: "Student / Aspirant",
        preferredMode: "Hands-on Lab (On-Site)",
        message: ""
      });
    }, 1200);
  };

  const whatYouWillLearn = [
    "Fundamentals of Forensic Document Examination",
    "Scientific Principles of Handwriting Identification & Stroke Dynamics",
    "Signature Examination, Verification, and Natural Variation",
    "Detection of Forged and Altered Documents (Simulated, Traced, Freehand)",
    "Ink Chemistry, Paper Substrate, and Printing Process Examination",
    "Examination of Erasures (Mechanical & Chemical), Additions, and Alterations",
    "Counterfeit Document Detection (Currency, Passports, ID Cards)",
    "Examination of Cheques, Contracts, Wills, Certificates, and Deeds",
    "Digital Document Authentication & Metadata Verification",
    "Evidence Preservation, Chain of Custody, and Magnification Tools",
    "Preparation of Professional Forensic Document Examination Reports",
    "Courtroom Procedures, Expert Opinions & Section 45 Testimony"
  ];

  const labExperience = [
    "Handwriting comparison and stroke characteristic identification exercises",
    "Signature verification and freehand/traced forgery detection under stereomicroscopes",
    "Examination of altered, erased, and counterfeit financial documents",
    "Spectral ink and paper analysis demonstrations using Video Spectral Comparators (VSC)",
    "High-magnification microscopic examination of printing processes and security features",
    "Detection of mechanical overwriting, page substitution, and document tampering",
    "Case-based real-world document examination exercises",
    "Drafting court-admissible forensic document examination reports"
  ];

  const careerOpportunities = [
    { title: "Forensic Science Laboratories", desc: "Government & Private Document Units" },
    { title: "Police & Law Enforcement", desc: "Economic Offences Wing (EOW) Units" },
    { title: "Government Forensic Depts", desc: "State & Central Bureau Examiners" },
    { title: "Banking & Financial Institutions", desc: "Cheque & Loan Audit Teams" },
    { title: "Insurance Companies", desc: "Claims & Policy Fraud Verification" },
    { title: "Corporate Compliance Teams", desc: "Contract & Risk Governance Units" },
    { title: "Private Forensic Consultancies", desc: "Independent Questioned Document Experts" },
    { title: "Legal & Judicial Support", desc: "Law Firm Technical Consultants" }
  ];

  const targetAudience = [
    "Students of Forensic Science and Criminology",
    "Police and Law Enforcement Personnel",
    "Document Examiners and Forensic Investigators",
    "Banking, Finance, and Insurance Professionals",
    "Legal Professionals, Advocates, and Bar Members",
    "Corporate Compliance and Fraud Investigation Teams",
    "Government Revenue & Customs Officials",
    "Anyone interested in forensic document examination and fraud detection"
  ];

  const whyChoosePillars = [
    {
      title: "Hands-on Laboratory Training",
      desc: "Learn through practical exercises, live instrument demonstrations, and real-world case studies that develop professional document examination skills.",
      icon: Microscope
    },
    {
      title: "Expert Faculty",
      desc: "Train under experienced forensic document examiners, investigators, and industry professionals with extensive practical expertise.",
      icon: GraduationCap
    },
    {
      title: "Industry-Aligned Curriculum",
      desc: "The program follows internationally accepted forensic document examination methodologies and current judicial standards.",
      icon: BookOpen
    },
    {
      title: "Career-Oriented Learning",
      desc: "Develop practical, job-ready skills through laboratory-based training, forensic case analysis, and professional report writing.",
      icon: Briefcase
    },
    {
      title: "Professional Certification",
      desc: "Participants receive a certificate from Skyline Centre of Excellence in Cyber Security & Forensics upon successful completion of the program.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#00d4ff]/30 selection:text-white pb-24 overflow-x-hidden relative">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#0055FF]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-[#00d4ff]/5 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-white/[0.06]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/design/5.png"
            alt="Forensic Document Examination Training Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/75 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/trainings" className="hover:text-[#00d4ff] transition-colors">Trainings</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">Forensic Document Examination</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <FileText className="w-3.5 h-3.5 text-[#00d4ff]" /> Hands-on Forensic Training Course
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Forensic Document Examination: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Hands-on Analysis</span>
            </motion.h1>

            {/* Course Overview */}
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              Documents are among the most critical forms of evidence in criminal investigations, civil disputes, financial fraud, corporate inquiries, and legal proceedings. The <strong className="text-white font-semibold">Forensic Document Examination: Hands-on Analysis</strong> program offered by <strong className="text-[#00d4ff]">Skyline Centre of Excellence in Cyber Security &amp; Forensics</strong> provides participants with comprehensive theoretical knowledge and practical laboratory training in the scientific examination and authentication of questioned documents, forged signatures, altered contracts, and fraudulent records.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#enroll-form"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Enroll in This Course <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#curriculum"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-[#00d4ff]/40 transition-all flex items-center gap-2"
              >
                View What You Will Learn
              </a>
            </motion.div>

          </motion.div>

          {/* Quick Course Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Microscope className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Microscopic Lab</p>
                <p className="text-xs text-slate-400">VSC & Optical Spectral Analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Signature Auditing</p>
                <p className="text-xs text-slate-400">Forgery & Alteration Detection</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Certification</p>
                <p className="text-xs text-slate-400">Skyline Professional Credential</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Career Pathways</p>
                <p className="text-xs text-slate-400">Banks, Courts & Forensic Labs</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What You Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Learn</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Industry-aligned curriculum covering handwriting dynamics, signature verification, ink/paper chemistry, and court-admissible reporting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-[#020617] border border-white/10 hover:border-[#00d4ff]/30 transition-all flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00d4ff]" />
                </div>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PRACTICAL LABORATORY EXPERIENCE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
              Hands-On Exercises
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Practical Laboratory <span className="text-slate-400">Experience</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Work with stereo-zoom microscopes, VSC instrumentation, digital comparators, and real-world questioned document cases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {labExperience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] font-bold text-xs flex items-center justify-center shrink-0 border border-[#00d4ff]/20">
                  0{idx + 1}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed font-medium pt-1">
                  {exp}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CAREER OPPORTUNITIES & WHO SHOULD ATTEND */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Career Opportunities */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5" /> Career Pathways
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Career <span className="text-[#00d4ff]">Opportunities</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {careerOpportunities.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="text-white font-bold text-sm mb-1">{c.title}</h4>
                  <p className="text-slate-400 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Who Should Attend */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-4">
              <UserCheck className="w-3.5 h-3.5" /> Target Participants
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Who Should <span className="text-[#00d4ff]">Attend?</span>
            </h3>
            <div className="space-y-3">
              {targetAudience.map((target, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-slate-300 text-xs font-medium">
                  <Check className="w-4 h-4 text-[#00d4ff] shrink-0 stroke-[3]" />
                  <span>{target}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* WHY CHOOSE SKYLINE (5 PILLARS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Skyline Training</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Practical-first laboratory approach, experienced document examiners, and professional certification.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00d4ff]/40 group-hover:bg-[#00d4ff]/10 transition-colors">
                    <p.icon className="w-7 h-7 text-slate-300 group-hover:text-[#00d4ff] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ENROLLMENT INQUIRY FORM */}
      <section id="enroll-form" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />
            
            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs font-bold text-[#00d4ff] uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5" /> Course Registration Inquiry
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Enroll in Forensic Document Examination
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Submit your registration request to secure your seat for the upcoming laboratory batch.
              </p>
            </div>

            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#00d4ff] text-slate-950 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enrollment Inquiry Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for registering! Our course coordinator will review your application and send batch schedule details shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                >
                  Submit Another Registration
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Deshmukh"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Applicant Category
                    </label>
                    <select
                      value={formData.attendeeCategory}
                      onChange={(e) => setFormData({ ...formData, attendeeCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                    >
                      <option value="Student / Aspirant">Student / Forensic Aspirant</option>
                      <option value="Banking & Insurance Professional">Banking / Insurance Auditor</option>
                      <option value="Legal Professional / Advocate">Legal Professional / Advocate</option>
                      <option value="Police / Law Enforcement">Police / EOW Law Enforcement</option>
                      <option value="Corporate Compliance Officer">Corporate Compliance Officer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Preferred Mode of Learning
                  </label>
                  <select
                    value={formData.preferredMode}
                    onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#00d4ff] text-sm transition-all"
                  >
                    <option value="Hands-on Lab (On-Site)">Hands-on Practical Lab (On-Site at Skyline CoE)</option>
                    <option value="Hybrid / Virtual Lab">Hybrid (Interactive Virtual + Practical Lab)</option>
                    <option value="Corporate / Customized Batch">Customized Group Batch (For Organizations)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Special Academic / Career Objectives (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mention any specific learning expectations, lab requirements, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] text-sm transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <span>Processing Enrollment...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Course Registration
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#00d4ff]" /> Official certification issued upon completion of laboratory practical assessment.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
