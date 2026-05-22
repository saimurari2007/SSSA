"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MortarPestle() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pestleRotation = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.4, 0.5, 0.6, 0.75, 0.88, 1],
    [0, -6, 4, -7, 5, -6, 3, -5, 0]
  );

  const pestleTilt = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1.5, -1, 1.2, 0]
  );

  const yPumping = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
    [0, 1, -1, 1.5, -1, 1, 0]
  );

  const yOffset = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const mortarScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1.005, 0.995, 1.005, 1]
  );

  const particleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0.4, 0.8, 0.6, 0.3, 0]
  );

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden>
      <motion.div
        style={{ y: yOffset, opacity }}
        className="absolute bottom-[8%] left-[3%] hidden md:block"
      >
        <svg
          width="90"
          height="110"
          viewBox="0 0 90 110"
          fill="none"
          className="text-earth/20"
        >
          {/* Mortar bowl */}
          <motion.g style={{ scale: mortarScale, transformOrigin: "45px 80px" }}>
            <path
              d="M14 72C14 82 20 96 45 96C70 96 76 82 76 72C76 68 74 62 68 58H22C16 62 14 68 14 72Z"
              fill="currentColor"
            />
            <path
              d="M16 60C16 56 20 52 24 50L20 46C16 50 12 56 12 62L16 60Z"
              fill="currentColor"
            />
            <path
              d="M74 60C74 56 70 52 66 50L70 46C74 50 78 56 78 62L74 60Z"
              fill="currentColor"
            />
          </motion.g>

          {/* Pestle with realistic grinding motion */}
          <motion.g
            style={{
              rotate: pestleRotation,
              transformOrigin: "45px 50px",
            }}
          >
            <motion.g
              style={{
                x: pestleTilt,
                y: yPumping,
              }}
            >
              <path
                d="M43 18C42 22 39 30 38 38C37 46 40 52 42 54C44 56 46 56 48 54C50 52 53 46 52 38C51 30 48 22 47 18C46.5 16 43.5 16 43 18Z"
                fill="currentColor"
              />
              <path
                d="M41 50C42 52 44 54 45 56C46 54 48 52 49 50"
                fill="currentColor"
              />
            </motion.g>
          </motion.g>

          {/* Grinding particles */}
          <motion.g style={{ opacity: particleOpacity }}>
            <circle cx="38" cy="58" r="1" fill="currentColor" opacity="0.3">
              <animate attributeName="cy" values="58;52;58" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="52" cy="56" r="0.8" fill="currentColor" opacity="0.25">
              <animate attributeName="cy" values="56;48;56" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="44" cy="60" r="0.6" fill="currentColor" opacity="0.2">
              <animate attributeName="cy" values="60;50;60" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
            </circle>
          </motion.g>

          <circle cx="30" cy="70" r="1.5" fill="currentColor" opacity="0.15" />
          <circle cx="55" cy="76" r="1" fill="currentColor" opacity="0.12" />
          <circle cx="42" cy="85" r="1.5" fill="currentColor" opacity="0.1" />
          <circle cx="60" cy="68" r="1" fill="currentColor" opacity="0.15" />
          <circle cx="25" cy="80" r="1" fill="currentColor" opacity="0.1" />
        </svg>
      </motion.div>
    </div>
  );
}
