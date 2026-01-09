import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import SponsorsSection from "@/components/SponsorsSection";
import EventInfoSection from "@/components/EventInfoSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SoCal Suhoor Fest 2026 | Feb 20, 27 & Mar 6 - Santa Ana Stadium</title>
        <meta
          name="description"
          content="Join the SoCal Suhoor Fest - 3 nights of halal food, shopping bazaar, and community. Feb 20, 27 & Mar 6, 2026 at Santa Ana Stadium. 10PM-4AM."
        />
        <meta property="og:title" content="SoCal Suhoor Fest 2026" />
        <meta property="og:description" content="Southern California's Biggest Suhoor Festival - 3 Nights Under the Stars" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://socalsuhoorfest.com" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <CountdownTimer />
          <AboutSection />
          <FeaturesSection />
          <SponsorsSection />
          <EventInfoSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;