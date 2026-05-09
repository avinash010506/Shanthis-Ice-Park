import { MapPin, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

export const Footer = () => (
  <footer className="bg-ink text-ink-foreground pt-20 pb-8">
    <div className="container-px mx-auto max-w-[1400px] grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="flex items-center">
          <img src={logoImg} alt="Ice Park Logo" className="h-14 md:h-16 w-auto object-contain drop-shadow-md" />
        </div>
        <p className="mt-5 text-ink-foreground/65 max-w-sm leading-relaxed">
          Multi-cuisine restaurant in Brodipet, Guntur. Pizza, burgers, shakes,
          desserts and ice creams — crafted fresh, every day.
        </p>

      </div>

      <div className="md:col-span-2">
        <h4 className="font-display text-lg mb-5">Explore</h4>
        <ul className="space-y-2.5 text-sm text-ink-foreground/70">
          <li><a href="#about" className="hover:text-primary transition-smooth">About</a></li>
          <li><a href="#menu" className="hover:text-primary transition-smooth">Menu</a></li>
          <li><a href="#why" className="hover:text-primary transition-smooth">Why Us</a></li>
          <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h4 className="font-display text-lg mb-5">Order</h4>
        <ul className="space-y-2.5 text-sm text-ink-foreground/70">
          <li><a href="https://www.swiggy.com/menu/960020?source=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">Swiggy</a></li>
          <li><a href="https://zomato.onelink.me/xqzv/advfnuhd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">Zomato</a></li>
          <li><a href="https://wa.me/918125281259" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">WhatsApp</a></li>
        </ul>
      </div>

      <div className="md:col-span-3">
        <h4 className="font-display text-lg mb-5">Visit</h4>
        <p className="flex items-start gap-2 text-sm text-ink-foreground/70">
          <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
          Brodipet, Guntur, AP — 522002
        </p>
        <p className="flex items-center gap-2 text-sm text-ink-foreground/70 mt-3">
          <Phone size={16} className="text-primary shrink-0" />
          +91 81252 81259
        </p>
      </div>
    </div>

    <div className="container-px mx-auto max-w-[1400px] mt-14 pt-6 border-t border-ink-foreground/10 text-xs text-ink-foreground/50 flex flex-col md:flex-row items-center justify-between gap-2">
      <p>© {new Date().getFullYear()} Ice Park Restaurant. All rights reserved.</p>
      <p>Crafted with care in Guntur.</p>
    </div>
  </footer>
);
