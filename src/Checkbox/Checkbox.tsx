import "./Checkbox.css";
import { CSSProperties, FC } from "react";
import { useCommonCssProperties } from "../hooks/useCommonCssProperties/useCommonCssProperties.ts";
import { CheckboxColor, CheckboxProps } from "./CheckboxProps.ts";

export const Checkbox: FC<CheckboxProps> = ({color = CheckboxColor.Primary, checked}) => {
  const cssProperties = useCommonCssProperties();
  const style = {
    ...cssProperties,
  } as CSSProperties;
  const classes: Array<string> = [
    "SpiritualUiCheckbox-base",
    `SpiritualUiCheckbox-${color}`,
  ];
  return <input type="checkbox" checked={checked} style={style} className={classes.join(" ")}/>
}