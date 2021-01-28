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

const TrailList = (props) => {
  const classes = useStyles();
  const data = [props];
  return (
    <div className={classes.root}>
      <GridList cellHeight={72} cols={1}>
        {data.map((trail) => (
          <Grid
            key={1}
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.gridCell}
            item
            xs={12}
          >
            <Grid item xs={4}>
              <img
                src={trail.data.coverImage}
                alt={trail.data.title}
                className={classes.thumb}
              />
            </Grid>
            <Grid
              item
              xs={8}
              container
              direction="column"
              alignItems="flex-start"
            >
              <Grid item xs={12} className={classes.title}>
                {trail.data.title}
              </Grid>
              <Grid item xs={12} className={classes.location}>
                {trail.data.location}
              </Grid>
              <Grid item xs={12} className={classes.distance}>
                全程約{trail.data.distance}公里
              </Grid>
              <Grid item xs={12}>
                <Divider></Divider>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </GridList>
    </div>
  );
};
export default TrailList;
