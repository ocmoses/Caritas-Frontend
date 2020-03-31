import React, { Fragment } from "react";
// import ReactDom from "react-dom";
import { Container } from "@material-ui/core";
import { PrimaryAppBar } from "../commons";

const HowItWorks = () => {
  return (
    <Fragment>
      <PrimaryAppBar />
      <Container style={{ paddingTop: "200px" }}>
        <div>This is the HowItWorks page!</div>
      </Container>
    </Fragment>
  );
};

export default HowItWorks;
