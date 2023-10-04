import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDownload, faEnvelope, faFlag, faGraduationCap, faLocationDot, faStar, faUserTie } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const linkedInLink = 'https://www.linkedin.com/in/nikosxenakis';
  const gitHubLink = 'https://github.com/nikosxenakis';
  const stackOverflowLink = 'https://stackoverflow.com/users/8756896/nikos-xenakis';
  const locationMaps = 'https://www.google.co.uk/maps/place/Edinburgh/@55.9412015,-3.2465378,13z/data=!3m1!4b1!4m6!3m5!1s0x4887b800a5982623:0x64f2147b7ce71727!8m2!3d55.953252!4d-3.188267!16zL20vMDJtNzc?entry=ttu';
  const CVLink = 'https://github.com/nikosxenakis/nikosxenakis-website/blob/master/src/assets/resume.pdf';
  const summary = 'Passion and devotion are the cornerstones of my professional approach. I am deeply committed to staying updated, constantly researching innovative products and cutting-edge methods to ensure that my projects not only meet but exceed expectations. With a rich background in designing, developing, and testing software, I bring a blend of technical expertise and creative problem-solving to every challenge. My goal is to deliver solutions that are not just efficient and reliable, but also future-ready. I thrive in collaborative environments and am always eager to learn and grow alongside my peers.';
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
                      <li><a href={stackOverflowLink}><FontAwesomeIcon icon={faStackOverflow} /></a></li>
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
                <h2 className="heading">Work Experience <FontAwesomeIcon icon={faUserTie} /></h2>
                <div className="content">
                  {work.map((w, i) => (
                    <div className="item" key={i}>
                      <h3 className="title">{w.role} <span className="place"><a href={w.companyUrl}>{w.company}</a></span> <span className="year">({w.date})</span></h3>
                      <p className="description">{w.description}{w.technologies ? (<span className='technologies'><br /><span className='title'>Technologies</span> {w.technologies}</span>) : ''}</p>
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
                <h2 className="heading">Projects <FontAwesomeIcon icon={faCode} /></h2>
                <div className="content">
                  {projects.map((w, i) => (
                    <div className="item" key={i}>
                      <h3 className="title"><a href={w.url}>{w.name}</a> <span className="year">({w.date})</span></h3>
                      <p className="description">{w.description}{w.technologies ? (<span className='technologies'><br /><span className='title'>Technologies</span> {w.technologies}</span>) : ''}</p>
                    </div>
                  ))}
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
                    <li><FontAwesomeIcon icon={faLocationDot} /> <span className="sr-only">Location:</span><a href={locationMaps}>Edinburgh, UK</a></li>
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
                    {languages.map((l, i) => (
                      <li className="item" key={i}>
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
                    {interests.map((l, i) => (
                      <li className="item" key={i}>
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
          <small className="copyright">@Copyrights Xenakis Nikolaos - October 2023</small>
        </div>
      </footer>
    </>
  );
}
