import { ReactNode } from "react";

export enum ButtonColor {
  Primary,
  Secondary,
}

export enum ButtonVariant {
  Text,
  Outlined,
  Contained,
}

export type ButtonProps = {
  children: ReactNode;
  color?: ButtonColor;
  variant?: ButtonVariant;
};
