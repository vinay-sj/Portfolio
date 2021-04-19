import {createMuiTheme} from "@material-ui/core/styles";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({})
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
        // typography: {
        //     fontSize: 13.5,
        //     h1: {
        //         fontWeight: 500,
        //         [breakpoints.up("xs")]: {
        //             fontSize: "3rem",
        //         }, [breakpoints.up("sm")]: {
        //             fontSize: "4rem",
        //         },
        //         [breakpoints.up("md")]: {
        //             fontSize: "5rem",
        //         },
        //         [breakpoints.up("lg")]: {
        //             fontSize: "6rem",
        //         }, [breakpoints.up("xl")]: {
        //             fontSize: "7rem",
        //         }
        //     },
        //     h2: {
        //         [breakpoints.up("xs")]: {
        //             fontSize: "2rem",
        //         }, [breakpoints.up("sm")]: {
        //             fontSize: "2rem",
        //         },
        //         [breakpoints.up("md")]: {
        //             fontSize: "3rem",
        //         },
        //         [breakpoints.up("lg")]: {
        //             fontSize: "4rem",
        //         }, [breakpoints.up("xl")]: {
        //             fontSize: "5rem",
        //         }
        //     },
        //     h3: {
        //         [breakpoints.up("xs")]: {
        //             fontSize: "1.5rem",
        //         }, [breakpoints.up("sm")]: {
        //             fontSize: "1.5rem",
        //         },
        //         [breakpoints.up("md")]: {
        //             fontSize: "2.5rem",
        //         },
        //         [breakpoints.up("lg")]: {
        //             fontSize: "3.5rem",
        //         }, [breakpoints.up("xl")]: {
        //             fontSize: "4.5rem",
        //         }
        //     },
        //     h4: {
        //         [breakpoints.up("xs")]: {
        //             fontSize: "1.3rem",
        //         }, [breakpoints.up("sm")]: {
        //             fontSize: "1.4rem",
        //         },
        //         [breakpoints.up("md")]: {
        //             fontSize: "1.5rem",
        //         },
        //         [breakpoints.up("lg")]: {
        //             fontSize: "2.5rem",
        //         }, [breakpoints.up("xl")]: {
        //             fontSize: "2.5rem",
        //         }
        //     }
        // }
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
                    main: 'rgb(0,219,255)',
                },
                iconColor: {
                    main: "#000"
                },
                background: {
                    default: "#f8f8ff",
                    paper: "#f8f8ff"
                },
                action: {
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
                iconColor: {
                    main: "#fff"
                },
                background: {
                    default: "#000",
                    paper: "#000"
                },
                action: {
                    hover: 'rgb(0,219,255)'
                },
            }
        })
    }
}
export {appTheme};