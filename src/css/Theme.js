import {createMuiTheme} from "@material-ui/core/styles";

const appTheme = (lightMode) => {
    const options={
// spacing: 8,
    }

    if (lightMode) {
        return createMuiTheme({...options,
            palette: {
                type: 'light',
                primary: {
                    main: "#000",
                },
                secondary: {
                    main: 'rgb(0,219,255)',
                },
                background: {
                    default: "#f8f8ff",
                    paper: "#f8f8ff"
                },
                action:{
                    hover: 'rgb(0,219,255)'
                },


            }
        })
    } else {
        return createMuiTheme({
            ...options,
            palette: {
                type: 'dark',
                primary: {
                    main: "#f8f8ff",
                },
                secondary: {
                    main: 'rgb(0,219,255)',
                },
                background: {
                    default: "#000",
                    paper: "#000"
                },
                action:{
                    hover: 'rgb(0,219,255)'
                },
            },
        })
    }
}
export {appTheme};