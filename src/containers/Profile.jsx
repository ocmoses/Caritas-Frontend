import React, { Fragment, useState } from "react";
// import ReactDom from "react-dom";
import clsx from "clsx";
import {
  Grid,
  Container,
  TextField,
  FormControl,
  Typography,
  Button,
  Zoom,
  Select,
  MenuItem,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PrimaryAppBar, MyTextField } from "../commons";
import { Link } from "react-router-dom";
import { Colors, recaptchaKey } from "../constants";
import { registerUser } from "../services/user.service";
import {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidPassword,
} from "../helpers/validator";
import { MyButton, MyDialog } from "../components";
import ReCAPTCHA from "react-google-recaptcha";
import { getAuthenticatedUser } from "../helpers/utils";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 100,
  },
  formControl: {
    width: `100%  !important`,
    display: "block",
  },
  recaptcha: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center !important",
    [theme.breakpoints.up("md")]: {
      marginLeft: 45,
    },
    marginLeft: 30,
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
  profileAvatar: {
    width: 200,
    height: 200,
    position: "absolute",
    zIndex: 200,

    [theme.breakpoints.down("md")]: {
      position: "static",
      display: "block",
      margin: "0px auto 50px auto",
    },
  },
  authPage: {
    width: "100%",
    height: "150vh",
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
    width: "600px !important",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100% !important",
      marginBottom: "100px",
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState();
  let [accountType, setAccountType] = useState("Savings");
  let [address, setAddress] = useState("");
  let [bankName, setBankName] = useState("Select Bank");
  let [accountName, setAccountName] = useState("");
  let [accountNumber, setAccountNumber] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [progress, setProgress] = useState(false);
  let [dialogTitle, setDialogTitle] = useState("");
  let [dialogMessage, setDialogMessage] = useState("");
  let [openDialog, setOpenDialog] = useState();
  let [positiveDialog, setPositiveDialog] = useState(true);

  let [verified, setVerified] = useState(false);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    progress === false ? setProgress(true) : setProgress(progress);

    if (validateSignup()) {
      //Here we submit shit...

      //   if (!verified) {
      //     setDialogTitle("Hold on!");
      //     setDialogMessage("Please verify you are human");

      //     setPositiveDialog(false);

      //     setOpenDialog(true);

      //     return;
      //   }

      let outcome = await registerUser({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        password: password,
        address: address,
        bankName: bankName,
        accountNumber: accountNumber,
        accountName: accountName,
        accountType: accountType,
      });

      setProgress(false);

      console.log(outcome);

      if (outcome && outcome.data) {
        setErrorMessage("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setBankName("");
        setAccountName("");
        setAccountNumber("");
        setAccountType("");
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
  const handlePhoneChange = (event) => {
    setPhone(event.target.value.trim());
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value.trim());
  };
  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value.trim());
  };
  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value.trim());
  };
  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value.trim());
  };
  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value.trim());
  };

  const onRecaptcha = (value) => {
    //verified = value;
    if (value) {
      setVerified(true);
    }
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
    if (bankName === "Select Bank") {
      setErrorMessage("Please select your bank");
      setProgress(false);
      return;
    }
    if (accountName === "") {
      setErrorMessage("Your account name is empty");
      setProgress(false);
      return;
    }
    if (accountNumber === "") {
      setErrorMessage("Your account number is empty");
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
        <Container style={{ marginTop: "200px" }}>
          <Grid container>
            <Avatar
              src="userimage"
              alt={getAuthenticatedUser().first_name}
              className={classes.profileAvatar}
            />
            <form action={"#"} method="POST" className={classes.form}>
              <div style={{ color: "red", textAlign: "center", margin: 16 }}>
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
                  id="phone"
                  type="phone"
                  name="phone"
                  required="required"
                  label="Phone no"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <MyTextField
                  id="address"
                  type="text"
                  name="address"
                  required="required"
                  label="Address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </FormControl>

              <FormControl
                className={classes.formControl}
                style={{ marginBottom: "20px" }}
              >
                <Select
                  labelId="bank-name"
                  id="bank-name"
                  value={bankName}
                  onChange={handleBankNameChange}
                  variant="outlined"
                  style={{ width: "100% !important" }}
                  // margin="dense"
                  fullWidth
                >
                  <MenuItem value="Select Bank">Select Bank</MenuItem>
                  <MenuItem value="UBA">UBA</MenuItem>
                  <MenuItem value="GT Bank">GT Bank</MenuItem>
                  <MenuItem value="Zenith">Zenith</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <MyTextField
                  id="account-name"
                  type="text"
                  name="account_name"
                  required="required"
                  label="Account Name"
                  placeholder="Enter your account name"
                  value={accountName}
                  onChange={handleAccountNameChange}
                />
              </FormControl>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <MyTextField
                      id="account_number"
                      type="number"
                      name="account_number"
                      required="required"
                      label="Account Number"
                      placeholder="Enter you account number"
                      value={accountNumber}
                      onChange={handleAccountNumberChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="account-type"
                      id="acount-type"
                      value={accountType}
                      onChange={handleAccountTypeChange}
                      variant="outlined"
                      style={{ width: "100% !important" }}
                      // margin="dense"
                      fullWidth
                    >
                      <MenuItem value="Savings">Savings</MenuItem>
                      <MenuItem value="Current">Current</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
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
                </Grid>
                <Grid item xs={6}>
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
                </Grid>
              </Grid>
              <FormControl
                className={clsx(classes.formControl, classes.recaptcha)}
              >
                <ReCAPTCHA sitekey={recaptchaKey} onChange={onRecaptcha} />
              </FormControl>
              <MyButton onClick={handleSubmit} progress={progress}>
                Sign up
              </MyButton>
            </form>
          </Grid>
        </Container>
      </Grid>
    </Fragment>
  );
};

export default Profile;
