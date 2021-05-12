import React, {useState} from "react";
import {Tab, Tabs} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import {GetProjectImage} from "./ImageLoader"
import TabPanel from "./TabPanel";
import ProjectContent from "./ProjectContent";
import json from "../files/json/projects.json";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../css/Projects";

const useStyles = makeStyles(styles);

function Projects() {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const projects = JSON.parse(JSON.stringify(json));
    let projectKeys = Object.keys(projects);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }
    const getProjectTabs = () => {
        return projectKeys.map((projectKey, id) => <Tab key={id} label={projectKey} {...a11yProps(id)}
                                                        classes={{
                                                            selected: classes.selectedTab,
                                                            root: classes.tabRoot
                                                        }}/>)
    }
    const getProjectContent = () => {
        return projectKeys.map((projectKey, id) => {
            const projectData = projects[projectKey];

            return <TabPanel key={id} value={tabValue} index={id}>
                {ProjectContent(projectData.name, GetProjectImage[projectData.image], projectData.githubLink, projectData.websiteLink,
                    projectData.body, projectData.imagePosition, projectData.protected)}
            </TabPanel>
        })
    }

    return (
        <div className={classes.section} id='projects'>
            <Typography variant="h2" gutterBottom align="center">
                My Projects
            </Typography>
            <AppBar position="static" color={"transparent"}>
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable project tabs"
                    textColor="secondary"
                    indicatorColor="secondary"
                    classes={{root: classes.tabRoot}}
                >
                    {getProjectTabs()}
                </Tabs>
            </AppBar>
            {getProjectContent()}
        </div>
    );
}

export default Projects;