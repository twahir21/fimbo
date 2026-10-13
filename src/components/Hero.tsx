"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import CctvMonitor from "./CctvMonitor";
import { SITE } from "@/lib/site";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".h-line", { yPercent: 110, duration: 0.9, stagger: 0.12 })
        .from(".h-fade", { opacity: 0, y: 18, duration: 0.6, stagger: 0.08 }, "-=0.45")
        .from(".h-monitor", { opacity: 0, scale: 0.97, duration: 0.8 }, 0.2);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-12 lg:pb-32 lg:pt-24">
        <div className="lg:col-span-6">
          <p className="h-fade mb-6 text-sm text-white/60">{SITE.tagline}</p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
            <span className="block overflow-hidden pb-[0.12em]">
              <span className="h-line block">Fraud leaves a trail.</span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span className="h-line block">We know how to read it.</span>
            </span>
          </h1>
          <p className="h-fade mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Fimbo Consultants advises banks, firms and institutions across Tanzania on security, risk and fraud: staff
            vetting, CCTV and technical controls, fire safety, and investigation training from a team with police,
            law and finance backgrounds.
          </p>
          <div className="h-fade mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-signal px-7 py-4 font-semibold text-white transition hover:bg-signal-deep"
            >
              Request a consultation <FiArrowUpRight />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-white/30 px-7 py-4 font-semibold transition hover:border-white hover:bg-white hover:text-black"
            >
              See our services
            </Link>
          </div>
          <ul className="h-fade mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            {["Registered Tanzanian firm", `Police clearance certificate, ${SITE.policeClearance.year}`, "Based in Dar es Salaam"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <FiCheck className="text-signal-bright" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-monitor lg:col-span-6">
          <CctvMonitor />
        </div>
      </div>
    </section>
  );
}
