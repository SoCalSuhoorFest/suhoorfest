import { Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/suhoor-fest-logo.jpg";

const EVENTBRITE_URL = "https://www.eventbrite.com/e/socal-suhoor-festival-2026-tickets-1977568273942?aff=oddtdtcreator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="SoCal Suhoor Fest" className="w-10 h-10 rounded-full" />
                <span className="font-display font-bold text-lg">Suhoor Fest</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                SoCal's biggest late-night Ramadan festival.
              </p>
            </div>

            {/* Event */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Event</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Feb 20, 27 & Mar 6, 2026</li>
                <li>10:00 PM – 4:00 AM</li>
                <li className="flex items-start gap-1">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Santa Ana Stadium
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/vendors" className="text-muted-foreground hover:text-primary transition-colors">Vendors</Link></li>
                <li><Link to="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">Volunteer</Link></li>
                <li><Link to="/merch" className="text-muted-foreground hover:text-primary transition-colors">Merch</Link></li>
                <li><a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Get Tickets</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/socalsuhoorfest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@socalsuhoorfest.com"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-3">@socalsuhoorfest</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-8" />

          {/* Bottom */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 SoCal Suhoor Fest. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;