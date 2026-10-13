import { SERVICES, SITE } from "@/lib/site";

export default function BusinessProfile({ asH1 = false }: { asH1?: boolean }) {
  const rows: [string, React.ReactNode][] = [
    ["Company", SITE.name],
    ["Legal status", "Registered Tanzanian firm"],
    ["Police clearance", `Certificate awarded in ${SITE.policeClearance.year}, reference ${SITE.policeClearance.ref}`],
    ["Services", SERVICES.map((s) => s.title).join(", ")],
    ["Office", `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.country}`],
    ["Postal address", `${SITE.address.poBox}, ${SITE.address.city}, ${SITE.address.country}`],
    [
      "Phone",
      SITE.phones.map((p, i) => (
        <span key={p.e164}>
          {i > 0 && ", "}
          <a className="underline underline-offset-4 hover:text-signal-bright" href={`tel:${p.e164}`}>{p.label}</a>
        </span>
      )),
    ],
    ["Email", <a key="e" className="underline underline-offset-4 hover:text-signal-bright" href={`mailto:${SITE.email}`}>{SITE.email}</a>],
  ];
  const H = asH1 ? "h1" : "h2";

  return (
    <section id="profile" className="bg-black px-6 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <H className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">Business profile</H>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Fimbo Consultants is a registered Tanzanian firm offering consultation on security and risk management,
            technical security, physical security, professional staff vetting and customised security training.
          </p>
        </div>
        <dl className="lg:col-span-7">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-t border-white/15 py-5 sm:grid-cols-3 sm:gap-6">
              <dt className="font-semibold text-signal-bright">{k}</dt>
              <dd className="text-white/85 sm:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
