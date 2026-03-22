import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ role, setRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole(null);
    navigate("/");
  };

  return (
    <nav className="header-nav">
      <ul className="nav-left">
        <h1>Sportify</h1>

  
        {!role && (
          <>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </>
        )}

  
        {role === "user" && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li><Link to="/my-tickets">My Tickets</Link></li>
          </>
        )}

     
        {role === "admin" && (
          <>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/add-team">Add Team</Link></li>
            <li><Link to="/manage-teams">Manage Teams</Link></li>
            <li><Link to="/schedule-match">Schedule Match</Link></li>
          </>
        )}
      </ul>

      <ul className="nav-right">
        {!role && (
          <li><Link to="/">Login</Link></li>
        )}

        {role && (
          <>
            <li className="welcome-text">
              Welcome {role} 
            </li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;