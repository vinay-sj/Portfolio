const styles = (theme) => ({
    footer: {
        fontSize: "12px",
        fontFamily: "Calibri",
    },
    sectionSpace: {...theme.space.sectionSpace, paddingBottom: "20px"},
    iconColor: {
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        fontSize: "30px",
        color: theme.palette.iconColor.main,
        '&:hover': {
            color: theme.palette.secondary.main,
            ...theme.actions.scale,
        },
        ...theme.style.rmOutline,
    },
    alignCenter: theme.alignment.horizontalCenter,
})

export default styles;