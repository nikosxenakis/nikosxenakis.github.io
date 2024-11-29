import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Col, TabContainer, Modal, Row, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDownload, faEnvelope, faEye, faFlag, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import Cv from './cv';
import { email, gitHub, interests, languages, linkedIn, locationMaps, name, projects, skills, stackOverflowLink, summary, title } from './data';
import Education from './education';
import Experience from './experience';

export default function App() {
  const [showCV, setShowCV] = React.useState(false);

  return (
    <>
      <Modal className='cvModal' show={showCV} onHide={() => { setShowCV(false); }}>
        <PDFViewer>
          <Cv />
        </PDFViewer>
      </Modal>

      <header className="header">
        <TabContainer>
          <Row>
            <Col xs={0} sm={0} lg={3} />
            <Col xs={12} sm={2} lg={2} className='avatar'>
              {/* <img src='https://avatars.githubusercontent.com/u/25032940?v=4' alt="Xenakis Nikos" /> */}
              <img src='../assets/images/avatar.png' alt="Xenakis Nikos" />
            </Col>
            <Col xs={12} sm={8} lg={4}>
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
                        <a href={linkedIn.link}>
                          <FontAwesomeIcon
                            icon={faLinkedin}
                          />
                        </a>
                      </li>
                      <li>
                        <a href={gitHub.link}>
                          <FontAwesomeIcon
                            icon={faGithub}
                          />
                        </a>
                      </li>
                      <li>
                        <a href={stackOverflowLink}>
                          <FontAwesomeIcon
                            icon={faStackOverflow}
                          />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={2} lg={1} className='resume'>
              <Row>
                <Col xs={12} className='resumeTitle'>
                  <h5>Resume</h5>
                </Col>
                <Col xs={6}>
                  <span onClick={() => { setShowCV(true); }}>
                    <FontAwesomeIcon
                      icon={faEye}
                    />
                  </span>
                </Col>
                <Col xs={6}>
                  <a href={'../assets/Xenakis Nikos CV.pdf'} download="Xenakis Nikos CV.pdf">
                    <FontAwesomeIcon
                      icon={faDownload}
                    />
                  </a>
                </Col>
              </Row>
              {/* <a href={CVLink}><FontAwesomeIcon icon={faDownload} /></a> */}
            </Col>
            <Col xs={0} sm={0} lg={1} />
          </Row>
        </TabContainer>
      </header>

      <div className="container sections-wrapper">
        <Row>
          <Col xs={0} sm={0} lg={3} />
          <Col xs={12} sm={12} md={8} lg={5}>
            <section className="about section">
              <div className="section-inner">
                <h2 className="heading">Summary</h2>
                <div className="content">
                  <p>{summary}</p>
                  <p><b>Work Authorization</b> Eligible to work in the EU, no Visa required</p>
                </div>
              </div>
            </section>

            <Experience />

            <Education />

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
                          {w.technologies.split(',').map((t, i) => (
                            <Badge className='technology' pill bg="light" text="dark" key={`${w.name}-${i}`}>
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
          <Col xs={12} sm={12} md={4} lg={3} className="secondary">
            <aside className="info section">
              <div className="section-inner small">
                <h2 className="heading">Basic Information</h2>
                <div className="content">
                  <ul className="list-unstyled">
                    <li><FontAwesomeIcon icon={faEnvelope} /> <span className="sr-only">Email:</span><a href={email.link}>{email.short}</a></li>
                    <li><FontAwesomeIcon icon={faLocationDot} /> <span className="sr-only">Location:</span><a href={locationMaps}>Zurich, Switzerland</a></li>
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
                        <span className="level-title">{s.name} </span>
                        <span> - </span>
                        <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true">{s.level}</span>
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
                        <span className="title"><strong>{l.name} </strong></span>
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
          <Col xs={0} sm={0} lg={1} />
        </Row>
      </div>

      <footer className="footer">
        <div className="container text-right">
          <small className="copyright">@Copyrights Xenakis Nikolaos - February 2024</small>
        </div>
      </footer>
    </>
  );
}
