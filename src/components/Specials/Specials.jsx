import React from "react";
import Card from "react-bootstrap/Card";
function Specials() {
  return (
    <div>
      <h1>This Week's Specials</h1>
      <button>Menu</button>
      <div>
        {" "}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./icons_assets/greek salad.jpg" />
          <Card.Body>
            <Card.Title>Greek Salad</Card.Title>
            <Card.Text>
            The famous greek salad of crispy lettuce, peppers, olives are cut in Chicago style, feta cheese garnished with crunchy garlic and rosemary 
            </Card.Text>
            <button>Order Now!</button>
          </Card.Body>
        </Card>
      </div>
      <div>
        {" "}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./icons_assets/bruchetta.svg" />
          <Card.Body>
            <Card.Title>Bruschetta</Card.Title>
            <Card.Text>
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil
            </Card.Text>
            <button >Order Now!</button>
          </Card.Body>
        </Card>
      </div>
      <div>
        {" "}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./icons_assets/lemon dessert.jpg" />
          <Card.Body>
            <Card.Title>Lemon dessert</Card.Title>
            <Card.Text>
            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined
            </Card.Text>
            <button >Order Now!</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Specials;
