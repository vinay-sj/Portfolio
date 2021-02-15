import React from 'react';
import {
    // Tab, Tabs,
    Container, Col, Row
} from "react-bootstrap";

import './../css/Project.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
    // const openLink = (link)
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


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0,
            projects: JSON.parse(JSON.stringify(json)),
            projectKeys: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const {projects} = this.state;
        this.setState({projectKeys: Object.keys(projects)});
    }

    handleChange = (event, newValue) => {
        this.setState({tabValue: newValue});
    };
    a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    getProjectTabs = () => {
        const {projectKeys} = this.state;
        return projectKeys.map((projectKey, id) => <Tab key={id} label={projectKey} {...this.a11yProps(id)} />)
    }
    getProjectContent = () => {
        const {tabValue, projects, projectKeys} = this.state;
        return projectKeys.map((projectKey, id) => {
            const projectData = projects[projectKey];

            return <TabPanel key={id} value={tabValue} index={id}>
                {content(projectData.name, GetImage[projectData.image], projectData.githubLink, projectData.websiteLink,
                    projectData.body, projectData.imagePosition)}
            </TabPanel>
        })
    }

    render() {
        const {tabValue} = this.state;
        return (
            <div className='spacing container' id='projects'>
                <h1>My Projects</h1>
                <AppBar position="static" color="default">
                    <Tabs
                        value={tabValue}
                        onChange={this.handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                    >
                        {this.getProjectTabs()}
                    </Tabs>
                </AppBar>
                {this.getProjectContent()}
            </div>
        );
    }
}


export default Projects;