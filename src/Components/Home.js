import React from 'react';
import './../css/Home.css'
import Message from "./Message";

class Home extends React.Component {
  render() {
    return (
      <div id='home' className='container'>
        <div className='spacing home-text'>
          <h3 className='home-hi'>Hi, my name is</h3>
          <h1 className='home-name mt-4'>Vinay Srampickal Joseph.</h1>
          <h2 className='home-role mt-4'>Full Stack Developer.</h2>
          <h6 className='home-desc col-md-8 mt-4' >I am a Master of Science in Computer Science (MSCS) candidate at Northeastern
            University, Boston. I am a fun-loving person who loves to push limits and explore my potential. I love to
            learn new things, and this keeps me interested in learning new languages and technologies.</h6>
          <div className='mt-4'>
          <Message message='Get in Touch' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;