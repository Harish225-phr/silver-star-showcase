import { HOTEL, waLink } from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";

export type Room = {
  name: string;
  price: string;
  meta: string;
  image: string;
  badge: string | null;
  details: string[];
};

export function RoomCard({ room, delay = 0 }: { room: Room; delay?: number }) {
  return (
    <Reveal delay={delay} className="group flex flex-col">
      <div className="relative mb-6 aspect-3/4 overflow-hidden bg-card">
        <img
          src={room.image}
          alt={`${room.name} at ${HOTEL.name}, Panipat`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {room.badge && (
          <span className="absolute left-6 top-6 border border-border bg-background/50 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">
            {room.badge}
          </span>
        )}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="mb-1 font-serif text-2xl">{room.name}</h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{room.meta}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-primary">{room.price}</p>
          <p className="text-[9px] uppercase text-muted-foreground">per night</p>
        </div>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        {room.details.map((d) => (
          <li key={d} className="flex gap-3">
            <span className="text-primary">✓</span>
            {d}
          </li>
        ))}
      </ul>
      <a
        href={waLink(`Hello ${HOTEL.name}, I'd like to book the ${room.name} (${room.price}/night).`)}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex justify-center border border-border py-4 text-[10px] font-bold uppercase tracking-widest transition-all group-hover:bg-primary group-hover:text-primary-foreground"
      >
        Book on WhatsApp
      </a>
    </Reveal>
  );
}
