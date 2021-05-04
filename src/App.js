import './App.css';

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import {useEffect, useState} from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {appTheme} from "./css/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
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
            <CssBaseline/>
            <NavBar setLightMode={setLightMode} lightMode={lightMode}/>
            <Body/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
