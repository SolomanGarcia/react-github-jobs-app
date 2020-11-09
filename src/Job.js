import React from "react";
import { Card } from "react-bootstrap";

export default function Job({ job }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.title>{job.title}</Card.title>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
