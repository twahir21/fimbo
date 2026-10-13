"use client";

import { useState, type FormEvent } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SERVICES, SITE } from "@/lib/site";

const field =
  "mt-2 w-full border-2 border-black bg-white px-4 py-3 text-base text-black placeholder:text-black/40 focus:border-black focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30";

export default function ContactSection({ asH1 = false }: { asH1?: boolean }) {
  const [sent, setSent] = useState(false);
  const H = asH1 ? "h1" : "h2";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Organisation: ${f.get("org")}`,
      `Phone: ${f.get("phone")}`,
      `Service: ${f.get("service")}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    const subject = `Consultation request: ${f.get("service")}`;
    const primaryEmail = SITE.email.split(/\s+or\s+/i)[0].trim();
    window.location.href = `mailto:${primaryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="bg-signal px-6 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <H className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Tell us what you need to protect
          </H>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">
            Describe your institution and the risk you are worried about. We will reply with how we can help.
          </p>
          <address className="mt-10 space-y-4 not-italic text-lg">
            <p className="flex gap-3">
              <FiMapPin className="mt-1.5 shrink-0" aria-hidden />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.poBox}, {SITE.address.city}
              </span>
            </p>
            {SITE.phones.map((p) => (
              <p key={p.e164} className="flex gap-3">
                <FiPhone className="mt-1.5 shrink-0" aria-hidden />
                <a className="underline underline-offset-4" href={`tel:${p.e164}`}>{p.label}</a>
              </p>
            ))}
            <p className="flex gap-3">
              <FiMail className="mt-1.5 shrink-0" aria-hidden />
              <span className="break-all">
                {SITE.email.split(/\s+or\s+/i).map((em, idx, arr) => (
                  <span key={em.trim()}>
                    <a className="underline underline-offset-4" href={`mailto:${em.trim()}`}>{em.trim()}</a>
                    {idx < arr.length - 1 && <span className="text-white/70"> or </span>}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex gap-3">
              <FaWhatsapp className="mt-1.5 shrink-0" aria-hidden />
              <a className="underline underline-offset-4" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            </p>
          </address>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 bg-black p-6 sm:p-10 lg:col-span-7">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block font-semibold">
              Your name
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="block font-semibold">
              Organisation
              <input name="org" autoComplete="organization" className={field} />
            </label>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block font-semibold">
              Phone
              <input required name="phone" type="tel" autoComplete="tel" className={field} />
            </label>
            <label className="block font-semibold">
              Service you need
              <select name="service" className={field} defaultValue="Not sure yet">
                {SERVICES.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
                <option>Not sure yet</option>
              </select>
            </label>
          </div>
          <label className="block font-semibold">
            What would you like help with?
            <textarea required name="message" rows={5} className={field} />
          </label>
          <button
            type="submit"
            className="w-full bg-signal px-7 py-4 text-base font-semibold text-white transition hover:bg-signal-deep sm:w-auto"
          >
            Send request
          </button>
          <p role="status" className="text-sm text-white/70">
            {sent
              ? "Your email app should now open with your request filled in. Press send there to reach us."
              : "Sending opens your email app with your request ready to send."}
          </p>
        </form>
      </div>
    </section>
  );
}
