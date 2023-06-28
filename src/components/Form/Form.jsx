import React, { useState, useEffect } from "react";
import "./Form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Form() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [fetchedTimes, setFetchedTimes] = useState([]);

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
    setDate(e.target.value);
  };

  useEffect(() => {
    if (date) {
      const times = fetchAPI(date);
      setFetchedTimes(times);
    }
  }, [date]);

  const getIsFormValid = () => {
    return name && email && date;
  };

  const formData = { name, email, date, time, occasion, comment, guests };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    console.log(formData);
    alert("Thanks " + name + ", your table is reserved");
    submitAPI(formData);
  };

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    const d = new Date(date);
    let day = d.getDate();
    let result = [];
    let random = seededRandom(day);

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }

    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <h1 id="herotitle">Reserve a Table</h1>
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
            {fetchedTimes.map((time) => (
              <option key={time}>{time}</option>
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
            <option></option>
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
