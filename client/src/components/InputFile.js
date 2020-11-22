import React from "react";
import { InputGroup } from "react-bootstrap";

export const InputFile = ({ label, onChange, accept, placeholder = null }) => {
  return (
    <InputGroup className="mb-3">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFile">
            {label}
          </span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile"
            aria-describedby="inputGroupFile"
            accept={accept}
            onChange={onChange}
          />
          <label
            className="custom-file-label text-truncate"
            htmlFor="inputGroupFile"
          >
            {placeholder}
          </label>
        </div>
      </div>
    </InputGroup>
  );
};
