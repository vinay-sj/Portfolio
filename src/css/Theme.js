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
                    main: '#E50000'
                        // 'rgb(0,219,255)',
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
            // shadows:[
            //     "none",
            //     "0px 2px 1px -1px rgba(255,255,255,0.2),0px 1px 1px 0px rgba(255,255,255,0.14),0px 1px 3px 0px rgba(255,255,255,0.12)",
            //     "0px 3px 1px -2px rgba(255,255,255,0.2),0px 2px 2px 0px rgba(255,255,255,0.14),0px 1px 5px 0px rgba(255,255,255,0.12)",
            //     "0px 3px 3px -2px rgba(255, 255, 255,0.2),0px 3px 4px 0px rgba(255, 255, 255,0.14),0px 1px 8px 0px rgba(255, 255, 255,0.12)",
            //     "0px 2px 4px -1px rgba(255, 255, 255, 0.2),0px 4px 5px 0px rgba(255, 255, 255,0.14),0px 1px 10px 0px rgba(255, 255, 255,0.12)",
            //     "0px 3px 5px -1px rgba(255, 255, 255,0.2),0px 5px 8px 0px rgba(255, 255, 255,0.14),0px 1px 14px 0px rgba(255, 255, 255,0.12)",
            //     "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
            //     "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
            //     "0px 5px 5px -3px rgba(255,255,255,0.2),0px 8px 10px 1px rgba(255,255,255,0.14),0px 3px 14px 2px rgba(255,255,255,0.12)",
            //     "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
            //     "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
            //     "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
            //     "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
            //     "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
            //     "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
            //     "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
            //     "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
            //     "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
            //     "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
            //     "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
            //     "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
            //     "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
            //     "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
            //     "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
            //     "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
            // ],



        })
    }
}
export {appTheme};