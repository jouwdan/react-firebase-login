import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Register from "./Pages/Register";
import Reset from "./Pages/Reset";
import Dashboard from "./Pages/Dashboard";

import Navigation from "./Components/nav/navigation";

function App() {
  return (
    <Router>
      <div
        className="flex flex-col justify-between bg-base-100"
        data-theme="dark"
      >
        <Navigation />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
