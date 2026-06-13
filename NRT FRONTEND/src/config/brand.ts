/**
 * Centralized founder & brand identity constants.
 * To swap the founder photo: place the file in /public and update imageUrl.
 */
export const FOUNDER = {
  name: "Ahsan Khan",
  title: "Founder & Lead Architect",
  linkedInUrl: "https://www.linkedin.com/in/muhammad-ahsan-khan-founder-61a51032a",
  /** Replace with "/founder-ahsan-khan.jpg" when the professional photo is ready */
  imageUrl: "/ceo.png",
} as const;

export const COMPANY_SOCIAL = {
  linkedInCompany: "https://www.linkedin.com/company/nextrevolutiontech",
  instagram: "https://www.instagram.com/nextrevolutiontech",
  github: "https://github.com/nextrevolutiontech-maker",
} as const;
