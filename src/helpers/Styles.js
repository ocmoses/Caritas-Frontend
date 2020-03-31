import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  fancyShape: {
    borderRadius: "32px 0px 0px 0px",
    backgroundColor: Colors.appRed,
    color: "white",
    padding: "8px 24px",
    textTransform: "none"
  },
  main: {
    width: "100%",
    paddingTop: 200,
    backgroundColor: Colors.appBackground
  },

  subscribe: {
    width: "75%",
    minWidth: "300px",
    height: 50,
    boxSizing: "border-box",
    padding: 16,
    border: "none",
    borderRadius: "5px 0px 0px 5px",
    boxShadow: "2px 2px 8px rgba(0,0,0,.3)",
    "&:focus": {
      outline: "none"
    }
  },

  subscribeButton: {
    width: "25%",
    height: 52,
    boxSizing: "border-box",
    padding: 16,
    backgroundColor: Colors.appRed,
    color: "white",
    border: "none",
    borderRadius: "0px 5px 5px 0px",
    boxShadow: "2px 2px 5px rgba(0,0,0,.3)"
  },
  subscribeButton2: {
    width: "25%",
    height: 52,
    boxSizing: "border-box",
    padding: 16,
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "0px 5px 5px 0px",
    boxShadow: "2px 2px 5px rgba(0,0,0,.3)"
  },

  heroImage: {
    width: "100%",
    display: "block"
  },

  aboutImage: {
    position: "absolute",
    zIndex: 1000,
    top: "-80px",
    left: 0,
    width: "450px"
  },

  header: {
    width: "100%",
    paddingTop: 50,
    backgroundImage:
      "url('/assets/images/shapes/shape1.png'), url('/assets/images/shapes/shape2.png')",
    backgroundPosition: "right top, 60% bottom",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "200px 200px, 200px 200px"
  },

  sectionTitle: {
    color: Colors.appRed,
    marginBottom: 32,
    fontWeight: "bold"
  },

  about: {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "white",
    padding: "32px 32px 0px 32px",
    display: "inline-block"
  },

  aboutText: {
    marginLeft: "500px",
    padding: "50px 50px 0px 0px",
    marginBottom: "50px"
  },

  aboutFooter: {
    marginLeft: "300px",
    padding: "80px 50px 80px 150px",
    boxSizing: "border-box",
    borderRadius: "50px 50px 0px 0px",
    backgroundColor: Colors.appRed,
    display: "flex",
    marginBottom: "-30px"
  },

  corona: {
    paddingTop: "150px",
    width: "100%",
    backgroundImage:
      "url('/assets/images/corona-background1.png'), url('/assets/images/corona-background2.png')",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "left 480px, right 520px",
    backgroundSize: "250px, 250px"
  },

  howItWorks: {
    width: "100%",
    padding: "100px 0px",
    backgroundColor: "white"
  },

  stories: {
    padding: "100px 0px"
  },

  subscribeArea: {
    backgroundColor: Colors.appRed,
    width: "600px",
    padding: "50px 30px",
    margin: "auto",
    position: "relative"
  },
  aboutHeader: {
    width: "100%",
    height: "600px",
    backgroundImage:
      "url('/assets/images/corona-background1.png'), url('/assets/images/corona-background2.png'), url('/assets/images/corona-people.png')",
    backgroundPosition: "left 250px, right top, center 100px",
    backgroundRepeat: "no-repeat, no-repeat, no-repeat",
    backgroundSize: "350px 400px, 500px 600px, 450px 500px"
  }
}));

const FancyShape = props => {
  const classes = useStyles();
  return <span className={classes.fancyShape}>{props.children}</span>;
};

const FancyButton = props => {
  const classes = useStyles();
  return <Button className={classes.fancyShape}>{props.label}</Button>;
};

export { FancyShape, FancyButton, useStyles };
