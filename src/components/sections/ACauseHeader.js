import React, { useState, useEffect } from "react";
import { Container, Typography, Slider, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FancyShape, useStyles } from "../../helpers";
import { Colors } from "../../constants";
import { Link } from "react-router-dom";
import "../../index.css";
import { baseUrl } from "../../constants";

const moreStyles = makeStyles((theme) => ({
  mainImage: {
    // backgroundImage: (cause) => {
    //   console.log("Making styles", cause);
    //   return `url('${cause !== [] ? cause.cause_photos[0] : "null"}')`;
    // },
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "400px",
  },
  headerTitle: {
    color: Colors.appRed,
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  share: {
    height: "40px",
    marginLeft: "20px",
  },
}));

const ACauseHeader = (props) => {
  const classes = useStyles();

  // const [cause, setCause] = useState([]);

  const classes2 = moreStyles(props);

  // useEffect(function () {
  //   setCause(props.cause);
  // }, []);

  console.log("props", props);

  return (
    <Container>
      <Grid container spacing={4} style={{ marginBottom: "100px" }}>
        <Grid item xs={12} md={6} className={classes2.mainImage}>
          {props.cause.cause_photos && (
            <img
              src={props.cause.cause_photos[0].replace(/^uploads\//, baseUrl)}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </Grid>
        <Grid item xs={12} md={6} style={{ position: "relative" }}>
          <Typography
            variant="h6"
            component="h6"
            className={classes2.headerTitle}
          >
            {props.cause.category || "Test"}
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            style={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            {props.cause.cause_title || "Title goes here"}
          </Typography>

          <Typography
            variant="body1"
            component="p"
            style={{ fontSize: "14px", marginBottom: "20px" }}
          >
            {props.cause.brief_description || "Description goes here"}
          </Typography>
          <div className={classes.root}>
            <Slider
              value={props.cause.amount_donated || 0}
              max={props.cause.amount_required || 1}
            />
            <Grid container style={{ marginTop: "20px", width: "100%" }}>
              <Grid
                item
                xs={6}
                style={{
                  fontSize: "16px",
                }}
              >
                <Typography variant="body1" component="p">
                  {props.cause.currency || "#"}
                  {props.cause.amount_donated || 0} Raised
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  fontSize: "16px",
                }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  style={{ textAlign: "right" }}
                >
                  {Math.round(
                    (props.cause.amount_donated || 0 * 100) /
                      props.cause.amount_required || 1
                  )}
                  % of {props.cause.currency}
                  {props.cause.amount_required}
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
                    width: "120px",
                  }}
                >
                  Donate
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    borderColor: "black",
                    width: "120px",
                    borderRadius: "0px",
                  }}
                >
                  Watch
                </Button>
              </Grid>
              {props.cause.share_on_social_media && (
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
              )}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ACauseHeader;
