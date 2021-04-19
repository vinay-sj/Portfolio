import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "../css/Footer";

const useStyles = makeStyles(styles);

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.sectionSpace}>
            <div className={classes.alignCenter}>
                <Typography variant="body2" gutterBottom className={classes.footer} align="center">
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