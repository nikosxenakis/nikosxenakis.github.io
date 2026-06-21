import type Link from "@/types/Link";
import type WorkExperience from "@/types/WorkExperience";
import type Project from "@/types/Project";

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

// Single source of truth for the experience claim, so the summary and the Work
// Experience subtitle can never drift apart. Matches the figure used in the CV.
export const careerStartYear = 2016;
export const yearsOfExperience = new Date().getFullYear() - careerStartYear;

export const summary = `Senior Software Engineer with ${yearsOfExperience} years of experience building scalable, fault-tolerant full-stack systems using TypeScript, Node.js and Spring Boot. Fast learner with a strong record of leading projects, improving architecture, and delivering high-impact features. Passionate about clean design, automation, and developing future-ready products.`;

export const work: WorkExperience[] = [
  {
    role: "Senior AI Engineer",
    company: "Mentiora.ai",
    companyUrl: "https://mentiora.ai",
    location: "Zürich, CH",
    date: "Jun 2026 - Present",
    description: [
      `Senior engineer responsible for the benchmarking product, owning the lifecycle from architecture through delivery.`,
      `Architecting an LLM evaluation platform leveraging LLMs-as-judges for automated output scoring, prompt and model optimisation across client deployments.`,
      `Leading client communication and requirements, translating needs into technical specifications.`,
    ],
    technologies: "TypeScript,LLMs,GCP,React",
    showOnWebsite: true,
    logo: "mentiora.png",
  },
  {
    role: "Software Engineer",
    company: "DFINITY",
    companyUrl: "https://dfinity.org",
    location: "Zürich, CH",
    date: "Feb 2026 - May 2026",
    description: [
      `Contributing to open-source SDK TypeScript libraries for the ICP and development for cloud engine products.`,
    ],
    technologies: "TypeScript,JavaScript,React,ICP",
    showOnWebsite: true,
    logo: "dfinity.png",
  },
  {
    role: "Senior Software Engineer",
    roleShort: "Sr. Software Engineer",
    format: "contractor",
    company: "Sphynx",
    companyUrl: "https://www.sphynx.ch",
    location: "Zürich, CH",
    date: "Feb 2024 - Sep 2025",
    description: [
      `Architecting and developing an Incident Response Automation Tool using Java, Spring Boot and PostgreSQL, ensuring high availability, scalability, and reliability for cybersecurity critical workflows.`,
      `Managing the SecOPERA EU project representing Sphynx, collaborating with other 10 EU organisations.`,
    ],
    technologies: "Java,Spring Boot,Node.js,PostgreSQL,Distributed Systems",
    showOnWebsite: true,
    logo: "sphynx.png",
  },
  {
    role: "Senior Software Engineer",
    roleShort: "Sr. Software Engineer",
    company: "Welbot",
    companyUrl: "https://welbot.io",
    location: "Edinburgh, UK",
    date: "Nov 2022 - Feb 2024",
    description: [
      `Engineered well-being products tailored for enterprises with Node.js, TypeScript, React and AWS, used daily by 20K users.`,
      `Established SDLC processes and implemented CI/CD pipelines for the products, enabling weekly releases.`,
      `Automated infrastructure deployment with Terraform, ensuring scalability, isolation, and sub-5-minute releases.`,
      `Led successfully 2 major product releases over 1 year, migrating to new infrastructure and codebase.`,
    ],
    technologies: "TypeScript,Node.js,React,Terraform,GitHub CI/CD,ElectronJS,AWS",
    showOnWebsite: true,
    logo: "welbot.png",
  },
  {
    role: "Senior Software Engineer",
    roleShort: "Sr. Software Engineer",
    company: "SeeByte",
    companyUrl: "http://www.seebyte.com/",
    location: "Edinburgh, UK",
    date: "Aug 2021 - Nov 2022",
    description: [
      `Directed CI/CD initiative, implementing Jenkins pipelines and integrating approximately 80 projects.`,
      `Project lead consistently delivering 100% of the projects ahead of schedule.`,
      `Led projects, delivering 100% of them ahead of schedule`,
      // `Mentoring 2 junior engineers.`,
    ],
    technologies: ".NET,Java,PostgreSQL,Jenkins",
    showOnWebsite: true,
    logo: "seebyte.png",
  },
  {
    role: "Software Engineer",
    company: "SeeByte",
    companyUrl: "http://www.seebyte.com/",
    location: "Edinburgh, UK",
    date: "Sep 2019 - Aug 2021",
    description: [
      `Contributed to the development of Mission Planning and Analysis software, supporting 6 Unmanned Underwater Vehicle (UUV) systems from various vendors.`,
      `Demonstrated products in real-world operational scenarios, resulting at 100% contracts extension.`,
      `Rapidly promoted to the senior level in less than 2 years, becoming the fastest-promotion in the company.`,
    ],
    // technologies: '.NET,Java,Jenkins',
    showOnWebsite: true,
    logo: "seebyte.png",
  },
  {
    role: "Software Engineer Intern",
    format: "part-time",
    company: "Information Services of UoE",
    companyUrl: "https://www.ed.ac.uk/information-services",
    location: "Edinburgh, UK",
    date: "April 2019 - June 2019",
    description: [
      `Created an XML-based publishing workflow, including tools evaluation, customization, integration, and workflow establishment for academic journals.`,
    ],
    showOnWebsite: false,
    logo: "uoe.jpg",
  },
  {
    role: "Software Engineer",
    company: "Wings",
    companyUrl: "http://wings-ict-solutions.eu",
    location: "Athens, Greece",
    date: "April 2017 - Sep 2018",
    description: [
      `Migrated the bank’s CRM legacy code with thousands of lines of code to Angular.`,
      `Led and delivered a customer application management bank project, working in a team of three engineers.`,
    ],
    technologies: ".NET,Typescript,Angular",
    showOnWebsite: true,
    logo: "wings.png",
  },
  {
    role: "Teaching Assistant",
    company: "Computer Science Department, University of Crete",
    companyShort: "CSD, UoC",
    companyUrl: "http://www.csd.uoc.gr",
    location: "Heraklion, Greece",
    date: "Sep 2015 - Jan 2016",
    description: [
      `Assisted in teaching the "Introduction to Programming" course, by conducting lab sessions with approximately 20 students.`,
      `Selected for "TheProfit" program, allowing top 10 performing students to support academic work.`,
    ],
    showOnWebsite: false,
    logo: "uoc.jpg",
  },
  {
    role: "Undergraduate Research Intern",
    roleShort: "Research Intern",
    company: "FORTH (Research Centre)",
    companyUrl: "https://www.forth.gr",
    location: "Heraklion, Greece",
    date: "Jun 2015 - Sep 2015",
    description: [
      `Conducted research in Big Data Systems using acceleration devices (GPUs, FPGAs).`,
    ],
    technologies: "HDFS,MapReduce,Spark,CUDA",
    showOnWebsite: false,
    logo: "forth.png",
  },
];

export const education = [
  {
    role: "MSc in HPC with Data Science",
    // roleShort: 'MSc in HPC with Data Science',
    company: "University of Edinburgh",
    companyShort: "UoE",
    companyUrl:
      "https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2019&id=871",
    location: "Edinburgh, UK",
    date: "Sep 2018 - Sep 2019",
    // grade: "75% (Distinction)",
    grade: "Distinction",
    dissertation:
      "Parallelisation of frame processing for Optical Coherence Tomography for Optos (85%).",
    scholarship:
      "Awarded the Best Academic Performance Award as the top graduate with highest grades in the MSc program. Awarded the Highly Skilled Workforce Scholarship for academic excellence covering MSc tuition.",
    showOnWebsite: true,
    logo: "uoe.jpg",
  },
  {
    role: "Bachelor in Computer Science",
    company: "University of Crete",
    companyShort: "UoC",
    companyUrl: "https://www.csd.uoc.gr",
    location: "Heraklion, Greece",
    date: "Sep 2012 - Jul 2016",
    // grade: "84% (First-Class Honours)",
    // grade: "First-Class Honours (top 3%)",
    grade: "First-Class Honours",
    dissertation:
      "ICE Editor is a visual programming language for end-user programmers for IOT devices. ICE Editor is a web client application written in JavaScript.",
    scholarship:
      "Awarded the `Highly Skilled Workforce Scholarship`, covering full BSc tuition. Awarded the Stelios Orfanoudakis Scholarship for three years as a top-three BSc student annually.",
    showOnWebsite: true,
    logo: "uoc.jpg",
  },
  {
    role: "IT Essentials: PC Hardware and Software",
    roleShort: "IT Essentials",
    company: "Cisco Network Academy",
    location: "Chania, Greece",
    date: "Jun 2011 - Aug 2011",
    description:
      "IT Essentials covers fundamental computer skills. It includes labs that provide practical experience using simulation tools.",
    showOnWebsite: false,
  },
];

export const projects: Project[] = [
  {
    name: "Home Server",
    date: "2025-2026",
    imageUrl: "/assets/images/projects/home-server.png",
    description:
      "Low-power HP Elitedesk running Proxmox VE, hosting multiple VMs and LXC containers. Services include Traefik as a reverse proxy, Wireguard VPN for secure remote access, SMB for file sharing, and ZFS for reliable storage.",
    descriptionShort:
      "HP Elitedesk home server on Proxmox VE with Traefik, VMs, LXC containers, Wireguard VPN, SMB, and ZFS storage.",
    technologies: "Proxmox,Traefik,Wireguard,SMB,ZFS,self-hosted,LXC",
  },
  {
    name: "ImagInLexis",
    date: "2016",
    githubUrl: "https://github.com/nikosxenakis/ImagInLexis",
    imageUrl: "/assets/images/projects/imaginlexis.png",
    description: `Desktop application for a bachelor's thesis focused on Logotherapy. The application primarily enhances speech therapy intervention plans by incorporating a series of tests for patients to undertake. Designed with a gamified approach, the application caters specifically to children, making the therapeutic process engaging and interactive.`,
    descriptionShort: `Desktop application for a bachelor's thesis focused on Logotherapy.`,
    technologies: "Java,JavaFX",
  },
  {
    name: "ICE Editor",
    date: "2016",
    url: "https://nikosxenakis.github.io/ICE_Editor/",
    githubUrl: "https://github.com/nikosxenakis/ICE_Editor",
    imageUrl: "/assets/images/projects/ice-editor.png",
    description: `A web-based platform designed for end-users to craft straightforward applets for IoT (Internet Of Things) devices. This intuitive editor minimizes both compile and runtime errors, offering a drag-and-drop interface alongside value editing capabilities. It features a versatile API, allowing users to swiftly develop programs using Javascript or by defining them in JSON files.`,
    descriptionShort: `A web-based platform for creating IoT applets.`,
    technologies: "HTML/CSS/JS,Canvas.js",
  },
  {
    name: "1942",
    date: "2015 - 2016",
    url: "https://kavros.github.io/1942-Arcade-Game",
    // videoUrl: "https://www.youtube.com/watch?v=DqQoP_M39lQ",
    githubUrl: "https://github.com/kavros/1942-Arcade-Game",
    imageUrl: "/assets/images/projects/1942.png",
    description: `1942, a beloved retro video game from 1984, has been reimagined in this project. Utilizing the original sprite sheets, the game has been recreated with the C++ programming language, leveraging the SDL cross-platform software development library.`,
    descriptionShort: `A reimagining of the classic 1942 video game.`,
    technologies: "C++,SDL",
  },
  {
    name: "Recipes",
    date: "2024 - Present",
    url: "https://recipes-nikosxenakis.vercel.app/",
    githubUrl: "https://github.com/nikosxenakis/recipes",
    isPrivate: true,
    imageUrl: "/assets/images/projects/recipes.svg",
    description: `A recipe website to manage and view cooking recipes, deployed on Vercel.`,
    descriptionShort: `A recipe website to manage and view cooking recipes.`,
    technologies: "React,TypeScript,Node.js,Vercel",
  },
];

export const languages = [
  {
    name: "English",
    level: "Proficient",
    stars: 5,
  },
  {
    name: "Greek",
    level: "Native",
    stars: 5,
  },
  {
    name: "German",
    level: "Beginner (A2)",
    stars: 1,
  },
];

export const interests = [
  {
    name: "Chess",
    emoji: "♟️",
  },
  {
    name: "Dancing",
    emoji: "🕺🏽",
  },
  {
    name: "Gym",
    emoji: "🏋️",
  },
  {
    name: "Cycling",
    emoji: "🚴",
  },
];

export const skills = [
  {
    name: "Java, Spring Boot, .NET",
    level: "Proficient",
    width: "100%",
  },
  {
    name: "Webstack (HTML/CSS), Typescript, Node.js, React",
    level: "Proficient",
    width: "100%",
  },
  {
    name: "CI/CD: Jenkins, GitHub CI/CD",
    level: "Proficient",
    width: "95%",
  },
  {
    name: "Testing: JUnit, Jest, TDD, SonarQube",
    level: "Advanced",
    width: "90%",
  },
  {
    name: "Cloud: AWS, Terraform",
    level: "Advanced",
    width: "85%",
  },
  {
    name: "DBMS: PostgreSQL, DynamoDB, MongoDB",
    level: "Advanced",
    width: "80%",
  },
];
