import Link from "next/link";
import Accordion from "./Accordion";
import { TRAINING } from "@/lib/site";

export default function TrainingSection() {
  const items = TRAINING.map((g) => ({
    id: g.id,
    title: g.title,
    summary: g.summary,
    body: (
      <dl className="grid gap-x-10 gap-y-5 md:grid-cols-2">
        {g.modules.map((m) => (
          <div key={m.name}>
            <dt className="font-semibold">{m.name}</dt>
            <dd className="mt-1 leading-relaxed text-black/70">{m.detail}</dd>
          </div>
        ))}
      </dl>
    ),
  }));

  return (
    <section id="training" className="bg-bone px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 md:grid-cols-12">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:col-span-7 md:text-6xl">
            Training that keeps pace with how criminals work
          </h2>
          <p className="text-lg leading-relaxed text-black/70 md:col-span-4 md:col-start-9 md:self-end">
            Tactics change daily, so we train your staff periodically on the subjects your institution needs right
            now.
          </p>
        </div>
        <Accordion items={items} />
        <Link href="/services/security-and-fraud-training" className="mt-10 inline-block font-semibold text-signal underline underline-offset-4 hover:text-black">
          More about security and fraud training
        </Link>
      </div>
    </section>
  );
}
