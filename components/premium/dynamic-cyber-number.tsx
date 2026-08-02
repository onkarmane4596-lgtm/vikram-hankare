"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Shield, Terminal, Zap, Crosshair, Lock, Unlock, Cpu } from "lucide-react";

interface DynamicCyberNumberProps {
  number: string; // "01", "02", "03"
  phaseTag: string; // e.g. "LEVEL_01 // CORE_INIT"
  isCardHovered?: boolean;
}

export const DynamicCyberNumber: React.FC<DynamicCyberNumberProps> = ({
  number,
  phaseTag,
  isCardHovered = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Mouse position state for 3D Parallax Tilt & Reticle Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 3D rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const reticleX = useTransform(mouseXSpring, [-0.5, 0.5], ["-30%", "30%"]);
  const reticleY = useTransform(mouseYSpring, [-0.5, 0.5], ["-30%", "30%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full mb-6 select-none cursor-pointer perspective-1000"
    >
      {/* 3D PARALLAX CONTAINER */}
      <motion.div
        style={{
          rotateX: isCardHovered ? rotateX : "0deg",
          rotateY: isCardHovered ? rotateY : "0deg",
          transformStyle: "preserve-3d",
        }}
        className="relative bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-2xl transition-all duration-300 shadow-2xl overflow-hidden group-hover:border-sky-500/50 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
      >
        {/* Holographic Mesh Grid Lines Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80d_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80d_1px,transparent_1px)] bg-[size:12px_12px] opacity-40 pointer-events-none" />

        {/* Ambient Radial Glow Spot */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            isCardHovered
              ? "bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15)_0%,_transparent_70%)] opacity-100"
              : "opacity-0"
          }`}
        />

        {/* Radar Target Scope Sweeper (Rotates on hover) */}
        <div className="absolute top-2 right-2 w-16 h-16 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity">
          <div
            className={`w-full h-full rounded-full border border-sky-400/40 border-dashed ${
              isCardHovered ? "animate-[spin_4s_linear_infinite]" : ""
            }`}
          />
        </div>

        {/* Mouse Tracking Interactive Crosshair Laser Reticle */}
        {isCardHovered && (
          <motion.div
            style={{ x: reticleX, y: reticleY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-none z-20 flex items-center justify-center"
          >
            <Crosshair className="w-8 h-8 text-cyan-400/70 animate-pulse" />
            <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38BDF8]" />
          </motion.div>
        )}

        <div className="relative z-10 flex items-center justify-between gap-4">
          {/* LEFT SIDE: Big 3D Stamped Vault Number */}
          <div className="flex items-center gap-3" style={{ transform: "translateZ(30px)" }}>
            {/* Number Box with Neon Glass Framing */}
            <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700/60 shadow-inner group-hover:border-sky-400/70 transition-all duration-300">
              {/* Corner Tech Reticle Markers */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-sky-400" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-sky-400" />
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-sky-400" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-sky-400" />

              {/* Glowing Digit */}
              <span
                className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tighter transition-all duration-300 ${
                  isCardHovered
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 drop-shadow-[0_0_15px_rgba(56,189,248,0.9)] scale-110"
                    : "text-slate-300"
                }`}
              >
                {number}
              </span>
            </div>

            {/* Stage Info & Live Status Pill */}
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isCardHovered
                      ? "bg-emerald-400 animate-ping shadow-[0_0_8px_#10B981]"
                      : "bg-slate-600"
                  }`}
                />
                <span
                  className={`text-[11px] font-mono font-bold tracking-wider uppercase ${
                    isCardHovered ? "text-sky-400" : "text-slate-400"
                  }`}
                >
                  {phaseTag}
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2">
                <Cpu className="w-3 h-3 text-sky-400" />
                <span>SECURITY_LEVEL_0{number[1] || number}</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Vault Lock Toggle */}
          <div style={{ transform: "translateZ(20px)" }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsUnlocked(!isUnlocked);
              }}
              title="Click to inspect security clearance state"
              className={`p-2.5 rounded-xl border font-mono text-xs flex items-center gap-1.5 transition-all ${
                isUnlocked || isCardHovered
                  ? "bg-sky-500/10 border-sky-400/50 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                  : "bg-slate-900 border-slate-800 text-slate-500"
              }`}
            >
              {isUnlocked ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-bold hidden sm:inline">UNLOCKED</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-[10px] text-slate-400 hidden sm:inline">VERIFIED</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Animated Cyber Circuit Line at Bottom of Number Badge */}
        <div className="mt-3 relative w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isCardHovered ? "100%" : "0%" }}
            transition={{
              repeat: isCardHovered ? Infinity : 0,
              duration: 1.8,
              ease: "linear",
            }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_10px_#38BDF8]"
          />
        </div>
      </motion.div>
    </div>
  );
};
