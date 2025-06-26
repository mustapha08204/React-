import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Success from "./components/Success";
import AllProjects from "./components/AllProjects"; // 👈 already imported
import Login from "./components/Login";
import Admin from "./components/Admin";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<HomePage />} />
        {/* Success page route */}
        <Route path="/success" element={<Success />} />
        {/* All Projects page route */}
        <Route path="/all-projects" element={<AllProjects />} /> />{" "}
        {/* 👈 Add this */}
        <Route path="/admin-login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
