import { motion } from "motion/react";
import { INSTAGRAM_FEED } from "../data";
import { InstagramPost } from "../types";
import { Heart, MessageCircle, Instagram, Sparkles } from "lucide-react";

export default function InstagramFeed() {
  const accountUrl = "https://www.instagram.com/arbaz.0846?igsh=a29ub2VxOWs1Nmg4";

  return (
    <section
      id="instagram"
      className="relative bg-espresso-950 py-20 px-6 lg:px-8 border-b border-luxury-gold-500/10 overflow-hidden"
    >
      {/* Glow shapes in back */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-luxury-gold-700/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header containing brand and follow invitation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <Instagram size={18} className="text-luxury-gold-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-luxury-gold-300">
                Aesthetic Feed
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Share The Ambience <span className="luxury-gradient-text italic font-medium">@cafenuha</span>
            </h2>
          </div>

          <a
            href={accountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-luxury-gold-500/20 hover:border-luxury-gold-400 text-luxury-gold-400 hover:text-white rounded-lg text-xs font-sans font-semibold tracking-wider uppercase backdrop-blur-md bg-espresso-900/40 hover:bg-espresso-900 duration-300 cursor-pointer"
          >
            <Instagram size={14} />
            Follow Journal on Instagram
          </a>
        </div>

        {/* Feed Grid */}
        <div id="instagram-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INSTAGRAM_FEED.map((post: InstagramPost, index: number) => (
            <motion.a
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={post.id}
              href={accountUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-espresso-900 flex flex-col justify-end"
            >
              {/* Photo */}
              <img
                src={post.url}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 duration-700 absolute inset-0 z-0"
                referrerPolicy="no-referrer"
              />

              {/* Black luxury transparent overlay */}
              <div className="absolute inset-0 bg-espresso-950/20 group-hover:bg-espresso-950/75 duration-300 z-10"></div>

              {/* Overlay Statistics & Information on Hover */}
              <div className="relative z-20 p-4 md:p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 w-full h-full">
                <Instagram size={20} className="text-luxury-gold-400 mb-4" />
                
                {/* Stats Counter Row */}
                <div className="flex items-center gap-4 text-white font-serif text-sm font-bold mb-3">
                  <div className="flex items-center gap-1.5">
                    <Heart size={14} className="text-luxury-gold-400 fill-luxury-gold-400" />
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle size={14} className="text-luxury-gold-400" />
                    {post.comments}
                  </div>
                </div>

                {/* Truncated caption */}
                <p className="font-sans text-[11px] text-coffee-cream-200 text-center line-clamp-2 leading-relaxed px-2 font-light">
                  {post.caption}
                </p>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
