import { Utensils, ShoppingBag, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-xs">
              What to Expect
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              More than just a night market
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Four reasons why this is SoCal's most anticipated Ramadan event.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-2 text-foreground tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
