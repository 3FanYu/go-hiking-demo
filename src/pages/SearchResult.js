import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

function SearchResult(props) {
  const classes = useStyles();
  console.log(props); //印出SearchBar的aboutProps
  var kw = "";
  //判斷是否有來自於上一個頁面的kw，若沒有則從localStorage取值
  if (props.location.aboutProps !== undefined) {
    kw = props.location.aboutProps.name;
  } else {
    kw = localStorage.getItem("kw");
  }
  //搜尋結果hook
  const [searchResult, setSearchResult] = useState([]);
  //頁面一載入就發送api請求
  useEffect(() => {
    searchApi(kw);
  //載入完就清空kw，使重新載入頁面時會再發送一次apia請求
    return () => {
      kw="";
    };
  }, [kw]);
  //搜尋function
  const searchApi = async (kw) => {
    await api.get("/trail?filters=title:" + kw).then((res) => {
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
          <Link to="/">
            <BackArrow />
          </Link>
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
            <SearchBar props={(searchApi, kw)} />
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
