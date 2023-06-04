import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Container className="aboutsection">
      <Row>
        <Col>
          <Row md>
            <h1 className="abouttitle">Little Lemon</h1>
          </Row>
          <Row>
            <h2 className="location">Chicago</h2>
          </Row>
          <Row lg={7}>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist{" "}
            </p>
          </Row>
        </Col>
        <Row>
          <Image
            id="image1"
            height={320}
            src="./icons_assets/Mario and Adrian b.jpg"
            fluid
          />
        </Row>
      </Row>
    </Container>
  );
}

export default About;
