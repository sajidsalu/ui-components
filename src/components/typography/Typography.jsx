import React from "react";
import Typography from "@mui/material/Typography";

const CustomTypography = ({
  children,
  variant = "body1",
  color = "textPrimary",
  ...props
}) => {
  return (
    <Typography variant={variant} color={color} {...props}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
