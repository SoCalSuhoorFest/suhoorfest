import { Moon, Users, Heart, Star, Utensils, ShoppingBag } from "lucide-react";

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
            3 Nights of <span className="text-gradient-gold">Community</span> &{" "}
            <span className="text-gradient-gold">Connection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The SoCal Suhoor Fest brings together families and friends under the
            stars for the blessed pre-dawn meal. Experience the warmth of
            Islamic hospitality with halal food, entertainment, shopping, and
            community connection. Each night features a different vendor lineup, so there's always something new to discover.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="text-2xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
              40+
            </div>
            <p className="text-muted-foreground text-xs md:text-sm">Food Vendors</p>
          </div>

          <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="text-2xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
              30+
            </div>
            <p className="text-muted-foreground text-xs md:text-sm">Bazaar Vendors</p>
          </div>

          <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Moon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="text-2xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
              3
            </div>
            <p className="text-muted-foreground text-xs md:text-sm">Magical Nights</p>
          </div>

          <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="text-2xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
              100%
            </div>
            <p className="text-muted-foreground text-xs md:text-sm">Family Friendly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
