"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send, MessageSquare, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "General Inquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const number = "919844554437";
    const text = encodeURIComponent(
      `Hello Sri Sai Satya Ayurvedhalaya,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInquiry: ${formData.category}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-offwhite relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-sage/8 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16 sm:mb-20 space-y-4">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest leading-[1.12]">
            Visit Us in Ballari or Contact Online
          </h2>
          <p className="font-sans text-forest/75 font-light text-xs sm:text-sm md:text-base leading-relaxed">
            Have questions about specific classical preparations, oil details, or prescription availability? Reach out directly or visit our retail store.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Info & Google Maps */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Info Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Address Card */}
              <div className="bg-white/45 backdrop-blur-md rounded-3xl border border-sage/15 p-6 space-y-4">
                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-forest">
                  <MapPin className="w-4 h-4 text-herbal-soft" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-forest text-base sm:text-lg">Our Location</h4>
                  <p className="font-sans text-[11px] sm:text-xs text-forest/80 font-light leading-relaxed">
                    Sri Sai Satya Ayurvedhalaya<br />
                    Kambli Bazaar, Bangalore Road,<br />
                    Ballari, Karnataka - 583101
                  </p>
                </div>
              </div>

              {/* Direct Phones Card */}
              <div className="bg-white/45 backdrop-blur-md rounded-3xl border border-sage/15 p-6 space-y-4">
                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-forest">
                  <Phone className="w-4 h-4 text-herbal-soft" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-forest text-base sm:text-lg">Direct Contacts</h4>
                  <p className="font-sans text-[11px] sm:text-xs text-forest/80 font-light leading-relaxed">
                    Murali Mohan: <a href="tel:+919844554437" className="hover:text-gold transition-colors font-medium">+91 98445 54437</a><br />
                    Radhika: <a href="tel:+919880276582" className="hover:text-gold transition-colors font-medium">+91 98802 76582</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Timings Card */}
            <div className="bg-white/45 backdrop-blur-md rounded-3xl border border-sage/15 p-6 sm:p-7 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-forest">
                  <Clock className="w-4 h-4 text-herbal-soft" />
                </div>
                <h4 className="font-serif font-bold text-forest text-base sm:text-lg">Shop Timings</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2 font-sans text-xs">
                <div className="border-r border-sage/20 pr-4 space-y-1">
                  <span className="font-semibold text-forest">Monday to Friday</span>
                  <p className="text-forest/75 font-light">10:00 AM – 2:00 PM</p>
                  <p className="text-forest/75 font-light">4:00 PM – 9:00 PM</p>
                </div>
                <div className="pl-2 space-y-1">
                  <span className="font-semibold text-forest">Saturday</span>
                  <p className="text-forest/75 font-light">10:00 AM – 2:00 PM</p>
                  <span className="font-semibold text-forest block pt-1">Sunday</span>
                  <p className="text-forest/40 italic">Closed</p>
                </div>
              </div>
            </div>

            {/* Map Frame Embed */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-md border border-sage/15 h-[280px] w-full group">
              <iframe
                title="Sri Sai Satya Ayurvedhalaya Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.6749964570085!2d76.92095627581232!3d15.148729585392096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb713915155f9a5%3A0x6b4be936bc9ebba0!2sBangalore%20Rd%2C%20Ballari%2C%20Karnataka%20583101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-auto"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sage/20 text-[9px] font-bold uppercase tracking-wider text-forest pointer-events-none flex items-center space-x-1.5 shadow-sm">
                <span>View Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </div>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white/45 backdrop-blur-md rounded-[2rem] border border-sage/15 p-6 sm:p-8 shadow-[0_12px_40px_rgba(61,90,64,0.02)] relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sage/5 rounded-full filter blur-xl pointer-events-none" />
              
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest mb-6">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-sans text-[9px] uppercase tracking-widest font-bold text-forest/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-ivory/50 border border-sage/20 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-gold focus:bg-ivory transition-colors text-forest font-light placeholder:text-forest/30"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="font-sans text-[9px] uppercase tracking-widest font-bold text-forest/70">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full bg-ivory/50 border border-sage/20 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-gold focus:bg-ivory transition-colors text-forest font-light placeholder:text-forest/30"
                  />
                </div>

                {/* Category Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="category" className="font-sans text-[9px] uppercase tracking-widest font-bold text-forest/70">
                    Inquiry Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-ivory/50 border border-sage/20 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-gold focus:bg-ivory transition-colors text-forest font-light"
                  >
                    <option value="General Inquiry">General Wellness Inquiry</option>
                    <option value="Herbal Medicines">Herbal Medicines Stock</option>
                    <option value="Oils & Syrups">Oils & Classical Syrups</option>
                    <option value="Prescription Order">Inquire Prescription Order</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-sans text-[9px] uppercase tracking-widest font-bold text-forest/70">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type details of your requirements or query here..."
                    className="w-full bg-ivory/50 border border-sage/20 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-gold focus:bg-ivory transition-colors text-forest font-light placeholder:text-forest/30 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center space-x-2.5 bg-forest text-ivory hover:bg-forest/95 transition-all duration-300 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit via WhatsApp</span>
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* Premium Minimal Footer */}
        <div className="mt-24 pt-12 border-t border-sage/20 flex flex-col md:flex-row items-center justify-between font-sans text-xs text-forest/50">
          <div className="flex flex-col items-center md:items-start space-y-1 mb-6 md:mb-0">
            <span className="font-serif text-sm font-semibold text-forest tracking-wider select-none">
              Sri Sai Satya Ayurvedhalaya
            </span>
            <p className="font-light">Authorized Super Stockist & Retailer. Ballari, Karnataka.</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0 select-none">
            {["About", "Brands", "Categories", "Orders"].map((lnk) => (
              <a
                key={lnk}
                href={`#${lnk.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, lnk.toLowerCase())}
                className="hover:text-forest transition-colors uppercase tracking-widest text-[9px] font-medium"
              >
                {lnk}
              </a>
            ))}
          </div>
          <div className="font-light select-none text-[10px]">
            © {new Date().getFullYear()} Sri Sai Satya Ayurvedhalaya. All rights reserved.
          </div>
        </div>

      </div>
    </section>
  );
}
