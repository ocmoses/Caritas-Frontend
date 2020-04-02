import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";

const useStyles = makeStyles(theme => ({
  item: {
    width: "250px",
    height: "160px",
    display: "inline-flex",
    flexDirection: "column",
    borderRadius: "10px",
    cursor: "pointer",
    marginRight: "20px",

    "& img": {
      height: "60px",
      display: "block",
      marginLeft: "auto",
      marginTop: "50px",
      marginRight: "auto"
    },
    "&:hover": {
      //   boxShadow: "0px 0px 10px 15px rgba(255, 0, 0, .9) !important",
      backgroundColor: Colors.appRed,
      "& p": {
        color: "white"
      }
    }
  },
  title: {
    fontSize: "10px",
    textAlign: "center",
    marginTop: "0px",
    color: Colors.appRed
  },
  text: {
    fontSize: "10px",
    textAlign: "center",
    marginTop: "0px"
  }
}));

const AddImage = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.item}>
      <img src={props.image} alt="" />
      <p className={classes.title}>{props.title}</p>
      <p className={classes.text}>{props.text}</p>
    </Paper>
  );
};

export default AddImage;
