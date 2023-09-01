import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Spinner animation="grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
