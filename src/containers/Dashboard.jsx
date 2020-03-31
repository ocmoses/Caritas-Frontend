import React, { useEffect } from "react";
import clsx from "clsx";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  TextField,
  Button,
  OutlinedInput
} from "@material-ui/core";
import { useStyles } from "../helpers";

import { Colors } from "../constants";
import { useLocation, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { PrimaryAppBar } from "../commons";
import { yourCauses, trendingCauses, followedCauses, user } from "../mock";
import { SlideableGridList } from "../components";

const moreStyles = makeStyles(theme => ({
  sectionHead: {
    fontSize: "18px",
    fontWeight: "bold",
    color: Colors.appRed
  },
  sectionSubhead: {
    fontSize: "12px"
  },
  coronalink: {
    backgroundImage: "url('/assets/images/corona-outbreak.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "cover",
    marginBottom: "30px",
    cursor: "pointer"
  },
  formControl: {
    marginTop: theme.spacing(5),
    display: "block",
    borderRadius: 20
  },
  textField: {
    borderColor: Colors.appRed,
    borderRadius: "20px !important"
  },
  form: {
    marginTop: "100px",
    paddingRight: 50
  }
}));

const Dashboard = () => {
  const location = useLocation();
  return (
    <>
      <PrimaryAppBar />
      {location.pathname === "/dashboard" && <Summary />}
      {location.pathname === "/dashboard/create-cause/1" && <AddCausePage1 />}
    </>
  );
};

const Summary = () => {
  const classes = moreStyles();

  // let yourCauses = []; //just for tests
  // let followedCauses = []; //Also just for tests

  return (
    <Container style={{ marginTop: 200 }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.sectionHead}
          >
            Your Causes
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.sectionSubhead}
          >
            Here are the causes pioneered by you.
          </Typography>
          <SlideableGridList
            causes={yourCauses}
            label="Glad you are here. Create a new cause."
            cols={2}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.sectionHead}
          >
            Trending
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.sectionSubhead}
          >
            Here are the causes making the most impressions
          </Typography>
          <SlideableGridList
            causes={trendingCauses}
            label="There are no trending causes yet"
            cols={2}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.sectionHead}
          >
            Causes you follow
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.sectionSubhead}
          >
            Here are the causes you have shown interest in
          </Typography>
          <SlideableGridList
            causes={followedCauses}
            label="You are not following Any cause at the moment"
            cols={3}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          className={classes.coronalink}
          onClick={() => (window.location = "/about")}
        ></Grid>
      </Grid>
    </Container>
  );
};

const AddCausePage1 = () => {
  const classes = moreStyles();
  return (
    <Container style={{ marginTop: 200 }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.sectionHead}
          >
            Great work, {user.fname}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.sectionSubhead}
          >
            Now let’s begins creating this new cause of yours.
          </Typography>
          <form action={"#"} method="POST" className={classes.form}>
            {/* <FormControl className={classes.formControl}> */}
            <TextField
              id="outlined-read-only-input"
              type="text"
              label="Username"
              variant="outlined"
              fullWidth={true}
              inputProps={{ className: classes.textField }}
            />
            {/* </FormControl> */}

            {/* <FormControl className={classes.formControl}> */}
            <OutlinedInput
              id="outlined-read-only-input"
              type="text"
              label="Username"
              variant="outlined"
              fullWidth={true}
              className={classes.textField}
            />
            {/* </FormControl> */}

            <Button
              variant="contained"
              color="primary"
              className={classes.loginButton}
              onClick={() => {
                window.location = "/dashboard";
              }}
            >
              Sign in
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
