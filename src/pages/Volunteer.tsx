import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Clock, CheckCircle, ExternalLink } from "lucide-react";

const benefits = [
  "Free entry to the festival",
  "Exclusive volunteer t-shirt",
  "Community service hours",
  "Snacks and refreshments",
  "Meet amazing people",
  "Be part of something special",
];

const Volunteer = () => {
  const volunteerFormUrl = "https://forms.gle/socalsuhoorfestvolunteer";

  return (
    <>
      <Helmet>
        <title>Volunteer | SoCal Suhoor Fest 2026</title>
        <meta
          name="description"
          content="Join our volunteer team for SoCal Suhoor Fest 2026."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* Hero */}
        <section className="pt-28 pb-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Join the Team
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Volunteer With Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Help create an unforgettable experience for thousands of families. Your time makes this festival possible.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.open(volunteerFormUrl, "_blank")}
            >
              Apply to Volunteer
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Info Bar */}
        <section className="py-8 bg-card/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Feb 20, 27 & Mar 6, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Various shifts available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                Volunteer Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Ready to Help?
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out our application form and we'll be in touch with next steps.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.open(volunteerFormUrl, "_blank")}
              >
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Volunteer;