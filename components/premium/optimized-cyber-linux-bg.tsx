"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function OptimizedCyberLinuxBg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const linuxCommands = [
    "root@skyline-core:~# systemctl status cyber-shield.service [ACTIVE]",
    "root@skyline:~# nmap -sS -sV -O -p- 192.168.1.0/24 [SCANNING_LIVE]",
    "sudo dd if=/dev/nvme0n1 of=/forensics/evidence.img bs=4M [EVIDENCE_ACQUIRED]",
    "volatility -f memory.raw --profile=Win10x64 pslist | grep -i suspicious",
    "tshark -i eth0 -f 'tcp port 443' -w /logs/capture.pcap [CAPTURE_ACTIVE]",
    "[ OK ] Started Linux Forensics & Penetration Testing Environment (systemd)",
    "cat /proc/sys/net/ipv4/ip_forward => 1 [FORWARDING_ENABLED]",
    "openssl x509 -in /etc/ssl/certs/skyline.crt -text -noout [VALID_CERT]",
    "hashcat -m 1000 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt",
    "tcpdump -nn -v -i wlan0 'host 10.0.0.1 and port 80' [PACKET_STREAM]",
    "gdb -q ./exploit_payload --eval-command='run' [ANALYZING_BINARY]",
    "chmod +x /usr/local/bin/forensic_triage.sh && ./forensic_triage.sh"
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617] font-mono">
      {/* 1. Subtle, realistic cyber grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #38BDF8 1px, transparent 1px),
            linear-gradient(to bottom, #38BDF8 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* 2. Soft Ambient Spotlights for Enterprise Depth */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute top-[10%] left-[20%] w-[50%] h-[40%] bg-[#38BDF8]/10 blur-[150px] rounded-full" />
        <div className="absolute top-[60%] right-[15%] w-[45%] h-[45%] bg-[#0055FF]/10 blur-[160px] rounded-full" />
      </div>

      {/* 3. Live Floating Dynamic Linux Commands Watermark Stream */}
      <div className="absolute inset-0 overflow-hidden flex flex-col justify-between p-6 sm:p-10 opacity-30 select-none">
        {linuxCommands.map((cmd, idx) => {
          const duration = 22 + (idx % 4) * 6;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              className="text-[11px] sm:text-xs tracking-wider font-mono whitespace-nowrap text-sky-400/80 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)] flex items-center gap-2"
              initial={{ x: isEven ? "-30vw" : "30vw" }}
              animate={{
                x: isEven ? ["-30vw", "30vw", "-30vw"] : ["30vw", "-30vw", "30vw"],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block animate-pulse shrink-0" />
              <span>{cmd}</span>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Very subtle vertical scanning laser line for dynamic atmosphere */}
      <motion.div
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#38BDF8]/25 to-transparent"
        animate={{
          x: ["-45vw", "45vw", "-45vw"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
