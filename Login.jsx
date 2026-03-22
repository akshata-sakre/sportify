import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ({ setRole }) => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const users = [
    { id: 1, email: 'axtasakre@gmail.com', password: 'Axta', role: 'user' },
    { id: 2, email: 'nya@gamil.com', password: 'niyander', role: 'user' },
    { id: 3, email: 'leo@gamil.com', password: 'leo', role: 'user' },
    { id: 4, email: 'admin@gmail.com', password: 'admin', role: 'admin' }
  ];

  const handlelogin = (e) => {
    e.preventDefault();

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

if (found) {
  alert("Login Successful");
 localStorage.setItem("role", found.role);
    setRole(found.role);

  if (found.role === "admin") {

    localStorage.setItem(
      "adminLastLogin",
      new Date().toLocaleString()
    );

    navigate("/admin");

  } else {
    navigate("/home");
  }

} else {
  alert("Incorrect Login Credentials");
}
  }

  return (
    <div className="login-page">
      <h1>Login</h1>

      <form className="login-card" onSubmit={handlelogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setMail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
