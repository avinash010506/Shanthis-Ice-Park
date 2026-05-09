import girl from "@/assets/banner-girl.png";

interface PageBannerProps {
  id?: string;
  title: string;
  highlight?: string;
}

/** BeIcecream-style pink banner with splashes + smiling girl photo */
export const PageBanner = ({ id, title, highlight }: PageBannerProps) => {
  return (
    <section id={id} className="relative gradient-pink overflow-hidden">
      <div className="absolute inset-0 bg-splashes opacity-90 pointer-events-none" />
      <div className="container-px mx-auto max-w-[1400px] grid md:grid-cols-2 items-center min-h-[420px] py-20 relative z-10">
        <h2 className="font-display text-white uppercase text-[clamp(2.5rem,6vw,5rem)] drop-shadow-[0_4px_0_rgba(0,0,0,0.08)]">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-primary">{highlight}</span>
            </>
          )}
        </h2>
        <div className="hidden md:flex justify-end">
          <img src={girl} alt="" loading="lazy" className="max-h-[420px] w-auto object-contain" />
        </div>
      </div>
    </section>
  );
};
