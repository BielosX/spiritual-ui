import { CSSProperties, FC } from "react";
import "./Button.css";
import { ButtonColor, ButtonProps, ButtonVariant } from "./ButtonProps.ts";
import { useThemeContext } from "../Theme/ThemeContext.ts";

export const Button: FC<ButtonProps> = ({
  children,
  color = ButtonColor.Primary,
  variant = ButtonVariant.Text,
  onClick,
}) => {
  const { palette, spacing } = useThemeContext();
  const style = {
    "--radius": spacing(1),
    "--padding": `${spacing(2)} ${spacing(3)} ${spacing(2)} ${spacing(3)}`,
    "--margin": spacing(1),
    "--primary-main-color": palette.primary.main,
    "--primary-dark-color": palette.primary.dark,
    "--primary-light-color": palette.primary.light,
    "--primary-contrast-color": palette.primary.contrastText,
    "--secondary-main-color": palette.secondary.main,
    "--secondary-dark-color": palette.secondary.dark,
    "--secondary-light-color": palette.secondary.light,
    "--secondary-contrast-color": palette.secondary.contrastText,
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
