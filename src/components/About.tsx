"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Connect scroll hook to section wrapper
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calculate distinct scroll rates for layered parallax depth
  const yImage = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yBadge = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-offwhite overflow-hidden"
    >
      {/* Soft Green Ambient Light */}
      <div className="absolute top-[30%] right-[3%] w-[40vw] h-[40vw] rounded-full bg-sage/8 filter blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                Established Legacy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest leading-[1.12]">
                Authentic Healing from the Heart of Ballari
              </h2>
            </div>

            <div className="h-[1px] w-24 bg-gold/60" />

            <div className="font-sans text-forest/80 font-light leading-relaxed space-y-6 max-w-2xl text-xs sm:text-sm md:text-base">
              <p>
                For decades, <strong className="font-semibold text-forest">Sri Sai Satya Ayurvedhalaya</strong> has stood as a trusted destination of genuine wellness in Ballari, Karnataka. Located at Kambli Bazaar, Bangalore Road, we are dedicated to preserving the purity and therapeutic integrity of traditional Indian medicine.
              </p>
              <p>
                We believe that genuine healing begins where ancestral wisdom integrates with modern quality standards. Our shelves represent a curation of the finest, licensed herbal formulations designed to support your body's natural balance.
              </p>
              <p>
                As authorized distributors, super stockists, and retail specialists for India's most respected Ayurvedic pharmacies, we ensure that every formulation on our shelves meets rigorous purity standards.
              </p>
            </div>

            {/* Heritage Statistics Counters */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-sage/20 select-none">
              {[
                { number: "40+", label: "Years of Trust", desc: "Ballari & surrounding" },
                { number: "100%", label: "Authentic Sourcing", desc: "Direct from houses" },
                { number: "50k+", label: "Inquiries Fulfilled", desc: "Across Karnataka" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-forest">{stat.number}</div>
                  <div className="font-sans text-[9px] sm:text-[10px] font-bold text-earth uppercase tracking-widest leading-normal">{stat.label}</div>
                  <div className="font-sans text-[9px] text-forest/50">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cinematic Parallax Graphic Frame */}
          <div className="lg:col-span-5 relative w-full h-[45vh] lg:h-[58vh] flex items-center justify-center mt-8 lg:mt-0">
            {/* Elegant double-border design element */}
            <div className="absolute inset-0 border border-sage/25 rounded-3xl translate-x-5 translate-y-5 -z-10 pointer-events-none" />

            {/* Main Parallax Image Container */}
            <motion.div
              style={{ y: yImage, opacity: opacityFade }}
              className="relative w-full h-[92%] rounded-3xl overflow-hidden shadow-xl border border-white/20 bg-ivory"
            >
              <Image
                src="/images/mortar_pestle.png"
                alt="Stone mortar and pestle with fresh green leaves"
                fill
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Overlapping Parallax Floating Quote Badge */}
            <motion.div
              style={{ y: yBadge }}
              className="absolute bottom-2 -left-4 sm:-left-6 bg-white/85 backdrop-blur-md rounded-2xl border border-sage/10 shadow-lg p-5 max-w-[180px] sm:max-w-[210px] select-none"
            >
              <p className="font-serif text-earth italic text-xs sm:text-sm">“Arogya Paramam Bhagyam”</p>
              <p className="font-sans text-[9px] sm:text-[10px] text-forest/75 mt-2 leading-relaxed font-light">
                Health is the ultimate wealth. We source pure formulations directly from trusted houses.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
