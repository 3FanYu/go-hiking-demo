
import React, { Fragment } from "react";
import heart from "../asset/img/icon-heart-broken@3x.png";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "../App.css";
import { Grid, Box, createMuiTheme } from "@material-ui/core";
import TrailList from "../components/Lists/TrailList";
import TitleBar from "../components/TopBar/TitleBar";

import TextField from '@material-ui/core/TextField';
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({

    text:{
      fontFamily:"NotoSansCJKtc",
      width:"295px",
      height:"48px",
      lineheight:"1.5",

      fontSize:"16px",

      textAlign:"center",

     
   },
  button:{

    backgroundColor: "#00d04c",
    width:"100%",

    fontSize:"16px",
    borderradius:"4px",
    height: "48px;",

  
    color:"white",

  },
  iconImg:{
    heigh:"112", 
    width:"112",
    
    objectfit:"contain",

    display:"block",
    margin:"auto",

  },
img:{
    display:"flex",
    justifyContent:"center",
  },
}));




function Searc() {
  
  const classes = useStyles(); 

  return(
    
    <Fragment>
      
      <TitleBar title="我的收藏"/>
    
      <div className={classes.a}>
      <div className={classes.img}>
      <img src={heart} className={classes.iconImg}  alt="hotSpring.png"></img>
      </div>
          <div className={classes.text}>
            必須先登入可以收藏並查看喜愛步道
          </div>

     
  
         
         <Button variant="contained"  href="#contained-buttons" className={classes.button}>
            登入
        </Button>
         
      
          </div> 

  </Fragment>
  );
  
}
export default Searc;