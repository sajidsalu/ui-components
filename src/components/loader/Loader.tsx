import React from "react";
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";

interface LoaderProps extends CircularProgressProps {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 40, color = "primary", ...props }) => {
  return <CircularProgress size={size} color={color} {...props} />;
};

export default Loader;
