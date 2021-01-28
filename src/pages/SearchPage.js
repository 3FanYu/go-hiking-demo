import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,BottomNavigationAction,CardActionArea} from "@material-ui/core";
import SearchBar from "../components/SearchBar/SearchBar";

import mapple from "../asset/img/icon-mapple.png";
import chellenge from "../asset/img/icon-chellenge.png"
import hotSpring from "../asset/img/icon-hot-spring.png";
import family from "../asset/img/icon-family.png";
import forest from "../asset/img/icon-forest.png";
import sakura from "../asset/img/icon-sakura.png";

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    title:{
        height:"56px",
        lineHeight:"56px",
        backgroundColor:"#3c5754",
    },
    titleDiv:{
        padding:"0 5%",
        color:"white",
        fontFamily:"PingFangTC",
        fontSize:"18px"
    },
    searchSetting:{
        padding:"0 5%",
    },
    quitSearch:{
        fontFamily:"NotoSansCJKtc",
        width:"100%",
        textAlign:"left",
        lineHeight:"56px",
    },
    quickSearchDiv:{
        fontFamily:"NotoSansCJKtc",
        width:"100%",
        backgroundColor:"#ffecdc",
        position:"relative",
        height:"72px",
    },
    iconImg:{
        position:"absolute",
        right:0,
        bottom:-10,
    },
    span:{
        position:"absolute",
        top:20,
        left:20,

    },
    footer:{
        boxShadow:" 0 0 3px 0 rgba(0, 0, 0, 0.2)",
        position:"fixed",
        bottom:0,
        left:0,
        width:"100%",
        fontFamily:"NotoSansCJKtc",
    },
  }));

function SearchPage(){
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.title}>
                <div className={classes.titleDiv}>
                    步道搜尋
                </div>
            </div>
            <div className={classes.searchSetting}>
                <SearchBar/>
                <div className={classes.quitSearch}>
                    快速搜尋
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CardActionArea>
                        <div className={classes.quickSearchDiv}>
                            <span className={classes.span}>賞楓</span>
                            <img src={mapple} className={classes.iconImg} alt="mapple.png"></img>
                        </div>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={6}>
                        <CardActionArea>
                        <div className={classes.quickSearchDiv}>
                            <span className={classes.span}>挑戰</span>
                            <img src={chellenge} className={classes.iconImg}alt="chellenge.png"></img>
                        </div>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={6}>
                        <CardActionArea>
                        <div className={classes.quickSearchDiv}>
                            <span className={classes.span}>溫泉</span>
                            <img src={hotSpring} className={classes.iconImg} heigh="400" alt="hotSpring.png"></img>
                        </div>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={6}>
                        <CardActionArea>
                        <div className={classes.quickSearchDiv}>
                            <span className={classes.span}>親子</span>
                            <img src={family} className={classes.iconImg} heigh="400" alt="family.png"></img>
                        </div>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={6}>
                        <CardActionArea>
                        <div className={classes.quickSearchDiv}>
                            <span className={classes.span}>秘境</span>
                            <img src={forest} className={classes.iconImg} heigh="400" alt="forest.png"></img>
                        </div>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={6}>
                        <CardActionArea>
                        <div className={classes.quickSearchDiv}>
                            <span className={classes.span}>賞櫻</span>
                            <img src={sakura} className={classes.iconImg} heigh="400" alt="sakura.png"></img>
                        </div>
                        </CardActionArea>
                    </Grid>
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
        </Fragment>
    )
}

export default SearchPage;