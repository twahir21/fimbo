"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import { CLEARANCE_CHECKS, VETTING_TABS } from "@/lib/site";

const ridges = Array.from({ length: 14 }, (_, i) => {
  const r = 10 + i * 9;
  const cy = 170;
  const drop = 170 - i * 7;
  return `M${160 - r} ${cy + drop} V${cy} A${r} ${r * 1.18} 0 0 1 ${160 + r} ${cy} V${cy + drop}`;
});

export default function VettingSection() {
  const root = useRef<HTMLElement>(null);
  const [tab, setTab] = useState(VETTING_TABS[0].id);
  const active = VETTING_TABS.find((t) => t.id === tab)!;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(".ridge", { strokeDashoffset: 0 });
        gsap.set(".minutia", { opacity: 1 });
        return;
      }
      gsap
        .timeline({
          scrollTrigger: { trigger: root.current, start: "top 65%", end: "bottom 85%", scrub: 1 },
        })
        .to(".ridge", { strokeDashoffset: 0, ease: "none", stagger: 0.12, duration: 1 })
        .to(".minutia", { opacity: 1, stagger: 0.1, duration: 0.3 }, "-=0.2");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="vetting" className="relative bg-black px-6 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <svg viewBox="0 0 320 400" className="mx-auto w-full max-w-sm" role="img" aria-label="Fingerprint being traced and matched">
              {ridges.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  className="ridge"
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  fill="none"
                  stroke={i % 5 === 0 ? "#ff4048" : "#ffffff"}
                  strokeOpacity={i % 5 === 0 ? 1 : 0.85}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ))}
              {[
                [118, 150],
                [196, 138],
                [160, 96],
                [226, 230],
                [96, 262],
              ].map(([x, y], i) => (
                <rect key={i} className="minutia" x={x - 11} y={y - 11} width="22" height="22" fill="none" stroke="#ff4048" strokeWidth="2" opacity={0} />
              ))}
            </svg>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Know who you are hiring before they start
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Our staff vetting helps your HR team check conduct before recruitment, as deeply as your business needs.
            Choose a check to see what it covers.
          </p>

          <div role="tablist" aria-label="Vetting checks" className="mt-10 flex gap-2 border-b border-white/20">
            {VETTING_TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`panel-${t.id}`}
                onClick={() => setTab(t.id)}
                className={`relative px-5 py-3 text-base font-semibold transition ${tab === t.id ? "text-white" : "text-white/50 hover:text-white"}`}
              >
                {t.label}
                {tab === t.id && <motion.span layoutId="vet-underline" className="absolute inset-x-0 -bottom-px h-[3px] bg-signal-bright" />}
              </button>
            ))}
          </div>

          <div className="min-h-[22rem] pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <p className="max-w-xl text-xl font-medium">{active.lead}</p>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {active.items.map((it) => (
                    <li key={it} className="flex gap-3 text-white/80">
                      <FiCheck className="mt-1 shrink-0 text-signal-bright" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 border-t border-white/15 pt-8">
            <p className="font-display text-xl font-semibold">Clearance checks we follow up</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {CLEARANCE_CHECKS.map((c) => (
                <li key={c} className="border border-white/25 px-4 py-2 text-sm text-white/85">{c}</li>
              ))}
            </ul>
            <Link href="/services/staff-vetting" className="mt-8 inline-block font-semibold text-signal-bright underline underline-offset-4 hover:text-white">
              More about staff vetting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
