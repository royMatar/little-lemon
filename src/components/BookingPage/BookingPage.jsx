import React, { useState } from "react";
import Form from "../Form/Form";
import Container from "react-bootstrap/Container";
import './BookingPage.css';
import Image from "react-bootstrap/Image";

function BookingPage() {
  const [availableTimes] = useState([
    { time: "17:00", id: 1 },
    { time: "18:00", id: 2 },
    { time: "19:00", id: 3 },
    { time: "20:00", id: 4 },
    { time: "21:00", id: 5 },
    { time: "22:00", id: 6 },
  ]);
  return (
    <>
      <Container fluid className="bookingpage">
        <Container>
          <Form availableTimes={availableTimes}/>
        </Container>
        <Container>
        <Image src="../icons_assets/restaurant.jpg" id="imgrest" fluid/>
        </Container>
      </Container>
      
        
    </>
  );
}

export default BookingPage;
