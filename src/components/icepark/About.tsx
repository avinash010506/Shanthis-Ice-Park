import aboutBg from "@/assets/about-bg.jpg";
import { IceCream, Users, Leaf, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-px mx-auto max-w-[1300px] relative z-10">
        
        <div className="max-w-3xl mx-auto text-center animate-fade-up bg-background/50 backdrop-blur-md p-8 md:p-14 rounded-[2rem] border border-white/10 shadow-elevate">
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">About Us</h2>
          <h3 className="font-display text-3xl md:text-4xl mt-4 text-primary drop-shadow-md">
            Ice Park – A Treat<br />Beyond Ordinary
          </h3>
          <p className="mt-6 text-white/95 text-lg md:text-xl leading-relaxed font-medium">
            <strong className="text-primary font-bold">Ice Park</strong> is more than just an ice cream
            parlor – it's a place where happiness melts in every bite. From creamy
            scoops to delightful snacks, we bring together quality, taste, and a cozy
            ambience to create moments worth sharing.
          </p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-display text-3xl md:text-4xl text-primary italic drop-shadow-md">
              Good Food. Good Mood.<br />Every Time.
            </p>
          </div>
        </div>

        {/* Features Row */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border rounded-2xl bg-card/60 backdrop-blur-md overflow-hidden shadow-soft">
          {[
            { icon: IceCream, title: "Delicious Treats", desc: "A wide range of ice creams and snacks made to satisfy every craving." },
            { icon: Users, title: "Cozy Ambience", desc: "A comfortable space perfect for friends, family, and every special moment." },
            { icon: Leaf, title: "Quality You Trust", desc: "We use quality ingredients to serve you the best, every single time." },
            { icon: Heart, title: "Made with Love", desc: "Every scoop and every dish is prepared with passion and care." },
          ].map((feature) => (
            <div key={feature.title} className="p-6 md:p-8 flex items-start gap-4 hover:bg-white/5 transition-smooth">
              <div className="shrink-0 h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <feature.icon size={28} />
              </div>
              <div>
                <h4 className="font-display text-lg text-primary">{feature.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
