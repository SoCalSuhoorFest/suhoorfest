import { MapPin, Clock, Calendar, Ticket, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EVENTBRITE_URL = "https://www.eventbrite.com/e/socal-suhoor-festival-2026-tickets-1977568273942?aff=oddtdtcreator";

const eventDates = [
  { day: "FRI", date: "20", month: "February" },
  { day: "FRI", date: "27", month: "February" },
  { day: "FRI", date: "6", month: "March" },
];

const ticketTypes = [
  { name: "General Admission", price: "$12", description: "Entry to the Festival (single night)" },
  { name: "3-Day Pass", price: "$30", description: "All 3 nights: Feb 20, Feb 27 & Mar 6" },
  { name: "Suhoor Express Pass", price: "$35+", description: "Priority entry + front-of-line access at vendors" },
];

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

        {/* Event Dates */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-center text-xl font-semibold mb-6 text-foreground">3 Nights of Magic</h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {eventDates.map((event, index) => (
              <div
                key={index}
                className="bg-card/60 border border-primary/20 rounded-2xl p-4 md:p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <p className="text-xs md:text-sm text-muted-foreground mb-1">{event.month}</p>
                <p className="text-sm font-medium text-primary">{event.day}</p>
                <p className="text-3xl md:text-5xl font-display font-bold text-gradient-gold">
                  {event.date}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">10:00 PM</p>
              </div>
            ))}
          </div>
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
                Three unforgettable nights of community, food & culture
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
                      <h4 className="font-semibold text-foreground mb-1">Dates</h4>
                      <p className="text-muted-foreground">
                        February 20, 27 & March 6, 2026
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        Three Friday nights during Ramadan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Time</h4>
                      <p className="text-muted-foreground">10:00 PM – 4:00 AM</p>
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
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">Santa Ana Stadium</p>
                      <p className="text-sm text-muted-foreground/70">
                        602 N Flower St, Santa Ana, CA 92703
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Ticket className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Tickets</h4>
                      <p className="text-muted-foreground">Starting at $12</p>
                      <p className="text-sm text-muted-foreground/70">
                        3-Day Pass & Express options available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Types */}
              <div className="mt-10 grid md:grid-cols-3 gap-4">
                {ticketTypes.map((ticket, index) => (
                  <div
                    key={index}
                    className="bg-secondary/30 border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
                  >
                    <p className="font-semibold text-foreground mb-1">{ticket.name}</p>
                    <p className="text-2xl font-display font-bold text-gradient-gold mb-2">
                      {ticket.price}
                    </p>
                    <p className="text-xs text-muted-foreground">{ticket.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto"
                  onClick={() => window.open(EVENTBRITE_URL, "_blank")}
                >
                  <Ticket className="w-5 h-5 mr-2" />
                  Get Tickets Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Secure your spot – tickets selling fast!
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
