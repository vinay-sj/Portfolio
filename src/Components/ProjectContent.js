import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Box, CircularProgress, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../css/ProjectContent";

const useStyles = makeStyles(styles);

function ProjectContent(name, img, githubLink, extLink, detailList, dir) {
    const classes = useStyles();
    const details = (detailList) => {
        return (
            (detailList || []).map((detail, index) => {
                return (
                    <li key={index}>{detail}</li>
                );
            })
        );
    }
    const linksinpage = (link, icon) => {
        if (link) {
            return (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Box component="span" mr={2}>
                        {icon}
                    </Box>
                </a>
            )
        } else {
            return (
                <></>
            )
        }
    }
    const direction = (dir) => {
        if (dir === 'left') {
            return (
                <>
                    <Grid item lg={6} className={classes.rightImage}>
                        <img className={classes.projectImg} src={img} alt={name}/>
                    </Grid>
                    <Grid item lg={6} className={classes.verticalCenter}>
                        <ul className={classes.projectContent}>
                            {details(detailList)}
                        </ul>
                        {linksinpage(githubLink, <GitHubIcon className={classes.iconGithub}/>)}
                        {linksinpage(extLink, <OpenInNewIcon className={classes.iconLinkedin}/>)}
                    </Grid>
                </>
            )
        } else {
            return (
                <>
                    <Grid item lg={6} className={classes.rightDescription}>
                        <ul className={classes.projectContent}>
                            {details(detailList)}
                        </ul>
                        {linksinpage(githubLink, <GitHubIcon className={classes.iconGithub}/>)}
                        {linksinpage(extLink, <OpenInNewIcon className={classes.iconLinkedin}/>)}
                    </Grid>
                    <Grid item lg={6} className={classes.leftImage}>
                        <img
                            loading="lazy"
                            className={classes.projectImg}
                            src={img} alt={name}
                        />
                    </Grid>
                </>
            )
        }
    }
    return (
        <Box mt={4}>
            <Typography variant="h4" gutterBottom align="center">
                <Box mb={3}>
                    {name}
                </Box>
            </Typography>
            <Grid container>
                {direction(dir)}
            </Grid>
        </Box>
    )
}

export default ProjectContent;