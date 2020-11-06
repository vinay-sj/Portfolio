import React from "react";
import "./../css/Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-spacing foot mb-4">
        <p className="footer">Built using React.Js by Vinay Srampickal Joseph.</p>
        <a
          className="github"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
      </div>
    );
  }
}