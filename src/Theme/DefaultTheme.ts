import { ThemeContextProps } from "./ThemeContextProps.ts";

export const DefaultTheme: ThemeContextProps = {
  palette: {
    primary: "#1976D2",
    secondary: "#9C27B0",
    text: {
      primary: "white",
      secondary: "white",
    },
  },
  spacing: (value) => (value * 4).toString() + "px",
};
