import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  schemaType?: "Organization" | "Article" | "FAQ" | "CaseStudy" | "Person";
  schemaData?: any; // For dynamic schema injections
}

export function SEO({
  title = "Next Revolution Tech | Enterprise Software Development & AI Solutions",
  description = "Global technology partner delivering enterprise-grade software solutions, AI innovations, and scalable cloud ecosystems. specialized in eCommerce, APIs, and Agentic AI.",
  keywords = "Software Development, AI Solutions, Enterprise Software, Next Revolution Tech, NRT, eCommerce Development, API Integration, Agentic AI, Dedicated Developers",
  canonical = "https://www.nextrevolutiontech.tech",
  ogImage = "https://www.nextrevolutiontech.tech/og-image.png",
  ogType = "website",
  twitterHandle = "@nextrevtech",
  schemaType,
  schemaData
}: SEOProps) {
  const location = useLocation();
  const siteUrl = "https://www.nextrevolutiontech.tech";
  const siteTitle = title.includes("Next Revolution Tech") ? title : `${title} | Next Revolution Tech`;
  const canonicalUrl = canonical === siteUrl ? `${siteUrl}${location.pathname}` : canonical;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Next Revolution Tech" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* JSON-LD Schemas */}
      {/* 1. Website Schema (Always Present) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Next Revolution Tech",
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* 2. Organization / LocalBusiness Schema (Always Present) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Next Revolution Tech",
          "image": `${siteUrl}/logo.png`,
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": "+923442013217",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gulistan-e-Johar",
            "addressLocality": "Karachi",
            "addressRegion": "Sindh",
            "postalCode": "75290",
            "addressCountry": "PK"
          },
          "foundingDate": "2022",
          "sameAs": [
            "https://www.linkedin.com/company/next-revolution-tech",
            "https://twitter.com/nextrevtech"
          ]
        })}
      </script>

      {/* 3. Breadcrumb Schema (Always Present based on path) */}
      {location.pathname !== "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": location.pathname.split('/').filter(Boolean).map((path, index, arr) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
              "item": `${siteUrl}/${arr.slice(0, index + 1).join('/')}`
            }))
          })}
        </script>
      )}

      {/* 4. Conditional Schemas */}
      {schemaType === "Person" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Ahsan Khan",
            "jobTitle": "Founder & Lead Solutions Architect",
            "worksFor": {
              "@type": "Organization",
              "name": "Next Revolution Tech"
            },
            "url": `${siteUrl}/author/muhammad-ahsan-khan`,
            "sameAs": [
              "https://www.linkedin.com/in/muhammad-ahsan-khan-238b69352/"
            ]
          })}
        </script>
      )}

      {schemaType === "CaseStudy" && schemaData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article", // Schema.org doesn't have an explicit 'CaseStudy' type, Article/TechArticle is standard
            "headline": schemaData.title,
            "description": schemaData.description,
            "author": {
              "@type": "Person",
              "name": "Muhammad Ahsan Khan"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Next Revolution Tech"
            }
          })}
        </script>
      )}

      {schemaType === "Article" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "author": {
              "@type": "Person",
              "name": "Muhammad Ahsan Khan"
            }
          })}
        </script>
      )}

      {schemaType === "FAQ" && schemaData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": schemaData.map((faq: any) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      )}
    </Helmet>
  );
}
