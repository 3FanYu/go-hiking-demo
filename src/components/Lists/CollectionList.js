import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid,CardActionArea } from "@material-ui/core";
import { Link} from 'react-router-dom';
import mapple from "../../asset/img/icon-mapple.png";
import chellenge from "../../asset/img/icon-chellenge.png"
import hotSpring from "../../asset/img/icon-hot-spring.png";
import family from "../../asset/img/icon-family.png";
import forest from "../../asset/img/icon-forest.png";
import sakura from "../../asset/img/icon-sakura.png";

const useStyles = makeStyles((theme) => ({
    linkstlye:{
        color:"#000",textDecoration: 'none'
    },
    quitSearchText:{
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
}));

const obj={
    'mapple.png':mapple,
    'chellenge.png':chellenge,
    'hotSpring.png':hotSpring,
    'family.png':family,
    'forest.png':forest,
    'sakura.png':sakura,
}

const CollectionList=(props)=>{
    const classes = useStyles();
    //api回傳資料
    const data = props.data;
    return(
        data.map((collection)=>(
            <Grid item xs={6} key={collection.id}>

                <Link  to={`/SearchQuick/${collection.id }`} 

                    className={classes.linkstlye} >
                    <CardActionArea>
                        <div className={classes.quickSearchDiv}>
                            <span className={classes.span}>{collection.name}</span>
                            <img src={obj[collection.iconImage]} className={classes.iconImg} alt={collection.iconImg}></img>
                        </div>
                    </CardActionArea>
                </Link>
            </Grid>
        ))
    )
};

export default CollectionList;