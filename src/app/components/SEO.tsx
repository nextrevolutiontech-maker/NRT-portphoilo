import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

export function SEO({
  title = "Next Revolution Tech | Enterprise Software Development & AI Solutions",
  description = "Global technology partner delivering enterprise-grade software solutions, AI innovations, and scalable cloud ecosystems. specialized in eCommerce, APIs, and Agentic AI.",
  keywords = "Software Development, AI Solutions, Enterprise Software, Next Revolution Tech, NRT, eCommerce Development, API Integration, Agentic AI, Dedicated Developers",
  canonical = "https://www.nextrevolutiontech.tech",
  ogImage = "https://www.nextrevolutiontech.tech/og-image.png",
  ogType = "website",
  twitterHandle = "@nextrevtech"
}: SEOProps) {
  const siteTitle = title.includes("Next Revolution Tech") ? title : `${title} | Next Revolution Tech`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Next Revolution Tech" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
    </Helmet>
  );
}
