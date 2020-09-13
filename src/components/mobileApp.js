import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import forwardArrow from "../assets/forwardArrow.svg";
import backArrow from "../assets/backArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import increaseEngagment from "../assets/increaseEngagement.svg";
import integrationAnimation from "../animations/integrationAnimation/data";
import CallToAction from "./ui/callToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const MobileApp = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "-3.5em", marginRight: "1em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/customsoftwares"
              onClick={() => {
                props.setSelectedIndex(1);
                props.setValue(1);
              }}
            >
              <img
                src={backArrow}
                alt="Back to Custom Software Developement page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              iOS/Mobile App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum in voluptate velit esse cillum dolore eu fugiat
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/websites"
              onClick={() => {
                props.setSelectedIndex(3);
                props.setValue(1);
              }}
            >
              <img
                src={forwardArrow}
                alt="forward to websites Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco labor
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "20em" }}
          />
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, nostrud exercitation ullamco labor
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{ marginBottom: "15em" }}
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          styel={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="tear-one-off sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={increaseEngagment} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>
      <CallToAction
        setValue={props.setValue}
        setSelectedIndex={props.setSelectedIndex}
      />
    </Grid>
  );
};
export default MobileApp;
