import { Grid } from "@material-ui/core";
//import { Grid, Box, createMuiTheme } from "@material-ui/core";
import { Link} from 'react-router-dom';
import React from "react";
import "../App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import BackArrow from "../components/TopBar/BackArrow";
import FilterIcon from "../components/SearchBar/FilterIcon";
import TrailList from "../components/Lists/TrailList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "16px",
  },
}));

function SearchResult(props) {
  const classes = useStyles();
  //const Name="1";
  console.log(props.location.aboutProps);//SearchBar的aboutProps
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        <Grid item xs="12">
          <Link to="/">
            <BackArrow />
          </Link>
        </Grid>
        <Grid
          item
          xs="12"
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs="10">
            <SearchBar/>
          </Grid>
          <Grid item xs="2">
            <FilterIcon />
          </Grid>
        </Grid>

        <Grid item xs="12">
          <div className={classes.text}>搜尋結果</div>
        </Grid>
        <Grid item xs="12">
          <TrailList></TrailList>
        </Grid>
      </Grid>
    </div>
  );
}
export default SearchResult;
