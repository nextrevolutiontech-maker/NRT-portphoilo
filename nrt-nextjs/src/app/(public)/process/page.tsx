import { ProcessClient } from "@/components/pages/ProcessClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Next Revolution Tech",
  description: "Discover our proven agile methodology for designing, developing, and deploying enterprise software and AI solutions.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/process",
  },
};

export default function ProcessPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://www.nextrevolutiontech.tech/process",
          "name": "NRT Software Development Process"
        }) }} 
      />
      <ProcessClient />
    </>
  );
}
