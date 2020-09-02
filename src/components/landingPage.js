import React from "react";

import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";

import animationData from "../animations/landinganimation/data.js";

const useStyles = makeStyles((theme) => ({}));

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

  return <Lottie options={defaultOption} height="100%" width="100%" />;
};

export default LandingPage;
