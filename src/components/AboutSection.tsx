import { Utensils, ShoppingBag, Users, Heart } from "lucide-react";

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
            <div>
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
                About the Festival
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Three nights of community under the stars
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  The SoCal Suhoor Festival brings together families and friends for the blessed pre-dawn meal during Ramadan. Experience the warmth of community with halal food from 40+ vendors, a bustling bazaar, and connections that last beyond the night.
                </p>
                <p>
                  Each night features a different vendor lineup, live entertainment, and a welcoming atmosphere for all ages. Whether you're coming to eat, shop, or simply soak in the energy — there's something for everyone.
                </p>
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-4" />
                  <p className="text-4xl md:text-5xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;