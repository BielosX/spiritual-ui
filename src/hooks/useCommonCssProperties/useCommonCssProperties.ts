import { useThemeContext } from "../../Theme/ThemeContext.ts";
import { CSSProperties } from "react";

export const useCommonCssProperties: () => CSSProperties = () => {
  const { palette } = useThemeContext();
  return {
    "--primary-main-color": palette.primary.main,
    "--primary-dark-color": palette.primary.dark,
    "--primary-light-color": palette.primary.light,
    "--primary-contrast-color": palette.primary.contrastText,
    "--secondary-main-color": palette.secondary.main,
    "--secondary-dark-color": palette.secondary.dark,
    "--secondary-light-color": palette.secondary.light,
    "--secondary-contrast-color": palette.secondary.contrastText,
    "--grey-700-color": palette.grey["700"],
  } as CSSProperties;
};
