import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Fimbo Consultants, Dar es Salaam",
  description:
    "Request a security, vetting or fraud training consultation. Call +255 753 345 659, email info@fimbo.co.tz or adelbert.sugwa@fimbo.co.tz or  tzifanda@fimbo.co.tz or message us on WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <ContactSection asH1 />
    </>
  );
}
