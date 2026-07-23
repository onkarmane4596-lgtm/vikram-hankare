"use client";

import { motion } from "framer-motion";

export function CyberBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-brand-dark bg-noise">
      
      {/* Deep sophisticated gradients instead of neon */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-brand-blue/10 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Subtle, realistic grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Very subtle vertical scanning line for "ultra dynamic" feel */}
      <motion.div
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent"
        animate={{
          x: ["-40vw", "40vw", "-40vw"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
