import React, { Fragment, useState } from "react";
// import ReactDom from "react-dom";

import {
  Grid,
  Container,
  FormControl,
  Typography,
  Button,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PrimaryAppBar, MyTextField } from "../commons";
import { Link } from "react-router-dom";
import { Colors } from "../constants";
import { MyButton } from "../components";
import { signinUser } from "../services/user.service";
import { isValidEmail, isValidPassword } from "../helpers/validator";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 100,
  },
  formControl: {
    width: `100%  !important`,
    display: "block",
  },
  loginButton: {
    width: "100% !important",
    padding: theme.spacing(2),
    color: "white",
  },
  formHeader: {
    fontWeight: "bold",
    color: Colors.appRed,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  formSubheader: {
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  formByLine: {
    marginLeft: "30px",
  },
  textField: {
    width: "100% !important",
    borderRadius: 10,
  },
  leftGrid: {
    height: "600px",
    backgroundImage: "url(/images/login_pic.png)",
    backgroundSize: "cover",
  },
  left: {
    padding: "200px 50px",
    backgroundColor: Colors.appBackground,
  },
  right: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    backgroundColor: Colors.appRed,
    padding: "200px 50px",
    backgroundImage: "url('/assets/images/auth-background.png')",
    backgroundPosition: "80% 150px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "450px 450px",
  },
  authPage: {
    width: "100%",
    height: "100vh",
  },
  authImage: {
    width: "450px",
    display: "block",
    marginLeft: "auto",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  authLeft: { position: "relative" },
  alternate: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  copyright: {
    position: "absolute",
    bottom: "30px",
    fontSize: "10px",
    width: "100%",
  },
  form: {
    width: "400px !important",
    [theme.breakpoints.down("md")]: {
      display: "block",
      margin: "auto",
    },
  },
}));

const Signin = () => {
  const classes = useStyles();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [successMessage, setSuccessMessage] = useState("");
  let [progress, setProgress] = useState(false);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    progress === false ? setProgress(true) : setProgress(progress);

    if (validateLogin()) {
      //Here we submit shit...

      let outcome = await signinUser({
        email: email,
        password: password,
      });

      setProgress(false);

      console.log(outcome);

      if (outcome && outcome.status === 200) {
        setErrorMessage("");
        setEmail("");
        setPassword("");

        setErrorMessage("");
        setSuccessMessage("Login Successful...");

        setTimeout(() => (window.location = "/dashboard"), 3000);
      } else if (outcome.message) {
        setSuccessMessage("");
        if (outcome.message.includes("400"))
          setErrorMessage("Invalid credentials");
        else setErrorMessage(outcome.message);
      }
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim());
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value.trim());
  };

  const validateLogin = () => {
    if (!isValidEmail(email)) {
      setErrorMessage("Ïnvalid email address");
      setProgress(false);
      return;
    }
    if (!isValidPassword(password)) {
      setErrorMessage("Ïnvalid password");
      setProgress(false);
      return;
    }

    return true;
  };

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
            top: 200,
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} md={6} className={classes.authLeft}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.formHeader}
                >
                  Welcome back...
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.formSubheader}
                >
                  Signin to continue
                </Typography>
                <form action={"#"} method="POST" className={classes.form}>
                  <div
                    style={{ color: "red", textAlign: "center", margin: 16 }}
                  >
                    {errorMessage}
                  </div>
                  <div
                    style={{ color: "green", textAlign: "center", margin: 16 }}
                  >
                    {successMessage}
                  </div>
                  <FormControl className={classes.formControl}>
                    <MyTextField
                      id="email"
                      type="email"
                      name="username"
                      required="required"
                      label="Username"
                      placeholder="Enter your username"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </FormControl>

                  <FormControl className={classes.formControl}>
                    <MyTextField
                      id="password"
                      type="password"
                      name="password"
                      required="required"
                      label="Password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </FormControl>

                  <FormControl
                    style={{
                      width: "100%",
                      textAlign: "right",
                      marginBottom: 10,
                    }}
                  >
                    <Link
                      to="/recover-password"
                      style={{
                        float: "right",
                        marginBottom: "15px",
                        fontSize: "12px",
                      }}
                    >
                      Forgot password
                    </Link>
                  </FormControl>

                  <MyButton processing={false} onClick={handleSubmit}>
                    Sign in
                  </MyButton>
                </form>
                <p
                  style={{
                    color: Colors.appBlack,
                    marginTop: "50px",
                  }}
                  className={classes.alternate}
                >
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    style={{
                      color: Colors.appRed,
                      fontWeight: "bold",
                      display: "inline",
                    }}
                  >
                    Signup to get one now
                  </Link>
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Zoom in={true} timeout={2000}>
                  <img
                    src="/assets/images/signin.png"
                    alt=""
                    className={classes.authImage}
                  />
                </Zoom>
              </Grid>
            </Grid>
          </Container>
        </div>
        {/* <div className={classes.copyright}>
          <Container>
            <p>Copyright &copy; 2020 | All Rights Reserved | Caritas.org</p>
          </Container>
        </div> */}
      </Grid>
    </Fragment>
  );
};

export default Signin;
