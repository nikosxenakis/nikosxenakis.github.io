import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Col, Container, Modal, Row, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDownload, faEnvelope, faFlag, faGraduationCap, faLocationDot, faStar, faUserTie } from '@fortawesome/free-solid-svg-icons';
import CV from './cv';
import { CVLink, education, email, gitHubLink, interests, languages, linkedInLink, locationMaps, name, projects, skills, stackOverflowLink, summary, title, work } from './data';

export default function App() {
  const [showCV, setShowCV] = React.useState(true); // TODO: Later on, this should be false
  const [shakeLinkedIn, setShakeLinkedIn] = React.useState(false);
  const [shakeGithub, setShakeGithub] = React.useState(false);
  const [shakeStackOverflow, setShakeStackOverflow] = React.useState(false);

  return (
    <>
      {/* <Modal className='cvModal' show={showCV} onHide={() => { setShowCV(false); }}>
        <PDFViewer>
          <CV />
        </PDFViewer>
      </Modal> */}

      <header className="header">
        <Container>
          <Row>
            <Col xs={0} sm={0} xl={3} />
            <Col xs={12} sm={2} xl={2} className='avatar'>
              {/* <img src='https://avatars.githubusercontent.com/u/25032940?v=4' alt="Xenakis Nikos" /> */}
              <img src='../assets/images/avatar.png' alt="Xenakis Nikos" />
            </Col>
            <Col xs={12} sm={8} xl={4}>
              <div className="profile-content">
                <Row>
                  <Col xs={12}>
                    <h1 className="name">{name}</h1>
                  </Col>
                  <Col xs={12}>
                    <h2 className="title">{title}</h2>
                  </Col>
                  <Col xs={12}>
                    <ul className="social list-inline">
                      <li>
                        <a href={linkedInLink}>
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            shake={shakeLinkedIn}
                            onMouseOver={() => { setShakeLinkedIn(true) }}
                            onMouseLeave={() => { setShakeLinkedIn(false) }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href={gitHubLink}>
                          <FontAwesomeIcon
                            icon={faGithub}
                            shake={shakeGithub}
                            onMouseOver={() => { setShakeGithub(true) }}
                            onMouseLeave={() => { setShakeGithub(false) }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href={stackOverflowLink}>
                          <FontAwesomeIcon
                            icon={faStackOverflow}
                            shake={shakeStackOverflow}
                            onMouseOver={() => { setShakeStackOverflow(true) }}
                            onMouseLeave={() => { setShakeStackOverflow(false) }}
                          />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={2} xl={1} className='resume'>
              <a href={CVLink}><FontAwesomeIcon icon={faDownload} /></a>
              {/* <span onClick={() => { setShowCV(true); }}><FontAwesomeIcon icon={faDownload} /> Open CV</span> */}
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
                      <p className="description">{w.description}{w.technologies ? (
                        <span className='technologies'>
                          <br />
                          <span className='title'>Technologies</span>
                          {w.technologies.split(',').map((t, i) => (
                            <Badge pill bg="light" text="dark" key={i}>
                              {t}
                            </Badge>
                          ))}
                        </span>
                      ) : ''}</p>
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
                      <p className="description">{w.description}{w.technologies ? (
                        <span className='technologies'>
                          <br />
                          <span className='title'>Technologies</span>
                          {w.technologies.split(',').map((t, i) => (
                            <Badge pill bg="light" text="dark" key={i}>
                              {t}
                            </Badge>
                          ))}
                        </span>
                      ) : ''}</p>
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
                    <li><FontAwesomeIcon icon={faEnvelope} /> <span className="sr-only">Email:</span><a href={`mailto:${email}`}>{email}</a></li>
                    <li><FontAwesomeIcon icon={faLocationDot} /> <span className="sr-only">Location:</span><a href={locationMaps}>Edinburgh, UK</a></li>
                    <li><FontAwesomeIcon icon={faFlag} /> <span className="sr-only">Nationality:</span>Greek</li>
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
                          {[...Array(l.stars)].map((e, i) => <FontAwesomeIcon icon={faStar} key={i} />)}
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
          <small className="copyright">@Copyrights Xenakis Nikos - October 2023</small>
        </div>
      </footer>
    </>
  );
}
