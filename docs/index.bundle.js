/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8352:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(5466);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(3897);
// EXTERNAL MODULE: ./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js + 11 modules
var react_pdf_browser_es = __webpack_require__(6115);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 19 modules
var Modal = __webpack_require__(5408);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(7622);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(7886);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Badge.js
var Badge = __webpack_require__(6502);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(3024);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(9417);
;// CONCATENATED MODULE: ./src/data.ts
const data_name = 'Xenakis Nikos';
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
const stackOverflowLink = 'https://stackoverflow.com/users/8756896/nikos-xenakis';
const locationMaps = 'https://www.google.co.uk/maps/place/Edinburgh/@55.9412015,-3.2465378,13z/data=!3m1!4b1!4m6!3m5!1s0x4887b800a5982623:0x64f2147b7ce71727!8m2!3d55.953252!4d-3.188267!16zL20vMDJtNzc?entry=ttu';
const CVLink = 'https://github.com/nikosxenakis/nikosxenakis-website/blob/master/src/assets/resume.pdf';
const summary = 'Passion and devotion are the cornerstones of my professional approach. I am deeply committed to staying updated, export constantly researching innovative products and cutting-edge methods to ensure that my projects not only meet but exceed expectations. With a rich background in designing, developing, and testing software, I bring a blend of technical expertise and creative problem-solving to every challenge. My goal is to deliver solutions that are not just efficient and reliable, but also future-ready. I thrive in collaborative environments and am always eager to learn and grow alongside my peers.';
const work = [{
        role: 'Senior Software Engineer',
        company: 'Welbot',
        companyUrl: 'https://welbot.io',
        location: 'Edinburgh, UK',
        date: 'Nov 2022 – Present',
        description: `At Welbot Ltd., I take pride in crafting state-of-the-art wellbeing products tailored for enterprises. As a Senior Software Engineer, my role goes beyond just coding; it's about understanding the unique challenges businesses face and translating those needs into innovative software solutions. I am dedicated to enhancing workplace wellbeing through cutting-edge technology and research-driven solutions.`,
        technologies: 'Web stack, TypeScript, ElectronJS, AWS, Terraform, GitHub CI, project management',
    }, {
        role: 'Senior Software Engineer',
        company: 'SeeByte',
        companyUrl: 'http://www.seebyte.com/',
        location: 'Edinburgh, UK',
        date: 'Aug 2021 – Nov 2022',
        description: 'Working as a software development engineer at the SeeTrack product producing Mission Planning, Monitoring, and Post Mission Analysis software for UUVs.',
        technologies: 'Java, C#, C++, NSIS, WIX Toolset, Netbeans platform, .NET Framework, WPF, Jenkins',
    }, {
        role: 'Software Engineer',
        company: 'SeeByte',
        companyUrl: 'http://www.seebyte.com/',
        location: 'Edinburgh, UK',
        date: 'Sept 2019 – Aug 2021',
    }, {
        role: 'Software Engineer Intern',
        company: 'Information Services of UoE',
        companyUrl: 'https://www.ed.ac.uk/information-services',
        location: 'Edinburgh, UK',
        date: 'April 2019 – June 2019',
        description: `Created an XML-based publishing workflow, including tool evaluation, OJS integration, customization, and workflow establishment for academic journals.`,
    }, {
        role: 'Software Engineer',
        company: 'Wings ICT Solutions',
        companyUrl: 'http://wings-ict-solutions.eu',
        location: 'Athens, Greece',
        date: 'April 2017 – Aug 2018',
        description: 'Working for Wings ICT Solutions in order to develop web services for National Bank of Greece. Requirements analysis, design, and implementation of user interface CRM bank systems.',
        technologies: 'HTML, Typescript, Angular, CSS, SASS, LESS, C#, .NET',
    }, {
        role: 'Teaching Assistant',
        company: 'Computer Science Department, University of Crete',
        companyShort: 'Computer Science Department, UoC',
        companyUrl: 'http://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2015 – Jan 2016',
        description: 'Part of the program "TheProfit" which allows to the best undergraduate students of the department to aid University`s academic work. Role: Undergraduate Teaching Assistant at "Introduction to Computer Science" course'
    }, {
        role: 'Undergraduate Trainee',
        company: 'FORTH (Research Center)',
        companyUrl: 'https://www.forth.gr',
        location: 'Heraklion, Greece',
        date: 'Jun 2015 – Aug 2015',
        description: 'Conducting Research in Big Data Systems using acceleration mechanisms.',
        technologies: 'HDFS, MapReduce, HBase, Apache Phoenix, Spark, CUDA, OpenCL',
    }];
const education = [{
        role: 'Msc in High Performance Computing with Data Science',
        roleShort: 'Msc in HPC with Data Science',
        company: 'University of Edinburgh',
        companyUrl: 'https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2019&id=871',
        location: 'Edinburgh, UK',
        date: 'Sep 2018 – Aug 2019',
        grade: '75% (Distinction)',
        dissertation: 'Parallelisation of frame processing for Optical Coherence Tomography (85%)',
        awards: 'Nominated the best student award of the MSc program. Highly Skilled Workforce Scholarship, candidates must have the international equivalent of a UK first class or 2:1 Honours degree at undergraduate level.',
    }, {
        role: 'Bachelor in Computer Science',
        company: 'University of Crete',
        companyUrl: 'https://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2012 – Jul 2016',
        grade: '84%',
        dissertation: ' ICE Editor is a visual programming language for end-user programmers for IOT devices. ICE Editor is a web client application written in JavaScript.',
        awards: '3 years in a row awarded with the memorial scholarship "Stelios Orfanoudakis". This scholarship is given to the top 3 students of the Computer Science department each year.',
    }, {
        role: 'IT Essentials: PC Hardware and Software',
        roleShort: 'IT Essentials',
        company: 'Cisco Network Academy',
        location: 'Chania, Greece',
        date: 'Jun 2011 - Aug 2011',
        description: 'IT Essentials covers fundamental computer skills. It includes labs that provide practical experience using simulation tools.',
    }];
const projects = [{
        name: 'Georgioupolis Transfers',
        date: '2017',
        url: 'https://georgioupolis-taxi.firebaseapp.com/',
        description: 'Website for booking transfer and tours in Crete, Greece.',
        technologies: 'Typescript, Angular, LESS, NodeJS',
    }, {
        name: 'ImagInLexis',
        date: 'June 2016 - August 2016',
        url: 'https://github.com/nikosxenakis/ImagInLexis',
        description: `Hired to create a desktop application for a bachelor's thesis focused on Logotherapy. The application primarily enhances speech therapy intervention plans by incorporating a series of tests for patients to undertake. Designed with a gamified approach, the application caters specifically to children, making the therapeutic process engaging and interactive.`,
        technologies: 'Java, JavaFX',
    }, {
        name: 'ICE Editor',
        date: 'March 2016 - June 2016',
        url: 'https://github.com/nikosxenakis/ICE_Editor',
        description: `A web-based platform designed for end-users to craft straightforward applets for IoT (Internet Of Things) devices. This intuitive editor minimizes both compile and runtime errors, offering a drag-and-drop interface alongside value editing capabilities. It features a versatile API, allowing users to swiftly develop programs using Javascript or by defining them in JSON files.`,
        technologies: 'Javascript, HTML, CSS, Canvas.js',
    }, {
        name: '1942',
        date: 'November 2015 - January 2016',
        url: 'https://www.youtube.com/watch?v=kdICR49vbvg',
        description: `1942, a beloved retro video game from 1984, has been reimagined in this project. Utilizing the original sprite sheets, the game has been recreated with the C++ programming language, leveraging the SDL cross-platform software development library.`,
        technologies: 'C++, SDL',
    }];
const languages = [{
        name: '🇬🇷 Greek',
        level: 'Native Speaker',
        stars: 5,
    }, {
        name: '🇬🇧 English',
        level: 'Advanced Level',
        stars: 4,
    }, {
        name: '🇩🇪 German',
        level: 'Beginner Level',
        stars: 1,
    }];
const interests = [{
        name: '♟️ Chess'
    }, {
        name: '🕺🏽 Salsa and Cretan traditional dances',
    }, {
        name: '💪🏽 Working out',
    }];
const skills = [{
        name: 'C#, .NET, Java',
        level: 'Proficient',
        width: '100%',
    }, {
        name: 'Webstack (HTML, CSS, JS), Typescript, NodeJS, React',
        level: 'Proficient',
        width: '100%',
    }, {
        name: 'AWS, Terraform',
        level: 'Proficient',
        width: '100%',
    }, {
        name: 'Jenkins, GitHub CI',
        level: 'Advanced',
        width: '95%',
    }, {
        name: 'Data Management (PostGRE, DynamoDB)',
        level: 'Advanced',
        width: '90%',
    }, {
        name: 'C, C++',
        level: 'Advanced',
        width: '80%',
    }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxlQUFlLENBQUM7QUFDcEMsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLDBCQUEwQixDQUFDO0FBQ2hELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNsQixLQUFLLEVBQUUsMEJBQTBCO0lBQ2pDLElBQUksRUFBRSxpQ0FBaUM7Q0FDekMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRztJQUNyQixLQUFLLEVBQUUsOEJBQThCO0lBQ3JDLElBQUksRUFBRSwwQ0FBMEM7Q0FDbEQsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUNuQixLQUFLLEVBQUUseUJBQXlCO0lBQ2hDLElBQUksRUFBRSxpQ0FBaUM7Q0FDekMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLHVEQUF1RCxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyw2TEFBNkwsQ0FBQztBQUMxTixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsd0ZBQXdGLENBQUM7QUFDL0csTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLGdtQkFBZ21CLENBQUM7QUFDeG5CLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO1FBQ2xCLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLG1CQUFtQjtRQUMvQixRQUFRLEVBQUUsZUFBZTtRQUN6QixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFdBQVcsRUFBRSxzWkFBc1o7UUFDbmEsWUFBWSxFQUFFLGtGQUFrRjtLQUNsRyxFQUFFO1FBQ0EsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxPQUFPLEVBQUUsU0FBUztRQUNsQixVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLFFBQVEs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
;// CONCATENATED MODULE: ./src/cv.tsx



react_pdf_browser_es/* Font */.Zx.register({ family: 'Roboto', src: '/Roboto-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
react_pdf_browser_es/* Font */.Zx.register({ family: 'Roboto', src: '/Roboto-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold' });
react_pdf_browser_es/* Font */.Zx.register({ family: 'Roboto', src: '/Roboto-Light.ttf', fontStyle: 'normal', fontWeight: 'light' });
react_pdf_browser_es/* Font */.Zx.register({ family: 'Roboto', src: '/Roboto-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal' });
react_pdf_browser_es/* Font */.Zx.registerEmojiSource({
    format: 'png',
    url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});
const backgroundColor = '#E4E4E4';
const primaryColor = '#7b8d6c';
const secondaryColor = '#778492';
const styles = react_pdf_browser_es/* StyleSheet */.mM.create({
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
        fontSize: 26,
        color: primaryColor,
    },
    headerTitle: {
        paddingBottom: 10,
        fontSize: 14,
        color: secondaryColor,
    },
    headerContentLeft: {
        marginLeft: 20,
        width: '70%',
        maxWidth: '70%',
        textAlign: 'left',
    },
    headerContentRight: {
        width: '30%',
        maxWidth: '30%',
        flexDirection: 'column',
    },
    contactDetails: {
        paddingTop: 10,
        fontSize: 8,
    },
    contactDetailsItem: {
        flexDirection: 'row',
        marginBottom: 10,
        fontSize: 9,
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
        marginTop: 10,
        marginBottom: 20,
    },
    section: {
        padding: 10,
    },
    sectionTitle: {
        fontSize: 16,
        paddingBottom: 10,
        color: primaryColor,
    },
    sectionContent: {},
    sectionItem: {
        marginBottom: 12,
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
        width: '30%',
        maxWidth: '30%',
    },
    sectionItemRight: {
        width: '70%',
        maxWidth: '70%',
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
    workItemDetailsTitle: {
        fontWeight: 'bold',
    },
    smallSectionGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallSectionContent: {
        flexDirection: 'column',
    },
    smallSectionText: {
        fontSize: 8,
        marginBottom: 5,
    },
    smallSectionSecondary: {
        color: secondaryColor,
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black',
    },
    technologyItem: {
        backgroundColor: primaryColor,
        color: backgroundColor,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 5,
        marginRight: 1,
    },
});
function CV() {
    return (react.createElement(react_pdf_browser_es/* Document */.BB, { title: `${data_name} CV`, author: data_name, subject: 'CV', language: 'en', pageLayout: 'singlePage', pageMode: 'fullScreen' },
        react.createElement(react_pdf_browser_es/* Page */.T3, { size: "A4", orientation: 'portrait', style: styles.page },
            react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.header },
                react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.headerContentLeft },
                    react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.headerName }, data_name),
                    react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.headerTitle }, title)),
                react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.headerContentRight },
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.contactDetails },
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser_es/* Text */.xv, null,
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: email.link, style: styles.linkStyle },
                                    "\uD83D\uDCE7 ",
                                    email.short))),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser_es/* Text */.xv, null,
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: linkedIn.link, style: styles.linkStyle },
                                    react.createElement(react_pdf_browser_es/* Image */.Ee, { src: './assets/images/linkedin.png', style: { width: 10, height: 10 } }),
                                    " ",
                                    linkedIn.short))),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser_es/* Text */.xv, null,
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: gitHub.link, style: styles.linkStyle },
                                    react.createElement(react_pdf_browser_es/* Image */.Ee, { src: './assets/images/github.png', style: { width: 10, height: 10 } }),
                                    " ",
                                    gitHub.short)))))),
            react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.cvContents },
                react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.section },
                    react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionTitle }, "Work experience"),
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionContent }, work.map((x, i) => (react.createElement(react_pdf_browser_es/* View */.G7, { key: i, style: styles.sectionItem },
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemLeft },
                            react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemTitle },
                                x.role,
                                " "),
                            x.companyShort && react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemOrganisation },
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: x.companyUrl, style: styles.linkStyle }, x.companyShort),
                                " "),
                            !x.companyShort && x.company && react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemOrganisation },
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: x.companyUrl, style: styles.linkStyle }, x.company),
                                " "),
                            react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemDate },
                                x.location,
                                " (",
                                x.date,
                                ")")),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemRight },
                            react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemContents },
                                x.description &&
                                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemContent },
                                        react.createElement(react_pdf_browser_es/* Text */.xv, null, x.description)),
                                x.technologies &&
                                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemContent }, x.technologies.split(',').map((y, j) => (react.createElement(react_pdf_browser_es/* View */.G7, { key: j, style: styles.technologyItem },
                                        react.createElement(react_pdf_browser_es/* Text */.xv, null, y)))))))))))),
                react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.section },
                    react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionTitle }, "Education"),
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionContent }, education.map((x, i) => (react.createElement(react_pdf_browser_es/* View */.G7, { key: i, style: styles.sectionItem },
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemLeft },
                            x.roleShort && react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemTitle },
                                x.roleShort,
                                " "),
                            !x.roleShort && x.role && react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemTitle },
                                x.role,
                                " "),
                            x.company && react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemOrganisation },
                                x.company,
                                " "),
                            react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemDate }, x.date)),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemRight },
                            react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemContents },
                                x.description &&
                                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemContent },
                                        react.createElement(react_pdf_browser_es/* Text */.xv, null, x.description)),
                                x.awards &&
                                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemContent },
                                        react.createElement(react_pdf_browser_es/* Text */.xv, null,
                                            react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.workItemDetailsTitle }, "Scholarships "),
                                            " ",
                                            x.awards)),
                                x.dissertation &&
                                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemContent },
                                        react.createElement(react_pdf_browser_es/* Text */.xv, null,
                                            react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.workItemDetailsTitle }, "Dissertation "),
                                            " ",
                                            x.dissertation))))))))),
                react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionGroup },
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.section },
                        react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionTitle }, "Projects"),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionContent }, projects.map((x, i) => (react.createElement(react_pdf_browser_es/* Text */.xv, { key: i, style: styles.smallSectionText },
                            react.createElement(react_pdf_browser_es/* Link */.rU, { src: x.url, style: styles.linkStyle }, x.name),
                            " "))))),
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.section },
                        react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionTitle }, "Languages"),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionContent }, languages.map((x, i) => (react.createElement(react_pdf_browser_es/* Text */.xv, { key: i, style: styles.smallSectionText },
                            x.name,
                            " - ",
                            react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.smallSectionSecondary }, x.level)))))),
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.section },
                        react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionTitle }, "Interests"),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionContent }, interests.map((x, i) => (react.createElement(react_pdf_browser_es/* Text */.xv, { key: i, style: styles.smallSectionText },
                            x.name,
                            " "))))))))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3YudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBYSxNQUFNLHFCQUFxQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFL0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDM0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDeEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFMUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3RCLE1BQU0sRUFBRSxLQUFLO0lBQ2IsR0FBRyxFQUFFLDhEQUE4RDtDQUNyRSxDQUFDLENBQUM7QUFFSCxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFDbEMsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQy9CLE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUVqQyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQzlCLElBQUksRUFBRTtRQUNILGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGVBQWUsRUFBRSxlQUFlO1FBQ2hDLFVBQVUsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsTUFBTSxFQUFFO1FBRUwsVUFBVSxFQUFFLEVBQUU7UUFDZCxhQUFhLEVBQUUsRUFBRTtRQUNqQixhQUFhLEVBQUUsS0FBSztLQUN0QjtJQUNELFVBQVUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLFlBQVk7S0FDckI7SUFDRCxXQUFXLEVBQUU7UUFDVixhQUFhLEVBQUUsRUFBRTtRQUNqQixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxjQUFjO0tBRXZCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDaEIsVUFBVSxFQUFFLEVBQUU7UUFDZCxLQUFLLEVBQUUsS0FBSztRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLE1BQU07S0FDbkI7SUFDRCxrQkFBa0IsRUFBRTtRQUNqQixLQUFLLEVBQUUsS0FBSztRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsYUFBYSxFQUFFLFFBQVE7S0FDekI7SUFDRCxjQUFjLEVBQUU7UUFDYixVQUFVLEVBQUUsRUFBRTtRQUNkLFFBQVEsRUFBRSxDQUFDO0tBQ2I7SUFDRCxrQkFBa0IsRUFBRTtRQUNqQixhQUFhLEVBQUUsS0FBSztRQUNwQixZQUFZLEVBQUUsRUFBRTtRQUNoQixRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLE9BQU8sRUFBRSxNQUFNO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0gsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsQ0FBQztLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNULFVBQVUsRUFBRSxFQUFFO1FBQ2QsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFlBQVksRUFBRSxFQUFFO0tBQ2xCO0lBQ0QsT0FBTyxFQUFFO1FBQ04sT0FBTyxFQUFFLEVBQUU7S0FFYjtJQUNELFlBQVksRUFBRTtRQUNYLFFBQVEsRUFBRSxFQUFFO1FBQ1osYUFBYSxFQUFFLEVBQUU7UUFDakIsS0FBSyxFQUFFLFlBQVk7S0FDckI7SUFDRCxjQUFjLEVBQUUsRUFDZjtJQUNELFdBQVcsRUFBRTtRQUNWLFlBQVksRUFBRSxFQUFFO1FBQ2hCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsY0FBYyxFQUFFLGVBQWU7UUFDL0IsYUFBYSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxpQkFBaUIsRUFBRTtRQUNoQixhQUFhLEVBQUUsS0FBSztRQUVwQixRQUFRLEVBQUUsRUFBRTtRQUNaLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxPQUFPO0tBRXBCO0lBQ0QsZUFBZSxFQUFFO1FBR2QsU0FBUyxFQUFFLE1BQU07UUFFakIsS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsS0FBSztLQUNqQjtJQUNELGdCQUFnQixFQUFFO1FBS2YsS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsS0FBSztLQUNqQjtJQUNELG9CQUFvQixFQUFFO1FBQ25CLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFFBQVEsRUFBRSxDQUFDO0tBQ2I7SUFDRCxnQkFBZ0IsRUFBRTtRQUNmLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osWUFBWSxFQUFFLENBQUM7S0FDakI7SUFDRCx1QkFBdUIsRUFBRTtRQUN0QixRQUFRLEVBQUUsQ0FBQztRQUNYLFlBQVksRUFBRSxDQUFDO0tBQ2pCO0lBQ0QsZUFBZSxFQUFFO1FBQ2QsUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsY0FBYztLQUN2QjtJQUNELG1CQUFtQixFQUFFO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsV0FBVyxFQUFFLEVBQUU7UUFDZixZQUFZLEVBQUUsRUFBRTtLQUNsQjtJQUNELGtCQUFrQixFQUFFO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFlBQVksRUFBRSxDQUFDO0tBQ2pCO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDbkIsVUFBVSxFQUFFLE1BQU07S0FDcEI7SUFDRCxpQkFBaUIsRUFBRTtRQUNoQixhQUFhLEVBQUUsS0FBSztRQUVwQixjQUFjLEVBQUUsZUFBZTtLQUNqQztJQUNELG1CQUFtQixFQUFFO1FBQ2xCLGFBQWEsRUFBRSxRQUFRO0tBQ3pCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDZixRQUFRLEVBQUUsQ0FBQztRQUNYLFlBQVksRUFBRSxDQUFDO0tBQ2pCO0lBQ0QscUJBQXFCLEVBQUU7UUFDcEIsS0FBSyxFQUFFLGNBQWM7S0FDdkI7SUFDRCxTQUFTLEVBQUU7UUFDUixjQUFjLEVBQUUsTUFBTTtRQUN0QixLQUFLLEVBQUUsT0FBTztLQUNoQjtJQUNELGNBQWMsRUFBRTtRQUNiLGVBQWUsRUFBRSxZQUFZO1FBQzdCLEtBQUssRUFBRSxlQUFlO1FBQ3RCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsYUFBYSxFQUFFLENBQUM7UUFDaEIsV0FBVyxFQUFFLENBQUM7UUFDZCxZQUFZLEVBQUUsQ0FBQztRQUNmLFlBQVksRUFBRSxDQUFDO1FBQ2YsV0FBVyxFQUFFLENBQUM7S0FDaEI7Q0FDSCxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxVQUFVLEVBQUU7SUFDdkIsT0FBTyxDQUNKLG9CQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxZQUFZO1FBQ2xILG9CQUFDLElBQUksSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ3RELG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3ZCLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtvQkFDbEMsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxJQUFHLElBQUksQ0FBUTtvQkFDN0Msb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxJQUFHLEtBQUssQ0FBUSxDQUMzQztnQkFDUCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0I7b0JBQ25DLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWM7d0JBQy9CLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjs0QkFDbkMsb0JBQUMsSUFBSTtnQ0FBQyxvQkFBQyxJQUFJLElBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTOztvQ0FBTSxLQUFLLENBQUMsS0FBSyxDQUFRLENBQU8sQ0FDaEY7d0JBQ1Asb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsa0JBQWtCOzRCQUNuQyxvQkFBQyxJQUFJO2dDQUFDLG9CQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7b0NBQUUsb0JBQUMsS0FBSyxJQUFDLEdBQUcsRUFBQyw4QkFBOEIsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBSTs7b0NBQUUsUUFBUSxDQUFDLEtBQUssQ0FBUSxDQUFPLENBQ2xLO3dCQUNQLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjs0QkFDbkMsb0JBQUMsSUFBSTtnQ0FBQyxvQkFBQyxJQUFJLElBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTO29DQUFFLG9CQUFDLEtBQUssSUFBQyxHQUFHLEVBQUMsNEJBQTRCLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUk7O29DQUFFLE1BQU0sQ0FBQyxLQUFLLENBQVEsQ0FBTyxDQUM1SixDQUNILENBQ0gsQ0FDSDtZQUNQLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7Z0JBQzNCLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU87b0JBQ3hCLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksc0JBQXdCO29CQUN4RCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLElBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUNqQixvQkFBQyxJQUFJLElBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVc7d0JBQ3BDLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGVBQWU7NEJBQ2hDLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjtnQ0FBRyxDQUFDLENBQUMsSUFBSTtvQ0FBUzs0QkFDckQsQ0FBQyxDQUFDLFlBQVksSUFBSSxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyx1QkFBdUI7Z0NBQUUsb0JBQUMsSUFBSSxJQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFHLENBQUMsQ0FBQyxZQUFZLENBQVE7b0NBQVE7NEJBQ2hKLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLHVCQUF1QjtnQ0FBRSxvQkFBQyxJQUFJLElBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBUTtvQ0FBUTs0QkFDMUosb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsZUFBZTtnQ0FBRyxDQUFDLENBQUMsUUFBUTs7Z0NBQUksQ0FBQyxDQUFDLElBQUk7b0NBQVMsQ0FDL0Q7d0JBQ1Asb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsZ0JBQWdCOzRCQUNqQyxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7Z0NBQ25DLENBQUMsQ0FBQyxXQUFXO29DQUNYLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjt3Q0FDbkMsb0JBQUMsSUFBSSxRQUFFLENBQUMsQ0FBQyxXQUFXLENBQVEsQ0FDeEI7Z0NBRVQsQ0FBQyxDQUFDLFlBQVk7b0NBQ1osb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsa0JBQWtCLElBRWxDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3RDLG9CQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYzt3Q0FDdkMsb0JBQUMsSUFBSSxRQUFFLENBQUMsQ0FBUSxDQUNaLENBQ1QsQ0FBQyxDQUNFLENBRU4sQ0FDSCxDQUNILENBQ1QsQ0FBQyxDQUNFLENBQ0g7Z0JBQ1Asb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTztvQkFDeEIsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxnQkFBa0I7b0JBQ2xELG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWMsSUFDOUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3RCLG9CQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVzt3QkFDcEMsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsZUFBZTs0QkFDL0IsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7Z0NBQUcsQ0FBQyxDQUFDLFNBQVM7b0NBQVM7NEJBQzFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjtnQ0FBRyxDQUFDLENBQUMsSUFBSTtvQ0FBUzs0QkFDaEYsQ0FBQyxDQUFDLE9BQU8sSUFBSSxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyx1QkFBdUI7Z0NBQUcsQ0FBQyxDQUFDLE9BQU87b0NBQVM7NEJBQzlFLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGVBQWUsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFRLENBQ2hEO3dCQUNQLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjs0QkFDakMsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsbUJBQW1CO2dDQUNuQyxDQUFDLENBQUMsV0FBVztvQ0FDWCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0I7d0NBQ25DLG9CQUFDLElBQUksUUFBRSxDQUFDLENBQUMsV0FBVyxDQUFRLENBQ3hCO2dDQUVULENBQUMsQ0FBQyxNQUFNO29DQUNOLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjt3Q0FDbkMsb0JBQUMsSUFBSTs0Q0FBQyxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxvQkFBb0Isb0JBQXNCOzs0Q0FBRSxDQUFDLENBQUMsTUFBTSxDQUFRLENBQ2xGO2dDQUVULENBQUMsQ0FBQyxZQUFZO29DQUNaLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjt3Q0FDbkMsb0JBQUMsSUFBSTs0Q0FBQyxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxvQkFBb0Isb0JBQXNCOzs0Q0FBRSxDQUFDLENBQUMsWUFBWSxDQUFRLENBQ3hGLENBRU4sQ0FDSCxDQUNILENBQ1QsQ0FBQyxDQUNFLENBQ0g7Z0JBQ1Asb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsaUJBQWlCO29CQUNsQyxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO3dCQUN4QixvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLGVBQWlCO3dCQUNqRCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsSUFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3JCLG9CQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsZ0JBQWdCOzRCQUFFLG9CQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFRO2dDQUFRLENBQ2xILENBQUMsQ0FDRSxDQUNIO29CQUNQLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU87d0JBQ3hCLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksZ0JBQWtCO3dCQUNsRCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsSUFDbkMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3RCLG9CQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsZ0JBQWdCOzRCQUFHLENBQUMsQ0FBQyxJQUFJOzs0QkFBSSxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFRLENBQU8sQ0FDN0gsQ0FBQyxDQUNFLENBQ0g7b0JBQ1Asb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTzt3QkFDeEIsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxnQkFBa0I7d0JBQ2xELG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixJQUNuQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDdEIsb0JBQUMsSUFBSSxJQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7NEJBQUcsQ0FBQyxDQUFDLElBQUk7Z0NBQVMsQ0FDaEUsQ0FBQyxDQUNFLENBQ0gsQ0FDSCxDQUNILENBQ0gsQ0FDQyxDQUNiLENBQUM7QUFDTCxDQUFDIn0=
;// CONCATENATED MODULE: ./src/app.tsx








function App() {
    const [showCV, setShowCV] = react.useState(false);
    const [shakeLinkedIn, setShakeLinkedIn] = react.useState(false);
    const [shakeGithub, setShakeGithub] = react.useState(false);
    const [shakeStackOverflow, setShakeStackOverflow] = react.useState(false);
    const [shakeDownload, setShakeDownload] = react.useState(false);
    return (react.createElement(react.Fragment, null,
        react.createElement(Modal/* default */.Z, { className: 'cvModal', show: showCV, onHide: () => { setShowCV(false); } },
            react.createElement(react_pdf_browser_es/* PDFViewer */.Z$, null,
                react.createElement(CV, null))),
        react.createElement("header", { className: "header" },
            react.createElement(Container/* default */.Z, null,
                react.createElement(Row/* default */.Z, null,
                    react.createElement(Col/* default */.Z, { xs: 0, sm: 0, xl: 3 }),
                    react.createElement(Col/* default */.Z, { xs: 12, sm: 2, xl: 2, className: 'avatar' },
                        react.createElement("img", { src: '../assets/images/avatar.png', alt: "Xenakis Nikos" })),
                    react.createElement(Col/* default */.Z, { xs: 12, sm: 8, xl: 4 },
                        react.createElement("div", { className: "profile-content" },
                            react.createElement(Row/* default */.Z, null,
                                react.createElement(Col/* default */.Z, { xs: 12 },
                                    react.createElement("h1", { className: "name" }, data_name)),
                                react.createElement(Col/* default */.Z, { xs: 12 },
                                    react.createElement("h2", { className: "title" }, title)),
                                react.createElement(Col/* default */.Z, { xs: 12 },
                                    react.createElement("ul", { className: "social list-inline" },
                                        react.createElement("li", null,
                                            react.createElement("a", { href: linkedIn.link },
                                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_brands_svg_icons/* faLinkedin */.D9H, shake: shakeLinkedIn, onMouseOver: () => { setShakeLinkedIn(true); }, onMouseLeave: () => { setShakeLinkedIn(false); } }))),
                                        react.createElement("li", null,
                                            react.createElement("a", { href: gitHub.link },
                                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_brands_svg_icons/* faGithub */.zhw, shake: shakeGithub, onMouseOver: () => { setShakeGithub(true); }, onMouseLeave: () => { setShakeGithub(false); } }))),
                                        react.createElement("li", null,
                                            react.createElement("a", { href: stackOverflowLink },
                                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_brands_svg_icons/* faStackOverflow */.mGT, shake: shakeStackOverflow, onMouseOver: () => { setShakeStackOverflow(true); }, onMouseLeave: () => { setShakeStackOverflow(false); } })))))))),
                    react.createElement(Col/* default */.Z, { xs: 12, sm: 2, xl: 1, className: 'resume' },
                        react.createElement("span", { onClick: () => { setShowCV(true); } },
                            react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faDownload */.q7m, shake: shakeDownload, onMouseOver: () => { setShakeDownload(true); }, onMouseLeave: () => { setShakeDownload(false); } }))),
                    react.createElement(Col/* default */.Z, { xs: 0, sm: 0, xl: 1 })))),
        react.createElement("div", { className: "container sections-wrapper" },
            react.createElement(Row/* default */.Z, null,
                react.createElement(Col/* default */.Z, { xs: 0, sm: 0, xl: 3 }),
                react.createElement(Col/* default */.Z, { xs: 12, sm: 12, md: 8, xl: 5 },
                    react.createElement("section", { className: "about section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Summary"),
                            react.createElement("div", { className: "content" },
                                react.createElement("p", null, summary)))),
                    react.createElement("section", { className: "experience section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" },
                                "Work Experience ",
                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faUserTie */.Cv1 })),
                            react.createElement("div", { className: "content" }, work.map((w, i) => (react.createElement("div", { className: "item", key: i },
                                react.createElement("h3", { className: "title" },
                                    w.role,
                                    " ",
                                    react.createElement("span", { className: "place" },
                                        react.createElement("a", { href: w.companyUrl }, w.company)),
                                    " ",
                                    react.createElement("span", { className: "year" },
                                        w.location,
                                        " (",
                                        w.date,
                                        ")")),
                                react.createElement("p", { className: "description" },
                                    w.description,
                                    w.technologies ? (react.createElement("span", { className: 'technologies' },
                                        react.createElement("br", null),
                                        react.createElement("span", { className: 'title' }, "Technologies"),
                                        w.technologies.split(',').map((t, i) => (react.createElement(Badge/* default */.Z, { pill: true, bg: "light", text: "dark", key: i }, t))))) : ''))))))),
                    react.createElement("section", { className: "education section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" },
                                "Education ",
                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faGraduationCap */.Xf_ })),
                            react.createElement("div", { className: "content" }, education.map((w, i) => (react.createElement("div", { className: "item", key: i },
                                react.createElement("h3", { className: "title" },
                                    w.role,
                                    " ",
                                    react.createElement("span", { className: "place" },
                                        react.createElement("a", { href: w.companyUrl }, w.company)),
                                    " ",
                                    react.createElement("span", { className: "year" },
                                        "(",
                                        w.date,
                                        ")")),
                                react.createElement("ul", null,
                                    w.grade && react.createElement("li", null,
                                        "Grade: ",
                                        w.grade),
                                    w.dissertation && react.createElement("li", null,
                                        "Dissertation: ",
                                        w.dissertation),
                                    w.awards && react.createElement("li", null,
                                        "Awards: ",
                                        w.awards),
                                    w.description && react.createElement("li", null, w.description)))))))),
                    react.createElement("section", { className: "projects section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" },
                                "Projects ",
                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faCode */.dT$ })),
                            react.createElement("div", { className: "content" }, projects.map((w, i) => (react.createElement("div", { className: "item", key: i },
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
                                        react.createElement("span", { className: 'title' }, "Technologies"),
                                        w.technologies.split(',').map((t, i) => (react.createElement(Badge/* default */.Z, { pill: true, bg: "light", text: "dark", key: i }, t))))) : '')))))))),
                react.createElement(Col/* default */.Z, { xs: 12, sm: 12, md: 4, xl: 3, className: "secondary" },
                    react.createElement("aside", { className: "info section" },
                        react.createElement("div", { className: "section-inner small" },
                            react.createElement("h2", { className: "heading" }, "Basic Information"),
                            react.createElement("div", { className: "content" },
                                react.createElement("ul", { className: "list-unstyled" },
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faEnvelope */.FU$ }),
                                        " ",
                                        react.createElement("span", { className: "sr-only" }, "Email:"),
                                        react.createElement("a", { href: email.link }, email.short)),
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faLocationDot */.opg }),
                                        " ",
                                        react.createElement("span", { className: "sr-only" }, "Location:"),
                                        react.createElement("a", { href: locationMaps }, "Edinburgh, UK")),
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faFlag */.RrC }),
                                        " ",
                                        react.createElement("span", { className: "sr-only" }, "Nationality:"),
                                        "Greek"))))),
                    react.createElement("aside", { className: "skills section" },
                        react.createElement("div", { className: "section-inner small" },
                            react.createElement("h2", { className: "heading" }, "Skills"),
                            react.createElement("div", { className: "content" },
                                react.createElement("p", { className: "intro" }),
                                react.createElement("div", { className: "skillset" }, skills.map((s, i) => (react.createElement("div", { className: "item", key: i },
                                    react.createElement("span", { className: "level-title" },
                                        s.name,
                                        " "),
                                    "-",
                                    react.createElement("span", { className: "level-label", "data-toggle": "tooltip", "data-placement": "left", "data-animation": "true" },
                                        " ",
                                        s.level),
                                    react.createElement("div", { className: "level-bar" },
                                        react.createElement("div", { className: "level-bar-inner", style: { width: s.width } }))))))))),
                    react.createElement("aside", { className: "languages section" },
                        react.createElement("div", { className: "section-inner small" },
                            react.createElement("h2", { className: "heading" }, "Languages"),
                            react.createElement("div", { className: "content" },
                                react.createElement("ul", { className: "list-unstyled" }, languages.map((l, i) => (react.createElement("li", { className: "item", key: i },
                                    react.createElement("span", { className: "title" },
                                        react.createElement("strong", null,
                                            l.name,
                                            ": ")),
                                    react.createElement("span", { className: "level" },
                                        l.level,
                                        react.createElement("br", { className: "visible-sm visible-xs" }),
                                        [...Array(l.stars)].map((e, i) => react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faStar */.Tab, key: i })))))))))),
                    react.createElement("aside", { className: "section" },
                        react.createElement("div", { className: "section-inner small" },
                            react.createElement("h2", { className: "heading" }, "Interests"),
                            react.createElement("div", { className: "content" },
                                react.createElement("ul", { className: "list-unstyled" }, interests.map((l, i) => (react.createElement("li", { className: "item", key: i },
                                    react.createElement("span", { className: "title" }, l.name))))))))),
                react.createElement(Col/* default */.Z, { xs: 0, sm: 0, xl: 1 }))),
        react.createElement("footer", { className: "footer" },
            react.createElement("div", { className: "container text-right" },
                react.createElement("small", { className: "copyright" }, "@Copyrights Xenakis Nikos - October 2023")))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlJLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QixPQUFPLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXpLLE1BQU0sQ0FBQyxPQUFPLFVBQVUsR0FBRztJQUN6QixNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FB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
;// CONCATENATED MODULE: ./src/index.tsx





const render = () => {
    const container = document.getElementById('root');
    if (container) {
        const root = client.createRoot(container);
        root.render(react.createElement(App, null));
    }
};
render();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGNBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUM7QUFDeEIsT0FBTyxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLDJCQUEyQixDQUFDO0FBRW5DLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNqQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELElBQUksU0FBUyxFQUFFO1FBQ1osTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRyxDQUFDLENBQUM7S0FDdkI7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLEVBQUUsQ0FBQyJ9

/***/ }),

/***/ 2480:
/***/ (function() {

/* (ignored) */

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
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
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0,
/******/ 			672: 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [514,672,216], function() { return __webpack_require__(8352); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;