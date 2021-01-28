import React from "react";
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

const handleInpuChange = () => {};

function SearchBar(props) {
  const classes = useStyles();
  const { searchApi } = props;
  return (
    <TextField
      className={classes.textField}
      placeholder="搜尋步道"
      margin={"normal"}
      size="small"
      onChange={(event) => {
        searchApi(event.target.value);
      }}
      InputProps={{
        startAdornment: (
          <IconButton
            className={classes.iconButton}
            onClick={() => {
              console.log("clicked");
            }}
          >
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
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
