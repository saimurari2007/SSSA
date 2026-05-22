"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AmbientSilhouettes() {
  useEffect(() => {
    console.log("[AmbientSilhouettes] mounted");
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 bg-herbal-soft/20" aria-hidden>
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Top-right botanical - herb stem */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 text-sage/40">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M180 10C170 30 160 50 155 70C150 90 152 110 158 130C164 150 170 170 175 190" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M155 70C140 62 120 58 100 60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M158 100C143 94 125 92 108 95" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M165 130C150 126 135 125 118 128" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M158 130C162 120 168 108 175 95" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <ellipse cx="100" cy="58" rx="8" ry="14" stroke="currentColor" strokeWidth="1" transform="rotate(-25 100 58)" />
          <ellipse cx="108" cy="94" rx="6" ry="11" stroke="currentColor" strokeWidth="0.8" transform="rotate(-20 108 94)" />
        </svg>
      </div>

      {/* Bottom-left botanical - leaves */}
      <div className="absolute bottom-0 left-0 w-44 h-44 md:w-64 md:h-64 text-sage/40">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M20 190C35 170 45 145 50 120C55 95 52 70 45 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 120C65 115 85 112 105 115" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M48 90C62 84 80 80 98 83" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M48 90C42 80 38 68 40 55" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <ellipse cx="105" cy="117" rx="10" ry="18" stroke="currentColor" strokeWidth="1" transform="rotate(15 105 117)" />
          <ellipse cx="98" cy="85" rx="8" ry="14" stroke="currentColor" strokeWidth="0.8" transform="rotate(10 98 85)" />
        </svg>
      </div>

      {/* Animated leaf - top left */}
      <motion.div
        className="absolute top-[15%] left-[5%] w-20 h-20"
        animate={{
          y: [0, -12, 0],
          opacity: [0.25, 0.5, 0.25],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-sage/60">
          <path d="M10 90C20 70 35 55 60 45C85 35 90 15 95 10C90 15 67 21 55 48C43 70 30 80 10 90Z" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Animated leaf - bottom right */}
      <motion.div
        className="absolute bottom-[20%] right-[8%] w-24 h-24"
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.45, 0.2],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-forest/50">
          <path d="M10 90C20 70 35 55 60 45C85 35 90 15 95 10C90 15 67 21 55 48C43 70 30 80 10 90Z" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Ambient light glow */}
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] opacity-[0.2]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201, 220, 198, 0.6) 0%, rgba(168, 207, 163, 0.3) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Incense line */}
      <motion.div
        className="absolute bottom-[30%] right-[12%] w-10 h-40 text-sage/30"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 20 80" fill="none" className="w-full h-full">
          <path d="M10 80C9 60 11 45 10 30C9 15 11 5 10 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M12 75C11 55 13 40 12 25C11 12 13 3 12 0" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}
