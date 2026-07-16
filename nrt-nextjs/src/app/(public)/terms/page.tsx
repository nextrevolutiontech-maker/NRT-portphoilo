import { TermsOfServiceClient } from "@/components/pages/TermsOfServiceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Next Revolution Tech",
  description: "Read the Terms of Service for using Next Revolution Tech software and websites.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://www.nextrevolutiontech.tech/terms",
          "name": "NRT Terms of Service"
        }) }} 
      />
      <TermsOfServiceClient />
    </>
  );
}
