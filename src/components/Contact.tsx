import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "lounge-booking",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please specify name, email, and message details.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate luxury API network request delay
    setTimeout(() => {
      // Generate unique elegant alphanumeric reference ID
      const pinCode = "CN-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(pinCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "lounge-booking", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative bg-coffee-cream-100 py-24 md:py-32 px-6 lg:px-8 border-b border-espresso-800/5 overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-luxury-gold-200/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-espresso-300/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Coordinates & Physical details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-luxury-gold-600 block mb-3">
                GET IN TOUCH
              </span>
              <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold text-espresso-900 tracking-tight leading-tight mb-6">
                Let's Plan Something Delicious <br />
                <span className="text-luxury-gold-600 italic font-medium">Nuha patisserie and café Team</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-espresso-600 font-light leading-relaxed mb-10">
                Have a question, custom cake request, table reservation, or event inquiry? We'd love to hear from you.
              </p>

              {/* Physical Channels card block */}
              <div className="space-y-6">
                {/* Channel 1 */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-luxury-gold-600 border border-espresso-800/5 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-espresso-400 font-bold block leading-none mb-1">CALL US</span>
                    <a href="tel:+9109513777780" className="font-serif text-base font-bold text-espresso-900 hover:text-luxury-gold-600 duration-300">
                      +91 09513777780
                    </a>
                  </div>
                </div>

                {/* Channel 2 */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-luxury-gold-600 border border-espresso-800/5 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-espresso-400 font-bold block leading-none mb-1">EMAIL US</span>
                    <a href="mailto:faneateries@gmail.com" className="font-serif text-base font-bold text-espresso-900 hover:text-luxury-gold-600 duration-300">
                      faneateries@gmail.com
                    </a>
                  </div>
                </div>

                {/* Channel 3 */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-luxury-gold-600 border border-espresso-800/5 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-espresso-400 font-bold block leading-none mb-1">VISIT US</span>
                    <p className="font-sans text-xs text-espresso-700 leading-relaxed font-light">
                      12, Shri Krishna Temple Rd, Indiranagar, Bengaluru, Karnataka 560038.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick warning banner */}
            <div className="mt-12 bg-white/50 border border-espresso-800/5 rounded-2xl p-6 hidden lg:block">
              <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold-600 font-bold block mb-1">
                Walk-In Policy
              </span>
              <p className="font-sans text-xs text-espresso-600 font-light leading-relaxed">
                60% of our custom walnut lounge booths are held exclusively for walk-in guests daily. Private reservations are recommended for professional meetings and high tea pastries.
              </p>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-espresso-800/5 h-full flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="text-left">
                        <label htmlFor="customer-name" className="block font-sans text-xs font-semibold text-espresso-800 uppercase tracking-widest mb-2">
                          FULL Name *
                        </label>
                        <input
                          id="customer-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="BATMAN"
                          className="w-full px-4 py-3.5 bg-coffee-cream-50/50 border border-espresso-850/10 rounded-xl focus:border-luxury-gold-500 focus:bg-white focus:outline-none font-sans text-sm text-espresso-950 duration-300"
                        />
                      </div>

                      {/* Email input */}
                      <div className="text-left">
                        <label htmlFor="customer-email" className="block font-sans text-xs font-semibold text-espresso-800 uppercase tracking-widest mb-2">
                          Email Address *
                        </label>
                        <input
                          id="customer-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="batman123@gmail.com"
                          className="w-full px-4 py-3.5 bg-coffee-cream-50/50 border border-espresso-850/10 rounded-xl focus:border-luxury-gold-500 focus:bg-white focus:outline-none font-sans text-sm text-espresso-950 duration-300"
                        />
                      </div>
                    </div>

                    {/* Subject/Topic selection */}
                    <div className="text-left">
                      <label htmlFor="inquiry-subject" className="block font-sans text-xs font-semibold text-espresso-800 uppercase tracking-widest mb-2">
                        How can we help you? *
                      </label>
                      <select
                        id="inquiry-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3.5 bg-coffee-cream-50/50 border border-espresso-855/10 rounded-xl focus:border-luxury-gold-500 focus:bg-white focus:outline-none font-sans text-sm text-espresso-900 duration-300 cursor-pointer"
                      >
                        <option value="lounge-booking">Table Reservation</option>
                        <option value="whole-pastry">Bulk Dessert Order</option>
                        <option value="press">Custom Celebration Cake</option>
                        <option value="beans">Feedback & Suggestions</option>
                      </select>
                    </div>

                    {/* Message detail block */}
                    <div className="text-left">
                      <label htmlFor="inquiry-message" className="block font-sans text-xs font-semibold text-espresso-800 uppercase tracking-widest mb-2">
                        Tell Us More  *
                      </label>
                      <textarea
                        id="inquiry-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your requirements, preferred date, number of guests, cake details, or any special requests..."
                        className="w-full px-4 py-3.5 bg-coffee-cream-50/50 border border-espresso-855/10 rounded-xl focus:border-luxury-gold-500 focus:bg-white focus:outline-none font-sans text-sm text-espresso-950 duration-300 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit action */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-espresso-950 hover:bg-espresso-900 text-luxury-gold-400 font-sans font-semibold text-xs tracking-widest uppercase rounded-xl border border-luxury-gold-500/20 hover:border-luxury-gold-400 duration-300 flex items-center justify-center gap-2 group focus:outline-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-luxury-gold-400 border-t-transparent rounded-full animate-spin"></div>
                          Here you gooo...
                        </>
                      ) : (
                        <>
                          <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                          SEND MESSAGE
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-center py-8 px-4 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-md animate-bounce">
                      <CheckCircle2 size={32} />
                    </div>

                    <span className="font-mono text-[10px] tracking-widest uppercase text-luxury-gold-600 font-bold mb-2">
                      Cheers :)
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-espresso-900 mb-4">
                      We've Received Your Inquiry
                    </h3>
                    <p className="font-sans text-sm text-espresso-600 font-light leading-relaxed max-w-md mb-8">
                      Thank you for contacting Nuha Patisseries & Cafe. Your request has been successfully received, and our team will connect with you shortly to assist with your inquiry.
                    </p>

                    {/* Reference block */}
                    <div className="bg-coffee-cream-100 border border-luxury-gold-500/25 rounded-2xl p-6 w-full max-w-sm mb-8">
                      <div className="flex items-center justify-center gap-1.5 text-luxury-gold-600 mb-1">
                        <Sparkles size={14} />
                        <span className="font-mono text-[9px] uppercase tracking-widest font-extrabold">INQUIRY REFERENCE</span>
                      </div>
                      <span className="font-mono text-xl font-bold text-espresso-950 tracking-wider">
                        {referenceId}
                      </span>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-espresso-950 text-coffee-cream-100 rounded-lg hover:text-luxury-gold-400 text-xs font-sans font-medium uppercase tracking-wider duration-300 focus:outline-none cursor-pointer"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
