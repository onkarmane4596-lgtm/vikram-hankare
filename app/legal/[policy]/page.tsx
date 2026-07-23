"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Shield } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const policyContent: Record<string, { title: string, content: string }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    content: "At Skyline Cyber Security Solutions & Forensic Consultancy Services, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or enroll in our programs. We collect personal information such as your name, email address, and phone number only when you voluntarily submit it to us. We use this information strictly for admission processing, counseling, and sending you relevant updates about our courses. We do not sell or share your personal data with third parties without your explicit consent, except as required by law."
  },
  "terms": {
    title: "Terms & Conditions",
    content: "By accessing the Skyline Cyber Security Solutions website, you agree to be bound by these Terms and Conditions. All content, materials, and training curricula provided are the intellectual property of Skyline or its partners (like EC-Council). Unauthorized distribution, copying, or sharing of our proprietary materials is strictly prohibited. We reserve the right to modify or terminate any program, course syllabus, or fee structure without prior notice. Students are expected to maintain strict ethical guidelines; any misuse of ethical hacking skills taught at our institute for malicious purposes will result in immediate termination."
  },
  "refund-policy": {
    title: "Refund Policy",
    content: "Our primary goal is to deliver high-quality cybersecurity education. However, if you are not satisfied or circumstances change, our refund policy applies. A full refund (minus administrative fees) will be granted if you cancel your enrollment within 7 days prior to the start of the batch. No refunds will be issued once the batch has commenced or if a student is expelled due to a violation of our code of conduct. For EC-Council global certification exam vouchers, fees are strictly non-refundable once the voucher has been assigned to the student."
  },
  "disclaimer": {
    title: "Disclaimer",
    content: "The information provided on this website is for educational and informational purposes only. Skyline Cyber Security Solutions teaches offensive security concepts strictly for defensive purposes and ethical hacking. We hold no liability for how students apply this knowledge outside of our authorized training environments. Skyline is currently in the process of proposing/finalizing our Authorized Training Center (ATC) status with EC-Council; all logos and trademarks belong to their respective owners."
  }
};

export default function LegalPage() {
  const params = useParams();
  const policyParam = Array.isArray(params?.policy) ? params.policy[0] : params?.policy;
  
  // Default to privacy policy if route not found
  const policyKey = (policyParam && policyContent[policyParam]) ? policyParam : "privacy-policy";
  const { title, content } = policyContent[policyKey];

  return (
    <div className="min-h-screen bg-[#0A1F44] text-slate-300 font-sans selection:bg-[#00E5FF]/30 selection:text-white pt-32 pb-20 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-[#00E5FF] tracking-widest uppercase mb-6">
            <Shield className="w-4 h-4" /> Legal Information
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white">
            {title}
          </motion.h1>
        </motion.div>

        {/* Content */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-[#0D2B60] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl leading-relaxed text-slate-300">
           {content.split('. ').map((sentence, i) => (
             <p key={i} className="mb-4">{sentence}.</p>
           ))}
           <p className="mt-8 text-sm text-slate-500">Last updated: July 2026</p>
        </motion.div>

      </div>
    </div>
  );
}
