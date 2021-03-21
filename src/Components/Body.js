import React from 'react';
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home";
import About from "./About";
import Experiences from "./Experiences";
import {Container} from "@material-ui/core";

class Body extends React.Component {
    render() {
        return (
            <Container maxWidth="xl">
                <Home/>
                <About/>
                {/*<Experiences/>*/}
                {/*<Projects/>*/}
                <Contact/>
            </Container>
        );
    }
}

export default Body;