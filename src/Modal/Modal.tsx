import "./Modal.css";
import { useThemeContext } from "../Theme/ThemeContext.ts";
import { CSSProperties, FC, ReactNode } from "react";
import { Backdrop } from "../Backdrop/Backdrop.tsx";

export type ModalProps = {
  open?: boolean;
  onBackdropClick?: () => void;
  children?: ReactNode;
};

export const Modal: FC<ModalProps> = ({ open, onBackdropClick, children }) => {
  const { spacing } = useThemeContext();
  const style = {
    "--padding": spacing(2),
  } as CSSProperties;
  return (
    <Backdrop onClick={onBackdropClick} open={open}>
      <div style={style} className="SpiritualUiModal-base">
        {children}
      </div>
    </Backdrop>
  );
};
