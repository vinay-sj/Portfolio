import React from 'react';
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home";
import About from "./About";
import Experiences from "./Experiences";

class Body extends React.Component {
    render() {
        return (
            <div>
                <Home/>
                <About/>
                <Experiences/>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

export default Body;