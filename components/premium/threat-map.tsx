"use client";

import { motion } from "framer-motion";

export function ThreatMap() {
  return (
    <div className="relative w-full aspect-video bg-brand-card/50 rounded-3xl border border-brand-border overflow-hidden shadow-2xl backdrop-blur-xl">
      <div className="absolute inset-0 bg-noise opacity-50" />
      
      {/* Map Background Data-Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
        <defs>
          <linearGradient id="attackLineBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Professional clean connection lines */}
        <path d="M 200 150 Q 400 50 600 200 T 800 100" fill="none" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.1" />
        <path d="M 300 300 Q 500 400 700 250" fill="none" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.1" />
        <path d="M 150 400 Q 450 200 850 350" fill="none" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.1" />

        {/* Animated Data Streams */}
        <motion.path
          d="M 200 150 Q 400 50 600 200"
          fill="none"
          stroke="url(#attackLineBlue)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0 }}
        />
        <motion.path
          d="M 300 300 Q 500 400 700 250"
          fill="none"
          stroke="url(#attackLineBlue)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />

        {/* Sleek Nodes */}
        {[
          { x: 200, y: 150, delay: 0 },
          { x: 600, y: 200, delay: 0.5 },
          { x: 800, y: 100, delay: 1 },
          { x: 300, y: 300, delay: 0.2 },
          { x: 700, y: 250, delay: 0.8 },
          { x: 150, y: 400, delay: 1.5 },
          { x: 850, y: 350, delay: 2 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r="3" fill="#ffffff" opacity="0.8" />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, delay: node.delay }}
            />
          </g>
        ))}
      </svg>

      {/* Enterprise Overlay Status */}
      <div className="absolute top-6 right-6 bg-brand-dark/80 border border-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 tracking-wider">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
          GLOBAL TELEMETRY
        </div>
        <div className="text-xs text-slate-500 font-mono">Signals Analyzed: <span className="text-white">84,203,112</span></div>
      </div>
    </div>
  );
}
