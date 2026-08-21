import { useState } from "react";
import { HOTEL, waLink } from "@/lib/hotel";

export function BookingForm({ defaultRoom = "" }: { defaultRoom?: string }) {
  const [form, setForm] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
    requirement: defaultRoom,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Booking enquiry for ${HOTEL.name}, Panipat`,
      `Guest Name: ${form.name || "-"}`,
      `Check-in: ${form.checkIn || "-"}`,
      `Check-out: ${form.checkOut || "-"}`,
      `Guests: ${form.guests}`,
      `Room / Requirement: ${form.requirement || "-"}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener");
  };

  const field =
    "w-full bg-secondary px-4 py-3 text-sm text-foreground outline-none ring-1 ring-border transition-shadow focus:ring-primary";
  const label = "eyebrow mb-3 block text-muted-foreground";

  return (
    <form onSubmit={submit} className="grid gap-6 md:grid-cols-2">
      <div>
        <label className={label} htmlFor="name">Guest Name</label>
        <input
          id="name"
          required
          className={field}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className={label} htmlFor="guests">Guests</label>
        <select
          id="guests"
          className={field}
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
        >
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4+ Guests</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="checkin">Check-in</label>
        <input
          id="checkin"
          type="date"
          className={field}
          value={form.checkIn}
          onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
        />
      </div>
      <div>
        <label className={label} htmlFor="checkout">Check-out</label>
        <input
          id="checkout"
          type="date"
          className={field}
          value={form.checkOut}
          onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
        />
      </div>
      <div className="md:col-span-2">
        <label className={label} htmlFor="requirement">Room / Requirement</label>
        <textarea
          id="requirement"
          rows={3}
          className={field}
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          placeholder="e.g. Deluxe AC Suite, early check-in, extra bed"
        />
      </div>
      <button
        type="submit"
        className="bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-foreground md:col-span-2"
      >
        Send Booking on WhatsApp
      </button>
    </form>
  );
}
