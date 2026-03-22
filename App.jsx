
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Footer from './components/Footer'
import Admin from './pages/Admin'
import User from './pages/User'
import AddTeam from './pages/AddTeam'
import ManageTeams from './pages/ManageTeams'
import ScheduleMatch from './pages/ScheduleMatch'
import ScheduleUsers from './pages/ScheduleUsers'
import Matches from './pages/Matches'
import MyTickets from './pages/MyTickets'


function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <>
    <div className="App">
      <BrowserRouter>
 <Header role={role} setRole={setRole} />
        <Routes>
       
<Route
  path="/home"
  element={
    role === "user"
      ? <Home />
      : <Navigate to="/" />
  }
/>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
      <Route
          path="/"
          element={
            role === "admin" ? (
              <Navigate to="/admin" />
            ) : role === "user" ? (
              <Navigate to="/user" />
            ) : (
             <Login setRole={setRole} />
            )
          }
        />
<Route
  path="/"
  element={
    role === "admin" ? (
      <Navigate to="/admin" />
    ) : role === "user" ? (
      <Navigate to="/user" />
    ) : (
      <Login setRole={setRole} />
    )
  }
/>

<Route
  path="/admin"
  element={
    role === "admin"
      ? <Admin setRole={setRole} />
      : <Navigate to="/" />
  }
/>

{/* <Route
  path="/user"
  element={
    role === "user"
      ? <User setRole={setRole} />
      : <Navigate to="/" />
  }
/> */}
          <Route path="/add-team" element={<AddTeam />} />
          <Route path="/manage-teams" element={<ManageTeams />} />
          <Route path="/schedule-match" element={<ScheduleMatch />} />
          <Route path="/schedule-users" element={<ScheduleUsers />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/my-tickets" element={<MyTickets />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App