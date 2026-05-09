import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const links = [
  { href: "/#home", label: "Home", isHash: true },
  { href: "/#about", label: "About", isHash: true },
  { href: "/menu", label: "Menu", isHash: false },
  { href: "/#why", label: "Why Us", isHash: true },
  { href: "/#contact", label: "Contact", isHash: true },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-soft py-3 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container-px mx-auto flex items-center justify-between max-w-[1400px]">
        <Link to="/#home" className="flex items-center">
          <img src={logoImg} alt="Ice Park Logo" className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-md" />
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              {l.isHash ? (
                <a
                  href={l.href}
                  className={`text-sm font-medium uppercase tracking-[0.18em] transition-smooth relative group ${
                    location.hash === l.href.replace("/", "") || (location.pathname === "/" && l.href === "/#home" && !location.hash)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link
                  to={l.href}
                  className={`text-sm font-medium uppercase tracking-[0.18em] transition-smooth relative group ${
                    location.pathname === l.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        <a
          href="https://www.swiggy.com/menu/960020?source=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wide text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
        >
          <Phone size={15} /> Order Now
        </a>

        <button
          className="lg:hidden p-2 rounded-full bg-ink text-ink-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background mx-4 mt-3 rounded-xl p-4 shadow-elevate border border-border animate-fade-up">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                {l.isHash ? (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 rounded-lg hover:bg-secondary font-medium uppercase text-sm tracking-wider"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 rounded-lg hover:bg-secondary font-medium uppercase text-sm tracking-wider"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
            <a
              href="https://www.swiggy.com/menu/960020?source=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-center mt-4 px-5 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-soft"
            >
              Order Now
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
