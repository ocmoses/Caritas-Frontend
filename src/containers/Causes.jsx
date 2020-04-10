import React, { Fragment, useEffect } from "react";
import { PrimaryAppBar } from "../commons";
import { Footer } from "../components";
import { useStyles } from "../helpers";
import { CausesTabs, SubscriptionBox } from "../components/sections";

const Causes = () => {
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
        <CausesTabs style={{ width: "100% !important", overflowX: "auto" }} />
        <div style={{ paddingBottom: "100px" }}>
          <SubscriptionBox />
        </div>

        <Footer />
      </main>
    </Fragment>
  );
};

export default Causes;
