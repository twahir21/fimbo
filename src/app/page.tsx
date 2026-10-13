import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import ServicesList from "@/components/ServicesList";
import VettingSection from "@/components/VettingSection";
import TrainingSection from "@/components/TrainingSection";
import Team from "@/components/Team";
import BusinessProfile from "@/components/BusinessProfile";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Fimbo Consultants | Security & Fraud Consultancy, Dar es Salaam" },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />
      <ClientMarquee />
      <ServicesList />
      <VettingSection />
      <TrainingSection />
      <Team limit={3} />
      <BusinessProfile />
      <FaqSection />
      <ContactSection />
    </>
  );
}
