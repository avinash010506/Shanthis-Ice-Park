import { Navbar } from "@/components/icepark/Navbar";
import { Hero } from "@/components/icepark/Hero";
import { About } from "@/components/icepark/About";
import { MenuGallery } from "@/components/icepark/MenuGallery";
import { HowMade } from "@/components/icepark/HowMade";
import { Order } from "@/components/icepark/Order";
import { Contact } from "@/components/icepark/Contact";
import { Footer } from "@/components/icepark/Footer";
import { ScrollReveal } from "@/components/icepark/ScrollReveal";

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Ice Park Restaurant — Pizza, Burgers, Shakes & Ice Cream | Brodipet, Guntur";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Ice Park — premium multi-cuisine restaurant in Brodipet, Guntur. Wood-fired pizza, gourmet burgers, thick shakes, ice creams & desserts. Order via Swiggy, Zomato or WhatsApp."
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <MenuGallery />
      </ScrollReveal>
      <ScrollReveal>
        <HowMade />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Order />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default Index;
