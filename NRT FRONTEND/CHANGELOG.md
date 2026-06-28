# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-06-29

### Added
- **Content Engine:** Full MDX and Zod schema parsing for 8 enterprise content types (Articles, Industries, Problems, Case Studies, Reports, Frameworks, Templates, Academy).
- **Knowledge Graph:** Build-time generation of `knowledge-graph.json`, `search-index.json`, and `recommendation-index.json` to map relationships across the platform.
- **Intelligence Engine:** Modular JSON databases (`/data/intelligence`) housing enterprise KPIs, Benchmarks, and Costs.
- **Trust Engine:** Automatic calculation of Trust Scores based on the presence of Evidence, Frameworks, Case Studies, and Diagrams.
- **Content Production System (CPS):** Executive Dashboard (`/admin/content-ops`) featuring the Asset Quality Grader (A+ to F).
- **Governance Engine:** Strict schema validation for Ownership, Approvals, and Maturity Levels (Basic to Flagship).
- **Knowledge Debt Tracker:** Automated identification of outdated articles, broken references, and low-trust assets without breaking production builds.
- **Authority Coverage Index (ACI):** Real-time calculation of industry dominance based on the number of Flagship/Authority assets published.
- **Interactive MDX Components:** `<ExploreTopic />` for semantic recommendations and `<ROICalculator />` for dynamic business value generation.
- **Enterprise Documentation:** `VISION.md`, `MANIFESTO.md`, `DO_NOT_BUILD.md`, `DECISION_LOG.md`, `ROADMAP.md` added to root.

### Changed
- Shifted all generated build artifacts (`knowledge-graph.json`, `knowledge-debt.json`, etc.) from `/src/data/generated` to root `/.cache` for CI/CD standard compliance.
- Converted all legacy inline React related content links to semantic Graph-driven links.

### Removed
- Archived all legacy `.cjs` theme manipulation scripts to `/archive/legacy-scripts`.
- Purged all temporary build `.log` files from the root directory.
- Deprecated the `/guidelines` directory in favor of the structured `/internal` Governance hierarchy.

---
*Note: As per the Architecture Freeze decision on 2026-06-29, no further minor features (1.x.0) will be built until the business metrics defined in the ACI are met.*
