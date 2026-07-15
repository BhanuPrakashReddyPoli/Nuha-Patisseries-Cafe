import React from "react";
import { Coffee, ArrowUp, Heart, Shield, Instagram } from "lucide-react";

const INSTAGRAM_URL =
  "https://www.instagram.com/cafe.nuha?igsh=NXZ0Zmsxdmhrc3p0";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="main-footer"
      className="relative overflow-hidden border-t border-luxury-gold-500/10 bg-espresso-950 px-6 pb-10 pt-20 text-white lg:px-8"
    >
      {/* Decorative backdrop blobs */}
      <div className="pointer-events-none absolute left-10 top-1/2 -z-10 h-96 w-96 rounded-full bg-espresso-900/40 blur-3xl"></div>

      <div className="pointer-events-none absolute bottom-10 right-10 -z-10 h-64 w-64 rounded-full bg-luxury-gold-700/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 border-b border-white/5 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          {/* Col 1: Brand details */}
          <div className="text-left lg:col-span-4">
            <div
              className="mb-6 flex cursor-pointer items-center gap-2"
              onClick={handleScrollTop}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-luxury-gold-700 via-luxury-gold-500 to-luxury-gold-200 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-espresso-950">
                  <Coffee size={18} className="text-luxury-gold-400" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="flex items-baseline gap-1 leading-none text-white">
                  <span className="font-santorini text-2xl normal-case leading-none text-luxury-gold-300">
                    Nuha
                  </span>

                  <span className="font-bombshell -translate-y-[2px] text-xl lowercase leading-none text-luxury-gold-400">
                    patisserie
                  </span>

                  <span className="font-sans text-[8px] font-bold uppercase leading-none tracking-widest text-coffee-cream-100">
                    and
                  </span>

                  <span className="font-amsterdam text-lg capitalize leading-none text-luxury-gold-300">
                    café
                  </span>
                </span>

                <span className="mt-1.5 block font-mono text-[9px] uppercase leading-none tracking-[0.25em] text-luxury-gold-400/80">
                  Indiranagar
                </span>
              </div>
            </div>

            <p className="mb-6 max-w-sm font-sans text-xs font-light leading-relaxed text-coffee-cream-300">
              A premium acoustic and architectural sanctuary designed for deep
              conversations, slow mornings, and specialty coffee lovers. We
              extract every drop with scientific calibration and bake fresh
              hand-laminated Viennoiserie daily.
            </p>

            {/* Environmental / Ethical statement */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-luxury-gold-500/10 bg-espresso-900/60 px-3 py-1.5">
              <Shield size={12} className="text-luxury-gold-400" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-coffee-cream-300">
                100% Carbon-Neutral Direct Trade
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="text-left lg:col-span-2">
            <h4 className="mb-6 border-b border-white/5 pb-2 font-serif text-sm font-bold uppercase tracking-wider text-white">
              Sanctuary
            </h4>

            <ul className="space-y-3 font-sans text-xs font-light text-coffee-cream-300">
              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Welcome Cover
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Our Philosophy
                </a>
              </li>

              <li>
                <a
                  href="#coffee"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Specialty Coffee
                </a>
              </li>

              <li>
                <a
                  href="#pastries"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Gourmet Bakery
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Visual Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Secondary Links */}
          <div className="text-left lg:col-span-2">
            <h4 className="mb-6 border-b border-white/5 pb-2 font-serif text-sm font-bold uppercase tracking-wider text-white">
              Contact & Hours
            </h4>

            <ul className="space-y-3 font-sans text-xs font-light text-coffee-cream-300">
              <li>
                <a
                  href="#hours"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Opening Hours
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Inquiry Ledger
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Guest Voices
                </a>
              </li>

              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-luxury-gold-400"
                >
                  Social Feed
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Instagram */}
          <div className="text-left lg:col-span-4">
            <h4 className="mb-6 border-b border-white/5 pb-2 font-serif text-sm font-bold uppercase tracking-wider text-white">
              Follow Nuha
            </h4>

            <p className="mb-5 font-sans text-xs font-light leading-relaxed text-coffee-cream-300">
              Follow us on Instagram for fresh pastries, specialty coffee,
              seasonal creations, café moments, and the latest updates from
              Nuha.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg border border-luxury-gold-500/20 bg-espresso-900/60 px-5 py-3 font-sans text-xs font-bold uppercase tracking-wider text-coffee-cream-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-luxury-gold-400 hover:bg-luxury-gold-500 hover:text-espresso-950"
              aria-label="Follow Nuha Patisserie and Cafe on Instagram"
            >
              <Instagram
                size={16}
                className="text-luxury-gold-400 transition-colors group-hover:text-espresso-950"
              />
              Follow on Instagram
            </a>

            <p className="mt-4 font-mono text-[9px] uppercase tracking-widest text-luxury-gold-400/65">
              @cafe.nuha
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 font-sans text-[11px] text-coffee-cream-300/40 sm:flex-row">
          <div>&copy; 2026 Nuha patisserie and café. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Made with
              <Heart
                size={10}
                className="fill-luxury-gold-500 text-luxury-gold-500"
              />
              in Indiranagar, Bengaluru
            </span>

            <button
              id="footer-scroll-top"
              type="button"
              onClick={handleScrollTop}
              className="flex cursor-pointer items-center gap-1 rounded-lg border border-white/5 p-2 text-coffee-cream-200 transition-all duration-300 hover:border-luxury-gold-500 hover:text-luxury-gold-400 focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span className="font-mono text-[9px] uppercase tracking-wider">
                Top
              </span>

              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
