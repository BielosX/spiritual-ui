import { ReactNode } from "react";

export enum ButtonColor {
  Primary,
  Secondary,
}

export type ButtonProps = {
  children: ReactNode;
  color?: ButtonColor;
};
