import { MapPin, Clock, Calendar, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventInfoSection = () => {
  return (
    <section id="info" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 block">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Join Us <span className="text-gradient-gold">Ramadan 2026</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            One night, one chance — don't miss Southern California's biggest suhoor gathering
          </p>
        </div>

        {/* Info Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/20 overflow-hidden">
            {/* Card Content */}
            <div className="p-6 md:p-8">
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {/* Date */}
                <div className="text-center sm:text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Date
                  </h4>
                  <p className="text-muted-foreground text-sm">Ramadan 2026</p>
                  <p className="text-xs text-muted-foreground/70">
                    Exact date TBA
                  </p>
                </div>

                {/* Time */}
                <div className="text-center sm:text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Time
                  </h4>
                  <p className="text-muted-foreground text-sm">9 PM – 4 AM</p>
                  <p className="text-xs text-muted-foreground/70">
                    Through suhoor
                  </p>
                </div>

                {/* Location */}
                <div className="text-center sm:text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Location
                  </h4>
                  <p className="text-muted-foreground text-sm">Anaheim, CA</p>
                  <p className="text-xs text-muted-foreground/70">
                    Venue TBA
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border/50 my-6" />

              {/* CTA Section */}
              <div className="text-center">
                <p className="text-sm text-foreground mb-4">
                  <span className="text-primary font-semibold">Free entry</span>{" "}
                  — Be the first to know when registration opens
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="hero" size="lg" className="group">
                    <Bell className="w-4 h-4 mr-2" />
                    Get Notified
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="hero-outline" size="lg">
                    Apply as Vendor
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Limited vendor spots available — apply early
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
