import React from "react";
import  './../css/Experience.css'
import {Row, Col} from 'react-bootstrap'
class Experiences extends React.Component {
  render() {
    return (
      <div className='spacing' id='work'>
        <h1>Where I've worked</h1>
        <div className='container'>
              <ul className="timeline">
                <li>
                  <Row>
                    {/*<>*/}
                      <Col md={8}>
                  <h4 className='text-left'>Software Engineer Intern <span className='company-name'>@Vistan Health</span></h4>
                      </Col>
                      <Col md={4}>
                  <div className="text-left text-md-right text-lg-right text-xl-right">May, 2020 - August, 2020</div>
                    </Col>
                  </Row>
                  <ul className='text-left'>
                    <li>
                      Contributed as a Full Stack Developer to develop a web application for Physicians to monitor Patients. Built authentication module to secure backend APIs using Cognito
                    </li>
                    <li>
                      Created a chatbot using Amazon Lex that can help patients resolve health queries and connect with physicians. Wrote and reviewed code in 2 languages JavaScript and Python
                    </li>
                    <li>
                      Represented Vistan Health at the MIT COVID-19 Challenge and the Crisis Challenge Innovation Competition
                    </li>
                  </ul>
                </li>
                <li>
                  <Row>
                    <Col md={8}>
                    <h4 className='text-left'>Software Engineer <span className='company-name'>@Cognizant Technology Solutions</span></h4>
                    </Col>
                    <Col md={4}>
                    <div className="text-left text-md-right text-lg-right text-xl-right">January, 2017 - August, 2019</div>
                    </Col>
                  </Row>
                  <ul className='text-left'>
                    <li>
                      Developed automated claim processing tool using Java and Selenium, which expedited processing of claims by 10%
                    </li>
                    <li>
                      Built a production tool to generate complex queries using VBA to help associates without knowledge in SQL to retrieve details from database on to an Excel sheet
                    </li>
                    <li>
                      Led the R&D team to find a solution in automating the web-based screens inside windows-based FACETS by integrating Winium and Sikuli to Cognizant’s CRAFT framework to achieve 100% automation
                      </li>
                  </ul>
                </li>

              </ul>
        </div>
      </div>
    );
  }
}

export default Experiences;