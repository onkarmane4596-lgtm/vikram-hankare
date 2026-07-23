"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.0, 0.0, 0.0], // Pure black
      markerColor: [0.0, 0.64, 1.0], // Brand Blue (#00A3FF)
      glowColor: [0.0, 0.3, 0.8], // Intense electric blue glow
      markers: [
        { location: [17.6805, 74.0183], size: 0.1 }, // Satara
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [51.5072, -0.1276], size: 0.04 },
        { location: [35.6762, 139.6503], size: 0.04 },
      ],
      // @ts-expect-error cobe types might be outdated or missing onRender
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.003; // Slower, more elegant rotation
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[700px] mx-auto flex items-center justify-center">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[#00A3FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", contain: "layout paint size", opacity: 0.9 }}
      />
    </div>
  );
}
