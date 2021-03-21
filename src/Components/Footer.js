import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    footer: {
        "font-size": "12px",
        "font-family": "Calibri",
    },
    sectionSpace: {...theme.space.sectionSpace, "padding-bottom": "20px"},
    iconColor: {
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        fontSize: "30px",
        color: theme.palette.iconColor.main,
        '&:hover': {
            color: theme.palette.secondary.main,
            ...theme.actions.scale,
        },
        ...theme.style.rmOutline,
    },
    alignCenter: theme.alignment.horizontalCenter,
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.sectionSpace}>
            <div className={classes.alignCenter}>
                <Typography variant="body2" gutterBottom className={classes.footer}>
                    Built using React.Js by Vinay Srampickal Joseph.
                </Typography>
                <a

                    href="https://github.com/vinay-sj/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon className={classes.iconColor}/>
                </a>
            </div>
        </div>
    );
}