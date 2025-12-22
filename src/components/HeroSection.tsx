import { Button } from "@/components/ui/button";
import { Moon, Star, MapPin, Calendar } from "lucide-react";
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
        <div className="mb-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={logo}
            alt="SoCal Suhoor Fest Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-primary/30 shadow-lg glow-gold"
          />
        </div>

        {/* Arabic Text */}
        <p
          className="text-2xl md:text-3xl text-primary font-medium mb-4 fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          سحور
        </p>

        {/* Main Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-gradient-gold">SoCal</span>{" "}
          <span className="text-foreground">Suhoor Fest</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up font-light"
          style={{ animationDelay: "0.5s" }}
        >
          Southern California's Biggest Ramadan Celebration Under the Stars
        </p>

        {/* Event Details */}
        <div
          className="flex flex-wrap justify-center gap-6 mb-10 fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-2 text-foreground/90 bg-secondary/50 px-4 py-2 rounded-full border border-primary/20">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">Ramadan 2026</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90 bg-secondary/50 px-4 py-2 rounded-full border border-primary/20">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium">Anaheim, CA</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <Button variant="hero" size="xl">
            Get Tickets
          </Button>
          <Button variant="hero-outline" size="xl">
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
