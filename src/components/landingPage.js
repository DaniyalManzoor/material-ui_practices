import React from "react";

import Lottie from "react-lottie";
import ButtonArrow from "./ui/buttonArrow";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import animationData from "../animations/landinganimation/data.js";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br /> to the MidWest
            </Typography>
            <Grid container alignItems="center">
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Learn More
                  <ButtonArrow width="15px" height="15px" fill="red" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOption} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
