import { Moon, Users, Utensils, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Attendees Expected",
    description: "SoCal's largest gathering",
  },
  {
    icon: Utensils,
    value: "50+",
    label: "Food & Retail Vendors",
    description: "Curated selection",
  },
  {
    icon: Clock,
    value: "7",
    label: "Hours of Experience",
    description: "9 PM to 4 AM",
  },
  {
    icon: Moon,
    value: "1",
    label: "Unforgettable Night",
    description: "Once a year",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 block">
            Why This Night Matters
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            The <span className="text-gradient-gold">Suhoor Experience</span>{" "}
            You've Been Waiting For
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Every Ramadan, thousands of Muslims across Southern California come
            together for one extraordinary night. A curated blend of incredible
            food, meaningful connections, and the blessed spirit of suhoor —
            all under the stars.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-5 md:p-6 bg-card/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold mb-1">
                {stat.value}
              </div>
              <p className="text-foreground font-medium text-sm mb-1">
                {stat.label}
              </p>
              <p className="text-muted-foreground text-xs">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-secondary/50 rounded-full border border-primary/20">
            <span className="text-sm text-foreground">
              <span className="text-primary font-semibold">Free entry</span> —
              you only pay for what you eat & shop
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
