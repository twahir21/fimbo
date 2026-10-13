import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { SERVICES, getService } from "@/lib/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.short,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | Fimbo Consultants`, description: s.short, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const Icon = s.icon;
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.title, path: `/services/${s.slug}` },
        ])}
      />
      <PageHero
        title={s.title}
        lede={s.short}
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: s.title }]}
      />

      <section className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Icon className="text-5xl text-signal" aria-hidden />
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-4xl">What this service does</h2>
            <p className="mt-6 text-lg leading-relaxed text-black/75">{s.intro}</p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">What it covers</h2>
            <dl className="mt-8 border-t-2 border-black">
              {s.points.map((p) => (
                <div key={p.title} className="grid gap-2 border-b border-black/15 py-6 sm:grid-cols-3 sm:gap-6">
                  <dt className="font-display text-xl font-bold">{p.title}</dt>
                  <dd className="leading-relaxed text-black/70 sm:col-span-2">{p.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Other services</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/services/${o.slug}`}
                  className="group flex h-full items-center justify-between gap-4 border-2 border-black px-5 py-5 font-display text-lg font-bold transition hover:bg-black hover:text-white"
                >
                  {o.title}
                  <FiArrowUpRight className="shrink-0 text-2xl text-signal transition group-hover:text-signal-bright" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand heading={`Talk to us about ${s.title.toLowerCase()}.`} />
    </>
  );
}
