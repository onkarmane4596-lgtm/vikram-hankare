"use client";

import React, { useRef, useMemo, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";
import { CEH_TOOLS_DATA, CyberTool } from "./cyber-tools-data";
import { Shield, Award, Play, Pause } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// ORBITAL ORRERY CONFIGURATION
// 3 rings × 6 tools — each ring is a unique tilted ellipse in 3D world space
// Like a mechanical orrery or multi-shell electron orbital model
// ─────────────────────────────────────────────────────────────────────────────
const DEG = Math.PI / 180;

interface OrbitDef {
  tools: CyberTool[];
  semiMajor: number;     // a — width
  semiMinor: number;     // b — height of the ellipse in its local plane
  euler: THREE.Euler;    // tilt of the orbital plane
  speed: number;         // radians/second — orbital speed
  ringColor: string;     // color of the orbit line
  phaseShift: number;    // starting phase offset for this ring's first icon
}

const ORBIT_DEFS: OrbitDef[] = [
  {
    // Ring A — inner, nearly horizontal with slight forward tilt
    tools: CEH_TOOLS_DATA.slice(0, 6),
    semiMajor: 2.8,
    semiMinor: 2.2,
    euler: new THREE.Euler(18 * DEG, 0, 12 * DEG, "XYZ"),
    speed: 0.38,
    ringColor: "#00A8FF",
    phaseShift: 0,
  },
  {
    // Ring B — middle, steeply inclined (~75°) — looks like an atom shell
    tools: CEH_TOOLS_DATA.slice(6, 12),
    semiMajor: 3.7,
    semiMinor: 2.9,
    euler: new THREE.Euler(78 * DEG, 35 * DEG, 0, "XYZ"),
    speed: 0.24,
    ringColor: "#4FD1FF",
    phaseShift: 0.5,
  },
  {
    // Ring C — outer, medium inclination on opposite axis
    tools: CEH_TOOLS_DATA.slice(12, 18),
    semiMajor: 4.7,
    semiMinor: 3.7,
    euler: new THREE.Euler(48 * DEG, -55 * DEG, 25 * DEG, "XYZ"),
    speed: 0.14,
    ringColor: "#2563EB",
    phaseShift: 1.05,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SVG → THREE.CanvasTexture
// ─────────────────────────────────────────────────────────────────────────────
function makeSVGTexture(svgString: string): THREE.CanvasTexture {
  const SIZE = 256;
  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d")!;
  const texture = new THREE.CanvasTexture(canvas);

  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.drawImage(img, 0, 0, SIZE, SIZE);
    URL.revokeObjectURL(url);
    texture.needsUpdate = true;
  };
  img.src = url;
  return texture;
}

// ─────────────────────────────────────────────────────────────────────────────
// Pre-compute the orbit's world-space rotation matrix (from its Euler angles)
// ─────────────────────────────────────────────────────────────────────────────
function makeOrbitMatrix(euler: THREE.Euler): THREE.Matrix4 {
  return new THREE.Matrix4().makeRotationFromEuler(euler);
}

// ─────────────────────────────────────────────────────────────────────────────
// ORBIT RING — static dashed ellipse drawn as a line in tilted world space
// ─────────────────────────────────────────────────────────────────────────────
interface OrbitRingProps {
  def: OrbitDef;
}

function OrbitRing({ def }: OrbitRingProps) {
  const matrix = useMemo(() => makeOrbitMatrix(def.euler), [def.euler]);

  const points = useMemo(() => {
    const SEG = 120;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= SEG; i++) {
      const t = (i / SEG) * Math.PI * 2;
      const local = new THREE.Vector3(
        def.semiMajor * Math.cos(t),
        def.semiMinor * Math.sin(t),
        0
      );
      local.applyMatrix4(matrix);
      pts.push(local);
    }
    return pts;
  }, [def, matrix]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color(def.ringColor),
        transparent: true,
        opacity: 0.22,
      }),
    [def.ringColor]
  );

  return <lineLoop geometry={geometry} material={material} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICON NODE — single icon that orbits its ellipse, always facing the camera
// ─────────────────────────────────────────────────────────────────────────────
interface IconNodeProps {
  tool: CyberTool;
  orbitDef: OrbitDef;
  indexInOrbit: number;
  globalTimeRef: React.MutableRefObject<number>;
  isPausedRef: React.MutableRefObject<boolean>;
  isActive: boolean;
  onSelect: (tool: CyberTool) => void;
}

function IconNode({
  tool,
  orbitDef,
  indexInOrbit,
  globalTimeRef,
  isPausedRef,
  isActive,
  onSelect,
}: IconNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  const texture = useMemo(() => makeSVGTexture(tool.fallbackSvg), [tool.fallbackSvg]);
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        alphaTest: 0.01,
        side: THREE.DoubleSide,
      }),
    [texture]
  );
  const geometry = useMemo(() => new THREE.PlaneGeometry(0.75, 0.75), []);

  // Phase offset so icons are equally spaced on this orbit
  const phaseOffset = useMemo(
    () => orbitDef.phaseShift + (indexInOrbit / orbitDef.tools.length) * Math.PI * 2,
    [orbitDef, indexInOrbit]
  );

  // Pre-compute orbit matrix once
  const orbitMatrix = useMemo(() => makeOrbitMatrix(orbitDef.euler), [orbitDef.euler]);

  // Reusable vectors/quaternions to avoid per-frame allocation
  const _localPos = useMemo(() => new THREE.Vector3(), []);
  const _worldPos = useMemo(() => new THREE.Vector3(), []);
  const _cameraWorldQuat = useMemo(() => new THREE.Quaternion(), []);
  const _camPos = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    if (!meshRef.current) return;

    const t = phaseOffset + globalTimeRef.current * orbitDef.speed;

    // Position on tilted ellipse in world space
    _localPos.set(
      orbitDef.semiMajor * Math.cos(t),
      orbitDef.semiMinor * Math.sin(t),
      0
    );
    _localPos.applyMatrix4(orbitMatrix);
    meshRef.current.position.copy(_localPos);

    // ── Billboard: icon always faces the camera ──────────────────
    camera.getWorldQuaternion(_cameraWorldQuat);
    meshRef.current.quaternion.copy(_cameraWorldQuat);

    // ── Depth-based scale + opacity ──────────────────────────────
    // Measure how "close" this icon is to the camera vs the center of the scene
    camera.getWorldPosition(_camPos);
    const distToCamera = _localPos.distanceTo(_camPos);
    const maxDist = orbitDef.semiMajor * 2 + 5;    // rough maximum
    const minDist = 1.5;
    const t01 = 1 - Math.max(0, Math.min(1, (distToCamera - minDist) / (maxDist - minDist)));

    const scaleBase = isActive ? 1.45 : 1.0;
    const scale = scaleBase * (0.65 + 0.55 * t01);  // 0.65 (far) → 1.2 (close)
    const opacity = 0.42 + 0.58 * t01;               // 0.42 → 1.0

    meshRef.current.scale.setScalar(scale);
    material.opacity = isActive ? Math.min(1, opacity + 0.2) : opacity;
  });

  const handleClick = useCallback(
    (e: any) => {
      e.stopPropagation();
      onSelect(tool);
    },
    [tool, onSelect]
  );

  return <mesh ref={meshRef} geometry={geometry} material={material} onClick={handleClick} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// ORRERY SCENE — all orbits and icons
// ─────────────────────────────────────────────────────────────────────────────
interface OrrerySceneProps {
  isPausedRef: React.MutableRefObject<boolean>;
  activeTool: CyberTool;
  onSelectTool: (tool: CyberTool) => void;
}

function OrreryScene({ isPausedRef, activeTool, onSelectTool }: OrrerySceneProps) {
  const globalTimeRef = useRef(0);

  useFrame((_, delta) => {
    if (!isPausedRef.current) {
      globalTimeRef.current += delta;
    }
  });

  return (
    <>
      <ambientLight intensity={2.2} />

      {/* All 3 orbit rings */}
      {ORBIT_DEFS.map((def, i) => (
        <OrbitRing key={i} def={def} />
      ))}

      {/* All 18 tool icons */}
      {ORBIT_DEFS.map((def) =>
        def.tools.map((tool, idx) => (
          <IconNode
            key={tool.id}
            tool={tool}
            orbitDef={def}
            indexInOrbit={idx}
            globalTimeRef={globalTimeRef}
            isPausedRef={isPausedRef}
            isActive={activeTool.id === tool.id}
            onSelect={onSelectTool}
          />
        ))
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function CyberArsenal3D() {
  const [activeTool, setActiveTool] = useState<CyberTool>(CEH_TOOLS_DATA[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Use a ref so the scene doesn't remount on pause toggle
  const isPausedRef = useRef(false);
  isPausedRef.current = isPaused;

  const categories = [
    "All", "Web Security", "Network Pentesting", "Vulnerability Assessment",
    "Password & Cracking", "Exploitation", "Social Engineering",
    "Infrastructure", "OSINT", "Wireless Security",
  ];

  const filteredTools = useMemo(() => {
    if (activeCategory === "All") return CEH_TOOLS_DATA;
    return CEH_TOOLS_DATA.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 sm:py-20 relative bg-gradient-to-b from-[#0B1026] via-[#02030A] to-[#08101F] text-slate-200 border-y border-[#00A8FF]/20 overflow-hidden">

      {/* Background texture + ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/design/1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00A8FF]/8 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#007BFF]/15 border border-[#00A8FF]/40 text-[#00A8FF] text-[11px] font-extrabold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" /> CEH SPECIALIZATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#F2F4F7] via-[#D1D5DB] to-[#8D929B]">
            Industry-Leading Tools<br className="hidden sm:block" /> You Master With CEH
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Hands-on expertise with the most powerful security tools used by ethical hackers and professionals worldwide.
          </p>
        </div>

        {/* ── Category Filters ─────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-5xl mx-auto">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  active
                    ? "bg-gradient-to-r from-[#00A8FF] via-[#007BFF] to-[#0052D4] text-white border border-[#00A8FF]/80 shadow-[0_0_14px_rgba(0,168,255,0.45)] scale-105"
                    : "bg-[#0B1026]/80 text-slate-300 border border-[#3A3F46]/50 hover:border-[#00A8FF]/50 hover:text-white"
                }`}
              >
                {cat}{cat === "All" ? " (18)" : ""}
              </button>
            );
          })}
        </div>

        {/* ── Two-Column Layout ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* LEFT — 3D Orrery Canvas */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Control bar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2 bg-[#0B1026] px-3 py-1.5 rounded-full border border-[#00A8FF]/40">
                <span className="w-2 h-2 rounded-full bg-[#00A8FF] animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                  3-RING ORBITAL ORRERY • 18 TOOLS
                </span>
              </div>
              <button
                onClick={() => setIsPaused((p) => !p)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B1026] border border-[#3A3F46]/50 hover:border-[#00A8FF]/60 text-slate-300 hover:text-white transition-all text-xs cursor-pointer"
              >
                {isPaused
                  ? <Play className="w-3.5 h-3.5 text-[#00A8FF]" />
                  : <Pause className="w-3.5 h-3.5 text-[#00A8FF]" />}
                {isPaused ? "Resume" : "Pause"}
              </button>
            </div>

            {/* THREE.JS CANVAS */}
            <div className="w-full" style={{ height: "540px" }}>
              <Canvas
                camera={{ position: [2, 3.5, 9.5], fov: 42, near: 0.1, far: 200 }}
                gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
                style={{ background: "transparent" }}
              >
                <OrreryScene
                  isPausedRef={isPausedRef}
                  activeTool={activeTool}
                  onSelectTool={setActiveTool}
                />
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  minDistance={4}
                  maxDistance={18}
                  rotateSpeed={0.6}
                  zoomSpeed={0.6}
                  autoRotate={false}
                />
              </Canvas>
            </div>

            <p className="text-center text-[10px] text-slate-500 mt-2 font-mono tracking-wider">
              CLICK ICON TO INSPECT · DRAG TO ORBIT · SCROLL TO ZOOM
            </p>
          </div>

          {/* RIGHT — Tool Inspector */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTool.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="relative border border-[#00A8FF]/40 rounded-3xl p-6 sm:p-7
                  shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                  backdrop-blur-2xl overflow-hidden"
              >
                {/* Background image */}
                <img
                  src="/design/2.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  style={{ opacity: 0.18 }}
                />
                {/* Dark overlay to keep text readable */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#02030A]/88 via-[#0B1026]/82 to-[#08101F]/90 pointer-events-none" />
                {/* Blue corner ambient glow */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#00A8FF]/8 blur-[100px] pointer-events-none" />

                {/* Icon + Name Header */}
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-white/10 relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl bg-[#02030A] border-2 border-[#00A8FF]/60 p-2.5 shrink-0 shadow-[0_0_24px_rgba(0,168,255,0.3)]"
                    dangerouslySetInnerHTML={{ __html: activeTool.fallbackSvg }}
                  />
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#007BFF]/15 border border-[#00A8FF]/40 text-[10px] font-extrabold text-[#00A8FF] uppercase tracking-wider mb-1.5">
                      <Shield className="w-3 h-3" /> {activeTool.category}
                    </span>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F2F4F7] to-[#D1D5DB] tracking-tight leading-tight">
                      {activeTool.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Official CEH v13 Tool</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00A8FF] mb-1">
                      Core Function
                    </p>
                    <p className="text-slate-100 text-sm font-semibold leading-relaxed">
                      {activeTool.description}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#02030A]/80 border border-[#00A8FF]/25">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4FD1FF] mb-1">
                      Practical Application
                    </p>
                    <p className="text-slate-200 text-sm font-medium leading-relaxed">
                      {activeTool.purpose}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#007BFF]/15 border border-[#00A8FF]/40 text-white font-bold text-xs">
                    <Award className="w-4 h-4 text-[#00A8FF]" />
                    {activeTool.usedIn}
                  </div>
                </div>

                {/* Quick Selector Chips */}
                <div className="mt-6 pt-5 border-t border-white/10 relative z-10">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-2.5">
                    Quick Jump — {filteredTools.length} Tools
                  </p>
                  <div
                    className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1"
                    style={{ scrollbarWidth: "thin", scrollbarColor: "#00A8FF44 transparent" }}
                  >
                    {filteredTools.map((t) => {
                      const sel = activeTool.id === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => setActiveTool(t)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                            sel
                              ? "bg-[#00A8FF] text-[#02030A] shadow-[0_0_10px_rgba(0,168,255,0.6)]"
                              : "bg-[#02030A] text-slate-300 border border-white/10 hover:border-[#00A8FF]/40 hover:text-white"
                          }`}
                        >
                          {t.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
