"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";

interface Brand {
  name: string;
  role: string;
  desc: string;
  legacy: string;
  color: string;
}

const brandsList: Brand[] = [
  {
    name: "Dabur",
    role: "Authorized Stockist",
    desc: "Over a century of trust, offering legendary formulations like Chyawanprash, Honey, and classical medicines.",
    legacy: "Est. 1884",
    color: "from-forest/10 to-herbal-soft/5",
  },
  {
    name: "Baidyanath",
    role: "Super Stockist",
    desc: "Pioneers of standardizing classical Ayurvedic recipes, providing authentic mineral-herbal compounds and Asavas.",
    legacy: "Est. 1917",
    color: "from-earth/10 to-gold/5",
  },
  {
    name: "Zandu",
    role: "Authorized Stockist",
    desc: "Known for pain-relief balms, traditional tablets, and daily wellness tonics with clinically backed purity.",
    legacy: "Est. 1910",
    color: "from-forest/10 to-gold/5",
  },
  {
    name: "Keva Kaipo",
    role: "Super Stockist",
    desc: "A modern conglomerate focusing on organic health drops, herbal juices, and premium food supplements.",
    legacy: "Est. 2009",
    color: "from-earth/10 to-herbal-soft/5",
  },
  {
    name: "Himalaya Wellness",
    role: "Authorized Partner",
    desc: "Blending scientific research with Ayurveda for highly effective personal care, skin health, and daily wellness support.",
    legacy: "Est. 1930",
    color: "from-forest/10 to-herbal-soft/5",
  },
  {
    name: "Charak Pharma",
    role: "Authorized Stockist",
    desc: "Specialized in clinically proven, premium proprietary formulations for acute and chronic system wellness.",
    legacy: "Est. 1947",
    color: "from-earth/10 to-gold/5",
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 md:py-36 bg-ivory relative overflow-hidden">
      {/* Background Soft Spots */}
      <div className="absolute top-[15%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-sage/8 filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gold/6 filter blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-forest/5 text-forest px-3.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] select-none">
            <Award className="w-3.5 h-3.5 text-gold" />
            <span>Official Distribution Hub</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest leading-[1.12]">
            Authorized Stockist & Super Stockist
          </h2>
          <p className="font-sans text-forest/75 font-light text-xs sm:text-sm md:text-base leading-relaxed">
            We partner directly with India&apos;s oldest and most prestigious Ayurvedic research and manufacturing institutions, assuring 100% genuine and verified inventory.
          </p>
        </div>

        {/* Brand Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Cinematic Banner Card */}
          <div className="lg:col-span-4 relative rounded-[2rem] overflow-hidden shadow-lg border border-sage/15 min-h-[360px] lg:min-h-full group select-none">
            <Image
              src="/images/brand_showcase.png"
              alt="Premium apothecary display setup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[9px] uppercase tracking-widest text-gold font-bold mb-2">
                Purity Guaranteed
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight mb-3">
                Direct Supply Chain
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-ivory/80 font-light leading-relaxed">
                By bypassing third-party wholesalers, we receive fresh, batch-certified herbal formulations directly from state-of-the-art production laboratories in India.
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Brand Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {brandsList.map((brand, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative bg-white/45 backdrop-blur-md rounded-3xl border border-sage/15 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_30px_rgba(61,90,64,0.015)] group hover:shadow-[0_15px_35px_rgba(61,90,64,0.05)] hover:border-sage/35 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-555 pointer-events-none`} />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="font-sans text-[9px] text-forest/40 uppercase tracking-widest">
                      {brand.legacy}
                    </span>
                    <span className="inline-flex items-center space-x-1 bg-sage/20 text-forest text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                      <ShieldCheck className="w-2.5 h-2.5 text-herbal-soft" />
                      <span>{brand.role}</span>
                    </span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest">
                    {brand.name}
                  </h4>

                  <p className="font-sans text-xs text-forest/75 font-light leading-relaxed">
                    {brand.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
