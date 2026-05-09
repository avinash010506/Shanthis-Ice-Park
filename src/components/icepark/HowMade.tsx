import { Flame, Leaf, ChefHat, Truck } from "lucide-react";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced produce, dairy and meats — delivered daily to our kitchen." },
  { icon: ChefHat, title: "Crafted by Chefs", desc: "Recipes built and tested by professionals who genuinely love food." },
  { icon: Flame, title: "Wood-Fired Kitchen", desc: "Authentic high-heat cooking gives every pizza and grill its signature char." },
  { icon: Truck, title: "Hot & Fast Delivery", desc: "Avg. 30-minute delivery across Brodipet via Swiggy, Zomato & in-house team." },
];

export const HowMade = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43_74%_49%/0.08),transparent_60%)]" />
      <div className="container-px mx-auto max-w-[1300px] relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow left">Why Ice Park</p>
            <h2 className="font-display text-4xl md:text-6xl mt-5">
              Real food. Real flavour. <br />
              <span className="italic text-primary">No shortcuts.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed">
            Every plate that leaves our kitchen carries the same standard — the freshest
            ingredients, classic technique, and a passion for getting it right.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-card p-8 md:p-10 hover:bg-secondary/50 transition-smooth group relative"
            >
              <div className="absolute top-6 right-6 font-display text-foreground/15 text-2xl">
                0{i + 1}
              </div>
              <div className="h-14 w-14 rounded-full border border-primary/40 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <f.icon size={24} />
              </div>
              <h4 className="font-display text-2xl mt-6 text-foreground">{f.title}</h4>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
