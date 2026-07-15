import { motion } from "motion/react";
import { Coffee, ShieldCheck, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-coffee-cream-100 py-24 md:py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elegant details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-espresso-300/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative p-3 bg-white rounded-3xl shadow-2xl border border-espresso-800/5 max-w-lg mx-auto"
            >
              <div className="rounded-2xl overflow-hidden aspect-4/3 relative z-10">
                <img
                  src="assets/item5.jpg"
                  //src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop"
                  alt="Nutella & Strawberry Pancakes at Nuha patisserie and café"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Floating badge inside picture */}
                <div className="absolute inset-0 bg-espresso-950/20"></div>
              </div>

              {/* Floating golden experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-espresso-950 text-white p-6 rounded-2xl shadow-2xl border border-luxury-gold-500/20 z-20 flex flex-col justify-center items-center text-center w-40 h-40">
                <span className="font-serif text-3xl font-bold text-luxury-gold-400 block"></span>
                <span className="font-mono text-2xl font-bold text-white tracking-widest block"></span>
                <span className="font-sans text-[9px] uppercase tracking-wider text-coffee-cream-300 mt-1 block">
                  Nutella & Strawberry Pancake
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-luxury-gold-600 block mb-3">
              Our Journey & Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold text-espresso-900 tracking-tight leading-tight mb-6">
              A Symphony of Slow <br />
              <span className="text-luxury-gold-600 italic font-medium">
                Brewing & Master Baking
              </span>
            </h2>
            <p className="font-sans text-base text-espresso-600 font-light leading-relaxed mb-6">
              Founded in 2026 in the cozy streets of Indiranagar, Nuha
              patisserie and café was envisioned as an acoustic and
              architectural sanctuary. We designed this space for coffee lovers,
              creative professionals, and those seeking quiet, deliberate
              minutes in a fast-paced world.
            </p>
            <p className="font-sans text-base text-espresso-600 font-light leading-relaxed mb-8">
              Every bean is selected from micro-lot estates committed to
              carbon-neutral shade-canopy growth. Our master roasters fire in
              micro-batches to unlock deep notes of stone fruit, velvet
              molasses, and clean jasmine.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/70 border border-espresso-800/5 hover:bg-white duration-300">
                <div className="w-9 h-9 rounded-lg bg-luxury-gold-100 flex items-center justify-center text-luxury-gold-600">
                  <Coffee size={18} />
                </div>
                <h3 className="font-serif text-sm font-bold text-espresso-900">
                  Rare Microlots
                </h3>
                <p className="font-sans text-xs text-espresso-500 font-light leading-relaxed">
                  Direct trade coffee ethically harvested from elite volcanic
                  soils.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/70 border border-espresso-800/5 hover:bg-white duration-300">
                <div className="w-9 h-9 rounded-lg bg-luxury-gold-100 flex items-center justify-center text-luxury-gold-600">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-serif text-sm font-bold text-espresso-900">
                  Pure Butter Craft
                </h3>
                <p className="font-sans text-xs text-espresso-500 font-light leading-relaxed">
                  Croissants laminated by hand with real AOP French butter.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/70 border border-espresso-800/5 hover:bg-white duration-300">
                <div className="w-9 h-9 rounded-lg bg-luxury-gold-100 flex items-center justify-center text-luxury-gold-600">
                  <Heart size={18} />
                </div>
                <h3 className="font-serif text-sm font-bold text-espresso-900">
                  Acoustic Comfort
                </h3>
                <p className="font-sans text-xs text-espresso-500 font-light leading-relaxed">
                  Plush leather, quiet corners, and rich ambient soft focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
