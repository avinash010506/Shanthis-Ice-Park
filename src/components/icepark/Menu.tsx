import { useState } from "react";
import iceImg from "@/assets/menu-icecream.jpg";
import shakeImg from "@/assets/menu-milkshake.jpg";
import dessertImg from "@/assets/menu-dessert.jpg";
import burgerImg from "@/assets/menu-fastfood.jpg";
import pizzaImg from "@/assets/menu-pizza.jpg";
import faloodaImg from "@/assets/menu-falooda.jpg";
import waffleImg from "@/assets/menu-waffle.jpg";

type Item = { name: string; price: number; img: string; tag?: string };
type Category = "Ice Creams" | "Milkshakes" | "Desserts" | "Fast Food";

const data: Record<Category, Item[]> = {
  "Ice Creams": [
    { name: "Triple Scoop Delight", price: 180, img: iceImg, tag: "Bestseller" },
    { name: "Belgian Chocolate", price: 140, img: dessertImg },
    { name: "Royal Falooda", price: 160, img: faloodaImg, tag: "New" },
  ],
  Milkshakes: [
    { name: "Classic Vanilla Shake", price: 150, img: shakeImg },
    { name: "Strawberry Cream", price: 170, img: shakeImg, tag: "Popular" },
    { name: "Oreo Thickshake", price: 190, img: shakeImg },
  ],
  Desserts: [
    { name: "Brownie Sundae", price: 220, img: dessertImg, tag: "Chef's Pick" },
    { name: "Belgian Waffle", price: 200, img: waffleImg },
    { name: "Royal Falooda", price: 160, img: faloodaImg },
  ],
  "Fast Food": [
    { name: "Double Cheese Burger", price: 180, img: burgerImg, tag: "Hot" },
    { name: "Margherita Pizza", price: 250, img: pizzaImg },
    { name: "Loaded Fries", price: 120, img: burgerImg },
  ],
};

const categories = Object.keys(data) as Category[];

export const Menu = () => {
  const [active, setActive] = useState<Category>("Ice Creams");

  return (
    <section id="menu" className="py-24 relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Menu</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">
            Crafted with <span className="text-gradient">Love</span>, served with chill.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From silky scoops to sizzling fast food — every bite is made fresh, in-house, every day.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full font-medium transition-smooth ${
                active === cat
                  ? "gradient-hero text-primary-foreground shadow-soft scale-105"
                  : "glass hover:bg-white text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data[active].map((item, i) => (
            <article
              key={item.name + i}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                {item.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full gradient-warm text-accent-foreground text-xs font-bold shadow-soft">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{active}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gradient">₹{item.price}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
