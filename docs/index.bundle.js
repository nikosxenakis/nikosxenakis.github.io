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
const locationMaps = 'https://www.google.co.uk/maps/place/Edinburgh/@55.9412015,-3.2465378,13z/data=!3m1!4b1!4m6!3m5!1s0x4887b800a5982623:0x64f2147b7ce71727!8m2!3d55.953252!4d-3.188267!16zL20vMDJtNzc?entry=ttu';
const summary = 'Passion and devotion are the cornerstones of my professional approach. I am deeply committed to staying updated, export constantly researching innovative products and cutting-edge methods to ensure that my projects not only meet but exceed expectations. With a rich background in designing, developing, and testing software, I bring a blend of technical expertise and creative problem-solving to every challenge. My goal is to deliver solutions that are not just efficient and reliable, but also future-ready. I thrive in collaborative environments and am always eager to learn and grow alongside my peers.';
const work = [{
        role: 'Senior Software Engineer',
        company: 'Welbot',
        companyUrl: 'https://welbot.io',
        location: 'Edinburgh, UK',
        date: 'Nov 2022 - Present',
        description: `At Welbot Ltd., I take pride in crafting state-of-the-art wellbeing products tailored for enterprises. As a Senior Software Engineer, my role goes beyond just coding; it's about understanding the unique challenges businesses face and translating those needs into innovative software solutions. I am dedicated to enhancing workplace wellbeing through cutting-edge technology and research-driven solutions.`,
        technologies: 'HTML/CSS,TypeScript,Node.js,ElectronJS,AWS,Terraform,GitHub CI/CD',
        forCV: true,
    }, {
        role: 'Senior Software Engineer',
        company: 'SeeByte',
        companyUrl: 'http://www.seebyte.com/',
        location: 'Edinburgh, UK',
        date: 'Aug 2021 - Nov 2022',
        dateCV: 'Sept 2019 - Nov 2022',
        description: 'As a software engineer at the SeeTrack product, I was instrumental in producing Mission Planning, Monitoring, and Post Mission Analysis software for Unmanned Underwater Vehicles (UUVs). My dedication and performance led to my rapid promotion to the senior level within the company. Additionally, I actively participated in customer trials, representing our company and contributing to our success.',
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
        technologies: 'Javascript,HTML,CSS,Canvas.js',
    }, {
        name: '1942',
        date: 'November 2015 - January 2016',
        url: 'https://www.youtube.com/watch?v=kdICR49vbvg',
        description: `1942, a beloved retro video game from 1984, has been reimagined in this project. Utilizing the original sprite sheets, the game has been recreated with the C++ programming language, leveraging the SDL cross-platform software development library.`,
        technologies: 'C++,SDL',
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
        name: '🏋️ Weight lifting',
    }, {
        name: '🚴 Cycling',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxlQUFlLENBQUM7QUFDcEMsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLDBCQUEwQixDQUFDO0FBQ2hELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNsQixLQUFLLEVBQUUsMEJBQTBCO0lBQ2pDLElBQUksRUFBRSxpQ0FBaUM7Q0FDekMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRztJQUNyQixLQUFLLEVBQUUsOEJBQThCO0lBQ3JDLElBQUksRUFBRSwwQ0FBMEM7Q0FDbEQsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUNuQixLQUFLLEVBQUUseUJBQXlCO0lBQ2hDLElBQUksRUFBRSxpQ0FBaUM7Q0FDekMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRztJQUNwQixLQUFLLEVBQUUsd0JBQXdCO0lBQy9CLElBQUksRUFBRSxnQ0FBZ0M7Q0FDeEMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLHVEQUF1RCxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyw2TEFBNkwsQ0FBQztBQUMxTixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsZ21CQUFnbUIsQ0FBQztBQUN4bkIsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDbEIsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVBQUUsbUJBQW1CO1FBQy9CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsV0FBVyxFQUFFLHNaQUFzWjtRQUNuYSxZQUFZLEVBQUUsbUVBQW1FO1FBQ2pGLEtBQUssRUFBRSxJQUFJO0tBQ2IsRUFBRTtRQUNBLElBQUksRUFB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
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
        marginBottom: 18,
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
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionContentProject }, projects.map((x, i) => (react.createElement(react_pdf_browser_es/* View */.G7, { key: i, style: styles.projectItem },
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
                        react.createElement(react_pdf_browser_es/* View */.G7, { style: styles.smallSectionContent }, interests.map((x, i) => (react.createElement(react_pdf_browser_es/* Text */.xv, { key: i, style: styles.smallSectionText },
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
                                react.createElement("p", null, summary)))),
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
                react.createElement("small", { className: "copyright" }, "@Copyrights Xenakis Nikos - October 2023")))));
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