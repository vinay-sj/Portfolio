import React, {lazy, Suspense} from 'react';
import {CircularProgress, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../css/Body";
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const Experiences = lazy(() => import("./Experiences"));


const useStyles = makeStyles(styles);
function Body (){

    const classes = useStyles();
        return (
            <Container maxWidth="xl">
                <Suspense fallback={<CircularProgress color="secondary"/>}>
                    <Home/>
                    <About/>
                    <Experiences/>
                    <Projects/>
                    <Contact/>
                </Suspense>
            </Container>
        );
}

export default Body;