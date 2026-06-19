import { motion } from "motion/react";
import { PASTRY_MENU } from "../data";
import { PastryItem } from "../types";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export default function Pastries() {

  const handleOrderPastry = (pastryName: string) => {
    const whatsappNumber = "+919848902062"; // Use the same number as in WhatsAppButton
    const text = encodeURIComponent(`Hello! I'm on your website and would like to reserve or order the artisan pastry: "${pastryName}". Thank you!`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  //for handling custom cake ordering
  const handleCustomCakeOrder = () => {
  const whatsappNumber = "919848902062";

  const text = encodeURIComponent(
`Hello Cafe Nuha,

I would like to order a custom celebration cake.

Event Type:
Date of Event:
Number of Guests:
Preferred Flavor:
Theme/Design:
Delivery or Pickup:

Please share the available options, pricing, and ordering process.

Thank you.`
  );

  window.open(
    `https://wa.me/${whatsappNumber}?text=${text}`,
    "_blank",
    "noopener,noreferrer"
  );
};

  return (
    <section
      id="pastries"
      className="relative bg-coffee-cream-50 py-24 md:py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative floral or ambient light blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold-200/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-espresso-400/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-luxury-gold-600 block mb-3">
              Daily Viennoiserie & Desserts
            </span>
            <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold text-espresso-900 tracking-tight leading-tight">
              The Maison of <br />
              <span className="text-luxury-gold-600 italic font-medium">Butter & Lamination</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-espresso-600 font-light leading-relaxed mt-4">
              Our French pastry chef begins lamination at 7:00 AM, using AOP cultured Normandy butter and stone-ground heritage flour, creating pastries with crisp outer glass shells and honeycomb insides.
            </p>
          </div>

          <div className="flex items-center gap-1.5 self-start md:self-auto">
            <span className="text-xs font-semibold text-espresso-800 uppercase tracking-widest">Fresh Batches Daily at 10:00 AM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
        </div>

        {/* Pastry Grid */}
        <div id="pastries-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PASTRY_MENU.map((pastry: PastryItem, index: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={pastry.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-espresso-800/5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ${
                pastry.isPremium ? "border-luxury-gold-500/10" : ""
              }`}
            >
              {/* Image Container with Hover zoom */}
              <div className="relative aspect-square overflow-hidden bg-espresso-950">
                <img
                  src={pastry.image}
                  alt={pastry.name}
                  className="w-full h-full object-cover group-hover:scale-105 duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual elegant tint */}
                <div className="absolute inset-0 bg-espresso-950/15 group-hover:bg-espresso-950/25 duration-300"></div>

                {/* Tag Overlay */}
                {pastry.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-espresso-950/85 text-luxury-gold-400 font-mono text-[9px] uppercase tracking-widest font-bold py-1 px-2.5 rounded-full border border-luxury-gold-500/20 backdrop-blur-xs">
                      {pastry.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Content body */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-base font-bold text-espresso-900 group-hover:text-luxury-gold-600 duration-300">
                      {pastry.name}
                    </h3>
                    <span className="font-serif text-base font-bold text-luxury-gold-600">
                      ₹{pastry.price}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-espresso-600 font-light leading-relaxed mb-4">
                    {pastry.description}
                  </p>
                </div>

                {/* Reserve/Order CTA button */}
                <div className="border-t border-espresso-800/5 pt-4 mt-4">
                  <button
                    onClick={() => handleOrderPastry(pastry.name)}
                    className="w-full inline-flex items-center justify-between text-espresso-900 group-hover:text-luxury-gold-600 font-sans font-semibold text-xs tracking-wider uppercase transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={13} className="text-emerald-600" />
                      Order / Reserve Piece
                    </span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catering note block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-espresso-950 border border-luxury-gold-500/20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle warm decoration */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-luxury-gold-600/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            <div className="max-w-2xl">
              <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold-400 font-bold block mb-2">Private Celebrations</span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">Custom Celebration Cakes & Dessert Buffets</h3>
              <p className="font-sans text-sm text-coffee-cream-300 font-light leading-relaxed mt-2">
                Our pastry division accepts special bespoke commissions for weddings, galleries, and premium corporate events. We require 48 hours notice for whole luxury cakes.
              </p>
            </div>
            
            <button
  onClick={handleCustomCakeOrder}
  className="px-6 py-3.5 bg-linear-to-r from-luxury-gold-600 via-luxury-gold-500 to-luxury-gold-700 hover:from-luxury-gold-500 hover:to-luxury-gold-600 text-espresso-950 font-sans font-bold text-xs tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg hover:shadow-luxury-gold-500/10 duration-300 w-full lg:w-auto text-center cursor-pointer"
>
  Order Whole Custom Cake
</button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
