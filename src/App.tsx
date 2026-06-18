import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Pastries from "./components/Pastries";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import LocationHours from "./components/LocationHours";
import Contact from "./components/Contact";
import InstagramFeed from "./components/Instagram";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div id="application-container" className="bg-espresso-950 font-sans text-white relative min-h-screen selection:bg-luxury-gold-500/30 selection:text-white">
      {/* Premium Sticky Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Cafe Nuha */}
        <About />

        {/* 3. Signature Coffee Menu */}
        <Menu />

        {/* 4. Pastries & Desserts Showcase */}
        <Pastries />

        {/* 5. Photo Gallery */}
        <Gallery />

        {/* 6. Customer Testimonials */}
        <Testimonials />

        {/* 7. Location & Opening Hours */}
        <LocationHours />

        {/* 8. Contact & Reservation Form */}
        <Contact />

        {/* 9. Instagram Grid Feed */}
        <InstagramFeed />
      </main>

      {/* 10. Classic Footer */}
      <Footer />

      {/* Floating Concierge WhatsApp Widget */}
      <WhatsAppButton />
    </div>
  );
}
