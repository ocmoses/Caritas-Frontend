import React from "react";
import clsx from "clsx";
import { Paper, Slider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    width: "250px",
    height: "90%",
    alignItems: "center",
    // boxShadow: "2px 2px 5px rgba(0,0,0,.2) !important",
    padding: "20px",
    marginTop: 15,
    marginBottom: "5%",
    marginLeft: "5%",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 0px 5px 5px rgba(255,0,0,.2)",
      "& > div:first-child": {
        boxShadow: "0px 0px 5px 5px rgba(255,0,0,.2)",
      },
    },
  },
  addButton: {
    width: "40px !important",
    height: "40px !important",
    borderRadius: "20px",
    color: Colors.appRed,
    boxShadow: "2px 2px 5px rgba(0,0,0,.2)",
    fontSize: "20px",
    fontWeight: "bold",
    boxSizing: "border-box",
    flex: 0.18,
    textAlign: "center",
    cursor: "pointer",
    "&$p": {
      lineHeight: "100%",
    },
    "&:hover": {
      boxShadow: "0px 0px 5px 5px rgba(255,0,0,.2)",
    },
    paddingTop: "5px",
  },
  label: {
    marginLeft: "30px",
    flex: 0.8,
    "&$p": {
      fontSize: "10px",
    },
  },
}));

const AddItem = (props) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.paper}
      elevation={4}
      onClick={() => (window.location = "/dashboard/create-cause")}
    >
      <div className={classes.addButton}>+</div>
      <div className={classes.label}>
        <p>{props.label}</p>
      </div>
    </Paper>
  );
};

export default AddItem;
