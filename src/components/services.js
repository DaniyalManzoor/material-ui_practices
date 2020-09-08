import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "./ui/buttonArrow";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import mobileAppIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";

const useStyle = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  csIcon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const Services = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid container direction="column">
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            marginTop: matchesSM ? "1em" : "2em",
          }}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="h2"
            gutterBottom
          >
            Services
          </Typography>
        </Grid>
        <Grid item>
          {/* ------- Mobile App Developement -------- */}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
            className={classes.serviceContainer}
            style={{ marginTop: matchesSM ? "1em" : "5em" }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : "left",
                width: matchesSM ? undefined : "30em",
              }}
            >
              <Typography variant="h4">iOS/Android app Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate Your Web Experience or create a standalone app{" "}
                {matchesSM ? null : <br />} either mobile platform.
              </Typography>
              <Button
                component={Link}
                to="/mobileapps"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More </span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
              <img
                className={classes.csIcon}
                src={mobileAppIcon}
                alt="Mobile App Icon"
                width="250em"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------- Custom software Services -------- */}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : "left",
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Enery. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital Solution, from investigation to{" "}
                <span className={classes.specialText}>celebration</span>
              </Typography>
              <Button
                component={Link}
                to="/customsoftwares"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More </span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.csIcon}
                src={customSoftwareIcon}
                alt="Customer Software Icon"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------- Websites Services -------- */}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : "left",
                width: matchesSM ? undefined : "30em",
              }}
            >
              <Typography variant="h4">Website Developement</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for search Engine, built for speed
              </Typography>
              <Button
                component={Link}
                to="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More </span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid
              item
              style={{
                marginRight: matchesSM ? 0 : "5em",
              }}
            >
              <img
                className={classes.csIcon}
                src={websitesIcon}
                alt="Website Icon"
                width="250em"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
