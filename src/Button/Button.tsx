import { CSSProperties, FC } from "react";
import "./Button.css";
import { ButtonColor, ButtonProps, ButtonVariant } from "./ButtonProps.ts";
import { useThemeContext } from "../Theme/ThemeContext.ts";
import { useCommonCssProperties } from "../hooks/useCommonCssProperties/useCommonCssProperties.ts";

export const Button: FC<ButtonProps> = ({
  children,
  color = ButtonColor.Primary,
  variant = ButtonVariant.Text,
  onClick,
}) => {
  const { spacing } = useThemeContext();
  const cssProperties = useCommonCssProperties();
  const style = {
    "--radius": spacing(1),
    "--padding": `${spacing(2)} ${spacing(3)} ${spacing(2)} ${spacing(3)}`,
    "--margin": spacing(1),
    ...cssProperties,
  } as CSSProperties;
  const classes: Array<string> = [
    "SpiritualUiButton-base",
    `SpiritualUiButton-${color}`,
    `SpiritualUiButton-${variant}`,
  ];
  return (
    <button onClick={onClick} style={style} className={classes.join(" ")}>
      {children}
    </button>
  );
};
