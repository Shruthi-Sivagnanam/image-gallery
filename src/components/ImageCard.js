import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function ImageCard({ images }) {
  return (
    <div className="items-align-center">
      <Card className="m-3 shadow-lg p-3 bg-dark rounded">
        <a href={images.previewURL} target="blank">
          <Card.Img variant="top" src={images.webformatURL} height="200px" />
        </a>
        <Card.Body className="text-white">
          Photo by <span className="fw-bold">{images.user}</span>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Views: {images.views} </ListGroup.Item>
          <ListGroup.Item>Downloads: {images.downloads} </ListGroup.Item>
          <ListGroup.Item>Likes: {images.likes}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
