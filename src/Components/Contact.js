import React from 'react';
import './../css/Contact.css'
import Message from "./Message";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Box, Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    alignCenter: theme.alignment.horizontalCenter,
    section: {
        ...theme.space.sectionSpace,
        ...theme.alignment.horizontalCenter
    },
    verticalCenter: theme.alignment.verticalMarginCenter,

    iconGithub: {
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        "fontSize": "30px"
        , color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
            ...theme.actions.scale,
        },
        ...theme.style.rmOutline,
    },
    iconLinkedin: {
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        fontSize: "37px"
        , color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
            ...theme.actions.scale,
        },
        ...theme.style.rmOutline,
    }

}));

function Contact() {
    const classes = useStyles();
    return (
        <div id='contact' className={classes.section}>
            <Typography variant="h2" gutterBottom className={classes.alignCenter}>
                Contact
            </Typography>
            <Box mt={5} mb={4}>
                <Typography variant="body1" gutterBottom className={classes.alignCenter}>
                    I am currently looking for Full-time opportunities starting May 2021. My inbox is always open, even
                    for just a 'Hi'.
                </Typography>
            </Box>
            {/*<p className="mt-5 mb-4">I am currently looking for Full-time opportunities starting May 2021. My inbox*/}
            {/*    is always open, even for just a 'Hi'.</p>*/}

            <Message message='Message Me'/>

            <Box mt={5} mb={4}>
                <Typography variant="body1" gutterBottom className={classes.alignCenter}>
                    Or, you can connect with me on my social media!
                </Typography>
            </Box>

            {/*className="text-center align-items-lg-center"*/}
            <Grid container justify='center'>
                <Grid item className={classes.verticalCenter}>
                    <a
                        href="https://github.com/vinay-sj"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Box mr={2}>
                            <GitHubIcon className={classes.iconGithub}/>
                        </Box>
                    </a>
                </Grid>
                <Grid item className={classes.verticalCenter}>
                    <a
                        href="https://www.linkedin.com/in/vinaysj"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Box mr={2}>
                            <LinkedInIcon className={classes.iconLinkedin}/>
                        </Box>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact