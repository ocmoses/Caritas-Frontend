import React, { Fragment, useEffect, useState } from "react";
import { PrimaryAppBar } from "../commons";
import { Footer } from "../components";
import { useStyles } from "../helpers";
import { SubscriptionBox, ACauseHeader } from "../components/sections";
import { CauseItem } from "../components";
import { useParams } from "react-router-dom";
import { Grid, Typography, Container, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";

const causes = [
  {
    id: 2,
    image: "/assets/images/classroom1.png",
    category: "Health",
    title: "Saint Johns School Needs Renovation",
    currency: "$",
    contribution: 200000,
    target: 400000,
    desc: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.`
  },
  {
    id: 3,
    image: "/assets/images/classroom1.png",
    category: "Health",
    title: "Saint Johns School Needs Renovation",
    currency: "$",
    contribution: 200000,
    target: 400000,
    desc: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.`
  }
];

const moreStyles = makeStyles(theme => ({
  tab1LeftImage: {
    height: "400px",
    backgroundImage: "url('/assets/images/wheel-chair-lady.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  tab1TopRightImage: {
    backgroundImage: "url('/assets/images/surgeons-theater.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50%",
    margin: "0px !important"
  },
  tab1BottomRightImage: {
    backgroundImage: "url('/assets/images/surgeon-testing.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50%",
    margin: "0px !important"
  }
}));

const ACausePage = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = value => {
    setTab(value);
  };
  const classes = useStyles();
  const params = useParams();
  const id = params.id;
  const classes2 = moreStyles();

  console.log("The param id", id);
  console.log("causes", causes);

  useEffect(() => {
    //normally, we will query here to set the cause
    document.title = "A Cause";
  });

  return (
    <Fragment>
      <PrimaryAppBar
        position="fixed"
        className={classes.appbar}
      ></PrimaryAppBar>
      <main className={classes.main}>
        <ACauseHeader cause={causes[parseInt(id) - 1]} />
        <Container>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor={Colors.appBlack}
            onChange={(tab, index) => handleTabChange(index)}
            variant="fullWidth"
          >
            <Tab
              label="Charity Information"
              style={{ textTransform: "none" }}
            />
            <Tab
              label="Additional Information"
              style={{ textTransform: "none" }}
            />
            <Tab label="Comments/reviews" style={{ textTransform: "none" }} />
          </Tabs>
          {tab == 0 && (
            <div style={{ paddingTop: "50px" }}>
              <Typography
                variant="body1"
                component="p"
                style={{ paddingBottom: "50px" }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet.
              </Typography>
              <Grid container spacing={3} style={{ marginBottom: "100px" }}>
                <Grid item xs={12} md={7}>
                  <div className={classes2.tab1LeftImage}></div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  style={{
                    margin: "0px !important",
                    padding: "0px !important"
                  }}
                >
                  <div className={classes2.tab1TopRightImage}></div>
                  <div className={classes2.tab1BottomRightImage}></div>
                </Grid>
              </Grid>
            </div>
          )}
        </Container>
        <Container>
          <Typography
            varant="h5"
            component="h5"
            style={{ color: Colors.appRed, fontWeight: "bold" }}
          >
            Similar Causes
          </Typography>
          <Grid
            container
            spacing={3}
            style={{
              padding: 50,
              display: "flex",
              flexWrap: "no-wrap !important"
            }}
          >
            {causes.map((cause, index) => (
              <Grid item>
                <CauseItem cause={cause} key={`cause-${cause.id}`}>
                  {cause.desc}
                </CauseItem>
              </Grid>
            ))}
          </Grid>
        </Container>

        <SubscriptionBox />
        <Footer />
      </main>
    </Fragment>
  );
};

export default ACausePage;
