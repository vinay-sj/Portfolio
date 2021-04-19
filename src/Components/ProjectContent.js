import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    projectImg: {
        height: "120px",
        marginTop: "20px",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            height: "200px"
        },
        [theme.breakpoints.only('md')]: {
            height: "250px"
        },
        [theme.breakpoints.only('lg')]: {
            height: "200px"
        },
        [theme.breakpoints.up('xl')]: {
            height: "250px"
        },
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        '&:hover': {
            ...theme.actions.scale,
        }
    },
    projectContent: {
        textAlign: "left",
        justifyContent: "left"
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
        position: "relative",
        top: "4px"
    },
    rightDescription: {
        ...theme.alignment.verticalMarginCenter,
        order: 2,
        [theme.breakpoints.up('lg')]: {
            order: 1,
        },
    },
    leftImage: {
        ...theme.alignment.verticalMarginCenter,
        order: 1,
        [theme.breakpoints.up('lg')]: {
            order: 2,
        },
    },

}));

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
                    <Grid item lg={6}>
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