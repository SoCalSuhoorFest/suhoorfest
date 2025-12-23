import { Utensils, ShoppingBag, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "World-Class Halal Food",
    description:
      "50+ handpicked vendors serving cuisines from around the globe. From gourmet street food to traditional favorites — fuel up before Fajr.",
    highlight: "50+ Vendors",
  },
  {
    icon: ShoppingBag,
    title: "Curated Night Bazaar",
    description:
      "Shop exclusive collections from local artisans. Modest fashion, artisan crafts, Islamic decor, and unique finds you won't see anywhere else.",
    highlight: "Exclusive Items",
  },
  {
    icon: Users,
    title: "Community Connection",
    description:
      "Reconnect with old friends, make new ones, and experience the unmatched energy of 10,000+ Muslims gathering under one sky.",
    highlight: "10,000+ People",
  },
  {
    icon: Heart,
    title: "Purposeful Impact",
    description:
      "A portion of proceeds supports humanitarian causes. Your night of joy becomes someone else's source of hope.",
    highlight: "Giving Back",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-gradient-to-b from-transparent via-secondary/20 to-transparent relative"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 block">
            What Awaits You
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5">
            Four Pillars of an{" "}
            <span className="text-gradient-gold">Unforgettable Night</span>
          </h2>
          <p className="text-muted-foreground">
            Every detail is designed to create an experience worth remembering
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 md:p-7 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              <div className="absolute top-5 right-5">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
