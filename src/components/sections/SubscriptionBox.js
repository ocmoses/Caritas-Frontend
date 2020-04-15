import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "../../helpers";

const SubscriptionBox = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      style={{
        padding: "100px 0px",
        display: "flex",
      }}
    >
      <div className={classes.subscribeArea}>
        <Typography
          variant="h6"
          component="h6"
          className={classes.sectionTitle}
          style={{ color: "white", textAlign: "center" }}
        >
          Stay up to date with our Events and Projects
        </Typography>
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          <input
            type="email"
            className={classes.subscribe}
            id="sunscribe2"
            placeholder="Subscribe to our newsletter"
          />
          <button className={classes.subscribeButton2}>Subscibe</button>
        </div>

        <img
          src="/assets/images/shapes/shape3.png"
          alt=""
          style={{
            width: 50,
            position: "absolute",
            top: -20,
            left: -20,
          }}
        />
        <img
          src="/assets/images/shapes/shape4.png"
          alt=""
          style={{
            width: 50,
            position: "absolute",
            top: -20,
            right: -20,
          }}
        />
        <img
          src="/assets/images/shapes/shape5.png"
          alt=""
          style={{
            width: 50,
            position: "absolute",
            bottom: -20,
            left: "calc(50% - 25px)",
          }}
        />
      </div>
    </Grid>
  );
};

export default SubscriptionBox;
