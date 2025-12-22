import { Helmet } from "react-helmet-async";
import { Utensils, ShoppingBag, Star, ChefHat, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const foodVendors = [
  { name: "Philly Halal Steaks", cuisine: "American", specialty: "Cheesesteaks & Hoagies" },
  { name: "Jollof House", cuisine: "West African", specialty: "Jollof Rice & Suya" },
  { name: "Boba Bliss", cuisine: "Taiwanese", specialty: "Bubble Tea & Desserts" },
  { name: "Birria Bros", cuisine: "Mexican", specialty: "Birria Tacos & Quesadillas" },
  { name: "Kabob Corner", cuisine: "Middle Eastern", specialty: "Kebabs & Shawarma" },
  { name: "Curry House", cuisine: "South Asian", specialty: "Biryani & Curries" },
  { name: "Sweet Delights", cuisine: "Desserts", specialty: "Baklava & Kunafa" },
  { name: "Falafel King", cuisine: "Mediterranean", specialty: "Falafel & Hummus" },
];

const bazaarCategories = [
  { name: "Traditional Clothing", description: "Abayas, thobes, hijabs, and cultural attire" },
  { name: "Handcrafted Jewelry", description: "Unique pieces from local artisans" },
  { name: "Islamic Art & Decor", description: "Calligraphy, wall art, and home decor" },
  { name: "Books & Media", description: "Islamic literature and educational materials" },
  { name: "Fragrances & Oils", description: "Attar, oud, and traditional perfumes" },
  { name: "Kids Corner", description: "Islamic toys, games, and children's books" },
];

const Vendors = () => {
  return (
    <>
      <Helmet>
        <title>Vendors | SoCal Suhoor Fest 2026</title>
        <meta
          name="description"
          content="Explore 50+ halal food vendors and bazaar stalls at SoCal Suhoor Fest. From global cuisines to handcrafted goods, discover what awaits you."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  Our Vendors
                </span>
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                <span className="text-gradient-gold">Taste</span> & <span className="text-gradient-gold">Shop</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From mouthwatering halal cuisines to unique handcrafted treasures, 
                our vendors bring the best of the community together.
              </p>
            </div>
          </section>

          {/* Food Vendors Section */}
          <section className="py-16 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                  <Utensils className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    Food <span className="text-gradient-gold">Vendors</span>
                  </h2>
                  <p className="text-muted-foreground">50+ halal vendors from around the world</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {foodVendors.map((vendor, index) => (
                  <div
                    key={vendor.name}
                    className="group p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <ChefHat className="w-5 h-5 text-primary" />
                      <span className="text-xs uppercase tracking-wider text-primary font-medium">
                        {vendor.cuisine}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {vendor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{vendor.specialty}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-muted-foreground mb-4">
                  And many more vendors to be announced...
                </p>
              </div>
            </div>
          </section>

          {/* Bazaar Section */}
          <section className="py-16 bg-gradient-to-b from-transparent via-secondary/30 to-transparent relative">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    The <span className="text-gradient-gold">Bazaar</span>
                  </h2>
                  <p className="text-muted-foreground">Unique finds & handcrafted treasures</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bazaarCategories.map((category, index) => (
                  <div
                    key={category.name}
                    className="group p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Become a Vendor CTA */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-card/80 backdrop-blur-sm rounded-3xl border border-primary/20 p-10 md:p-14">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Want to be a <span className="text-gradient-gold">Vendor</span>?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join SoCal's biggest Ramadan festival! We're looking for halal food vendors, 
                  artisans, and businesses to be part of Suhoor Fest 2026.
                </p>
                <Button variant="hero" size="xl">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground mt-6">
                  Applications open soon. Get notified when we start accepting vendors.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Vendors;
