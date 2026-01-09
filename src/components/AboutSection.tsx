import { Utensils, ShoppingBag, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Food Vendors", icon: Utensils },
  { value: "30+", label: "Bazaar Shops", icon: ShoppingBag },
  { value: "3", label: "Nights", icon: Users },
  { value: "10K+", label: "Attendees", icon: Heart },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-medium mb-4 tracking-widest uppercase text-xs">
                About the Festival
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight tracking-tight">
                Three nights of community under the stars
              </h2>
              <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                <p>
                  The SoCal Suhoor Festival brings together families and friends for the blessed pre-dawn meal during Ramadan. Experience the warmth of community with halal food from 40+ vendors, a bustling bazaar, and connections that last beyond the night.
                </p>
                <p>
                  Each night features a different vendor lineup, live entertainment, and a welcoming atmosphere for all ages. Whether you're coming to eat, shop, or simply soak in the energy — there's something for everyone.
                </p>
              </div>
            </motion.div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <stat.icon className="w-5 h-5 text-primary mb-4" />
                  <p className="text-4xl md:text-5xl font-display font-bold text-foreground mb-1 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
