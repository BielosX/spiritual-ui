export interface ThemeContextProps {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    grey: {
      700: string;
    };
  };
  spacing: (value: number) => string;
}
