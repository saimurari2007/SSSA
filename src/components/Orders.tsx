"use client";

import { motion } from "framer-motion";
import { Send, FileCheck2, Truck, MessageSquare, Phone } from "lucide-react";

export default function Orders() {
  const steps = [
    {
      icon: <Send className="w-5 h-5 text-gold" />,
      title: "1. Share Prescription",
      desc: "Send a photo of your prescription or required items list directly via WhatsApp or our email form.",
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-gold" />,
      title: "2. Stock & Expiry Check",
      desc: "Our pharmacists verify batch details, double check fresh expiry dates, and reply with pricing details.",
    },
    {
      icon: <Truck className="w-5 h-5 text-gold" />,
      title: "3. Dispatched & Delivered",
      desc: "Pay securely via UPI. We pack in premium shockproof envelopes and ship across Karnataka.",
    },
  ];

  const handleWhatsAppOrder = () => {
    const number = "919844554437";
    const text = encodeURIComponent(
      "Hello Sri Sai Satya Ayurvedhalaya, I would like to place an order for Ayurvedic medicines. Here is my requirements list:"
    );
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <section id="orders" className="py-24 md:py-36 bg-ivory relative overflow-hidden">
      {/* Vignette depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(47,74,52,0.03)_70%,rgba(47,74,52,0.06)_100%)] pointer-events-none" />
      {/* Background glows */}
      <div className="absolute top-[20%] left-[10%] w-[38vw] h-[38vw] rounded-full bg-sage/6 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[38vw] h-[38vw] rounded-full bg-gold/5 filter blur-[100px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Frosted glass container box */}
        <div className="bg-white/45 backdrop-blur-md rounded-[2.5rem] border border-sage/15 p-8 md:p-16 shadow-[0_12px_40px_-15px_rgba(61,90,64,0.03)] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-36 h-36 bg-gold/5 rounded-full filter blur-2xl -z-10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/8 rounded-full filter blur-3xl -z-10" />

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
              Online Orders & Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest leading-[1.12]">
              Seamless Delivery Across Karnataka
            </h2>
            <p className="font-sans text-body/85 font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We stock hard-to-find classical Ayurvedic formulations and ship directly from our main depot in Ballari to all towns and districts in Karnataka.
            </p>
          </div>

          {/* Process Step Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start mb-16 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 group select-none">
                <div className="w-14 h-14 rounded-full bg-ivory border border-sage/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-gold/40 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-forest">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-body/75 font-light leading-relaxed max-w-[260px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Click actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full sm:w-auto group flex items-center justify-center space-x-2.5 bg-forest text-ivory hover:bg-forest/95 transition-all duration-300 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md hover:shadow-xl hover:shadow-forest/10"
            >
              <MessageSquare className="w-4 h-4 text-herbal-soft" />
              <span>Order on WhatsApp</span>
            </button>
            <a
              href="tel:+919844554437"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent text-forest border border-forest/20 hover:bg-sage/10 transition-all duration-300 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest"
            >
              <Phone className="w-4 h-4 text-body/70" />
              <span>Call +91 98445 54437</span>
            </a>
          </div>

        </div>

      </motion.div>
    </section>
  );
}


