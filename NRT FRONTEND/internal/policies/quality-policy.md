# NRT Content Quality Policy

## The Trust Engine Standard
All published assets must aim for a Trust Score of **85 or higher**.
Assets with a score below 85 will be flagged as "Knowledge Debt" and must be updated within the next sprint.

## Hard Blockers (Build Failures)
The CI/CD pipeline will strictly fail if:
1. The MDX frontmatter is malformed.
2. The Zod schema validation fails (e.g., missing required fields like `intent` or `slug`).
3. An internal link points to a non-existent asset (Broken Dependency).

## Freshness SLA
To prevent knowledge rot, content must be reviewed according to the following Service Level Agreement (SLA) based on category:
- **AI/Automation:** 90 Days
- **FinTech/Security:** 60 Days
- **ERP:** 180 Days

When the `nextReviewDate` passes, the status must be changed to `Needs Update`.
