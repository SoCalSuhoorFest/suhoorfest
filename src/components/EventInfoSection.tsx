import { MapPin, Clock, Calendar, Ticket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EVENTBRITE_URL = "https://www.eventbrite.com/e/socal-suhoor-festival-2026-tickets-1977568273942?aff=oddtdtcreator";

const eventDates = [
  { day: "Fri", date: "20", month: "Feb" },
  { day: "Fri", date: "27", month: "Feb" },
  { day: "Fri", date: "6", month: "Mar" },
];

const ticketTypes = [
  { name: "Single Night", price: "$12", note: "One night entry" },
  { name: "3-Night Pass", price: "$30", note: "Best value" },
  { name: "Express Pass", price: "$35+", note: "Skip the lines" },
];

const EventInfoSection = () => {
  return (
    <section id="info" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Event Details
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              When & Where
            </h2>
          </div>

          {/* Date Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-12">
            {eventDates.map((event, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-4 md:p-6 text-center"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {event.month}
                </p>
                <p className="text-4xl md:text-6xl font-display font-bold text-foreground">
                  {event.date}
                </p>
                <p className="text-sm text-primary font-medium mt-1">{event.day}</p>
              </div>
            ))}
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Location */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Location</h3>
                  <p className="text-foreground font-medium">Santa Ana Stadium</p>
                  <p className="text-muted-foreground text-sm">602 N Flower St, Santa Ana, CA 92703</p>
                  <a
                    href="https://maps.google.com/?q=Santa+Ana+Stadium+602+N+Flower+St"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2"
                  >
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Time */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Hours</h3>
                  <p className="text-foreground font-medium">10:00 PM – 4:00 AM</p>
                  <p className="text-muted-foreground text-sm">Gates open at 9:30 PM</p>
                  <p className="text-muted-foreground text-sm mt-1">Stay for suhoor before Fajr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tickets */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Ticket className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-xl text-foreground">Tickets</h3>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {ticketTypes.map((ticket, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-5 text-center ${
                    index === 1 ? "bg-primary/10 border-2 border-primary" : "bg-secondary/30 border border-border"
                  }`}
                >
                  <p className="text-sm text-muted-foreground mb-1">{ticket.name}</p>
                  <p className="text-3xl font-display font-bold text-foreground">{ticket.price}</p>
                  <p className="text-xs text-primary mt-1">{ticket.note}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 h-14 text-base"
                onClick={() => window.open(EVENTBRITE_URL, "_blank")}
              >
                Buy Tickets
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;