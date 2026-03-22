import React, { useState } from "react";

const ScheduleUsers = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Scheduled:", user);
    alert("User Scheduled Successfully!");
  };

  return (
    <div className="page-container">
      <h2>Schedule User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          onChange={handleChange}
          required
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default ScheduleUsers;