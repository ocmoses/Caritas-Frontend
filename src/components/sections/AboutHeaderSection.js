import React from "react";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import { useStyles, FancyButton } from "../../helpers";

const AboutHeaderSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.aboutHeader}>
      <Container>
        <Grid container>
          <Grid item md={6} style={{ paddingRight: "30px" }}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.sectionTitle}
              style={{ width: "400px" }}
            >
              Coronavirus Food &amp; Medical Assistance Relief…
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{
                color: "black",
                marginBottom: 16,
                fontSize: "12px",
                width: "450px"
              }}
            >
              As COVID-19 continues to spread in Africa, more individuals and
              communities are feeling the impact on their daily lives. Beyond
              the global health crisis, the coronavirus is having a severe
              economic impact on individuals, small businesses and medical
              organizations. There is an urgent need for medical supplies, basic
              food items, financial support for families under quarantine and
              quality healthcare is only increasing as more communities become
              affected by COVID-19. We are here to help, please register and log
              your cause and get speedy help from our Caritas team.
            </Typography>
            <Link to="/signup">
              <FancyButton label="Sign Up to get Started" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutHeaderSection;
