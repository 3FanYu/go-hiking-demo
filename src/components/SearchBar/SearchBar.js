import React,{useState} from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    margin: 0,
  },
  textField: {
    backgroundColor: "#e5e5ea",
    width: "100%",
  },
  searchIcon: {
    marginLeft: "16px",
    marginTop: "12px",
    marginBottom: "12px",
    marginRight: "16px",
  },
  button: {
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    marginRight: "19px",
    marginTop: "12px",
    marginBottom: "12px",
  },
}));


function SearchBar(props) {
  const classes = useStyles();
  //const { searchApi } = props;
  const[value,setValue]=useState("");
  const handleInpuChange = () => (event)=>{
    setValue(event.target.value)
  };
  return (
    <TextField
      className={classes.textField}
      placeholder="搜尋步道"
      margin={"normal"}
      size="small"
      onChange={
        // (event) => {
        // console.log(event.target.value)}
        handleInpuChange({value})
      }
      InputProps={{
        startAdornment: (
          <Link to={{
            pathname:'/searchResult',
            aboutProps:{name:value}
          }}><IconButton
          className={classes.iconButton}
          onClick={() => {
            console.log({value});
          }}
        >
          <SearchIcon className={classes.searchIcon} />
        </IconButton></Link>
          
        ),
        endAdornment: (
          <IconButton className={classes.button}>
            <MicIcon />
          </IconButton>
        ),
        disableUnderline: true,
      }}
    />
  );
}

export default SearchBar;
