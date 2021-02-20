import React from "react";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`project-panel-${index}`}
            aria-labelledby={`project-panel-${index}`}
            {...other}
        >
            {children}
        </div>
    );
}

export default TabPanel;