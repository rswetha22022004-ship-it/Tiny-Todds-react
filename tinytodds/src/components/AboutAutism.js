import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './PageStyles.css';
import geneticImg from "../assets/genetic factors.jpg";

const signs = [
  'Limited eye contact or social interaction',
  'Delayed speech or language skills',
  'Repetitive behaviors or movements',
  'Difficulty adapting to changes in routine',
  'Unusual reactions to sensory stimuli',
  'Lack of imaginative or pretend play',
  'Difficulty understanding others\' emotions',
  'Focused interests in specific topics',
];

const causes = [
  { title: "Genetic Factors", 
    desc: 'Research suggests that certain genes may predispose a child to autism. Mutations or variations in genetic makeup can affect brain development.',
    image: geneticImg,},
  { title: 'Environmental Triggers', desc: 'Exposure to certain environmental factors during pregnancy — like toxins, infections, or nutritional deficiencies — may increase risk.' },
  { title: 'Brain Development', desc: 'Differences in how the brain develops and connects during early childhood may result in the characteristics associated with autism.' },
  { title: 'Metabolic Imbalances', desc: 'Research indicates that metabolic and immune system irregularities in the body may contribute to autistic traits in children.' },
];

export default function AboutAutism() {
  return (
    <main className="page-main">
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #fff8f5, #fff0eb)' }}>
        <div className="container page-hero-inner">
          <div className="page-hero-text">
            <span className="section-tag">About Autism</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Understanding Autism Spectrum Disorder</h1>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
              Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interaction. With the right support, every child with autism can thrive.
            </p>
            <Link to="/contact" className="btn-primary">Get Help Today <FaArrowRight /></Link>
          </div>
          <div className="page-hero-emoji">🧩</div>
        </div>
      </section>

      {/* What is Autism */}
      <section className="content-section">
        <div className="container two-col-grid">
          <div className="content-text">
            <span className="section-tag">What Is Autism?</span>
            <h2 className="section-title">A Growing Global Concern</h2>
            <p>Autism, as many of us know, has become increasingly common in recent years. In 1970, only 1 in 10,000 children were affected by this disorder. Today, statistics indicate that 1 in 40 children is on the autism spectrum — a dramatic increase that demands urgent attention.</p>
            <p style={{ marginTop: 16 }}>Many researchers once claimed autism was not curable and would persist throughout a person's life. However, emerging evidence and clinical experience show that <strong>early diagnosis and targeted therapy</strong> can dramatically improve a child's quality of life, communication skills, and independence.</p>
            <p style={{ marginTop: 16 }}>At Tiny Todds Therapy Care, we believe every child with autism has the potential to grow, communicate, and connect with the world in meaningful ways.</p>
          </div>
          <div className="info-card-stack">
            <div className="info-highlight-card">
              <div className="info-big-num">1 in 40</div>
              <p>children are currently diagnosed with ASD globally.</p>
            </div>
            <div className="info-highlight-card" style={{ background: 'var(--light-blue)', borderColor: 'var(--secondary)' }}>
              <div className="info-big-num" style={{ color: 'var(--secondary)' }}>Early</div>
              <p>intervention before age 5 delivers the best outcomes for children with autism.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="content-section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Warning Signs</span>
            <h2 className="section-title">Common Signs of Autism</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: 560, margin: '0 auto' }}>If you notice any of these signs in your child, consult a specialist as early as possible. Early detection is key to effective intervention.</p>
          </div>
          <div className="signs-grid">
            {signs.map((sign, i) => (
              <div className="sign-item" key={i}>
                <FaCheckCircle style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Possible Causes</span>
            <h2 className="section-title">What Might Cause Autism?</h2>
          </div>
          <div className="causes-grid">
            {causes.map((c, i) => (
              <div
  className="cause-card"
  key={i}
  style={{
    backgroundImage: `url(${c.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
  
                <div className="cause-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: 12 }}>Is Your Child Showing Signs?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>Don't wait. Early action can change everything. Contact us for a free consultation today.</p>
          <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
