import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Wifi, ConciergeBell, Sparkles, MapPin } from "lucide-react";
import { HOTEL, IMAGES, ROOMS, telLink, waLink } from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";
import { RoomCard } from "@/components/RoomCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Silver Star Panipat | Hotel Near Panipat Bus Stand" },
      {
        name: "description",
        content:
          "Hotel Silver Star Panipat — budget hotel near Old Bus Stand & Panipat Junction. AC and Non-AC rooms from ₹818/night, rated 4.8/5. Book instantly on WhatsApp.",
      },
      { property: "og:title", content: "Hotel Silver Star Panipat | Rooms from ₹818" },
      {
        property: "og:description",
        content:
          "Clean, comfortable AC & Non-AC rooms near Panipat Old Bus Stand and Prem Hospital. Rated 4.8/5. Book on WhatsApp.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <>
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden">
        <motion.div style={{ y, opacity: fade }} className="absolute inset-0 z-0">
          <img
            src={IMAGES.entrance}
            alt="Illuminated entrance of Hotel Silver Star on Old Bus Stand Road, Panipat"
            className="size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-primary"
            >
              <Star className="size-3 fill-current" /> {HOTEL.rating} Guest Rating
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
              className="mb-8 font-serif text-6xl leading-[0.95] md:text-8xl"
            >
              Modernity
              <br />
              <span className="font-light italic text-muted-foreground">Meets Tradition</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mb-12 max-w-xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
            >
              A sanctuary of premium comfort beside Panipat's Old Bus Stand. Clean AC &amp;
              Non-AC rooms starting at {HOTEL.startingPrice} per night.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <a
                href={waLink(`Hello ${HOTEL.name}, I'd like to book a room.`)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 bg-foreground px-8 py-5 text-xs font-bold uppercase tracking-widest text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Book Your Stay
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={telLink}
                className="flex items-center gap-4 border border-border px-8 py-5 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-secondary"
              >
                Call {HOTEL.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-20 flex flex-col items-baseline justify-between md:flex-row">
          <Reveal>
            <h2 className="mb-4 font-serif text-5xl md:text-6xl">Signature Rooms</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              Refined Living Spaces
            </p>
          </Reveal>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.name} room={room} delay={i * 0.1} />
          ))}
        </div>
        <Reveal className="mt-16 text-center" delay={0.1}>
          <Link
            to="/rooms"
            className="inline-block border border-primary px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View all rooms &amp; tariff
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal className="grid grid-cols-2 gap-px bg-border">
            {[
              { icon: ConciergeBell, title: "24/7 Room Service", copy: "Hot home-style meals and refreshments delivered to your door." },
              { icon: Wifi, title: "High-Speed Wi-Fi", copy: "Stay connected across all floors with free internet." },
              { icon: Sparkles, title: "Spotless Rooms", copy: "Daily housekeeping with fresh linen and sanitised bathrooms." },
              { icon: MapPin, title: "Central Location", copy: "Walking distance from Old Bus Stand and Prem Hospital." },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="bg-card p-8 md:p-10">
                <Icon className="mb-5 size-6 text-primary" />
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow mb-6 text-primary">Everything you need</p>
            <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">
              Uncompromised hospitality standards.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              At {HOTEL.name} we redefine budget luxury in Panipat. Every room is meticulously
              cleaned and equipped with air conditioning, power backup and round-the-clock
              security — ideal for business travellers, families and hospital visitors.
            </p>
            <Link
              to="/amenities"
              className="inline-block border-b border-primary pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary"
            >
              Explore amenities
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6">
            <Reveal className="col-span-12 lg:col-span-7">
              <div className="h-[420px] overflow-hidden lg:h-[600px]">
                <img
                  src={IMAGES.roomWood}
                  alt="Deluxe room with wood panelling and gold accents at Hotel Silver Star, Panipat"
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </Reveal>
            <div className="col-span-12 grid gap-6 lg:col-span-5 lg:grid-rows-2">
              <Reveal delay={0.1}>
                <div className="h-[240px] overflow-hidden lg:h-full">
                  <img
                    src={IMAGES.stairs}
                    alt="Marble staircase with LED lighting inside Hotel Silver Star"
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex h-full flex-col justify-center bg-primary p-10 text-primary-foreground md:p-12">
                  <h2 className="mb-4 font-serif text-3xl">The Silver Standard</h2>
                  <p className="mb-8 text-sm leading-relaxed opacity-90">
                    Established in Bishon Sarup Colony, we're a trusted stay for business
                    travellers, families and visitors to Prem Hospital.
                  </p>
                  <Link to="/about" className="w-fit border-b border-current pb-1 text-xs font-bold uppercase tracking-[0.2em]">
                    Read our story
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
