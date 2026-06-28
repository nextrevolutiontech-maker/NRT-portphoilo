import { z } from 'zod';

export const ContentStatusSchema = z.enum(['Draft', 'Review', 'Published', 'Archived']);

export const BaseMetadataSchema = z.object({
  id: z.string().min(1, "ID is required"),
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(10, "Description should be at least 10 characters"),
  
  // SEO & AI Optimization
  canonical: z.string().url().optional(),
  robots: z.string().default('index, follow'),
  featured: z.boolean().default(false),
  aiSummary: z.string().optional(),
  keyTakeaways: z.array(z.string()).default([]),
  faqSchema: z.boolean().default(false),
  breadcrumb: z.string().optional(),
  
  // Categorization & Taxonomy
  cluster: z.enum(['ERP', 'AI Automation', 'FinTech', 'Custom Software', 'Business Transformation', 'Technology']).optional(),
  contentStage: z.enum(['Awareness', 'Consideration', 'Decision']).optional(),
  intent: z.enum(['Learn', 'Compare', 'Evaluate', 'Buy', 'Implement']).optional(),
  industry: z.array(z.string()).default([]),
  service: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  persona: z.array(z.string()).default([]),
  targetAudience: z.array(z.string()).default([]),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Enterprise']).optional(),
  businessSize: z.enum(['Startup', 'SMB', 'Enterprise']).optional(),
  country: z.array(z.string()).default([]),
  
  // Content Logic & Business Problems
  painPoints: z.array(z.string()).default([]),
  solutions: z.array(z.string()).default([]),
  symptoms: z.array(z.string()).default([]),
  rootCauses: z.array(z.string()).default([]),
  roi: z.array(z.string()).default([]),
  cta: z.string().optional(),
  
  // Analytics, Relations & Evidence
  estimatedReadTime: z.number().optional(),
  trustScore: z.number().optional(),
  
  // Governance Engine
  owner: z.string().optional(),
  reviewer: z.string().optional(),
  approver: z.string().optional(),
  department: z.string().optional(),
  maturityLevel: z.enum(['Basic', 'Validated', 'Evidence Backed', 'Authority', 'Flagship']).default('Basic'),
  related: z.array(z.string()).default([]),
  prerequisites: z.array(z.string()).default([]),
  nextReading: z.array(z.string()).default([]),
  evidence: z.array(
    z.object({
      claim: z.string(),
      source: z.string(),
      type: z.enum(['Internal Case Study', 'Customer Feedback', 'Public Standard', 'Industry Report', 'Original Research', 'Benchmark', 'Government Data']).default('Industry Report'),
      confidence: z.enum(['High', 'Medium', 'Low'])
    })
  ).default([]),
  relatedCourse: z.array(z.string()).default([]),
  relatedResource: z.array(z.string()).default([]),
  relatedDemo: z.array(z.string()).default([]),
  
  // Version Control, Freshness & Publishing
  status: z.enum(['Draft', 'Review', 'Approved', 'Published', 'Needs Update', 'Archived']).default('Draft'),
  version: z.string().default('v1'),
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional(),
  lastReviewed: z.string().optional(),
  nextReviewDate: z.string().optional(),
  author: z.string().optional(),
});

export type BaseMetadata = z.infer<typeof BaseMetadataSchema>;

export const IndustryPageSchema = BaseMetadataSchema.extend({
  type: z.literal('industry'),
});

export const BusinessProblemSchema = BaseMetadataSchema.extend({
  type: z.literal('problem'),
});

export const AcademyCourseSchema = BaseMetadataSchema.extend({
  type: z.literal('course'),
  track: z.string(),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced'])
});

export const CaseStudySchema = BaseMetadataSchema.extend({
  type: z.literal('casestudy'),
  client: z.string()
});

export const ReportSchema = BaseMetadataSchema.extend({
  type: z.literal('report'),
});

export const FrameworkSchema = BaseMetadataSchema.extend({
  type: z.literal('framework'),
});

export const TemplateSchema = BaseMetadataSchema.extend({
  type: z.literal('template'),
});

export const ArticleSchema = BaseMetadataSchema.extend({
  type: z.literal('article'),
});

export const DocSchema = BaseMetadataSchema.extend({
  type: z.literal('doc'),
});

// Union of all allowed frontmatter schemas
export const ContentSchema = z.discriminatedUnion('type', [
  ArticleSchema,
  IndustryPageSchema,
  BusinessProblemSchema,
  AcademyCourseSchema,
  CaseStudySchema,
  ReportSchema,
  FrameworkSchema,
  TemplateSchema,
  DocSchema
]);
