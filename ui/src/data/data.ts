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

export const locationMaps =
  "https://www.google.co.uk/maps/place/%CE%96%CF%85%CF%81%CE%AF%CF%87%CE%B7/@47.3774122,8.4543354,12z/data=!4m15!1m8!3m7!1s0x47900b9749bea219:0xe66e8df1e71fdc03!2zzpbPhc-Bzq_Ph863!3b1!8m2!3d47.3768866!4d8.541694!16zL20vMDg5NjY!3m5!1s0x47900b9749bea219:0xe66e8df1e71fdc03!8m2!3d47.3768866!4d8.541694!16zL20vMDg5NjY?entry=ttu";
export const summary =
  "Senior Software Engineer with 8+ years of experience building scalable, fault-tolerant full-stack systems using TypeScript, Node.js and Spring Boot. Fast learner with a strong record of leading projects, improving architecture, and delivering high-impact features. Passionate about clean design, automation, and developing future-ready products.";

export const work: WorkExperience[] = [
  {
    role: "Senior Software Engineer",
    roleShort: "Sr. Software Engineer",
    format: "contractor",
    company: "Sphynx",
    companyUrl: "https://www.sphynx.ch",
    location: "Zürich, CH",
    date: "Fed 2024 - Sep 2025",
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
    date: "Sept 2019 - Aug 2021",
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
      "Awarded the `Highly Skilled Workforce Scholarship`, covering full MSc tuition. Awarded the Stelios Orfanoudakis Scholarship for three years as a top-three BSc student annually.",
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
    name: "Georgioupolis Transfers",
    date: "2017",
    url: "https://georgioupolis-taxi.firebaseapp.com/",
    imageUrl: "https://georgioupolis-taxi.firebaseapp.com/assets/images/logo.jpg",
    description: "Website for booking transfer and tours in Crete, Greece.",
    technologies: "Typescript,Angular,Node.js",
  },
  {
    name: "ImagInLexis",
    date: "June 2016 - August 2016",
    url: "https://github.com/nikosxenakis/ImagInLexis",
    imageUrl:
      "https://github.com/nikosxenakis/ImagInLexis/blob/master/src/main/resources/com/xenakis/images/logo/imagInLexisLogo.png?raw=true",
    description: `Hired to create a desktop application for a bachelor's thesis focused on Logotherapy. The application primarily enhances speech therapy intervention plans by incorporating a series of tests for patients to undertake. Designed with a gamified approach, the application caters specifically to children, making the therapeutic process engaging and interactive.`,
    descriptionShort: `Hired to create a desktop application for a bachelor's thesis focused on Logotherapy.`,
    technologies: "Java,JavaFX",
  },
  {
    name: "ICE Editor",
    date: "March 2016 - June 2016",
    url: "https://github.com/nikosxenakis/ICE_Editor",
    imageUrl:
      "https://github.com/nikosxenakis/ICE_Editor/blob/master/thesis%20report/images/index.jpg?raw=true",
    description: `A web-based platform designed for end-users to craft straightforward applets for IoT (Internet Of Things) devices. This intuitive editor minimizes both compile and runtime errors, offering a drag-and-drop interface alongside value editing capabilities. It features a versatile API, allowing users to swiftly develop programs using Javascript or by defining them in JSON files.`,
    descriptionShort: `A web-based platform for creating IoT applets.`,
    technologies: "HTML/CSS/JS,Canvas.js",
  },
  {
    name: "1942",
    date: "November 2015 - January 2016",
    url: "https://www.youtube.com/watch?v=kdICR49vbvg",
    imageUrl:
      "https://play-lh.googleusercontent.com/nEBtB95_mcjS5T2g9DHVAASuEVetJeHh5S-pH-yujc4A3vtULqhxZwIlYy-eoOvZnvc=w526-h296-rw",
    description: `1942, a beloved retro video game from 1984, has been reimagined in this project. Utilizing the original sprite sheets, the game has been recreated with the C++ programming language, leveraging the SDL cross-platform software development library.`,
    descriptionShort: `A reimagining of the classic 1942 video game.`,
    technologies: "C++,SDL",
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
    name: "Latin and Cretan dancing",
    emoji: "🕺🏽",
  },
  {
    name: "Weight lifting",
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
