import React, {useState} from "react";
import {Stepper, Step, StepLabel, StepContent, Avatar, StepButton} from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Col, Row} from "react-bootstrap";
import {GetExperienceImage} from "./ImageLoader";
import StepConnector from '@material-ui/core/StepConnector';

// const useColorlibStepIconStyles = makeStyles({
//     root: {
//         backgroundColor: "#ccc",
//         zIndex: 1,
//         color: "#fff",
//         width: 50,
//         height: 50,
//         display: "flex",
//         borderRadius: "50%",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     active: {
//         backgroundImage:
//             "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//         boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
//     },
//     completed: {
//         backgroundImage:
//             "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
//     }
// });

function StepperContents({experiences}) {
    // const classes = useColorlibStepIconStyles();
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
        <Stepper nonLinear activeStep={activeStep} orientation="vertical" connector={<ColorlibConnector />}>
            {experienceKeys.map((key, index) => {
                const experience = experiences[key]
                return (
                    <Step key={index}>
                        <StepButton  onMouseEnter={handleStep(index)}>
                        <StepLabel
                            StepIconComponent={() =>
                                <Avatar variant="circular"
                                        style={{"width": "40px", "height": "40px"}}
                                        alt={`${experience.companyName} logo`}
                                        src={GetExperienceImage[experience.logo]}
                                />}
                        >
                            <Row>
                                <Col md={8} className="mt-2">
                                    <h4 className='text-left'>{experience.role}<span
                                        className='company-name'> @{experience.companyName}</span>
                                    </h4>
                                </Col>
                                <Col md={4} className="d-none d-md-block">
                                    <div className="text-left text-md-right text-lg-right text-xl-right">
                                        {experience.startDate} - {experience.endDate}
                                    </div>
                                    <div className="text-left text-md-right text-lg-right text-xl-right">
                                        {experience.location}
                                    </div>
                                </Col>
                            </Row>
                        </StepLabel>
                        </StepButton>
                        <StepContent style={{"color": "red"}}>
                            <div className="d-xs-block d-md-none">
                            <div className="text-right text-md-right text-lg-right text-xl-right">
                                {experience.startDate} - {experience.endDate}
                            </div>
                            <div className="text-right text-md-right text-lg-right text-xl-right">
                                {experience.location}
                            </div>
                            </div>
                            <ul className='text-left'>
                                {experience.data.map((content, i) =>
                                    <li key={i}>{content}</li>
                                )}
                            </ul>
                        </StepContent>
                    </Step>
                )
            })}
        </Stepper>
    );
}

export default StepperContents;