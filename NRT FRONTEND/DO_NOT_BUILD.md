# DO NOT BUILD (Anti-Patterns & Rejected Features)

This document outlines features and architectural patterns that have been intentionally rejected to prevent scope creep, technical debt, and dilution of our platform's authority.

## 1. Do Not Build Duplicate Calculators
**Reason:** Building separate React components for every calculator (e.g., `ERP-ROI`, `Logistics-ROI`) creates massive UI technical debt.
**Reconsider When:** Never. Use the modular JSON Intelligence Database to feed data into a single, dynamic `<ROICalculator />` component instead.

## 2. Do Not Publish Unreviewed AI-Generated Content
**Reason:** Generative Engine Optimization (GEO) heavily penalizes websites with generic, hallucinated fluff. It destroys our Trust Score.
**Reconsider When:** Only if an internal 'AI Agent' can be bound strictly to our local Knowledge Graph and cite internal evidence for every claim. Even then, human review is mandatory.

## 3. Do Not Add Pages Without Graph Integration
**Reason:** Creating isolated `.md` or `.tsx` pages that are not indexed by `build-graph.js` creates orphan content that users and AI models cannot discover.
**Reconsider When:** Never. Every asset must go through the Knowledge Graph.

## 4. Do Not Create Orphan Content
**Reason:** If an article does not link to a related Problem, Industry, or Case Study, it provides a dead-end user experience.
**Reconsider When:** Never. The Content Production System (CPS) will flag orphan content as Knowledge Debt.

## 5. Do Not Add Features Without a Business KPI
**Reason:** Engineering time is expensive. "Cool" features that do not drive Authority Coverage Index (ACI) or Conversion (Leads) waste resources.
**Reconsider When:** Only if the feature directly contributes to one of the 7 core executive metrics defined in the `VISION.md`.

## 6. Do Not Use Client-Side Parsing for the Graph
**Reason:** Parsing 500+ MDX files in the browser during runtime completely destroys load performance and SEO.
**Reconsider When:** Never. The Knowledge Graph must ALWAYS be generated at build-time.
