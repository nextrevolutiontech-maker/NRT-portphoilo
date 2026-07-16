import { PortfolioClient } from "@/components/pages/PortfolioClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio & Case Studies | Next Revolution Tech",
  description: "Explore our portfolio of successful enterprise ERP systems, AI automation solutions, and custom software projects.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": "https://www.nextrevolutiontech.tech/portfolio",
          "name": "NRT Case Studies and Projects"
        }) }} 
      />
      <PortfolioClient />
    </>
  );
}
