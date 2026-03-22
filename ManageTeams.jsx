import React, { useEffect, useState } from "react";

const ManageTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const storedTeams =
      JSON.parse(localStorage.getItem("teams")) || [];
    setTeams(storedTeams);
  }, []);

  const deleteTeam = (id) => {
    const updatedTeams = teams.filter((team) => team.id !== id);
    setTeams(updatedTeams);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-page">
        <h1>Manage Teams</h1>

        {teams.length === 0 ? (
          <p>No teams added yet.</p>
        ) : (
          teams.map((team) => (
            <div key={team.id} className="user-card">
              <h2>{team.teamName}</h2>
              <p>City: {team.city}</p>
              <button onClick={() => deleteTeam(team.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageTeams;