import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './PageStyles.css';

const infoItems = [
  {
    icon: <FaPhone />,
    title: 'Phone Numbers',
    content: (
      <>
        <a href="tel:+919941350646">+91 99413 50646</a><br />
        <a href="tel:+917299535600">+91 72995 35600</a>
      </>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    content: <a href="mailto:tinytoddstherapycare@gmail.com">tinytoddstherapycare@gmail.com</a>,
  },
  {
    icon: <FaClock />,
    title: 'Working Hours',
    content: <p>Monday – Saturday<br />9:30 AM – 8:00 PM</p>,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Branches',
    content: <p>25+ branches across Tamil Nadu including Chennai, Coimbatore, and Nagercoil.</p>,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', child: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.phone) setSubmitted(true);
  };

  return (
    <main className="page-main">
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #fff8f5, #fff0eb)' }}>
        <div className="container">
          <span className="section-tag">Contact Us</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 12 }}>
            Get In Touch With Us
          </h1>
          <p style={{ color: 'var(--text-light)', maxWidth: 560, lineHeight: 1.7 }}>
            Have questions about our programs? Want to enroll your child? Reach out and our team will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container contact-layout">
          {/* Info */}
          <div>
            <span className="section-tag">Reach Us</span>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>We'd Love to Hear From You</h2>
            <div className="contact-info-list">
              {infoItems.map((item, i) => (
                <div className="contact-info-item" key={i}>
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            {submitted ? (
              <div className="form-success">
                ✅ Thank you! We'll contact you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Child's Age / Condition</label>
                  <input name="child" value={form.child} onChange={handleChange} placeholder="e.g., 5 years, Autism" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
