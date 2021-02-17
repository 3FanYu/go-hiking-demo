import React, { Fragment,useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid} from "@material-ui/core";
import getty from "../asset/img/gettyimages-1197938495-2048x2048.jpg";
import favorite from "../asset/img/material-icons-black-favorite.png";
import axios from "axios";
import TrailList from "../components/Lists/TrailList";
import BackArrow from "../components/TopBar/BackArrow";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    bar:{
        height:"56px",
        backgroundColor:"transparent",

    },
    Img:{
        width:"100%",
        height:"176px",
        
   
    },
    title:{
        width: "187px",
        height: "36px",
        fontFamily:"NotoSansCJKtc",
        fontSize:"22px",
        fontWeight:"bold",
        lineHeight:"1.64",
        letterSpacing:"0.46px",
        margin:"24px 208px 16px 16px",
        color:"#232323",
    },
    text:{
        width:"100%",
        height:"84px",
        margin:"16 16",
        fontFamily:"NotoSansCJKtc",
        fontSize:"14px",
        lineHeight:"1.5",
        letterSpacing:"0.5px",
        color:"#232323",
        
    },
    background:{
        width: "100",
        height: "1px",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
        margin:"16px",
    },
    textlist:{
        width:"74px",
        height:"27px",
        margin:"22",
        fontFamily:"NotoSansCJKtc",
        fontSize:"18px",
        fontWeight:"bold",
    },
    trailList:{ 
      padding:" 5%",
    },
     arrow:{
        width:"24px",
        height:"24px",
        margin:"1px 32px 2px 0",
        objectFit:"contain",
     },
  }));

const api = axios.create({
    baseURL: "https://go-hiking-backend-laravel.herokuapp.com/",
    headers: {
      "X-Secure-Code": "12345678",
    },
});

function Column(){
    const classes = useStyles();
    const [searchResult, setSearchResult] = useState([]);
    const collectionData =async()=>{
        const Data =await api.get("api/trail?filters=title:步道");
        setSearchResult(Data.data);
    };
    useEffect(()=>{
        collectionData();
    },[]);

    return(
        <>
   
       <Grid item xs={12}> 
         
     
        <img src={getty} className={classes.Img}  ></img>
          
       </Grid>
        <Grid item xs={12}>
        <Link to="/">
            
            <BackArrow />
    
          </Link>
          <div className={classes.title}>2020跨年迎接曙光</div>
         </Grid>

        <Grid item xs={12}>
          <div className={classes.text}>
          回首2020年，疫情顛覆常日運轉的軌道，
          對不少人也許猶如世界末日的感受，
          永遠會在生命裡留下記號吧，
          日子無論或好或壞時間依然向前滾動，
          新的一年，在晨曦中迎接第一道曙光，
          作為許下祈願的儀式。
          </div>
        </Grid>
        
        <Grid item xs={12}>
            <div className={classes.background}>
                
            </div>
        </Grid>
        <Grid item xs={12} container >
        <div className={classes.textlist}>步道推薦</div>   
        <div className={classes.trailList}> 
        {/* 步道list component */}   
        <TrailList data={searchResult}></TrailList>
        </div>
       </Grid>
        </>
    )
}

export default Column;