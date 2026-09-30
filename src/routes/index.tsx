import { createFileRoute } from "@tanstack/react-router";

import { MobileStickyCta, SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Clients,
  FlowVisual,
  LeadCta,
  TrustStrip,
  WhySuyog,
} from "@/components/site/Sections";
import { Industries, SuyogProducts, TallyProducts } from "@/components/site/Products";
import { Customized } from "@/components/site/Customized";
import { ContactSection } from "@/components/site/ContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CONTACT } from "@/data/suyog";

const TITLE = "SUYOG — Tally Software Solutions & Business Software in Kanpur";
const DESCRIPTION =
  "SUYOG is a Kanpur-based IT and Tally solutions company serving businesses since 1990 — TallyPrime implementation, Tally customization, TSS, Tally on Cloud and ready-to-use business modules.";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://suyog.net/#organization",
      name: "SUYOG",
      description: DESCRIPTION,
      foundingDate: "1990",
      url: "https://suyog.net/",
      telephone: CONTACT.phones,
      address: {
        "@type": "PostalAddress",
        streetAddress: "117/111, C-5, Second Floor, Mandir Marg, Sarvodaya Nagar",
        addressLocality: "Kanpur",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      areaServed: "IN",
    },
    {
      "@type": "Service",
      name: "Tally Customization & Business Software Development",
      provider: { "@id": "https://suyog.net/#organization" },
      serviceType: "TallyPrime implementation, customization and support",
      areaServed: "IN",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Tally software service provider, TallyPrime solutions, Tally customization, Tally solutions Kanpur, business management software, Tally implementation, Tally support",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://suyog.net/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://suyog.net/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <TallyProducts />
        <SuyogProducts />
        <Industries />
        <Customized />
        <WhySuyog />
        <FlowVisual />
        <Clients />
        <LeadCta />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}
