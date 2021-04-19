import React, {useState} from "react";
import {Stepper, Step, StepLabel, StepContent, Avatar, StepButton} from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';
// import {Col, Row} from "react-bootstrap";
import {GetExperienceImage} from "./ImageLoader";
import StepConnector from '@material-ui/core/StepConnector';
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 50,
        height: 50,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    active: {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
    },
    completed: {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
    }
});

const useStyles = makeStyles((theme) => ({
    companyAvatar: {width: "40px", height: "40px"},
    companyPeriod: {
        color: theme.palette.primary.main
    },
    companyRoleDescription: {
        color: theme.palette.primary.main,
    },
    stepperLabelRoot:{
        width:"100%"
    },
    stepperLabel:{
        color:theme.palette.primary.main,
    },
    stepperContent:{
        marginLeft: "20px",
    },

}));

function StepperContents({experiences}) {
    const classes = useStyles();
    const experienceKeys = Object.keys(experiences);

    const [activeStep, setActiveStep] = useState(0);
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const ColorlibConnector = withStyles({
        lineVertical: {
            marginLeft: 8,
            // padding:0
        },
        // vertical:{
        //     padding:0
        // }
    })(StepConnector);

    return (
        <Stepper nonLinear activeStep={activeStep} orientation="vertical" connector={<ColorlibConnector/>}>
            {experienceKeys.map((key, index) => {
                const experience = experiences[key]
                return (
                    <Step key={index}>
                        <StepButton onMouseEnter={handleStep(index)}>
                            <StepLabel
                                classes={{root:classes.stepperLabelRoot, label:classes.stepperLabel}}
                                StepIconComponent={() =>
                                    <Avatar variant="circular"
                                            className={classes.companyAvatar}
                                            alt={`${experience.companyName} logo`}
                                            src={GetExperienceImage[experience.logo]}
                                    />}
                            >
                                <Grid container>

                                    <Grid item md={8}
                                    >
                                        <Box mt={2}>
                                            <Typography variant="h5" gutterBottom align="left"
                                                       >
                                                {experience.role}<span
                                                className={classes.companyName}> @{experience.companyName}</span>
                                            </Typography>
                                        </Box>
                                    </Grid>


                                    <Grid item md={4}>
                                        <Box display={{xs: "none", md: "block"}} >
                                            <Typography variant="subtitle1" align="right">
                                                {experience.startDate} - {experience.endDate}
                                            </Typography>
                                            <Typography variant="subtitle1" align="right">
                                                {experience.location}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </StepLabel>
                        </StepButton>
                        <StepContent classes={{root:classes.stepperContent}} style={{"color": "red"}}>
                            <Box display={{xs: "block", md: "none"}} className={classes.companyPeriod}>
                                <Typography variant="subtitle1" align="right">
                                    {experience.startDate} - {experience.endDate}
                                </Typography>
                                <Typography variant="subtitle1" align="right">
                                    {experience.location}
                                </Typography>
                            </Box>
                            <ul>
                                <Typography variant="body1" gutterBottom align="left"
                                            className={classes.companyRoleDescription}>
                                    {experience.data.map((content, i) =>
                                        <li key={i}>{content}</li>
                                    )}
                                </Typography>
                            </ul>
                        </StepContent>
                    </Step>
                )
            })}
        </Stepper>
    );
}

export default StepperContents;