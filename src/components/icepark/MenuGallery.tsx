import burger from "@/assets/cat-burger.jpg";
import pizza from "@/assets/cat-pizza.jpg";
import iceImg from "@/assets/cat-icecream.jpg";
import shakeImg from "@/assets/cat-shake.jpg";
import dessertImg from "@/assets/menu-dessert.jpg";
import waffleImg from "@/assets/menu-waffle.jpg";
import faloodaImg from "@/assets/menu-falooda.jpg";
import { Link } from "react-router-dom";

const MenuItem = ({ img, title }: { img: string; title: string }) => (
  <div className="relative rounded-[2rem] overflow-hidden group shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-card border border-border/50 aspect-[4/3] md:aspect-auto md:min-h-[250px]">
    <img 
      src={img} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
      loading="lazy"
    />
    {/* Always show overlay on mobile, hover on desktop */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-center text-center opacity-100 translate-y-0 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
      <h3 className="text-white font-display text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg">
        {title}
      </h3>
      <div className="w-10 h-1 bg-primary mt-3 md:mt-4 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
    </div>
  </div>
);

export const MenuGallery = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-px mx-auto max-w-[1400px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-fade-up">
          <p className="eyebrow justify-center mb-4">Curated Selections</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            A Feast for the <span className="italic text-primary drop-shadow-sm">Senses</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
            Experience the art of flavor. Every dish is a masterpiece crafted to bring joy, from the first bite to the last.
          </p>
        </div>

        {/* Premium Staggered Column Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-start">
          
          {/* Column 1 - Pushed down slightly */}
          <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/3 md:mt-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <MenuItem img={dessertImg} title="Signature Desserts" />
            <MenuItem img={pizza} title="Wood-Fired Pizza" />
          </div>

          {/* Column 2 - Highest */}
          <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <MenuItem img={iceImg} title="Premium Scoops" />
            <MenuItem img={burger} title="Craft Burgers" />
            <MenuItem img={shakeImg} title="Thick Shakes" />
          </div>

          {/* Column 3 - Pushed down significantly */}
          <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/3 md:mt-32 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <MenuItem img={waffleImg} title="Belgian Waffles" />
            <MenuItem img={faloodaImg} title="Royal Falooda" />
          </div>

        </div>

        <div className="mt-20 flex justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Link 
            to="/menu" 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary-glow transition-all hover:-translate-y-1 hover:shadow-glow group"
          >
            Explore Full Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
