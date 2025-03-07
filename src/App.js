import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    settings: {
      darkMode: false,
    },
  });

  useEffect(() => {
    document.body.className = user.settings.darkMode ? "dark-mode" : "light-mode";
  }, [user.settings.darkMode]);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/profile">Profile</Link>
          <Link className="nav-link text-white" to="/settings">Settings</Link>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
