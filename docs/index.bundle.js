/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 366:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(466);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(897);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(622);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(273);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(886);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Badge.js
var Badge = __webpack_require__(502);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(513);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(24);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(417);
;// CONCATENATED MODULE: ./src/data.ts
const data_name = 'Xenakis Nikos';
const title = 'Senior Software Engineer';
const email = 'nikosxenakis94@gmail.com';
const linkedInLink = 'https://www.linkedin.com/in/nikosxenakis';
const gitHubLink = 'https://github.com/nikosxenakis';
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
        role: 'Software Development Intern',
        company: 'University of Edinburgh Information Services Group',
        companyUrl: 'https://www.ed.ac.uk/information-services',
        location: 'Edinburgh, UK',
        date: 'April 2019 – June 2019',
        description: `This project aims to develop an XML-based publishing workflow that could be adopted by journals like the ones supported by the Library's journal hosting service. Responsibilities:
  - review open-source tools for converting, editing and rendering XML files
  - investigate how these tools could be integrated with OJS
  - select the tools that best meet our requirements
  - adapt the selected tools as needed
  - combine the selected tools into a production workflow `,
    }, {
        role: 'Software Engineer',
        company: 'Wings ICT Solutions',
        companyUrl: 'http://wings-ict-solutions.eu',
        location: 'Athens, Greece',
        date: 'April 2017 – Aug 2018',
        description: 'Working for Wings ICT Solutions in order to develop web services for National Bank of Greece. Requirements analysis, design, and implementation of user interface CRM bank systems.',
        technologies: 'HTML, Typescript, Angular, CSS, SASS, LESS, C#, .NET',
    }, {
        role: 'Undergraduate Teaching Assistant',
        company: 'Computer Science Department, University of Crete',
        companyUrl: 'http://www.csd.uoc.gr',
        location: 'Heraklion, Greece',
        date: 'Sep 2015 – Jan 2016',
        description: 'Part of the program "TheProfit" which allows to the best undergraduate students of the department to aid University`s academic work. Role: Undergraduate Teaching Assistant at "Introduction to Computer Science" course'
    }, {
        role: 'Undergraduate Trainee',
        company: 'Foundation for Research and Technology - Hellas (FORTH)',
        companyUrl: 'https://www.forth.gr',
        location: 'Heraklion, Greece',
        date: 'Jun 2015 – Aug 2015',
        description: 'Conducting Research in Big Data Systems using acceleration mechanisms.',
        technologies: 'HDFS, MapReduce, HBase, Apache Phoenix, Spark, CUDA, OpenCL',
    }];
const education = [{
        role: 'Msc in High Performance Computing with Data Science',
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
        description: `1942, a beloved retro video game from 1984, has been reimagined in this project. Utilizing the original sprite sheets, the game has been recreated with the C++ programming language, leveraging the SDL cross-platform software development library.`,
        technologies: 'C++, SDL',
    }];
const languages = [{
        name: 'Greek',
        level: 'Native Speaker',
        stars: 5,
    }, {
        name: 'English',
        level: 'Advanced Level',
        stars: 4,
    }, {
        name: 'German',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxlQUFlLENBQUM7QUFDcEMsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLDBCQUEwQixDQUFDO0FBQ2hELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRywwQkFBMEIsQ0FBQztBQUNoRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsMENBQTBDLENBQUM7QUFDdkUsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLGlDQUFpQyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLHVEQUF1RCxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyw2TEFBNkwsQ0FBQztBQUMxTixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsd0ZBQXdGLENBQUM7QUFDL0csTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLGdtQkFBZ21CLENBQUM7QUFDeG5CLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO1FBQ2xCLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLG1CQUFtQjtRQUMvQixRQUFRLEVBQUUsZUFBZTtRQUN6QixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFdBQVcsRUFBRSxzWkFBc1o7UUFDbmEsWUFBWSxFQUFFLGtGQUFrRjtLQUNsRyxFQUFFO1FBQ0EsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxPQUFPLEVBQUUsU0FBUztRQUNsQixVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsV0FBVyxFQUFFLHlKQUF5SjtRQUN0SyxZQUFZLEVBQUUsbUZBQW1GO0tBQ25HLEVBQUU7UUFDQSxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFVBQVUsRUFBRSx5QkFBeUI7UUFDckMsUUFBUSxFQUFFLGVBQWU7UUFDekIsSUFBSSxFQUFFLHNCQUFzQjtLQUM5QixFQUFFO1FBQ0EsSUFBSSxFQUFFLDZCQUE2QjtRQUNuQyxPQUFPLEVBQUUsb0RBQW9EO1FBQzdELFVBQVUsRUFBRSwyQ0FBMkM7UUFDdkQsUUFBUSxFQUFFLGVBQWU7UUFDekIsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixXQUFXLEVBQUU7Ozs7OzJEQUsyQztLQUMxRCxFQUFFO1FBQ0EsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFVBQVUsRUFBRSwrQkFBK0I7UUFDM0MsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLFdBQVcsRUFBRSxxTEFBcUw7UUFDbE0sWUFBWSxFQUFFLHNEQUFzRDtLQUN0RSxFQUFFO1FBQ0EsSUFBSSxFQUFFLGtDQUFrQztRQUN4QyxPQUFPLEVBQUUsa0RBQWtEO1FBQzNELFVBQVUsRUFBRSx1QkFBdUI7UUFDbkMsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLFdBQVcsRUFBRSwwTkFBME47S0FDek8sRUFBRTtRQUNBLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsT0FBTyxFQUFFLHlEQUF5RDtRQUNsRSxVQUFVLEVBQUUsc0JBQXNCO1FBQ2xDLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixXQUFXLEVBQUUsd0VBQXdFO1FBQ3JGLFlBQVksRUFBRSw2REFBNkQ7S0FDN0UsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQUM7UUFDdkIsSUFBSSxFQUFFLHFEQUFxRDtRQUMzRCxPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLFVBQVUsRUFBRSw4RkFBOEY7UUFDMUcsUUFBUSxFQUFFLGVBQWU7UUFDekIsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixLQUFLLEVBQUUsbUJBQW1CO1FBQzFCLFlBQVksRUFBRSw0RUFBNEU7UUFDMUYsTUFBTSxFQUFFLGdOQUFnTjtLQUMxTixFQUFFO1FBQ0EsSUFBSSxFQUFFLDhCQUE4QjtRQUNwQyxPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFVBQVUsRUFBRSx3QkFBd0I7UUFDcEMsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLEtBQUssRUFBRSxLQUFLO1FBQ1osWUFBWSxFQUFFLHNKQUFzSjtRQUNwSyxNQUFNLEVBQUUsOEtBQThLO0tBQ3hMLEVBQUU7UUFDQSxJQUFJLEVBQUUseUNBQXlDO1FBQy9DLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLFdBQVcsRUFBRSw4SEFBOEg7S0FDN0ksQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLENBQUM7UUFDdEIsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFBRSw2Q0FBNkM7UUFDbEQsV0FBVyxFQUFFLDBEQUEwRDtRQUN2RSxZQUFZLEVBQUUsbUNBQW1DO0tBQ25ELEVBQUU7UUFDQSxJQUFJLEVBQUUsYUFBYTtRQUNuQixJQUFJLEVBQUUseUJBQXlCO1FBQy9CLEdBQUcsRUFBRSw2Q0FBNkM7UUFDbEQsV0FBVyxFQUFFLHVXQUF1VztRQUNwWCxZQUFZLEVBQUUsY0FBYztLQUM5QixFQUFFO1FBQ0EsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixHQUFHLEVBQUUsNENBQTRDO1FBQ2pELFdBQVcsRUFBRSwwWEFBMFg7UUFDdlksWUFBWSxFQUFFLGtDQUFrQztLQUNsRCxFQUFFO1FBQ0EsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsOEJBQThCO1FBQ3BDLFdBQVcsRUFBRSx1UEFBdVA7UUFDcFEsWUFBWSxFQUFFLFVBQVU7S0FDMUIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQUM7UUFDdkIsSUFBSSxFQUFFLE9BQU87UUFDYixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO0tBQ1YsRUFBRTtRQUNBLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUUsQ0FBQztLQUNWLEVBQUU7UUFDQSxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsS0FBSyxFQUFFLENBQUM7S0FDVixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQztRQUN2QixJQUFJLEVBQUUsVUFBVTtLQUNsQixFQUFFO1FBQ0EsSUFBSSxFQUFFLDBDQUEwQztLQUNsRCxFQUFFO1FBQ0EsSUFBSSxFQUFFLGtCQUFrQjtLQUMxQixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBQztRQUNwQixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLEtBQUssRUFBRSxZQUFZO1FBQ25CLEtBQUssRUFBRSxNQUFNO0tBQ2YsRUFBRTtRQUNBLElBQUksRUFBRSxxREFBcUQ7UUFDM0QsS0FBSyxFQUFFLFlBQVk7UUFDbkIsS0FBSyxFQUFFLE1BQU07S0FDZixFQUFFO1FBQ0EsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixLQUFLLEVBQUUsWUFBWTtRQUNuQixLQUFLLEVBQUUsTUFBTTtLQUNmLEVBQUU7UUFDQSxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLEtBQUssRUFBRSxLQUFLO0tBQ2QsRUFBRTtRQUNBLElBQUksRUFBRSxxQ0FBcUM7UUFDM0MsS0FBSyxFQUFFLFVBQVU7UUFDakIsS0FBSyxFQUFFLEtBQUs7S0FDZCxFQUFFO1FBQ0EsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsVUFBVTtRQUNqQixLQUFLLEVBQUUsS0FBSztLQUNkLENBQUMsQ0FBQyJ9
;// CONCATENATED MODULE: ./src/app.tsx






function App() {
    const [showCV, setShowCV] = react.useState(true);
    const [shakeLinkedIn, setShakeLinkedIn] = react.useState(false);
    const [shakeGithub, setShakeGithub] = react.useState(false);
    const [shakeStackOverflow, setShakeStackOverflow] = react.useState(false);
    return (react.createElement(react.Fragment, null,
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
                                            react.createElement("a", { href: linkedInLink },
                                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_brands_svg_icons/* faLinkedin */.D9H, shake: shakeLinkedIn, onMouseOver: () => { setShakeLinkedIn(true); }, onMouseLeave: () => { setShakeLinkedIn(false); } }))),
                                        react.createElement("li", null,
                                            react.createElement("a", { href: gitHubLink },
                                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_brands_svg_icons/* faGithub */.zhw, shake: shakeGithub, onMouseOver: () => { setShakeGithub(true); }, onMouseLeave: () => { setShakeGithub(false); } }))),
                                        react.createElement("li", null,
                                            react.createElement("a", { href: stackOverflowLink },
                                                react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_brands_svg_icons/* faStackOverflow */.mGT, shake: shakeStackOverflow, onMouseOver: () => { setShakeStackOverflow(true); }, onMouseLeave: () => { setShakeStackOverflow(false); } })))))))),
                    react.createElement(Col/* default */.Z, { xs: 12, sm: 2, xl: 1, className: 'resume' },
                        react.createElement("a", { href: CVLink },
                            react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faDownload */.q7m }))),
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
                                        "(",
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
                                        react.createElement("a", { href: `mailto:${email}` }, email)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0YsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUU5SSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVqTCxNQUFNLENBQUMsT0FBTyxVQUFVLEdBQUc7SUFDekIsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxNQUFNLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLENB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
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [514,672,216], function() { return __webpack_require__(366); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;