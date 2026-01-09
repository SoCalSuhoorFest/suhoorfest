import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, ExternalLink } from "lucide-react";

import merchTshirt from "@/assets/merch-tshirt.jpg";
import merchHoodie from "@/assets/merch-hoodie.jpg";
import merchCap from "@/assets/merch-cap.jpg";
import merchTote from "@/assets/merch-tote.jpg";

const merchItems = [
  {
    name: "Suhoor Fest T-Shirt",
    price: "$25",
    description: "Classic festival tee with 2026 logo",
    tag: "Best Seller",
    image: merchTshirt,
  },
  {
    name: "Premium Hoodie",
    price: "$45",
    description: "Cozy hoodie perfect for late nights",
    tag: null,
    image: merchHoodie,
  },
  {
    name: "Festival Cap",
    price: "$20",
    description: "Embroidered cap with crescent logo",
    tag: null,
    image: merchCap,
  },
  {
    name: "Tote Bag",
    price: "$15",
    description: "Perfect for carrying your bazaar finds",
    tag: "New",
    image: merchTote,
  },
];

const MERCH_STORE_URL = "https://socalsuhoorfest.myshopify.com";

const Merch = () => {
  return (
    <>
      <Helmet>
        <title>Merch | SoCal Suhoor Fest 2026</title>
        <meta
          name="description"
          content="Shop official SoCal Suhoor Fest merchandise. T-shirts, hoodies, caps, and more. Rep the fest and support the community."
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
                  Official Gear
                </span>
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Festival <span className="text-gradient-gold">Merch</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rep the fest and take home a piece of the magic. Available online and at the event.
              </p>
            </div>
          </div>
        </section>

        {/* Merch Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {merchItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-card/60 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="aspect-square bg-secondary/30 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.tag && (
                      <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-display font-bold text-gradient-gold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-card/60 border border-primary/20 rounded-3xl p-8 md:p-12">
              <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Shop the Full <span className="text-gradient-gold">Collection</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Visit our online store for the complete merchandise lineup, including limited edition items.
              </p>
              <Button
                variant="hero"
                size="xl"
                onClick={() => window.open(MERCH_STORE_URL, "_blank")}
              >
                Visit Store
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Or shop in person at the festival!
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Merch;