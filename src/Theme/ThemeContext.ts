import { createContext, useContext } from "react";
import { DefaultTheme } from "./DefaultTheme.ts";

export const ThemeContext = createContext(DefaultTheme);
export const useThemeContext = () => useContext(ThemeContext);
