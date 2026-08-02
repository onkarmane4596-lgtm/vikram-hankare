"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const pointerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    } else {
      setIsMobile(false);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let frameX = mouseX;
    let frameY = mouseY;
    let frameW = 36;
    let frameH = 36;
    let frameRadius = 10;
    let isHovering = false;
    let activeElem: HTMLElement | null = null;
    let isClicking = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest<HTMLElement>(
        "a, button, [role='button'], input, select, textarea, label, [onclick], .cursor-pointer, card, header, .group"
      );

      // Check if element or parent opts out of cursor frame
      if (interactive && interactive.closest(".no-cursor-frame")) {
        isHovering = false;
        activeElem = null;
        return;
      }

      // Only target actionable or styled interactive items (buttons, links, cards, inputs)
      if (
        interactive &&
        (interactive.tagName === "BUTTON" ||
          interactive.tagName === "A" ||
          interactive.tagName === "INPUT" ||
          interactive.tagName === "TEXTAREA" ||
          interactive.getAttribute("role") === "button" ||
          interactive.classList.contains("cursor-pointer") ||
          interactive.onclick !== null)
      ) {
        isHovering = true;
        activeElem = interactive;
      } else {
        isHovering = false;
        activeElem = null;
      }
    };

    const onMouseDown = () => (isClicking = true);
    const onMouseUp = () => (isClicking = false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });

    let rafId: number;

    const loop = () => {
      // 1. Direct follow for precision Firewall Shield pointer
      const pointerEase = 0.85;
      cursorX += (mouseX - cursorX) * pointerEase;
      cursorY += (mouseY - cursorY) * pointerEase;

      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      // 2. Automatic Bounding Box Size Capture & Shape Morphing
      if (isHovering && activeElem && document.body.contains(activeElem)) {
        const rect = activeElem.getBoundingClientRect();
        const padding = 5;

        const targetX = rect.left - padding;
        const targetY = rect.top - padding;
        const targetW = rect.width + padding * 2;
        const targetH = rect.height + padding * 2;

        const style = window.getComputedStyle(activeElem);
        const computedRadius = parseInt(style.borderRadius) || 12;

        const lerpSpeed = 0.3; // Fast & responsive snapping
        frameX += (targetX - frameX) * lerpSpeed;
        frameY += (targetY - frameY) * lerpSpeed;
        frameW += (targetW - frameW) * lerpSpeed;
        frameH += (targetH - frameH) * lerpSpeed;
        frameRadius += (computedRadius - frameRadius) * lerpSpeed;

        if (frameRef.current) {
          frameRef.current.style.transform = `translate3d(${frameX}px, ${frameY}px, 0)`;
          frameRef.current.style.width = `${frameW}px`;
          frameRef.current.style.height = `${frameH}px`;
          frameRef.current.style.borderRadius = `${frameRadius + 4}px`;
          frameRef.current.style.opacity = isClicking ? "0.95" : "1";
          frameRef.current.setAttribute("data-mode", "hover");
        }
      } else {
        // Standby mode: Floating Firewall Reticle centered at cursor
        const targetW = isClicking ? 26 : 40;
        const targetH = isClicking ? 26 : 40;
        const targetX = mouseX - targetW / 2;
        const targetY = mouseY - targetH / 2;

        const lerpSpeed = 0.3;
        frameX += (targetX - frameX) * lerpSpeed;
        frameY += (targetY - frameY) * lerpSpeed;
        frameW += (targetW - frameW) * lerpSpeed;
        frameH += (targetH - frameH) * lerpSpeed;
        frameRadius += (10 - frameRadius) * lerpSpeed;

        if (frameRef.current) {
          frameRef.current.style.transform = `translate3d(${frameX}px, ${frameY}px, 0)`;
          frameRef.current.style.width = `${frameW}px`;
          frameRef.current.style.height = `${frameH}px`;
          frameRef.current.style.borderRadius = `${frameRadius}px`;
          frameRef.current.style.opacity = isClicking ? "0.6" : "0.75";
          frameRef.current.setAttribute("data-mode", "idle");
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    // Mask system cursor
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.innerHTML = `
      @media (pointer: fine) {
        *, *::before, *::after { cursor: none !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafId);
      const existingStyle = document.getElementById("custom-cursor-style");
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* 1. Precision Firewall Shield Pointer Icon */}
      <div
        ref={pointerRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] -ml-3 -mt-3 flex items-center justify-center will-change-transform"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-[#38BDF8] drop-shadow-[0_0_10px_#38BDF8] filter transition-transform duration-150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Firewall Shield Contour */}
          <path
            d="M12 2L4 5V11C4 16.55 7.4 21.74 12 23C16.6 21.74 20 16.55 20 11V5L12 2Z"
            fill="rgba(2, 6, 23, 0.85)"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Inner Cyber Core Flame */}
          <path
            d="M12 6L7 9V12C7 15.5 9.1 18.8 12 19.8C14.9 18.8 17 15.5 17 12V9L12 6Z"
            fill="url(#shieldGlow)"
            stroke="#60A5FA"
            strokeWidth="1"
          />
          {/* Center Target Pointer Node */}
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
          <defs>
            <linearGradient id="shieldGlow" x1="12" y1="6" x2="12" y2="19.8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0055FF" stopOpacity="0.9" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Dynamic Automatic Size-Capturing HUD Frame */}
      <div
        ref={frameRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] border border-[#38BDF8]/60 shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-colors duration-150 will-change-transform data-[mode=hover]:bg-[#38BDF8]/10 data-[mode=hover]:border-[#38BDF8] data-[mode=hover]:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
      >
        {/* Corner HUD Framing Brackets */}
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
      </div>
    </>
  );
}
