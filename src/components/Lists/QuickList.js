import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, GridList, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  thumb: {
    width: 104,
    height: 72,
  },
  gridCell: {
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  location: {
    fontSize: 14,
    color: "#979797",
  },
  distance: {
    fontSize: 12,
    color: "#979797",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const QuickList = (props) => {
  const classes = useStyles();
  //api回傳資料
  const data = props.data;
  console.log(data);
  return (
      <div className={classes.root}>
      <GridList cellHeight={72} cols={1}>
      {data.map(() => (
      <span>hello word</span>
      ))}
      </GridList>

    </div>
     
  );
};
export default QuickList;