import ice from "@/assets/menu-icecream.jpg";
import shake from "@/assets/menu-milkshake.jpg";
import dessert from "@/assets/menu-dessert.jpg";
import burger from "@/assets/menu-fastfood.jpg";
import pizza from "@/assets/menu-pizza.jpg";
import waffle from "@/assets/menu-waffle.jpg";
import falooda from "@/assets/menu-falooda.jpg";
import interior from "@/assets/gallery-interior.jpg";

const images = [
  { src: ice, span: "row-span-2" },
  { src: interior, span: "" },
  { src: shake, span: "" },
  { src: burger, span: "row-span-2" },
  { src: pizza, span: "" },
  { src: waffle, span: "" },
  { src: dessert, span: "" },
  { src: falooda, span: "" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 gradient-cool">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Gallery</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">
            A taste of the <span className="text-gradient">Ice Park</span> vibe
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} rounded-2xl overflow-hidden shadow-card group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={`Ice Park gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
