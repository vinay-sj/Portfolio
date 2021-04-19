const styles = (theme) => ({
    section: {
        ...theme.space.sectionSpace,
        ...theme.sectionHeading
    },
    aboutMe: {
        color: theme.palette.primary.main,
    },
    headingSpace: theme.space.headingSpace,
    item1: {
        order: 2,
        [theme.breakpoints.up('md')]: {
            order: 1,
        },
    },
    item2: {
        order: 1,
        width: "100%",
        height: "100%",
        ...theme.alignment.horizontalCenter,
        ...theme.alignment.verticalMarginCenter,
        [theme.breakpoints.up('md')]: {
            order: 2,
        },
    },
    photo: {
        height: "200px",
        "margin-top": "20px",
        'margin-bottom': "20px",
        [theme.breakpoints.down('sm')]: {
            height: "300px"
        },
        [theme.breakpoints.only('md')]: {
            height: "200px"
        },
        [theme.breakpoints.only('lg')]: {
            height: "300px"
        },
        [theme.breakpoints.up('xl')]: {
            height: "350px"
        },
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        '&:hover': {
            ...theme.actions.scale,
        }
    }
})

export default styles;