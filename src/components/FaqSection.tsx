import Accordion from "./Accordion";
import { FAQS } from "@/lib/site";

export default function FaqSection() {
  const items = FAQS.map((f, i) => ({
    id: `faq-${i}`,
    title: f.q,
    body: <p className="max-w-3xl text-lg leading-relaxed text-black/70">{f.a}</p>,
  }));
  return (
    <section id="faq" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Frequently asked questions
        </h2>
        <Accordion items={items} defaultOpen={-1} />
      </div>
    </section>
  );
}
