import islamicReliefLogo from "@/assets/sponsors/islamic-relief.png";
import pennyAppealLogo from "@/assets/sponsors/penny-appeal.jpg";
import syrianForumLogo from "@/assets/sponsors/syrian-forum.png";

const sponsors = [
  { name: "Islamic Relief USA", logo: islamicReliefLogo },
  { name: "Penny Appeal USA", logo: pennyAppealLogo },
  { name: "Syrian Forum USA", logo: syrianForumLogo },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Our Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Proudly Sponsored By
            </h2>
          </div>

          {/* Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-4 flex items-center justify-center min-h-[100px] hover:border-primary/30 transition-colors"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Charity Note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              A portion of all ticket sales supports our charity partners. Thank you to our sponsors for making this event possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
