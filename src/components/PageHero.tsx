import Link from "next/link";

type Crumb = { name: string; href?: string };

export default function PageHero({
  title,
  lede,
  crumbs,
}: {
  title: string;
  lede?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-20 pt-16 text-white md:pb-28 md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((c, i) => (
                <li key={c.name} className="flex gap-2">
                  {c.href ? <Link href={c.href} className="hover:text-white">{c.name}</Link> : <span className="text-white">{c.name}</span>}
                  {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">{title}</h1>
        {lede && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">{lede}</p>}
      </div>
      <div aria-hidden className="absolute bottom-0 left-0 h-1.5 w-40 bg-signal" />
    </section>
  );
}
