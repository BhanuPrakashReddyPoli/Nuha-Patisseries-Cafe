import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Customize with Nuha's real phone or a default format
  const whatsappNumber = "+917353775690";
  const defaultMessage = encodeURIComponent(
    "Hello Nuha patisserie and café! I would like to book a table / enquire about your artisan pastries selection.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div
      id="whatsapp-widget"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-1 rounded-2xl bg-espresso-950/95 border border-luxury-gold-500/20 px-4 py-3 text-left shadow-2xl backdrop-blur-md w-72 max-w-sm"
          >
            <div className="flex items-center gap-2 border-b border-espresso-800 pb-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-luxury-gold-400">
                Nuha Concierge
              </p>
            </div>
            <p className="text-xs text-coffee-cream-100 font-sans leading-relaxed mb-3">
              Reserve a fireside booth, pre-order whole cakes, or request
              private luxury dining. We reply in minutes.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors group"
            >
              <span className="flex items-center gap-1.5">
                <MessageCircle size={14} /> Close chat & send Message
              </span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        id="whatsapp-trigger-btn"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => {
          window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl relative border border-emerald-400/20 group cursor-pointer"
        aria-label="Contact Concierge on WhatsApp"
      >
        <MessageCircle size={24} className="relative z-10" />
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-1000"></span>
      </motion.button>
    </div>
  );
}
