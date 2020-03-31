import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { useStyles } from "../../helpers";
import { Story } from "../";
import { SubscriptionBox } from "./";

const stories = [
  {
    image: "/assets/images/classroom1.png",
    title: "Recent Stories - 1",
    story: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.`
  },
  {
    image: "/assets/images/classroom2.png",
    title: "Recent Stories - 2",
    story: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.`
  },
  {
    image: "/assets/images/sick-child.png",
    title: "Recent Stories - 3",
    story: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.`
  },
  {
    image: "/assets/images/smiling-kid.png",
    title: "Recent Stories - 4",
    story: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.`
  }
];

const StoriesSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.stories}>
      <Container>
        <Grid
          container
          spacing={3}
          style={{
            padding: 50,
            display: "flex"
          }}
        >
          {stories.map((story, index) => (
            <Grid item xs={2} md={6}>
              <Story image={story.image} title={story.title}>
                {story.story}
              </Story>
            </Grid>
          ))}
        </Grid>
        <SubscriptionBox />
      </Container>
    </section>
  );
};

export default StoriesSection;
