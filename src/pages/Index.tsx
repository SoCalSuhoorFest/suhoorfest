import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventInfoSection from "@/components/EventInfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SoCal Suhoor Fest 2026 | Southern California's Biggest Ramadan Festival</title>
        <meta
          name="description"
          content="Join the SoCal Suhoor Fest in Anaheim, CA - Southern California's largest Ramadan celebration featuring halal food, shopping bazaar, community gathering, and charity under the stars."
        />
        <meta
          name="keywords"
          content="Suhoor Fest, Ramadan festival, SoCal, Anaheim, halal food, Muslim community, Islamic event, night market"
        />
        <meta property="og:title" content="SoCal Suhoor Fest 2026" />
        <meta
          property="og:description"
          content="Southern California's Biggest Ramadan Celebration Under the Stars"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://socalsuhoorfest.com" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <EventInfoSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
