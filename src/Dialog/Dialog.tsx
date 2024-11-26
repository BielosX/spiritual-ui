import { Modal, ModalProps } from "../Modal/Modal.tsx";
import "./Dialog.css";
import { useThemeContext } from "../Theme/ThemeContext.ts";
import { CSSProperties, FC } from "react";

export const Dialog: FC<ModalProps> = ({ open, children, onBackdropClick }) => {
  const { spacing } = useThemeContext();
  const style = {
    "--border-radius": spacing(1),
  } as CSSProperties;
  return (
    <div style={style}>
      <Modal open={open} onBackdropClick={onBackdropClick}>
        {children}
      </Modal>
    </div>
  );
};
