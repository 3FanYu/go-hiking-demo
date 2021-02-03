
import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const useStyles = makeStyles((theme) => ({

   
   
  footer:{
    boxShadow:" 0 0 3px 0 rgba(0, 0, 0, 0.2)",
    backgroundColor:"white",
    position:"fixed",
    bottom:0,
    left:0,
    width:"100%",
   
    fontFamily:"NotoSansCJKtc",
  },

   bottomhover:"color:#00d04c",
}));





function Navigation() {
  
  const classes = useStyles(); 
  const [value, setValue] = React.useState(0);

  return(
    
    <Fragment>
      
     

    <div className={classes.bottom}>    
    <BottomNavigation
     value={value} 
     onChange={(event, newValue) => {
        setValue(newValue);
      }}
     showLabels
     className={classes.footer}
     >
     
      <BottomNavigationAction label="首頁" icon={<HomeIcon />} />
      <BottomNavigationAction label="步道搜尋" icon={<SearchIcon />} />
      <BottomNavigationAction label="附近步道"  icon={<LocationOnIcon />} />
      <BottomNavigationAction label="我的最愛"  icon={<FavoriteIcon  />} />
    
    </BottomNavigation>  
    </div>
  </Fragment>
  );
  
}
export default Navigation;