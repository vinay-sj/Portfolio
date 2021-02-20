import React, {useEffect, useState} from "react";
import {Tabs, Tab} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import {GetProjectImage} from "./ImageLoader"
import TabPanel from "./TabPanel";
import ProjectContent from "./ProjectContent";
import json from "../files/json/projects.json";
import './../css/Project.css';

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
                {ProjectContent(projectData.name, GetProjectImage[projectData.image], projectData.githubLink, projectData.websiteLink,
                    projectData.body, projectData.imagePosition)}
            </TabPanel>
        })
    }

    return (
        <div className='spacing container' id='projects'>
            <h1>My Projects</h1>
            <AppBar position="static" color={"transparent"}>
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