/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 336:
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
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(513);
// EXTERNAL MODULE: ./node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(300);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(24);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(417);
;// CONCATENATED MODULE: ./src/app.tsx






function App() {
    const linkedInLink = 'https://www.linkedin.com/in/nikosxenakis';
    const gitHubLink = 'https://github.com/nikosxenakis';
    const CVLink = 'https://github.com/nikosxenakis/nikosxenakis-website/blob/master/src/assets/resume.pdf';
    const imageInLexis = 'assets/ImagInLexis/ImagInLexis.zip';
    const iceEditor = 'https://github.com/nikosxenakis/ICE_Editor';
    const summary = 'Passion and devotion describe the way I work. I constantly research new products and methods for my projects to be efficient and reliable. Experienced in designing, developing and testing software.';
    const work = [{
            role: 'Senior Software Engineer',
            company: 'Welbot',
            companyUrl: 'https://welbot.io',
            location: 'Edinburgh, UK',
            date: 'Nov 2022 – Present',
            description: 'Designing and developing wellbeing products for enterprises. Skills: Web stack, TypeScript, ElectronJS, AWS, Terraform, GitHub CI, project management',
        }, {
            role: 'Senior Software Engineer',
            company: 'SeeByte',
            companyUrl: 'http://www.seebyte.com/',
            location: 'Edinburgh, UK',
            date: 'Aug 2021 – Nov 2022',
            description: 'Developing (full-stack) applications for SeeByte. Technologies: Java, C#, .NET, NSIS, WIX Toolset, Netbeans platform, WPF.',
        }, {
            role: 'Software Engineer',
            company: 'SeeByte',
            companyUrl: 'http://www.seebyte.com/',
            location: 'Edinburgh, UK',
            date: 'Sept 2019 – Aug 2021',
            description: 'Developing (full-stack) applications for SeeByte. Technologies: Java, C#, .NET, NSIS, WIX Toolset, Netbeans platform, WPF.',
        }, {
            role: 'Software Development Intern',
            company: 'University of Edinburgh Information Services Group',
            companyUrl: 'https://www.ed.ac.uk/information-services',
            location: 'Edinburgh, UK',
            date: 'April 2019 – June 2019',
        }, {
            role: 'Software Engineer',
            company: 'Wings ICT Solutions',
            companyUrl: 'http://wings-ict-solutions.eu',
            location: 'Athens, Greece',
            date: 'April 2017 – Aug 2018',
            description: 'Working for Wings ICT Solutions in order to develop web services for National Bank of Greece. Requirements analysis, design and implementation of web API and interoperability between API and bank systems. Technologies: C#, ASP.NET, Angular.'
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
            description: 'Conducting Research in Big Data Systems using acceleration mechanisms. Tools: HDFS, MapReduce, HBase, Apache Phoenix, Spark, CUDA, OpenCL'
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
    const skills = [{
            name: 'C, C++, Java',
            level: 'Proficient',
            width: '100%',
        }, {
            name: 'Data Management (Python, MySQL)',
            level: 'Advanced',
            width: '90%',
        }, {
            name: 'Web Technologies (HTML, CSS, Javascript, Typescript, PHP)',
            level: 'Expert',
            width: '80%',
        }];
    return (react.createElement(react.Fragment, null,
        react.createElement("header", { className: "header" },
            react.createElement(Container/* default */.Z, null,
                react.createElement(Row/* default */.Z, null,
                    react.createElement(Col/* default */.Z, { xs: 12, sm: 2, className: 'avatar' },
                        react.createElement("img", { src: 'https://avatars.githubusercontent.com/u/25032940?v=4', alt: "Xenakis Nikolaos" })),
                    react.createElement(Col/* default */.Z, { xs: 12, sm: 10 },
                        react.createElement("div", { className: "profile-content" },
                            react.createElement(Row/* default */.Z, null,
                                react.createElement(Col/* default */.Z, { xs: 12 },
                                    react.createElement("h1", { className: "name" }, "Xenakis Nikolaos")),
                                react.createElement(Col/* default */.Z, { xs: 12 },
                                    react.createElement("h2", { className: "desc" }, "Software Engineer")),
                                react.createElement(Col/* default */.Z, { xs: 12 },
                                    react.createElement("ul", { className: "social list-inline" },
                                        react.createElement("li", null,
                                            react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_brands_svg_icons/* faLinkedin */.D9H, onClick: () => { return (0,router/* redirect */.uX)(linkedInLink); } })),
                                        react.createElement("li", null,
                                            react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_brands_svg_icons/* faGithub */.zhw, onClick: () => { return (0,router/* redirect */.uX)(gitHubLink); } })))))))))),
        react.createElement("div", { className: "container sections-wrapper" },
            react.createElement(Row/* default */.Z, null,
                react.createElement(Col/* default */.Z, { xs: 12, sm: 12, md: 8 },
                    react.createElement("section", { className: "about section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Summary"),
                            react.createElement("div", { className: "content" },
                                react.createElement("p", null, summary)),
                            react.createElement("a", { href: CVLink },
                                react.createElement("button", { className: "btn btn-cta-secondary" }, "Resume")))),
                    react.createElement("section", { className: "experience section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Work Experience"),
                            react.createElement("div", { className: "content" }, work.map((w) => (react.createElement("div", { className: "item" },
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
                                react.createElement("p", null, w.description))))))),
                    react.createElement("section", { className: "education section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Education"),
                            react.createElement("div", { className: "content" },
                                react.createElement("div", { className: "item" },
                                    react.createElement("h3", { className: "title" },
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faGraduationCap */.Xf_ }),
                                        " Msc in High Performance Computing with Data Science (Sep 2018 \u2013 Aug 2019)",
                                        react.createElement("a", { href: "https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2019&id=871", className: "university" }, "University of Edinburgh, Edinburgh (UK)")),
                                    react.createElement("ul", null,
                                        react.createElement("li", null, "Grade: 75/100 (Distinction)"),
                                        react.createElement("li", null, "Dissertation: Parallelisation of frame processing for Optical Coherence Tomography (85/100)"),
                                        react.createElement("li", null,
                                            "Awards: Highly Skilled Workforce Scholarship, candidates must have the international equivalent of a UK first class or 2:1 Honours degree at undergraduate level",
                                            react.createElement("br", null),
                                            "Nominated the best student award of the MSc program."))),
                                react.createElement("div", { className: "item" },
                                    react.createElement("h3", { className: "title" },
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faGraduationCap */.Xf_ }),
                                        " Bachelor in Computer Science (Sep 2012 \u2013 Jul 2016)",
                                        react.createElement("a", { href: "https://www.csd.uoc.gr/", className: "university" }, "University of Crete, Heraklion (Greece)")),
                                    react.createElement("ul", null,
                                        react.createElement("li", null, "Grade: 8.4/10"),
                                        react.createElement("li", null),
                                        react.createElement("li", null,
                                            "Awards: ",
                                            react.createElement("strong", null, "3 years"),
                                            " in a row awarded with the ",
                                            react.createElement("strong", null, "Memorial Scholarship Stelios Orfanoudakis"),
                                            ".",
                                            react.createElement("br", null),
                                            "This scholarship is given to the top 3 students of the Computer Science department each year."))),
                                react.createElement("div", { className: "item" },
                                    react.createElement("h3", { className: "title" },
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faGraduationCap */.Xf_ }),
                                        " IT Essentials: PC Hardware and Software (Jun 2011 - Aug 2011)",
                                        react.createElement("a", { className: "university" }, "Cisco Network Academy, Chania (Greece)")),
                                    react.createElement("p", null, "IT Essentials covers fundamental computer skills. It includes labs that provide practical experience using simulation tools"))))),
                    react.createElement("section", { className: "projects section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Projects"),
                            react.createElement("div", { className: "content" },
                                react.createElement("div", { className: "item" },
                                    react.createElement("h3", { className: "title" },
                                        react.createElement("a", { href: "https://georgioupolis-taxi.firebaseapp.com/" }, "Georgioupolis Transfers")),
                                    react.createElement("p", { className: "summary" },
                                        "Website for booking transfer and tours in Crete, Greece",
                                        react.createElement("br", null),
                                        "Tools: HTML, Angular 4, Typescript, LESS, Node-JS")),
                                react.createElement("div", { className: "item" },
                                    react.createElement("h3", { className: "title" },
                                        react.createElement("a", { href: "https://github.com/nikosxenakis/ImagInLexis" }, "ImagInLexis")),
                                    react.createElement("p", { className: "summary" },
                                        "Application's main functionality is to enrich a speech therapy intervention plan through a number of tests that the child (patient) has to complete",
                                        react.createElement("br", null),
                                        "Tools: Java, JavaFX")),
                                react.createElement("div", { className: "item" },
                                    react.createElement("p", { className: "summary" },
                                        "A website application which allows an end-user to develop simple applets in IOT devices",
                                        react.createElement("br", null),
                                        "It is an editor which prevents the user to have either compile or runtime (as possible) errors allowing to drop \\& drop elements or edit values",
                                        react.createElement("br", null),
                                        "It provides an abstract API to create your own program with JSON files",
                                        react.createElement("br", null),
                                        "Tools: HTML, Javascript, Canvas.js framewrok")),
                                react.createElement("div", { className: "item" },
                                    react.createElement("h3", { className: "title" },
                                        react.createElement("a", { href: "https://www.youtube.com/watch?v=DqQoP_M39lQ" }, "1942")),
                                    react.createElement("p", { className: "summary" },
                                        "User Interfaces and Games Development course project",
                                        react.createElement("br", null),
                                        "The project is a redevelopment of 1942 is a popular classic retro video game built in 1984",
                                        react.createElement("br", null),
                                        "Tools: C++, SDL")))))),
                react.createElement(Col/* default */.Z, { xs: 12, sm: 12, md: 4, className: "secondary" },
                    react.createElement("aside", { className: "info aside section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Basic Information"),
                            react.createElement("div", { className: "content" },
                                react.createElement("ul", { className: "list-unstyled" },
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faFlag */.RrC }),
                                        " ",
                                        react.createElement("span", { className: "sr-only" }, "Nationality:"),
                                        "Greek"),
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faLocationDot */.opg }),
                                        " ",
                                        react.createElement("span", { className: "sr-only" }, "Location:"),
                                        "Edinburgh, UK"),
                                    react.createElement("li", null,
                                        react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faEnvelope */.FU$ }),
                                        " ",
                                        react.createElement("span", { className: "sr-only" }, "Email:"),
                                        "nikosxenakis94@gmail.com"))))),
                    react.createElement("aside", { className: "skills aside section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Skills"),
                            react.createElement("div", { className: "content" },
                                react.createElement("p", { className: "intro" }),
                                react.createElement("div", { className: "skillset" }, skills.map((s) => (react.createElement("div", { className: "item" },
                                    react.createElement("span", { className: "level-title" },
                                        s.name,
                                        " "),
                                    "-",
                                    react.createElement("span", { className: "level-label", "data-toggle": "tooltip", "data-placement": "left", "data-animation": "true" },
                                        " ",
                                        s.level),
                                    react.createElement("div", { className: "level-bar" },
                                        react.createElement("div", { className: "level-bar-inner", style: { width: s.width } }))))))),
                            react.createElement("p", null,
                                react.createElement("a", { className: "more-link", href: linkedInLink },
                                    react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faExternalLink */.gJF }),
                                    " More on Linkedin")))),
                    react.createElement("aside", { className: "languages aside section" },
                        react.createElement("div", { className: "section-inner" },
                            react.createElement("h2", { className: "heading" }, "Languages"),
                            react.createElement("div", { className: "content" },
                                react.createElement("ul", { className: "list-unstyled" }, languages.map((l) => (react.createElement("li", { className: "item" },
                                    react.createElement("span", { className: "title" },
                                        react.createElement("strong", null,
                                            l.name,
                                            ":")),
                                    react.createElement("span", { className: "level" },
                                        l.level,
                                        react.createElement("br", { className: "visible-sm visible-xs" }),
                                        [...Array(l.stars)].map((e, i) => react.createElement(index_es/* FontAwesomeIcon */.G, { icon: free_solid_svg_icons/* faStar */.Tab }))))))))))))),
        react.createElement("footer", { className: "footer" },
            react.createElement("div", { className: "container text-right" },
                react.createElement("small", { className: "copyright" }, "@Copyrights Xenakis Nikolaos")))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFL0gsTUFBTSxDQUFDLE9BQU8sVUFBVSxHQUFHO0lBQ3pCLE1BQU0sWUFBWSxHQUFHLDBDQUEwQyxDQUFDO0lBQ2hFLE1BQU0sVUFBVSxHQUFHLGlDQUFpQyxDQUFDO0lBRXJELE1BQU0sTUFBTSxHQUFHLHdGQUF3RixDQUFDO0lBQ3hHLE1BQU0sWUFBWSxHQUFHLG9DQUFvQyxDQUFDO0lBQzFELE1BQU0sU0FBUyxHQUFHLDRDQUE0QyxDQUFDO0lBQy9ELE1BQU0sT0FBTyxHQUFHLHVNQUF1TSxDQUFDO0lBQ3hOLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDWixJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsUUFBUSxFQUFFLGVBQWU7WUFDekIsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixXQUFXLEVBQUUsdUpBQXVKO1NBQ3JLLEVBQUU7WUFDRCxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFVBQVUsRUFBRSx5QkFBeUI7WUFDckMsUUFBUSxFQUFF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
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [514,672,216], function() { return __webpack_require__(336); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;