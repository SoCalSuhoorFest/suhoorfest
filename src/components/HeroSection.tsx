import { Button } from "@/components/ui/button";
import { Moon, Star, MapPin, Calendar, ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/hero-festival.jpg";
import logo from "@/assets/suhoor-fest-logo.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-primary star-twinkle fill-primary"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${5 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${10 + Math.random() * 10}px`,
              height: `${10 + Math.random() * 10}px`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating Moon */}
      <div className="absolute top-20 right-10 md:right-20 z-10 lantern-float">
        <Moon className="w-12 h-12 md:w-20 md:h-20 text-primary fill-primary/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16 text-center">
        {/* Exclusive Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-primary text-sm font-medium tracking-wide">
            Limited Capacity Event
          </span>
        </div>

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
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-3 fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-gradient-gold">SoCal</span>{" "}
          <span className="text-foreground">Suhoor Fest</span>
        </h1>

        {/* Tagline - Value Proposition */}
        <p
          className="text-lg md:text-xl text-foreground/90 mb-2 max-w-xl mx-auto fade-in-up font-medium"
          style={{ animationDelay: "0.4s" }}
        >
          Southern California's Biggest Suhoor Festival
        </p>

        {/* Sub-tagline */}
        <p
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          One Night. 50+ Vendors. 10,000+ Muslims. Under the Stars.
        </p>

        {/* Event Details Pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10 fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-2 text-foreground/90 bg-secondary/60 px-4 py-2.5 rounded-full border border-primary/20">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-medium text-sm">Ramadan 2026</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90 bg-secondary/60 px-4 py-2.5 rounded-full border border-primary/20">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium text-sm">Anaheim, CA</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90 bg-secondary/60 px-4 py-2.5 rounded-full border border-primary/20">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-medium text-sm">10,000+ Expected</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button variant="hero" size="xl" className="group">
            Reserve Your Spot
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero-outline" size="xl">
            Become a Vendor
          </Button>
        </div>

        {/* Trust Signal */}
        <p
          className="text-xs text-muted-foreground mt-6 fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          Join thousands who experienced the magic in 2024 & 2025
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
