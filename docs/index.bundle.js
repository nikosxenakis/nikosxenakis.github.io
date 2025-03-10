/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1902:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9471);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/TabContainer.js + 1 modules
var TabContainer = __webpack_require__(3461);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(708);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(494);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/OverlayTrigger.js + 5 modules
var OverlayTrigger = __webpack_require__(5422);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Tooltip.js
var Tooltip = __webpack_require__(6835);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Badge.js
var Badge = __webpack_require__(2347);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(8378);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(7875);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(6188);
;// ./src/data.ts
const data_name = 'Xenakis Nikolaos';
const title = 'Senior Software Engineer';
const data_location = 'Zurich, Switzerland';
const nationality = 'Greece, EU';
const email = {
    short: 'nikosxenakis94@gmail.com',
    link: 'mailto:nikosxenakis94@gmail.com',
};
const linkedIn = {
    short: 'linkedin.com/in/nikosxenakis',
    link: 'https://www.linkedin.com/in/nikosxenakis',
};
const gitHub = {
    short: 'github.com/nikosxenakis',
    link: 'https://github.com/nikosxenakis',
};
const website = {
    short: 'nikosxenakis.github.io',
    link: 'https://nikosxenakis.github.io',
};
const stackOverflowLink = 'https://stackoverflow.com/users/8756896/nikos-xenakis';
const locationMaps = 'https://www.google.co.uk/maps/place/%CE%96%CF%85%CF%81%CE%AF%CF%87%CE%B7/@47.3774122,8.4543354,12z/data=!4m15!1m8!3m7!1s0x47900b9749bea219:0xe66e8df1e71fdc03!2zzpbPhc-Bzq_Ph863!3b1!8m2!3d47.3768866!4d8.541694!16zL20vMDg5NjY!3m5!1s0x47900b9749bea219:0xe66e8df1e71fdc03!8m2!3d47.3768866!4d8.541694!16zL20vMDg5NjY?entry=ttu';
const summary = {
    long: 'Passion and devotion are the cornerstones of my professional approach. I am deeply committed to staying updated, export constantly researching innovative products and cutting-edge methods to ensure that my projects not only meet but exceed expectations. With a rich background in designing, developing, and testing software, I bring a blend of technical expertise and creative problem-solving to every challenge. My goal is to deliver solutions that are not just efficient and reliable, but also future-ready. I thrive in collaborative environments and am always eager to learn and grow alongside my peers.',
    short: 'Specializing in Full Stack development for scalable, fault-tolerant and secure products. Proven at both large and small sized companies, with expertise in Java, Node.js, .NET, and CI/CD. Collaborating with teams and clients, by following agile methodologies towards innovative solutions.',
};
const work = [{
        role: 'Specialist R&D Engineer',
        format: 'contractor',
        company: 'Sphynx',
        companyUrl: 'https://www.sphynx.ch',
        location: 'Zurich, Switzerland',
        date: 'Fed 2024 - Present',
        description: [
            `Architecting and developing the Incident Response Tool, an automation product mitigating cyberattacks guaranteeing high-availability and scalability.`,
            `Managing the SecOPERA EU project representing Sphynx, collaborating with other 10 EU organisations.`,
        ],
        technologies: 'Java,Spring Boot,Node.js,PostgreSQL,Distributed Systems',
        forCV: true,
    }, {
        role: 'Senior Software Engineer',
        company: 'Welbot',
        companyUrl: 'https://welbot.io',
        location: 'Edinburgh, UK',
        date: 'Nov 2022 - Feb 2024',
        description: [
            `Engineered state-of-the-art well-being products tailored for enterprises, used daily by 20K users.`,
            `Established an SDLC process and implemented CI/CD pipelines for the 2 products, enabling weekly releases.`,
            `Automated infrastructure deployment with Terraform, ensuring scalability, isolation, and sub-5-minute releases.`,
            `Led successfully 2 major product releases over 1 year, migrating to new infrastructure and codebase.`,
        ],
        technologies: 'TypeScript,Node.js,React,Terraform,GitHub CI/CD,ElectronJS,AWS',
        forCV: true,
    }, {
        role: 'Senior Software Engineer',
        company: 'SeeByte',
        companyUrl: 'http://www.seebyte.com/',
        location: 'Edinburgh, UK',
        date: 'Aug 2021 - Nov 2022',
        description: [
            `Directed CI/CD initiative, implementing Jenkins pipelines and integrating approximately 80 projects.`,
            `Project lead consistently delivering 100% of the projects ahead of schedule.`,
            `Led research efforts for a web-based product transition, developing prototypes.`,
        ],
        technologies: '.NET,Java,PostgreSQL,Jenkins',
        forCV: true,
    }, {
        role: 'Software Engineer',
        company: 'SeeByte',
        companyUrl: 'http://www.seebyte.com/',
        location: 'Edinburgh, UK',
        date: 'Sept 2019 - Aug 2021',
        description: [
            `Contributed to the development of Mission Planning and Analysis software, supporting 6 Unmanned Underwater Vehicle (UUV) systems from various vendors.`,
            `Demonstrated products in real-world operational scenarios, resulting at 100% contracts extension.`,
            `Earned rapid promotion to the senior level in less than 2 years, becoming the fastest-promotion in the company.`,
        ],
        forCV: true,
    }, {
        role: 'Software Engineer Intern',
        format: 'part-time',
        company: 'Information Services of UoE',
        companyUrl: 'https://www.ed.ac.uk/information-services',
        location: 'Edinburgh, UK',
        date: 'April 2019 - June 2019',
        description: [
            `Created an XML-based publishing workflow, including tools evaluation, customization, integration, and workflow establishment for academic journals.`,
        ],
        forCV: false,
    }, {
        role: 'Software Engineer',
        company: 'Wings ICT Solutions',
        companyUrl: 'http://wings-ict-solutions.eu',
        location: 'Athens, Greece',
        date: 'April 2017 - Sep 2018',
        description: [
            `Working on the migration of the bank’s CRM legacy code with thousands lines of code to Angular.`,
            `Led and delivered an internal bank project system for customer application management, collaborating with other 2 junior engineers.`,
        ],
        technologies: '.NET,Typescript,Angular',
        forCV: true,
    }, {
        role: 'Teaching Assistant',
        company: 'Computer Science Department, University of Crete',
        companyShort: 'Computer Science Department, UoC',
        companyUrl: 'http://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2015 - Jan 2016',
        description: [
            `Assisted in teaching the "Introduction to Programming" course, by conducting lab sessions with approximately 20 students.`,
            `Selected for "TheProfit" program, allowing top 10 performing students to support academic work.`,
        ],
        forCV: true,
    }, {
        role: 'Undergraduate Research Intern',
        company: 'FORTH (Research Centre)',
        companyUrl: 'https://www.forth.gr',
        location: 'Heraklion, Greece',
        date: 'Jun 2015 - Sep 2015',
        description: [
            `Conducted research in Big Data Systems using acceleration devices (GPUs, FPGAs).`,
        ],
        technologies: 'HDFS,MapReduce,Spark,CUDA',
        forCV: true,
    }];
const education = [{
        role: 'MSc in HPC with Data Science',
        company: 'University of Edinburgh',
        companyUrl: 'https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2019&id=871',
        location: 'Edinburgh, UK',
        date: 'Sep 2018 - Sep 2019',
        grade: '75% (Distinction)',
        dissertation: 'Parallelisation of frame processing for Optical Coherence Tomography for Optos (85%).',
        scholarship: 'Awarded the Best Academic Performance Award for achieving the highest grades in the MSc program.',
        forCV: true,
    }, {
        role: 'Bachelor in Computer Science',
        company: 'University of Crete',
        companyUrl: 'https://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2012 - Jul 2016',
        grade: '84% (First-Class Honours)',
        dissertation: 'ICE Editor is a visual programming language for end-user programmers for IOT devices. ICE Editor is a web client application written in JavaScript.',
        scholarship: 'Awarded the `Highly Skilled Workforce Scholarship`, covering full MSc tuition. Awarded the Stelios Orfanoudakis Scholarship for three years as a top-three BSc student annually.',
        forCV: true,
    }, {
        role: 'IT Essentials: PC Hardware and Software',
        roleShort: 'IT Essentials',
        company: 'Cisco Network Academy',
        location: 'Chania, Greece',
        date: 'Jun 2011 - Aug 2011',
        description: 'IT Essentials covers fundamental computer skills. It includes labs that provide practical experience using simulation tools.',
        forCV: false,
    }];
const projects = [{
        name: 'Georgioupolis Transfers',
        date: '2017',
        url: 'https://georgioupolis-taxi.firebaseapp.com/',
        description: 'Website for booking transfer and tours in Crete, Greece.',
        technologies: 'Typescript,Angular,Node.js',
    }, {
        name: 'ImagInLexis',
        date: 'June 2016 - August 2016',
        url: 'https://github.com/nikosxenakis/ImagInLexis',
        description: `Hired to create a desktop application for a bachelor's thesis focused on Logotherapy. The application primarily enhances speech therapy intervention plans by incorporating a series of tests for patients to undertake. Designed with a gamified approach, the application caters specifically to children, making the therapeutic process engaging and interactive.`,
        technologies: 'Java,JavaFX',
    }, {
        name: 'ICE Editor',
        date: 'March 2016 - June 2016',
        url: 'https://github.com/nikosxenakis/ICE_Editor',
        description: `A web-based platform designed for end-users to craft straightforward applets for IoT (Internet Of Things) devices. This intuitive editor minimizes both compile and runtime errors, offering a drag-and-drop interface alongside value editing capabilities. It features a versatile API, allowing users to swiftly develop programs using Javascript or by defining them in JSON files.`,
        technologies: 'HTML/CSS/JS,Canvas.js',
    }, {
        name: '1942',
        date: 'November 2015 - January 2016',
        url: 'https://www.youtube.com/watch?v=kdICR49vbvg',
        description: `1942, a beloved retro video game from 1984, has been reimagined in this project. Utilizing the original sprite sheets, the game has been recreated with the C++ programming language, leveraging the SDL cross-platform software development library.`,
        technologies: 'C++,SDL',
    }];
const languages = [{
        name: 'English',
        level: 'Proficient',
        stars: 5,
    }, {
        name: 'Greek',
        level: 'Native',
        stars: 5,
    }, {
        name: 'German',
        level: 'Beginner (A1)',
        stars: 1,
    }];
const interests = [{
        name: '♟️ Chess',
    }, {
        name: '🕺🏽 Latin and Cretan dancing',
    }, {
        name: '🏋️ Weight lifting',
    }, {
        name: '🚴 Cycling',
    }];
const skills = [{
        name: 'Java Spring Boot, .NET',
        level: 'Proficient',
        width: '100%',
    }, {
        name: 'Webstack (HTML/CSS), Typescript, Node.js, React',
        level: 'Proficient',
        width: '100%',
    }, {
        name: 'CI/CD: Jenkins, GitHub CI/CD',
        level: 'Proficient',
        width: '95%',
    }, {
        name: 'Testing: JUnit, Jest, TDD, SonarQube',
        level: 'Advanced',
        width: '90%',
    }, {
        name: 'Cloud: AWS, Terraform',
        level: 'Advanced',
        width: '85%',
    }, {
        name: 'DBMS: PostgreSQL, DynamoDB, MongoDB',
        level: 'Advanced',
        width: '80%',
    }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUN2QyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsMEJBQTBCLENBQUM7QUFDaEQsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFDO0FBQzlDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUM7QUFDeEMsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ2xCLEtBQUssRUFBRSwwQkFBMEI7SUFDakMsSUFBSSxFQUFFLGlDQUFpQztDQUN6QyxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3JCLEtBQUssRUFBRSw4QkFBOEI7SUFDckMsSUFBSSxFQUFFLDBDQUEwQztDQUNsRCxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHO0lBQ25CLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsSUFBSSxFQUFFLGlDQUFpQztDQUN6QyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHO0lBQ3BCLEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsSUFBSSxFQUFFLGdDQUFnQztDQUN4QyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsdURBQXVELENBQUM7QUFDekYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLGtVQUFrVSxDQUFDO0FBQy9WLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRztJQUNwQixJQUFJLEVBQUUsZ21CQUFnbUI7SUFDdG1CLEtBQUssRUFBRSxpU0FBaVM7Q0FDMVMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO1FBQ2xCLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsTUFBTSxFQUFFLFlBQVk7UUFDcEIsT0FBTyxFQUFFLFFBQVE7UUFDakIs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
;// ./src/education.tsx





function Education() {
    return (react.createElement("section", { className: "education section" },
        react.createElement("div", { className: "section-inner" },
            react.createElement("h2", { className: "heading" },
                "Education ",
                react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faGraduationCap */.eST })),
            react.createElement("div", { className: "content" }, education.map((w, i) => (react.createElement("div", { className: "item", key: i },
                react.createElement(Row/* default */.A, { className: "itemHeader" },
                    react.createElement(Col/* default */.A, { className: "itemHeaderLeft", xs: 12, sm: 7 },
                        react.createElement("h3", { className: "title" }, w.role),
                        react.createElement("h6", { className: "company" },
                            react.createElement("a", { href: w.companyUrl }, w.company))),
                    react.createElement(Col/* default */.A, { className: "itemHeaderRight", xs: 12, sm: 5 },
                        react.createElement("h6", { className: "place" }, w.location),
                        react.createElement("h6", { className: "year" }, w.date))),
                react.createElement("ul", null,
                    w.grade && react.createElement("li", null,
                        react.createElement("b", null, "Grade"),
                        " ",
                        w.grade),
                    w.scholarship && react.createElement("li", null,
                        react.createElement("b", null, "Scholarship"),
                        " ",
                        w.scholarship),
                    w.dissertation && react.createElement("li", null,
                        react.createElement("b", null, "Dissertation"),
                        " ",
                        w.dissertation)))))))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VkdWNhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxPQUFPLFVBQVUsU0FBUztJQUM5QixPQUFPLENBQ0osaUNBQVMsU0FBUyxFQUFDLG1CQUFtQjtRQUNuQyw2QkFBSyxTQUFTLEVBQUMsZUFBZTtZQUMzQiw0QkFBSSxTQUFTLEVBQUMsU0FBUzs7Z0JBQVcsb0JBQUMsZUFBZSxJQUFDLElBQUksRUFBRSxlQUFlLEdBQUksQ0FBSztZQUNqRiw2QkFBSyxTQUFTLEVBQUMsU0FBUyxJQUNwQixTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDdEIsNkJBQUssU0FBUyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUUsQ0FBQztnQkFDekIsb0JBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxZQUFZO29CQUN4QixvQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7d0JBQzFDLDRCQUFJLFNBQVMsRUFBQyxPQUFPLElBQUUsQ0FBQyxDQUFDLElBQUksQ0FBTTt3QkFDbkMsNEJBQUksU0FBUyxFQUFDLFNBQVM7NEJBQUMsMkJBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBSyxDQUFLLENBQ2hFO29CQUNOLG9CQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzt3QkFDM0MsNEJBQUksU0FBUyxFQUFDLE9BQU8sSUFBRSxDQUFDLENBQUMsUUFBUSxDQUFNO3dCQUN2Qyw0QkFBSSxTQUFTLEVBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQU0sQ0FDL0IsQ0FDSDtnQkFDTjtvQkFDSSxDQUFDLENBQUMsS0FBSyxJQUFJO3dCQUNULHVDQUFZOzt3QkFBRSxDQUFDLENBQUMsS0FBSyxDQUNuQjtvQkFDSixDQUFDLENBQUMsV0FBVyxJQUFJO3dCQUNmLDZDQUFrQjs7d0JBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FDL0I7b0JBQ0osQ0FBQyxDQUFDLFlBQVksSUFBSTt3QkFDaEIsOENBQW1COzt3QkFBRSxDQUFDLENBQUMsWUFBWSxDQUNqQyxDQUNILENBQ0YsQ0FDUixDQUFDLENBQ0MsQ0FDSCxDQUNDLENBQ1osQ0FBQztBQUNMLENBQUMifQ==
;// ./src/experience.tsx





function Experience() {
    return (react.createElement("section", { className: "experience section" },
        react.createElement("div", { className: "section-inner" },
            react.createElement("h2", { className: "heading" },
                "Work Experience ",
                react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faBriefcase */.u4D })),
            react.createElement("div", { className: "content" }, work.map((w) => (react.createElement("div", { className: "item", key: w.role + w.company },
                react.createElement(Row/* default */.A, { className: "itemHeader" },
                    react.createElement(Col/* default */.A, { className: "itemHeaderLeft", xs: 12, sm: 7 },
                        react.createElement("h3", { className: "title" }, w.role),
                        w.format ? react.createElement("h4", { className: "format" },
                            "( ",
                            w.format,
                            " )") : '',
                        react.createElement("h6", { className: "company" },
                            react.createElement("a", { href: w.companyUrl }, w.company))),
                    react.createElement(Col/* default */.A, { className: "itemHeaderRight", xs: 12, sm: 5 },
                        react.createElement("h6", { className: "place" }, w.location),
                        react.createElement("h6", { className: "year" }, w.date))),
                react.createElement(Row/* default */.A, null,
                    react.createElement(Col/* default */.A, { xs: 12 }, w.description ? (react.createElement("ul", null, w.description.map(d => (react.createElement("li", { key: d }, d))))) : '')),
                react.createElement(Row/* default */.A, null,
                    react.createElement(Col/* default */.A, { xs: 12 }, w.technologies ? (react.createElement("span", { className: 'technologies' }, w.technologies.split(',').map(t => (react.createElement(Badge/* default */.A, { className: 'technology', pill: true, bg: "light", text: "dark", key: t }, t))))) : '')))))))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBlcmllbmNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlCLE1BQU0sQ0FBQyxPQUFPLFVBQVUsVUFBVTtJQUMvQixPQUFPLENBQ0osaUNBQVMsU0FBUyxFQUFDLG9CQUFvQjtRQUNwQyw2QkFBSyxTQUFTLEVBQUMsZUFBZTtZQUMzQiw0QkFBSSxTQUFTLEVBQUMsU0FBUzs7Z0JBQWlCLG9CQUFDLGVBQWUsSUFBQyxJQUFJLEVBQUUsV0FBVyxHQUFJLENBQUs7WUFDbkYsNkJBQUssU0FBUyxFQUFDLFNBQVMsSUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDZCw2QkFBSyxTQUFTLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPO2dCQUMxQyxvQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFlBQVk7b0JBQ3hCLG9CQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzt3QkFDMUMsNEJBQUksU0FBUyxFQUFDLE9BQU8sSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFNO3dCQUNsQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyw0QkFBSSxTQUFTLEVBQUMsUUFBUTs7NEJBQUksQ0FBQyxDQUFDLE1BQU07aUNBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDM0QsNEJBQUksU0FBUyxFQUFDLFNBQVM7NEJBQUMsMkJBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBSyxDQUFLLENBQ2hFO29CQUNOLG9CQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzt3QkFDM0MsNEJBQUksU0FBUyxFQUFDLE9BQU8sSUFBRSxDQUFDLENBQUMsUUFBUSxDQUFNO3dCQUN2Qyw0QkFBSSxTQUFTLEVBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQU0sQ0FDL0IsQ0FDSDtnQkFDTixvQkFBQyxHQUFHO29CQUNELG9CQUFDLEdBQUcsSUFBQyxFQUFFLEVBQUUsRUFBRSxJQUNiLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2QsZ0NBQ0ksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNyQiw0QkFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFHLENBQUMsQ0FBTSxDQUFDLENBQUMsQ0FDdkIsQ0FDUCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ0csQ0FDSDtnQkFDTixvQkFBQyxHQUFHO29CQUNELG9CQUFDLEdBQUcsSUFBQyxFQUFFLEVBQUUsRUFBRSxJQUNiLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2YsOEJBQU0sU0FBUyxFQUFDLGNBQWMsSUFDMUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDakMsb0JBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsSUFBSSxRQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFHLENBQUMsQ0FBUyxDQUMvRSxDQUFDLENBQ0UsQ0FDVCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ0csQ0FDSCxDQUNILENBQ1IsQ0FBQyxDQUNDLENBQ0gsQ0FDQyxDQUNaLENBQUM7QUFDTCxDQUFDIn0=
;// ./src/app.tsx








function App() {
    const handleDownloadCV = (e) => {
        e.preventDefault();
        const enteredPassword = prompt("Enter password to download the CV:");
        if (enteredPassword === "Xen@kisCV") {
            const link = document.createElement('a');
            link.href = "../assets/Xenakis Nikolaos CV.pdf";
            link.download = "Xenakis Nikolaos CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        else {
            alert("Incorrect password.");
        }
    };
    return (react.createElement(react.Fragment, null,
        react.createElement("header", { className: "header" },
            react.createElement(TabContainer/* default */.A, null,
                react.createElement(Row/* default */.A, null,
                    react.createElement(Col/* default */.A, { xs: 0, sm: 0, lg: 2 }),
                    react.createElement(Col/* default */.A, { xs: 12, sm: 10, lg: 6 },
                        react.createElement("div", null,
                            react.createElement(Row/* default */.A, null,
                                react.createElement(Col/* default */.A, { xs: 12 },
                                    react.createElement("h1", { className: "name" }, data_name)),
                                react.createElement(Col/* default */.A, { xs: 12 },
                                    react.createElement("h2", { className: "title" }, title)),
                                react.createElement(Col/* default */.A, { xs: 12 },
                                    react.createElement("ul", { className: "header-icons" },
                                        react.createElement(OverlayTrigger/* default */.A, { placement: "top", overlay: react.createElement(Tooltip/* default */.A, { id: "tooltip-cv" }, "Download CV") },
                                            react.createElement("li", null,
                                                react.createElement("a", { onClick: handleDownloadCV, style: { cursor: 'pointer' } },
                                                    react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faDownload */.cbP })))),
                                        react.createElement(OverlayTrigger/* default */.A, { placement: "top", overlay: react.createElement(Tooltip/* default */.A, { id: "tooltip-cv" }, "Visit LinkedIn") },
                                            react.createElement("li", null,
                                                react.createElement("a", { href: linkedIn.link },
                                                    react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_brands_svg_icons/* faLinkedin */.IAJ })))),
                                        react.createElement(OverlayTrigger/* default */.A, { placement: "top", overlay: react.createElement(Tooltip/* default */.A, { id: "tooltip-cv" }, "Visit GitHub") },
                                            react.createElement("li", null,
                                                react.createElement("a", { href: gitHub.link },
                                                    react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_brands_svg_icons/* faGithub */.Vz1 })))),
                                        react.createElement(OverlayTrigger/* default */.A, { placement: "top", overlay: react.createElement(Tooltip/* default */.A, { id: "tooltip-cv" }, "Visit Stack Overflow") },
                                            react.createElement("li", null,
                                                react.createElement("a", { href: stackOverflowLink },
                                                    react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_brands_svg_icons/* faStackOverflow */.WBX }))))))))),
                    react.createElement(Col/* default */.A, { xs: 0, sm: 0, lg: 1 })))),
        react.createElement("div", { className: "container sections-wrapper" },
            react.createElement(Row/* default */.A, null,
                react.createElement(Col/* default */.A, { xs: 0, sm: 0, lg: 1, xl: 1, xxl: 2 }),
                react.createElement(Col/* default */.A, { xs: 12, sm: 12, md: 8, lg: 6, xl: 6, xxl: 6 },
                    react.createElement("section", { className: "about section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Summary"),
                            react.createElement("div", { className: "content" },
                                react.createElement("p", null, summary.long),
                                react.createElement("p", null,
                                    react.createElement("b", null, "Work Authorization"),
                                    " Eligible to work in the EU, no Visa required")))),
                    react.createElement(Experience, null),
                    react.createElement(Education, null),
                    react.createElement("section", { className: "projects section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" },
                                "Projects ",
                                react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faCode */.jTw })),
                            react.createElement("div", { className: "content" }, projects.map(w => (react.createElement("div", { className: "item", key: w.name },
                                react.createElement("h3", { className: "title" },
                                    react.createElement("a", { href: w.url }, w.name),
                                    " ",
                                    react.createElement("span", { className: "year" },
                                        "(",
                                        w.date,
                                        ")")),
                                react.createElement("p", { className: "description" },
                                    w.description,
                                    w.technologies ? (react.createElement("span", { className: 'technologies' },
                                        react.createElement("br", null),
                                        w.technologies.split(',').map((t, i) => (react.createElement(Badge/* default */.A, { className: 'technology', pill: true, bg: "light", text: "dark", key: `${w.name}-${i}` }, t))))) : '')))))))),
                react.createElement(Col/* default */.A, { xs: 12, sm: 12, md: 4, lg: 4, xl: 4, xxl: 3, className: "secondary" },
                    react.createElement("aside", { className: "info section" },
                        react.createElement("div", { className: "section-inner small" },
                            react.createElement("h2", { className: "heading" }, "Basic Information"),
                            react.createElement("div", { className: "content" },
                                react.createElement("ul", { className: "list-unstyled" },
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faEnvelope */.y_8 }),
                                        " ",
                                        react.createElement("a", { href: email.link }, email.short)),
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faLocationDot */.gKm }),
                                        " ",
                                        react.createElement("a", { href: locationMaps }, data_location)),
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faFlag */.s6x }),
                                        " ",
                                        nationality))))),
                    react.createElement("aside", { className: "skills section" },
                        react.createElement("div", { className: "section-inner small" },
                            react.createElement("h2", { className: "heading" }, "Skills"),
                            react.createElement("div", { className: "content" },
                                react.createElement("p", { className: "intro" }),
                                react.createElement("div", { className: "skillset" }, skills.map((s, i) => (react.createElement("div", { className: "item", key: s.name },
                                    react.createElement("span", { className: "level-title" },
                                        s.name,
                                        " "),
                                    react.createElement("span", null, " - "),
                                    react.createElement("span", { className: "level-label", "data-toggle": "tooltip", "data-placement": "left", "data-animation": "true" }, s.level),
                                    react.createElement("div", { className: "level-bar" },
                                        react.createElement("div", { className: "level-bar-inner", style: { width: s.width } }))))))))),
                    react.createElement("aside", { className: "languages section" },
                        react.createElement("div", { className: "section-inner small" },
                            react.createElement("h2", { className: "heading" }, "Languages"),
                            react.createElement("div", { className: "content" },
                                react.createElement("ul", { className: "list-unstyled" }, languages.map(l => (react.createElement("li", { className: "item", key: l.name + l.level },
                                    react.createElement("span", { className: "title" },
                                        react.createElement("strong", null,
                                            l.name,
                                            " ")),
                                    react.createElement("span", { className: "level" },
                                        l.level,
                                        react.createElement("br", { className: "visible-sm visible-xs" }),
                                        [...Array(l.stars)].map((e, i) => react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faStar */.yy, key: l.name + i })))))))))),
                    react.createElement("aside", { className: "section" },
                        react.createElement("div", { className: "section-inner small" },
                            react.createElement("h2", { className: "heading" }, "Interests"),
                            react.createElement("div", { className: "content" },
                                react.createElement("ul", { className: "list-unstyled" }, interests.map((l, i) => (react.createElement("li", { className: "item", key: l.name },
                                    react.createElement("span", { className: "title" }, l.name))))))))),
                react.createElement(Col/* default */.A, { xs: 0, sm: 0, lg: 1, xl: 1, xxl: 1 }))),
        react.createElement("footer", { className: "footer" },
            react.createElement("div", { className: "container text-right" },
                react.createElement("small", { className: "copyright" }, "@Copyrights Xenakis Nikolaos - March 2025")))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsSCxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZLLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLFVBQVUsTUFBTSxjQUFjLENBQUM7QUFFdEMsTUFBTSxDQUFDLE9BQU8sVUFBVSxHQUFHO0lBRXpCLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFrRCxFQUFFLEVBQUU7UUFDOUUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ3JFLElBQUksZUFBZSxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7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
;// ./src/index.tsx





const render = () => {
    const container = document.getElementById('root');
    if (container) {
        const root = client.createRoot(container);
        root.render(react.createElement(App, null));
    }
};
render();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGNBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUM7QUFDeEIsT0FBTyxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLDJCQUEyQixDQUFDO0FBRW5DLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNqQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELElBQUksU0FBUyxFQUFFLENBQUM7UUFDYixNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxFQUFFLENBQUMifQ==

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0,
/******/ 			547: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpersonal_website"] = self["webpackChunkpersonal_website"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [644,547,96], () => (__webpack_require__(1902)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;