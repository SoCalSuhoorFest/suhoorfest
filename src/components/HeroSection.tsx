import { Button } from "@/components/ui/button";
import { Moon, Star, MapPin, Calendar, Clock } from "lucide-react";
import heroImage from "@/assets/hero-festival.jpg";
import logo from "@/assets/suhoor-fest-logo.jpg";

const EVENTBRITE_URL = "https://www.eventbrite.com/e/socal-suhoor-festival-2026-tickets-1977568273942?aff=oddtdtcreator";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="SoCal Suhoor Fest night festival with string lights and lanterns"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-primary star-twinkle fill-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${12 + Math.random() * 12}px`,
              height: `${12 + Math.random() * 12}px`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Floating Lantern/Moon */}
      <div className="absolute top-20 right-10 md:right-20 z-10 lantern-float">
        <Moon className="w-16 h-16 md:w-24 md:h-24 text-primary fill-primary/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 pt-20 pb-12 text-center">
        {/* Logo */}
        <div className="mb-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={logo}
            alt="SoCal Suhoor Fest Logo"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full border-4 border-primary/30 shadow-lg glow-gold"
          />
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-gradient-gold">SoCal</span>{" "}
          <span className="text-foreground">Suhoor Fest</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto fade-in-up font-light"
          style={{ animationDelay: "0.5s" }}
        >
          Southern California's Biggest Suhoor Festival
        </p>

        {/* Date Badges */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-6 fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          <div className="bg-primary/20 border border-primary/40 px-4 py-2 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">FEB 20</span>
          </div>
          <div className="bg-primary/20 border border-primary/40 px-4 py-2 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">FEB 27</span>
          </div>
          <div className="bg-primary/20 border border-primary/40 px-4 py-2 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">MAR 6</span>
          </div>
        </div>

        {/* Event Details */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-8 fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-2 text-foreground/90 bg-secondary/50 px-4 py-2 rounded-full border border-primary/20">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-medium text-sm">10PM – 4AM</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90 bg-secondary/50 px-4 py-2 rounded-full border border-primary/20">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium text-sm">Santa Ana Stadium</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() => window.open(EVENTBRITE_URL, "_blank")}
          >
            Get Tickets
          </Button>
          <Button
            variant="hero-outline"
            size="xl"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;