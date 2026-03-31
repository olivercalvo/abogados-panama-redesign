import SchemaMarkup from "@/components/ui/SchemaMarkup";
import TopBar from "@/components/sections/TopBar";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Services from "@/components/sections/Services";
import AboutAttorney from "@/components/sections/AboutAttorney";
import MediaBanner from "@/components/sections/MediaBanner";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <AboutAttorney />
        <MediaBanner />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
