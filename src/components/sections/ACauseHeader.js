import React, { useState, useEffect } from "react";
import { Container, Typography, Slider, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FancyShape, useStyles } from "../../helpers";
import { Colors } from "../../constants";
import { Link } from "react-router-dom";
import "../../index.css";
import { baseUrl } from "../../constants";
import { useLocation, useParams } from "react-router";
import {
  FacebookIcon,
  TwitterIcon,
  InstapaperIcon,
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";
import { userIsModerator } from "../../helpers/utils";
import { approveACause, rejectACause } from "../../services/cause.service";
import { MyDialog, MyConfirmationDialog } from "../../commons";

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
  let location = useLocation();

  let [confirmOpen, setConfirmOpen] = useState(false);
  let [dialogOpen, setDialogOpen] = useState(false);
  let [positive, setPositive] = useState(false);
  let [dialogTitle, setDialogTitle] = useState("");
  let [dialogMessage, setDialogMessage] = useState("");
  const causeId = useParams().id;

  console.log("param id: ", causeId);

  const classes2 = moreStyles(props);

  console.log("Cause on page", props.cause);

  const approveCause = () => {
    // alert("Approving cause");
    setDialogTitle("One moment");
    setDialogMessage(
      `Are you sure you want to approve '${props.cause.cause_title}'?`
    );
    setConfirmOpen(true);
  };

  const doApproval = async (id) => {
    setConfirmOpen(false);
    let outcome = await approveACause(id);
    console.log("Approval outcome", outcome);
    if (outcome.status && outcome.status === 200) {
      setDialogTitle("Success");
      setDialogMessage("Cause was approved successfully");
      setPositive(true);
      setDialogOpen(true);
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } else {
      setDialogTitle("Failure");
      setDialogMessage("Cause could not be approved");
      setPositive(false);
      setDialogOpen(true);
    }
  };

  const rejectCause = () => {
    alert("Rejecting cause");
  };

  return (
    <Container>
      <MyConfirmationDialog
        positive={() => doApproval(causeId)}
        openDialog={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title={dialogTitle}
      >
        {dialogMessage}
      </MyConfirmationDialog>
      <MyDialog
        positiveDialog={positive}
        openDialog={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={dialogTitle}
      >
        {dialogMessage}
      </MyDialog>
      <Grid container spacing={4} style={{ marginBottom: "100px" }}>
        <Grid item xs={12} md={6} className={classes2.mainImage}>
          {props.cause.cause_photos && (
            <img
              src={props.cause.cause_photos[0].replace(/^uploads\\/, baseUrl)}
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
                      props.cause.amount_required || 0
                  )}
                  % of {props.cause.currency}
                  {props.cause.amount_required}
                </Typography>
              </Grid>
            </Grid>
            {/* <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "right" }}
            >
              {props.cause.address}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "right" }}
            >
              {props.cause.phone_number}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "right" }}
            >
              {props.cause.account_number}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "right" }}
            >
              {props.cause.bank_name}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "right" }}
            >
              {props.cause.account_type}
            </Typography> */}
            <Grid container style={{ position: "absolute", bottom: "0px" }}>
              {!userIsModerator() && (
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
              )}

              {userIsModerator() && props.cause.isApproved === 0 && (
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
                    onClick={approveCause}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      borderColor: "black",
                      width: "120px",
                      borderRadius: "0px",
                    }}
                    onClick={rejectCause}
                  >
                    Reject
                  </Button>
                </Grid>
              )}

              {userIsModerator() && props.cause.isApproved === 1 && (
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
                    disabled
                  >
                    Approved
                  </Button>
                </Grid>
              )}

              {props.cause.share_on_social_media && !userIsModerator() && (
                <Grid item xs={6} style={{ textAlign: "right" }}>
                  {/* <img
                    src="/assets/images/icons/facebook-red.png"
                    alt=""
                    className={classes2.share}
                  /> */}

                  <FacebookShareButton
                    url={`${window.location.href}`}
                    style={{ margin: "5px 10px" }}
                  >
                    <FacebookIcon size={36} borderRadius={8} />
                  </FacebookShareButton>

                  {/* <img
                    src="/assets/images/icons/twitter-red.png"
                    alt=""
                    className={classes2.share}
                  /> */}
                  <TwitterShareButton
                    url={`${window.location.href}`}
                    style={{ margin: "5px 10px" }}
                  >
                    <TwitterIcon size={36} borderRadius={8} />
                  </TwitterShareButton>

                  {/* <img
                    src="/assets/images/icons/link-red.png"
                    alt=""
                    className={classes2.share}
                  /> */}
                  <InstapaperShareButton
                    url={`${window.location.href}`}
                    style={{ margin: "5px 20px 5px 10px" }}
                  >
                    <InstapaperIcon size={36} borderRadius={8} />
                  </InstapaperShareButton>
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
