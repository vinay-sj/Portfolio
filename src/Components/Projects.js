import React, {useEffect, useState} from "react";
import {
    Container, Col, Row
} from "react-bootstrap";
import './../css/Project.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import json from "../files/json/projects.json"
import {GetImage} from "./ImageLoader"

function content(name, img, githubLink, extLink, detailList, dir) {
    const details = (detailList) => {
        return (
            (detailList || []).map((detail, index) => {
                return (
                    <li key={index}>{detail}</li>
                );
            })
        );
    }
    const linksinpage = (link, faGithub) => {
        if (link) {
            return (
                <a
                    className="github"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" className='mr-4'/>
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
                    <Col lg={6}><img className='project-img' src={img} alt=''/></Col>
                    <Col lg={6} className="my-auto">
                        <ul className='project-content'>
                            {details(detailList)}
                        </ul>
                        {linksinpage(githubLink, faGithub)}
                        {linksinpage(extLink, faExternalLinkAlt)}
                    </Col>
                </>
            )
        } else {
            return (
                <>
                    <Col lg={6} className='my-auto order-2 order-md-2 order-lg-1 order-xl-1'>
                        <ul className='project-content'>
                            {details(detailList)}
                        </ul>
                        {linksinpage(githubLink, faGithub)}
                        {linksinpage(extLink, faExternalLinkAlt)}
                    </Col>
                    <Col lg={6} className='order-1 order-md-1 order-lg-2 order-xl-2 my-auto'><img
                        className='project-img'
                        src={img} alt=''/></Col>
                </>
            )
        }
    }
    return (
        <Container className='mt-4'>
            <h2 className='mb-3'>{name}</h2>
            <Row>
                {direction(dir)}
            </Row>
        </Container>
    )
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="projectpanel"
            hidden={value !== index}
            id={`project-panel-${index}`}
            aria-labelledby={`project-panel-${index}`}
            {...other}
        >
            {children}
        </div>
    );
}

function Projects() {
    const [tabValue, setTabValue] = useState(0);
    const projects = JSON.parse(JSON.stringify(json));
    let projectKeys = Object.keys(projects);

    useEffect(() => {
        projectKeys = Object.keys(projects);
    }, [])

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const getProjectTabs = () => {
        return projectKeys.map((projectKey, id) => <Tab key={id} label={projectKey} {...a11yProps(id)} />)
    }
    const getProjectContent = () => {
        return projectKeys.map((projectKey, id) => {
            const projectData = projects[projectKey];

            return <TabPanel key={id} value={tabValue} index={id}>
                {content(projectData.name, GetImage[projectData.image], projectData.githubLink, projectData.websiteLink,
                    projectData.body, projectData.imagePosition)}
            </TabPanel>
        })
    }

    return (
        <div className='spacing container' id='projects'>
            <h1>My Projects</h1>
            <AppBar position="static" color={"transparent"} >
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable project tabs"
                >
                    {getProjectTabs()}
                </Tabs>
            </AppBar>
            {getProjectContent()}
        </div>
    );
}

export default Projects;