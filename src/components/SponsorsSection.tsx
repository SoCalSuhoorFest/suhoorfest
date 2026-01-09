import { Star, Heart } from "lucide-react";

const sponsors = [
  { name: "California Smile Dental Group", tier: "gold" },
  { name: "CAIR California", tier: "gold" },
  { name: "Assurixs Insurance Services", tier: "gold" },
  { name: "Syrian Forum USA", tier: "silver" },
  { name: "Penny Appeal USA", tier: "silver" },
  { name: "Islamic Relief", tier: "silver" },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Our Partners
            </span>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Proud <span className="text-gradient-gold">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with organizations that share our vision of community, charity, and celebration.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border transition-all duration-300 hover:scale-105 ${
                sponsor.tier === "gold"
                  ? "border-primary/40 hover:border-primary/60"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">
                  {sponsor.name.charAt(0)}
                </span>
              </div>
              <p className="font-medium text-foreground text-sm md:text-base">
                {sponsor.name}
              </p>
              {sponsor.tier === "gold" && (
                <span className="inline-block mt-2 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Gold Sponsor
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Charity Note */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card/40 border border-primary/20 rounded-2xl p-6 md:p-8">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
              Giving Back to the Community
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              A portion of all ticket sales will be donated to support our charity partners. 
              By attending, you're not just enjoying an incredible night – you're also helping make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;