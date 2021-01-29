import { Grid, Box, createMuiTheme } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import BackArrow from "../components/TopBar/BackArrow";
import FilterIcon from "../components/SearchBar/FilterIcon";
import TrailList from "../components/Lists/TrailList";
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "X-Secure-Code": "12345678",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "16px",
  },
}));

function SearchResult() {
  const classes = useStyles();
  //搜尋結果hook
  const [searchResult, setSearchResult] = useState([]);
  //搜尋function
  const searchApi = (kw) => {
    axios.get("/trail/1").then((res) => {
      console.log(res);
      setSearchResult(res);
    });
  };
  //useEffect
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        <Grid item xs={12}>
          <BackArrow />
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={11}>
            {/* 搜尋欄component */}
            <SearchBar searchApi={searchApi} />
          </Grid>
          <Grid item xs={1}>
            <FilterIcon />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.text}>搜尋結果</div>
        </Grid>
        <Grid item xs={12} container direction="row">
          {/* 步道list component */}
          <TrailList data={searchResult}></TrailList>
        </Grid>
      </Grid>
    </div>
  );
}
export default SearchResult;
