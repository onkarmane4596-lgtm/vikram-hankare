"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const bracketsRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Disable on mobile/touch interfaces
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsMobile(true);
            return;
        } else {
            setIsMobile(false);
        }

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = mouseX;
        let currentY = mouseY;
        let isHovering = false;
        let isClicking = false;

        // -------------------------------------------------------------
        // Object Pool for Binary Trails (Extremely optimized rendering)
        // -------------------------------------------------------------
        const poolSize = 20;
        const trailContainer = document.createElement("div");
        trailContainer.style.position = "fixed";
        trailContainer.style.top = "0";
        trailContainer.style.left = "0";
        trailContainer.style.width = "100vw";
        trailContainer.style.height = "100vh";
        trailContainer.style.pointerEvents = "none";
        trailContainer.style.zIndex = "99997";
        document.body.appendChild(trailContainer);

        const chars = ["0", "1", "0x", "AF", "F9", "/"];
        const trailData: { x: number; y: number; active: boolean; life: number; div: HTMLDivElement }[] = [];

        for (let i = 0; i < poolSize; i++) {
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.color = "rgba(0, 212, 255, 0.7)";
            div.style.fontFamily = "'Courier New', monospace";
            div.style.fontSize = "11px";
            div.style.fontWeight = "bold";
            div.style.opacity = "0";
            div.style.pointerEvents = "none";
            div.style.willChange = "transform, opacity";
            trailContainer.appendChild(div);

            trailData.push({ x: 0, y: 0, active: false, life: 0, div });
        }

        let lastSpawn = 0;
        // Glitching cyber terms for hover states
        const texts = ["_SCANNING", "DECRYPTING_...", "AUTH_REQ", "[FORENSIC_TR]", "SYSTEM_BPS", "EXTRACTING", "ANALYZING_"];

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                isHovering = true;
            } else {
                isHovering = false;
            }
        };

        const onMouseDown = () => (isClicking = true);
        const onMouseUp = () => (isClicking = false);

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        // RAf Loop for mathematically perfect 60fps smoothing
        const loop = () => {
            const ease = 0.25;
            currentX += (mouseX - currentX) * ease;
            currentY += (mouseY - currentY) * ease;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }

            if (bracketsRef.current && textRef.current) {
                if (isHovering) {
                    const hoverScale = isClicking ? 1.3 : 1.6;
                    bracketsRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${hoverScale})`;
                    bracketsRef.current.style.opacity = "1";

                    // Randomly flash text like a hacking terminal
                    if (Math.random() > 0.85) {
                        textRef.current.innerText = texts[Math.floor(Math.random() * texts.length)];
                    }
                } else {
                    const idleScale = isClicking ? 0.3 : 0.6;
                    bracketsRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${idleScale})`;
                    bracketsRef.current.style.opacity = isClicking ? "0.8" : "0.2";
                    textRef.current.innerText = "";
                }
            }

            // Physics logic for spawning binary trails on rapid movement
            const velocity = Math.abs(mouseX - currentX) + Math.abs(mouseY - currentY);

            if (velocity > 8 && Date.now() - lastSpawn > 25) {
                lastSpawn = Date.now();
                const unactive = trailData.find(t => !t.active); // Find an invisible node string
                if (unactive) {
                    unactive.active = true;
                    unactive.life = 1;
                    unactive.x = mouseX + (Math.random() * 20 - 10);
                    unactive.y = mouseY + (Math.random() * 20 - 10);
                    unactive.div.innerText = chars[Math.floor(Math.random() * chars.length)];
                    unactive.div.style.transform = `translate3d(${unactive.x}px, ${unactive.y}px, 0)`;
                    unactive.div.style.opacity = "1";
                }
            }

            // Render binary trail floating physics
            trailData.forEach(t => {
                if (t.active) {
                    t.life -= 0.04; // Fade out quickly
                    t.y -= 1.5; // Float upwards towards top of screen
                    t.div.style.transform = `translate3d(${t.x}px, ${t.y}px, 0)`;
                    t.div.style.opacity = t.life.toString();

                    if (t.life <= 0) t.active = false;
                }
            });

            requestAnimationFrame(loop);
        };

        const rafId = requestAnimationFrame(loop);

        // Mask native cursor everywhere
        const style = document.createElement("style");
        style.innerHTML = `
      @media (pointer: fine) {
        * { cursor: none !important; }
      }
    `;
        document.head.appendChild(style);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            cancelAnimationFrame(rafId);
            document.head.removeChild(style);
            if (trailContainer.parentNode) {
                trailContainer.parentNode.removeChild(trailContainer);
            }
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* Precision Tracking Dot (Diamond shape) */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[99999] shadow-[0_0_15px_#00d4ff] -ml-[4px] -mt-[4px]"
                style={{
                    background: "linear-gradient(45deg, #00d4ff, #00ff88)",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                }}
            />

            {/* Cyber/Forensic Target HUD Elements */}
            <div
                ref={bracketsRef}
                className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[99998] flex items-center justify-center -ml-8 -mt-8 will-change-transform"
            >
                {/* Rotating Scanner Artifacts */}
                <div className="absolute inset-0 border border-[#0055FF]/40 rotate-45 rounded-sm animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 border border-[#00d4ff]/20 -rotate-12 rounded-full animate-[spin_8s_linear_infinite_reverse]" />

                {/* Targeting HUD Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.4)]" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.4)]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.4)]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.4)]" />

                {/* Terminal Terminal Status Text (Only displays on interactive element hover) */}
                <div
                    ref={textRef}
                    className="absolute -bottom-8 whitespace-nowrap text-[9px] font-mono font-black text-[#00ff88] tracking-[0.2em] shadow-[0_0_10px_#00ff88] pointer-events-none"
                />
            </div>
        </>
    );
}
