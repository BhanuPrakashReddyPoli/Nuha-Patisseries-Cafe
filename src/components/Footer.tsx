import React, { useState } from "react";
import { Coffee, ArrowUp, Send, Heart, Shield } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail("");
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      id="main-footer"
      className="bg-espresso-950 text-white pt-20 pb-10 px-6 lg:px-8 border-t border-luxury-gold-500/10 relative overflow-hidden"
    >
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-espresso-900/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute right-10 bottom-10 w-64 h-64 bg-luxury-gold-700/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand details (4 columns) */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={handleScrollTop}>
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-luxury-gold-700 via-luxury-gold-500 to-luxury-gold-200 p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-espresso-950 flex items-center justify-center">
                  <Coffee size={18} className="text-luxury-gold-400" />
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
                  Indiranagar
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-coffee-cream-300 font-light leading-relaxed max-w-sm mb-6">
              A premium acoustic and architectural sanctuary designed for deep conversations, slow mornings, and specialty coffee lovers. We extract every drop with scientific calibration and bake fresh hand-laminated Viennoiserie daily.
            </p>

            {/* Environmental / Ethical statement */}
            <div className="inline-flex items-center gap-2 bg-espresso-900/60 border border-luxury-gold-500/10 py-1.5 px-3 rounded-lg">
              <Shield size={12} className="text-luxury-gold-400" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-coffee-cream-300 font-bold">100% Carbon-Neutral Direct Trade</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 columns) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              Sanctuary
            </h4>
            <ul className="space-y-3 font-sans text-xs text-coffee-cream-300 font-light">
              <li>
                <a href="#home" className="hover:text-luxury-gold-400 transition-colors">Welcome Cover</a>
              </li>
              <li>
                <a href="#about" className="hover:text-luxury-gold-400 transition-colors">Our Philosophy</a>
              </li>
              <li>
                <a href="#coffee" className="hover:text-luxury-gold-400 transition-colors">Specialty Coffee</a>
              </li>
              <li>
                <a href="#pastries" className="hover:text-luxury-gold-400 transition-colors">Gourmet Bakery</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-luxury-gold-400 transition-colors">Visual Journal</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Secondary Links (2 columns) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              Contact & Hours
            </h4>
            <ul className="space-y-3 font-sans text-xs text-coffee-cream-300 font-light font-sans">
              <li>
                <a href="#hours" className="hover:text-luxury-gold-400 transition-colors">Opening Hours</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-luxury-gold-400 transition-colors">Inquiry Ledger</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-luxury-gold-400 transition-colors">Guest Voices</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-luxury-gold-400 transition-colors">Social Feed</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch/Newsletter dispatch (4 columns) */}
          <div className="lg:col-span-4 text-left">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              The Nuha Dispatch
            </h4>
            <p className="font-sans text-xs text-coffee-cream-300 font-light leading-relaxed mb-4">
              Subscribe to receive exclusive access to our reserve bean allocations (Geisha releases), weekend private concerts, and baking classes.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="bg-espresso-900 border border-luxury-gold-500/10 hover:border-luxury-gold-500/30 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-luxury-gold-500 w-full duration-300"
                />
                <button
                  type="submit"
                  className="bg-linear-to-r from-luxury-gold-600 to-luxury-gold-500 hover:bg-luxury-gold-400 text-espresso-950 font-sans font-bold text-xs tracking-wider uppercase py-2 px-4 rounded-lg duration-300 flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={12} />
                </button>
              </div>

              {isSubscribed && (
                <span className="font-sans text-[10px] text-emerald-400 font-medium block">
                  ✓ Dispatch registration active. Welcome to Nuha patisserie and café.
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Line: Legal copyrights and Scroll Top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-coffee-cream-300/40">
          <div>
            &copy; 2026 Nuha patisserie and café. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Made with <Heart size={10} className="text-luxury-gold-500 fill-luxury-gold-500" /> in Indiranagar, Bengaluru
            </span>
            
            <button
              id="footer-scroll-top"
              onClick={handleScrollTop}
              className="p-2 border border-white/5 hover:border-luxury-gold-500 text-coffee-cream-200 hover:text-luxury-gold-400 rounded-lg duration-300 flex items-center gap-1 cursor-pointer focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span className="font-mono text-[9px] uppercase tracking-wider">Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
