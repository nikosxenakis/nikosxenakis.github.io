import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { redirect } from "react-router";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLink, faFlag, faGraduationCap, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';

export default function App() {
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

  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col xs={2} className='avatar'>
              <img src='https://avatars.githubusercontent.com/u/25032940?v=4' width="150px" height="150px" alt="Xenakis Nikolaos" />
            </Col>
            <Col xs={10}>
              <div className="profile-content">
                <h1 className="name">Xenakis Nikolaos</h1>
                <h2 className="desc">Software Engineer</h2>
                <ul className="social list-inline">
                  <li><FontAwesomeIcon icon={faLinkedin} onClick={() => { return redirect(linkedInLink); }} /></li>
                  <li><FontAwesomeIcon icon={faGithub} onClick={() => { return redirect(gitHubLink); }} /></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="container sections-wrapper">
        <Row>
          <Col xs={12} sm={12} md={8}>
            <section className="about section">
              <div className="section-inner">
                <h2 className="heading">Summary</h2>
                <div className="content">
                  <p>{summary}</p>
                </div>
                <a href={CVLink}><button className="btn btn-cta-secondary">Resume</button></a>
              </div>
            </section>

            <section className="experience section">
              <div className="section-inner">
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                  {work.map((w) => (
                    <div className="item">
                      <h3 className="title">{w.role} <span className="place"><a href={w.companyUrl}>{w.company}</a></span> <span className="year">({w.date})</span></h3>
                      <p>{w.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="education section">
              <div className="section-inner">
                <h2 className="heading">Education</h2>
                <div className="content">
                  <div className="item">
                    <h3 className="title"><FontAwesomeIcon icon={faGraduationCap} /> Msc in High Performance Computing with Data Science (Sep 2018 – Aug 2019)
                      <a href="https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2019&id=871" className="university">University of Edinburgh, Edinburgh (UK)</a>
                    </h3>
                    <ul>
                      <li>
                        Grade: 75/100 (Distinction)
                      </li>
                      <li>
                        Dissertation: Parallelisation of frame processing for Optical Coherence Tomography (85/100)
                      </li>
                      <li>
                        Awards: Highly Skilled Workforce Scholarship, candidates must have the international equivalent of a UK first class or 2:1 Honours degree at undergraduate level
                        <br />Nominated the best student award of the MSc program.
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3 className="title"><FontAwesomeIcon icon={faGraduationCap} /> Bachelor in Computer Science (Sep 2012 – Jul 2016)
                      <a href="https://www.csd.uoc.gr/" className="university">University of Crete, Heraklion (Greece)</a>
                    </h3>
                    <ul>
                      <li>
                        Grade: 8.4/10
                      </li>
                      <li>
                        {/* Thesis: <a href={{ iceEditor }}>ICE Editor</a> a visual programming language for end-user programmers for IOT devices */}
                        {/* <br /><a href={{ iceEditor }}>ICE Editor</a> is a web client application written in JavaScript. */}
                      </li>
                      <li>
                        Awards: <strong>3 years</strong> in a row awarded with the <strong>Memorial Scholarship Stelios Orfanoudakis</strong>.
                        <br />This scholarship is given to the top 3 students of the Computer Science department each year.
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3 className="title"><FontAwesomeIcon icon={faGraduationCap} /> IT Essentials: PC Hardware and Software (Jun 2011 - Aug 2011)<a className="university">Cisco Network Academy, Chania (Greece)</a></h3>
                    <p>IT Essentials covers fundamental computer skills. It includes labs that provide practical experience using simulation tools</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="projects section">
              <div className="section-inner">
                <h2 className="heading">Projects</h2>
                <div className="content">
                  <div className="item">
                    <h3 className="title"><a href="https://georgioupolis-taxi.firebaseapp.com/">Georgioupolis Transfers</a></h3>
                    <p className="summary">Website for booking transfer and tours in Crete, Greece<br />Tools: HTML, Angular 4, Typescript, LESS, Node-JS</p>
                  </div>

                  <div className="item">
                    <h3 className="title"><a href="https://github.com/nikosxenakis/ImagInLexis">ImagInLexis</a></h3>
                    <p className="summary">Application's main functionality is to enrich a speech therapy intervention plan through a number of tests that the child (patient) has to complete<br />Tools: Java, JavaFX</p>
                  </div>
                  <div className="item">
                    {/* <h3 className="title"><a href={{ iceEditor }}>ICE Editor</a></h3> */}
                    <p className="summary">A website application which allows an end-user to develop simple applets in IOT devices<br />It is an editor which prevents the user to have either compile or runtime (as possible) errors allowing to drop \& drop elements or edit values<br />It provides an abstract API to create your own program with JSON files<br />Tools: HTML, Javascript, Canvas.js framewrok</p>
                  </div>
                  <div className="item">
                    <h3 className="title"><a href="https://www.youtube.com/watch?v=DqQoP_M39lQ">1942</a></h3>
                    <p className="summary">User Interfaces and Games Development course project<br />The project is a redevelopment of 1942 is a popular classic retro video game built in 1984<br />Tools: C++, SDL</p>
                  </div>
                </div>
              </div>
            </section>

          </Col>
          <Col xs={12} sm={12} md={4} className="secondary">
            <aside className="info aside section">
              <div className="section-inner">
                <h2 className="heading">Basic Information</h2>
                <div className="content">
                  <ul className="list-unstyled">
                    <li><FontAwesomeIcon icon={faFlag} /> <span className="sr-only">Nationality:</span>Greek</li>
                    <li><FontAwesomeIcon icon={faLocationDot} /> <span className="sr-only">Location:</span>Edinburgh, UK</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> <span className="sr-only">Email:</span>nikosxenakis94@gmail.com</li>
                  </ul>
                </div>
              </div>
            </aside>

            <aside className="skills aside section">
              <div className="section-inner">
                <h2 className="heading">Skills</h2>
                <div className="content">
                  <p className="intro"></p>
                  <div className="skillset">
                    {skills.map((s) => (
                      <div className="item">
                        <h3 className="level-title">{s.name}<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to add more info...">{s.level}</span></h3>
                        <div className="level-bar">
                          <div className="level-bar-inner" style={{ width: s.width }}>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p><a className="more-link" href={linkedInLink}><FontAwesomeIcon icon={faExternalLink} /> More on Linkedin</a></p>
              </div>
            </aside>

            <aside className="languages aside section">
              <div className="section-inner">
                <h2 className="heading">Languages</h2>
                <div className="content">
                  <ul className="list-unstyled">
                    {languages.map((l) => (
                      <li className="item">
                        <span className="title"><strong>{l.name}:</strong></span>
                        <span className="level">
                          {l.level}
                          <br className="visible-sm visible-xs" />
                          {[...Array(l.stars)].map((e, i) => <FontAwesomeIcon icon={faStar} />)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </Col>
        </Row>
      </div>

      <footer className="footer">
        <div className="container text-right">
          <small className="copyright">@Copyrights Xenakis Nikolaos</small>
        </div>
      </footer>
    </>
  );
}
