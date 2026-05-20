"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, PhoneCall, Sparkles } from "lucide-react";

interface Category {
  title: string;
  desc: string;
  items: string[];
  icon: string;
}

const categoriesData: Category[] = [
  {
    title: "Herbal Medicines",
    desc: "Classical tablets, capsules, and herbal decoctions formulated to support chronic system relief and restore internal equilibrium.",
    items: ["Chandraprabha Vati (Urinary Care)", "Kanchnar Guggulu (Glandular Support)", "Arogyavardhini Vati (Liver & Skin)", "Brahmi Vati (Cognitive Support)"],
    icon: "🍃",
  },
  {
    title: "Ayurvedic Powders",
    desc: "Pure, stone-ground herbal powders (churnas) sourced from single organic plants or classical poly-herbal botanical blends.",
    items: ["Triphala Churna (Digestive Health)", "Ashwagandha Churna (Energy & Stress)", "Shatavari Churna (Hormonal Balance)", "Avipattikar Churna (Acidity & Laxative)"],
    icon: "🪵",
  },
  {
    title: "Oils",
    desc: "Medicated herbal oils prepared through traditional slow-infusion processes, perfect for therapeutic massage, joint care, or nasal therapy.",
    items: ["Mahanarayan Taila (Joint & Muscle Pain)", "Bhringraj Taila (Hair Growth & Sleep)", "Anu Taila (Nasal Therapy & Congestion)", "Kshirabala Taila (Neuromuscular Strength)"],
    icon: "🍯",
  },
  {
    title: "Syrups",
    desc: "Highly bio-available liquid formulations, including classical Arishtas and Asavas, that act quickly on metabolic pathways.",
    items: ["Shankhpushpi Syrup (Memory & Concentration)", "Ashokarishta (Women's Health Tonic)", "Dashmularishta (Post-natal Recovery)", "Kumaryasava (Digestive & Liver Tonic)"],
    icon: "🧪",
  },
  {
    title: "Wellness Products",
    desc: "General tonics and daily nutrients that help protect the body against environmental stress and support longevity.",
    items: ["Premium Chyawanprash (Daily Immunity)", "Pure Gold-Graded Shilajit Resin", "Organic Aloe Vera Juice (Digestive)", "Amla Juice (Natural Vitamin C)"],
    icon: "☀️",
  },
  {
    title: "Herbal Supplements",
    desc: "Single-herb standardized extracts packed into modern capsules or tablets for precise daily dosing and targeted wellness support.",
    items: ["Neem Capsules (Blood Cleanser)", "Guduchi / Giloy Tablets (Fever & Immune)", "Tulsi Liquid Drops (Respiratory Health)", "Turmeric Curcumin (Anti-inflammatory)"],
    icon: "🌱",
  },
  {
    title: "Immunity Care",
    desc: "Traditional formulations engineered to strengthen the body's natural defense systems (Ojas) and build seasonal resilience.",
    items: ["Giloy Ghanvati (Immunity Booster)", "Ayush Kwath (Classical Herbal Infusion)", "Haridra Khanda (Anti-allergic Powder)", "Agastya Haritaki Rasayana (Respiratory)"],
    icon: "🛡️",
  },
  {
    title: "Personal Care",
    desc: "Chemical-free, Ayurvedic beauty, hair care, and skincare remedies formulated with organic botanical extracts and essential oils.",
    items: ["Bhringraj & Shikakai Hair Shampoo", "Neem & Purifying Tulsi Face Wash", "Kumkumadi Tailam (Luxury Skin Glow Oil)", "Organic Aloe Vera Skin Gel"],
    icon: "✨",
  },
];

export default function Categories() {
  const [selectedCat, setSelectedCat] = useState<Category | null>(null);

  const handleWhatsAppOrder = (catTitle: string) => {
    const number = "919844554437";
    const text = encodeURIComponent(
      `Hello Sri Sai Satya Ayurvedhalaya, I am interested in inquiring about products in the "${catTitle}" category. Please let me know what brands you stock and availability.`
    );
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <section id="categories" className="py-24 md:py-36 bg-offwhite relative overflow-hidden">
      {/* Background glowing light accents */}
      <div className="absolute top-[20%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-herbal-soft/6 filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-sage/8 filter blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4 text-left">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
            Product Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest leading-[1.12]">
            Curated Categories of Traditional Remedies
          </h2>
          <p className="font-sans text-forest/75 font-light text-xs sm:text-sm md:text-base max-w-xl">
            We inventory a comprehensive selection of natural products. Click on any category below to view specific stocked items and send an instant stock inquiry.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.01 }}
              onClick={() => setSelectedCat(cat)}
              className="bg-white/45 backdrop-blur-md rounded-3xl border border-sage/15 p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(61,90,64,0.01)] hover:shadow-[0_15px_35px_rgba(61,90,64,0.04)] hover:border-gold/45 hover:bg-white/65 cursor-pointer transition-all duration-300 group overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 select-none">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-forest group-hover:text-forest">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs text-forest/70 font-light leading-relaxed line-clamp-3">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-6 flex items-center text-gold text-[9px] uppercase font-bold tracking-[0.18em] group-hover:text-forest transition-colors mt-6 select-none">
                <span>View Products</span>
                <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Detail Dialog */}
      <AnimatePresence>
        {selectedCat && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCat(null)}
              className="absolute inset-0 bg-forest/20 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-ivory/95 backdrop-blur-xl border border-sage/20 rounded-[2rem] p-8 shadow-2xl z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-sage/10 filter blur-xl" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCat(null)}
                className="absolute top-6 right-6 text-forest/50 hover:text-forest p-1.5 rounded-full hover:bg-sage/15 transition-all"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                
                <div className="flex items-center space-x-3.5">
                  <span className="text-3xl select-none">{selectedCat.icon}</span>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gold font-bold">
                      Stock Portfolio
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest">
                      {selectedCat.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-forest/80 font-light leading-relaxed">
                  {selectedCat.desc}
                </p>

                <div className="space-y-3">
                  <h4 className="font-sans text-[9px] uppercase tracking-wider text-earth font-bold flex items-center space-x-1.5 select-none">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span>Popular In-Stock Formulations</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-forest/90 font-light">
                    {selectedCat.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 bg-sage/10 px-3 py-2 rounded-xl border border-sage/5">
                        <span className="w-1.5 h-1.5 bg-herbal-soft rounded-full flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-[1px] bg-sage/15 pt-2" />

                {/* WhatsApp & Call CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => handleWhatsAppOrder(selectedCat.title)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-forest text-ivory hover:bg-forest/95 transition-all py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                  <a
                    href="tel:+919844554437"
                    className="flex-shrink-0 flex items-center justify-center space-x-2 bg-transparent text-forest border border-forest/20 hover:bg-sage/10 transition-all py-3 px-6 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Store</span>
                  </a>
                </div>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
