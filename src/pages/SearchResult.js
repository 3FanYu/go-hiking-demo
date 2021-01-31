import { Grid, Box, createMuiTheme } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import BackArrow from "../components/TopBar/BackArrow";
import TrailList from "../components/Lists/TrailList";
import axios from "axios";
import TemporaryDrawer from "../components/SideBar/Sidebar";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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
    api.get("/trail?filters=title:"+kw).then((res) => {
      setSearchResult(res.data);
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
            {/* 名彥大哥的超猛篩選器 */}
            <TemporaryDrawer></TemporaryDrawer>
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
