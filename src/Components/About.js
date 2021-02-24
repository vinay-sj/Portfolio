import React from "react";
import {Col, Row} from 'react-bootstrap'
import profile from './../files/Vinay.jpg'
import './../css/Common.css'
import './../css/About.css'

class About extends React.Component {
    render() {
        return (
            <div className='spacing container' id='about'>
                <h1>About Me</h1>
                <Row className='mt-5'>
                    <Col md={6} className='text-left order-2 order-md-1 order-lg-1 order-xl-1'>
                        <p>
                            Shortly after my Bachelors in Electronics and Communication from Mahatma Gandhi University,
                            I joined
                            Cognizant Technology Solutions as a Software Engineer, where I worked on multiple projects
                            and POCs.
                            Working with highly motivated teams helped me understand project analysis, complete product
                            architecture,
                            and development, and trained me to be adaptive to new technologies.
                        </p>
                        <p>
                            After getting some experience in the industry, I joined Northeastern University to pursue my
                            Master of
                            Science in Computer Science. As part of my summer internship, I joined Vistan Health as a
                            Software
                            Engineer Intern, where I worked with a team of interns to build a web and mobile application
                            using AWS,
                            React.js, Node.js.
                        </p>
                        <p>
                            Technologies I am working on:
                        </p>
                        <ul className='row'>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>Java</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>JavaScript</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>Python</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>TypeScript</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>React.js</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>Node.js</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>AWS</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>SQL</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>NoSQL</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>HTML</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>CSS</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>JQuery</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>Bootstrap</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>NumPy</li>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={4}>
                                <li>Git</li>
                            </Col>
                        </ul>
                    </Col>
                    <Col md={6} className='order-1 order-md-2 order-lg-2 order-xl-2 my-auto'>
                        <img className='photo' src={profile} alt='profile'/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;