"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CyberRevealingMatrixBg() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [activeHex, setActiveHex] = useState("0x534B594C494E45");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Fast decryption hex code simulation
    const hexInterval = setInterval(() => {
      const hex = Math.floor(Math.random() * 0xffffffffffff).toString(16).padStart(12, '0').toUpperCase();
      setActiveHex(`0x${hex}`);
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(hexInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#020617] pointer-events-none font-mono">
      {/* 1. Base Layer: Dark Cyber Security Hexagonal & Square Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cyberMatrixGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="60" cy="60" r="1.5" fill="#0055FF" opacity="0.6" />
            <circle cx="30" cy="30" r="1" fill="#38BDF8" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cyberMatrixGrid)" />
      </svg>

      {/* 2. Background Data Matrix Stream (Memory Dumps & Cyber Traces) */}
      <div className="absolute inset-0 opacity-[0.04] flex flex-wrap gap-x-10 gap-y-3 p-8 text-[#38BDF8] text-xs leading-relaxed break-all pointer-events-none">
        {Array.from({ length: 70 }).map((_, i) => {
          const hex = ((i * 987654321) % 0xffffffff).toString(16).padStart(8, '0').toUpperCase();
          return (
            <span key={i} className="font-mono">
              [SEC_NODE_{i}] 0x{hex} SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </span>
          );
        })}
      </div>

      {/* 3. Dynamic "Revealing" Interactive Light Lens Spotlight */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        animate={{
          x: mousePos.x - 225,
          y: mousePos.y - 225,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      >
        {/* Outer Glowing Light Aperture */}
        <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#0055FF]/25 via-[#38BDF8]/20 to-sky-400/10 blur-[60px]" />
      </motion.div>

      {/* 4. Revealing Cyber Forensics Scanner Reticle Lens (Tracks Cursor) */}
      <motion.div
        className="absolute z-20 pointer-events-none hidden md:flex items-center justify-center"
        animate={{
          x: mousePos.x - 140,
          y: mousePos.y - 140,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 170, mass: 0.7 }}
      >
        {/* Outer Rotating HUD Target Bracket */}
        <div className="w-[280px] h-[280px] rounded-full border border-[#38BDF8]/40 relative animate-[spin_10s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-1.5 h-3 bg-[#38BDF8] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38BDF8]" />
          <div className="absolute bottom-0 left-1/2 w-1.5 h-3 bg-[#38BDF8] -translate-x-1/2 translate-y-1/2 shadow-[0_0_10px_#38BDF8]" />
          <div className="absolute top-1/2 left-0 w-3 h-1.5 bg-[#38BDF8] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38BDF8]" />
          <div className="absolute top-1/2 right-0 w-3 h-1.5 bg-[#38BDF8] translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38BDF8]" />
        </div>

        {/* Inner Dashed Security Ring */}
        <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-[#0055FF]/60 animate-[spin_16s_linear_infinite_reverse]" />

        {/* Center Target Crosshairs */}
        <div className="absolute w-[30px] h-[30px]">
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#38BDF8]/60 -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#38BDF8]/60 -translate-y-1/2" />
        </div>

        {/* Dynamic Telemetry Revealer Data Badge */}
        <div className="absolute bottom-4 flex flex-col items-center">
          <div className="text-[9px] text-[#38BDF8] tracking-[0.2em] font-bold mb-1 bg-slate-950/90 px-2 py-0.5 rounded border border-[#38BDF8]/30 backdrop-blur-md shadow-md">
            CYBER_REVEAL_SCANNER
          </div>
          <div className="text-[11px] text-white tracking-widest font-mono bg-[#0055FF]/30 px-3 py-1 rounded border border-[#38BDF8]/50 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.4)]">
            {activeHex}
          </div>
        </div>
      </motion.div>

      {/* 5. Static Ambient Spotlight Lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#38BDF8]/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0055FF]/10 blur-[150px] rounded-full" />
    </div>
  );
}
