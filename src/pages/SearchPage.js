import React, { Fragment,useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,BottomNavigationAction } from "@material-ui/core";
import SearchBar from "../components/SearchBar/SearchBar";
import TitleBar from "../components/TopBar/TitleBar";
import axios from "axios";
import CollectionList from '../components/Lists/CollectionList';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    searchSetting:{
        padding:"0 5%",
    },
    quitSearchText:{
        fontFamily:"NotoSansCJKtc",
        width:"100%",
        textAlign:"left",
        lineHeight:"56px",
    },
    footer:{
        boxShadow:" 0 0 3px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor:"white",
        position:"fixed",
        bottom:0,
        left:0,
        width:"100%",
        fontFamily:"NotoSansCJKtc",
    },
  }));

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "X-Secure-Code": "12345678",
    },
});

function SearchPage(){
    const classes = useStyles();
    const [searchResult, setSearchResult] = useState([]);
    const collectionData =async()=>{
        const Data =await api.get("api/collection");
        setSearchResult(Data.data);
    };
    useEffect(()=>{
        collectionData();
    },[]);

    return(
        <>
            <TitleBar  title="步道搜尋"/>
            <div className={classes.searchSetting}>
                <SearchBar />
                <div className={classes.quitSearchText}>快速搜尋</div>
                <Grid container spacing={2}>
                    <CollectionList data={searchResult}></CollectionList>
                </Grid>
            </div>
            <div className={classes.footer}>
                <Grid container>
                    <Grid item xs={3}>
                        <div className={classes.bottomNav}>
                            <div>
                                <BottomNavigationAction 
                                label="首頁" 
                                showLabel 
                                icon={<HomeIcon />} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.bottomNav}>
                            <div>
                                <BottomNavigationAction 
                                label="步道搜尋" 
                                showLabel 
                                icon={<SearchIcon />} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.bottomNav}>
                            <div>
                                <BottomNavigationAction 
                                label="附近步道" 
                                showLabel 
                                icon={<LocationSearchingIcon />} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.bottomNav}>
                            <div>
                                <BottomNavigationAction 
                                label="我的最愛" 
                                showLabel 
                                icon={<FavoriteIcon />} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SearchPage;