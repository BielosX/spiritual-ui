import { ThemeContextProps } from "./ThemeContextProps.ts";

export const DefaultTheme: ThemeContextProps = {
  palette: {
    primary: {
      light: "#42a5f5",
      main: "#1976d2",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ba68c8",
      main: "#9c27b0",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
  },
  spacing: (value) => (value * 4).toString() + "px",
};
