import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { TestimonialItem } from "../types";
import { Star, Quote, QuoteIcon } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-coffee-cream-100 py-24 md:py-32 px-6 lg:px-8 overflow-hidden border-b border-espresso-800/5"
    >
      {/* Absolute decorative items */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-luxury-gold-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-espresso-300/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-luxury-gold-600 block mb-3">
            Voices of Our Patrons
          </span>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold text-espresso-900 tracking-tight leading-tight">
            Loved by Coffee Purists <br />
            <span className="text-luxury-gold-600 italic font-medium">
              & Creative Minds
            </span>
          </h2>
          <p className="font-sans text-sm md:text-base text-espresso-600 font-light leading-relaxed mt-4">
            Hear from our community of designers, architects, culinary writers,
            and daily commuters who call Nuha patisserie and café their third
            space.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          id="testimonials-cards-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((review: TestimonialItem, index: number) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-xl border border-espresso-800/5 hover:border-luxury-gold-500/20 duration-300 flex flex-col justify-between relative group"
            >
              {/* Giant quote icon behind card as watermark */}
              <div className="absolute top-6 right-8 text-espresso-100 group-hover:text-luxury-gold-100/50 duration-500 transform scale-150 pointer-events-none z-0">
                <Quote size={40} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      className="text-luxury-gold-500"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-sm md:text-base text-espresso-800 font-light leading-relaxed italic mb-8">
                  "{review.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-espresso-800/5 pt-6 z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-espresso-950 border-2 border-luxury-gold-500/20 group-hover:border-luxury-gold-400 duration-300">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-sm font-bold text-espresso-900 leading-none mb-1">
                    {review.name}
                  </h4>
                  <span className="font-sans text-[11px] text-espresso-500 font-medium">
                    {review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Press / Recommendation logos */}
        <div className="border-t border-espresso-800/10 mt-20 pt-12 text-center">
          <span className="font-mono text-[9px] uppercase tracking-widest text-espresso-400 font-bold block mb-6"></span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 hover:opacity-60 duration-300">
            <span className="font-serif text-lg font-bold tracking-tight text-espresso-800"></span>
            <span className="font-sans text-base font-extrabold tracking-widest text-espresso-800"></span>
            <span className="font-serif text-lg font-bold italic tracking-wide text-espresso-800"></span>
            <span className="font-sans text-base font-bold tracking-normal text-espresso-800"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
