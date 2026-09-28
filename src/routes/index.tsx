import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroLisbon from "@/assets/hero-lisbon.jpg";
import stayHomestay from "@/assets/stay-homestay.jpg";
import stayViewHotel from "@/assets/stay-viewhotel.jpg";
import stayGuesthouse from "@/assets/stay-guesthouse.jpg";
import {
  destinations,
  styleLabels,
  type TravelStyle,
} from "@/lib/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wanderline — Plan the day, your way" },
      {
        name: "description",
        content:
          "A travel helper that plans your day around your style — most-visited landmarks, hidden gems, or local suggestions — with homestays, scenic-view hotels, and famous local foods.",
      },
      { property: "og:title", content: "Wanderline — Plan the day, your way" },
      {
        property: "og:description",
        content:
          "Preference-based day itineraries, homestays, scenic-view hotels, and famous local foods — one calm, walkable route at a time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stayImages = [stayHomestay, stayViewHotel, stayGuesthouse];

const styleColors: Record<TravelStyle, string> = {
  popular: "text-terra",
  hidden: "text-moss",
  local: "text-clay",
};

function Index() {
  const [destinationId, setDestinationId] = useState("lisbon");
  const [style, setStyle] = useState<TravelStyle>("popular");
  const [saved, setSaved] = useState(false);

  const destination = destinations.find((d) => d.id === destinationId)!;

  const route = useMemo(() => {
    const preferred = destination.stops.filter((s) => s.style === style);
    const others = destination.stops.filter((s) => s.style !== style);
    return [...preferred, ...others]
      .sort((a, b) => a.time.localeCompare(b.time))
      .slice(0, 4);
  }, [destination, style]);

  return (
    <div className="min-h-screen bg-background font-body antialiased">
      {/* Top bar */}
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-terra font-display text-lg font-semibold text-cream">
              W
            </div>
            <div className="leading-none">
              <p className="font-display text-lg font-semibold tracking-tight">
                Wanderline
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink/45">
                Plan the day, your way
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
            <a href="#plan" className="text-terra">
              Plan
            </a>
            <a href="#stay" className="transition-colors hover:text-ink">
              Stay
            </a>
            <a href="#eat" className="transition-colors hover:text-ink">
              Eat
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full bg-sand px-3 py-1.5 text-sm text-ink/70 sm:flex">
              <span className="size-2 rounded-full bg-moss" />
              {destination.city} · {destination.days}
            </div>
            <button
              onClick={() => setSaved((s) => !s)}
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-ink/85"
            >
              {saved ? "Saved ✓" : "Save trip"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero / planner */}
      <section id="plan" className="mx-auto max-w-6xl px-6 pb-6 pt-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-terra">
              Today · Your itinerary
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
              A day in{" "}
              <span className="italic text-terra">{destination.city}</span>,
              shaped around you.
            </h1>
            <p className="mt-4 max-w-md leading-relaxed text-ink/60">
              {destination.blurb}
            </p>

            {/* Destination picker */}
            <div className="mt-7">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/45">
                Where to?
              </p>
              <div className="flex flex-wrap gap-2">
                {destinations.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDestinationId(d.id)}
                    className={
                      d.id === destinationId
                        ? "rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream"
                        : "rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-sand"
                    }
                  >
                    {d.city}
                  </button>
                ))}
              </div>
            </div>

            {/* Preference selector */}
            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/45">
                How should we plan it?
              </p>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(styleLabels) as TravelStyle[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={
                      s === style
                        ? "rounded-full bg-terra px-4 py-2 text-sm font-semibold text-cream"
                        : "rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-sand"
                    }
                  >
                    {styleLabels[s]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-5">
            <img
              src={heroLisbon}
              alt="Golden hour over Lisbon rooftops and the river"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* Itinerary timeline */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Your route
          </h2>
          <span className="text-sm text-ink/50">
            {route.length} stops · {styleLabels[style]} route
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {route.map((stop) => (
            <div
              key={stop.title}
              className="rounded-2xl border border-ink/10 bg-card p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.15em] ${styleColors[stop.style]}`}
                >
                  {stop.time} · {styleLabels[stop.style]}
                </span>
                <span className="text-xs text-ink/40">{stop.duration}</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {stop.title}
              </h3>
              <p className="mt-1 text-sm text-ink/60">{stop.description}</p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-sand px-2.5 py-1 text-[11px] text-ink/70">
                  {stop.tag}
                </span>
                <span className="rounded-full bg-sand px-2.5 py-1 text-[11px] text-ink/70">
                  {stop.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stays */}
      <section id="stay" className="border-y border-ink/10 bg-sand/60">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Where you'll sleep
            </h2>
            <span className="text-sm text-ink/50">
              Home stays & view hotels
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {destination.stays.map((stay, i) => (
              <div
                key={stay.name}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-cream transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={stayImages[i % stayImages.length]}
                  alt={stay.name}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${
                        stay.kind === "homestay" ? "text-moss" : "text-terra"
                      }`}
                    >
                      {stay.kind === "homestay" ? "Home stay" : "View hotel"}
                    </span>
                    <span className="text-sm font-semibold">{stay.price}</span>
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {stay.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink/55">{stay.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Famous foods */}
      <section id="eat" className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Famous plates to try
          </h2>
          <span className="text-sm text-ink/50">Local favourites</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destination.foods.map((food) => (
            <div
              key={food.name}
              className="rounded-2xl border border-ink/10 bg-card p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-clay">
                {food.category}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold">
                {food.name}
              </h3>
              <p className="mt-1 text-sm text-ink/55">{food.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-ink/50 sm:flex-row">
          <p className="font-display font-semibold text-ink">Wanderline</p>
          <p>Plan calm, walkable days — one city at a time.</p>
        </div>
      </footer>
    </div>
  );
}
