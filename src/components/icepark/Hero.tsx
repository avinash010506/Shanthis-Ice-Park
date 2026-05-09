import hero from "@/assets/hero-spread.jpg";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink pt-28"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Ice Park signature dishes"
          className="h-full w-full object-cover opacity-55"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="container-px mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-10 items-center relative z-10">
        <div className="lg:col-span-7 animate-fade-up text-ink-foreground">
          <p className="eyebrow left">Brodipet · Guntur · Est. 2018</p>

          <h1 className="font-display text-[clamp(2.75rem,7vw,5.75rem)] mt-5 leading-[1.02]">
            A taste of <span className="text-gradient-gold italic">everything</span><br />
            you crave.
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-ink-foreground/75 leading-relaxed">
            Wood-fired pizzas, juicy burgers, hand-churned ice creams and signature
            shakes — all under one roof. Crafted fresh, served fast, made to remember.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-wide shadow-glow hover:scale-[1.03] transition-smooth"
            >
              Explore Menu
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.swiggy.com/menu/960020?source=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-foreground/20 text-ink-foreground text-sm font-medium tracking-wide hover:bg-ink-foreground hover:text-ink transition-smooth"
            >
              Order Online
            </a>
          </div>

          {/* Rating row */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-ink-foreground/80">
            <div>
              <div className="flex gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="mt-1.5 text-xs uppercase tracking-widest">4.6 · 2,400+ Reviews</p>
            </div>
            <div className="h-10 w-px bg-ink-foreground/15" />
            <div>
              <div className="font-display text-2xl">120+</div>
              <p className="text-xs uppercase tracking-widest">Dishes on menu</p>
            </div>
            <div className="h-10 w-px bg-ink-foreground/15 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-2xl">30 min</div>
              <p className="text-xs uppercase tracking-widest">Avg. delivery</p>
            </div>
          </div>
        </div>

        {/* Floating chef-pick card */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="ml-auto w-fit animate-float">
            <div className="bg-background/95 backdrop-blur rounded-2xl p-6 shadow-elevate max-w-xs">
              <p className="eyebrow left text-xs">Chef's Pick</p>
              <h3 className="font-display text-2xl mt-3">Today's Signature</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Authentic Chicken Biryani with aromatic spices & tender meat.
              </p>
              <div className="mt-4 flex items-center justify-end">
                <a href="#menu" className="text-xs uppercase font-semibold tracking-widest text-foreground hover:text-primary inline-flex items-center gap-1">
                  Order <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-ink-foreground/10 bg-ink/60 backdrop-blur py-4 overflow-hidden z-10">
        <div className="flex animate-marquee whitespace-nowrap text-ink-foreground/70 font-display text-xl md:text-2xl gap-12">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 shrink-0">
              {["Wood-Fired Pizza", "Gourmet Burgers", "Italian Pasta", "Fresh Ice Cream", "Thick Shakes", "Decadent Desserts", "Crispy Snacks"].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
