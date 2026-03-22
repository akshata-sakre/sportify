import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const User = ({ setRole }) => {
  const navigate = useNavigate(); 

 const handleLogout = () => {
  localStorage.removeItem("role");
  setRole(null);      
  navigate("/");
};

  return (
    <div className="user-wrapper">
      <div className="user-page">
        <h1>Welcome Users </h1>

        <div className="user-card">
          <h2>Your Profile</h2>
          <p><strong>Email:</strong> axtasakre@gamil.com</p>
          <p><strong>Role:</strong> User</p>
        </div>

        <div className="user-actions">
          <button onClick={() => navigate("/matches")}>
            View Matches
          </button>

          <button onClick={() => navigate("/my-tickets")}>
            My Tickets
          </button>

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;