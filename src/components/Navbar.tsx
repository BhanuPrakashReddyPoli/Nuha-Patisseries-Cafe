import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Menu, X, PhoneCall } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Coffee", href: "#coffee" },
  { label: "Pastries", href: "#pastries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 76; // Exact navbar offset
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-espresso-950/95 border-b border-luxury-gold-500/15 py-3 shadow-xl backdrop-blur-md"
            : "bg-transparent border-b border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-luxury-gold-700 via-luxury-gold-500 to-luxury-gold-200 p-0.5 flex items-center justify-center shadow-lg shadow-luxury-gold-500/10 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-espresso-950 flex items-center justify-center">
                <Coffee size={18} className="text-luxury-gold-400 group-hover:text-luxury-gold-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white flex items-baseline gap-1 leading-none">
                <span className="font-santorini text-2xl text-luxury-gold-300 normal-case leading-none">Nuha</span>
                <span className="font-bombshell text-xl text-luxury-gold-400 lowercase leading-none -translate-y-[2px]">patisserie</span>
                <span className="font-sans text-[8px] uppercase tracking-widest text-coffee-cream-100 font-bold leading-none">and</span>
                <span className="font-amsterdam text-lg text-luxury-gold-300 capitalize leading-none">café</span>
              </span>
              <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-luxury-gold-400/80 mt-1.5 block leading-none">
                Banglore
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-sm font-medium tracking-wide text-coffee-cream-100 hover:text-luxury-gold-400 transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-luxury-gold-500 to-luxury-gold-300 group-hover:w-full transition-all duration-300 rounded-xs"></span>
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center gap-2 bg-linear-to-r from-luxury-gold-600 via-luxury-gold-500 to-luxury-gold-700 hover:from-luxury-gold-500 hover:to-luxury-gold-600 text-espresso-950 font-sans font-semibold text-xs tracking-wider uppercase py-2.5 px-5 rounded-md transition-all duration-300 shadow-md shadow-luxury-gold-500/10 cursor-pointer"
            >
              <PhoneCall size={13} />
              Book Table
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            id="mobile-navigation-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-coffee-cream-100 hover:text-luxury-gold-400 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-espresso-950/98 backdrop-blur-lg flex flex-col justify-center items-center lg:hidden"
          >
            <div className="absolute top-6 right-6">
              <button
                id="mobile-drawer-close"
                onClick={() => setIsOpen(false)}
                className="p-2 text-coffee-cream-200 hover:text-luxury-gold-400 focus:outline-none cursor-pointer"
                aria-label="Close navigation"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-center" aria-label="Mobile Navigation">
              {LINKS.map((link, i) => (
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-2xl font-medium text-coffee-cream-50 hover:text-luxury-gold-400 transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: LINKS.length * 0.05 }}
                className="mt-6"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="inline-flex items-center gap-2 bg-linear-to-r from-luxury-gold-600 to-luxury-gold-500 text-espresso-950 font-sans font-bold text-sm tracking-wider uppercase py-3.5 px-8 rounded-md hover:bg-luxury-gold-400 cursor-pointer"
                >
                  <PhoneCall size={16} />
                  Book A Special Table
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
