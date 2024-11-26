import "./Modal.css";
import { useThemeContext } from "../Theme/ThemeContext.ts";
import { CSSProperties, FC, ReactNode } from "react";

export type ModalProps = {
  open?: boolean;
  onBackdropClick?: () => void;
  children?: ReactNode;
};

export const Modal: FC<ModalProps> = ({ open, onBackdropClick, children }) => {
  const { spacing } = useThemeContext();
  const style = {
    "--padding": spacing(2),
    "--display": open ? "flex" : "none",
  } as CSSProperties;
  return (
    <div
      style={style}
      className="SpiritualUiModal-backdrop"
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          onBackdropClick?.();
        }
      }}
    >
      <div className="SpiritualUiModal-base">{children}</div>
    </div>
  );
};
