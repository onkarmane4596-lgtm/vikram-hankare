"use client";

import { motion, Variants } from "framer-motion";
import {
  Fingerprint,
  FileText,
  Terminal,
  Zap,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Award,
  Microscope,
  CheckCircle2,
  Users,
  Briefcase
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

export default function TrainingsHubPage() {
  const trainingCourses = [
    {
      id: "fingerprint",
      title: "Fingerprint Evidence Lab: From Latent to Matches",
      href: "/trainings/fingerprint",
      icon: Fingerprint,
      badge: "Hands-on Latent Print Lab",
      desc: "A comprehensive, hands-on training program in fingerprint detection, powder/chemical development, macro-photography, friction ridge comparison, and ACE-V scientific methodology.",
      features: [
        "Patent, Plastic & Latent Print Development",
        "Cyanoacrylate & Ninhydrin Chemical Fuming",
        "ACE-V Scientific Comparison Protocol",
        "Court-Admissible Sec 45 Report Preparation"
      ]
    },
    {
      id: "document-examination",
      title: "Forensic Document Examination: Hands-on Analysis",
      href: "/trainings/document-examination",
      icon: FileText,
      badge: "Questioned Document Lab",
      desc: "Practical laboratory training in examining questioned documents, verifying signatures, detecting forged contracts, and analyzing ink/paper spectral characteristics under VSC microscopes.",
      features: [
        "Handwriting & Signature Forgery Detection",
        "Mechanical & Chemical Erasure Auditing",
        "Counterfeit Currency & Passport Inspection",
        "VSC Optical Spectral Substrate Analysis"
      ]
    },
    {
      id: "digital-toolbox",
      title: "Digital Forensic Toolbox: Hands-on Tools & Techniques",
      href: "/trainings/digital-toolbox",
      icon: Terminal,
      badge: "Hands-on DFIR Tools",
      desc: "An intensive practical training course introducing learners to write-blocker disk acquisition, volatile RAM carving, mobile device extractions, and timeline log analysis using FTK & Autopsy.",
      features: [
        "Write-Blocked Bit-Stream Disk Imaging",
        "Volatile Memory (RAM) Process Carving",
        "Windows & Linux Forensic Artifact Triage",
        "Mobile Device Backup & DB Extractions"
      ]
    },
    {
      id: "atc-practical",
      title: "ATC-Friendly Practical Training Programs",
      href: "/trainings/atc-practical",
      icon: Zap,
      badge: "Cert-Aligned Practical Programs",
      desc: "Intensive hands-on training complementing global certification pathways (CEH, CHFI, OSCP) with CTF challenges, red/blue team simulations, SOC monitoring, and vulnerability assessments.",
      features: [
        "Ethical Hacking & Web App Pen Testing",
        "SOC Fundamentals & SIEM Log Monitoring",
        "Real-World CTF & Cyber Range Challenges",
        "Incident Response & Threat Hunting Playbooks"
      ]
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
            alt="Hands-on Forensic Trainings Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/75 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">Hands-on Trainings</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <Terminal className="w-3.5 h-3.5 text-[#00d4ff]" /> Skyline Hands-on Laboratory Programs
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Hands-on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Forensic & Cyber Trainings</span>
            </motion.h1>

            {/* Introductory Text */}
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we bridge the gap between academic theory and operational excellence. Our practical training programs feature state-of-the-art laboratory instrumentation, simulated crime scene cases, CTF cyber ranges, and expert-led mentorship to prepare you for real-world investigative careers.
            </motion.p>

          </motion.div>

          {/* Quick Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Microscope className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">100% Practical Labs</p>
                <p className="text-xs text-slate-400">Chemical, Optical & Digital</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Recognized Credentials</p>
                <p className="text-xs text-slate-400">Certificates of Merit</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Expert Mentors</p>
                <p className="text-xs text-slate-400">FSL Scientists & CISOs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Job-Ready Skills</p>
                <p className="text-xs text-slate-400">Police, DFIR & Corporate</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* TRAINING COURSES GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Programs</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Select a specialized hands-on course below to view complete curriculum, laboratory experience details, and enrollment options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#020617] to-[#040d21] border border-white/10 hover:border-[#00d4ff]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/5 blur-3xl rounded-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff] group-hover:text-slate-950 transition-colors">
                      <course.icon className="w-7 h-7 text-[#00d4ff] group-hover:text-slate-950" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {course.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Certification Included</span>
                  <Link
                    href={course.href}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-xs shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:scale-[1.03] transition-all flex items-center gap-1.5"
                  >
                    View Course Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
