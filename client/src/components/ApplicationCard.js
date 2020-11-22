import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { formatBytes } from "../utility/file";
import { Button } from "./Button";
import { Trash } from "react-bootstrap-icons";

export const ApplicationCard = ({ application, onDelete }) => {
  if (!application) return;
  const { name, description, version, size } = application || {};
  return (
    <Card style={{ width: "24rem" }} className="m-2">
      <Card.Body className="p-2">
        <Row>
          <Col className="col-4">
            <img
              src="https://picsum.photos/seed/picsum/90/90"
              className="rounded float-left"
              alt={name}
            />
          </Col>
          <Col className="col-8">
            <div className="mb-2 text-truncate">{name}</div>
            <div className="small text-muted">{description}</div>
            <div className="text-muted text-truncate">
              <small>Version : </small>
              <small>{version}</small>
            </div>
          </Col>
        </Row>
        <hr className="m-2" />
        <Row>
          <Col className="col-8">
            <div className="text-muted">
              <small>Size : </small>
              <small>{formatBytes(size)}</small>
            </div>
          </Col>
          <Col className="col-4">
            <Button
              onClick={onDelete}
              size="sm"
              variant="secondary"
              className="float-right"
            >
              <Trash />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
