import { Link } from "@tanstack/react-router";
import { HOTEL, telLink, waLink } from "@/lib/hotel";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-16 md:grid-cols-3">
          <div>
            <div className="mb-6 font-serif text-3xl">Silver Star</div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Premium hospitality and clean, comfortable rooms in the heart of Panipat —
              minutes from the Old Bus Stand and Panipat Junction.
            </p>
          </div>
          <div>
            <h2 className="eyebrow mb-8 text-primary">Reservations</h2>
            <div className="space-y-4">
              <a href={telLink} className="block text-xl font-light hover:text-primary">
                {HOTEL.phone}
              </a>
              <p className="text-sm italic text-muted-foreground">
                Available 24/7 via Call or WhatsApp
              </p>
              <a
                href={waLink(`Hello ${HOTEL.name}, I'd like to book a room.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-primary px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h2 className="eyebrow mb-8 text-primary">Explore</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/rooms" className="hover:text-foreground">Rooms &amp; Tariff</Link></li>
              <li><Link to="/amenities" className="hover:text-foreground">Amenities</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
              <li><Link to="/location" className="hover:text-foreground">Location</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact &amp; Booking</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-12 text-[10px] uppercase tracking-widest text-muted-foreground">
          <p className="mb-3 normal-case tracking-normal text-sm">{HOTEL.address}</p>
          <p>© {new Date().getFullYear()} {HOTEL.name}, Panipat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
