import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Slide,
  Grid,
  Tabs,
  Tab,
  Zoom,
} from "@material-ui/core";
import { FancyShape, useStyles } from "../../helpers";
import { Colors } from "../../constants";
import { Link } from "react-router-dom";
import { CauseItem } from "../";
import { getAllCauses } from "../../services/cause.service";

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
                        dolore magna aliquyam erat, sed diam voluptua.`,
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
                        dolore magna aliquyam erat, sed diam voluptua.`,
  },
];

const CausesSection = () => {
  const classes = useStyles();

  const [tab, setTab] = useState(0);
  const [allCauses, setAllCauses] = useState([]);

  const handleTabChange = (value) => {
    setTab(value);
  };

  const fetchAllCauses = async () => {
    return await getAllCauses();
  };

  useEffect(() => {
    async function setTheCauses() {
      let returnedCauses = await fetchAllCauses();
      if (Array.isArray(returnedCauses)) setAllCauses(returnedCauses);
      else setAllCauses([]);
    }
    setTheCauses();
  }, []);

  return (
    <section className={classes.corona}>
      <Container>
        <Zoom in={true} timeout={3000} mountOnEnter>
          <Grid item container>
            <Grid item md={6} className={classes.causesSection}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.sectionTitle}
              >
                Coronavirus Food &amp; Medical Assistance Relief
              </Typography>
              <Typography
                variant="body1"
                component="p"
                style={{ fontSize: 14, marginBottom: 32, marginTop: 32 }}
              >
                As COVID-19 continues to spread in Africa, more individuals and
                communities are feeling the impact on their daily lives. Beyond
                the global health crisis, the coronavirus is having a severe
                economic impact on individuals, small businesses and medical
                organizations. There is an urgent need for medical supplies,
                basic food items, financial support for families under
                quarantine and quality healthcare is only increasing as more
                communities become affected by COVID-19. We are here to help,
                please register and log your cause and get speedy help from our
                Caritas team.
              </Typography>
              <FancyShape>Sign Up to get Started</FancyShape>
            </Grid>
            <Grid item md={5} className={classes.justCoronaImage}>
              <img
                src="/assets/images/corona.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Zoom>
        <Slide in={true} direction="up" timeout={3000} mountOnEnter>
          <Grid
            container
            style={{ paddingTop: "100px", paddingBottom: "200px" }}
          >
            <Typography
              variant="h6"
              component="h6"
              className={classes.sectionTitle}
            >
              Do the Five - Help stop Corona Virus
            </Typography>
            <Grid item style={{ display: "flex" }} xs={12}>
              <Precautions
                src="/assets/images/icons/hands.png"
                body="HANDS"
                direction="Wash them often"
              />
              <Precautions
                src="/assets/images/icons/elbow.png"
                body="ELBOW"
                direction="Cough into it"
              />
              <Precautions
                src="/assets/images/icons/face.png"
                body="FACE"
                direction="Don’t touch it"
              />
              <Precautions
                src="/assets/images/icons/distance.png"
                body="SPACE"
                direction="Keep safe distance"
              />
              <Precautions
                src="/assets/images/icons/home.png"
                body="HOME"
                direction="Stay if you can"
              />
            </Grid>
          </Grid>
        </Slide>
        <Slide in={true} direction="up" timeout={3000} mountOnEnter>
          <Grid container>
            <Grid item md={6}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.sectionTitle}
                style={{ marginBottom: "0px" }}
              >
                Ongoing Causes
              </Typography>
              <Typography
                variant="body2"
                component="p"
                style={{ marginBottom: "50px" }}
              >
                Here are the top causes for today
              </Typography>
            </Grid>
            <Grid item sm={12} md={6} style={{ textAlign: "right" }}>
              <Link to="/" style={{ float: "right" }}>
                See all
              </Link>
            </Grid>
            <Grid
              item
              md={12}
              style={{ marginBottom: "50px", overflowX: "auto" }}
            >
              <Tabs
                value={tab}
                indicatorColor="primary"
                textColor={Colors.appBlack}
                onChange={(tab, index) => handleTabChange(index)}
              >
                <Tab label="All" style={{ textTransform: "none" }} />
                <Tab label="Education" style={{ textTransform: "none" }} />
                <Tab label="Health" style={{ textTransform: "none" }} />
                <Tab label="Human Rights" style={{ textTransform: "none" }} />
                <Tab label="Infrastructure" style={{ textTransform: "none" }} />
              </Tabs>
              {tab === 0 && (
                <Grid
                  container
                  spacing={3}
                  style={{
                    padding: 50,
                    display: "flex",
                    flexWrap: "no-wrap !important",
                  }}
                >
                  {allCauses.map((cause, index) => (
                    <Grid item>
                      <CauseItem cause={cause} key={`cause-${cause._id}`}>
                        {cause.brief_description}
                      </CauseItem>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Slide>
      </Container>
    </section>
  );
};

const Precautions = (props) => {
  const theClasses = {
    root: {
      width: "200px",
      color: "white",
      textAlign: "center",
    },
    src: {
      display: "block",
      margin: "auto",
      height: "60px",
      marginBottom: 10,
    },
    body: {
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 12,
      color: "black",
      marginBottom: "0px",
    },
    direction: {
      margin: 0,
      fontSize: 10,
      color: Colors.appBlack,
    },
  };

  const { root, src, body, direction } = theClasses;

  return (
    <div style={root}>
      <img style={src} src={props.src} alt="" />
      <p style={body}>{props.body}</p>
      <p style={direction}>{props.direction}</p>
    </div>
  );
};

export default CausesSection;
