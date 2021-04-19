import React from 'react';
import Message from "./Message";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Box, Grid} from "@material-ui/core";
import styles from "../css/Contact";

const useStyles = makeStyles(styles);

function Contact() {
    const classes = useStyles();
    return (
        <div id='contact' className={classes.section}>
            <Typography variant="h2" gutterBottom align="center">
                Contact
            </Typography>
            <Box mt={5} mb={4}>
                <Typography variant="body1" gutterBottom align="center">
                    I am currently looking for Full-time opportunities starting May 2021. My inbox is always open, even
                    for just a 'Hi'.
                </Typography>
            </Box>

            <Message message='Message Me'/>

            <Box mt={5} mb={4}>
                <Typography variant="body1" gutterBottom align="center">
                    Or, you can connect with me on my social media!
                </Typography>
            </Box>

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