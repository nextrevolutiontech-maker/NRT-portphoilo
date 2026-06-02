/**
 * Centralized founder & brand identity constants.
 * To swap the founder photo: place the file in /public and update imageUrl.
 */
export const FOUNDER = {
  name: "Ahsan Khan",
  title: "Founder & Lead Architect",
  linkedInUrl: "https://www.linkedin.com/in/muhammad-ahsan-khan-founder-61a51032a",
  /** Replace with "/founder-ahsan-khan.jpg" when the professional photo is ready */
  imageUrl:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
} as const;

export const COMPANY_SOCIAL = {
  linkedInCompany: "https://www.linkedin.com/company/nextrevolutiontech",
  instagram: "https://www.instagram.com/nextrevolutiontech",
  github: "https://github.com/nextrevolutiontech-maker",
} as const;
