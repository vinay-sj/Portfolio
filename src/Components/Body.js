import React from 'react';
import Contact from "./Contact";
import Projects from "./Projects";

class Body extends React.Component {
render() {
  return(
    <>
      {/*<Home/>*/}
      {/*<About/>*/}
      {/*<Experience/>*/}
      <Projects/>
      <Contact/>
    </>
  );
}
}

export default Body;