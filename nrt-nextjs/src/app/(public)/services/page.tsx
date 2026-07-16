import { ServicesClient } from "@/components/pages/ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Solutions | Next Revolution Tech",
  description: "Explore our comprehensive suite of enterprise services including custom software development, AI integration, cloud solutions, and eCommerce.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Enterprise Software & AI Automation Services",
          "provider": {
            "@type": "Organization",
            "name": "Next Revolution Tech"
          },
          "url": "https://www.nextrevolutiontech.tech/services",
          "description": "Comprehensive suite of enterprise services including custom software development, AI integration, cloud solutions, and eCommerce."
        }) }} 
      />
      <ServicesClient />
    </>
  );
}
