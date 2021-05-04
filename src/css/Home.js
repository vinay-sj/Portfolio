const styles = (theme) => ({
    hi: {
        color: theme.palette.secondary.main,
    },
    name: {
        color: theme.palette.primary,
    },
    role: {
        color: theme.palette.primary,
    },
    description: {
        color: theme.palette.primary,
    },
    section: {
        ...theme.space.sectionSpace,
        textAlign: "left",
        ...theme.sectionHeading
    }
})

export default styles;