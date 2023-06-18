import React, { useReducer, useState, useEffect } from "react";
import "./Form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Form({ availableTimes, updateTimes }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  const clearForm = () => {
    setName("");
    setComment("");
    setDate("");
    setGuests("");
    setOccasion("");
    setEmail("");
    setTime("");
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes();
  };

  const getIsFormValid = () => {
    return name && email && date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks " + name + ", your table is reserved");
    clearForm();
    console.log({ name, email, date, time });
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <Row>
        <Col>
          <label htmlFor="name">
            Name: <sup>*</sup>
            <input
              type="text"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </Col>
        <Col>
          <label htmlFor="res-date">
            Date: <sup>*</sup>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="guests">
            Number of guests: <sup>*</sup> <span>{guests}</span>
            <input
              type="range"
              id="guests"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </label>
        </Col>
        <Col>
          <label htmlFor="res-time">Time:</label>
          <select id="res-time" onChange={(e) => setTime(e.target.value)}>
            {availableTimes.map((f) => (
              <option key={f.key}>{f.time}</option>
            ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="occasion">Occasion: </label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>
        </Col>
        <Col>
          <label htmlFor="email">
            Email: <sup>*</sup>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="comment">
            Comments:
            <input
              type="text"
              value={comment}
              id="comment"
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <input
          type="submit"
          value="Reserve"
          disabled={!getIsFormValid()}
          id="rsrvbtn"
          onClick={handleSubmit}
        />
      </Row>
    </form>
  );
}

export default Form;
