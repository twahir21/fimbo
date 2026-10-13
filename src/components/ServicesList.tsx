import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SERVICES } from "@/lib/site";

export default function ServicesList({ heading = true }: { heading?: boolean }) {
  return (
    <section id="services" className="bg-bone px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {heading && (
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:col-span-7 md:text-6xl">
              Six ways we reduce your security and fraud risk
            </h2>
            <p className="text-lg leading-relaxed text-black/70 md:col-span-4 md:col-start-9 md:self-end">
              Consultancy, vetting, technical support and training for institutions that handle money, people and
              sensitive assets.
            </p>
          </div>
        )}
        <ul className="border-t-2 border-black">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.slug} className="border-b border-black/20">
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid items-center gap-4 px-2 py-8 transition-colors duration-300 hover:bg-black hover:text-white md:grid-cols-12 md:px-6"
                >
                  <span className="flex items-center gap-4 md:col-span-5">
                    <Icon className="shrink-0 text-3xl text-signal transition group-hover:text-signal-bright" aria-hidden />
                    <span className="font-display text-2xl font-bold leading-tight md:text-3xl">{s.title}</span>
                  </span>
                  <span className="text-black/70 transition group-hover:text-white/75 md:col-span-6">{s.short}</span>
                  <span className="hidden justify-self-end md:block">
                    <FiArrowUpRight className="text-3xl transition group-hover:rotate-45 group-hover:text-signal-bright" aria-hidden />
                    <span className="sr-only">Read more about {s.title}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
