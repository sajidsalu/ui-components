import React from "react";
import { TypographyProps } from "@mui/material/Typography";
interface TitleProps extends TypographyProps {
    children: React.ReactNode;
}
declare const Title: React.FC<TitleProps>;
export default Title;
