"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SocRadarBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSignal, setActiveSignal] = useState("IP 192.168.1.105 [SECURE]");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const signals = [
      "IP 192.168.1.105 [SOC_SECURED]",
      "LAT: 18.5204, LON: 73.8567 [NODE_PUNE]",
      "SHA256: 8f9b...e4a1 [EVIDENCE_VERIFIED]",
      "THREAT_VECTOR: NEUTRALIZED [0x4141]",
      "SYSTEM_HYGIENE: 100% [ZERO_TRUST]"
    ];

    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % signals.length;
      setActiveSignal(signals[idx]);
    }, 2500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617] pointer-events-none font-mono">
      {/* 1. Cyber Grid Mesh Background */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="socGrid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" />
            <circle cx="64" cy="64" r="1.5" fill="#0055FF" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#socGrid)" />
      </svg>

      {/* 2. Rotating SOC Radar Sweep Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] pointer-events-none opacity-20">
        {/* Radar Range Concentric Rings */}
        <div className="absolute inset-0 rounded-full border border-[#38BDF8]/40" />
        <div className="absolute inset-[15%] rounded-full border border-dashed border-[#0055FF]/40 animate-[spin_40s_linear_infinite]" />
        <div className="absolute inset-[30%] rounded-full border border-[#38BDF8]/30" />
        <div className="absolute inset-[45%] rounded-full border border-dashed border-[#60A5FA]/30 animate-[spin_25s_linear_infinite_reverse]" />

        {/* Axis Crosshairs */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-[#38BDF8]/30 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#38BDF8]/30 -translate-y-1/2" />

        {/* 360 Degree Rotating Radar Sweeping Cone Beam */}
        <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite] origin-center">
          <div className="w-1/2 h-1/2 bg-gradient-to-br from-[#38BDF8]/20 via-[#0055FF]/5 to-transparent rounded-tl-full" />
        </div>
      </div>

      {/* 3. Floating SOC Threat Nodes & Beacons */}
      {[
        { top: "25%", left: "15%", label: "NODE_01 [SOC_HUB]" },
        { top: "35%", right: "18%", label: "FIREWALL_ACTIVE" },
        { top: "65%", left: "22%", label: "FORENSIC_LAB_ONLINE" },
        { top: "75%", right: "25%", label: "ZERO_TRUST_ENFORCED" },
      ].map((node, i) => (
        <div key={i} className="absolute hidden sm:flex items-center gap-2 text-[10px] text-sky-400 opacity-40" style={{ top: node.top, left: node.left, right: node.right }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
          </span>
          <span className="bg-slate-950/80 px-2 py-0.5 rounded border border-[#38BDF8]/30 backdrop-blur-md">
            {node.label}
          </span>
        </div>
      ))}

      {/* 4. Interactive Scanner Spotlight Following Cursor */}
      <motion.div
        className="absolute z-10"
        animate={{
          x: mousePosition.x - 180,
          y: mousePosition.y - 180,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      >
        <div className="w-[360px] h-[360px] rounded-full bg-[#0055FF]/10 blur-[70px]" />
      </motion.div>

      {/* 5. Forensics Scanner Lens Reticle Following Cursor */}
      <motion.div
        className="absolute z-20 hidden md:flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - 120,
          y: mousePosition.y - 120,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 160, mass: 0.7 }}
      >
        <div className="w-[240px] h-[240px] rounded-full border border-[#38BDF8]/30 relative animate-[spin_12s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-1 h-2.5 bg-[#38BDF8] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#38BDF8]" />
          <div className="absolute bottom-0 left-1/2 w-1 h-2.5 bg-[#38BDF8] -translate-x-1/2 translate-y-1/2 shadow-[0_0_8px_#38BDF8]" />
          <div className="absolute top-1/2 left-0 w-2.5 h-1 bg-[#38BDF8] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#38BDF8]" />
          <div className="absolute top-1/2 right-0 w-2.5 h-1 bg-[#38BDF8] translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#38BDF8]" />
        </div>
        <div className="absolute text-[10px] text-[#38BDF8] bg-slate-950/80 px-2 py-0.5 rounded border border-[#38BDF8]/40 backdrop-blur-md shadow-lg">
          {activeSignal}
        </div>
      </motion.div>

      {/* 6. Static Ambient Soft Spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#38BDF8]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0055FF]/10 blur-[140px] rounded-full" />
    </div>
  );
}
