const styles = (theme) => ({
    logo: {
        marginRight: theme.spacing(2),
        height: '50px',
        border: 'solid 3px',
        "border-color": theme.palette.secondary.main,
        "border-radius": "0px",
        padding: '0px',
        "min-width": '50px',
        width: '50px',
        ...theme.style.rmOutline,
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        '& svg': {
            transition: theme.transitions.create(["transform"], {
                duration: theme.transitions.duration.standard
            }),
            '&:hover': {
                ...theme.actions.rotate,
            }
        },
        '&:hover': {
            ...theme.actions.scale,
        },
        fill: theme.palette.secondary.main  ,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    navButtons: {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        ...theme.style.rmOutline,

    },
    menuButtons: {
        "justify-content": "center",
        margin: "auto",
        color: theme.palette.primary,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        ...theme.style.rmOutline,
    },
    logoColor:{

        fill: theme.palette.secondary.main  ,
    }
})
export default styles;