import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Heart, Users, Clock, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const benefits = [
  "Free entry to the festival",
  "Exclusive volunteer t-shirt",
  "Community service hours",
  "Snacks and refreshments provided",
  "Connect with amazing people",
  "Be part of something special",
];

const roles = [
  {
    title: "Guest Services",
    description: "Help attendees with questions, directions, and general assistance.",
    icon: Users,
  },
  {
    title: "Setup & Breakdown",
    description: "Assist with setting up before the event and cleanup after.",
    icon: Clock,
  },
  {
    title: "Vendor Support",
    description: "Help vendors with logistics and coordination.",
    icon: Heart,
  },
];

const Volunteer = () => {
  const volunteerFormUrl = "https://forms.gle/socalsuhoorfestvolunteer"; // Replace with actual form URL

  return (
    <>
      <Helmet>
        <title>Volunteer | SoCal Suhoor Fest 2026</title>
        <meta
          name="description"
          content="Join our volunteer team for SoCal Suhoor Fest 2026. Make a difference, earn community service hours, and be part of Southern California's biggest Ramadan festival."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  Join Our Team
                </span>
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Become a <span className="text-gradient-gold">Volunteer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Help us create an unforgettable experience for thousands of families.
                Your time and energy make this festival possible.
              </p>
              <Button
                variant="hero"
                size="xl"
                onClick={() => window.open(volunteerFormUrl, "_blank")}
              >
                Apply to Volunteer
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-12 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-card/60 px-6 py-4 rounded-xl border border-border/50">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Dates</p>
                  <p className="font-medium text-foreground">Feb 20, 27 & Mar 6, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card/60 px-6 py-4 rounded-xl border border-border/50">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Shifts</p>
                  <p className="font-medium text-foreground">Various times available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Volunteer <span className="text-gradient-gold">Benefits</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card/60 border border-border/50 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Volunteer <span className="text-gradient-gold">Roles</span>
              </h2>
              <p className="text-muted-foreground">Find the perfect role for you</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-card/60 border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <role.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-card/60 border border-primary/20 rounded-3xl p-8 md:p-12">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to <span className="text-gradient-gold">Make a Difference</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Fill out our volunteer application form and we'll be in touch with next steps.
              </p>
              <Button
                variant="hero"
                size="xl"
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