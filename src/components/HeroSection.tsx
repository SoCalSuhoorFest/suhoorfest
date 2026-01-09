import { Button } from "@/components/ui/button";
import { Moon, MapPin, Clock, Ticket } from "lucide-react";
import { motion } from "framer-motion";
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      </div>

      {/* Crescent Moon Accent */}
      <motion.div 
        className="absolute top-24 right-8 md:right-16 z-10 opacity-15"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <Moon className="w-24 h-24 md:w-40 md:h-40 text-primary fill-primary/10" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logo}
              alt="SoCal Suhoor Fest"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/30 shadow-lg"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            SoCal<br />
            <span className="text-primary">Suhoor Fest</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-lg mx-auto font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Southern California's biggest late-night festival. Three nights of food, culture & community.
          </motion.p>

          {/* Event Details */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">Feb 20, 27 & Mar 6</p>
                <p className="text-muted-foreground text-xs tracking-wide">10PM – 4AM</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">Santa Ana Stadium</p>
                <p className="text-muted-foreground text-xs tracking-wide">602 N Flower St</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
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
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
