import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { useStyles } from "../../helpers";
import { Story } from "../";
import { SubscriptionBox } from "./";
import { Colors } from "../../constants";

const stories = [
  // {
  //   image: "/assets/images/classroom1.png",
  //   title: "Recent Stories - 1",
  //   story: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  //                       sed diam nonumy eirmod tempor invidunt ut labore et
  //                       dolore magna aliquyam erat, sed diam voluptua.`,
  // },
  // {
  //   image: "/assets/images/classroom2.png",
  //   title: "Recent Stories - 2",
  //   story: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  //                       sed diam nonumy eirmod tempor invidunt ut labore et
  //                       dolore magna aliquyam erat, sed diam voluptua.`,
  // },
  // {
  //   image: "/assets/images/sick-child.png",
  //   title: "Recent Stories - 3",
  //   story: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  //                       sed diam nonumy eirmod tempor invidunt ut labore et
  //                       dolore magna aliquyam erat, sed diam voluptua.`,
  // },
  // {
  //   image: "/assets/images/smiling-kid.png",
  //   title: "Recent Stories - 4",
  //   story: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  //                       sed diam nonumy eirmod tempor invidunt ut labore et
  //                       dolore magna aliquyam erat, sed diam voluptua.`,
  // },
];

const StoriesSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.stories}>
      <Container>
        <Typography
          variant="h5"
          component="h5"
          style={{
            color: Colors.appRed,
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Success Stories
        </Typography>
        <Grid
          container
          spacing={3}
          style={{
            display: "flex",
          }}
        >
          {stories.length > 0 &&
            stories.map((story, index) => (
              <Grid item xs={12} md={6}>
                <Story image={story.image} title={story.title}>
                  {story.story}
                </Story>
              </Grid>
            ))}
          {stories.length === 0 && (
            <div
              style={{
                backgroundColor: "rgba(255,255,255,.5)",
                boxShadow: "2px 2px 5px rgba(0,0,0,.2)",
                borderRadius: "10px",
                padding: "16px",
                width: "300px",
                display: "block",
                margin: "auto",
              }}
            >
              Many causes are currently undergoing review post launching of this
              platform and once users' stories have been documented. This
              section will be updated.
            </div>
          )}
        </Grid>
        <SubscriptionBox />
      </Container>
    </section>
  );
};

export default StoriesSection;
