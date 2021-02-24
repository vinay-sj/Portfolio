import React from "react";
import "./../css/Footer.css";
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-spacing foot">
                <p className="footer">Built using React.Js by Vinay Srampickal Joseph.</p>
                <a
                    className="github"
                    href="https://github.com/vinay-sj/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon style={{"fontSize": "30px"}} className='mr-2'/>
                </a>
            </div>
        );
    }
}