import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export const InputText = ({
  label,
  value,
  onChange,
  placeholder = null,
  textArea = false,
}) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="app-name">{label}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={value}
        as={textArea ? "textarea" : "input"}
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="app-name"
        onChange={onChange}
      />
    </InputGroup>
  );
};
