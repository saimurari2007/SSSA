"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Enable frosted glass backdrop after scrolling 40px
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 md:px-12 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-ivory/75 backdrop-blur-md border-b border-sage/20 py-3 shadow-[0_4px_30px_rgba(61,90,64,0.03)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center space-x-2 text-forest select-none group"
          >
            <Leaf className="w-5 h-5 text-herbal-soft group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-serif text-lg md:text-xl tracking-wider font-semibold">
              Sri Sai Satya
              <span className="text-gold font-light italic ml-1.5">Ayurvedhalaya</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "About", id: "about" },
              { label: "Brands", id: "brands" },
              { label: "Categories", id: "categories" },
              { label: "Orders", id: "orders" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="font-sans text-xs uppercase tracking-widest text-forest/70 hover:text-forest transition-colors duration-300 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-herbal-soft transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Contact Quick Link */}
          <div className="hidden md:block">
            <a
              href="tel:+919844554437"
              className="flex items-center space-x-2 bg-forest text-ivory hover:bg-forest/90 transition-all duration-300 px-5 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-widest shadow-md hover:shadow-lg hover:shadow-forest/10 border border-forest/10"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-forest hover:text-herbal-soft transition-colors focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs bg-ivory shadow-2xl border-l border-sage/20 p-8 flex flex-col justify-between transition-transform duration-500 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 mt-16">
          <div className="flex items-center space-x-2 text-forest pb-6 border-b border-sage/10">
            <Leaf className="w-5 h-5 text-herbal-soft" />
            <span className="font-serif text-lg font-semibold">Sri Sai Satya</span>
          </div>
          {[
            { label: "About Store", id: "about" },
            { label: "Our Brands", id: "brands" },
            { label: "Product Categories", id: "categories" },
            { label: "Direct Orders", id: "orders" },
            { label: "Contact & Timings", id: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="font-serif text-lg text-forest hover:text-herbal-soft transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <div className="text-[10px] text-forest/40 uppercase tracking-widest">
            Ballari, Karnataka
          </div>
          <a
            href="tel:+919844554437"
            className="flex items-center justify-center space-x-2 bg-forest text-ivory py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-forest/90 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 98445 54437</span>
          </a>
        </div>
      </div>

      {/* Drawer backdrop overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-forest/15 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </>
  );
}
