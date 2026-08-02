"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Building2,
  Mail,
  Send,
  Check,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Users,
  Eye,
  Smartphone,
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

export default function SecurityAwarenessWorkshopPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationType: "Corporate Enterprise",
    targetAudienceSize: "50 - 200 Employees",
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
        organizationType: "Corporate Enterprise",
        targetAudienceSize: "50 - 200 Employees",
        message: ""
      });
    }, 1200);
  };

  const workshopModules = [
    "Understanding the Modern Cyber Threat Landscape (Ransomware, Phishing, BEC Fraud)",
    "Recognizing Phishing Attacks, Spoofed Emails, Malicious Links, and Attachment Vectors",
    "Password Hygiene, Multi-Factor Authentication (MFA), and Credential Protection",
    "Social Engineering Tactics (Vishing, Smishing, Baiting, Impersonation)",
    "Safe Remote & Hybrid Work Practices, Public Wi-Fi Security & VPN Usage",
    "Mobile Device Security, App Permissions, and Personal Privacy Controls",
    "Clean Desk Policy, Removable Media (USB) Risks, and Physical Workplace Security",
    "Data Protection, Confidentiality, and Incident Reporting Protocols"
  ];

  const practicalDemos = [
    "Live simulated spear-phishing attack demonstrations & link decoding",
    "Password cracking speed demonstration & password manager setup guide",
    "Fake Wi-Fi hotspot & Man-in-the-Middle (MitM) risk visualizer",
    "Mobile app malware permission analysis & privacy audit walk-through",
    "Interactive Q&A and organizational security awareness quiz"
  ];

  const targetOrganizations = [
    "Corporate Enterprises & MNCs",
    "Banking & Financial Institutions",
    "Government Departments & Municipal Corporations",
    "Educational Institutions, Colleges & Universities",
    "Healthcare & Hospital Administrative Staff",
    "Legal Firms & Accounting Practice Teams"
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
            alt="Security Awareness Programs Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-90 filter brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/75 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/workshops" className="hover:text-[#00d4ff] transition-colors">Workshops</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#00d4ff] font-medium">Security Awareness</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-6 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00d4ff]" /> Human Firewall & Employee Upskilling
            </motion.div>

            {/* Main Title */}
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Cyber Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38BDF8] to-white">Awareness Programs</span>
            </motion.h1>

            {/* Overview */}
            <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
              Human error remains one of the leading causes of security incidents worldwide. Phishing attacks, social engineering, weak passwords, and unsafe online practices expose organizations to severe operational risk. At <strong className="text-white font-semibold">Skyline Centre of Excellence</strong>, we deliver engaging, real-world Security Awareness Workshops designed to transform your workforce into a strong human defense line.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#request-form"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Schedule Workshop for Organization <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#modules"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-[#00d4ff]/40 transition-all flex items-center gap-2"
              >
                Explore Workshop Modules
              </a>
            </motion.div>

          </motion.div>

          {/* Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Interactive</p>
                <p className="text-xs text-slate-400">Live Demos & Simulations</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Human Firewall</p>
                <p className="text-xs text-slate-400">Phishing Prevention</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Certification</p>
                <p className="text-xs text-slate-400">Completion Badges</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Customized</p>
                <p className="text-xs text-slate-400">For Corporates & Colleges</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Workshop <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-white">Modules</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Practical topics tailored to educate employees and individuals on recognizing threats and adopting safe digital habits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workshopModules.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -3 }} className="p-5 rounded-2xl bg-[#020617] border border-white/10 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00d4ff]" />
                </div>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET ORGANIZATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Target <span className="text-[#00d4ff]">Organizations</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {targetOrganizations.map((org, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-slate-300 text-xs font-semibold">
                  <Building2 className="w-4 h-4 text-[#00d4ff] shrink-0" />
                  <span>{org}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="request-form" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/10 relative overflow-hidden">
            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs font-bold text-[#00d4ff] uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5" /> Workshop Request
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Schedule Security Awareness Workshop
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Request a custom awareness session for your company, college, or organization.
              </p>
            </div>

            {formStatus === "success" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 rounded-2xl bg-[#00d4ff]/10 text-center space-y-4">
                <Check className="w-12 h-12 text-[#00d4ff] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Workshop Request Received</h3>
                <p className="text-slate-300 text-sm">Our coordinator will connect with you shortly with proposal details.</p>
                <button onClick={() => setFormStatus("idle")} className="px-6 py-2 rounded-xl bg-white/10 text-white text-xs font-bold">Submit Another Request</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" required placeholder="e.g. S. M. Mane" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Email Address *</label>
                    <input type="email" required placeholder="e.g. mane@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Organization Type</label>
                    <select value={formData.organizationType} onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white text-sm">
                      <option value="Corporate Enterprise">Corporate Enterprise / MNC</option>
                      <option value="College / University">College / University / School</option>
                      <option value="Bank / Financial Institution">Bank / Financial Institution</option>
                      <option value="Government Department">Government Department / NGO</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Message / Preferred Dates</label>
                  <textarea rows={4} placeholder="Mention any specific topics, audience size, or date preferences..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm" />
                </div>

                <button type="submit" disabled={formStatus === "submitting"} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#0055FF] text-slate-950 font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.3)] flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Submit Workshop Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
