import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import CompanyVerification from "./components/CompanyVerification";
import Dashboard from "./components/Dashboard";
import Map from "./components/Map";
import Chat from "./components/Chat";
import Review from "./components/Review";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* 네비게이션 바 */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/map">Map</Link>
        </nav>
        {/* 라우터 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<CompanyVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
