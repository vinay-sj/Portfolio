import React from "react";
import './../css/Message.css'
import EmailIcon from '@material-ui/icons/Email';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.message = props.message;
    }

    render() {
        return (
            <div>
                <div className="mt-3 mb-3 p-0 contact align-content-center">
                    <a href="mailto:srampickaljoseph.v@northeastern.edu" className="link-color mb-2">
                        <EmailIcon style={{"fontSize": "37px"}} className='message-icon mr-2'/>
                        <span>
            {this.message}
            </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Message;