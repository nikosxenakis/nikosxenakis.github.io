export default interface Project {
  name: string;
  date: string;
  url?: string;
  githubUrl?: string;
  /** Private repo: keep the URL for reference, but show no GitHub link, since
   *  visitors would only get a 404. */
  isPrivate?: boolean;
  imageUrl: string;
  descriptionShort?: string;
  description?: string;
  technologies: string;
}
