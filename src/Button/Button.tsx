import { CSSProperties, FC } from "react";
import "./Button.css";
import { ButtonColor, ButtonProps } from "./ButtonProps.ts";
import { useThemeContext } from "../Theme/ThemeContext.ts";

export const Button: FC<ButtonProps> = ({ children, color }) => {
  const { palette, spacing } = useThemeContext();
  const style = {
    "--radius": spacing(1),
    "--padding": `${spacing(2)} ${spacing(3)} ${spacing(2)} ${spacing(3)}`,
    "--margin": spacing(1),
  };
  const defaultButton = (
    <button
      style={
        {
          ...style,
          "--color": palette.primary,
          "--text-color": palette.text.primary,
        } as CSSProperties
      }
      className="SpiritualUiButton-colorPrimary SpiritualUiButton-base"
    >
      {children}
    </button>
  );
  switch (color) {
    case ButtonColor.Primary: {
      return defaultButton;
    }
    case ButtonColor.Secondary: {
      return (
        <button
          style={
            {
              ...style,
              "--color": palette.secondary,
              "--text-color": palette.text.secondary,
            } as CSSProperties
          }
          className="SpiritualUiButton-colorSecondary SpiritualUiButton-base"
        >
          {children}
        </button>
      );
    }
    default: {
      return defaultButton;
    }
  }
};
