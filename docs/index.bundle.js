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
const website = {
    short: 'nikosxenakis.github.io',
    link: 'https://nikosxenakis.github.io',
};
const stackOverflowLink = 'https://stackoverflow.com/users/8756896/nikos-xenakis';
const locationMaps = 'https://www.google.co.uk/maps/place/%CE%96%CF%85%CF%81%CE%AF%CF%87%CE%B7/@47.3774122,8.4543354,12z/data=!4m15!1m8!3m7!1s0x47900b9749bea219:0xe66e8df1e71fdc03!2zzpbPhc-Bzq_Ph863!3b1!8m2!3d47.3768866!4d8.541694!16zL20vMDg5NjY!3m5!1s0x47900b9749bea219:0xe66e8df1e71fdc03!8m2!3d47.3768866!4d8.541694!16zL20vMDg5NjY?entry=ttu';
const summary = 'Passion and devotion are the cornerstones of my professional approach. I am deeply committed to staying updated, export constantly researching innovative products and cutting-edge methods to ensure that my projects not only meet but exceed expectations. With a rich background in designing, developing, and testing software, I bring a blend of technical expertise and creative problem-solving to every challenge. My goal is to deliver solutions that are not just efficient and reliable, but also future-ready. I thrive in collaborative environments and am always eager to learn and grow alongside my peers.';
const work = [{
        role: 'Specialist R&D Engineer',
        company: 'Sphynx Technology Solutions',
        companyUrl: 'https://www.sphynx.ch',
        location: 'Zurich, Switzerland',
        date: 'Fed 2024 - Present',
        description: ``,
        technologies: '',
        forCV: true,
    }, {
        role: 'Senior Software Engineer',
        company: 'Welbot',
        companyUrl: 'https://welbot.io',
        location: 'Edinburgh, UK',
        date: 'Nov 2022 - Jan 2024',
        description: `At Welbot Ltd., I crafted state-of-the-art well-being products tailored for enterprises, going beyond coding to understand business challenges and deliver innovative solutions. I was dedicated to enhancing workplace well-being through cutting-edge technology and research-driven solutions. Additionally,  I introduced CI/CD pipelines for all products, streamlining development and ensuring efficiency.`,
        technologies: 'HTML/CSS,TypeScript,Node.js,ElectronJS,AWS,Terraform,GitHub CI/CD',
        forCV: true,
    }, {
        role: 'Senior Software Engineer',
        company: 'SeeByte',
        companyUrl: 'http://www.seebyte.com/',
        location: 'Edinburgh, UK',
        date: 'Aug 2021 - Nov 2022',
        dateCV: 'Sept 2019 - Nov 2022',
        description: 'I played a key role in developing Mission Planning, Monitoring, and Post Mission Analysis software for Unmanned Underwater Vehicles (UUVs). My dedication and performance led to my rapid promotion to the senior level, making me the fastest promoted engineer in the company at the time. I also actively participated in customer trials, contributing to our overall success.',
        technologies: 'C#,.NET Framework,Java,C++,NSIS,WIX Toolset,Jenkins',
        forCV: true,
    }, {
        role: 'Software Engineer',
        company: 'SeeByte',
        companyUrl: 'http://www.seebyte.com/',
        location: 'Edinburgh, UK',
        date: 'Sept 2019 - Aug 2021',
        forCV: false,
    }, {
        role: 'Software Engineer Intern',
        company: 'Information Services of UoE',
        companyUrl: 'https://www.ed.ac.uk/information-services',
        location: 'Edinburgh, UK',
        date: 'April 2019 - June 2019',
        description: `Created an XML-based publishing workflow, including tool evaluation, OJS integration, customization, and workflow establishment for academic journals.`,
        forCV: true,
    }, {
        role: 'Software Engineer',
        company: 'Wings ICT Solutions',
        companyUrl: 'http://wings-ict-solutions.eu',
        location: 'Athens, Greece',
        date: 'April 2017 - Aug 2018',
        description: 'Working for Wings ICT Solutions in order to develop web services for National Bank of Greece. Requirements analysis, design, and implementation of user interface CRM bank systems.',
        technologies: 'HTML/CSS,Typescript,Angular,C#,.NET',
        forCV: true,
    }, {
        role: 'Teaching Assistant',
        company: 'Computer Science Department, University of Crete',
        companyShort: 'Computer Science Department, UoC',
        companyUrl: 'http://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2015 - Jan 2016',
        description: 'Part of the program "TheProfit" which allows to the best undergraduate students of the department to aid University`s academic work. Role: Undergraduate Teaching Assistant at "Introduction to Computer Science" course',
        forCV: true,
    }, {
        role: 'Undergraduate Trainee',
        company: 'FORTH (Research Center)',
        companyUrl: 'https://www.forth.gr',
        location: 'Heraklion, Greece',
        date: 'Jun 2015 - Aug 2015',
        description: 'Conducting Research in Big Data Systems using acceleration mechanisms.',
        technologies: 'HDFS,MapReduce,HBase,Apache Phoenix,Spark,CUDA,OpenCL',
        forCV: true,
    }];
const education = [{
        role: 'Msc in High Performance Computing with Data Science',
        company: 'University of Edinburgh',
        companyUrl: 'https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2019&id=871',
        location: 'Edinburgh, UK',
        date: 'Sep 2018 - Aug 2019',
        grade: '75% (Distinction)',
        dissertation: 'Parallelisation of frame processing for Optical Coherence Tomography (85%)',
        awards: 'I was honored to receive the Best Student Award for the MSc program. Additionally, I was awarded the Highly Skilled Workforce Scholarship, which required candidates to hold the international equivalent of a UK first-class or 2:1 Honours degree at the undergraduate level.',
        forCV: true,
    }, {
        role: 'Bachelor in Computer Science',
        company: 'University of Crete',
        companyUrl: 'https://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2012 - Jul 2016',
        grade: '84%',
        dissertation: 'ICE Editor is a visual programming language for end-user programmers for IOT devices. ICE Editor is a web client application written in JavaScript.',
        awards: '3 years in a row awarded with the memorial scholarship "Stelios Orfanoudakis". This scholarship is given to the top 3 students of the Computer Science department each year.',
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
        technologies: 'Typescript,Angular,LESS,NodeJS',
        forCV: true,
    }, {
        name: 'ImagInLexis',
        date: 'June 2016 - August 2016',
        url: 'https://github.com/nikosxenakis/ImagInLexis',
        description: `Hired to create a desktop application for a bachelor's thesis focused on Logotherapy. The application primarily enhances speech therapy intervention plans by incorporating a series of tests for patients to undertake. Designed with a gamified approach, the application caters specifically to children, making the therapeutic process engaging and interactive.`,
        technologies: 'Java,JavaFX',
        forCV: true,
    }, {
        name: 'ICE Editor',
        date: 'March 2016 - June 2016',
        url: 'https://github.com/nikosxenakis/ICE_Editor',
        description: `A web-based platform designed for end-users to craft straightforward applets for IoT (Internet Of Things) devices. This intuitive editor minimizes both compile and runtime errors, offering a drag-and-drop interface alongside value editing capabilities. It features a versatile API, allowing users to swiftly develop programs using Javascript or by defining them in JSON files.`,
        technologies: 'Javascript,HTML,CSS,Canvas.js',
        forCV: false,
    }, {
        name: '1942',
        date: 'November 2015 - January 2016',
        url: 'https://www.youtube.com/watch?v=kdICR49vbvg',
        description: `1942, a beloved retro video game from 1984, has been reimagined in this project. Utilizing the original sprite sheets, the game has been recreated with the C++ programming language, leveraging the SDL cross-platform software development library.`,
        technologies: 'C++,SDL',
        forCV: false,
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
        name: '♟️ Chess',
        forCV: true,
    }, {
        name: '🕺🏽 Salsa and Cretan traditional dances',
        forCV: true,
    }, {
        name: '🏋️ Weight lifting',
        forCV: true,
    }, {
        name: '🚴 Cycling',
        forCV: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxlQUFlLENBQUM7QUFDcEMsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLDBCQUEwQixDQUFDO0FBQ2hELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNsQixLQUFLLEVBQUUsMEJBQTBCO0lBQ2pDLElBQUksRUFBRSxpQ0FBaUM7Q0FDekMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRztJQUNyQixLQUFLLEVBQUUsOEJBQThCO0lBQ3JDLElBQUksRUFBRSwwQ0FBMEM7Q0FDbEQsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUNuQixLQUFLLEVBQUUseUJBQXlCO0lBQ2hDLElBQUksRUFBRSxpQ0FBaUM7Q0FDekMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRztJQUNwQixLQUFLLEVBQUUsd0JBQXdCO0lBQy9CLElBQUksRUFBRSxnQ0FBZ0M7Q0FDeEMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLHVEQUF1RCxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxrVUFBa1UsQ0FBQztBQUMvVixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsZ21CQUFnbUIsQ0FBQztBQUN4bkIsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDbEIsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixPQUFPLEVBQUUsNkJBQTZCO1FBQ3RDLFVBQVUsRUFBRSx1QkFBdUI7UUFDbkMsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsWUFBWSxFQUFFLEVBQUU7UUFDaEIsS0FBSyxFQUFFLElBQUk7S0FDYixFQUFFO1FBQ0EsSUFBSSxFQUFF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
;// CONCATENATED MODULE: ./src/cv.tsx



react_pdf_browser_es/* Font */.Zx.register({ family: 'Roboto', src: '/Roboto-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
react_pdf_browser_es/* Font */.Zx.register({ family: 'Roboto', src: '/Roboto-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold' });
react_pdf_browser_es/* Font */.Zx.register({ family: 'Roboto', src: '/Roboto-Thin.ttf', fontWeight: 'thin' });
react_pdf_browser_es/* Font */.Zx.register({ family: 'Roboto', src: '/Roboto-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal' });
react_pdf_browser_es/* Font */.Zx.registerEmojiSource({
    format: 'png',
    url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});
const backgroundColor = '#E4E4E4';
const primaryColor = '#7b8d6c';
const secondaryColor = '#6d757d';
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
        fontSize: 28,
        color: primaryColor,
    },
    headerTitle: {
        paddingBottom: 10,
        fontSize: 18,
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
        marginBottom: 17,
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
                                    "\u2709\uFE0F ",
                                    email.short))),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser_es/* Text */.xv, null,
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: linkedIn.link, style: styles.linkStyle },
                                    react.createElement(react_pdf_browser_es/* Image */.Ee, { src: './assets/images/linkedin.png', style: { width: 10, height: 10 } }),
                                    " ",
                                    linkedIn.short))),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser_es/* Text */.xv, null,
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: website.link, style: styles.linkStyle },
                                    "\uD83C\uDF10 ",
                                    website.short))),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.contactDetailsItem },
                            react.createElement(react_pdf_browser_es/* Text */.xv, null,
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: gitHub.link, style: styles.linkStyle },
                                    react.createElement(react_pdf_browser_es/* Image */.Ee, { src: './assets/images/github.png', style: { width: 10, height: 10 } }),
                                    " ",
                                    gitHub.short)))))),
            react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.cvContents },
                react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.section },
                    react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionTitle }, "Work experience"),
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionContent }, work.filter(x => x.forCV).map((x, i) => (react.createElement(react_pdf_browser_es/* View */.G7, { key: i, style: styles.sectionItem },
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
                                x.dateCV ? x.dateCV : x.date,
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
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionContent }, education.filter(x => x.forCV).map((x, i) => (react.createElement(react_pdf_browser_es/* View */.G7, { key: i, style: styles.sectionItem },
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.sectionItemLeft },
                            x.roleShort && react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemTitle },
                                x.roleShort,
                                " "),
                            !x.roleShort && x.role && react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemTitle },
                                x.role,
                                " "),
                            react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionItemOrganisation },
                                react.createElement(react_pdf_browser_es/* Link */.rU, { src: x.companyUrl ?? '', style: styles.linkStyle }, x.company),
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
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionContentProject }, projects.filter(x => x.forCV).map((x, i) => (react.createElement(react_pdf_browser_es/* View */.G7, { key: i, style: styles.projectItem },
                            react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.projectItemContentName },
                                react.createElement(react_pdf_browser_es/* Link */.rU, { style: styles.projectItemName, src: x.url }, x.name)),
                            react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.projectItemContent }, x.technologies.split(',').map((y, j) => (react.createElement(react_pdf_browser_es/* View */.G7, { key: j, style: styles.technologyItem },
                                react.createElement(react_pdf_browser_es/* Text */.xv, null, y)))))))))),
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.section },
                        react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionTitle }, "Languages"),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionContent }, languages.map((x, i) => (react.createElement(react_pdf_browser_es/* Text */.xv, { key: i, style: styles.smallSectionText },
                            x.name,
                            " ",
                            react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.smallSectionSecondary }, x.level)))))),
                    react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.section },
                        react.createElement(react_pdf_browser_es/* Text */.xv, { style: styles.sectionTitle }, "Interests"),
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionContent }, interests.filter(x => x.forCV).map((x, i) => (react.createElement(react_pdf_browser_es/* Text */.xv, { key: i, style: styles.smallSectionText },
                            x.name,
                            " "))))))))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3YudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBYSxNQUFNLHFCQUFxQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXhILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzNHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3RHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUUxRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDdEIsTUFBTSxFQUFFLEtBQUs7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
;// CONCATENATED MODULE: ./src/app.tsx








function App() {
    const [showCV, setShowCV] = react.useState(false);
    const [shakeLinkedIn, setShakeLinkedIn] = react.useState(false);
    const [shakeGithub, setShakeGithub] = react.useState(false);
    const [shakeStackOverflow, setShakeStackOverflow] = react.useState(false);
    const [shakeDownload, setShakeDownload] = react.useState(false);
    const [shakeEye, setShakeEye] = react.useState(false);
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
                        react.createElement(Row/* default */.Z, null,
                            react.createElement(Col/* default */.Z, { xs: 12, className: 'resumeTitle' },
                                react.createElement("h5", null, "Resume")),
                            react.createElement(Col/* default */.Z, { xs: 6 },
                                react.createElement("span", { onClick: () => { setShowCV(true); } },
                                    react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faEye */.Mdf, shake: shakeEye, onMouseOver: () => { setShakeEye(true); }, onMouseLeave: () => { setShakeEye(false); } }))),
                            react.createElement(Col/* default */.Z, { xs: 6 },
                                react.createElement("a", { href: '../assets/Xenakis Nikos CV.pdf', download: "Xenakis Nikos CV.pdf" },
                                    react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faDownload */.q7m, shake: shakeDownload, onMouseOver: () => { setShakeDownload(true); }, onMouseLeave: () => { setShakeDownload(false); } }))))),
                    react.createElement(Col/* default */.Z, { xs: 0, sm: 0, xl: 1 })))),
        react.createElement("div", { className: "container sections-wrapper" },
            react.createElement(Row/* default */.Z, null,
                react.createElement(Col/* default */.Z, { xs: 0, sm: 0, xl: 3 }),
                react.createElement(Col/* default */.Z, { xs: 12, sm: 12, md: 8, xl: 5 },
                    react.createElement("section", { className: "about section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Summary"),
                            react.createElement("div", { className: "content" },
                                react.createElement("p", null, summary),
                                react.createElement("p", null,
                                    react.createElement("b", null, "Work Authorization"),
                                    " Eligible to work in the EU, no Visa required")))),
                    react.createElement("section", { className: "experience section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" },
                                "Work Experience ",
                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faUserTie */.Cv1 })),
                            react.createElement("div", { className: "content" }, work.map((w, i) => (react.createElement("div", { className: "item", key: i },
                                react.createElement(Row/* default */.Z, { className: "itemHeader" },
                                    react.createElement(Col/* default */.Z, { className: "itemHeaderLeft", xs: 12, sm: 7 },
                                        react.createElement("h3", { className: "title" }, w.role),
                                        react.createElement("h6", { className: "company" },
                                            react.createElement("a", { href: w.companyUrl }, w.company))),
                                    react.createElement(Col/* default */.Z, { className: "itemHeaderRight", xs: 12, sm: 5 },
                                        react.createElement("h6", { className: "place" }, w.location),
                                        react.createElement("h6", { className: "year" }, w.date))),
                                react.createElement("p", { className: "description" },
                                    w.description,
                                    w.technologies ? (react.createElement("span", { className: 'technologies' },
                                        react.createElement("br", null),
                                        w.technologies.split(',').map((t, i) => (react.createElement(Badge/* default */.Z, { className: 'technology', pill: true, bg: "light", text: "dark", key: i }, t))))) : ''))))))),
                    react.createElement("section", { className: "education section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" },
                                "Education ",
                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faGraduationCap */.Xf_ })),
                            react.createElement("div", { className: "content" }, education.map((w, i) => (react.createElement("div", { className: "item", key: i },
                                react.createElement(Row/* default */.Z, { className: "itemHeader" },
                                    react.createElement(Col/* default */.Z, { className: "itemHeaderLeft", xs: 12, sm: 7 },
                                        react.createElement("h3", { className: "title" }, w.role),
                                        react.createElement("h6", { className: "company" },
                                            react.createElement("a", { href: w.companyUrl }, w.company))),
                                    react.createElement(Col/* default */.Z, { className: "itemHeaderRight", xs: 12, sm: 5 },
                                        react.createElement("h6", { className: "place" }, w.location),
                                        react.createElement("h6", { className: "year" }, w.date))),
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
                                        w.technologies.split(',').map((t, i) => (react.createElement(Badge/* default */.Z, { className: 'technology', pill: true, bg: "light", text: "dark", key: i }, t))))) : '')))))))),
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
                                        react.createElement("a", { href: locationMaps }, "Zurich, Switzerland")),
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
                                            " ")),
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
                react.createElement("small", { className: "copyright" }, "@Copyrights Xenakis Nikolaos - February 2024")))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNySixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVqSyxNQUFNLENBQUMsT0FBTyxVQUFVLEdBQUc7SUFDekIsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FB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
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