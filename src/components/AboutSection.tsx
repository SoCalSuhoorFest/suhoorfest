import { Moon, Users, Heart, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              About The Festival
            </span>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            A Night of <span className="text-gradient-gold">Community</span> &{" "}
            <span className="text-gradient-gold">Celebration</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The SoCal Suhoor Fest is a vibrant celebration of Ramadan, bringing
            together families and friends under the stars for the blessed
            pre-dawn meal. Experience the warmth of Islamic hospitality with
            halal food, entertainment, shopping, and community connection.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
              10K+
            </div>
            <p className="text-muted-foreground text-sm">Attendees</p>
          </div>

          <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
              50+
            </div>
            <p className="text-muted-foreground text-sm">Food Vendors</p>
          </div>

          <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Moon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
              1
            </div>
            <p className="text-muted-foreground text-sm">Magical Night</p>
          </div>

          <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
              ∞
            </div>
            <p className="text-muted-foreground text-sm">Memories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
