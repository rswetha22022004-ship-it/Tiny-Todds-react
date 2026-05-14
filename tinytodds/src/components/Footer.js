import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPinterest, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';
import logo from "../assets/Tiny-Todds-Therapy-Centre-.webp";


const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about-autism', label: 'About Autism' },
  { path: '/about-us', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* About */}
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <div className="footer-logo">
  <img src={logo} alt="Tiny Todds Logo" className="footer-logo-img" />
</div>
            </div>
            <p>
              The society today faces many health challenges. We provide compassionate, expert autism therapy and developmental support for children across Tamil Nadu.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/TinyToddsTherapyCare/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest"><FaPinterest /></a>
              <a href="https://www.instagram.com/tinytoddstherapycentre/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.youtube.com/channel/UCap6cC3CV2ZcLUBeGzo6GQw" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(({ path, label }) => (
                <li key={path}><Link to={path}>→ {label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-list">
              <a href="mailto:tinytoddstherapycare@gmail.com" className="footer-contact-item">
                <FaEnvelope />
                <span>tinytoddstherapycare@gmail.com</span>
              </a>
              <a href="tel:+919941350646" className="footer-contact-item">
                <FaPhone />
                <span>+91 99413 50646</span>
              </a>
              <a href="tel:+917299535600" className="footer-contact-item">
                <FaPhone />
                <span>+91 72995 35600</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 <a href="/">Tiny Todd's Therapy Care</a>. All Rights Reserved.</p>
          <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
