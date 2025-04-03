import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  ...props
}) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <Button variant={variant} color={color} onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
