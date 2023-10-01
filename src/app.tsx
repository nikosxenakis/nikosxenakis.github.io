import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faExternalLink, faFlag, faGraduationCap, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';

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
    description: 'Designing and developing wellbeing products for enterprises',
    technologies: 'Web stack, TypeScript, ElectronJS, AWS, Terraform, GitHub CI, project management',
  }, {
    role: 'Senior Software Engineer',
    company: 'SeeByte',
    companyUrl: 'http://www.seebyte.com/',
    location: 'Edinburgh, UK',
    date: 'Aug 2021 – Nov 2022',
    description: 'Developing (full-stack) applications for SeeByte.',
    technologies: 'Java, C#, .NET, NSIS, WIX Toolset, Netbeans platform, WPF.',
  }, {
    role: 'Software Engineer',
    company: 'SeeByte',
    companyUrl: 'http://www.seebyte.com/',
    location: 'Edinburgh, UK',
    date: 'Sept 2019 – Aug 2021',
    description: 'Developing (full-stack) applications for SeeByte.',
    technologies: 'Java, C#, .NET, NSIS, WIX Toolset, Netbeans platform, WPF.',
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

  const education = [{
    role: 'Msc in High Performance Computing with Data Science',
    company: 'University of Edinburgh',
    companyUrl: 'https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2019&id=871',
    location: 'Edinburgh, UK',
    date: 'Sep 2018 – Aug 2019',
    grade: '75% (Distinction)',
    dissertation: 'Parallelisation of frame processing for Optical Coherence Tomography (85%)',
    awards: 'Highly Skilled Workforce Scholarship, candidates must have the international equivalent of a UK first class or 2:1 Honours degree at undergraduate level. Nominated the best student award of the MSc program.',
  }, {
    role: 'Bachelor in Computer Science',
    company: 'University of Crete',
    companyUrl: 'https://www.csd.uoc.gr',
    location: 'Heraklion, Greece',
    date: 'Sep 2012 – Jul 2016',
    grade: '84%',
    dissertation: '-',
    awards: '3 years in a row awarded with the Memorial Scholarship Stelios Orfanoudakis. This scholarship is given to the top 3 students of the Computer Science department each year.',
  }, {
    role: 'IT Essentials: PC Hardware and Software',
    company: 'Cisco Network Academy',
    location: 'Chania, Greece',
    date: 'Jun 2011 - Aug 2011',
    description: 'IT Essentials covers fundamental computer skills. It includes labs that provide practical experience using simulation tools',
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
    name: 'Chess',
  }, {
    name: 'Salsa and Cretan traditional dances',
  }, {
    name: 'Working out',
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

  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col xs={0} sm={0} xl={3} />
            <Col xs={12} sm={2} xl={2} className='avatar'>
              {/* <img src='https://avatars.githubusercontent.com/u/25032940?v=4' alt="Xenakis Nikolaos" /> */}
              <img src='../assets/images/avatar.png' alt="Xenakis Nikolaos" />
            </Col>
            <Col xs={12} sm={8} xl={4}>
              <div className="profile-content">
                <Row>
                  <Col xs={12}>
                    <h1 className="name">Xenakis Nikolaos</h1>
                  </Col>
                  <Col xs={12}>
                    <h2 className="title">Software Engineer</h2>
                  </Col>
                  <Col xs={12}>
                    <ul className="social list-inline">
                      <li><a href={linkedInLink}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                      <li><a href={gitHubLink}><FontAwesomeIcon icon={faGithub} /></a></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={2} xl={1} className='resume'>
              <a href={CVLink}><FontAwesomeIcon icon={faDownload} /></a>
            </Col>
            <Col xs={0} sm={0} xl={1} />
          </Row>
        </Container>
      </header>

      <div className="container sections-wrapper">
        <Row>
          <Col xs={0} sm={0} xl={3} />
          <Col xs={12} sm={12} md={8} xl={5}>
            <section className="about section">
              <div className="section-inner">
                <h2 className="heading">Summary</h2>
                <div className="content">
                  <p>{summary}</p>
                </div>
              </div>
            </section>

            <section className="experience section">
              <div className="section-inner">
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                  {work.map((w, i) => (
                    <div className="item" key={i}>
                      <h3 className="title">{w.role} <span className="place"><a href={w.companyUrl}>{w.company}</a></span> <span className="year">({w.date})</span></h3>
                      <p className="description">{w.description}{w.technologies ? (<><br />Technologies: {w.technologies}</>) : ''}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="education section">
              <div className="section-inner">
                <h2 className="heading">Education <FontAwesomeIcon icon={faGraduationCap} /></h2>
                <div className="content">
                  {education.map((w, i) => (
                    <div className="item" key={i}>
                      <h3 className="title">{w.role} <span className="place"><a href={w.companyUrl}>{w.company}</a></span> <span className="year">({w.date})</span></h3>
                      <ul>
                        {w.grade && <li>
                          Grade: {w.grade}
                        </li>}
                        {w.dissertation && <li>
                          Dissertation: {w.dissertation}
                        </li>}
                        {w.awards && <li>
                          Awards: {w.awards}
                        </li>}
                        {w.description && <li>
                          {w.description}
                        </li>}
                      </ul>
                    </div>
                  ))}
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
          <Col xs={12} sm={12} md={4} xl={3} className="secondary">
            <aside className="info section">
              <div className="section-inner small">
                <h2 className="heading">Basic Information</h2>
                <div className="content">
                  <ul className="list-unstyled">
                    <li><FontAwesomeIcon icon={faFlag} /> <span className="sr-only">Nationality:</span>Greek</li>
                    <li><FontAwesomeIcon icon={faLocationDot} /> <span className="sr-only">Location:</span>Edinburgh, UK</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> <span className="sr-only">Email:</span><a href='mailto:nikosxenakis94@gmail.com'>nikosxenakis94@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </aside>

            <aside className="skills section">
              <div className="section-inner small">
                <h2 className="heading">Skills</h2>
                <div className="content">
                  <p className="intro"></p>
                  <div className="skillset">
                    {skills.map((s, i) => (
                      <div className="item" key={i}>
                        <span className="level-title">{s.name} </span>-
                        <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true"> {s.level}</span>
                        {/* <h3 className="level-title">
                          <span>{s.name}</span>
                          <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true">{s.level}</span>
                        </h3> */}
                        <div className="level-bar">
                          <div className="level-bar-inner" style={{ width: s.width }}>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <aside className="languages section">
              <div className="section-inner small">
                <h2 className="heading">Languages</h2>
                <div className="content">
                  <ul className="list-unstyled">
                    {languages.map((l) => (
                      <li className="item">
                        <span className="title"><strong>{l.name}: </strong></span>
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

            <aside className="section">
              <div className="section-inner small">
                <h2 className="heading">Interests</h2>
                <div className="content">
                  <ul className="list-unstyled">
                    {interests.map((l) => (
                      <li className="item">
                        <span className="title">{l.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </Col>
          <Col xs={0} sm={0} xl={1} />
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
