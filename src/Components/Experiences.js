import React from "react";
import json from "../files/json/experience.json";
import StepperContents from "./StepperContents";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    section: {
        ...theme.space.sectionSpace,
        ...theme.alignment.horizontalCenter
    },
    verticalCenter: theme.alignment.verticalMarginCenter,
}));

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