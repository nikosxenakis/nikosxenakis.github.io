interface Link {
  short: string;
  link: string;
}

interface WorkExperience {
  role: string;
  roleShort?: string;
  format?: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  technologies?: string;
}

interface Education {
  role: string;
  company: string;
  location: string;
  date: string;
  grade: string;
  dissertation: string;
  scholarship: string;
}

interface Project {
  name: string;
  date: string;
  description?: string;
  technologies: string;
}

export const name = "Nikolaos Xenakis";
export const title = "Senior Software Engineer";
export const location = "Zürich, CH";
export const nationality = "Greece, EU";

export const email: Link = {
  short: "nikosxenakis94@gmail.com",
  link: "mailto:nikosxenakis94@gmail.com",
};

export const linkedIn: Link = {
  short: "linkedin.com/in/nikosxenakis",
  link: "https://www.linkedin.com/in/nikosxenakis",
};

export const gitHub: Link = {
  short: "github.com/nikosxenakis",
  link: "https://github.com/nikosxenakis",
};

export const stackOverflow: Link = {
  short: "nikos-xenakis",
  link: "https://stackoverflow.com/users/8756896/nikos-xenakis",
};

export const website: Link = {
  short: "nikosxenakis.github.io",
  link: "https://nikosxenakis.github.io",
};

export const summary =
  "Senior Software Engineer with 10 years of experience building scalable, fault-tolerant full-stack systems using TypeScript, Node.js and Spring Boot. Fast learner with a strong record of leading projects, improving architecture, and delivering high-impact features. Passionate about clean design, automation, and developing future-ready products.";

export const work: WorkExperience[] = [
  {
    role: "Senior AI Engineer",
    company: "Mentiora.ai",
    location: "Zürich, CH",
    date: "Jun 2026 - Present",
    description: [
      "Senior engineer responsible for the benchmarking product, owning the lifecycle from architecture through delivery.",
      "Architecting an LLM evaluation platform leveraging LLMs-as-judges for automated output scoring, prompt and model optimisation across client deployments.",
      "Leading client communication and requirements, translating needs into technical specifications.",
    ],
    technologies: "TypeScript,LLMs,GCP,React",
  },
  {
    role: "Software Engineer",
    company: "DFINITY",
    location: "Zürich, CH",
    date: "Feb 2026 - May 2026",
    description: [
      "Contributing to open-source SDK TypeScript libraries for the ICP and development for cloud engine products.",
    ],
    technologies: "TypeScript,JavaScript,React,ICP",
  },
  {
    role: "Senior Software Engineer",
    format: "contractor",
    company: "Sphynx",
    location: "Zürich, CH",
    date: "Feb 2024 - Sep 2025",
    description: [
      "Architecting and developing an Incident Response Automation Tool using Java, Spring Boot and PostgreSQL, ensuring high availability, scalability, and reliability for cybersecurity critical workflows.",
      "Managing the SecOPERA EU project representing Sphynx, collaborating with other 10 EU organisations.",
    ],
    technologies: "Java,Spring Boot,Node.js,PostgreSQL,Distributed Systems",
  },
  {
    role: "Senior Software Engineer",
    company: "Welbot",
    location: "Edinburgh, UK",
    date: "Nov 2022 - Feb 2024",
    description: [
      "Engineered well-being products tailored for enterprises with Node.js, TypeScript, React and AWS, used daily by 20K users.",
      "Established SDLC processes and implemented CI/CD pipelines for the products, enabling weekly releases.",
      "Automated infrastructure deployment with Terraform, ensuring scalability, isolation, and sub-5-minute releases.",
      "Led successfully 2 major product releases over 1 year, migrating to new infrastructure and codebase.",
    ],
    technologies: "TypeScript,Node.js,React,Terraform,GitHub CI/CD,ElectronJS,AWS",
  },
  {
    role: "Senior Software Engineer",
    company: "SeeByte",
    location: "Edinburgh, UK",
    date: "Aug 2021 - Nov 2022",
    description: [
      "Directed CI/CD initiative, implementing Jenkins pipelines and integrating approximately 80 projects.",
      "Project lead consistently delivering 100% of the projects ahead of schedule.",
    ],
    technologies: ".NET,Java,PostgreSQL,Jenkins",
  },
  {
    role: "Software Engineer",
    company: "SeeByte",
    location: "Edinburgh, UK",
    date: "Sept 2019 - Aug 2021",
    description: [
      "Contributed to the development of Mission Planning and Analysis software, supporting 6 Unmanned Underwater Vehicle (UUV) systems from various vendors.",
      "Demonstrated products in real-world operational scenarios, resulting at 100% contracts extension.",
      "Rapidly promoted to the senior level in less than 2 years, becoming the fastest-promotion in the company.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Wings",
    location: "Athens, Greece",
    date: "April 2017 - Sep 2018",
    description: [
      "Migrated the bank's CRM legacy code with thousands of lines of code to Angular.",
      "Led and delivered a customer application management bank project, working in a team of three engineers.",
    ],
    technologies: ".NET,Typescript,Angular",
  },
];

export const education: Education[] = [
  {
    role: "MSc in HPC with Data Science",
    company: "University of Edinburgh",
    location: "Edinburgh, UK",
    date: "Sep 2018 - Sep 2019",
    grade: "Distinction",
    dissertation:
      "Parallelisation of frame processing for Optical Coherence Tomography for Optos (85%).",
    scholarship:
      "Awarded the Best Academic Performance Award as the top graduate with highest grades in the MSc program. Awarded the Highly Skilled Workforce Scholarship for academic excellence covering MSc tuition.",
  },
  {
    role: "Bachelor in Computer Science",
    company: "University of Crete",
    location: "Heraklion, Greece",
    date: "Sep 2012 - Jul 2016",
    grade: "First-Class Honours",
    dissertation:
      "ICE Editor is a visual programming language for end-user programmers for IOT devices. ICE Editor is a web client application written in JavaScript.",
    scholarship:
      "Awarded the Highly Skilled Workforce Scholarship, covering full MSc tuition. Awarded the Stelios Orfanoudakis Scholarship for three years as a top-three BSc student annually.",
  },
];

export const projects: Project[] = [
  {
    name: "Home Server",
    date: "2025-2026",
    description:
      "Low-power HP Elitedesk running Proxmox VE, hosting multiple VMs and LXC containers. Services include Traefik as a reverse proxy, Wireguard VPN for secure remote access, SMB for file sharing, and ZFS for reliable storage.",
    technologies: "Proxmox,Traefik,Wireguard,SMB,ZFS,self-hosted,LXC",
  },
  {
    name: "ImagInLexis",
    date: "2016",
    description:
      "Desktop application for a bachelor's thesis focused on Logotherapy. The application primarily enhances speech therapy intervention plans by incorporating a series of tests for patients to undertake.",
    technologies: "Java,JavaFX",
  },
  {
    name: "ICE Editor",
    date: "2016",
    description:
      "A web-based platform designed for end-users to craft straightforward applets for IoT devices. This intuitive editor minimizes both compile and runtime errors, offering a drag-and-drop interface alongside value editing capabilities.",
    technologies: "HTML/CSS/JS,Canvas.js",
  },
  {
    name: "Recipes",
    date: "2024 - Present",
    description: "A recipe website to manage and view cooking recipes, deployed on Vercel.",
    technologies: "React,TypeScript,Node.js,Vercel",
  },
];

export const languages = [
  { name: "English", level: "Proficient" },
  { name: "Greek", level: "Native" },
  { name: "German", level: "Beginner (A2)" },
];

export const interests = [
  { name: "Chess" },
  { name: "Dancing" },
  { name: "Gym" },
  { name: "Cycling" },
];

export const skills = [
  { name: "Java, Spring Boot, .NET", level: "Proficient" },
  { name: "Webstack (HTML/CSS), Typescript, Node.js, React", level: "Proficient" },
  { name: "CI/CD: Jenkins, GitHub CI/CD", level: "Proficient" },
  { name: "Testing: JUnit, Jest, TDD, SonarQube", level: "Advanced" },
  { name: "Cloud: AWS, Terraform", level: "Advanced" },
  { name: "DBMS: PostgreSQL, DynamoDB, MongoDB", level: "Advanced" },
];
