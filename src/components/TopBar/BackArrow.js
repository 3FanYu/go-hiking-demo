import React from "react";
import "./style.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  back_arrowDiv: {
    width: "100vw",
  },
  back_arrow: {
    float: left,
    /* margin-bottom: 16px; */
  },
}));

function BackArrow() {
  return (
    <div className={classe.back_arrowDiv}>
      <ArrowBackIcon className={classes.back_arrow} />
    </div>
  );
}
export default BackArrow;
