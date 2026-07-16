import { HomeClient } from "@/components/pages/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software & AI Automation",
  description: "Next Revolution Tech is a global technology partner delivering custom enterprise software, AI automation, and eCommerce ecosystems.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech",
  },
};

export default function HomePage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Next Revolution Tech",
          "url": "https://www.nextrevolutiontech.tech",
          "logo": "https://www.nextrevolutiontech.tech/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/nextrevolutiontech",
            "https://www.instagram.com/nextrevolutiontech",
            "https://github.com/nextrevolutiontech-maker"
          ]
        }) }} 
      />
      <HomeClient />
    </>
  );
}
