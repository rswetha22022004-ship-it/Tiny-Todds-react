import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './PageStyles.css';

const services = [
  { icon: '🧩', title: 'Applied Behavior Analysis (ABA)', desc: 'ABA therapy is one of the most effective evidence-based treatments for autism. Our certified BCBA therapists design individualized programs to improve social, communication, and behavioral skills.' },
  { icon: '💬', title: 'Speech & Language Therapy', desc: 'Our speech-language pathologists work with children to develop verbal and non-verbal communication skills, improve articulation, and build language comprehension.' },
  { icon: '🖐️', title: 'Occupational Therapy', desc: 'We help children develop fine motor skills, sensory processing, self-care, and daily living abilities to improve independence and participation in everyday activities.' },
  { icon: '🧘', title: 'Sensory Integration Therapy', desc: 'Many children with autism have sensory sensitivities. Our sensory integration programs help children process and respond to sensory information more effectively.' },
  { icon: '📚', title: 'Learning Disability Support', desc: 'Tailored academic and cognitive support programs to help children with dyslexia, dyscalculia, ADHD, and other learning challenges reach their academic potential.' },
  { icon: '🧠', title: 'ADHD Intervention', desc: 'Structured, evidence-based interventions to help children with Attention Deficit Hyperactivity Disorder improve focus, impulse control, and organizational skills.' },
  { icon: '👨‍👩‍👧', title: 'Parent Training & Support', desc: 'We train and support parents with strategies to extend therapy at home, manage challenging behaviors, and build stronger bonds with their children.' },
  { icon: '🏫', title: 'School Readiness Program', desc: 'A comprehensive program to prepare children for mainstream school by building social, academic, and behavioral skills required for a classroom environment.' },
  { icon: '🎨', title: 'Play & Art Therapy', desc: 'Creative therapies using art, play, and music to help children express themselves, build social skills, and process emotions in a fun, non-threatening environment.' },
];

export default function Services() {
  return (
    <main className="page-main">
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #f0f7ff, #e8f4ff)' }}>
        <div className="container page-hero-inner">
          <div className="page-hero-text">
            <span className="section-tag">Our Services</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Comprehensive Therapy Services for Every Child
            </h1>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.75, maxWidth: 540, marginBottom: 24 }}>
              From ABA therapy to speech, occupational therapy, and parent training — we offer a full spectrum of evidence-based services to support your child's growth and independence.
            </p>
            <Link to="/contact" className="btn-primary">Enroll Today <FaArrowRight /></Link>
          </div>
          <div className="page-hero-emoji">🌟</div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Our Therapy Programs</h2>
          </div>
          <div className="services-full-grid">
            {services.map((s, i) => (
              <div className="service-full-card" key={i}>
                <div className="service-full-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: 12 }}>Not Sure Which Program Fits Your Child?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>Schedule a free consultation and let our experts guide you to the right therapy plan.</p>
          <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>
            Free Consultation <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
