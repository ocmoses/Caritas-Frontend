import React, { useEffect } from "react";
import clsx from "clsx";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  Button,
  Checkbox,
  Paper,
  FormControlLabel
} from "@material-ui/core";
import { useStyles } from "../helpers";

import { Colors } from "../constants";
import { useLocation, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { PrimaryAppBar, MyTextField } from "../commons";
import { yourCauses, trendingCauses, followedCauses, user } from "../mock";
import { SlideableGridList, AddImage } from "../components";

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
    display: "block",
    marginBottom: "20px",
    borderRadius: 20
  },
  textField: {
    borderColor: Colors.appRed,
    borderRadius: "20px !important"
  },
  form: {
    marginTop: "100px",
    paddingRight: 50
  },
  checkbox: {
    display: "block"
  },
  successBox: {
    backgroundColor: "white",
    width: "500px",
    height: "400px",
    margin: "auto",
    textAlign: "center",
    paddingTop: "50px",
    "& img": {
      width: "200px",
      display: "block",
      margin: "auto"
    }
  }
}));

const Dashboard = () => {
  const location = useLocation();
  return (
    <>
      <PrimaryAppBar />
      {location.pathname === "/dashboard" && <Summary />}
      {location.pathname === "/dashboard/create-cause/1" && <AddCausePage1 />}
      {location.pathname === "/dashboard/create-cause/2" && <AddCausePage2 />}
      {location.pathname === "/dashboard/create-cause/success" && (
        <SuccessUpload />
      )}
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
      <form action={"#"} method="POST" className={classes.form}>
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
          </Grid>
        </Grid>

        <Grid container spacing={10} style={{ marginTop: "50px" }}>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
              <MyTextField
                id="cause_title"
                type="text"
                name="cause_title"
                required="required"
                label="Title of your Cause"
                placeholder="Provide a Title for your cause"
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <MyTextField
                id="required_funds"
                type="text"
                name="required_funds"
                required="required"
                label="Required Funds"
                placeholder="Provide the expected value that this charity needs to succeed"
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <MyTextField
                id="description"
                type="text"
                name="description"
                required="required"
                label="Brief description"
                placeholder="Provide a brief description for the  Cause"
                multiline={true}
                rows={3}
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <MyTextField
                id="charity_info"
                type="text"
                name="charity_info"
                label="Charity Information"
                placeholder="You can be more detailed here about the cause you are publishing"
                multiline={true}
                rows={3}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
              <MyTextField
                id="additional_info"
                type="text"
                name="additional_info"
                label="Additional Information"
                placeholder="Provide any additional information you would require"
                multiline={true}
                rows={3}
              />
            </FormControl>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h4"
                className={classes.sectionHead}
              >
                Cause settings
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.sectionSubhead}
              >
                Set up some basic settings unique to this cause
              </Typography>
              <FormControlLabel
                className={classes.checkbox}
                style={{ marginTop: "10px" }}
                control={
                  <Checkbox
                    checked={false}
                    // onChange={handleChange}
                    name="enable_comments"
                  />
                }
                label="Enable comments and reviews"
              />
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    checked={false}
                    // onChange={handleChange}
                    name="enable_watching"
                  />
                }
                label="Enable Watching of Cause"
              />
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    checked={false}
                    // onChange={handleChange}
                    name="fund_status"
                  />
                }
                label="Make cause fund status public"
              />
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    checked={false}
                    //onChange={handleChange}
                    name="social_media_sharing"
                  />
                }
                label="Enable social media and link sharing"
              />
              <Link to={"/dashboard/create-cause/2"}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    marginTop: "20px",
                    borderWidth: "2px",
                    textTransform: "none",
                    marginRight: "0px"
                  }}
                >
                  Proceed
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

const AddCausePage2 = () => {
  const classes = moreStyles();
  return (
    <Container style={{ marginTop: 200 }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.sectionHead}
          >
            Upload Media.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.sectionSubhead}
          >
            Kindly provide, pictures and videos to showcase this cause. Please
            note that a maximum of one video is allowed, and * uploads are
            important others are optional.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={6} md={3}>
              <AddImage
                image="/assets/images/icons/upload-image.png"
                title="Banner Picture *"
                text="This is image that will portray the cause."
                style={{ alignSelf: "flex-start" }}
              />
            </Grid>
            <Grid item xs={12} md={9} style={{ textAlign: "right" }}>
              <AddImage
                image="/assets/images/icons/upload_video.png"
                title="Cause Video"
                text="This Video appears on the causes page."
              />
              <AddImage
                image="/assets/images/icons/upload-image.png"
                title="Cause Image - 1 *"
                text="This Video appears on the causes page."
              />
              <AddImage
                image="/assets/images/icons/upload-image.png"
                title="Cause Image - 2"
                text="This Video appears on the causes page."
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={5}
            style={{
              marginTop: "100px",
              marginBottom: "100px"
            }}
          >
            <Grid item xs={12} md={9}>
              <AddImage
                image="/assets/images/icons/upload-image.png"
                title="More Info Image - 1 *"
                text="This image appears on the more Info tab."
              />
              <AddImage
                image="/assets/images/icons/upload-image.png"
                title="More Info Image - 2*"
                text="This image appears on the more Info tab."
              />
              <AddImage
                image="/assets/images/icons/upload-image.png"
                title="More Info Image - 3"
                text="This image appears on the more Info tab."
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControlLabel
                className={classes.checkbox}
                style={{ marginLeft: "-60px", display: "inline" }}
                control={
                  <Checkbox
                    checked={false}
                    //onChange={handleChange}
                    name="social_media_sharing"
                  />
                }
              />

              <p style={{ fontSize: "10px", display: "inline" }}>
                I Hereby agree to the terms and conditions governing the caritas
                platform. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero
              </p>
              <Link to={"/dashboard/create-cause/success"}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    marginTop: "20px",
                    borderWidth: "2px",
                    textTransform: "none",
                    marginRight: "0px"
                  }}
                >
                  Upload Cause
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const SuccessUpload = () => {
  const classes = moreStyles();
  return (
    <Container style={{ marginTop: "200px" }}>
      <Paper className={classes.successBox}>
        <img src="/assets/images/icons/success_icon.png" alt="" />
        <Typography variant="h6" component="h6" className={classes.sectionHead}>
          Upload Successful
        </Typography>
        <Link to="/dashboard">
          <u>Return to your dashboard and await approval.</u>
        </Link>
      </Paper>
    </Container>
  );
};

export default Dashboard;
