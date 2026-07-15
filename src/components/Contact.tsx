import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykrzarb";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "lounge-booking",
    message: "",
  });

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [referenceId, setReferenceId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
    };

    if (
      !trimmedData.name ||
      !trimmedData.phone ||
      !trimmedData.email ||
      !trimmedData.message
    ) {
      setErrorMessage(
        "Please enter your name, phone number, email address, and message.",
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedData.name,
          phone: trimmedData.phone,
          email: trimmedData.email,
          inquiryType: trimmedData.subject,
          message: trimmedData.message,
          source: "Nuha Patisserie and Cafe Website",
          _subject: `New Nuha Website Inquiry — ${trimmedData.subject}`,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);

        const formspreeError =
          result?.errors
            ?.map((error: { message: string }) => error.message)
            .join(", ") || "We could not send your inquiry. Please try again.";

        throw new Error(formspreeError);
      }

      const pinCode = `CN-${Math.floor(100000 + Math.random() * 900000)}`;

      setReferenceId(pinCode);
      setStatus("success");

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "lounge-booking",
        message: "",
      });
    } catch (error) {
      console.error("Form submission failed:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );

      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setReferenceId("");
    setErrorMessage("");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-espresso-800/5 bg-coffee-cream-100 px-6 py-24 md:py-32 lg:px-8"
    >
      <div className="absolute left-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-luxury-gold-200/15 blur-3xl" />

      <div className="absolute bottom-1/3 right-0 -z-10 h-96 w-96 rounded-full bg-espresso-300/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col justify-between text-left lg:col-span-5">
            <div>
              <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-widest text-luxury-gold-600">
                Get in Touch
              </span>

              <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-espresso-900 md:text-4xl xl:text-5xl">
                Let's Plan Something Delicious
                <br />
                <span className="font-medium  text-luxury-gold-600">
                  Nuha Patisserie and Café
                </span>
              </h2>

              <p className="mb-10 font-sans text-sm font-light leading-relaxed text-espresso-600 md:text-base">
                Have a question, custom cake request, table reservation, or
                event inquiry? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-espresso-800/5 bg-white text-luxury-gold-600 shadow-md">
                    <Phone size={18} />
                  </div>

                  <div>
                    <span className="mb-1 block font-mono text-[9px] font-bold uppercase leading-none tracking-widest text-espresso-400">
                      Call Us
                    </span>

                    <a
                      href="tel:+917090799985"
                      className="font-serif text-base font-bold text-espresso-900 duration-300 hover:text-luxury-gold-600"
                    >
                      +91 70907 99985
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-espresso-800/5 bg-white text-luxury-gold-600 shadow-md">
                    <Mail size={18} />
                  </div>

                  <div>
                    <span className="mb-1 block font-mono text-[9px] font-bold uppercase leading-none tracking-widest text-espresso-400">
                      Email Us
                    </span>

                    <a
                      href="mailto:faneateries@gmail.com"
                      className="font-serif text-base font-bold text-espresso-900 duration-300 hover:text-luxury-gold-600"
                    >
                      faneateries@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-espresso-800/5 bg-white text-luxury-gold-600 shadow-md">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <span className="mb-1 block font-mono text-[9px] font-bold uppercase leading-none tracking-widest text-espresso-400">
                      Visit Us
                    </span>

                    <p className="font-sans text-xs font-light leading-relaxed text-espresso-700">
                      12, Shri Krishna Temple Road, Indiranagar, Bengaluru,
                      Karnataka 560038.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Walk-In Policy */}
            <div className="mt-12 hidden rounded-2xl border border-espresso-800/5 bg-white/50 p-6 lg:block">
              <span className="mb-1 block font-mono text-[9px] font-bold uppercase tracking-widest text-luxury-gold-600">
                Walk-In Policy
              </span>

              <p className="font-sans text-xs font-light leading-relaxed text-espresso-600">
                Walk-ins are welcome throughout the day. Reservations are
                recommended for larger groups, special occasions, and private
                gatherings.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-espresso-800/5 bg-white p-8 shadow-2xl md:p-10">
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div className="text-left">
                        <label
                          htmlFor="customer-name"
                          className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-espresso-800"
                        >
                          Full Name *
                        </label>

                        <input
                          id="customer-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          placeholder="Eg: Batman"
                          className="w-full rounded-xl border border-espresso-850/10 bg-coffee-cream-50/50 px-4 py-3.5 font-sans text-sm text-espresso-950 duration-300 focus:border-luxury-gold-500 focus:bg-white focus:outline-none"
                        />
                      </div>

                      {/* Phone */}
                      <div className="text-left">
                        <label
                          htmlFor="customer-phone"
                          className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-espresso-800"
                        >
                          Phone Number *
                        </label>

                        <input
                          id="customer-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          inputMode="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="Eg: 9848902062"
                          className="w-full rounded-xl border border-espresso-850/10 bg-coffee-cream-50/50 px-4 py-3.5 font-sans text-sm text-espresso-950 duration-300 focus:border-luxury-gold-500 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="text-left">
                      <label
                        htmlFor="customer-email"
                        className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-espresso-800"
                      >
                        Email Address *
                      </label>

                      <input
                        id="customer-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-espresso-850/10 bg-coffee-cream-50/50 px-4 py-3.5 font-sans text-sm text-espresso-950 duration-300 focus:border-luxury-gold-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="text-left">
                      <label
                        htmlFor="inquiry-subject"
                        className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-espresso-800"
                      >
                        How Can We Help You? *
                      </label>

                      <select
                        id="inquiry-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            subject: e.target.value,
                          })
                        }
                        className="w-full cursor-pointer rounded-xl border border-espresso-855/10 bg-coffee-cream-50/50 px-4 py-3.5 font-sans text-sm text-espresso-900 duration-300 focus:border-luxury-gold-500 focus:bg-white focus:outline-none"
                      >
                        <option value="lounge-booking">
                          Table Reservation
                        </option>

                        <option value="bulk-dessert-order">
                          Bulk Dessert Order
                        </option>

                        <option value="custom-celebration-cake">
                          Custom Celebration Cake
                        </option>

                        <option value="event-inquiry">
                          Event or Group Inquiry
                        </option>

                        <option value="feedback">
                          Feedback and Suggestions
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="text-left">
                      <label
                        htmlFor="inquiry-message"
                        className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-espresso-800"
                      >
                        Tell Us More *
                      </label>

                      <textarea
                        id="inquiry-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        placeholder="Share your preferred date, number of guests, cake details, or any special requirements..."
                        className="w-full resize-none rounded-xl border border-espresso-855/10 bg-coffee-cream-50/50 px-4 py-3.5 font-sans text-sm text-espresso-950 duration-300 focus:border-luxury-gold-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Error Message */}
                    {status === "error" && (
                      <div
                        role="alert"
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-sans text-xs text-red-600"
                      >
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-luxury-gold-500/20 bg-espresso-950 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-luxury-gold-400 duration-300 hover:border-luxury-gold-400 hover:bg-espresso-900 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-luxury-gold-400 border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send
                            size={12}
                            className="duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center font-sans text-[10px] leading-relaxed text-espresso-500">
                      By submitting this form, you agree to be contacted
                      regarding your inquiry.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="flex flex-col items-center px-4 py-8 text-center"
                  >
                    <div className="mb-6 flex h-16 w-16 animate-bounce items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-50 text-emerald-500 shadow-md">
                      <CheckCircle2 size={32} />
                    </div>

                    <span className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-luxury-gold-600">
                      Thank You
                    </span>

                    <h3 className="mb-4 font-serif text-2xl font-bold text-espresso-900">
                      We've Received Your Inquiry
                    </h3>

                    <p className="mb-8 max-w-md font-sans text-sm font-light leading-relaxed text-espresso-600">
                      Thank you for contacting Nuha Patisserie and Café. Your
                      inquiry has been sent successfully, and our team will
                      contact you shortly.
                    </p>

                    <div className="mb-8 w-full max-w-sm rounded-2xl border border-luxury-gold-500/25 bg-coffee-cream-100 p-6">
                      <div className="mb-1 flex items-center justify-center gap-1.5 text-luxury-gold-600">
                        <Sparkles size={14} />

                        <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest">
                          Inquiry Reference
                        </span>
                      </div>

                      <span className="font-mono text-xl font-bold tracking-wider text-espresso-950">
                        {referenceId}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="cursor-pointer rounded-lg bg-espresso-950 px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-wider text-coffee-cream-100 duration-300 hover:text-luxury-gold-400 focus:outline-none"
                    >
                      Submit Another Inquiry
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
