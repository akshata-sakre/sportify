import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = ({ setRole }) => {
  const [lastLogin, setLastLogin] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedTime = localStorage.getItem('adminLastLogin');
    setLastLogin(storedTime);
  }, []);


const handleLogout = () => {
  localStorage.removeItem("role");
  setRole(null);   
  navigate("/");
};

  

  return (
    <div className="admin-wrapper">
      <div className="admin-page">

        <h1>Welcome! Admin </h1>
        <p className="last-login">
          Last Login: {lastLogin || 'First login'}
        </p>

      <div className="admin-stats">
  <div className="stat-box">
    <h2>12</h2>
    <p>Teams</p>
  </div>
  <div className="stat-box">
    <h2>34</h2>
    <p>Matches</p>
  </div>
  <div className="stat-box">
    <h2>5</h2>
    <p>Tournaments</p>
  </div>
  <div className="stat-box">
    <h2>320</h2>
    <p>Users</p>
  </div>
</div>

        <div className="admin-actions">
  <button onClick={() => navigate("/add-team")}>
  Add Team
</button>

<button onClick={() => navigate("/manage-teams")}>
  Manage Teams
</button>

<button onClick={() => navigate("/schedule-match")}>
            Schedule Match
          </button>

          <button onClick={() => navigate("/schedule-users")}>
            Schedule Users
          </button>

  <button className="logout" onClick={handleLogout}>
    Logout
  </button>
</div>

      </div>
    </div>
  );
};

export default Admin;