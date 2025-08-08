export default interface WorkExperience {
  role: string;
  roleShort?: string;
  format?: "full-time" | "part-time" | "contractor";
  company: string;
  companyShort?: string;
  companyUrl?: string;
  location: string;
  date: string;
  description: string[];
  technologies?: string;
  forCV?: boolean; // If true, this will be included in the CV
  logo: string;
}
