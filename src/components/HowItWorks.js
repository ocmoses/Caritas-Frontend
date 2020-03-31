import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0px !important"
  },
  item: {
    textAlign: "center",
    padding: "50px 0px !important"
  },
  image: {
    height: "60px",
    marginBottom: "10px",
    display: "block",
    margin: "auto"
  },
  step: {
    fontSize: "10px",
    color: Colors.appBlack,
    textAlign: "center"
  }
}));

const HowItWorks = props => {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <img src={props.image} alt="" className={classes.image} />
      <p className={classes.step}>{props.step}</p>
    </div>
  );
};

export default HowItWorks;
