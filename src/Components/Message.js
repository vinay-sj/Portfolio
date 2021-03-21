import React from "react";
import './../css/Message.css'
import EmailIcon from '@material-ui/icons/Email';
import {Box, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mailMe: {
        color: theme.palette.primary,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        '&:focus': {
            outline: "none"
        },
    }
}));

function Message(props) {
    const classes = useStyles();
    return (
        <div>
            <Button href="mailto:srampickaljoseph.v@northeastern.edu" className={classes.mailMe}>
                <Box mr={0.5}><EmailIcon style={{"fontSize": "37px"}} className='message-icon '/></Box>
                {props.message}
            </Button>
        </div>
    );
}

export default Message;