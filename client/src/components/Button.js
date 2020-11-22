import React from "react";
import { Button as BootstrapButton, Spinner } from "react-bootstrap";

export const Button = ({
  children,
  onClick,
  disabled = false,
  inProgress = false,
  className = null,
  variant = "primary",
  size = "md",
}) => {
  return (
    <BootstrapButton
      variant={variant}
      onClick={onClick}
      disabled={disabled || inProgress}
      className={className}
      size={size}
    >
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        hidden={!inProgress}
      />
      {inProgress ? "Loading..." : children}
    </BootstrapButton>
  );
};
