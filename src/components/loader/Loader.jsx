import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({ size = 40, color = "primary" }) => {
  return <CircularProgress size={size} color={color} />;
};

export default Loader;
