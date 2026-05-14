import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  FaArrowRight, FaPhone, FaHeart, FaStar, FaBullseye, FaEye,
  FaChevronLeft, FaChevronRight, FaMapMarkerAlt
} from 'react-icons/fa';
import './Home.css';
import ourVision  from"../assets/ourvision.jpg";
import ourMission from"../assets/ourmission.jpg";
import weCare from"../assets/wecare.jpg";
import autismImg from "../assets/autism.png";
import shapeSlide1 from"../assets/shape-slide-1.png";
import shapeSlide2 from"../assets/shape-slide-2.png";
import shapeSlide3 from"../assets/shape-slide-3.png";

const slides = [
  {
    subtitle: 'AUTISM IS CURABLE',
    title: 'If it is identified at the right time.',
    desc: 'Early diagnosis and timely intervention can transform lives. Our expert therapists guide every child toward their full potential.',
    color: '#ff6b35',
    image: shapeSlide1,
  },
  {
    subtitle: 'HOPE & HEALING',
    title: 'Every Child Deserves a Bright Future.',
    desc: "We provide compassionate, evidence-based therapy tailored to each child's unique needs in a nurturing environment.",
    color: '#4a90d9',
    image: shapeSlide2,
  },
  {
    subtitle: 'EXPERT CARE',
    title: 'Qualified Therapists, Proven Results.',
    desc: 'Our team of 160+ qualified teachers brings decades of experience in autism therapy, ADHD support, and learning disability care.',
    color: '#06d6a0',
    image: shapeSlide3,
  },
];

const services = [
  {

    title: 'Our Vision',
    desc: 'Our vision is to provide autism-free children by enabling timely diagnosis, targeted therapy, and sustained family support programs.',
  },
  {
    title: 'Our Mission',
    desc: 'A program that meets the life skill needs of every child so that each child has equal opportunities to succeed and become a contributing member of society.',
  },
  {
  
    title: 'We Care',
    desc: 'We care with compassion for every child — whether they face autism, ADHD, learning disabilities, or other developmental challenges.',
  },
];

const stats = [
  { value: 160, label: 'Qualified Teachers', icon: '👩‍🏫', suffix: '+' },
  { value: 20, label: 'Years of Experience', icon: '🏆', suffix: '+' },
  { value: 565, label: 'Students Enrolled', icon: '👧', suffix: '+' },
  { value: 22, label: 'Total Branches', icon: '🏢', suffix: '' },
];

const branches = [
  { name: 'Saidapet', phone: '89258 32501' },
  { name: 'Adambakkam', phone: '89258 32502' },
  { name: 'Egmore', phone: '89258 32503' },
  { name: 'Tambaram', phone: '89258 32504' },
  { name: 'Porur', phone: '89258 32505' },
  { name: 'Thiruvanmiyur', phone: '89258 32506' },
  { name: 'Anna Nagar', phone: '89258 32507' },
  { name: 'Mylapore', phone: '89258 32508' },
  { name: 'Choolaimedu', phone: '89258 32509' },
  { name: 'K.K Nagar', phone: '89258 32510' },
  { name: 'Poonamalle', phone: '89258 32511' },
  { name: 'Mogappair', phone: '89258 32512' },
  { name: 'Neelankarai', phone: '89258 32513' },
  { name: 'Velacherry', phone: '89258 32514' },
  { name: 'Perambur', phone: '89258 32515' },
  { name: 'Ambattur', phone: '89258 32516' },
  { name: 'Sholinganallur', phone: '89258 32518' },
  { name: 'West Mambalam', phone: '89258 32519' },
  { name: 'Mannady', phone: '89258 32521' },
  { name: 'Ramapuram', phone: '89258 32522' },
  { name: 'Avadi', phone: '89258 32523' },
  { name: 'Iyyappanthangal', phone: '89258 32524' },
  { name: 'Kodungaiyur', phone: '89258 32525' },
  { name: 'Coimbatore', phone: '81487 22861' },
  { name: 'Nagercoil', phone: '99413 50646' },
];

const branchColors = ['#fff0eb', '#f0f7ff', '#f0fff9', '#fffbf0', '#f7f0ff'];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => changeSlide((current + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  });

  const changeSlide = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  };

  const s = slides[current];

  return (
    <section className="hero-section" style={{ '--slide-color': s.color }}>
      <div className="hero-bg-shapes">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>
      <div className="container hero-inner">
        <div className={`hero-content${animating ? ' animating' : ''}`}>
          <div className="hero-badge">
            <span>{s.emoji}</span>
            <span>{s.subtitle}</span>
          </div>
          <h1 className="hero-title">{s.title}</h1>
          <p className="hero-desc">{s.desc}</p>
          <div className="hero-actions">
            <Link to="/about-autism" className="btn-primary">
              Read More <FaArrowRight />
            </Link>
            <a href="tel:+919941350646" className="btn-outline">
              <FaPhone /> Call Us
            </a>
          </div>
        </div>
        <div className={`hero-visual${animating ? ' animating' : ''}`}>
          <div className="hero-image-display">
  <img src={s.image} alt="slide" />
</div>
          <div className="hero-card hero-card-float">
            <span>🌟</span> Early therapy changes lives!
          </div>
          <div className="hero-card hero-card-2">
            <span>💫</span> Compassionate care
          </div>
        </div>
      </div>

      <div className="hero-controls">
        <button onClick={() => changeSlide((current - 1 + slides.length) % slides.length)} className="hero-arrow">
          <FaChevronLeft />
        </button>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === current ? ' active' : ''}`}
              onClick={() => changeSlide(i)}
            />
          ))}
        </div>
        <button onClick={() => changeSlide((current + 1) % slides.length)} className="hero-arrow">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

function StatCard({ stat, animate }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-value">
        {animate ? (
          <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
        ) : (
          `0${stat.suffix}`
        )}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Home() {
  const { ref: statsRef, inView: statsVisible } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main>
      <HeroSlider />

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Service We Provide</span>
            <h2 className="section-title">Providing Good Qualities<br />For Your Loving Kids</h2>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link to="/services" className="service-card" key={i}
      style={{
        backgroundImage:
          s.title === "Our Vision"
            ? `url(${ourVision})`
            : s.title === "Our Mission"
            ? `url(${ourMission})`
            : `url(${weCare})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
            color: "white",
      }}
      >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">Learn More <FaArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container about-inner">
          <div className="about-visual">
            <div className="about-big-image"><img src={autismImg} alt="Autism Support" />
</div>
            <div className="about-badge-1">🧩 ASD Support</div>
            <div className="about-badge-2">🌱 Early Intervention</div>
          </div>
          <div className="about-text">
            <span className="section-tag">They Are Special</span>
            <h2 className="section-title">Understanding Autism</h2>
            <p>Autism, we all heard about this disorder and it is quite familiar in recent days. Earlier, it was a very rare disorder — in 1970, 1 in 10,000 children were affected. Recently, statistics say 1 in 40 children are affected.</p>
            <p>Many researchers say Autism is not curable, and it will remain throughout life. But when there is a problem, there must be a solution. We believe that timely identification and the right therapy can make all the difference.</p>
            <p>Let's connect a few dots to find out what might be the major cause for Autism and how early intervention helps unlock a child's potential.</p>
            <div className="about-actions">
              <Link to="/about-us" className="btn-primary">Learn More <FaArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>Stats</span>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} animate={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="branches-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">On Going Branches</span>
            <h2 className="section-title">Take The Classes &amp;<br />Start Learning From Today</h2>
          </div>
          <div className="branches-grid">
            {branches.map((b, i) => (
              <div 
                className="branch-card" 
                key={i} 
                style={{ background: branchColors[i % branchColors.length], cursor: 'pointer' }}
                onClick={() => {
                  const mapUrl = `https://www.google.com/maps/search/Tiny+Todds+${b.name}+Chennai/`;
                  window.open(mapUrl, '_blank');
                }}
              >
                <div className="branch-icon"><FaMapMarkerAlt /></div>
                <h4>{b.name}</h4>
                <p>{b.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-text">
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>Join Our New Session</span>
            <h2>Call To Enroll Your Child</h2>
            <p>Give your child the gift of expert therapy and compassionate care. Reach out today and take the first step towards a brighter future.</p>
          </div>
          <div className="cta-phones">
            <a href="tel:+919941350646" className="cta-phone-btn">
              <FaPhone /> +91 99413 50646
            </a>
            <a href="tel:+917299535600" className="cta-phone-btn cta-phone-btn-outline">
              <FaPhone /> +91 72995 35600
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
