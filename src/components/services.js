import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyle = makeStyles((theme) => ({}));

const Services = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid container direction="column">
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
          {/* ------- Mobile App Developement -------- */}
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
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------- Websites Services -------- */}
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
            <Grid item>
              <img
                className={classes.csIcon}
                src={websitesIcon}
                alt="Website Icon"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
