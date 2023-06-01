import React from "react";
import Container from "react-bootstrap/Container";
import "./Header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <Container fluid id="container">
      <Container>
        <Row>
          <Col>
            <Row>
              <h1 id="herotitle">Little Lemon</h1>
            </Row>
            <Row>
              <h2 id="location">Chicago</h2>
            </Row>
            <Row>
              <p id="herotext">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist{" "}
              </p>
            </Row>
            <Row>
              <button id="rsrvbtn">Reserve a Table</button>
            </Row>
          </Col>
          <Col>
            <div className="imgcontainer">
              <Image
                src="./icons_assets/restauranfood.jpg"
                width={360}
                height={470}
                id="heroimg"
                fluid
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Header;
