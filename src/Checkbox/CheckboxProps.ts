export enum CheckboxColor {
  Primary = "primary",
  Secondary = "secondary",
}

export type CheckboxProps = {
  color?: CheckboxColor;
  checked?: boolean;
};