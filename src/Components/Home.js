import React from 'react';
// import './../css/Home.css'
import Message from "./Message";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    homeText: {
        'text-align': "left",
    },
    hi: {
        color: theme.palette.secondary.main,
    },
    name: {
        color: theme.palette.primary,
    },
    role: {
        color: theme.palette.primary,
    },
    description: {
        color: theme.palette.primary,
    },
    sectionSpace: theme.sectionSpace,
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.sectionSpace}>
            <Container maxWidth='xl' id='home' className={classes.homeText}>
                <Typography variant="h4" gutterBottom className={classes.hi}>
                    Hi, my name is
                </Typography>
                <Typography variant="h1" gutterBottom className={classes.name}>
                    Vinay Srampickal Joseph.
                </Typography>
                <Typography variant="h3" gutterBottom className={classes.role}>
                    Full Stack Developer.
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.description}>
                    I am a Master of Science in Computer Science (MSCS) candidate at Northeastern University,
                    Boston. I
                    am a fun-loving person who loves to push limits and explore my potential. I love to learn new
                    things, and this keeps me interested in learning new languages and technologies.
                </Typography>
                <div>
                    <Message message='Get in Touch'/>
                </div>
            </Container>
        </div>

    );
}

export default Home;