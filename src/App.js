import './App.css';

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import {useState, useMemo} from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {appTheme} from "./css/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    const [lightMode, setLightMode] = useState(false);
    const theme = appTheme(lightMode);

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
