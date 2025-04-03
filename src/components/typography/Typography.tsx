import React, { ReactNode } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface CustomTypographyProps extends TypographyProps {
  children: ReactNode;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
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
