import { ReactNode } from "react";

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
}

export enum ButtonVariant {
  Text = "text",
  Outlined = "outlined",
  Contained = "contained",
}

export type ButtonProps = {
  children: ReactNode;
  color?: ButtonColor;
  variant?: ButtonVariant;
  onClick?: () => void;
};
