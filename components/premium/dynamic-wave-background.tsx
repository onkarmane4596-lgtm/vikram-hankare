"use client";

import React, { useEffect, useRef } from "react";

interface DynamicWaveBackgroundProps {
  className?: string;
  intensity?: number;
  showGrid?: boolean;
  showParticles?: boolean;
  showLinuxElements?: boolean;
  interactive?: boolean;
}

export function DynamicWaveBackground({
  className = "",
  intensity = 1,
  showGrid = true,
  showParticles = true,
  showLinuxElements = true,
  interactive = true,
}: DynamicWaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

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

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas || !interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    if (interactive && canvas.parentElement) {
      canvas.parentElement.addEventListener("mousemove", handleMouseMove);
      canvas.parentElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // 1. Particles along waves
    const particleCount = showParticles ? 35 : 0;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      alpha: 0.2 + Math.random() * 0.6,
      waveIndex: Math.floor(Math.random() * 4),
    }));

    // 2. Floating Linux Cyber Terminal Elements
    const linuxCommandsList = [
      "root@skyline-sec:~# nmap -sS -sV -O -p- 192.168.1.0/24",
      "sudo dd if=/dev/nvme0n1 of=/evidence/drive.raw bs=4M status=progress",
      "volatility -f memory.dump --profile=Win10x64_19041 pslist",
      "grep -i 'FAILED PASSWORD' /var/log/auth.log | tail -n 20",
      "tshark -i eth0 -f 'tcp port 443' -w /logs/capture.pcap",
      "[ OK ] Started Linux Security Forensic Audit Daemon (systemd)",
      "cat /proc/sys/net/ipv4/ip_forward => 1 [FORWARDING_ENABLED]",
      "openssl x509 -in /etc/ssl/certs/skyline.crt -text -noout",
      "gdb -q ./exploit_payload --eval-command='run $(python3 -c \"print('A'*64)\")'",
      "chmod +x /usr/local/bin/forensic_triage.sh && ./forensic_triage.sh",
      "tcpdump -nn -v -i wlan0 'host 10.0.0.1 and port 80'",
      "hashcat -m 1000 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt",
    ];

    const linuxStreams = showLinuxElements
      ? Array.from({ length: 8 }).map((_, i) => ({
          text: linuxCommandsList[i % linuxCommandsList.length],
          x: (i * (width / 8)) + Math.random() * 50,
          y: (height * 0.15) + (i % 4) * (height * 0.18) + Math.random() * 30,
          speedX: 0.15 + (i % 3) * 0.08,
          alpha: 0.12 + Math.random() * 0.18,
          fontSize: width < 768 ? 10 : 12,
        }))
      : [];

    // Wave parameters definition
    const waveConfigs = [
      {
        amplitude: 35 * intensity,
        frequency: 0.004,
        speed: 0.012,
        phase: 0,
        yRatio: 0.65,
        colorStart: "rgba(56, 189, 248, 0.35)", // #38BDF8
        colorEnd: "rgba(3, 7, 18, 0.0)",
        strokeColor: "rgba(56, 189, 248, 0.7)",
        lineWidth: 2,
      },
      {
        amplitude: 45 * intensity,
        frequency: 0.003,
        speed: 0.008,
        phase: Math.PI / 3,
        yRatio: 0.72,
        colorStart: "rgba(0, 85, 255, 0.25)", // #0055FF
        colorEnd: "rgba(2, 6, 23, 0.0)",
        strokeColor: "rgba(96, 165, 250, 0.5)", // #60A5FA
        lineWidth: 1.5,
      },
      {
        amplitude: 25 * intensity,
        frequency: 0.006,
        speed: 0.018,
        phase: Math.PI / 1.5,
        yRatio: 0.58,
        colorStart: "rgba(37, 99, 235, 0.2)", // #2563EB
        colorEnd: "rgba(3, 7, 18, 0.0)",
        strokeColor: "rgba(147, 197, 253, 0.4)",
        lineWidth: 1,
      },
      {
        amplitude: 55 * intensity,
        frequency: 0.002,
        speed: 0.006,
        phase: Math.PI,
        yRatio: 0.8,
        colorStart: "rgba(14, 165, 233, 0.15)",
        colorEnd: "rgba(2, 6, 23, 0.0)",
        strokeColor: "rgba(56, 189, 248, 0.3)",
        lineWidth: 1,
      },
    ];

    let step = 0;

    const render = () => {
      step += 1;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background cyber grid if requested
      if (showGrid) {
        ctx.strokeStyle = "rgba(56, 189, 248, 0.03)";
        ctx.lineWidth = 1;
        const gridSize = 48;
        ctx.beginPath();
        for (let x = 0; x < width; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();
      }

      // 2. Render Animated Waves
      waveConfigs.forEach((config) => {
        const baseOffsetY = height * config.yRatio;

        ctx.beginPath();
        ctx.moveTo(0, height);

        // Draw curve points
        for (let x = 0; x <= width; x += 4) {
          // Distance to mouse for displacement effect
          let mouseFactor = 0;
          if (interactive && mouseRef.current.x > 0) {
            const dist = Math.abs(x - mouseRef.current.x);
            if (dist < 220) {
              mouseFactor = Math.cos((dist / 220) * (Math.PI / 2)) * 30 * intensity;
              if (mouseRef.current.y < baseOffsetY) {
                mouseFactor *= -1;
              }
            }
          }

          const sineValue = Math.sin(x * config.frequency + step * config.speed + config.phase);
          const y = baseOffsetY + sineValue * config.amplitude + mouseFactor;

          if (x === 0) {
            ctx.lineTo(0, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Wave Fill Gradient
        const fillGrad = ctx.createLinearGradient(0, baseOffsetY - config.amplitude, 0, height);
        fillGrad.addColorStop(0, config.colorStart);
        fillGrad.addColorStop(1, config.colorEnd);
        ctx.fillStyle = fillGrad;
        ctx.fill();

        // Wave Stroke Top Line
        ctx.beginPath();
        for (let x = 0; x <= width; x += 4) {
          let mouseFactor = 0;
          if (interactive && mouseRef.current.x > 0) {
            const dist = Math.abs(x - mouseRef.current.x);
            if (dist < 220) {
              mouseFactor = Math.cos((dist / 220) * (Math.PI / 2)) * 30 * intensity;
              if (mouseRef.current.y < baseOffsetY) {
                mouseFactor *= -1;
              }
            }
          }
          const sineValue = Math.sin(x * config.frequency + step * config.speed + config.phase);
          const y = baseOffsetY + sineValue * config.amplitude + mouseFactor;

          if (x === 0) {
            ctx.moveTo(0, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.lineWidth;
        ctx.stroke();
      });

      // 3. Render Crisp Linux Cyber Telemetry Commands OVER the wave field
      if (showLinuxElements && linuxStreams.length > 0) {
        ctx.font = width < 640 ? "11px monospace" : "12px 'Fira Code', 'JetBrains Mono', monospace";
        linuxStreams.forEach((stream, idx) => {
          stream.x += stream.speedX;
          if (stream.x > width + 250) {
            stream.x = -450;
          }

          // Alternating Cyan / Emerald / White Terminal text colors for high visibility
          const isEmerald = idx % 2 === 0;
          ctx.fillStyle = isEmerald
            ? "rgba(52, 211, 153, 0.75)" // #34D399 Emerald Green
            : "rgba(56, 189, 248, 0.85)"; // #38BDF8 Sky Blue

          ctx.shadowColor = isEmerald ? "rgba(52, 211, 153, 0.5)" : "rgba(56, 189, 248, 0.5)";
          ctx.shadowBlur = 6;

          // Draw small terminal prompt dot
          ctx.fillRect(stream.x - 12, stream.y - 8, 5, 5);

          // Draw Linux command text
          ctx.fillText(stream.text, stream.x, stream.y);
          ctx.shadowBlur = 0;
        });
      }

      // 4. Render Particles floating on wave field
      if (showParticles) {
        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;
          p.pulse += p.pulseSpeed;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          const waveCfg = waveConfigs[p.waveIndex];
          const waveY = height * waveCfg.yRatio + Math.sin(p.x * waveCfg.frequency + step * waveCfg.speed) * waveCfg.amplitude;

          // Pull particle toward wave crests
          p.y += (waveY - p.y) * 0.015;

          const opacity = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`;
          ctx.shadowColor = "#38BDF8";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // 5. Draw interactive cursor glow ripple on canvas
      if (interactive && mouseRef.current.x > 0) {
        const radGrad = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          180
        );
        radGrad.addColorStop(0, "rgba(56, 189, 248, 0.12)");
        radGrad.addColorStop(0.5, "rgba(0, 85, 255, 0.05)");
        radGrad.addColorStop(1, "rgba(3, 7, 18, 0.0)");

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 180, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactive && canvas.parentElement) {
        canvas.parentElement.removeEventListener("mousemove", handleMouseMove);
        canvas.parentElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [intensity, showGrid, showParticles, showLinuxElements, interactive]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

