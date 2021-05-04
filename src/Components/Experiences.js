import React from "react";
import json from "../files/json/experience.json";
import StepperContents from "./StepperContents";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "../css/Experiences";

const useStyles = makeStyles(styles);

function Experiences(props) {
    const classes = useStyles();
    const experiences = JSON.parse(JSON.stringify(json));
    return (
        <div className={classes.section} id='work'>
            <Typography variant="h2" gutterBottom align="center">
                Where I've worked
            </Typography>
            <StepperContents experiences={experiences}/>
        </div>

    );
}

export default Experiences;