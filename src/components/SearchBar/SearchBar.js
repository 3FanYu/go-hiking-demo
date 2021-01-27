import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 10,
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

function SearchBar() {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      placeholder="搜尋步道"
      margin={"normal"}
      size="small"
      InputProps={{
        startAdornment: <SearchIcon className={classes.searchIcon} />,
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
