"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Camera,
  Folder,
  Youtube,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Play,
  Layers,
  Sparkles,
  Tv
} from "lucide-react";
import { DynamicWaveBackground } from "@/components/premium/dynamic-wave-background";

// Framer motion variants (Matching /programs)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

// Data Structure (Backend Ready)
export interface GalleryCategory {
  id: string;
  name: string;
  count: number;
  type: "photos" | "videos";
}

export interface PhotoItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string; // YouTube embed video ID
  desc: string;
  category: string;
  isShort?: boolean;
}

// Category Folders (Easily connected to API / Backend later)
const EVENT_FOLDERS: GalleryCategory[] = [
  { id: "opening-ceremony", name: "Inauguration Ceremony", count: 15, type: "photos" },
  { id: "green-drives", name: "Tree Plantation Drive", count: 3, type: "photos" },
  { id: "infrastructure", name: "Infrastructure & Labs", count: 6, type: "photos" },
  { id: "youtube-videos", name: "Video Highlights", count: 4, type: "videos" }
];

// Opening Ceremony Photos (15 JPEG images)
const OPENING_CEREMONY_PHOTOS: PhotoItem[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/${i + 1}.jpeg`,
  title: `Inauguration Ceremony Moment ${i + 1}`,
  category: "opening-ceremony"
}));

// Tree Plantation Drive Photos
const GREEN_DRIVE_PHOTOS: PhotoItem[] = [
  { id: 101, src: "/gallery/8.jpeg", title: "Skyline Sankalp 100 — Tree Plantation Drive", category: "green-drives" },
  { id: 102, src: "/gallery/10.jpeg", title: "Tree Plantation Official Campaign Poster", category: "green-drives" },
  { id: 103, src: "/gallery/3.jpeg", title: "Green Initiative Campus Outdoor Gathering", category: "green-drives" }
];

// Infrastructure & Lab Photos
const INFRASTRUCTURE_PHOTOS: PhotoItem[] = [
  { id: 201, src: "/gallery/1.jpeg", title: "Digital Investigation Workstations & Cyber Range", category: "infrastructure" },
  { id: 202, src: "/gallery/2.jpeg", title: "Forensic Hardware & Evidence Handling Station", category: "infrastructure" },
  { id: 203, src: "/gallery/4.jpeg", title: "Advanced Server Infrastructure & Network Racks", category: "infrastructure" },
  { id: 204, src: "/gallery/5.jpeg", title: "Interactive Security Training Classroom", category: "infrastructure" },
  { id: 205, src: "/gallery/6.jpeg", title: "FTK & EnCase Digital Evidence Suite", category: "infrastructure" },
  { id: 206, src: "/gallery/7.jpeg", title: "24/7 Security Operations Center (SOC) Console", category: "infrastructure" }
];

// Videos Array featuring Official Website Showcase Videos
const YOUTUBE_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Grand Inauguration Ceremony — Skyline Centre of Excellence",
    youtubeId: "hHsC3fKlBZ8",
    desc: "Official launch highlights featuring speeches and keynotes by law enforcement and founding directors.",
    category: "Launch Feature",
    isShort: true
  },
  {
    id: "v2",
    title: "Skyline Centre of Excellence — Official Highlights",
    youtubeId: "DDWimZpLl7Q",
    desc: "Highlights reel from the Skyline Centre of Excellence campus and practical lab activities.",
    category: "Campus Highlights",
    isShort: true
  },
  {
    id: "v3",
    title: "Skyline Sankalp 100 — Tree Plantation Drive",
    youtubeId: "ibAHgq8OM60",
    desc: "Environmental sustainability initiative planting 100 native trees across the campus.",
    category: "Green Initiative",
    isShort: true
  },
  {
    id: "v4",
    title: "High-Tech Infrastructure & Cyber Forensics Lab Tour",
    youtubeId: "ZBoz5SnQ5mg",
    desc: "A walkthrough of our high-tech 1,500 sq. ft. laboratory infrastructure and cyber ranges.",
    category: "Lab Walkthrough",
    isShort: false
  }
];

export default function GalleryPage() {
  const [activeFolder, setActiveFolder] = useState<string>("opening-ceremony");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);

  // Active photo list based on selected folder
  const currentPhotos =
    activeFolder === "opening-ceremony"
      ? OPENING_CEREMONY_PHOTOS
      : activeFolder === "green-drives"
      ? GREEN_DRIVE_PHOTOS
      : activeFolder === "infrastructure"
      ? INFRASTRUCTURE_PHOTOS
      : [];

  const currentCategory = EVENT_FOLDERS.find((f) => f.id === activeFolder);

  // Lightbox handlers
  const openLightbox = (index: number) => setSelectedPhotoIndex(index);
  const closeLightbox = () => setSelectedPhotoIndex(null);

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev < currentPhotos.length - 1 ? prev + 1 : 0
    );
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : currentPhotos.length - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, currentPhotos]);

  const activePhoto = selectedPhotoIndex !== null ? currentPhotos[selectedPhotoIndex] : null;

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#0055FF]/30 selection:text-white relative overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION 1: HEADER FOLLOWING /PROGRAMS STYLE & TITLE "GALLERY" */}
      {/* ========================================================================= */}
      <section className="relative w-full flex items-center justify-center pt-32 sm:pt-40 pb-16 overflow-hidden bg-[#020617]">

        {/* Ambient Dark Radial Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/hero/hero1.png"
            alt="Cyber Security Gallery Backdrop"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity object-center"
          />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(3,7,18,0.3)_0%,_#030712_95%)]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-[#030712]/80" />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38BDF8]/40 text-slate-300 text-xs sm:text-sm font-medium backdrop-blur-xl shadow-[0_0_25px_rgba(56,189,248,0.2)]"
          >
            <Camera className="w-4 h-4 text-sky-400" />
            <span>Media & Event Archive</span>
          </motion.div>

          {/* Main Title: GALLERY (Exact font styling as /programs) */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-tight text-white uppercase"
          >
            Campus & Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]">GALLERY</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Browse event moments, opening ceremony highlights, student initiatives, and embedded video recordings from Skyline Centre of Excellence.
          </motion.p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: EVENT CATEGORY FOLDERS & TABS (BACKEND READY) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-900/70 border border-slate-800/80 rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-2 mb-4 px-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <Folder className="w-4 h-4 text-sky-400" />
            <span>Event Folders & Media Archives</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {EVENT_FOLDERS.map((folder) => {
              const isActive = activeFolder === folder.id;
              const isVideoFolder = folder.type === "videos";

              return (
                <button
                  key={folder.id}
                  onClick={() => setActiveFolder(folder.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? isVideoFolder
                        ? "bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                        : "bg-gradient-to-r from-[#0055FF] to-[#38BDF8] text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                      : "bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {isVideoFolder ? (
                    <Youtube className={`w-4 h-4 ${isActive ? "text-white" : "text-red-400"}`} />
                  ) : (
                    <Folder className={`w-4 h-4 ${isActive ? "text-white" : "text-sky-400"}`} />
                  )}
                  <span>{folder.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {folder.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: MEDIA DISPLAY GRID (PHOTOS & EMBEDDED YOUTUBE VIDEOS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-28">
        {/* YOUTUBE EMBEDDED VIDEOS VIEW */}
        {activeFolder === "youtube-videos" ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {YOUTUBE_VIDEOS.map((vid) => (
              <motion.div
                key={vid.id}
                variants={fadeUp}
                className="bg-slate-900/60 border border-slate-800 hover:border-red-500/50 rounded-3xl p-4 backdrop-blur-xl transition-all duration-300 shadow-xl group hover:shadow-[0_0_35px_rgba(239,68,68,0.2)] flex flex-col justify-between overflow-hidden"
              >
                {/* Embedded YouTube Player Container */}
                <div className={`relative w-full rounded-2xl overflow-hidden bg-slate-950 mb-4 border border-slate-800 ${vid.isShort ? "aspect-[9/16]" : "aspect-video"}`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.youtubeId}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0055FF]/10 border border-[#0055FF]/30 text-[#38BDF8] text-[10px] font-mono font-bold uppercase flex items-center gap-1">
                      <Tv className="w-3 h-3" /> Video Showcase
                    </span>
                    <span className="text-[10px] font-mono text-[#38BDF8] font-semibold">{vid.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors mb-2 leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-normal">
                    {vid.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : currentPhotos.length === 0 ? (
          /* EMPTY FOLDER STATE FOR UPCOMING EVENTS */
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-16 text-center max-w-2xl mx-auto">
            <Folder className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{currentCategory?.name}</h3>
            <p className="text-slate-400 text-sm mb-6">
              Photos for this event folder will be added shortly via our backend portal.
            </p>
            <button
              onClick={() => setActiveFolder("opening-ceremony")}
              className="px-6 py-2.5 rounded-xl bg-[#0055FF] text-white text-xs font-semibold hover:bg-blue-600 transition-all"
            >
              View Opening Ceremony Folder
            </button>
          </div>
        ) : (
          /* PHOTOS GRID FOR SELECTED EVENT FOLDER */
          <motion.div
            key={activeFolder}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {currentPhotos.map((img, index) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                onClick={() => openLightbox(index)}
                className="group relative bg-slate-900/60 border border-slate-800 hover:border-[#38BDF8]/80 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center justify-between w-full text-white text-xs font-medium">
                      <span>{img.title}</span>
                      <div className="p-1.5 rounded-lg bg-sky-500 text-white">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activePhoto && selectedPhotoIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl z-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
                <span className="text-slate-300 text-xs font-mono font-medium">
                  {currentCategory?.name} — {selectedPhotoIndex + 1} / {currentPhotos.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image */}
              <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-4 min-h-[350px]">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl"
                />

                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-900/80 border border-slate-700 text-white hover:bg-sky-500 hover:border-sky-400 transition-all backdrop-blur-md shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-900/80 border border-slate-700 text-white hover:bg-sky-500 hover:border-sky-400 transition-all backdrop-blur-md shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                <span className="text-white text-sm font-semibold">{activePhoto.title}</span>
                <a
                  href={activePhoto.src}
                  download={`skyline-gallery-${activePhoto.id}.jpeg`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
