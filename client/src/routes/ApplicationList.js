import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { deleteApplication, getApplications } from "../api/ApplicationAPI";
import { DELETED_SUCCESSFULLY } from "../constants/Messages";
import { ApplicationCard } from "../components/ApplicationCard";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";
import { Toaster } from "../components/Toaster";
import { ArrowLeft } from "react-bootstrap-icons";
import "./ApplicationList.scss";

const ApplicationList = () => {
  const [applications, setApplications] = useState(null);
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleShowApps();
  }, []);

  const handleShowApps = async () => {
    setIsLoading(true);
    const status = await getApplications();
    if (status.isSuccess) {
      setApplications(status.data.applications);
      setIsLoading(false);
    } else {
      setToast(status.message);
      setIsLoading(false);
    }
  };

  const handleDeleteApp = async (id) => {
    setToast(null);
    applications.find((app) => app._id === id).deleting = true;
    const status = await deleteApplication(id);
    if (status.isSuccess) {
      const apps = applications.filter((app) => app._id !== id);
      setApplications(apps);
      setToast(DELETED_SUCCESSFULLY);
    } else {
      setToast(status.message);
      applications.find((app) => app._id === id).deleting = false;
    }
  };

  return (
    <div className="application-list">
      <Toaster
        toast={toast}
        className="w-100"
        onClose={() => setToast(null)}
        autoClose={true}
      />
      <Row
        className="ml-2 mb-2"
        hidden={!(applications && applications.length)}
      >
        <Link to="/">
          <Button>
            <ArrowLeft /> Back
          </Button>
        </Link>
      </Row>
      <Row>
        <Col className="d-inline-flex flex-wrap">
          {applications &&
            applications.map((app) => (
              <ApplicationCard
                key={app._id}
                application={app}
                onDelete={() => handleDeleteApp(app._id)}
                isDeleted={app.isDeleted}
              />
            ))}
          {!(applications && applications.length) && !isLoading ? (
            <EmptyState goBackUrl="/" />
          ) : null}
        </Col>
      </Row>
    </div>
  );
};
export default ApplicationList;
