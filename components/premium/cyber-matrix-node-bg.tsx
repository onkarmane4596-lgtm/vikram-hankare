"use client";

import { useEffect, useRef } from "react";

export function CyberMatrixNodeBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    window.addEventListener("resize", handleResize);

    // Dynamic Network Nodes (representing SOC IP links and forensic data nodes)
    const nodeCount = Math.floor(Math.min(width, 1400) / 25);
    const nodes = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      color: Math.random() > 0.3 ? "#38BDF8" : "#0055FF",
    }));

    // Data Packets travelling between connected nodes
    const packets: Array<{
      from: number;
      to: number;
      progress: number;
      speed: number;
    }> = [];

    const spawnPacket = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      // Find a nearby node
      let closest = -1;
      let minDistance = 220;
      for (let i = 0; i < nodes.length; i++) {
        if (i === from) continue;
        const dx = nodes[i].x - nodes[from].x;
        const dy = nodes[i].y - nodes[from].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDistance) {
          minDistance = dist;
          closest = i;
        }
      }
      if (closest !== -1) {
        packets.push({
          from,
          to: closest,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
        });
      }
    };

    const packetInterval = setInterval(spawnPacket, 600);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background cyber grid lines
      const gridSize = 64;
      ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Update and draw nodes & connection lines
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node2.x - node.x;
          const dy = node2.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.25;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulseSize = node.radius + Math.sin(node.pulse) * 1;
        const opacity = 0.4 + Math.sin(node.pulse) * 0.3;

        // Node Glow Ring
        ctx.fillStyle = node.color;
        ctx.globalAlpha = opacity * 0.3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Node Core Point
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // 4. Update and draw data packets moving along connection lines
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        if (!n1 || !n2) continue;

        const px = n1.x + (n2.x - n1.x) * p.progress;
        const py = n1.y + (n2.y - n1.y) * p.progress;

        // Packet Light Dot
        ctx.fillStyle = "#38BDF8";
        ctx.shadowColor = "#38BDF8";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(packetInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617] pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Static Ambient Spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#38BDF8]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0055FF]/10 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
}
