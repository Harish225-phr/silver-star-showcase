import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HOTEL, waLink } from "@/lib/hotel";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full glass-panel">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center border border-primary font-serif text-xl text-primary">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-tight">{HOTEL.name}</span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.4em] text-muted-foreground">
              {HOTEL.city}
            </span>
          </span>
        </Link>

        <nav className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.2em] lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink(`Hello ${HOTEL.name}, I would like to enquire about a room.`)}
            target="_blank"
            rel="noreferrer"
            className="hidden bg-primary px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-foreground sm:inline-block"
          >
            Enquire Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5 text-xs uppercase tracking-[0.2em]">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
