const styles = (theme) => ({
    section: {
        ...theme.space.sectionSpace,
        ...theme.alignment.horizontalCenter,
        ...theme.sectionHeading
    },
    verticalCenter: theme.alignment.verticalMarginCenter,
})

export default styles;