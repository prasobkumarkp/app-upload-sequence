import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { uploadApplication } from "../api/ApplicationAPI";
import { formatFileDetails } from "../utility/format";
import { Button } from "../components/Button";
import { InputFile } from "../components/InputFile";
import { InputText } from "../components/InputText";
import { Toaster } from "../components/Toaster";
import {
  AppIndicator,
  CardText,
  FileEarmark,
  ArrowRight,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const maxFileSizeMb = 40 * (1024 * 1024);
const minFileSizeKb = 500 * 1024;

const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [toast, setToast] = useState(null);
  const [inProgress, setInProgress] = useState(false);

  const handleFormSubmit = async () => {
    setToast(null);
    if (!validateUserInput()) return;
    setInProgress(true);

    const formData = createFormData();
    const response = await uploadApplication(formData);

    if (response.isSuccess) {
      clearForm();
      setToast(formatFileDetails(response.data.application));
      setInProgress(false);
    } else {
      setToast(response.message);
      setInProgress(false);
    }
  };

  const createFormData = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("file", file);

    return data;
  };

  const validateUserInput = () => {
    if (!(name && description && file)) {
      setToast("All fields are required");
      return false;
    }
    if (file.size < minFileSizeKb || file.size > maxFileSizeMb) {
      setToast("File size is limited to 500KB to 40MB");
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setFile(null);
  };

  return (
    <Row>
      <Toaster
        toast={toast}
        className="w-100"
        onClose={() => setToast(null)}
        autoClose={false}
      />
      <Col>
        <Form action="#">
          <InputText
            label={<AppIndicator />}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Application name"
          />
          <InputText
            label={<CardText />}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <InputFile
            label={<FileEarmark />}
            onChange={(e) => {
              const file = e.target.files[0];
              setFile(file);
              e.target.value = "";
            }}
            placeholder={file ? file.name : "Choose file"}
            accept=".apk"
          />
          <Row>
            <Col className="col-8">
              <Button
                onClick={handleFormSubmit}
                inProgress={inProgress}
                className="w-100"
              >
                Submit
              </Button>
            </Col>
            <Col className="col4">
              <Link to="/apps">
                <Button className="w-100" variant="secondary">
                  Apps {<ArrowRight />}
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default ApplicationForm;
