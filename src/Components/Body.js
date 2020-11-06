import React from 'react';
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home";

class Body extends React.Component {
render() {
  return(
    <div>
      <Home/>
      {/*<About/>*/}
      {/*<Experience/>*/}
      <Projects/>
      <Contact/>
    </div>
  );
}
}

export default Body;