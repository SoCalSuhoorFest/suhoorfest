import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the festival dates and hours?",
    answer: "The SoCal Suhoor Festival runs for 3 nights: February 20, February 27, and March 6, 2026. Each night runs from 10:00 PM to 4:00 AM.",
  },
  {
    question: "Is this event family-friendly?",
    answer: "Absolutely! This is a family-friendly event welcoming all ages. There's something for everyone – from kids enjoying treats to adults shopping and socializing.",
  },
  {
    question: "Is this a religious event?",
    answer: "While the festival is held during Ramadan and celebrates the spirit of suhoor (the pre-dawn meal), it's a community festival open to everyone regardless of religious background.",
  },
  {
    question: "Will there be parking?",
    answer: "Yes, parking is available at Santa Ana Stadium. We recommend arriving early as spaces fill up quickly.",
  },
  {
    question: "Will there be restrooms available?",
    answer: "Yes, restrooms will be available throughout the venue.",
  },
  {
    question: "Are tickets sold at the door?",
    answer: "We strongly recommend purchasing tickets online in advance. Door tickets may be available but are subject to capacity.",
  },
  {
    question: "What kind of vendors will be there?",
    answer: "We have 40+ food vendors offering diverse cuisines including pizzas, tacos, shawarma, boba, desserts, and much more. Plus 30+ bazaar vendors with clothing, accessories, art, fragrances, and local small businesses.",
  },
  {
    question: "Are pets allowed?",
    answer: "For safety and comfort of all attendees, only service animals are permitted.",
  },
  {
    question: "Will there be seating available?",
    answer: "Limited seating is available. We recommend bringing blankets or portable chairs for your comfort.",
  },
  {
    question: "Do kids need tickets?",
    answer: "Children under 5 years old enter free. All others require a ticket.",
  },
  {
    question: "Where do ticket proceeds go?",
    answer: "A portion of all ticket sales is donated to our charity partners to support community causes.",
  },
  {
    question: "Do I need a ticket for each night?",
    answer: "Yes, unless you purchase the 3-Day Pass which grants entry to all 3 nights. Single night tickets are valid for one night only.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              FAQ
            </span>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/60 border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;