import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { SERVICES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-4 border-signal bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-white/65">
            A registered Tanzanian firm advising on security, risk and fraud for banks, firms and institutions.
          </p>
        </div>

        <nav aria-label="Services" className="md:col-span-3">
          <h2 className="font-display text-lg font-semibold">Services</h2>
          <ul className="mt-4 space-y-2.5 text-white/70">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-display text-lg font-semibold">Contact</h2>
          <address className="mt-4 space-y-3 not-italic text-white/70">
            <p className="flex gap-3">
              <FiMapPin className="mt-1 shrink-0 text-signal-bright" />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.poBox}, {SITE.address.city}, {SITE.address.country}
              </span>
            </p>
            {SITE.phones.map((p) => (
              <p key={p.e164} className="flex gap-3">
                <FiPhone className="mt-1 shrink-0 text-signal-bright" />
                <a href={`tel:${p.e164}`} className="hover:text-white">{p.label}</a>
              </p>
            ))}
            <p className="flex gap-3">
              <FiMail className="mt-1 shrink-0 text-signal-bright" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-white">{SITE.email}</a>
            </p>
            <p className="flex gap-3">
              <FaWhatsapp className="mt-1 shrink-0 text-signal-bright" />
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Message on WhatsApp
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
