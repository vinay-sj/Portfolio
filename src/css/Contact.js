const styles = (theme) => ({
    section: {
        ...theme.space.sectionSpace,
        ...theme.alignment.horizontalCenter
    },
    verticalCenter: theme.alignment.verticalMarginCenter,

    iconGithub: {
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        fontSize: "30px",
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
            ...theme.actions.scale,
        },
        ...theme.style.rmOutline,
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
        top: "1px"
    }
})

export default styles;