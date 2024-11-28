import { CSSProperties, FC, ReactNode } from "react";
import "./Backdrop.css";

export type BackdropProps = {
  children: ReactNode;
  open?: boolean;
  onClick?: () => void;
};

export const Backdrop: FC<BackdropProps> = ({ children, open, onClick }) => {
  const style = {
    "--display": open ? "flex" : "none",
  } as CSSProperties;
  return (
    <div
      style={style}
      className="SpiritualUiBackdrop-base"
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          onClick?.();
        }
      }}
    >
      {children}
    </div>
  );
};
