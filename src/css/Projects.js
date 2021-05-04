const styles = (theme) => ({
    section: {
        ...theme.space.sectionSpace,
        ...theme.alignment.horizontalCenter,
        ...theme.sectionHeading
    },
    verticalCenter: theme.alignment.verticalMarginCenter,
    tabRoot: {
        color: theme.palette.primary.main,
    }
})

export default styles;