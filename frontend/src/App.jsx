import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/Aboutus";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Services from "./components/Services";
import Listings from "./components/Listing";
import Agents from "./components/Agents";
import Agent1 from "./components/Agent1";
import Blog from "./components/Blog";
import Demos from "./components/Demos";
import Contact from "./components/Contact";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/melvin-blackwell" element={<Agent1 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;