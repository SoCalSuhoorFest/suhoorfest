import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import merchTshirt from "@/assets/merch-tshirt.jpg";
import merchHoodie from "@/assets/merch-hoodie.jpg";
import merchCap from "@/assets/merch-cap.jpg";
import merchTote from "@/assets/merch-tote.jpg";

const merchItems = [
  {
    name: "Festival T-Shirt",
    price: "$25",
    description: "2026 edition with crescent logo",
    image: merchTshirt,
    badge: "Best Seller",
  },
  {
    name: "Premium Hoodie",
    price: "$45",
    description: "Cozy for late-night vibes",
    image: merchHoodie,
    badge: null,
  },
  {
    name: "Festival Cap",
    price: "$20",
    description: "Embroidered crescent moon",
    image: merchCap,
    badge: null,
  },
  {
    name: "Tote Bag",
    price: "$15",
    description: "Carry your bazaar finds",
    image: merchTote,
    badge: "New",
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
          content="Shop official SoCal Suhoor Fest merchandise."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* Hero */}
        <section className="pt-28 pb-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Official Gear
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Festival Merch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rep the fest. Available online and at the event.
            </p>
          </div>
        </section>

        {/* Merch Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {merchItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden group"
                >
                  <div className="aspect-square bg-secondary/20 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <p className="text-lg font-bold text-primary">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Shop the Full Collection
              </h2>
              <p className="text-muted-foreground mb-8">
                More items available online including limited editions.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.open(MERCH_STORE_URL, "_blank")}
              >
                Visit Store
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

export default Merch;