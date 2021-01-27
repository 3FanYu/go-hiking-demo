import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton,
  GridList,
  Divider,
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
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
const image =
  "https://scontent.frmq2-2.fna.fbcdn.net/v/t1.15752-9/141023215_852309418901747_4316212907466953615_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=fcIbEFbFL64AX_A_9fU&_nc_ht=scontent.frmq2-2.fna&oh=b2c6910b833e54677da0607b416f38bb&oe=6035606F";
const tileData = [
  {
    img: image,
    title: "巴陵古道",
    location: "桃園市復興區",
    distance: 1500,
  },
  {
    img: image,
    title: "巴陵古道",
    location: "桃園市復興區",
    distance: 1500,
  },
  {
    img: image,
    title: "巴陵古道",
    location: "桃園市復興區",
    distance: 1500,
  },
  {
    img: image,
    title: "巴陵古道",
    location: "桃園市復興區",
    distance: 1500,
  },
];

export default function TrailList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={72} cols={1}>
        {tileData.map((tile) => (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.gridCell}
          >
            <Grid item xs="4">
              <img src={tile.img} alt={tile.title} className={classes.thumb} />
            </Grid>
            <Grid item xs="8" container direction="column">
              <Grid item xs="12" className={classes.title}>
                {tile.title}
              </Grid>
              <Grid item xs="12" className={classes.location}>
                {tile.location}
              </Grid>
              <Grid item xs="12" className={classes.distance}>
                全程約{tile.distance}公里
              </Grid>
              <Grid item xs="12">
                <Divider></Divider>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </GridList>
    </div>
  );
}
