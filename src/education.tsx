import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { education } from './data';

export default function Education() {
   return (
      <section className="education section">
         <div className="section-inner">
            <h2 className="heading">Education <FontAwesomeIcon icon={faGraduationCap} /></h2>
            <div className="content">
               {education.map((w, i) => (
                  <div className="item" key={i}>
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
                     <ul>
                        {w.grade && <li>
                           <b>Grade</b> {w.grade}
                        </li>}
                        {w.scholarship && <li>
                           <b>Scholarship</b> {w.scholarship}
                        </li>}
                        {w.dissertation && <li>
                           <b>Dissertation</b> {w.dissertation}
                        </li>}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}