import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const clearForm = () => {
    setName("");
    setComment("");
    setTable("");
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table Reserved!");
    clearForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} />
      </label>
      <label>
        <input type="radio" value={table} />
        Indoor
      </label>
      <br></br>
      <label>
        <input type="radio" value={table} />
        Outdoor
      </label>
      <br></br>
      <label htmlFor="res-date">
        Date:
        <input type="date" id="res-date" value={date} />
      </label>
      <label htmlFor="res-time">Time:</label>
      <select id="res-time" value={time}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">
        Number of guests:
        <input type="range" id="guests" value={guests} />
      </label>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} />
      <label>
        Comments
        <input type="text" value={comment} />
      </label>
      <input type="submit" value="Reserve" />
    </form>
  );
}

export default Form;
