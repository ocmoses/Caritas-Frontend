import React, { useState, useEffect } from "react";
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
  FormControlLabel,
} from "@material-ui/core";
import { useStyles } from "../helpers";
import { userIsUser, userIsModerator, userIsAnAdmin } from "../helpers/utils";

import { Colors } from "../constants";
import { useLocation, useHistory, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { PrimaryAppBar, MyTextField } from "../commons";
import { yourCauses, trendingCauses, followedCauses, user } from "../mock";
import { SlideableGridList, AddImage } from "../components";
import {
  isValidCauseTitle,
  isValidFunds,
  isValidBriefDescription,
} from "../helpers/validator";
import {
  getAllCauses,
  getAllCausesAsModerator,
} from "../services/cause.service";
import { CausesTable, UsersTable } from "../components";

const moreStyles = makeStyles((theme) => ({
  sectionHead: {
    fontSize: "18px",
    fontWeight: "bold",
    color: Colors.appRed,
  },
  sectionSubhead: {
    fontSize: "12px",
  },
  coronalink: {
    backgroundImage: "url('/assets/images/corona-outbreak.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "cover",
    marginBottom: "30px",
    cursor: "pointer",
  },
  formControl: {
    display: "block",
    marginBottom: "20px",
    borderRadius: 20,
  },
  textField: {
    borderColor: Colors.appRed,
    borderRadius: "20px !important",
  },
  form: {
    marginTop: "100px",
    paddingRight: 50,
  },
  checkbox: {
    display: "block",
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
      margin: "auto",
    },
  },
}));

const Dashboard = (props) => {
  let user = JSON.parse(localStorage.getItem("user")).data;
  const [curUser, setCurUser] = useState(user);

  let location = useLocation();
  let history = useHistory();

  const classes = moreStyles();
  let [page, setPage] = useState(props.page ? props.page : 0);

  return (
    <>
      <PrimaryAppBar />
      <Summary />
    </>
  );
};

const Summary = () => {
  const classes = moreStyles();

  let [allCauses, setAllCauses] = useState([]);

  const fetchAllCauses = async () => {
    return await getAllCauses();
  };

  useEffect(() => {
    async function setTheCauses() {
      let returnedCauses = await fetchAllCauses();
      if (Array.isArray(returnedCauses)) setAllCauses(returnedCauses);
      else setAllCauses([]);
    }
    setTheCauses();
  }, []);

  return (
    <Container style={{ marginTop: 200 }}>
      {userIsUser() && (
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
              causes={allCauses}
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
              causes={allCauses}
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
              causes={allCauses}
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
      )}

      {userIsModerator() && (
        <>
          <Typography
            variant="h6"
            component="h6"
            style={{
              color: Colors.appRed,
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            All Causes
          </Typography>
          <Grid container spacing={5}>
            <CausesTable />
          </Grid>
        </>
      )}
      {userIsAnAdmin() && (
        <>
          <Typography
            variant="h6"
            component="h6"
            style={{
              color: Colors.appRed,
              fontWeight: "bold",
              marginBottom: "30px",
              marginTop: "50px",
            }}
          >
            Users
          </Typography>
          <Grid container spacing={5}>
            <UsersTable />
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
