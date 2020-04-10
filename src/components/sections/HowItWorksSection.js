import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { FancyShape, FancyButton, useStyles } from "../../helpers";
import { HowItWorks } from "../";

const HowItWorksSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.howItWorks}>
      <Container>
        <FancyShape>How it works</FancyShape>
        <Typography
          variant="body1"
          component="p"
          style={{
            marginTop: 10,
            fontSize: "12px",
            width: "300px",
            marginBottom: "50px",
          }}
        >
          Here is how charity projects are vetted and Approved on Caritas.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={4} md={3} sm={4}>
            <HowItWorks
              image="/assets/images/icons/account-icon.png"
              step="Create an Account."
            />
          </Grid>
          <Grid item xs={4} md={3} sm={4}>
            <HowItWorks
              image="/assets/images/icons/upload-icon.png"
              step="Upload a Cause"
            />
          </Grid>
          <Grid item xs={4} md={3} sm={4}>
            <HowItWorks
              image="/assets/images/icons/category-icon.png"
              step="Cause gets Vetted by Professional in Category"
            />
          </Grid>
          <Grid item xs={4} md={3} sm={4}>
            <HowItWorks
              image="/assets/images/icons/vote-icon.png"
              step="Upon approval Cause is put up for voting"
            />
          </Grid>
          <Grid item xs={4} md={3} sm={4}>
            <HowItWorks
              image="/assets/images/icons/donations-icon.png"
              step="When Voting is Succesful Cause is made public to receive donations"
            />
          </Grid>
          <Grid item xs={4} md={3} sm={4}>
            <HowItWorks
              image="/assets/images/icons/contractor-icon.png"
              step="When Target donation amount is reached an approved contractor is chosen"
            />
          </Grid>
          <Grid item xs={6} md={3} style={{ marginLeft: "30px" }}>
            <Typography
              variant="h5"
              component="h5"
              style={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Have a Cause in Mind?
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ fontSize: "10px", marginBottom: "10px" }}
            >
              Tell your story or stories of people in your community that needs
              urgent help. All you need to do is to share the details after
              registration on this platform. We are committed to impacting your
              lives positively.
            </Typography>
            <FancyButton
              label="Sign Up to get Started"
              style={{ width: "100% !important" }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
