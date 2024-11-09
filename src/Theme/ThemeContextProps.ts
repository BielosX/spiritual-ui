export interface ThemeContextProps {
  palette: {
    primary: string;
    secondary: string;
    text: {
      primary: string;
      secondary: string;
    };
  };
  spacing: (value: number) => string;
}
