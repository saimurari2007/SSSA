"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import MortarPestle from "@/components/MortarPestle";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Connect scroll hook to the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Interpolate scroll offsets for different visual layers to create a 3D parallax depth
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const yLeafFast = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yLeafSlow = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ivory pt-28 md:pt-20 pb-16"
    >
      {/* Warm vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(47,74,52,0.04)_70%,rgba(47,74,52,0.08)_100%)] pointer-events-none z-0" />

      {/* Cinematic Ambient Spots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,220,198,0.2),transparent_70%)] pointer-events-none z-0" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-herbal-soft/8 filter blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[5%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-sage/15 filter blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[15%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-gold/8 filter blur-[150px] pointer-events-none z-0"
      />

      {/* Parallax Background Graphic (Raw Ingredients watermark texture) */}
      <motion.div
        style={{ y: yBg, opacity: opacityHero }}
        className="absolute inset-0 w-full h-full opacity-[0.04] md:opacity-[0.06] pointer-events-none mix-blend-multiply z-0 select-none"
      >
        <Image
          src="/images/Hero.png"
          alt="Raw Ayurvedic ingredients background"
          fill
          sizes="100vw"
          priority
          loading="eager"
          className="object-cover object-center scale-105 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/50" />
      </motion.div>

      {/* Reading Zone Gradient Overlay â€” improves text readability on left side */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-4/5 bg-gradient-to-r from-ivory/90 via-ivory/50 to-transparent pointer-events-none z-[5]" />

      {/* Floating Parallax Leaf 1 (Fast Moving Foreground) */}
      <motion.div
        style={{ y: yLeafFast, opacity: opacityHero }}
        className="absolute top-[28%] right-[12%] w-14 h-14 pointer-events-none opacity-[0.3] hidden md:block z-20"
      >
        <svg viewBox="0 0 100 100" fill="none" className="text-forest/20 w-full h-full rotate-45">
          <path d="M10 90C20 70 35 55 60 45C85 35 90 15 95 10C90 15 67 21 55 48C43 70 30 80 10 90Z" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Floating Parallax Leaf 2 (Slow Moving Background) */}
      <motion.div
        style={{ y: yLeafSlow, opacity: opacityHero }}
        className="absolute bottom-[24%] left-[6%] w-20 h-20 pointer-events-none opacity-[0.15] hidden md:block z-0"
      >
        <svg viewBox="0 0 100 100" fill="none" className="text-sage/35 w-full h-full -rotate-12">
          <path d="M10 90C20 70 35 55 60 45C85 35 90 15 95 10C90 15 67 21 55 48C43 70 30 80 10 90Z" fill="currentColor" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-8">
        
        {/* Editorial Text Area */}
        <motion.div
          style={{ y: yText, opacity: opacityHero }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl text-left lg:pr-8 flex-1 relative z-10"
        >
          <div className="inline-flex items-center space-x-2 bg-sage/30 border border-sage/40 text-forest px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 select-none">
            <span>Rooted in Ballari</span>
            <span className="w-1.5 h-1.5 bg-herbal-soft rounded-full" />
            <span>Serving Karnataka</span>
          </div>

          <h1 className="font-serif text-[48px] sm:text-[62px] md:text-[80px] lg:text-[90px] xl:text-[96px] font-bold tracking-tight text-forest leading-[1.04] mb-6 drop-shadow-[0_2px_8px_rgba(47,74,52,0.12)]">
            Rooted in Ayurveda.
            <br />
            <span className="text-earth font-light italic font-serif">Trusted</span> for Generations.
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-body font-light leading-relaxed max-w-2xl mb-12">
            Premium Ayurvedic and traditional wellness remedies curated for raw purity, organic authenticity, and natural healing. Delivering verified health formulations directly to your doorstep across Karnataka.
          </p>

          <div className="flex flex-row flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollToSection("categories")}
              className="group flex items-center space-x-2.5 bg-forest text-ivory hover:bg-forest/95 transition-all duration-300 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md hover:shadow-xl hover:shadow-forest/10"
            >
              <span>Explore Categories</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center space-x-2 bg-transparent text-forest hover:bg-sage/10 transition-all duration-300 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest border border-forest/30"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
          </div>
        </motion.div>

        {/* Cinematic Raw Ingredients Display Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-md h-[45vh] lg:h-[52vh] flex items-center justify-center lg:justify-end flex-shrink-0"
        >
          {/* Frosted Glass Frame */}
          <div className="relative w-11/12 md:w-5/6 h-full bg-white/25 backdrop-blur-[12px] rounded-[2rem] border border-white/30 shadow-[0_12px_40px_rgba(61,90,64,0.04)] p-6 md:p-8 flex flex-col justify-between overflow-hidden group hover:border-sage/40 hover:shadow-[0_15px_50px_rgba(61,90,64,0.08)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-gold/5 pointer-events-none" />
            
            {/* Frame Top Detail */}
            <div className="flex justify-between items-start select-none">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-body/50">Since 1980</p>
                <h4 className="font-serif text-base text-forest font-semibold mt-1">Sri Sai Satya</h4>
              </div>
              <span className="text-gold font-serif italic text-xs tracking-wider">Shuddha</span>
            </div>

            {/* Central Raw Ingredients Image container */}
            <div className="relative w-full h-[62%] my-4 rounded-2xl overflow-hidden border border-sage/15 shadow-sm">
              <Image
                src="/images/Hero.png"
                alt="Raw Ayurvedic ginger, herbs, and stone mortar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 pointer-events-none"
              />
            </div>

            {/* Frame Footer Detail */}
            <div className="flex justify-between items-end border-t border-sage/10 pt-4 select-none">
              <div>
                <p className="text-[8px] uppercase tracking-wider text-body/50">Premium Sourcing</p>
                <p className="font-sans text-[11px] font-medium text-body mt-0.5">Raw botanical herbs & roots</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-forest text-ivory flex items-center justify-center text-[10px] font-semibold tracking-wider shadow-sm">
                100%
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Visual divider: organic wavy bottom */}
      <MortarPestle />
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 select-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12 text-offwhite fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}


