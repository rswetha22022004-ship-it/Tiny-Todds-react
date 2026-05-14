import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram,
  FaYoutube, FaTwitter, FaBars, FaTimes
} from 'react-icons/fa';
import './Navbar.css';
import logo from "../assets/Tiny-Todds-Therapy-Centre-.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-autism', label: 'About Autism' },
    { path: '/about-us', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span><FaClock /> 9:30 am – 8:00 pm, Mon – Sat</span>
            <span><FaEnvelope /> tinytoddstherapycare@gmail.com</span>
          </div>
          <div className="topbar-right">
            <a href="https://www.facebook.com/TinyToddsTherapyCare/" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/tinytoddstherapycentre/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UCap6cC3CV2ZcLUBeGzo6GQw" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="logo">
          <img src={logo} alt="Tiny Todds Logo" className="navbar-logo" />
          </Link>

          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={location.pathname === path ? 'active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a href="tel:+919941350646" className="nav-call-btn">
                <FaPhone /> Call Now
              </a>
            </li>
          </ul>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
}
