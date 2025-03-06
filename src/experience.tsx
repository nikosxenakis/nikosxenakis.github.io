import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { work } from './data';

export default function Experience() {
   return (
      <section className="experience section">
         <div className="section-inner">
            <h2 className="heading">Work Experience <FontAwesomeIcon icon={faUserTie} /></h2>
            <div className="content">
               {work.map((w) => (
                  <div className="item" key={w.date}>
                     <Row className="itemHeader">
                        <Col className="itemHeaderLeft" xs={12} sm={7}>
                           <h3 className="title">{w.role}</h3>
                           <h6 className="company"><a href={w.companyUrl}>{w.company}</a></h6>
                        </Col>
                        <Col className="itemHeaderRight" xs={12} sm={5}>
                           <h6 className="place">{w.location}</h6>
                           <h6 className="year">{w.date}</h6>
                        </Col>
                     </Row>
                     <p className="description">{w.description}{w.technologies ? (
                        <span className='technologies'>
                           <br />
                           {w.technologies.split(',').map((t, i) => (
                              <Badge className='technology' pill bg="light" text="dark" key={i}>
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
   );
}