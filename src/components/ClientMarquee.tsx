import { CLIENTS } from "@/lib/site";

export default function ClientMarquee() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-labelledby="clients-heading" className="overflow-hidden bg-signal py-8 text-white">
      <h2 id="clients-heading" className="mx-auto mb-5 max-w-7xl px-6 text-base font-semibold md:text-lg">
        Staff training delivered with the Police Force at banks and institutions across Tanzania
      </h2>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap hover:[animation-play-state:paused]">
        {loop.map((name, i) => (
          <span key={i} aria-hidden={i >= CLIENTS.length} className="font-display text-2xl font-bold md:text-3xl">
            {name}
          </span>
        ))}
      </div>
      <p className="sr-only">{CLIENTS.join(", ")}</p>
    </section>
  );
}
