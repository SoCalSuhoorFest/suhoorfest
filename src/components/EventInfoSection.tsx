import { MapPin, Clock, Calendar, Ticket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventInfoSection = () => {
  return (
    <section id="info" className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Event Details
            </span>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Join Us <span className="text-gradient-gold">Under the Stars</span>
          </h2>
        </div>

        {/* Info Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-primary/20 overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-6 text-center border-b border-primary/20">
              <h3 className="text-3xl font-display font-bold text-gradient-gold">
                Ramadan 2026
              </h3>
              <p className="text-muted-foreground mt-2">
                Mark your calendars for the biggest suhoor celebration in SoCal
              </p>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Date & Time */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Date
                      </h4>
                      <p className="text-muted-foreground">
                        Coming Ramadan 2026
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        Exact date to be announced
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Time
                      </h4>
                      <p className="text-muted-foreground">9:00 PM – 4:00 AM</p>
                      <p className="text-sm text-muted-foreground/70">
                        Stay for suhoor before Fajr
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location & Tickets */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Location
                      </h4>
                      <p className="text-muted-foreground">Anaheim, California</p>
                      <p className="text-sm text-muted-foreground/70">
                        Venue details coming soon
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Ticket className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Tickets
                      </h4>
                      <p className="text-muted-foreground">
                        Early bird pricing available soon
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        Family packages available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Ticket className="w-5 h-5 mr-2" />
                  Get Early Access
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Be the first to know when tickets go on sale
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
