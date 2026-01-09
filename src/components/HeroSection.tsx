import { Button } from "@/components/ui/button";
import { Moon, MapPin, Clock, Ticket } from "lucide-react";
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
          alt="SoCal Suhoor Fest night festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      {/* Crescent Moon Accent */}
      <div className="absolute top-24 right-8 md:right-16 z-10 opacity-20">
        <Moon className="w-20 h-20 md:w-32 md:h-32 text-primary fill-primary/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Logo & Badge */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src={logo}
              alt="SoCal Suhoor Fest"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/40"
            />
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[0.9]">
            SoCal<br />
            <span className="text-primary">Suhoor Fest</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-xl font-light">
            Southern California's biggest late-night festival. Three nights of food, culture & community.
          </p>

          {/* Event Details - Clean List */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Feb 20, 27 & Mar 6</p>
                <p className="text-muted-foreground text-sm">10PM – 4AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Santa Ana Stadium</p>
                <p className="text-muted-foreground text-sm">602 N Flower St</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 text-base"
              onClick={() => window.open(EVENTBRITE_URL, "_blank")}
            >
              <Ticket className="w-5 h-5 mr-2" />
              Get Tickets — From $12
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 hover:bg-foreground/5 h-14 text-base"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;