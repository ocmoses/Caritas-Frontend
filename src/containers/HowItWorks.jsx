import React, { Fragment, useEffect } from "react";
import { PrimaryAppBar } from "../commons";
import { Footer } from "../components";
import { useStyles } from "../helpers";

import { HowItWorksSection, StoriesSection } from "../components/sections";

const HowItWorks = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Home page";
  }, []);

  return (
    <Fragment>
      <PrimaryAppBar
        position="fixed"
        className={classes.appbar}
      ></PrimaryAppBar>
      <main className={classes.main}>
        <HowItWorksSection />
        <StoriesSection />
        <Footer />
      </main>
    </Fragment>
  );
};

export default HowItWorks;
