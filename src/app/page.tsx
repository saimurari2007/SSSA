"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";
import Orders from "@/components/Orders";
import Contact from "@/components/Contact";
import LeafParticles from "@/components/LeafParticles";
import LeafCursor from "@/components/LeafCursor";
import AmbientSilhouettes from "@/components/AmbientSilhouettes";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Ambient Background Layers */}
      <AmbientSilhouettes />

      {/* Custom Cursor & Canvas Particles */}
      <LeafCursor />
      <LeafParticles />

      {/* Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="relative z-20 flex flex-col min-h-screen">
        <Hero />
        <About />
        <Brands />
        <Categories />
        <Orders />
        <Contact />
      </main>
    </>
  );
}

