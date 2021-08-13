import './App.css';
import React, {Suspense, lazy} from 'react';
// import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";
// import Body from "./Components/Body";

import {makeStyles} from "@material-ui/core/styles";
// import styles from "../css/Body";
import {useEffect, useState} from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {appTheme} from "./css/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import {CircularProgress} from "@material-ui/core";

const Body = lazy(() => import("./Components/Body"));
const NavBar = lazy(() => import("./Components/NavBar"));
const Footer = lazy(() => import("./Components/Footer"));

// const useStyles = makeStyles(styles);
function App() {

    // const classes = useStyles();
    const [lightMode, setLightMode] = useState(() => {
        const mode = window.localStorage.getItem("displayModeVJ");
        return mode !== null
            ? JSON.parse(mode)
            : true;
    })
    const theme = appTheme(lightMode);
    useEffect(() => {
        window.localStorage.setItem("displayModeVJ", JSON.stringify(lightMode));
    }, [lightMode]);
    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={<CircularProgress color="secondary"/>}>
                <CssBaseline/>
                <NavBar setLightMode={setLightMode} lightMode={lightMode}/>
                <Body/>
                <Footer/>
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
