import React, {useState} from "react";
import {Stepper, Step, StepLabel, StepContent, Avatar} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import {GetExperienceImage} from "./ImageLoader";

function StepperContents({experiences}) {

    const experienceKeys = Object.keys(experiences);

    const [activeStep, setActiveStep] = useState(0);
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {experienceKeys.map((key, index) => {
                const experience = experiences[key]
                return (
                    <Step key={index}>
                        <StepLabel
                            StepIconComponent={() =>
                                <Avatar variant="circular"
                                        style={{"width": "24px", "height": "24px"}}
                                        alt={`${experience.companyName} logo`}
                                        src={GetExperienceImage[experience.logo]}
                                />}
                            onClick={handleStep(index)}
                        >
                            <Row>
                                <Col md={8} className="mt-2">
                                    <h4 className='text-left'>{experience.role}<span
                                        className='company-name'>@{experience.companyName}</span>
                                    </h4>
                                </Col>
                                <Col md={4}>
                                    <div className="text-left text-md-right text-lg-right text-xl-right">
                                        {experience.startDate} - {experience.endDate}
                                    </div>
                                    <div className="text-left text-md-right text-lg-right text-xl-right">
                                        {experience.location}
                                    </div>
                                </Col>
                            </Row>
                        </StepLabel>
                        <StepContent style={{"color": "red"}}>
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