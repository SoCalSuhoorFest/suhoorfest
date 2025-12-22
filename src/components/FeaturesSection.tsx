import { Utensils, ShoppingBag, Users, Heart, Star } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Halal Food Paradise",
    description:
      "Explore 50+ halal food vendors offering diverse cuisines from around the world. From Philly cheesesteaks to jollof rice, boba to birria tacos – there's something for everyone.",
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: ShoppingBag,
    title: "Vibrant Bazaar",
    description:
      "Shop from local artisans and vendors selling traditional clothing, handcrafted jewelry, Islamic art, home decor, and unique gifts for the whole family.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Community & Prayer",
    description:
      "Connect with the Muslim community in a welcoming space. Join together for late-night prayers, socialize with old friends, and make new connections.",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    icon: Heart,
    title: "Charity & Purpose",
    description:
      "Every event supports meaningful causes. Partner organizations like Human Appeal help channel generosity towards orphans and families in need worldwide.",
    accent: "from-rose-500 to-pink-500",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-transparent via-secondary/30 to-transparent relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              What Awaits You
            </span>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Experience the <span className="text-gradient-gold">Magic</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four pillars of an unforgettable night – food, shopping, community, and giving back
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
