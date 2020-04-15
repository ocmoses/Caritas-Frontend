import React, { Fragment, useState } from "react";
// import ReactDom from "react-dom";

import {
  Grid,
  Container,
  TextField,
  FormControl,
  Typography,
  Button,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PrimaryAppBar, MyTextField } from "../commons";
import { Link } from "react-router-dom";
import { Colors } from "../constants";
import { registerUser } from "../services/user.service";
import {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidPassword,
} from "../helpers/validator";
import { MyButton, MyDialog } from "../components";

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
      width: "100% !important",
      display: "block",
      margin: "auto",
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [progress, setProgress] = useState(false);
  let [dialogTitle, setDialogTitle] = useState("");
  let [dialogMessage, setDialogMessage] = useState("");
  let [openDialog, setOpenDialog] = useState();
  let [positiveDialog, setPositiveDialog] = useState(true);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    progress === false ? setProgress(true) : setProgress(progress);

    if (validateSignup()) {
      //Here we submit shit...

      let outcome = await registerUser({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });

      setProgress(false);

      console.log(outcome);

      if (outcome && outcome.data) {
        setErrorMessage("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setDialogTitle("Registration Successful");
        setDialogMessage("Please check your email for verification");

        setPositiveDialog(true);

        setOpenDialog(true);
        setTimeout(() => (window.location = "/signin"), 5000);
      } else if (outcome.message) {
        setDialogTitle("Registration failed");
        setDialogMessage(
          outcome.message.includes("400")
            ? "Email is already taken"
            : "Please check your Internet connection"
        );

        setPositiveDialog(false);

        setOpenDialog(true);
      }
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value.trim());
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value.trim());
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim());
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value.trim());
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value.trim());
  };

  const validateSignup = () => {
    if (!isValidFirstName(firstName)) {
      setErrorMessage("Ïnvalid First name");
      setProgress(false);
      return;
    }
    if (!isValidLastName(lastName)) {
      setErrorMessage("Ïnvalid Last name");
      setProgress(false);
      return;
    }
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
    if (confirmPassword === "") {
      setErrorMessage("Please confirm your password");
      setProgress(false);
      return;
    }
    if (confirmPassword === "") {
      setErrorMessage("Please confirm your password");
      setProgress(false);
      return;
    }
    if (confirmPassword !== password) {
      setErrorMessage("Passwords don't match");
      setProgress(false);
      return;
    }
    return true;
  };
  return (
    <Fragment>
      <MyDialog
        title={dialogTitle}
        openDialog={openDialog}
        positiveDialog={positiveDialog}
        onClose={() => setOpenDialog(false)}
      >
        {dialogMessage}
      </MyDialog>
      <PrimaryAppBar />
      <Grid container className={classes.authPage}>
        <Grid item xs={12} md={6} className={classes.left}></Grid>
        <Grid item xs={12} md={6} className={classes.right}></Grid>
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: 150,
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
                  Great to have you join us.
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.formSubheader}
                >
                  Sign up to create an account.
                </Typography>
                <form action={"#"} method="POST" className={classes.form}>
                  <div
                    style={{ color: "red", textAlign: "center", margin: 16 }}
                  >
                    {errorMessage}
                  </div>

                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <FormControl className={classes.formControl}>
                        <MyTextField
                          id="first_name"
                          type="text"
                          name="first_name"
                          required="required"
                          label="First name"
                          placeholder="Enter your first name"
                          value={firstName}
                          onChange={handleFirstNameChange}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className={classes.formControl}>
                        <MyTextField
                          id="last_name"
                          type="text"
                          name="last_name"
                          required="required"
                          label="Last name"
                          placeholder="Enter your last name"
                          value={lastName}
                          onChange={handleLastNameChange}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>

                  <FormControl className={classes.formControl}>
                    <MyTextField
                      id="email"
                      type="email"
                      name="email"
                      required="required"
                      label="Email"
                      placeholder="Enter email address"
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
                      placeholder="Choose a password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </FormControl>

                  <FormControl className={classes.formControl}>
                    <MyTextField
                      id="confirm-password"
                      type="password"
                      name="confirm_password"
                      required="required"
                      label="Confirm Password"
                      placeholder="Please confirm your password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </FormControl>

                  <MyButton onClick={handleSubmit} progress={progress}>
                    Sign up
                  </MyButton>
                </form>
                <p
                  style={{
                    color: Colors.appBlack,
                    marginTop: "50px",
                  }}
                  className={classes.alternate}
                >
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    style={{
                      color: Colors.appRed,
                      fontWeight: "bold",
                      display: "inline",
                    }}
                  >
                    Sign In instead.
                  </Link>
                </p>
              </Grid>
              <Grid itemxs={12} md={6}>
                <Zoom in={true} timeout={2000}>
                  <img
                    src="/assets/images/kids.png"
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

export default Signup;
