import { PricingClient } from "@/components/pages/PricingClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | Next Revolution Tech",
  description: "Transparent pricing for custom software development, AI automation, and dedicated engineering teams.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://www.nextrevolutiontech.tech/pricing",
          "name": "NRT Pricing and Packages"
        }) }} 
      />
      <PricingClient />
    </>
  );
}
