import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Specials.css";

function Specials() {
  return (
    <Container>
      <Row id='specials'>
        <Col >
          <h1 id="specialstitle">This Week's Specials</h1>
        </Col>
        <Col >
          <button id='menubtn'>Menu</button>
        </Col>
      </Row>
      <Row >
        <Col>
        <Card id='card' style={{ width: "22rem" }}>
          <Card.Img variant="top" src="./icons_assets/greek salad.jpg" height={230}/>
          <Card.Body>
            <Card.Title>Greek Salad</Card.Title>
            <Card.Text>
              The famous greek salad of crispy lettuce, peppers, olives, feta cheese garnished with crunchy garlic and
              rosemary
            </Card.Text>
            <button>Order Now!</button>
          </Card.Body>
        </Card>
        </Col>
      <Col>
        <Card id='card' style={{ width: "22rem" }}>
          <Card.Img variant="top" src="./icons_assets/bruchetta.svg" height={230}/>
          <Card.Body>
            <Card.Title>Bruschetta</Card.Title>
            <Card.Text>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil
            </Card.Text>
            <button>Order Now!</button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id='card' style={{ width: "22rem"}}>
          <Card.Img variant="top" src="./icons_assets/lemon dessert.jpg" height={230}/>
          <Card.Body>
            <Card.Title>Lemon dessert</Card.Title>
            <Card.Text>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be imagined
            </Card.Text>
            <button>Order Now!</button>
          </Card.Body>
        </Card>
      </Col>
      </Row>
    </Container>
  );
}

export default Specials;
