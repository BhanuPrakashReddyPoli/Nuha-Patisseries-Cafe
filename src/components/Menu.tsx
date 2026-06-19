import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COFFEE_MENU } from "../data";
import { MenuItem } from "../types";
import { Coffee, Award, Sparkles, Filter } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<"all" | "espresso" | "brewed" | "specialty" | "cold">("all");

  const categories = [
    { key: "all", label: "Full Library" },
    { key: "espresso", label: "Espresso Crafts" },
    { key: "brewed", label: "Slow Pour Filters" },
    { key: "specialty", label: "Luxury Infusions" },
    { key: "cold", label: "Cold Botanicals" }
  ];

  const filteredItems = activeCategory === "all"
    ? COFFEE_MENU
    : COFFEE_MENU.filter(item => item.category === activeCategory);

  return (
    <section
      id="coffee"
      className="relative bg-espresso-950 text-white py-24 md:py-32 px-6 lg:px-8 border-b border-luxury-gold-500/10 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-espresso-900/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-luxury-gold-700/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-espresso-900 border border-luxury-gold-500/20 px-3 py-1 rounded-full mb-4">
            <Sparkles size={11} className="text-luxury-gold-400" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold-300">Curated Extraction</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight">
            Our Signature <br />
            <span className="luxury-gradient-text italic font-medium">Coffee Selection</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-coffee-cream-300 font-light leading-relaxed mt-4">
            Each cup is custom calibrated in our laboratory for minerals, dissolution rate, and thermal speed before serving. Experience the limits of specialty bean capabilities.
          </p>
        </div>

        {/* Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              id={`filter-tab-${cat.key}`}
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-linear-to-r from-luxury-gold-600 via-luxury-gold-500 to-luxury-gold-700 text-espresso-950 border-transparent shadow-lg shadow-luxury-gold-500/15"
                  : "bg-espresso-900/60 text-coffee-cream-300 border-luxury-gold-500/10 hover:border-luxury-gold-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div id="coffee-menu-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem, index: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={item.id}
                className={`group p-6 md:p-8 rounded-2xl bg-espresso-900/35 border hover:bg-espresso-900/60 duration-300 flex flex-col justify-between ${
                  item.isSignature
                    ? "border-luxury-gold-500/30 gold-border-glow relative overflow-hidden"
                    : "border-white/5"
                }`}
              >
                {/* Background decorative shine for Signature item */}
                {item.isSignature && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold-500/5 rounded-full -mr-6 -mt-6 blur-xl group-hover:bg-luxury-gold-500/10 transition-colors pointer-events-none"></div>
                )}

                {/* Top Row: Name and price */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-white tracking-wide group-hover:text-luxury-gold-300 duration-300">
                        {item.name}
                      </h3>
                      {item.isSignature && (
                        <div className="flex items-center gap-1 bg-luxury-gold-500/10 border border-luxury-gold-500/30 px-2 py-0.5 rounded-full text-luxury-gold-400">
                          <Award size={10} />
                          <span className="font-mono text-[8px] uppercase tracking-wider font-extrabold">Signature</span>
                        </div>
                      )}
                    </div>
                    <span className="font-serif text-lg font-bold text-luxury-gold-400 group-hover:text-luxury-gold-300 duration-300 whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-coffee-cream-300 font-light leading-relaxed pr-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line decorator */}
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-1.5 text-luxury-gold-500/50 group-hover:text-luxury-gold-400 duration-300">
                    <Coffee size={14} />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-semibold">
                      {item.category === "espresso" ? "Espresso pull" : item.category === "brewed" ? "Slow brew filter" : item.category === "specialty" ? "Artisan Craft" : "Cold Infusion"}
                    </span>
                  </div>
                  <span className="w-8 h-px bg-white/5 group-hover:w-16 duration-500 hidden sm:block"></span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Sensory footer note */}
        <div className="text-center mt-16 max-w-xl mx-auto font-serif italic text-xs text-coffee-cream-300 opacity-60">
          "The chemical magic of roasting takes place inside heavy cast-iron drums. Our baristas synchronize roasting humidity and water carbonation levels twice daily to preserve active aromatics."
        </div>

      </div>
    </section>
  );
}
