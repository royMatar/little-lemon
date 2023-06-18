import React, { useState, useReducer } from "react";
import Form from "../Form/Form";
import Container from "react-bootstrap/Container";
import "./BookingPage.css";
import Image from "react-bootstrap/Image";

const availableTimesReducer = (availableTimes, action) => {
  // Update availableTimes based on the selected date
  // For now, returning the same available times regardless of the date

  if (action.type === "UPDATE_TIMES") {
    return [
      { time: "17:00", id: 1 },
      { time: "18:00", id: 2 },
      { time: "19:00", id: 3 },
      { time: "20:00", id: 4 },
      { time: "21:00", id: 5 },
      { time: "22:00", id: 6 },

    ];
  }
  return availableTimes;
};

function BookingPage() {
  function updateTimes() {
    dispatch({type: "UPDATE_TIMES"})
  }

  const initializeTimes = [
    { time: "17:00", id: 1 },
    { time: "18:00", id: 2 },
    { time: "19:00", id: 3 },
    { time: "20:00", id: 4 },
    { time: "21:00", id: 5 },
    { time: "22:00", id: 6 },
    { time: "23:00", id: 7 },
  ];

  const[availableTimes, dispatch]=useReducer(availableTimesReducer, initializeTimes);

  return (
    <>
      <Container fluid className="bookingpage">
        <Container>
          <Form
            updateTimes={updateTimes}
            availableTimes={availableTimes}
          />
        </Container>
        <Container>
          <Image src="../icons_assets/restaurant.jpg" id="imgrest" fluid />
        </Container>
      </Container>
    </>
  );
}

export default BookingPage;
