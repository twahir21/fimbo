import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SITE } from "@/lib/site";

export default function CtaBand({ heading = "Tell us what you need to protect." }: { heading?: string }) {
  return (
    <section className="bg-signal px-6 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">{heading}</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-black px-7 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            Request a consultation <FiArrowUpRight />
          </Link>
          <a
            href={`tel:${SITE.phones[0].e164}`}
            className="inline-flex items-center justify-center border-2 border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-signal"
          >
            Call {SITE.phones[0].label}
          </a>
        </div>
      </div>
    </section>
  );
}
