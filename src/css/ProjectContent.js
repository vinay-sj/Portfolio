const styles = (theme) => ({
    projectImg: {
        height: "120px",
        marginTop: "20px",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            // height: "200px"
            width:"90%",
            height:"auto"
        },
        [theme.breakpoints.only('md')]: {
            height: "250px"
        },
        [theme.breakpoints.only('lg')]: {
            height: "200px"
        },
        [theme.breakpoints.up('xl')]: {
            height: "250px"
        },
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        '&:hover': {
            ...theme.actions.scale,
        }
    },
    projectContent: {
        textAlign: "left",
        justifyContent: "left"
    },
    verticalCenter: theme.alignment.verticalMarginCenter,
    iconGithub: {
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        "fontSize": "30px"
        , color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
            ...theme.actions.scale,
        },
        ...theme.style.rmOutline,
    },
    protectedGithub: { color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
       textDecoration:"none!important",

    },
    requestAccess:{
        marginLeft:"2px",
        position:"relative",
        bottom:"8px"
    },
    iconLinkedin: {
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        fontSize: "37px"
        , color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
            ...theme.actions.scale,
        },
        ...theme.style.rmOutline,
        position: "relative",
        top: "4px"
    },
    rightDescription: {
        ...theme.alignment.verticalMarginCenter,
        order: 2,
        [theme.breakpoints.up('lg')]: {
            order: 1,
        },
    },
    leftImage: {
        ...theme.alignment.horizontalMarginCenter,
        ...theme.alignment.verticalMarginCenter,
        order: 1,
        [theme.breakpoints.up('lg')]: {
            order: 2,
        },
    },
    rightImage: {
        ...theme.alignment.horizontalMarginCenter,
        ...theme.alignment.verticalMarginCenter,
    }
})

export default styles;