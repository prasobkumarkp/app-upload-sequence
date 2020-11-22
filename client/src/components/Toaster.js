import React from "react";
import { Toast } from "react-bootstrap";
import "./Toaster.scss";

export const Toaster = ({
  toast,
  onClose,
  className,
  autoClose = false,
  duration = 10000,
}) => {
  if (toast && autoClose) setTimeout(onClose, duration);
  return (
    <Toast
      key={new Date().toISOString()}
      show={toast !== null}
      onClose={onClose}
      animation={false}
      className={`toast-right ${className}`}
    >
      <Toast.Header>
        <strong className="mr-auto">Alert</strong>
      </Toast.Header>
      <Toast.Body>{toast}</Toast.Body>
    </Toast>
  );
};
