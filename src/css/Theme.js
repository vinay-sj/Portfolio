import {createMuiTheme} from "@material-ui/core/styles";
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

// const breakpoints = createBreakpoints({})
const appTheme = (lightMode) => {
    const options = {
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
            },
        }, alignment: {
            horizontalCenter: {
                "text-align": "center"
            },
            horizontalMarginCenter: {
                marginLeft: "auto",
                marginRight: "auto",
            },
            verticalMarginCenter: {
                marginTop: "auto",
                marginBottom: "auto",
            }
        },
        space: {
            sectionSpace: {
                marginTop: "150px"
            }, headingSpace: {
                marginTop: "20px"
            },
        },
        actions: {
            rotate: {
                "-webkit-transform": "rotate(360deg)!important",
                transform: "rotate(360deg)!important",
            },
            scale: {
                transform: "scale(1.1)"
            },
        },
        style: {
            rmOutline: {
                '&:focus': {
                    outline: "none"
                },
            }
        },
        sectionHeading: {
            '&::before': {
                display: "block",
                content: '" "',
                marginTop: "-100px",
                height: "100px",
                visibility: "hidden",
                pointerEvents: "none"
            }
        }
    }

    if (lightMode) {
        return createMuiTheme({
            ...options,
            palette: {
                type: 'light',
                primary: {
                    main: "#000",
                },
                secondary: {
                    main: '#E50000'
                },
                iconColor: {
                    main: "#000"
                },
                background: {
                    default: "#f8f8f8",
                    paper: "#f8f8f8"
                },
                action: {
                    hover: '#E50000'
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
                iconColor: {
                    main: "#fff"
                },
                background: {
                    default: "#000",
                    paper: "#121212"

                },
                action: {
                    hover: 'rgb(0,219,255)'
                },
            },
        })
    }
}
export {appTheme};