import { Utensils, ShoppingBag, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Halal Food Paradise",
    description:
      "40+ vendors serving cuisines from around the world. Shawarma, tacos, boba, kunafeh, and everything in between.",
  },
  {
    icon: ShoppingBag,
    title: "Night Bazaar",
    description:
      "Shop from 30+ local vendors. Clothing, jewelry, art, fragrances, and unique finds you won't see anywhere else.",
  },
  {
    icon: Users,
    title: "Community Gathering",
    description:
      "A welcoming space for families and friends. Connect with the community and make memories that last.",
  },
  {
    icon: Heart,
    title: "Giving Back",
    description:
      "A portion of proceeds supports charity partners. Enjoy the night knowing you're making a difference.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              What to Expect
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              More than just a night market
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four reasons why this is SoCal's most anticipated Ramadan event.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;