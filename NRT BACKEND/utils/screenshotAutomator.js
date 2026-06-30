// Puppeteer has been disabled to prevent Vercel 50MB deployment limit crashes.
// const puppeteer = require('puppeteer');
const db = require('../db');
// Cloudinary upload is also disabled for the fallback, but keeping the import if needed later
// const { uploadImageFromBuffer } = require('../config/cloudinary');

// Hardcoded dataset of 38 unique client projects with professional copywriting, categories and tech stacks
const projectDataset = [
  {
    title: "Feni Finance",
    live_url: "https://feni.finance/",
    industry: "FinTech",
    challenge: "Decentralized yield optimization and multi-chain liquidity management dashboard.",
    solution: "Ethers.js, Solidity Smart Contracts, React, TailwindCSS, Node.js",
    tech_stack: ["React", "TypeScript", "Ethers.js", "TailwindCSS", "Node.js", "Web3"],
    results: ["Multi-chain wallet integrations", "Live interest yield tracking dashboards", "Automated pool liquidity routing"]
  },
  {
    title: "TrueCV Builder",
    live_url: "https://truecv.com/",
    industry: "SaaS",
    challenge: "AI-driven professional CV builder and career profile optimizer with export tools.",
    solution: "Next.js, OpenAI API, Node.js, Express, PostgreSQL, TailwindCSS",
    tech_stack: ["Next.js", "React", "Node.js", "PostgreSQL", "TailwindCSS", "OpenAI"],
    results: ["AI resume tailoring in 1 click", "High-fidelity PDF generation template engine", "Applicant Tracking System (ATS) score dashboard"]
  },
  {
    title: "The AusTrades",
    live_url: "https://www.theaustrades.com/",
    industry: "Enterprise",
    challenge: "Australian B2B trade hub connecting verified material suppliers and global shippers.",
    solution: "React, Node.js, Express, PostgreSQL, Mapbox API, TailwindCSS",
    tech_stack: ["React", "Express", "PostgreSQL", "Mapbox", "TailwindCSS"],
    results: ["Interactive shipping maps and routing", "B2B material RFQ flow system", "Automated contract validations"]
  },
  {
    title: "BYO Test Portal",
    live_url: "https://byo-testing.vercel.app/",
    industry: "QA & Operations",
    challenge: "Internal automated regression testing panel and build status monitor portal.",
    solution: "Vite, React, Firebase, TailwindCSS, Automated testing integrations",
    tech_stack: ["Vite", "React", "Firebase", "TailwindCSS"],
    results: ["Live build test log streams", "Multi-platform browser verification dashboard", "Instant Slack webhook alerts"]
  },
  {
    title: "Sachdeva Stocks",
    live_url: "https://sachdeva-stocks.com/",
    industry: "FinTech",
    challenge: "Real-time stock market analysis, charting, and equity portfolio advisory portal.",
    solution: "React, Chart.js, FastAPI, PostgreSQL, TailwindCSS",
    tech_stack: ["React", "Chart.js", "FastAPI", "PostgreSQL", "TailwindCSS"],
    results: ["Live candlestick charts updates", "Automated trade advisories", "Interactive risk metrics tracker"]
  },
  {
    title: "MainStreet Dental",
    live_url: "http://mainstreetdental.com.au/",
    industry: "Healthcare",
    challenge: "Australian dental clinic booking portal and medical appointment synchronization calendar.",
    solution: "React, Express, Google Calendar API integration, TailwindCSS",
    tech_stack: ["React", "Express", "Google Calendar API", "TailwindCSS"],
    results: ["Smart schedule sync preventing collisions", "Automatic WhatsApp reminder notifications", "Responsive patient intake form Portal"]
  },
  {
    title: "Capital 40 Advisory",
    live_url: "http://capital40.com/",
    industry: "FinTech",
    challenge: "Asset management portal and high-volume equity investment advisory tracking platform.",
    solution: "React, Node.js, MongoDB, TailwindCSS, Financial metrics engine",
    tech_stack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    results: ["Asset allocation tracking", "Client payout history ledger", "Automated advisory newsletters"]
  },
  {
    title: "Golden Age Healings",
    live_url: "https://www.goldenagehealings.com/",
    industry: "Healthcare",
    challenge: "Wellness advisory booking platform with customer assessment portals.",
    solution: "React, Stripe API, Node.js, TailwindCSS",
    tech_stack: ["React", "Stripe API", "Node.js", "TailwindCSS"],
    results: ["Integrated Stripe secure payment flows", "Custom intake health questionnaires", "Interactive counselor calendars"]
  },
  {
    title: "BookMyTask",
    live_url: "https://bookmytask.in/",
    industry: "Operations & On-Demand",
    challenge: "Indian local service booking platform linking verified maintenance contractors and users.",
    solution: "React Native, React, Node.js, PostgreSQL, Google Maps API",
    tech_stack: ["React", "React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    results: ["Location-based search mapping", "Real-time task dispatch log notifications", "Secure customer rating ledger"]
  },
  {
    title: "TrueHRIS Portal",
    live_url: "https://truehris.com/",
    industry: "SaaS / ERP",
    challenge: "Enterprise HR information system covering attendance trackers, leaf ledgers, and payslip runs.",
    solution: "React, TypeScript, Node.js, PostgreSQL",
    tech_stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    results: ["Automated monthly employee pay run sheets", "Custom leave application tracking logs", "Live biometric check-in integration"]
  },
  {
    title: "Gulf Electricals",
    live_url: "https://gulf-el.com/",
    industry: "Enterprise",
    challenge: "Middle-East industrial electrical equipment catalog and wholesale inquiry dispatch portal.",
    solution: "React, Express, Node.js, TailwindCSS",
    tech_stack: ["React", "Express", "Node.js", "TailwindCSS"],
    results: ["Indexed parts catalog catalog with smart search", "Automated wholesale RFQ request dispatch", "Cloud-hosted inventory uploads"]
  },
  {
    title: "Sellyt Marketplace",
    live_url: "https://sellyt.com/",
    industry: "eCommerce",
    challenge: "Peer-to-peer electronics trade marketplace with built-in device condition assessment tool.",
    solution: "Next.js, React, Node.js, PostgreSQL, TailwindCSS",
    tech_stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    results: ["Interactive automated assessment checklist", "P2P instant messaging and pricing negotiation", "Secure escrow order status checks"]
  },
  {
    title: "LearningConnect Construction",
    live_url: "https://learningconnectconstruction.co.uk/",
    industry: "EdTech",
    challenge: "UK construction safety certification course portal and virtual exam processor.",
    solution: "React, Express, PostgreSQL, TailwindCSS",
    tech_stack: ["React", "Express", "PostgreSQL", "TailwindCSS"],
    results: ["Secure timed virtual examination logs", "Auto-generated CSCS compliance certificates", "HSE safety course modules"]
  },
  {
    title: "LearningConnect LMS",
    live_url: "https://learningconnect.co.uk/",
    industry: "EdTech",
    challenge: "Complete corporate LMS platform with video lessons, quiz engines, and compliance certificates.",
    solution: "React, Express, PostgreSQL, TailwindCSS",
    tech_stack: ["React", "Express", "PostgreSQL", "TailwindCSS"],
    results: ["Responsive video player lesson modules", "Admin course enrollment dashboards", "Automated audit certifications"]
  },
  {
    title: "VLS Sourcing",
    live_url: "https://vlssourcing.com/",
    industry: "Enterprise",
    challenge: "Global logistics material sourcing directory and wholesale supply chain coordinator.",
    solution: "React, Express, Node.js, TailwindCSS",
    tech_stack: ["React", "Express", "Node.js", "TailwindCSS"],
    results: ["Multi-category sourcing directory lists", "Vendor validation registry tools", "Secure RFQ forwarding system"]
  },
  {
    title: "Alirok Logistics",
    live_url: "https://alirok.com/",
    industry: "Logistics",
    challenge: "End-to-end global freight comparison engine and shipping label generator.",
    solution: "Next.js, React, Google Maps API, TailwindCSS",
    tech_stack: ["Next.js", "React", "Google Maps API", "TailwindCSS"],
    results: ["Real-time cargo quotes comparison", "Multi-carrier barcode shipping labels", "Live route tracking updates"]
  },
  {
    title: "WayLight Portfolio",
    live_url: "https://waylight.me/",
    industry: "SaaS",
    challenge: "Personal branding ecosystem and digital portfolio aggregator for freelance consultants.",
    solution: "Vite, React, TailwindCSS",
    tech_stack: ["Vite", "React", "TailwindCSS"],
    results: ["Sleek customized user bio templates", "Instant schedule widget booking integrations", "Responsive project display feeds"]
  },
  {
    title: "Neemb Workspaces",
    live_url: "https://neemb.work/",
    industry: "SaaS",
    challenge: "Co-working space booking portal, hot-desk scheduler, and billing dashboard.",
    solution: "React, TypeScript, Node.js, PostgreSQL",
    tech_stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    results: ["Visual hot-desk booking scheduler map", "Instant Stripe subscription invoice billing", "Automated check-in barcode keys"]
  },
  {
    title: "NeuraHub AI",
    live_url: "https://www.neurahub.app/",
    industry: "Agentic AI",
    challenge: "AI model aggregator and generative image prompt builder dashboard.",
    solution: "Vite, React, TailwindCSS, Replicate API integration",
    tech_stack: ["Vite", "React", "TailwindCSS", "Replicate API"],
    results: ["Dynamic stable diffusion prompt options", "Cloud image processing history feed", "Fast performance edge CDN caching"]
  },
  {
    title: "Pulse Portal",
    live_url: "https://pulse-portal.com/login",
    industry: "Healthcare / SaaS",
    challenge: "HIPAA-compliant health records portal for patient logins and diagnostic history.",
    solution: "React, Node.js, PostgreSQL, TailwindCSS",
    tech_stack: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
    results: ["Encrypted medical records storage", "Secure prescription history directory", "Automatic physician calendar sync"]
  },
  {
    title: "Kidilo Toys",
    live_url: "https://www.kidilo.com/",
    industry: "eCommerce",
    challenge: "UK baby toys and accessories eCommerce webstore with multi-category filters.",
    solution: "React, Express, Stripe API, TailwindCSS",
    tech_stack: ["React", "Express", "Stripe API", "TailwindCSS"],
    results: ["Dynamic drag-and-drop checkout portal", "Filtered categories catalog search", "Secure payment card processing"]
  },
  {
    title: "The HomeMade",
    live_url: "https://the-home-made.vercel.app/",
    industry: "eCommerce",
    challenge: "Home-cooked food subscription delivery scheduler with custom daily menu selections.",
    solution: "React, TypeScript, Node.js, TailwindCSS",
    tech_stack: ["React", "TypeScript", "Node.js", "TailwindCSS"],
    results: ["Interactive subscription calendar module", "Weekly custom menu dispatch log", "Automated driver route updates"]
  },
  {
    title: "BabyShop UK",
    live_url: "https://baby-shop-eta-weld.vercel.app/",
    industry: "eCommerce",
    challenge: "Mobile-responsive infant accessories and baby wear storefront with rapid checkout.",
    solution: "React, TypeScript, TailwindCSS",
    tech_stack: ["React", "TypeScript", "TailwindCSS"],
    results: ["Fast Speed Index optimization under 1.2s", "Visual product variants selector", "Sleek dark themed catalog view"]
  },
  {
    title: "AlHarmain Foods",
    live_url: "https://alharmain-dun.vercel.app/",
    industry: "eCommerce",
    challenge: "Pakistani wholesale spices and dry fruits delivery and sales order portal.",
    solution: "React, TypeScript, TailwindCSS",
    tech_stack: ["React", "TypeScript", "TailwindCSS"],
    results: ["Bulk quantities wholesale price builder", "SMS order confirmation dispatch", "COD logistics courier dispatch logs"]
  },
  {
    title: "Vytrion Tech",
    live_url: "https://vytrion-technologies.vercel.app/",
    industry: "SaaS",
    challenge: "Cloud infrastructure status monitor and automated performance metrics dashboard.",
    solution: "React, Chart.js, TailwindCSS",
    tech_stack: ["React", "Chart.js", "TailwindCSS"],
    results: ["Live CPU/RAM load percentage metrics", "Multi-server uptime response timeline", "Automatic alert configurations"]
  },
  {
    title: "Mazaadati Auctions",
    live_url: "https://mazaadati.com/#dashboard",
    industry: "Operations & On-Demand",
    challenge: "Middle-East high-end commercial asset auction and bidder dashboard.",
    solution: "Next.js, React, Socket.io, PostgreSQL",
    tech_stack: ["Next.js", "React", "Socket.io", "PostgreSQL"],
    results: ["WebSocket latency under 50ms bidding sync", "Multi-factor bidder authorization verification", "Real-time pricing countdown gauge"]
  },
  {
    title: "Enterprise POS & Inventory",
    live_url: "https://enterprise-pos-inventory-system.vercel.app/",
    industry: "SaaS / ERP",
    challenge: "Multi-warehouse real-time POS terminal and barcoded stock transfer catalog.",
    solution: "React, TypeScript, Node.js, PostgreSQL",
    tech_stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    results: ["Automated barcode log scanning", "Sales receipts PDF rendering updates", "Low stock automatic email warnings"]
  },
  {
    title: "EP-M Engineering",
    live_url: "https://www.ep-m.com/",
    industry: "Enterprise",
    challenge: "Industrial manufacturing parts catalog and global wholesale quotation engine.",
    solution: "React, Express, TailwindCSS",
    tech_stack: ["React", "Express", "TailwindCSS"],
    results: ["Dynamic machinery parts grid", "Wholesale quotation generator", "Secure inquiry contact dispatch"]
  },
  {
    title: "McLean Plastering & Painting",
    live_url: "https://mcleanplastering-painting.com.au/",
    industry: "Enterprise",
    challenge: "Australian construction contractor profile and service request booking portal.",
    solution: "React, Express, TailwindCSS",
    tech_stack: ["React", "Express", "TailwindCSS"],
    results: ["Work portfolio image gallery", "Instant booking quote estimate portal", "Dynamic geographic coverage mapping"]
  },
  {
    title: "Ithaca Crisis Center",
    live_url: "https://ithacacrisis.org/",
    industry: "Healthcare",
    challenge: "Emergency help registry, crisis counselor directory, and support hotline dashboard.",
    solution: "React, Express, PostgreSQL, TailwindCSS",
    tech_stack: ["React", "Express", "PostgreSQL", "TailwindCSS"],
    results: ["Anonymized database chat logging", "Counselor availability status map", "Crisis hotline SMS integration"]
  },
  {
    title: "Advanced Sistima",
    live_url: "https://advancedsistima.com/",
    industry: "Enterprise",
    challenge: "Industrial engineering pipeline controls and automated system monitoring panels.",
    solution: "React, Node.js, InfluxDB, TailwindCSS",
    tech_stack: ["React", "Node.js", "InfluxDB", "TailwindCSS"],
    results: ["Time-series pipeline temperature logs", "Critical safety warning notifications", "SCADA telemetry visual sync"]
  },
  {
    title: "Liberty Aerotech",
    live_url: "https://www.libertyaerotech.com/",
    industry: "Enterprise",
    challenge: "Aviation components manufacturer catalog and compliance verification directory.",
    solution: "React, Express, TailwindCSS",
    tech_stack: ["React", "Express", "TailwindCSS"],
    results: ["ISO/Aviation safety certificate directory", "Interactive technical drawings display", "Supply chain RFQ form"]
  },
  {
    title: "Top Traders Academy",
    live_url: "https://toptraders.pro/",
    industry: "FinTech",
    challenge: "Professional crypto and equity trading education community portal.",
    solution: "React, Node.js, TailwindCSS",
    tech_stack: ["React", "Node.js", "TailwindCSS"],
    results: ["Video course lesson progress updates", "Interactive trade logs journal", "Private Discord webhook community alert"]
  },
  {
    title: "Totus Software Services",
    live_url: "https://totus-ss.com/",
    industry: "SaaS",
    challenge: "Multi-tenant cloud infrastructure and automated software deployment pipeline monitor.",
    solution: "React, Express, TailwindCSS",
    tech_stack: ["React", "Express", "TailwindCSS"],
    results: ["Docker registry deployment tracking", "Live build errors pipeline check", "Server memory warning alerts"]
  },
  {
    title: "BookRecord Services",
    live_url: "https://bookrecordservices.com/",
    industry: "SaaS",
    challenge: "Online bookkeeper platform, ledger audits, and financial reporting dashboards.",
    solution: "React, Express, PostgreSQL, TailwindCSS",
    tech_stack: ["React", "Express", "PostgreSQL", "TailwindCSS"],
    results: ["Double-entry compliance ledger check", "Tax logs filing calculation engine", "Automated receipt scanner OCR logs"]
  },
  {
    title: "Thompson Clinic",
    live_url: "https://thompsonclinic.ca/",
    industry: "Healthcare",
    challenge: "Canadian private healthcare medical consultations and patient reminders registry.",
    solution: "React, Google Calendar API, TailwindCSS",
    tech_stack: ["React", "Google Calendar API", "TailwindCSS"],
    results: ["Encrypted medical appointment schedule", "Automated email prescription guides", "Fast visual intake forms"]
  },
  {
    title: "Saba Jojo Saloon",
    live_url: "https://saba-jojo-saloon.vercel.app/",
    industry: "Operations & On-Demand",
    challenge: "Beauty saloon appointment booking application and staff shift manager portal.",
    solution: "React, Firebase, TailwindCSS",
    tech_stack: ["React", "Firebase", "TailwindCSS"],
    results: ["Interactive service pricing grid", "Saloon staff calendar booking sync", "Direct WhatsApp reservation link"]
  },
  {
    title: "MedSpa Clinic",
    live_url: "https://medspa-frontend.vercel.app/",
    industry: "Healthcare / SaaS",
    challenge: "Cosmetic medicine treatments booking catalog and customer profile manager.",
    solution: "React, TypeScript, TailwindCSS",
    tech_stack: ["React", "TypeScript", "TailwindCSS"],
    results: ["Treatment price comparison board", "Patient intake registration cards", "SMS reminder notification logs"]
  }
];

// Fallback image url if Puppeteer fails
const FALLBACK_IMAGE_URL = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80";

/**
 * Capture full-page desktop screenshot of a URL and upload it to Cloudinary.
 * (DISABLED FOR VERCEL COMPATIBILITY - Returning Fallback Image)
 */
async function captureAndUploadScreenshot(url) {
  console.log(`[PUPPETEER DISABLED] Returning fallback image for: ${url}`);
  return FALLBACK_IMAGE_URL;
}

/**
 * Sync and populate the projects table with our automated dataset.
 */
async function runScreenshotAutomation(forceRefreshUrl = null) {
  console.log("Starting automated portfolio screenshot synchronization...");
  
  if (forceRefreshUrl) {
    // Single project refresh flow
    console.log(`[SYNC] Force refreshing screenshot for URL: ${forceRefreshUrl}`);
    const project = projectDataset.find(p => p.live_url === forceRefreshUrl);
    if (!project) {
      throw new Error(`Project with URL ${forceRefreshUrl} not found in dataset.`);
    }
    
    const cloudinaryUrl = await captureAndUploadScreenshot(forceRefreshUrl);
    
    // Check if it exists in DB
    const checkDb = await db.query("SELECT * FROM projects WHERE live_url = $1", [forceRefreshUrl]);
    
    if (checkDb.rows.length > 0) {
      // Update image
      const query = `
        UPDATE projects 
        SET image_url = $1, title = $2, industry = $3, challenge = $4, solution = $5, tech_stack = $6, results = $7 
        WHERE live_url = $8
        RETURNING *
      `;
      const values = [cloudinaryUrl, project.title, project.industry, project.challenge, project.solution, project.tech_stack, project.results, forceRefreshUrl];
      const result = await db.query(query, values);
      return result.rows[0];
    } else {
      // Insert
      const query = `
        INSERT INTO projects (title, live_url, industry, challenge, solution, tech_stack, results, image_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
      `;
      const values = [project.title, forceRefreshUrl, project.industry, project.challenge, project.solution, project.tech_stack, project.results, cloudinaryUrl];
      const result = await db.query(query, values);
      return result.rows[0];
    }
  }
  
  // Full database batch populate sync flow
  let processed = 0;
  let skipped = 0;
  
  for (const project of projectDataset) {
    try {
      // Avoid duplicate checks by live_url
      const checkDb = await db.query("SELECT * FROM projects WHERE live_url = $1", [project.live_url]);
      
      if (checkDb.rows.length > 0) {
        console.log(`[SYNC] Skipping existing project: ${project.title} (${project.live_url})`);
        skipped++;
        continue;
      }
      
      console.log(`\n--------------------------------------------`);
      console.log(`[SYNC] Processing new project: ${project.title} (${project.live_url})`);
      const cloudinaryUrl = await captureAndUploadScreenshot(project.live_url);
      
      const query = `
        INSERT INTO projects (title, live_url, industry, challenge, solution, tech_stack, results, image_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
      `;
      const values = [project.title, project.live_url, project.industry, project.challenge, project.solution, project.tech_stack, project.results, cloudinaryUrl];
      await db.query(query, values);
      
      processed++;
      // Sleep for 2 seconds between URL captures to prevent rate-limiting or excessive CPU usage
      await new Promise(r => setTimeout(r, 2000));
      
    } catch (e) {
      console.error(`[SYNC BATCH ERROR] Failed to process ${project.title}:`, e.message);
    }
  }
  
  console.log(`\n============================================`);
  console.log(`[SYNC COMPLETED] Processed: ${processed}, Skipped: ${skipped}, Total: ${projectDataset.length}`);
  return { processed, skipped, total: projectDataset.length };
}

module.exports = {
  runScreenshotAutomation,
  projectDataset
};
