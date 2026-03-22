import React, { useState } from "react";

const ScheduleMatch = () => {
  const [match, setMatch] = useState({
    teamA: "",
    teamB: "",
    date: "",
    time: "",
    price: ""
  });

  const handleChange = (e) => {
    setMatch({ ...match, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const existingMatches =
    JSON.parse(localStorage.getItem("matches")) || [];

  const newMatch = {
    id: Date.now(),
    ...match
  };

  localStorage.setItem(
    "matches",
    JSON.stringify([...existingMatches, newMatch])
  );

  alert("Match Scheduled Successfully!");
};
  

  return (
    <div className="page-container">
      <h2>Schedule Match</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="teamA"
          placeholder="Team A"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="teamB"
          placeholder="Team B"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
        />

        <input
  type="number"
  name="price"
  placeholder="Ticket Price"
  onChange={handleChange}
  required
  />

        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default ScheduleMatch;