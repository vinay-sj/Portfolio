import React from "react";
import profile from './../files/Vinay.jpg'
import Typography from "@material-ui/core/Typography";

import {makeStyles} from '@material-ui/core/styles';
import {Box, Container, Grid, List, ListItem} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        alignCenter: theme.alignment.horizontalCenter,
        sectionSpace: theme.space.sectionSpace,
        aboutMe: {
            color: theme.palette.primary.main,
        },
        headingSpace: theme.space.headingSpace,
        item1: {
            order: 2,
            [theme.breakpoints.up('md')]: {
                order: 1,
            },
        },
        item2: {
            order: 1,
            width: "100%",
            height: "100%",
            ...theme.alignment.horizontalCenter,
            ...theme.alignment.verticalMarginCenter,
            [theme.breakpoints.up('md')]: {
                order: 2,
            },
        },
    photo:{
        height: "200px",
        "margin-top": "20px",
'margin-bottom': "20px",
        [theme.breakpoints.down('sm')]: {
            height: "300px"
        },
        [theme.breakpoints.only('md')]: {
            height: "200px"
        },
        [theme.breakpoints.up('lg')]: {
            height: "300px"
        },
    }
    })
)

function About() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.sectionSpace} id='about'>
            <Typography variant="h2" gutterBottom className={classes.alignCenter}>
                About Me
            </Typography>
            <Grid container className={classes.headingSpace}>
                <Grid md={6} item className={classes.item1}>
                    <Typography variant="body1" paragraph className={classes.aboutMe}>
                        Shortly after my Bachelors in Electronics and Communication from Mahatma Gandhi University, I
                        joined Cognizant Technology Solutions as a Software Engineer, where I worked on multiple
                        projects and POCs. Working with highly motivated teams helped me understand project analysis,
                        complete product architecture, and development, and trained me to be adaptive to new
                        technologies.
                    </Typography>
                    <Typography variant="body1" paragraph className={classes.aboutMe}>
                        After getting some experience in the industry, I joined Northeastern University to pursue my
                        Master of Science in Computer Science. As part of my summer internship, I joined Vistan Health
                        as a Software Engineer Intern, where I worked with a team of interns to build a web and mobile
                        application using AWS, React.js, Node.js.
                    </Typography>
                    <Typography variant="body1" paragraph className={classes.aboutMe}>
                        Technologies I am working on:
                    </Typography>

                    <List component='ul'>
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>Java</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>JavaScript</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>Python</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>TypeScript</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>React.js</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>Node.js</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>AWS</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>SQL</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>NoSQL</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>HTML</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>CSS</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>JQuery</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>Bootstrap</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>NumPy</ListItem></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={4}><ListItem component='li'>Git</ListItem></Grid>
                        </Grid>
                    </List>
                </Grid>
                <Grid item md={6} order={1} className={classes.item2}>
                    <img className={classes.photo} src={profile} alt='profile'/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;