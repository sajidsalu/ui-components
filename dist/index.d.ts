import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { TypographyProps } from '@mui/material/Typography';

declare const CustomButton: React.FC<ButtonProps>;

interface TitleProps extends TypographyProps {
    children: React.ReactNode;
}
declare const Title: React.FC<TitleProps>;

export { CustomButton, Title };
