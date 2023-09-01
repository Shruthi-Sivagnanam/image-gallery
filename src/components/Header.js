import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="shadow-lg p-3 mb-5 bg-white rounded">
        <Container>
          <Navbar.Brand href="/">Xplore</Navbar.Brand>
          <Navbar.Text>
            <i>One image speaks 1000 words.</i>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}
