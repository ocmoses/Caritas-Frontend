import React, { useState } from "react";
import {
  Container,
  Typography,
  Slider,
  Grid,
  Tabs,
  Tab,
  Zoom,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FancyShape, useStyles } from "../../helpers";
import { Colors } from "../../constants";
import { Link } from "react-router-dom";
import { CauseItem } from "../";
import { CausesTabs } from "./";
import "../../index.css";

const moreStyles = makeStyles(theme => ({
  mainImage: {
    backgroundImage: props => `url('${props.cause.image}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "400px"
  },
  headerTitle: {
    color: Colors.appRed,
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  share: {
    height: "40px",
    marginLeft: "20px"
  }
}));

const ACauseHeader = props => {
  const classes = useStyles();
  const classes2 = moreStyles(props);

  console.log("props", props);

  return (
    <Container>
      <Grid container spacing={4} style={{ marginBottom: "100px" }}>
        <Grid item xs={12} md={6} className={classes2.mainImage}></Grid>
        <Grid item xs={12} md={6} style={{ position: "relative" }}>
          <Typography
            variant="h6"
            component="h6"
            className={classes2.headerTitle}
          >
            {props.cause.category}
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            style={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            {props.cause.title}
          </Typography>

          <Typography
            variant="body1"
            component="p"
            style={{ fontSize: "14px", marginBottom: "20px" }}
          >
            {props.cause.desc}
          </Typography>
          <div className={classes.root}>
            <Slider value={props.cause.contribution} max={props.cause.target} />
            <Grid container style={{ marginTop: "20px", width: "100%" }}>
              <Grid
                item
                xs={6}
                style={{
                  fontSize: "16px"
                }}
              >
                <Typography variant="body1" component="p">
                  {props.cause.currency}
                  {props.cause.contribution} Raised
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  fontSize: "16px"
                }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  style={{ textAlign: "right" }}
                >
                  {Math.round(
                    (props.cause.contribution * 100) / props.cause.target
                  )}
                  % of {props.cause.currency}
                  {props.cause.target}
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{ position: "absolute", bottom: "0px" }}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    color: "white",
                    marginRight: "20px",
                    borderRadius: "0px",
                    width: "120px"
                  }}
                >
                  Donate
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    borderColor: "black",
                    width: "120px",
                    borderRadius: "0px"
                  }}
                >
                  Watch
                </Button>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <img
                  src="/assets/images/icons/facebook-red.png"
                  alt=""
                  className={classes2.share}
                />
                <img
                  src="/assets/images/icons/twitter-red.png"
                  alt=""
                  className={classes2.share}
                />
                <img
                  src="/assets/images/icons/link-red.png"
                  alt=""
                  className={classes2.share}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ACauseHeader;
