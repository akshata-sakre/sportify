import React, { useEffect, useState } from "react";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("matches")) || [];
    setMatches(stored);
  }, []);

  const bookTicket = (match) => {
    const existingTickets =
      JSON.parse(localStorage.getItem("tickets")) || [];

    const newTicket = {
      id: Date.now(),
      ...match
    };

    localStorage.setItem(
      "tickets",
      JSON.stringify([...existingTickets, newTicket])
    );

    alert("Ticket Booked Successfully 🎟");
  };

  return (
    <div className="page-container">
      <h1>Upcoming Matches</h1>

      {matches.length === 0 ? (
        <p>No matches scheduled.</p>
      ) : (
        matches.map((m) => (
          <div key={m.id} className="user-card">
            <h2>{m.teamA} vs {m.teamB}</h2>
            <p>Date: {m.date}</p>
            <p>Time: {m.time}</p>
            <p>Price: ₹{m.price}</p>
            <button onClick={() => bookTicket(m)}>
              Book Ticket
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Matches;