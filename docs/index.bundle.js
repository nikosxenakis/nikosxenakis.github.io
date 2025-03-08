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
        grade: '75% (Distinction)',
        dissertation: 'Parallelisation of frame processing for Optical Coherence Tomography for Optos (85%).',
        scholarship: 'Achieved the highest grade in the MSc program, earning the Best Academic Performance Award. Also awarded the Highly Skilled Workforce Scholarship, which covered full tuition.',
        forCV: true,
    }, {
        role: 'Bachelor in Computer Science',
        company: 'University of Crete',
        companyUrl: 'https://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2012 - Jul 2016',
        grade: '84% (First-Class Honours)',
        dissertation: 'ICE Editor is a visual programming language for end-user programmers for IOT devices. ICE Editor is a web client application written in JavaScript.',
        scholarship: 'Secured the Stelios Orfanoudakis Memorial Scholarship for three consecutive years, awarded to the top three students of the Computer Science department annually.',
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
// EXTERNAL MODULE: ./node_modules/buffer/index.js
var buffer = __webpack_require__(9922);
;// ./src/cv.tsx




globalThis.Buffer = buffer/* Buffer */.hp;
react_pdf_browser/* Font */.KQ.register({ family: 'Roboto', src: '/Roboto-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
react_pdf_browser/* Font */.KQ.register({ family: 'Roboto', src: '/Roboto-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold' });
react_pdf_browser/* Font */.KQ.register({ family: 'Roboto', src: '/Roboto-Thin.ttf', fontWeight: 'thin' });
react_pdf_browser/* Font */.KQ.register({ family: 'Roboto', src: '/Roboto-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal' });
const backgroundColor = '#E4E4E4';
const primaryColor = '#7b8d6c';
const primaryColorLight = '#d6e0ce';
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
        fontWeight: 'normal',
        fontSize: 24,
        color: primaryColor,
    },
    headerTitle: {
        paddingBottom: 10,
        fontSize: 18,
        color: secondaryColor,
    },
    summary: {
        fontSize: 9,
    },
    headerContentLeft: {
        marginLeft: 20,
        width: '72%',
        maxWidth: '72%',
        textAlign: 'left',
        paddingRight: 20,
    },
    headerContentRight: {
        width: '28%',
        maxWidth: '28%',
        flexDirection: 'column',
        fontSize: 8,
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
        backgroundColor: primaryColorLight,
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
});
function CV() {
    return (react.createElement(react_pdf_browser/* Document */.yo, { title: `${data_name} CV`, author: data_name, subject: 'CV', language: 'en', pageLayout: 'singlePage', pageMode: 'fullScreen' },
        react.createElement(react_pdf_browser/* Page */.YW, { size: "A4", orientation: 'portrait', style: styles.page },
            react.createElement(react_pdf_browser/* View */.Ss, { style: styles.header },
                react.createElement(react_pdf_browser/* View */.Ss, { style: styles.headerContentLeft },
                    react.createElement(react_pdf_browser/* Text */.EY, { style: styles.headerName }, data_name),
                    react.createElement(react_pdf_browser/* Text */.EY, { style: styles.headerTitle }, title),
                    react.createElement(react_pdf_browser/* Text */.EY, { style: styles.summary }, summary.short)),
                react.createElement(react_pdf_browser/* View */.Ss, { style: styles.headerContentRight },
                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetails },
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Svg */.BS, { viewBox: "0 0 512 512", style: { width: 10, height: 10 } },
                                react.createElement(react_pdf_browser/* Path */.wA, { fill: primaryColor, d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" })),
                            react.createElement(react_pdf_browser/* Text */.EY, { style: { marginLeft: 4 } }, data_location)),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Svg */.BS, { viewBox: "0 0 512 512", style: { width: 10, height: 10 } },
                                react.createElement(react_pdf_browser/* Path */.wA, { fill: primaryColor, d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" })),
                            react.createElement(react_pdf_browser/* Text */.EY, { style: { marginLeft: 4 } }, email.short)),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Svg */.BS, { viewBox: "0 0 512 512", style: { width: 10, height: 10 } },
                                react.createElement(react_pdf_browser/* Path */.wA, { fill: primaryColor, d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.91 0 54.41 0 24.91 24.09.72 53.79.72s53.79 24.2 53.79 53.69c0 29.5-24.09 53.69-53.79 53.69zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.4-79.2-48.4 0-55.8 37.8-55.8 76.8V448h-92.68V148.9h88.96v40.8h1.28c12.4-23.6  42.68-48.4 87.88-48.4 94 0 111.28 61.9 111.28 142.3V448z" })),
                            react.createElement(react_pdf_browser/* Text */.EY, { style: { marginLeft: 4 } }, linkedIn.short)),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Svg */.BS, { viewBox: "0 0 512 512", style: { width: 10, height: 10 } },
                                react.createElement(react_pdf_browser/* Path */.wA, { fill: primaryColor, d: "M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" })),
                            react.createElement(react_pdf_browser/* Text */.EY, { style: { marginLeft: 4 } }, website.short)),
                        react.createElement(react_pdf_browser/* View */.Ss, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser/* Svg */.BS, { viewBox: "0 0 24 24", style: { width: 10, height: 10 }, preserveAspectRatio: "xMidYMid meet" },
                                react.createElement(react_pdf_browser/* Path */.wA, { fill: primaryColor, d: "M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.287-.01-1.04-.015-2.04-3.338.725-4.042-1.416-4.042-1.416-.546-1.386-1.333-1.758-1.333-1.758 -1.09-.746.084-.731.084-.731 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 3.492.998.108-.775.418-1.305.76-1.605 -2.665-.303-5.466-1.336-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.125-.303-.536-1.525.117-3.176 0 0 1.008-.323 3.301 1.23 1.008-.404 3.297-.404 3.297-.404 2.292-1.553 3.297-1.23 3.297-1.23.653 1.651.242 2.873.117 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.103.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.697.824.58C20.565 22.092 24 17.592 24 12  24 5.371 18.629 0 12 0z" })),
                            react.createElement(react_pdf_browser/* Text */.EY, { style: { marginLeft: 4 } }, gitHub.short))))),
            react.createElement(react_pdf_browser/* View */.Ss, { style: styles.cvContents },
                react.createElement(react_pdf_browser/* View */.Ss, { style: styles.section },
                    react.createElement(react_pdf_browser/* Text */.EY, { style: styles.sectionTitle }, "Work experience"),
                    react.createElement(react_pdf_browser/* View */.Ss, { style: styles.sectionContent }, work.filter(x => x.forCV).map((x) => (react.createElement(react_pdf_browser/* View */.Ss, { key: x.role + x.company, style: styles.sectionItem },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3YudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0SCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWhDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBRTFCLElBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ25ILElBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzlHLElBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN6RixJQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFFB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
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
                w.description ? (react.createElement("ul", null, w.description.map(d => (react.createElement("li", { key: d }, d))))) : '',
                w.technologies ? (react.createElement("span", { className: 'technologies' }, w.technologies.split(',').map(t => (react.createElement(Badge/* default */.A, { className: 'technology', pill: true, bg: "light", text: "dark", key: t }, t))))) : '')))))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBlcmllbmNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlCLE1BQU0sQ0FBQyxPQUFPLFVBQVUsVUFBVTtJQUMvQixPQUFPLENBQ0osaUNBQVMsU0FBUyxFQUFDLG9CQUFvQjtRQUNwQyw2QkFBSyxTQUFTLEVBQUMsZUFBZTtZQUMzQiw0QkFBSSxTQUFTLEVBQUMsU0FBUzs7Z0JBQWlCLG9CQUFDLGVBQWUsSUFBQyxJQUFJLEVBQUUsV0FBVyxHQUFJLENBQUs7WUFDbkYsNkJBQUssU0FBUyxFQUFDLFNBQVMsSUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDZCw2QkFBSyxTQUFTLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPO2dCQUMxQyxvQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFlBQVk7b0JBQ3hCLG9CQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzt3QkFDMUMsNEJBQUksU0FBUyxFQUFDLE9BQU8sSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFNO3dCQUNsQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyw0QkFBSSxTQUFTLEVBQUMsUUFBUTs7NEJBQUksQ0FBQyxDQUFDLE1BQU07aUNBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDM0QsNEJBQUksU0FBUyxFQUFDLFNBQVM7NEJBQUMsMkJBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBSyxDQUFLLENBQ2hFO29CQUNOLG9CQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzt3QkFDM0MsNEJBQUksU0FBUyxFQUFDLE9BQU8sSUFBRSxDQUFDLENBQUMsUUFBUSxDQUFNO3dCQUN2Qyw0QkFBSSxTQUFTLEVBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQU0sQ0FDL0IsQ0FDSDtnQkFDTCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNkLGdDQUNJLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDckIsNEJBQUksR0FBRyxFQUFFLENBQUMsSUFBRyxDQUFDLENBQU0sQ0FBQyxDQUFDLENBQ3ZCLENBQ1AsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDTCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNmLDhCQUFNLFNBQVMsRUFBQyxjQUFjLElBQzFCLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2pDLG9CQUFDLEtBQUssSUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLElBQUksUUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLENBQUMsSUFBRyxDQUFDLENBQVMsQ0FDL0UsQ0FBQyxDQUNFLENBQ1QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNILENBQ1IsQ0FBQyxDQUNDLENBQ0gsQ0FDQyxDQUNaLENBQUM7QUFDTCxDQUFDIn0=
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
                                                react.createElement("a", { href: "../assets/Xenakis Nikolaos CV.pdf", download: "Xenakis Nikolaos CV.pdf", style: { cursor: 'pointer' } },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xILE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QixPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZLLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLFVBQVUsTUFBTSxjQUFjLENBQUM7QUFFdEMsTUFBTSxDQUFDLE9BQU8sVUFBVSxHQUFHO0lBQ3pCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsRCxPQUFPLENBQ0w7UUFDRSxvQkFBQyxLQUFLLElBQUMsU0FBUyxFQUFDLFNBQVMsRUFB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
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