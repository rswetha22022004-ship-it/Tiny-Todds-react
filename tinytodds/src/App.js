import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutAutism from './components/AboutAutism';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import logo from "./assets/Tiny-Todds-Therapy-Centre-.webp";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-autism" element={<AboutAutism />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}





export default App;
