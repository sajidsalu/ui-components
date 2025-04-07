import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>Heyyy.click me</Button>;
};

export default CustomButton;
