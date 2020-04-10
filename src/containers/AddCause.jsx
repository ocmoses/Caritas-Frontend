import React, { useState, useEffect } from "react";
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
import { createCause } from "../services/cause.service";

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

const AddCause = () => {
  let user = JSON.parse(localStorage.getItem("user")).data;
  const [curUser, setCurUser] = useState(user);

  let location = useLocation();
  let history = useHistory();

  const classes = moreStyles();
  let [page, setPage] = useState(1);

  let [causeTitle, setCauseTitle] = useState("");
  let [amountRequired, setAmountRequired] = useState("");
  let [briefDescription, setBriefDescription] = useState("");
  let [charityInformation, setCharityInformation] = useState("");
  let [additionalInformation, setAdditionalInformation] = useState("");
  let [causeOptions, setCauseOptions] = useState({
    enableComments: false,
    enableWatching: true,
    fundStatus: true,
    socialMediaSharing: true,
  });
  let [uploadFiles, setUploadFiles] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
    video1: null,
  });

  let [errorMessage, setErrorMessage] = useState("");

  const handleCauseTitleChange = (event) => {
    setCauseTitle(event.target.value.trim());
  };

  const handleAmountRequiredChange = (event) => {
    setAmountRequired(event.target.value.trim());
  };

  const handleCharityInformationChange = (event) => {
    setCharityInformation(event.target.value.trim());
  };

  const handleAdditionalInformationChange = (event) => {
    setAdditionalInformation(event.target.value.trim());
  };

  const handleCheck = (event) => {
    setCauseOptions({
      ...causeOptions,
      [event.target.name]: event.target.checked,
    });
  };

  const handleBriefDescriptionChange = (event) => {
    setBriefDescription(event.target.value.trim());
  };

  const validateEntries = (event) => {
    //we check the validity of entries here
    if (!isValidCauseTitle(causeTitle)) {
      setErrorMessage("Cause title is not valid.");
      return;
    }

    if (!isValidFunds(amountRequired)) {
      setErrorMessage("The amount required field is not valid");
      return;
    }

    if (!isValidBriefDescription(briefDescription)) {
      setErrorMessage("Please enter a valid description");
      return;
    }

    setPage(2);
  };

  const handleSubmit = async () => {
    // setPage(3);
    console.log("Title state", causeTitle);
    console.log("Upload state", uploadFiles);
    let cause = {};
    cause.causeTitle = causeTitle;
    cause.amountRequired = amountRequired;
    cause.briefDescription = briefDescription;
    cause.charityInformation = charityInformation;
    cause.additionalInformation = additionalInformation;
    cause.causeOptions = causeOptions;
    cause.uploadFiles = uploadFiles;

    if (cause.uploadFiles.image1 == null) {
      setErrorMessage("You must upload at least one image");
      return;
    }

    let outcome = await createCause(cause);

    console.log("Result of creating cause", outcome);
  };

  const handleAddImageClick = (event) => {
    event.stopPropagation();
    console.log("Clicked", event.target);
    let fileInput = event.target.getElementsByTagName("input")[0];
    fileInput.click();
  };

  return (
    <>
      <PrimaryAppBar />
      {page === 1 && (
        <Container style={{ marginTop: 200 }}>
          <form action={"#"} method="POST" className={classes.form}>
            <div style={{ color: "red", textAlign: "center", margin: 16 }}>
              {errorMessage}
            </div>
            <Grid container spacing={10}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.sectionHead}
                >
                  Great work, {user.first_name}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.sectionSubhead}
                >
                  Now let’s begin creating this new cause of yours.
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
                    value={causeTitle}
                    onChange={handleCauseTitleChange}
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
                    value={amountRequired}
                    onChange={handleAmountRequiredChange}
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
                    value={briefDescription}
                    onChange={handleBriefDescriptionChange}
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
                    value={charityInformation}
                    onChange={handleCharityInformationChange}
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
                    value={additionalInformation}
                    onChange={handleAdditionalInformationChange}
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
                        checked={causeOptions.enableComments}
                        // onChange={handleChange}
                        name="enableComments"
                        onChange={handleCheck}
                      />
                    }
                    label="Enable comments and reviews"
                  />
                  <FormControlLabel
                    className={classes.checkbox}
                    control={
                      <Checkbox
                        checked={causeOptions.enableWatching}
                        // onChange={handleChange}
                        name="enableWatching"
                        onChange={handleCheck}
                      />
                    }
                    label="Enable Watching of Cause"
                  />
                  <FormControlLabel
                    className={classes.checkbox}
                    control={
                      <Checkbox
                        checked={causeOptions.fundStatus}
                        // onChange={handleChange}
                        name="fundStatus"
                        onChange={handleCheck}
                      />
                    }
                    label="Make cause fund status public"
                  />
                  <FormControlLabel
                    className={classes.checkbox}
                    control={
                      <Checkbox
                        checked={causeOptions.socialMediaSharing}
                        //onChange={handleChange}
                        name="socialMediaSharing"
                        onChange={handleCheck}
                      />
                    }
                    label="Enable social media and link sharing"
                  />

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
                      marginRight: "0px",
                    }}
                    onClick={validateEntries}
                  >
                    Proceed
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
      {page === 2 && (
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
                Kindly provide, pictures and videos to showcase this cause.
                Please note that a maximum of one video is allowed, and *
                uploads are important others are optional.
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
                    filename="image1"
                    onClick={handleAddImageClick}
                    setImage={(file) => {
                      setUploadFiles({
                        ...uploadFiles,
                        image1: file,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={9} style={{ textAlign: "right" }}>
                  <AddImage
                    image="/assets/images/icons/upload_video.png"
                    title="Cause Video"
                    text="This Video appears on the causes page."
                    filename="video1"
                    onClick={handleAddImageClick}
                    setImage={(file) => {
                      setUploadFiles({
                        ...uploadFiles,
                        video1: file,
                      });
                    }}
                  />
                  <AddImage
                    image="/assets/images/icons/upload-image.png"
                    title="Cause Image - 1 *"
                    text="This Video appears on the causes page."
                    filename="image2"
                    onClick={handleAddImageClick}
                    setImage={(file) => {
                      setUploadFiles({
                        ...uploadFiles,
                        image2: file,
                      });
                    }}
                  />
                  <AddImage
                    image="/assets/images/icons/upload-image.png"
                    title="Cause Image - 2"
                    text="This Video appears on the causes page."
                    filename="image3"
                    onClick={handleAddImageClick}
                    setImage={(file) => {
                      setUploadFiles({
                        ...uploadFiles,
                        image3: file,
                      });
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={5}
                style={{
                  marginTop: "100px",
                  marginBottom: "100px",
                }}
              >
                <Grid item xs={12} md={9}>
                  <AddImage
                    image="/assets/images/icons/upload-image.png"
                    title="More Info Image - 1 *"
                    text="This image appears on the more Info tab."
                    filename="image4"
                    onClick={handleAddImageClick}
                    setImage={(file) => {
                      setUploadFiles({
                        ...uploadFiles,
                        image4: file,
                      });
                    }}
                  />
                  <AddImage
                    image="/assets/images/icons/upload-image.png"
                    title="More Info Image - 2*"
                    text="This image appears on the more Info tab."
                    filename="image5"
                    onClick={handleAddImageClick}
                    setImage={(file) => {
                      setUploadFiles({
                        ...uploadFiles,
                        image5: file,
                      });
                    }}
                  />
                  <AddImage
                    image="/assets/images/icons/upload-image.png"
                    title="More Info Image - 3"
                    text="This image appears on the more Info tab."
                    filename="image6"
                    onClick={handleAddImageClick}
                    setImage={(file) => {
                      setUploadFiles({
                        ...uploadFiles,
                        image6: file,
                      });
                    }}
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
                    I Hereby agree to the terms and conditions governing the
                    caritas platform. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero
                  </p>

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
                      marginRight: "0px",
                    }}
                    onClick={handleSubmit}
                  >
                    Upload Cause
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
      {page === 3 && <SuccessUpload />}
    </>
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

export default AddCause;
