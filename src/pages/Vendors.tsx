import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Utensils, ShoppingBag, ExternalLink } from "lucide-react";

const EVENTBRITE_URL = "https://www.eventbrite.com/e/socal-suhoor-festival-2026-tickets-1977568273942?aff=oddtdtcreator";

const foodVendors = [
  "Big Al's Pizzeria", "Burger 3000", "Cedar Tacos", "Fatimas Grill", "Firefly Burger",
  "Frites-Freak", "Fresh Pizza on Wheels", "Kabobaholic", "Keriko Pollos Y Tacos",
  "La Familia Tacos", "Lekker Kitchen", "Mi Hibatchi", "Shawarma Day", "Shawarma House",
  "Shawarma Loca", "Slicers Cheesesteaks", "Street Tawa BBQ", "The Red Bird Hot Chicken",
  "Wingman Wings", "World Famous Grill", "Babylon Brews", "Chai Society", "Coastal Cane",
  "Cook's Corner Coffee", "Falahisips", "Moonlight Mocktails", "Qamaria Yemeni Coffee Co.",
  "Toastique", "Yuka Boba", "Beignets du Monde", "Choco Bite", "Crumbl", "Knafeh Queen",
  "Kornerknafeh", "Kunafeh Time", "Le Cafe du Parc", "Mon Arroza", "Wetzel's Pretzels"
];

const bazaarVendors = [
  "Crinkles and Crackles LLC", "Desserts 'N Stuff", "Diamantescarves", "Dokan Everything",
  "Farwa Family by Basel", "Fuzedbyla", "HeadzUp Barbershop", "Jerusalem Roastery",
  "Jiyd Jewels", "Lux Chocolate Bars", "Modest Forever", "Otantik Queen", "Palette of Palestine",
  "Palestinian Tatreez", "Safr Apparel", "Salaam Gallery", "Sheefa Honey", "Shai's Sweets",
  "Sofa's Fashion", "Sukoon Candles", "Supreme Beef Jerkey", "Syk's Desserts",
  "Top Style California", "Tursh", "United by Threadz"
];

const Vendors = () => {
  return (
    <>
      <Helmet>
        <title>Vendors | SoCal Suhoor Fest 2026</title>
        <meta
          name="description"
          content="Explore 40+ halal food vendors and 30+ bazaar vendors at SoCal Suhoor Fest."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* Hero */}
        <section className="pt-28 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                2026 Lineup
              </p>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                Our Vendors
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Each night features a different lineup. Always something new to discover.
              </p>
            </div>
          </div>
        </section>

        {/* Food Vendors */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Utensils className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Food, Drink & Dessert
                </h2>
                <p className="text-muted-foreground text-sm">40+ halal vendors</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {foodVendors.map((vendor, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg px-3 py-3 text-center hover:border-primary/40 transition-colors"
                >
                  <p className="text-sm text-foreground">{vendor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bazaar Vendors */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Bazaar
                </h2>
                <p className="text-muted-foreground text-sm">Clothing, accessories, art & more</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {bazaarVendors.map((vendor, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg px-3 py-3 text-center hover:border-primary/40 transition-colors"
                >
                  <p className="text-sm text-foreground">{vendor}</p>
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
                Want to Be a Vendor?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join SoCal's biggest suhoor festival and connect with thousands of attendees.
              </p>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("mailto:vendors@socalsuhoorfest.com", "_blank")}
              >
                Apply to Vend
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

export default Vendors;