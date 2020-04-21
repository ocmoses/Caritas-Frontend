import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100% !important",
    padding: 16,
    color: "white",
  },
}));

const MyButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={
        <img
          src="/assets/images/progress.gif"
          alt=""
          style={{
            height: "30px",
            display: props.progress ? "inline-block" : "none",
          }}
        />
      }
      onClick={props.onClick}
      margin={props.margin}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
