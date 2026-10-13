import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BusinessProfile from "@/components/BusinessProfile";
import ClientMarquee from "@/components/ClientMarquee";
import Team from "@/components/Team";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Fimbo Consultants: business profile and team",
  description:
    "Fimbo Consultants is a registered Tanzanian security and fraud consultancy in Dar es Salaam. See our business profile, police clearance, training record and team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        title="A security and fraud consultancy built by investigators"
        lede="Fimbo Consultants is a registered Tanzanian firm. Our team brings police investigation, law, finance and project experience to the institutions we advise."
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />
      <ClientMarquee />
      <Team />
      <BusinessProfile />
      <CtaBand />
    </>
  );
}
