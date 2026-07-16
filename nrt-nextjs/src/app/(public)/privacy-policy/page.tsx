import { PrivacyPolicyClient } from "@/components/pages/PrivacyPolicyClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Next Revolution Tech",
  description: "Read our Privacy Policy to understand how Next Revolution Tech collects, uses, and protects your data.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://www.nextrevolutiontech.tech/privacy-policy",
          "name": "NRT Privacy Policy"
        }) }} 
      />
      <PrivacyPolicyClient />
    </>
  );
}
