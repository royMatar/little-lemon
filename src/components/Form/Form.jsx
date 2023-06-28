import React, { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [fetchedTimes, setFetchedTimes] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [agreeChecked, setAgreeChecked] = useState(false);

  const clearForm = () => {
    setName("");
    setComment("");
    setDate("");
    setGuests("");
    setOccasion("");
    setEmail("");
    setTime("");
    setFetchedTimes([]);
    setFormErrors({});
    setAgreeChecked(false);
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
    return name && email && date && agreeChecked;
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = "Please enter your name.";
    } else if (name.length < 3 || name.length > 15) {
      errors.name = "Name must be between 2 and 15 characters.";
    }

    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!date) {
      errors.date = "Please select a date.";
    }

    if (!guests) {
      errors.guests = "Please select the number of guests.";
    }

    if (!agreeChecked) {
      errors.agree = "Please agree to the cancellation policy.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formData = { name, email, date, time, occasion, comment, guests };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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

  const handleAgreeChange = (e) => {
    setAgreeChecked(e.target.checked);
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <h1 id="herotitle">Reserve a Table</h1>
      <div>
        <label htmlFor="name">
          Name: <sup>*</sup>
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            required
            minLength={3}
            maxLength={15}
          />
          {formErrors.name && <div className="error">{formErrors.name}</div>}
        </label>
      </div>
      <div>
        <label htmlFor="res-date">
          Date: <sup>*</sup>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />
          {formErrors.date && <div className="error">{formErrors.date}</div>}
        </label>
      </div>

      <div>
        <label htmlFor="res-time">
          Time:
          <select id="res-time" onChange={(e) => setTime(e.target.value)}>
            {fetchedTimes.map((time) => (
              <option key={time} required>
                {time}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email: <sup>*</sup>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {formErrors.email && <div className="error">{formErrors.email}</div>}
        </label>
      </div>
      <div>
        <label htmlFor="occasion">
          Occasion:
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Dinner</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="guests">
          Number of guests: <sup>*</sup> <span>{guests}</span>
          <input
            type="range"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
          {formErrors.guests && (
            <div className="error">{formErrors.guests}</div>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="comment">
          Comments:
          <input
            type="text"
            value={comment}
            id="comment"
            onChange={(e) => setComment(e.target.value)}
            maxLength="50"
          />
        </label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={agreeChecked}
          onChange={handleAgreeChange}
        />
        <label htmlFor="agree" className="checkbox-label">
        * I agree to the cancellation policy
        </label>
      </div>
      {formErrors.agree && <div className="error">{formErrors.agree}</div>}
      <div>
        <input
          type="submit"
          value="Reserve"
          // disabled={!getIsFormValid()}
          id="rsrvbtn"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Form;
