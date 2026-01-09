import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Utensils, ShoppingBag, Star, ExternalLink } from "lucide-react";

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
          content="Explore 40+ halal food vendors and 30+ bazaar vendors at SoCal Suhoor Fest. From shawarma to boba, clothing to art – discover the best of SoCal's Muslim-owned businesses."
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
                  2026 Lineup
                </span>
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Our <span className="text-gradient-gold">Vendors</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each night features a different vendor lineup, so there's always something new to try and discover.
              </p>
            </div>
          </div>
        </section>

        {/* Food Vendors */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Food, Drink & Dessert
                </h2>
                <p className="text-muted-foreground text-sm">40+ halal vendors</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {foodVendors.map((vendor, index) => (
                <div
                  key={index}
                  className="bg-card/60 border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <p className="text-sm font-medium text-foreground">{vendor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bazaar Vendors */}
        <section className="py-16 relative bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Bazaar
                </h2>
                <p className="text-muted-foreground text-sm">Clothing, accessories, art, fragrances & more</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {bazaarVendors.map((vendor, index) => (
                <div
                  key={index}
                  className="bg-card/60 border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <p className="text-sm font-medium text-foreground">{vendor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Vendor CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-card/60 border border-primary/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Want to <span className="text-gradient-gold">Be a Vendor</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join SoCal's biggest suhoor festival. Connect with thousands of attendees across 3 incredible nights.
              </p>
              <Button
                variant="hero"
                size="lg"
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