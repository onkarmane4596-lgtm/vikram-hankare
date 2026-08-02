"use client";

import { useEffect, useRef, useState } from "react";

export function QuantumCyberMatrixBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [telemetryTarget, setTelemetryTarget] = useState({ label: "SOC_CORE_ACTIVE", ip: "192.168.1.1" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // 1. Hexagonal Grid System Setup
    const hexRadius = width < 768 ? 28 : 36;
    const hexWidth = Math.sqrt(3) * hexRadius;
    const hexHeight = 2 * hexRadius;

    const hexCols = Math.ceil(width / hexWidth) + 2;
    const hexRows = Math.ceil(height / (hexHeight * 0.75)) + 2;

    const hexes: Array<{
      cx: number;
      cy: number;
      glow: number;
      targetGlow: number;
      color: string;
      codeSnippet: string;
    }> = [];

    const sampleCodes = ["0x41", "0x7F", "SHA", "MD5", "SOC", "NET", "RAW", "TLS", "AES", "PACKET"];

    for (let r = 0; r < hexRows; r++) {
      for (let c = 0; c < hexCols; c++) {
        const cx = c * hexWidth + ((r % 2) * hexWidth) / 2;
        const cy = r * (hexHeight * 0.75);
        hexes.push({
          cx,
          cy,
          glow: Math.random() * 0.15,
          targetGlow: 0,
          color: Math.random() > 0.4 ? "#38BDF8" : "#0055FF",
          codeSnippet: sampleCodes[Math.floor(Math.random() * sampleCodes.length)],
        });
      }
    }

    // 2. Matrix Rain Columns
    const matrixColsCount = Math.floor(width / 80);
    const matrixStreams = Array.from({ length: matrixColsCount }).map((_, i) => ({
      x: i * 80 + Math.random() * 20,
      y: Math.random() * height,
      speed: 0.8 + Math.random() * 1.5,
      chars: Array.from({ length: 12 }).map(() =>
        Math.floor(Math.random() * 16).toString(16).toUpperCase()
      ),
    }));

    // Random target reticle simulation
    const telemetryTimer = setInterval(() => {
      const ips = [
        "192.168.1.105 [FIREWALL_SHIELD]",
        "10.0.4.88 [EVIDENCE_SECURED]",
        "172.16.0.42 [ZERO_TRUST_ENFORCED]",
        "192.168.1.250 [MEMORY_DUMP_VERIFIED]"
      ];
      const randomIp = ips[Math.floor(Math.random() * ips.length)];
      setTelemetryTarget({ label: "SOC_TARGET_LOCK", ip: randomIp });
    }, 3000);

    // Draw single hexagon helper
    const drawHex = (cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Render Hexagonal Cyber Shield Mesh Grid
      for (let i = 0; i < hexes.length; i++) {
        const hex = hexes[i];
        const dx = hex.cx - mx;
        const dy = hex.cy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Hover light interaction
        if (dist < 220) {
          hex.targetGlow = (1 - dist / 220) * 0.7;
        } else {
          hex.targetGlow *= 0.95;
        }

        const currentGlow = Math.max(hex.glow, hex.targetGlow);

        // Stroke Hex Outline
        ctx.strokeStyle = hex.color;
        ctx.globalAlpha = 0.04 + currentGlow * 0.6;
        ctx.lineWidth = 1;
        drawHex(hex.cx, hex.cy, hexRadius);
        ctx.stroke();

        // Fill Hex Body on Hover
        if (currentGlow > 0.15) {
          ctx.fillStyle = hex.color;
          ctx.globalAlpha = currentGlow * 0.25;
          ctx.fill();

          // Code watermark inside illuminated hex
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = currentGlow * 0.9;
          ctx.font = "9px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(hex.codeSnippet, hex.cx, hex.cy);
        }
      }

      // Render Matrix Stream Data Rain
      for (let i = 0; i < matrixStreams.length; i++) {
        const stream = matrixStreams[i];
        stream.y += stream.speed;
        if (stream.y > height + 200) {
          stream.y = -200;
        }

        ctx.font = "10px monospace";
        ctx.textAlign = "center";

        for (let j = 0; j < stream.chars.length; j++) {
          const charY = stream.y - j * 16;
          if (charY < 0 || charY > height) continue;

          const alpha = (1 - j / stream.chars.length) * 0.25;
          ctx.fillStyle = j === 0 ? "#38BDF8" : "#0055FF";
          ctx.globalAlpha = alpha;
          ctx.fillText(stream.chars[j], stream.x, charY);
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(telemetryTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617] pointer-events-none z-0 font-mono">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Autonomous Floating Target Lock Badge */}
      <div className="absolute top-12 right-12 hidden lg:flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-slate-950/90 border border-[#38BDF8]/40 backdrop-blur-xl text-[10px] text-[#38BDF8] shadow-2xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
        </span>
        <span className="font-bold">{telemetryTarget.label}:</span>
        <span className="text-white">{telemetryTarget.ip}</span>
      </div>

      {/* Static Ambient Spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#38BDF8]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0055FF]/10 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
}
