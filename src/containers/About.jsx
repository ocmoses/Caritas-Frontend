import React, { Fragment, useEffect } from "react";
import { PrimaryAppBar } from "../commons";
import { Footer } from "../components";
import { useStyles } from "../helpers";
import {
  AboutHeaderSection,
  AboutSection,
  CausesSection,
  HowItWorksSection,
  StoriesSection
} from "../components/sections";

const About = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Home page";
  });

  return (
    <Fragment>
      <PrimaryAppBar
        position="fixed"
        className={classes.appbar}
      ></PrimaryAppBar>
      <main className={classes.main}>
        <AboutHeaderSection />
        <AboutSection />
        <CausesSection />
        <HowItWorksSection />
        <StoriesSection />
        <Footer />
      </main>
    </Fragment>
  );
};

export default About;
