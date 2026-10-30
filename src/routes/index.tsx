import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/marketing/site";
import {
  Hero,
  Solutions,
  WebsiteSolutions,
  AppointmentManagement,
  ClinicManagement,
  MobileApplications,
  DigitalGrowth,
  WhyAselea,
  HowItWorks,
  ContactSection,
} from "@/components/marketing/landing-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Aselea Healthcare — Your Entire Clinic. Beautifully Connected.",
      },
      {
        name: "description",
        content:
          "Aselea Healthcare by Aselea Network: websites, appointments, clinic management, mobile apps and digital growth — one connected platform for modern clinics.",
      },
      { property: "og:title", content: "Aselea Healthcare — Your Entire Clinic. Beautifully Connected." },
      {
        property: "og:description",
        content:
          "Technology that brings your clinic together. From your first discovery to the next follow-up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Solutions />
        <WebsiteSolutions />
        <AppointmentManagement />
        <ClinicManagement />
        <MobileApplications />
        <DigitalGrowth />
        <WhyAselea />
        <HowItWorks />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
