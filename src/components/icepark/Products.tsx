import { useState } from "react";
import burger from "@/assets/cat-burger.jpg";
import pizza from "@/assets/cat-pizza.jpg";
import iceImg from "@/assets/cat-icecream.jpg";
import shakeImg from "@/assets/cat-shake.jpg";
import dessertImg from "@/assets/menu-dessert.jpg";
import waffleImg from "@/assets/menu-waffle.jpg";
import faloodaImg from "@/assets/menu-falooda.jpg";
import fastfoodImg from "@/assets/menu-fastfood.jpg";

type Item = { name: string; price: number; img: string; cat: string; desc: string; tag?: string };
const items: Item[] = [
  { name: "Classic Cheese Burger", price: 180, img: burger, cat: "Burgers", desc: "Hand-pressed patty, cheddar, fresh veggies", tag: "Bestseller" },
  { name: "Margherita Pizza", price: 250, img: pizza, cat: "Pizza", desc: "Wood-fired, San Marzano tomato, basil", tag: "Chef's Pick" },
  { name: "Loaded Sundae", price: 220, img: iceImg, cat: "Ice Cream", desc: "Triple scoop with chocolate & sprinkles" },
  { name: "Oreo Thick Shake", price: 170, img: shakeImg, cat: "Shakes", desc: "Whipped cream, oreo crumble, caramel drip", tag: "New" },
  { name: "Brownie Sizzler", price: 220, img: dessertImg, cat: "Desserts", desc: "Warm brownie, vanilla ice cream, hot fudge" },
  { name: "Belgian Waffle", price: 200, img: waffleImg, cat: "Desserts", desc: "Crisp waffle, nutella, fresh fruit" },
  { name: "Royal Falooda", price: 160, img: faloodaImg, cat: "Ice Cream", desc: "Rose syrup, vermicelli, ice cream, nuts" },
  { name: "Crispy Loaded Fries", price: 140, img: fastfoodImg, cat: "Snacks", desc: "Cheese, jalapeños, herbs, peri-peri" },
];

const cats = ["All", "Pizza", "Burgers", "Shakes", "Ice Cream", "Desserts", "Snacks"];

export const Products = () => {
  const [active, setActive] = useState("All");
  const list = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Our menu</p>
          <h2 className="font-display text-4xl md:text-6xl mt-5">
            Crafted with care, <span className="italic text-primary">served with pride.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From sizzling mains to sweet finishers — explore the dishes guests come back for.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-[0.15em] transition-smooth border ${
                active === c
                  ? "bg-ink text-ink-foreground border-ink shadow-soft"
                  : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-14">
          {list.map((p, i) => (
            <article
              key={p.name + i}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevate hover:-translate-y-1.5 transition-smooth border border-border"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                {p.tag && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full">
                    {p.tag}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 bg-background/95 backdrop-blur font-display text-lg px-4 py-1.5 rounded-full text-foreground shadow-soft">
                  ₹{p.price}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">{p.cat}</p>
                <h4 className="font-display text-xl mt-2 group-hover:text-primary transition-smooth">{p.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#order"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-ink-foreground text-sm font-medium tracking-wide hover:bg-primary transition-smooth"
          >
            View Full Menu & Order →
          </a>
        </div>
      </div>
    </section>
  );
};
