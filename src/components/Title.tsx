import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface TitleProps extends TypographyProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return (
    <Typography variant="h4" gutterBottom {...props}>
      {children}
    </Typography>
  );
};

export default Title;
