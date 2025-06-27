import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Success from "./components/Success";
import AllProjects from "./components/AllProjects";
import Login from "./components/Login";
import Admin from "./components/Admin";
import TeamSection from "./components/TeamSection";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TeamSection />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

// Protected route wrapper for admin pages
function AdminRoute({ isAdmin, children }) {
  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}

function App() {
  const [user, setUser] = useState(null); // {username, role} or null

  useEffect(() => {
    // Initialize AOS animation library
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, []);

  // You could add auto-login check here using localStorage/sessionStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Handler to update user after login
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Handler for logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/admin-login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/admin"
          element={
            <AdminRoute isAdmin={user?.role === "admin"}>
              <Admin user={user} onLogout={handleLogout} />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
