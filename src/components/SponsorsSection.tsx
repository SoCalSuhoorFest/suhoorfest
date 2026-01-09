import { motion } from "framer-motion";
import californiaSmileLogo from "@/assets/sponsors/california-smile.webp";
import cairCaliforniaLogo from "@/assets/sponsors/cair-california.svg";
import islamicReliefLogo from "@/assets/sponsors/islamic-relief.png";
import assurixsLogo from "@/assets/sponsors/assurixs.webp";
import pennyAppealLogo from "@/assets/sponsors/penny-appeal.jpg";
import syrianForumLogo from "@/assets/sponsors/syrian-forum.png";

const sponsors = [
  { name: "California Smile Dental Group", logo: californiaSmileLogo },
  { name: "CAIR California", logo: cairCaliforniaLogo },
  { name: "Assurixs Insurance", logo: assurixsLogo },
  { name: "Syrian Forum USA", logo: syrianForumLogo },
  { name: "Penny Appeal USA", logo: pennyAppealLogo },
  { name: "Islamic Relief", logo: islamicReliefLogo },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-xs">
              Our Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              Proudly Sponsored By
            </h2>
          </motion.div>

          {/* Sponsors */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-4 flex items-center justify-center min-h-[100px] hover:border-primary/30 transition-colors duration-200"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Charity Note */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              A portion of all ticket sales supports our charity partners. Thank you to our sponsors for making this event possible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
