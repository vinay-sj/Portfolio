import React from 'react';
import './../css/Contact.css'
import Message from "./Message";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Contact extends React.Component {
    render() {
        return (
            <div id='contact' className='spacing'>
                <h1>Contact</h1>

                <p className="mt-5 mb-4">I am currently looking for Full-time opportunities starting May 2021. My inbox
                    is always open, even for just a 'Hi'.</p>

                <Message message='Message Me'/>

                <p className="mt-5 mb-4">Or, you can connect with me on my social media!</p>

                <div className="text-center align-items-lg-center">
                    <a
                        className="github"
                        href="https://github.com/vinay-sj"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon style={{"fontSize": "30px"}} className='mr-2'/>
                    </a>
                    <a
                        className="github"
                        href="https://www.linkedin.com/in/vinaysj"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon style={{"fontSize": "37px"}} className='mr-2'/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact