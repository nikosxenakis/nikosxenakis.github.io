/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 477:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6670:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(9471);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/@react-pdf/renderer/lib/react-pdf.browser.js + 13 modules
var react_pdf_browser = __webpack_require__(5943);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 10 modules
var Modal = __webpack_require__(7458);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/TabContainer.js + 1 modules
var TabContainer = __webpack_require__(3461);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(708);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(494);
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
const summary = 'Passion and devotion are the cornerstones of my professional approach. I am deeply committed to staying updated, export constantly researching innovative products and cutting-edge methods to ensure that my projects not only meet but exceed expectations. With a rich background in designing, developing, and testing software, I bring a blend of technical expertise and creative problem-solving to every challenge. My goal is to deliver solutions that are not just efficient and reliable, but also future-ready. I thrive in collaborative environments and am always eager to learn and grow alongside my peers.';
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
            `Introduced an SDLC process, implemented CI/CD pipelines across all projects, streamlining weekly releases.`,
            `Automated infrastructure deployment using Terraform, ensuring reproducability, scalability and isolation across deployments, reducing time to release under 5 minutes.`,
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
            `Developed the Mission Planning, Monitoring, and Analysis software for Unmanned Underwater Vehicles (UUVs).`,
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
            `Working on the migration of the bank’s CRM legacy code to Angular.`,
            `Led and delivered in time an internal bank project system for customer application management, collaborating with other 2 junior engineers.`,
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
            `Assisted in teaching the "Introduction to Computer Science" course, by conducting lab sessions.`,
            `Selected for "TheProfit" program, allowing top 10 performing students to support academic work.`,
        ],
        forCV: true,
    }, {
        role: 'Undergraduate Research Intern',
        company: 'FORTH (Research Center)',
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
        grade: '75% (First-Class Honours)',
        dissertation: 'Parallelisation of frame processing for Optical Coherence Tomography for Optos (85%).',
        scholarship: 'Received the Best Student Award for the MSc program. Additionally, I was awarded the Highly Skilled Workforce Scholarship covering the tuition fees.',
        forCV: true,
    }, {
        role: 'Bachelor in Computer Science',
        company: 'University of Crete',
        companyUrl: 'https://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2012 - Jul 2016',
        grade: '84% (First-Class Honours)',
        dissertation: 'ICE Editor is a visual programming language for end-user programmers for IOT devices. ICE Editor is a web client application written in JavaScript.',
        scholarship: '3 years in a row awarded with the memorial scholarship "Stelios Orfanoudakis". This scholarship is given to the top 3 students of the Computer Science department each year.',
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
        name: 'Greek',
        level: 'Native',
        stars: 5,
    }, {
        name: 'English',
        level: 'Proficient',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUN2QyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsMEJBQTBCLENBQUM7QUFDaEQsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ2xCLEtBQUssRUFBRSwwQkFBMEI7SUFDakMsSUFBSSxFQUFFLGlDQUFpQztDQUN6QyxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3JCLEtBQUssRUFBRSw4QkFBOEI7SUFDckMsSUFBSSxFQUFFLDBDQUEwQztDQUNsRCxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHO0lBQ25CLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsSUFBSSxFQUFFLGlDQUFpQztDQUN6QyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHO0lBQ3BCLEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsSUFBSSxFQUFFLGdDQUFnQztDQUN4QyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsdURBQXVELENBQUM7QUFDekYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLGtVQUFrVSxDQUFDO0FBQy9WLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxnbUJBQWdtQixDQUFDO0FBQ3huQixNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztRQUNsQixJQUFJLEVBQUUseUJBQXlCO1FBQy9CLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFVBQVUsRUFBRSx1QkFBdUI7UUFDbkMsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFdBQVcsRUFBRTtZQUNWLHVKQUF1SjtZQUN2SixxR0FBcUc7U0FDdkc7UUFDRCxZQUFZLEVBQUUseURB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
;// ./src/cv.tsx



react_pdf_browser/* Font */.KQ.register({ family: 'Roboto', src: '/Roboto-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
react_pdf_browser/* Font */.KQ.register({ family: 'Roboto', src: '/Roboto-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold' });
react_pdf_browser/* Font */.KQ.register({ family: 'Roboto', src: '/Roboto-Thin.ttf', fontWeight: 'thin' });
react_pdf_browser/* Font */.KQ.register({ family: 'Roboto', src: '/Roboto-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal' });
react_pdf_browser/* Font */.KQ.registerEmojiSource({
    format: 'png',
    url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});
const backgroundColor = '#E4E4E4';
const primaryColor = '#7b8d6c';
const secondaryColor = '#6d757d';
const styles = react_pdf_browser/* StyleSheet */.vv.create({
    page: {
        flexDirection: 'column',
        backgroundColor: backgroundColor,
        fontFamily: `Roboto`,
    },
    header: {
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    headerName: {
        fontSize: 24,
        color: primaryColor,
    },
    headerTitle: {
        paddingBottom: 10,
        fontSize: 18,
        color: secondaryColor,
    },
    headerContentLeft: {
        marginLeft: 20,
        width: '72%',
        maxWidth: '72%',
        textAlign: 'left',
    },
    headerContentRight: {
        width: '28%',
        maxWidth: '28%',
        flexDirection: 'column',
        fontSize: 9,
    },
    contactDetails: {
        paddingTop: 10,
    },
    contactDetailsItem: {
        flexDirection: 'row',
        marginBottom: 7,
        textAlign: 'left',
        display: 'flex',
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
    },
    cvContents: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    section: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        paddingBottom: 10,
        color: primaryColor,
    },
    sectionContent: {},
    sectionItem: {
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    sectionItemHeader: {
        flexDirection: 'row',
        fontSize: 10,
        paddingBottom: 5,
        textAlign: 'right',
    },
    sectionItemLeft: {
        textAlign: 'left',
        width: '26%',
        maxWidth: '26%',
    },
    sectionItemRight: {
        width: '74%',
        maxWidth: '74%',
    },
    sectionItemSubHeader: {
        flexDirection: 'row',
        fontSize: 9,
    },
    sectionItemTitle: {
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 2,
    },
    sectionItemFormat: {
        fontSize: 8,
        marginBottom: 2,
        fontStyle: 'italic',
    },
    sectionItemOrganisation: {
        fontSize: 9,
        marginBottom: 2,
    },
    sectionItemDate: {
        fontSize: 8,
        color: secondaryColor,
    },
    sectionItemContents: {
        fontSize: 8,
        paddingLeft: 10,
        paddingRight: 10,
    },
    sectionItemContent: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    exeprienceDescription: {
        marginBottom: 3,
    },
    exeprienceDescriptionItem: {
        marginBottom: 3,
    },
    workItemDetailsTitle: {
        fontWeight: 'bold',
    },
    smallSectionGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallSectionContent: {
        flexDirection: 'row',
    },
    smallSectionText: {
        fontSize: 10,
        marginRight: 35,
    },
    smallSectionSecondary: {
        color: secondaryColor,
        marginRight: 5,
        fontSize: 8,
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black',
    },
    technologyItem: {
        backgroundColor: '#d6e0ce',
        color: 'black',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 7,
        borderRadius: 5,
        marginRight: 1,
    },
    projectItem: {
        flexDirection: 'row',
        marginBottom: 5,
        width: 250,
        borderBottom: `1px solid ${primaryColor}`,
    },
    projectItemContentName: {
        fontSize: 8,
        marginBottom: 2,
        width: '40%',
        maxWidth: '40%',
    },
    projectItemName: {
        textDecoration: 'none',
        color: 'black',
    },
    projectItemContent: {
        flexDirection: 'row',
        fontSize: 8,
        width: '60%',
        maxWidth: '60%',
    },
    smallSectionContentProject: {
        flexDirection: 'column',
    },
    visaStyle: {
        fontSize: 10,
    }
});
function CV() {
    return (react.createElement(react_pdf_browser/* Document */.yo, { title: `${data_name} CV`, author: data_name, subject: 'CV', language: 'en', pageLayout: 'singlePage', pageMode: 'fullScreen' },
        react.createElement(react_pdf_browser/* Page */.YW, { size: "A4", orientation: 'portrait', style: styles.page },
            react.createElement(react_pdf_browser/* View */.Ss, { style: styles.header },
                react.createElement(react_pdf_browser/* View */.Ss, { style: styles.headerContentLeft },
                    react.createElement(react_pdf_browser/* Text */.EY, { style: styles.headerName }, data_name),
                    react.createElement(react_pdf_browser/* Text */.EY, { style: styles.headerTitle }, title)),
                react.createElement(react_pdf_browser/* View */.Ss, { style: styles.headerContentRight },
                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetails },
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Text */.EY, null,
                                react.createElement(react_pdf_browser/* Link */.N_, { src: email.link, style: styles.linkStyle },
                                    "\u2709\uFE0F ",
                                    email.short))),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Text */.EY, null,
                                react.createElement(react_pdf_browser/* Link */.N_, { src: linkedIn.link, style: styles.linkStyle },
                                    react.createElement(react_pdf_browser/* Image */._V, { src: './assets/images/linkedin.png', style: { width: 10, height: 10 } }),
                                    " ",
                                    linkedIn.short))),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Text */.EY, null,
                                react.createElement(react_pdf_browser/* Link */.N_, { src: website.link, style: styles.linkStyle },
                                    "\uD83C\uDF10 ",
                                    website.short))),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Text */.EY, null,
                                react.createElement(react_pdf_browser/* Link */.N_, { src: gitHub.link, style: styles.linkStyle },
                                    react.createElement(react_pdf_browser/* Image */._V, { src: './assets/images/github.png', style: { width: 10, height: 10 } }),
                                    " ",
                                    gitHub.short)))))),
            react.createElement(react_pdf_browser/* View */.Ss, { style: styles.cvContents },
                react.createElement(react_pdf_browser/* View */.Ss, { style: styles.section },
                    react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionTitle }, "Work experience"),
                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionContent }, work.filter(x => x.forCV).map((x) => (react.createElement(react_pdf_browser/* View */.Ss, { key: x.role, style: styles.sectionItem },
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemLeft },
                            react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemTitle }, x.role),
                            x.format && react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemFormat },
                                "(",
                                x.format,
                                ")"),
                            x.companyShort && react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemOrganisation },
                                react.createElement(react_pdf_browser/* Link */.N_, { src: x.companyUrl, style: styles.linkStyle }, x.companyShort),
                                " "),
                            !x.companyShort && x.company && react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemOrganisation },
                                react.createElement(react_pdf_browser/* Link */.N_, { src: x.companyUrl, style: styles.linkStyle }, x.company),
                                " "),
                            react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemDate },
                                x.location,
                                " (",
                                x.date,
                                ")")),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemRight },
                            react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemContents },
                                x.description &&
                                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.exeprienceDescription }, x.description.map((d) => (react.createElement(react_pdf_browser/* View */.Ss, { key: d, style: styles.exeprienceDescriptionItem },
                                        react.createElement(react_pdf_browser/* Text */.EY, null,
                                            "\u2022 ",
                                            d))))),
                                x.technologies &&
                                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemContent }, x.technologies.split(',').map((y) => (react.createElement(react_pdf_browser/* View */.Ss, { key: y, style: styles.technologyItem },
                                        react.createElement(react_pdf_browser/* Text */.EY, null, y)))))))))))),
                react.createElement(react_pdf_browser/* View */.Ss, { style: styles.section },
                    react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionTitle }, "Education"),
                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionContent }, education.filter(x => x.forCV).map((x) => (react.createElement(react_pdf_browser/* View */.Ss, { key: x.company, style: styles.sectionItem },
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemLeft },
                            x.roleShort && react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemTitle },
                                x.roleShort,
                                " "),
                            !x.roleShort && x.role && react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemTitle },
                                x.role,
                                " "),
                            x.grade && react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemFormat }, x.grade),
                            react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemOrganisation },
                                react.createElement(react_pdf_browser/* Link */.N_, { src: x.companyUrl ?? '', style: styles.linkStyle }, x.company),
                                " "),
                            react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionItemDate },
                                x.location,
                                " (",
                                x.date,
                                ")")),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemRight },
                            react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemContents },
                                x.scholarship &&
                                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemContent },
                                        react.createElement(react_pdf_browser/* Text */.EY, null,
                                            react.createElement(react_pdf_browser/* Text */.EY, { style: styles.workItemDetailsTitle }, "Scholarship "),
                                            " ",
                                            x.scholarship)),
                                x.dissertation &&
                                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionItemContent },
                                        react.createElement(react_pdf_browser/* Text */.EY, null,
                                            react.createElement(react_pdf_browser/* Text */.EY, { style: styles.workItemDetailsTitle }, "Dissertation "),
                                            " ",
                                            x.dissertation))))))))),
                react.createElement(react_pdf_browser/* View */.Ss, { style: styles.smallSectionGroup },
                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.section },
                        react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionTitle }, "Languages"),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.smallSectionContent }, languages.map((x) => (react.createElement(react_pdf_browser/* Text */.EY, { key: x.name, style: styles.smallSectionText },
                            x.name,
                            " ",
                            react.createElement(react_pdf_browser/* Text */.EY, { style: styles.smallSectionSecondary }, x.level)))))))))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3YudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBYSxNQUFNLHFCQUFxQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBWSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV2SCxJQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNuSCxJQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM5RyxJQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDekYsSUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFbEgsSUFBWSxDQUFDLG1CQUFtQixDQUFDO0lBQy9CLE1BQU0sRUFBRSxLQUFLO0lBQ2IsR0FBRyxFQUFFLDhEQUE4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
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
                react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faUserTie */.BzA })),
            react.createElement("div", { className: "content" }, work.map((w) => (react.createElement("div", { className: "item", key: w.date },
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
                react.createElement("p", { className: "description" },
                    w.description ? (react.createElement("ul", null, w.description.map(d => (react.createElement("li", { key: d }, d))))) : '',
                    w.technologies ? (react.createElement("span", { className: 'technologies' }, w.technologies.split(',').map(t => (react.createElement(Badge/* default */.A, { className: 'technology', pill: true, bg: "light", text: "dark", key: t }, t))))) : ''))))))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBlcmllbmNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlCLE1BQU0sQ0FBQyxPQUFPLFVBQVUsVUFBVTtJQUMvQixPQUFPLENBQ0osaUNBQVMsU0FBUyxFQUFDLG9CQUFvQjtRQUNwQyw2QkFBSyxTQUFTLEVBQUMsZUFBZTtZQUMzQiw0QkFBSSxTQUFTLEVBQUMsU0FBUzs7Z0JBQWlCLG9CQUFDLGVBQWUsSUFBQyxJQUFJLEVBQUUsU0FBUyxHQUFJLENBQUs7WUFDakYsNkJBQUssU0FBUyxFQUFDLFNBQVMsSUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDZCw2QkFBSyxTQUFTLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSTtnQkFDOUIsb0JBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxZQUFZO29CQUN4QixvQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7d0JBQzFDLDRCQUFJLFNBQVMsRUFBQyxPQUFPLElBQUUsQ0FBQyxDQUFDLElBQUksQ0FBTTt3QkFDbEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsNEJBQUksU0FBUyxFQUFDLFFBQVE7OzRCQUFJLENBQUMsQ0FBQyxNQUFNO2lDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzNELDRCQUFJLFNBQVMsRUFBQyxTQUFTOzRCQUFDLDJCQUFHLElBQUksRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFHLENBQUMsQ0FBQyxPQUFPLENBQUssQ0FBSyxDQUNoRTtvQkFDTixvQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7d0JBQzNDLDRCQUFJLFNBQVMsRUFBQyxPQUFPLElBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBTTt3QkFDdkMsNEJBQUksU0FBUyxFQUFDLE1BQU0sSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFNLENBQy9CLENBQ0g7Z0JBQ04sMkJBQUcsU0FBUyxFQUFDLGFBQWE7b0JBQ3RCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2QsZ0NBQ0ksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNyQiw0QkFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFHLENBQUMsQ0FBTSxDQUFDLENBQUMsQ0FDdkIsQ0FDUCxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUVMLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2xCLDhCQUFNLFNBQVMsRUFBQyxjQUFjLElBQzFCLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2pDLG9CQUFDLEtBQUssSUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLElBQUksUUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLENBQUMsSUFDNUQsQ0FBQyxDQUNHLENBQ1YsQ0FBQyxDQUNFLENBQ1QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFLLENBQ1IsQ0FDUixDQUFDLENBQ0MsQ0FDSCxDQUNDLENBQ1osQ0FBQztBQUNMLENBQUMifQ==
;// ./src/app.tsx










function App() {
    const [showCV, setShowCV] = react.useState(false);
    return (react.createElement(react.Fragment, null,
        react.createElement(Modal/* default */.A, { className: 'cvModal', show: showCV, onHide: () => { setShowCV(false); } },
            react.createElement(react_pdf_browser/* PDFViewer */.TO, null,
                react.createElement(CV, null))),
        react.createElement("header", { className: "header" },
            react.createElement(TabContainer/* default */.A, null,
                react.createElement(Row/* default */.A, null,
                    react.createElement(Col/* default */.A, { xs: 0, sm: 0, lg: 2 }),
                    react.createElement(Col/* default */.A, { xs: 12, sm: 10, lg: 6 },
                        react.createElement("div", { className: "profile-content" },
                            react.createElement(Row/* default */.A, null,
                                react.createElement(Col/* default */.A, { xs: 12 },
                                    react.createElement("h1", { className: "name" }, data_name)),
                                react.createElement(Col/* default */.A, { xs: 12 },
                                    react.createElement("h2", { className: "title" }, title)),
                                react.createElement(Col/* default */.A, { xs: 12 },
                                    react.createElement("ul", { className: "social list-inline" },
                                        react.createElement("li", null,
                                            react.createElement("a", { href: linkedIn.link },
                                                react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_brands_svg_icons/* faLinkedin */.IAJ }))),
                                        react.createElement("li", null,
                                            react.createElement("a", { href: gitHub.link },
                                                react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_brands_svg_icons/* faGithub */.Vz1 }))),
                                        react.createElement("li", null,
                                            react.createElement("a", { href: stackOverflowLink },
                                                react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_brands_svg_icons/* faStackOverflow */.WBX })))))))),
                    react.createElement(Col/* default */.A, { xs: 12, sm: 2, lg: 2, className: 'resume' },
                        react.createElement(Row/* default */.A, null,
                            react.createElement(Col/* default */.A, { xs: 12, className: 'resumeTitle' },
                                react.createElement("h5", null, "Resume")),
                            react.createElement(Col/* default */.A, { xs: 6 },
                                react.createElement("span", { onClick: () => { setShowCV(true); } },
                                    react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faEye */.pS3 }))),
                            react.createElement(Col/* default */.A, { xs: 6 },
                                react.createElement("a", { href: '../assets/Xenakis Nikolaos CV.pdf', download: "Xenakis Nikolaos CV.pdf" },
                                    react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faDownload */.cbP }))))),
                    react.createElement(Col/* default */.A, { xs: 0, sm: 0, lg: 1 })))),
        react.createElement("div", { className: "container sections-wrapper" },
            react.createElement(Row/* default */.A, null,
                react.createElement(Col/* default */.A, { xs: 0, sm: 0, lg: 1, xl: 1, xxl: 2 }),
                react.createElement(Col/* default */.A, { xs: 12, sm: 12, md: 8, lg: 6, xl: 6, xxl: 6 },
                    react.createElement("section", { className: "about section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Summary"),
                            react.createElement("div", { className: "content" },
                                react.createElement("p", null, summary),
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
                                        react.createElement("span", { className: "sr-only" }, "Email:"),
                                        react.createElement("a", { href: email.link }, email.short)),
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faLocationDot */.gKm }),
                                        " ",
                                        react.createElement("span", { className: "sr-only" }, "Location:"),
                                        react.createElement("a", { href: locationMaps }, "Zurich, Switzerland")),
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faFlag */.s6x }),
                                        " ",
                                        react.createElement("span", { className: "sr-only" }, "Nationality:"),
                                        "Greek"))))),
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
                                react.createElement("ul", { className: "list-unstyled" }, languages.map(l => (react.createElement("li", { className: "item", key: l.name },
                                    react.createElement("span", { className: "title" },
                                        react.createElement("strong", null,
                                            l.name,
                                            " ")),
                                    react.createElement("span", { className: "level" },
                                        l.level,
                                        react.createElement("br", { className: "visible-sm visible-xs" }),
                                        [...Array(l.stars)].map((e) => react.createElement(index_es/* FontAwesomeIcon */.g, { icon: free_solid_svg_icons/* faStar */.yy, key: e })))))))))),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDekgsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hKLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLFVBQVUsTUFBTSxjQUFjLENBQUM7QUFFdEMsTUFBTSxDQUFDLE9BQU8sVUFBVSxHQUFHO0lBQ3pCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsRCxPQUFPLENBQ0w7UUFDRSxvQkFBQyxLQUFLLElBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFB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
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [644,547,96], () => (__webpack_require__(6670)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;