import { Instagram, Facebook, Mail, Moon, Star } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/suhoor-fest-logo.jpg";

const EVENTBRITE_URL = "https://www.eventbrite.com/e/socal-suhoor-festival-2026-tickets-1977568273942?aff=oddtdtcreator";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img src={logo} alt="SoCal Suhoor Fest" className="w-12 h-12 rounded-full border-2 border-primary/30" />
              <h4 className="font-display font-bold text-lg text-foreground">SoCal Suhoor Fest</h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Southern California's biggest suhoor festival. 3 nights of food, shopping, and community.
            </p>
          </div>

          {/* Event Info */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">Event Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Feb 20, 27 & Mar 6, 2026</li>
              <li>10:00 PM – 4:00 AM</li>
              <li>Santa Ana Stadium</li>
              <li>602 N Flower St, Santa Ana, CA</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/vendors" className="text-muted-foreground hover:text-primary transition-colors text-sm">Vendors</Link></li>
              <li><Link to="/volunteer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Volunteer</Link></li>
              <li><Link to="/merch" className="text-muted-foreground hover:text-primary transition-colors text-sm">Merch</Link></li>
              <li><a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Get Tickets</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-display font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end mb-4">
              <a href="https://www.instagram.com/socalsuhoorfest/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:info@socalsuhoorfest.com" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">@socalsuhoorfest</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1" />
          <Moon className="w-6 h-6 text-primary/50" />
          <Star className="w-4 h-4 text-primary/50 fill-primary/30" />
          <Moon className="w-6 h-6 text-primary/50 scale-x-[-1]" />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1" />
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">© 2026 SoCal Suhoor Fest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;