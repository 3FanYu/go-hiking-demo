import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    title:{
        height:"56px",
        lineHeight:"56px",
        backgroundColor:"#3c5754",
    },
    titleDiv:{
        padding:"0 5%",
        color:"white",
        fontFamily:"PingFangTC",
        fontSize:"18px"
    },
}));
export default function TitleBar(props) {
    const classes = useStyles();
    return(
        <div className={classes.title}>
            <div className={classes.titleDiv}>
                {props.title}
            </div>
        </div>
    );
}