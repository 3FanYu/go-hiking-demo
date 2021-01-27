import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  back_arrowDiv: {
    width: "100vw",
  },
  back_arrow: {
    /* margin-bottom: 16px; */
  },
}));

function BackArrow() {
  const classes = useStyles();
  return (
    <div className={classes.back_arrowDiv}>
      <ArrowBackIcon className={classes.back_arrow} />
    </div>
  );
}
export default BackArrow;
