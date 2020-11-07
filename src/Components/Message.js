import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

class Message extends React.Component {
  constructor(props) {
    super();
    this.message = props.message;
  }

  render() {
    return (
      <div>
        <div className="mt-3 mb-3 p-0 contact align-content-center">
          <a href="mailto:srampickaljoseph.v@northeastern.edu" className="link-color mb-2">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className='mr-2'/>
            {this.message}
          </a>
        </div>
      </div>
    );
  }
}
export default Message;