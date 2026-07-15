import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, PhoneCall, X } from "lucide-react";

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

const NUHA_LOGO = "/assets/nuhalogo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetElement = document.querySelector(href);

    if (targetElement) {
      const navHeight = 76;
      const topOffset =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

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
        className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-luxury-gold-500/15 bg-espresso-950/95 py-3 shadow-xl backdrop-blur-md"
            : "border-b border-white/5 bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-[auto_1fr_auto] items-center">
          {/* Logo and brand name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex min-w-0 items-center gap-3 cursor-pointer"
            aria-label="Nuha Patisserie and Cafe — Home"
          >
            {/* Round logo */}
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-luxury-gold-400/50 bg-espresso-950 shadow-lg shadow-luxury-gold-500/10">
              <img
                src={NUHA_LOGO}
                alt="Nuha Patisserie and Cafe logo"
                className="block h-full w-full rounded-full object-contain"
                draggable={false}
              />
            </div>

            {/* Brand name in one line */}
            <div className="flex min-w-0 items-baseline gap-1.5 whitespace-nowrap">
              <span className="font-santorini text-[1.6rem] normal-case leading-none text-luxury-gold-300"></span>

              <span className="font-bombshell text-lg lowercase leading-none text-luxury-gold-400"></span>

              <span className="font-sans text-[7px] font-bold uppercase tracking-widest text-coffee-cream-100"></span>

              <span className="font-amsterdam text-base capitalize leading-none text-luxury-gold-300"></span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav
            className="hidden items-center gap-7 lg:flex xl:gap-8"
            aria-label="Desktop Navigation"
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="group relative py-2 font-sans text-sm font-medium tracking-wide text-coffee-cream-100 transition-colors hover:text-luxury-gold-400"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-xs bg-linear-to-r from-luxury-gold-500 to-luxury-gold-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-linear-to-r from-luxury-gold-600 via-luxury-gold-500 to-luxury-gold-700 px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-espresso-950 shadow-md shadow-luxury-gold-500/10 transition-all duration-300 hover:from-luxury-gold-500 hover:to-luxury-gold-600"
            >
              <PhoneCall size={13} />
              Book Table
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            id="mobile-navigation-toggle"
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="cursor-pointer p-2 text-coffee-cream-100 transition-colors hover:text-luxury-gold-400 focus:outline-none lg:hidden"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-espresso-950/98 px-6 py-24 backdrop-blur-lg lg:hidden"
          >
            <div className="absolute right-5 top-5">
              <button
                id="mobile-drawer-close"
                type="button"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer p-2 text-coffee-cream-200 transition-colors hover:text-luxury-gold-400 focus:outline-none"
                aria-label="Close navigation"
              >
                <X size={28} />
              </button>
            </div>

            <nav
              className="flex flex-col gap-6 text-center"
              aria-label="Mobile Navigation"
            >
              {LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-2xl font-medium uppercase tracking-wider text-coffee-cream-50 transition-colors hover:text-luxury-gold-400"
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
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-linear-to-r from-luxury-gold-600 to-luxury-gold-500 px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-wider text-espresso-950 hover:bg-luxury-gold-400"
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
