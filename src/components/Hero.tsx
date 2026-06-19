import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const navOffset = 76;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-espresso-950 flex items-center pt-24 pb-12 overflow-hidden px-6 lg:px-8 border-b border-luxury-gold-500/10"
    >
      {/* Abstract light spill and pattern overlay in background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-espresso-800/10 rounded-full blur-3xl"></div>
        {/* Subtle geometric gold dust overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-espresso-950/70 to-espresso-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content holding area */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-espresso-900 border border-luxury-gold-500/25 px-3 py-1.5 rounded-full mb-6 w-fit"
          >
            <Sparkles size={14} className="text-luxury-gold-400" />
            <span className="font-mono text-[10px] tracking-widest text-luxury-gold-300 font-medium uppercase">
              Indiranagar's Finest Specialty Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl xl:text-7xl font-semibold text-white tracking-tight leading-[1.08] mb-6"
          >
            Where Espresso <br />
            <span className="luxury-gradient-text italic font-medium">Meets Fine Artistry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base md:text-lg text-coffee-cream-200 font-light leading-relaxed max-w-2xl mb-8"
          >
            Step into an ambient sanctuary designed for deep conversations, slow mornings, and coffee enthusiasts. 
            We pull rich extractions on customized brass machinery and bake 36-layer sourdough pastries daily.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={(e) => handleExploreClick(e, "#coffee")}
              className="px-8 py-4 bg-linear-to-r from-luxury-gold-600 via-luxury-gold-500 to-luxury-gold-700 hover:from-luxury-gold-500 hover:to-luxury-gold-600 text-espresso-950 font-sans font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-luxury-gold-500/15 duration-300 focus:outline-none flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore Specialty Menu
              <ArrowRight size={16} className="group-hover:translate-x-1 duration-300" />
            </button>
            <button
              onClick={(e) => handleExploreClick(e, "#contact")}
              className="px-8 py-4 border border-luxury-gold-500/25 hover:border-luxury-gold-400 bg-transparent text-white font-sans font-medium text-sm rounded-lg hover:bg-white/5 duration-300 focus:outline-none flex items-center justify-center gap-2 cursor-pointer"
            >
              Book Private Table
            </button>
          </motion.div>

          {/* Quick Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 mt-12"
          >
            <div>
              <span className="font-serif text-2xl font-bold text-luxury-gold-400 block pb-1">100%</span>
              <span className="font-mono text-[10px] tracking-wider text-coffee-cream-300 uppercase">Single-Origin Arabica</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-luxury-gold-400 block pb-1">36</span>
              <span className="font-mono text-[10px] tracking-wider text-coffee-cream-300 uppercase">Artisan Lamination Layers</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-luxury-gold-400 block pb-1">3</span>
              <span className="font-mono text-[10px] tracking-wider text-coffee-cream-300 uppercase">Award-Winning Master Baristas</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Collage of Overlapping Luxury Cards */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center py-6 h-[480px] lg:h-[550px] w-full">
          {/* Back Accent Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-luxury-gold-500/10 rounded-full z-0 hidden sm:block"></div>
          
          {/* Card 1: Main Cafe Ambience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 right-1 sm:right-6 w-[82%] sm:w-80 h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-luxury-gold-500/20 z-10 hover:border-luxury-gold-400/40 duration-500"
          >
            <img
              src="assets/FrontDesk.jpg"
              alt="Nuha patisserie and café Interior Ambience"
              className="w-full h-full object-cover hover:scale-105 duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold-400 font-bold block mb-1">Atmosphere</span>
              <p className="font-serif text-sm font-semibold text-white leading-snug">The Fireside Lounge</p>
            </div>
          </motion.div>

          {/* Card 2: Exquisite Coffee Cup overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute bottom-4 left-2 sm:left-4 w-[65%] sm:w-64 h-[220px] sm:h-[240px] rounded-2xl overflow-hidden shadow-2xl border border-luxury-gold-500/20 z-20 hover:border-luxury-gold-400/40 duration-500"
          >
            <img
              src="assets/item6_Coffee.jpg"
              //src="https://drive.google.com/file/d/1YLB7h2SWZlEP3CYZRCFSeE5T0rLxWOTw/view?usp=drive_link"
              alt="Specialty latte art at Nuha patisserie and café"
              className="w-full h-full object-cover hover:scale-105 duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold-400 font-bold block mb-1"></span>
              <p className="font-serif text-sm font-semibold text-white leading-snug">The Golden Cappuccino</p>
            </div>
          </motion.div>

          {/* Card 3: Artisan Bakery overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="absolute bottom-16 right-4 w-[40%] sm:w-44 h-[160px] sm:h-[180px] rounded-xl overflow-hidden shadow-2xl border border-luxury-gold-500/10 z-25 hover:border-luxury-gold-400/40 duration-500 hidden sm:block"
          >
            <img
              src="assets/tiramisu.jpg"
              //src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop"
              alt="Coffee kissed tiramisu at Nuha patisserie and café"
              className="w-full h-full object-cover hover:scale-105 duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3">
              <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gold-400 font-bold block mb-0.5">Kitchen</span>
              <p className="font-serif text-xs font-semibold text-white leading-none">Tiramisu French Toast</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[9px] tracking-widest uppercase text-luxury-gold-400">Discover Nuha</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-luxury-gold-500" />
        </motion.div>
      </div>
    </section>
  );
}
