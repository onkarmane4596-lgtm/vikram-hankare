"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function InteractiveSecurityBg() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scanData, setScanData] = useState("0x00000000");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Simulate rapidly changing hex data for a "decryption" effect
    const interval = setInterval(() => {
      const hex = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0').toUpperCase();
      setScanData(`0x${hex}`);
    }, 80);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617] font-mono pointer-events-none">
      {/* Abstract Security Hex/Nodes Network */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="60" cy="60" r="1.5" fill="#2563eb" />
            <circle cx="30" cy="30" r="1" fill="#ef4444" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Background Data Streams (Forensics Dumps) */}
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden flex flex-wrap gap-x-8 gap-y-2 p-8 text-brand-blue text-sm leading-loose break-all">
        {Array.from({ length: 60 }).map((_, i) => {
          const delay = (i % 4) * 0.8;
          const duration = 2 + (i % 3);
          const hexPart1 = ((i * 1234567) % 0xffffffff).toString(16).padStart(8, '0').toUpperCase();
          const hexPart2 = ((i * 7654321) % 0xffff).toString(16).padStart(4, '0').toUpperCase();
          const hexPart3 = ((i * 9876543) % 0xfff).toString(16).padStart(3, '0').toUpperCase();
          const hexPart4 = ((i * 3456789) % 0xffff).toString(16).padStart(4, '0').toUpperCase();
          const hexPart5 = ((i * 8765432) % 0xffffffffffff).toString(16).padStart(12, '0').toUpperCase();
          return (
            <span key={i} className="animate-pulse" style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}>
              {hexPart1}-{hexPart2}-4{hexPart3}-{hexPart4}-{hexPart5}
            </span>
          );
        })}
      </div>

      {/* Dynamic Cursor Spotlight (The "Scanner Lens") */}
      <motion.div
        className="absolute z-10"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      >
        <div className="w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[60px]" />
      </motion.div>

      {/* Forensics Decryptor Ring following cursor */}
      <motion.div
        className="absolute z-20 flex items-center justify-center"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 150, mass: 0.8 }}
      >
        {/* Outer rotating measurement ring */}
        <div className="w-[300px] h-[300px] rounded-full border border-brand-accent/20 relative animate-[spin_8s_linear_infinite]">
           <div className="absolute top-0 left-1/2 w-1 h-3 bg-brand-accent -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00E5FF]" />
           <div className="absolute bottom-0 left-1/2 w-1 h-3 bg-brand-accent -translate-x-1/2 translate-y-1/2 shadow-[0_0_10px_#00E5FF]" />
           <div className="absolute top-1/2 left-0 w-3 h-1 bg-brand-accent -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00E5FF]" />
           <div className="absolute top-1/2 right-0 w-3 h-1 bg-brand-accent translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00E5FF]" />
        </div>
        
        {/* Inner dashed ring */}
        <div className="absolute w-[220px] h-[220px] rounded-full border-[2px] border-dashed border-brand-blue/30 animate-[spin_12s_linear_infinite_reverse]" />
        
        {/* Central target crosshair */}
        <div className="absolute w-[40px] h-[40px]">
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-brand-accent/40 -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-accent/40 -translate-y-1/2" />
        </div>

        {/* Dynamic Forensics Data */}
        <div className="absolute flex flex-col items-center">
          <div className="text-[9px] text-brand-accent tracking-[0.2em] font-semibold mb-1 bg-brand-dark/80 px-2 py-0.5 rounded backdrop-blur-md border border-brand-accent/20">
             FORENSIC_SCAN
          </div>
          <div className="text-[13px] text-white tracking-widest font-mono bg-brand-blue/20 px-3 py-1 rounded border border-brand-blue/50 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.3)]">
             {scanData}
          </div>
        </div>
      </motion.div>

      {/* Static ambient gradients for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-dark/80 blur-[120px] rounded-full" />
    </div>
  );
}
