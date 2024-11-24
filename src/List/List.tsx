import { CSSProperties, FC, ReactElement } from "react";
import "./List.css";
import { useThemeContext } from "../Theme/ThemeContext.ts";

export type ListProps = {
  children: ReactElement[];
};

export type ListItemProps = {
  children: ReactElement[] | ReactElement;
}

export type ListItemTextProps = {
  children: string;
};

export type ListItemIconProps = {
  children: ReactElement;
};

export const ListItemIcon: FC<ListItemIconProps> = ({children}) => {
  return (
    <div className="SpiritualUiListItemIcon-base">
      {children}
    </div>
  );
}

export const ListItemText: FC<ListItemTextProps> = ({children}) => {
  return (
    <span>
      {children}
  </span>
  );
};

export const ListItem: FC<ListItemProps> = ({children}) => {
  return (
    <li>
    {children}
  </li>
  );
};

export const List: FC<ListProps> = ({children}) => {
  const { spacing } = useThemeContext();
  const style = {
    "--icon-margin-right": spacing(1),
  } as CSSProperties;
  return (
    <ul style={style}>
    {children}
  </ul>
  );
};