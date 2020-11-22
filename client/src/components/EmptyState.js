import React from "react";
import { Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const EmptyState = ({ goBackUrl }) => {
  return (
    <Row>
      <div
        className="mx-auto"
        style={{
          zIndex: "99",
          position: "absolute",
          top: "120px",
          left: "120px",
        }}
      >
        <h2>No Result found!</h2>
        <p>You're alone here...</p>
        <Link to={goBackUrl}>
          <ArrowRightCircle />
          <small> Click here, i will take you home..</small>
        </Link>
      </div>
      <img src="/images/empty-state.webp" alt="No data found!" width="100%" />
    </Row>
  );
};
