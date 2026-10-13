import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/lib/site";

export default function Team({ limit, heading = true }: { limit?: number; heading?: boolean }) {
  const people = limit ? TEAM.slice(0, limit) : TEAM;
  return (
    <section id="team" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {heading && (
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:col-span-7 md:text-6xl">
              The people behind the work
            </h2>
            <p className="text-lg leading-relaxed text-black/70 md:col-span-4 md:col-start-9 md:self-end">
              Investigators, lawyers, economists and project managers working from our Dar es Salaam office.
            </p>
          </div>
        )}
        <ul className="grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
          {people.map((p) => (
            <li key={p.name} className="border-t-4 border-black pt-6">
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-neutral-100 ring-2 ring-signal ring-offset-2 sm:h-24 sm:w-24">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight">{p.name}</h3>
                  <p className="mt-1 font-semibold text-signal">{p.role}</p>
                </div>
              </div>
              {p.points && p.points.length > 0 && (
                <ul className="mt-5 space-y-2 text-[15px] leading-relaxed text-black/70">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {limit && people.length < TEAM.length && (
          <Link href="/about#team" className="mt-14 inline-block font-semibold text-signal underline underline-offset-4 hover:text-black">
            Meet the full team
          </Link>
        )}
      </div>
    </section>
  );
}
