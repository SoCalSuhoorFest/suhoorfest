import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the festival dates and hours?",
    answer: "The festival takes place on February 20, February 27, and March 6, from 10PM-4AM each night.",
  },
  {
    question: "Is this event family-friendly?",
    answer: "Yes! The festival is open to all ages. Families, kids, and groups are all welcome.",
  },
  {
    question: "Is this a religious event?",
    answer: "No. While the timing aligns with the Ramadan season, the festival is a cultural night market experience open to everyone, regardless of background or belief. It's an opportunity for the community to gather and find a safe space to fulfill any cravings or do some shopping.",
  },
  {
    question: "Will there be parking?",
    answer: "Yes, there will be on-site or nearby parking. Details will be posted on our Instagram as we get closer to the event date.",
  },
  {
    question: "Will there be restrooms available?",
    answer: "Yes. The venue will have clean, accessible restrooms available throughout the festival.",
  },
  {
    question: "Are tickets sold at the door?",
    answer: "If capacity allows, limited tickets may be available at the door. We strongly recommend buying online to secure your spot.",
  },
  {
    question: "What kind of vendors will be there?",
    answer: "You'll find top food vendors, specialty drinks, desserts, and a bazaar with clothing, accessories, art, fragrances, gifts, and small businesses from all over SoCal. All meat served by participating food vendors will be halal.",
  },
  {
    question: "Are pets allowed?",
    answer: "Service animals are welcome. Other pets are prohibited.",
  },
  {
    question: "Will there be seating available?",
    answer: "Yes, there will be designated seating areas for attendees to relax and enjoy their food.",
  },
  {
    question: "Do kids need tickets?",
    answer: "Kids under 5 get in free. Anyone 5 and up will need a ticket for entry.",
  },
  {
    question: "Where do ticket proceeds go?",
    answer: "A portion of all ticket sales is donated to our partnered charities. Your attendance helps support community programs and local causes.",
  },
  {
    question: "Do I need a ticket for each night?",
    answer: "Yes. Tickets are sold per night, so attendees can choose one, two, or all three nights to attend.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-xs">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Common Questions
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/40 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5 text-sm tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
