const styles = (theme) => ({
    mailMe: {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        ...theme.style.rmOutline,
    }
})
export default styles;