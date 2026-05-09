import { MapPin, Phone, Clock, Mail } from "lucide-react";

const PHONE = "+918125281259";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow justify-center">Visit us</p>
          <h2 className="font-display text-4xl md:text-6xl mt-5">
            Find your seat at <span className="italic text-primary">Ice Park.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Info + form */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: MapPin, title: "Address", desc: "Brodipet, Guntur, Andhra Pradesh — 522002" },
              { icon: Phone, title: "Reservations", desc: PHONE, link: `tel:${PHONE}` },
            ].map((c) => (
              <a
                key={c.title}
                href={c.link || "#"}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-smooth"
              >
                <div className="h-11 w-11 rounded-full gradient-gold text-primary-foreground grid place-items-center shrink-0 shadow-soft">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">{c.title}</div>
                  <div className="font-medium text-foreground mt-1">{c.desc}</div>
                </div>
              </a>
            ))}


          </div>

          {/* Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-elevate min-h-[350px] border border-border">
            <iframe
              title="Ice Park location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.394906346886!2d80.4349373!3d16.302754099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7542f884b8ed%3A0xfa21ecc07a68bc3!2sIce%20Park!5e0!3m2!1sen!2sin!4v1778324768885!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
