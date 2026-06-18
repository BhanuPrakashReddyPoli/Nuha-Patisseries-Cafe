import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_PHOTOS } from "../data";
import { GalleryImage } from "../types";
import { Sparkles, Eye, Camera } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ambience" | "brewing" | "desserts" | "moments">("all");

  const categories = [
    { key: "all", label: "Full Gallery" },
    { key: "ambience", label: "The Sanctuary" },
    { key: "brewing", label: "Brewing Science" },
    { key: "desserts", label: "Plated Art" },
    { key: "moments", label: "Shared Moments" },
  ];

  const filteredPhotos = activeCategory === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(photo => photo.category === activeCategory);

  return (
    <section
      id="gallery"
      className="relative bg-espresso-950 text-white py-24 md:py-32 px-6 lg:px-8 border-b border-luxury-gold-500/10 overflow-hidden"
    >
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-luxury-gold-700/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-espresso-800/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-espresso-900 border border-luxury-gold-500/20 px-3 py-1 rounded-full mb-4">
            <Camera size={12} className="text-luxury-gold-400" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold-300">Visual Journal</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight">
            Glance Inside <br />
            <span className="luxury-gradient-text italic font-medium">The Nuha Sanctuary</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-coffee-cream-300 font-light leading-relaxed mt-4">
            A small window into our universe—where custom milled brass machinery, velvet textures, and precise slow-extraction mechanics meet in architectural harmony.
          </p>
        </div>

        {/* Gallery Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              id={`gallery-filter-${cat.key}`}
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-4 py-2 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-luxury-gold-500 text-espresso-950 border-transparent shadow-lg shadow-luxury-gold-500/15"
                  : "bg-espresso-900/40 text-coffee-cream-300 border-luxury-gold-500/10 hover:border-luxury-gold-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid layout */}
        <div id="gallery-bento-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo: GalleryImage, index: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={photo.id}
                className="group relative aspect-10/12 rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-espresso-900 cursor-pointer"
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade overlay */}
                <div className="absolute inset-0 bg-espresso-950/20 group-hover:bg-espresso-950/75 duration-300 flex flex-col justify-end p-6">
                  {/* Content appearing on hover */}
                  <div className="transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gold-400 font-bold bg-luxury-gold-500/10 border border-luxury-gold-500/20 py-0.5 px-2 rounded-full w-fit block mb-2">
                      {photo.category}
                    </span>
                    <p className="font-serif text-sm font-medium text-white leading-relaxed mb-3">
                      {photo.caption}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-luxury-gold-300 font-medium">
                      <Eye size={12} />
                      <span className="font-mono text-[9px] uppercase tracking-wider">Enlarge Mood</span>
                    </div>
                  </div>
                </div>

                {/* Top decorative glass reflection overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
