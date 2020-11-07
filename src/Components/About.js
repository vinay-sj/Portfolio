import React from "react";
import {Col, Row} from 'react-bootstrap'
import profile from './../files/Vinay.jpg'
import './../css/Common.css'
class About extends React.Component {
  render() {
    return (
      <div className='spacing container' id='about'>
        <h1>About Me</h1>
        <Row className='mt-5'>
          <Col md={6} className='text-left'>
            <p>
              Shortly after my Bachelors in Electronics and Communication from Mahatma Gandhi University, I joined
              Cognizant Technology Solutions as a Software Engineer, where I worked on multiple projects and POCs.
              Working with highly motivated teams helped me understand project analysis, complete product architecture,
              and development, and trained me to be adaptive to new technologies.
            </p>
            <p>
              After getting some experience in the industry, I joined Northeastern University to pursue my Master of
              Science in Computer Science. As part of my summer internship, I joined Vistan Health as a Software
              Engineer Intern, where I worked with a team of interns to build a web and mobile application using AWS,
              React.js, Node.js.
            </p>
            <p>
              Technologies I am working on:
            </p>
            <Row>
              <ul className='row'>
                <Col md={6} lg={4}>
                  <li>Java</li>
                </Col>
                <Col md={6}  lg={4}>
                  <li>JavaScript</li>
                </Col>
                <Col md={6}  lg={4}>
                  <li>Python</li>
                </Col>
                <Col md={6}  lg={4}>
                  <li>TypeScript</li>
                </Col>
                <Col md={6}  lg={4}>
                  <li>React.js</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>Node.js</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>AWS</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>SQL</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>NoSQL</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>HTML</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>CSS</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>JQuery</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>Bootstrap</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>NumPy</li>
                </Col>
                <Col md={6} lg={4}>
                  <li>Git</li>
                </Col>
              </ul>

            </Row>
          </Col>
          <Col md={6}>
            <img src={profile} height='300px' alt='vinay profile'/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;