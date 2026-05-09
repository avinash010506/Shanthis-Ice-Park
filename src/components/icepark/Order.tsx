import { ArrowUpRight, Phone } from "lucide-react";

const partners = [
  { name: "Swiggy", desc: "Fast delivery in 30 mins", url: "https://www.swiggy.com/menu/960020?source=sharing", emoji: "🛵", accent: "hover:border-primary/50" },
  { name: "Zomato", desc: "Exclusive deals & combos", url: "https://zomato.onelink.me/xqzv/advfnuhd", emoji: "🍽️", accent: "hover:border-primary/50" },
  { name: "WhatsApp", desc: "Direct order, instant chat", url: "https://wa.me/918125281259", emoji: "💬", accent: "hover:border-primary/50" },
];

export const Order = () => (
  <section id="order" className="py-16 md:py-20 bg-background">
    <div className="container-px mx-auto max-w-[1300px]">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow justify-center">Order online</p>
        <h2 className="font-display text-4xl md:text-6xl mt-5">
          Hungry? <span className="italic text-primary">We deliver.</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Choose your favourite platform — your meal is on its way.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative bg-card rounded-2xl p-7 flex flex-col justify-between border border-border ${p.accent} hover:-translate-y-1.5 hover:shadow-elevate transition-all duration-500`}
          >
            <div>
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-foreground group-hover:text-primary transition-smooth">
                Order Now
              </span>
              <span className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:rotate-45 transition-smooth">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <span className="text-muted-foreground">Prefer to call?</span>
        <a
          href="tel:+918125281259"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-ink-foreground text-sm font-medium hover:bg-primary transition-smooth"
        >
          <Phone size={16} /> +91 81252 81259
        </a>
      </div>
    </div>
  </section>
);
