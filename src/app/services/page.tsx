import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesList from "@/components/ServicesList";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Security, vetting and fraud training services",
  description:
    "Physical security consultancy, security management, staff vetting, technical security, fire safety and fraud investigation training for institutions in Tanzania.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        title="Services"
        lede="Consultancy, vetting, technical support and training for institutions that handle money, people and sensitive assets."
        crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />
      <ServicesList heading={false} />
      <CtaBand />
    </>
  );
}
