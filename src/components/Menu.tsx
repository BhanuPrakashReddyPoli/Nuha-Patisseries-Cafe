import { motion } from "motion/react";
import { Award, ArrowRight, Sparkles } from "lucide-react";
import { COFFEE_MENU } from "../data";
import type { MenuItem } from "../types";

const FULL_MENU_PDF = "/assets/nuha-menu.pdf";

const CATEGORY_LABELS: Record<string, string> = {
  espresso: "Espresso",
  brewed: "Slow Brew",
  specialty: "House Special",
  cold: "Cold Beverage",
  pastry: "Freshly Baked",
  pastries: "Freshly Baked",
  dessert: "Artisan Dessert",
  desserts: "Artisan Dessert",
  savoury: "Café Favourite",
  breakfast: "Breakfast",
  food: "Kitchen Selection",
};

export default function Menu() {
  // Show only a curated selection on the homepage.
  // Change 6 to another number if needed.
  const featuredItems: MenuItem[] = COFFEE_MENU.slice(0, 6);

  const getCategoryLabel = (category: string) => {
    return CATEGORY_LABELS[category.toLowerCase()] ?? "Nuha Selection";
  };

  return (
    <section
      id="coffee"
      className="relative overflow-hidden border-b border-luxury-gold-500/10 bg-espresso-950 px-6 py-24 text-white md:py-32 lg:px-8"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute left-10 top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-espresso-900/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-10 -z-10 h-[350px] w-[350px] rounded-full bg-luxury-gold-700/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-luxury-gold-500/20 bg-espresso-900 px-3 py-1">
            <Sparkles
              size={11}
              className="text-luxury-gold-400"
              aria-hidden="true"
            />

            <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold-300">
              Curated Favourites
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl xl:text-5xl">
            Discover Our
            <br />
            <span className="luxury-gradient-text font-medium">
              Signature Menu
            </span>
          </h2>

          <p className="mt-4 font-sans text-sm font-light leading-relaxed text-coffee-cream-300 md:text-base">
            From handcrafted specialty coffee to artisan pastries, desserts and
            café favourites, every selection is thoughtfully prepared using
            premium ingredients and served fresh throughout the day.
          </p>
        </div>

        {/* Featured menu items */}
        <div
          id="signature-menu-grid"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
        >
          {featuredItems.map((item: MenuItem, index: number) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-espresso-900/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-espresso-900/60 md:p-8 ${
                item.isSignature
                  ? "gold-border-glow border-luxury-gold-500/30"
                  : "border-white/5 hover:border-luxury-gold-500/20"
              }`}
            >
              {/* Decorative glow for signature items */}
              {item.isSignature && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-luxury-gold-500/5 blur-xl transition-colors group-hover:bg-luxury-gold-500/10"
                />
              )}

              <div className="relative">
                {/* Item name and price */}
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-lg font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-luxury-gold-300 md:text-xl">
                        {item.name}
                      </h3>

                      {item.isSignature && (
                        <div className="inline-flex items-center gap-1 rounded-full border border-luxury-gold-500/30 bg-luxury-gold-500/10 px-2 py-0.5 text-luxury-gold-400">
                          <Award size={10} aria-hidden="true" />

                          <span className="font-mono text-[8px] font-extrabold uppercase tracking-wider">
                            Signature
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="shrink-0 whitespace-nowrap font-serif text-lg font-bold text-luxury-gold-400 transition-colors duration-300 group-hover:text-luxury-gold-300">
                    ₹{item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="pr-2 font-sans text-xs font-light leading-relaxed text-coffee-cream-300 md:text-sm">
                  {item.description}
                </p>
              </div>

              {/* Category footer */}
              <div className="relative mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-luxury-gold-500/60 transition-colors duration-300 group-hover:text-luxury-gold-400">
                  {getCategoryLabel(item.category)}
                </span>

                <span
                  aria-hidden="true"
                  className="hidden h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-luxury-gold-500/30 sm:block"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Full menu call-to-action */}
        <div className="mt-14 flex justify-center">
          <a
            href={FULL_MENU_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-md bg-linear-to-r from-luxury-gold-600 via-luxury-gold-500 to-luxury-gold-700 px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-espresso-950 shadow-lg shadow-luxury-gold-500/15 transition-all duration-300 hover:-translate-y-1 hover:from-luxury-gold-500 hover:to-luxury-gold-600"
          >
            View Full Menu
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Footer note */}
        <p className="mx-auto mt-8 max-w-xl text-center font-serif text-xs italic leading-relaxed text-coffee-cream-300/60">
          Menu availability may vary throughout the day. Please inform our team
          about any allergies or dietary requirements before ordering.
        </p>
      </div>
    </section>
  );
}
