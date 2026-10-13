"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/#vetting", label: "Vetting" },
  { href: "/#training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 text-white backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Fimbo Consultants home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-[15px] text-white/75 transition hover:text-white">
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-signal px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-signal-deep"
          >
            Request a consultation
          </Link>
        </nav>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-display text-2xl font-semibold"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="py-5">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block bg-signal px-5 py-4 text-center font-semibold"
                >
                  Request a consultation
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
