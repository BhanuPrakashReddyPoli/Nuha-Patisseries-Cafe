import { motion } from "motion/react";
import { Clock, MapPin, Phone, Mail, Calendar } from "lucide-react";

export default function LocationHours() {
  const schedule = [
    {
      days: "Monday – Sunday",
      hours: "10:00 am – 11:00 pm",
      note: "Kitchen closes at 10:30 pm",
    },
  ];

  return (
    <section
      id="hours"
      className="relative bg-espresso-950 text-white py-24 md:py-32 px-6 lg:px-8 border-b border-luxury-gold-500/10 overflow-hidden"
    >
      {/* Background radial details */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-espresso-900/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold-700/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Opening Schedule & Address Details */}
          <div className="lg:col-span-6 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-luxury-gold-400 block mb-3">
              Welcome Anytime
            </span>
            <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-8">
              Open Daily for <br />
              <span className="luxury-gradient-text italic font-medium">
                Coffee & Conversations
              </span>
            </h2>

            {/* Timings List */}
            <div className="space-y-6 mb-12">
              {schedule.map((item, index) => (
                <div key={index} className="border-b border-white/5 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <span className="font-serif text-base font-bold text-coffee-cream-100">
                      {item.days}
                    </span>
                    <span className="font-mono text-sm font-semibold text-luxury-gold-400">
                      {item.hours}
                    </span>
                  </div>
                  <span className="font-sans text-xs text-coffee-cream-300/60 font-light block">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Fast Address info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-espresso-900 border border-luxury-gold-500/10 flex items-center justify-center text-luxury-gold-400 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white mb-1">
                    Our Address
                  </h4>
                  <p className="font-sans text-xs text-coffee-cream-300 font-light leading-relaxed">
                    12, Shri Krishna Temple Rd, <br />
                    Indiranagar 1st Stage, Bengaluru, 560038
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-espresso-900 border border-luxury-gold-500/10 flex items-center justify-center text-luxury-gold-400 flex-shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white mb-1">
                    Reserve Space
                  </h4>
                  <p className="font-sans text-xs text-coffee-cream-300 font-light leading-relaxed">
                    Reserve fireside booths & bespoke pastry buffets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google maps visual canvas wrapper */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-3 bg-espresso-900/60 border border-luxury-gold-500/20 rounded-2xl shadow-2xl relative w-full h-[350px] md:h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.885316452133!2d77.6418984!3d12.979186299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae175a98341b01%3A0xb85b579aa8972455!2sNuha%20patisserie%20and%20caf%C3%A9!5e0!3m2!1sen!2sin!4v1781857927812!5m2!1sen!2sin"
                className="w-full h-full rounded-xl border border-luxury-gold-500/10 opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale brightness-75 invert contrast-110"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Indiranagar Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
