import { Instagram, Facebook, Mail, Heart, Moon, Star } from "lucide-react";
import logo from "@/assets/suhoor-fest-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img
                src={logo}
                alt="SoCal Suhoor Fest"
                className="w-12 h-12 rounded-full border-2 border-primary/30"
              />
              <div>
                <h4 className="font-display font-bold text-lg text-foreground">
                  SoCal Suhoor Fest
                </h4>
                <p className="text-sm text-muted-foreground">سحور</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Southern California's premier Ramadan festival, bringing together
              community, culture, and celebration under the stars.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  What to Expect
                </a>
              </li>
              <li>
                <a
                  href="#info"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Event Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Vendor Application
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Connect With Us
            </h4>
            <div className="flex gap-4 justify-center md:justify-end mb-4">
              <a
                href="https://instagram.com/socalsuhoorfest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@socalsuhoorfest.com"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              @socalsuhoorfest
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1" />
          <Moon className="w-6 h-6 text-primary/50" />
          <Star className="w-4 h-4 text-primary/50 fill-primary/30" />
          <Moon className="w-6 h-6 text-primary/50 scale-x-[-1]" />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 SoCal Suhoor Fest. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-festival-red fill-festival-red" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
