import React, { Fragment } from "react";
// import ReactDom from "react-dom";

import {
  Grid,
  Container,
  TextField,
  FormControl,
  Typography,
  Button,
  Zoom
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PrimaryAppBar } from "../commons";
import { Link } from "react-router-dom";
import { Colors } from "../constants";

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: 100
  },
  formControl: {
    width: `100%  !important`,
    marginTop: theme.spacing(3),
    display: "block"
  },
  loginButton: {
    width: "100% !important",
    padding: theme.spacing(2),
    color: "white"
  },
  formHeader: {
    fontWeight: "bold",
    color: Colors.appRed
  },
  formSubheader: {
    marginBottom: 50
  },
  formByLine: {
    marginLeft: "30px"
  },
  textField: {
    width: "100% !important",
    borderRadius: 10,
    marginBottom: 20
  },
  leftGrid: {
    height: "600px",
    backgroundImage: "url(/images/login_pic.png)",
    backgroundSize: "cover"
  },
  left: {
    padding: "200px 50px",
    backgroundColor: Colors.appBackground
  },
  right: {
    backgroundColor: Colors.appRed,
    padding: "200px 50px",
    backgroundImage: "url('/assets/images/auth-background.png')",
    backgroundPosition: "80% 150px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "450px 450px"
  },
  authPage: {
    width: "100%",
    height: "100vh"
  },
  authImage: {
    width: "450px",
    display: "block",
    marginLeft: "auto",
    marginTop: "50px"
  },
  authLeft: { position: "relative" },
  copyright: {
    position: "absolute",
    bottom: "30px",
    fontSize: "10px",
    width: "100%"
  },
  form: {
    width: "400px !important"
  }
}));

const RecoverPassword = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <PrimaryAppBar />
      <Grid container className={classes.authPage}>
        <Grid item xs={12} md={6} className={classes.left}></Grid>
        <Grid item xs={12} md={6} className={classes.right}></Grid>
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: 200
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={6} className={classes.authLeft}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.formHeader}
                >
                  Awww, snap.
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.formSubheader}
                >
                  Enter email to recover your password
                </Typography>
                <form action={"#"} method="POST" className={classes.form}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      id="outlined-email"
                      type="email"
                      label="Email address"
                      variant="outlined"
                      className={classes.textField}
                    />
                  </FormControl>

                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.loginButton}
                    onClick={() => {
                      window.location = "/signin";
                    }}
                  >
                    Send Recovery Link
                  </Button>
                </form>
                <p
                  style={{
                    color: Colors.appBlack,
                    marginTop: "50px"
                  }}
                >
                  Silly me I remember my details,{" "}
                  <a
                    href="/signin"
                    style={{
                      color: Colors.appRed,
                      fontWeight: "bold",
                      display: "inline"
                    }}
                  >
                    Sign In instead
                  </a>
                </p>
              </Grid>
              <Grid item xs={6}>
                <Zoom in={true} timeout={2000}>
                  <img
                    src="/assets/images/nurse.png"
                    alt=""
                    className={classes.authImage}
                  />
                </Zoom>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.copyright}>
          <Container>
            <p>Copyright &copy; 2020 | All Rights Reserved | Caritas.org</p>
          </Container>
        </div>
      </Grid>
    </Fragment>
  );
};

export default RecoverPassword;
