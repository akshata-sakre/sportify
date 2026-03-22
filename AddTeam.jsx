import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeam = {
      id: Date.now(),
      teamName,
      city,
    };

    const existingTeams =
      JSON.parse(localStorage.getItem("teams")) || [];

    localStorage.setItem(
      "teams",
      JSON.stringify([...existingTeams, newTeam])
    );

    alert("Team Added Successfully!");
    navigate("/manage-teams");
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-page">
        <h1>Add Team</h1>

        <form onSubmit={handleSubmit} className="login-card">
          <input
            type="text"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <button type="submit">Add Team</button>
        </form>
      </div>
    </div>
  );
};

export default AddTeam;