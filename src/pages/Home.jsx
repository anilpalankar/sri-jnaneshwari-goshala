import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHeartbeat, FaUsers, FaPray } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import guruji from '../assets/guruji.png';

const icons = [FaShieldAlt, FaHeartbeat, FaUsers, FaPray];

export default function Home() {
  const { tr } = useLang();

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <img src={guruji} alt="Guruji" className="hero-guruji" />
        <div className="hero-particles">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="particle" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${4 + Math.random() * 4}s` }}>✦</span>
          ))}
        </div>
        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="hero-badge">🕉️ {tr.hero.subtitle} 🕉️</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {tr.hero.title}
          </motion.h1>
          <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            {tr.hero.tagline}
          </motion.p>
          <motion.p className="hero-location" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
            📍 {tr.hero.location}
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Link to="/seva" className="btn-primary">🐄 {tr.hero.cta}</Link>
            <Link to="/donations" className="btn-gold">🙏 {tr.hero.cta2}</Link>
          </motion.div>
        </div>
        <div className="hero-scroll">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <span>↓</span>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section mission-section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {tr.mission.title}
          </motion.h2>
          <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {tr.mission.text}
          </motion.p>
          <div className="mission-grid">
            {[tr.mission.p1, tr.mission.p2, tr.mission.p3, tr.mission.p4].map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={i} className="mission-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                  <div className="mission-icon"><Icon /></div>
                  <p>{item}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(135deg, #1a0505 0%, #3d0a0a 30%, #5C0E0E 60%, #8B1A1A 100%);
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%);
        }
        .hero-guruji {
          position: absolute;
          right: 5%;
          bottom: 0;
          height: 85%;
          opacity: 0.15;
          object-fit: contain;
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
        }
        .hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          top: -20px;
          color: var(--gold);
          opacity: 0;
          animation: floatUp linear infinite;
          font-size: 0.8rem;
        }
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0) rotate(0deg); }
          20% { opacity: 0.6; }
          80% { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(100vh) rotate(360deg); }
        }
        .hero-content {
          position: relative;
          z-index: 2;
          color: var(--white);
          padding-top: 80px;
        }
        .hero-badge {
          display: inline-block;
          padding: 8px 24px;
          background: rgba(212,175,55,0.15);
          border: 1px solid rgba(212,175,55,0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          color: var(--gold-light);
          margin-bottom: 24px;
        }
        .hero h1 {
          font-size: 3.5rem;
          color: var(--white);
          margin-bottom: 16px;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }
        .hero-tagline {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.85);
          margin-bottom: 8px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-location {
          font-size: 1rem;
          color: var(--gold-light);
          margin-bottom: 32px;
          opacity: 0.9;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-scroll {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--gold);
          font-size: 1.5rem;
          opacity: 0.6;
        }
        .mission-section {
          background: var(--white);
        }
        .mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }
        .mission-card {
          background: var(--cream);
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: var(--radius);
          padding: 30px;
          text-align: center;
          transition: var(--transition);
        }
        .mission-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-gold);
          border-color: var(--gold);
        }
        .mission-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: var(--white);
          border-radius: 50%;
          font-size: 1.3rem;
        }
        .mission-card p {
          color: var(--brown-light);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.2rem; }
          .hero-tagline { font-size: 1rem; }
          .hero-content { padding-top: 100px; }
          .hero-guruji { height: 60%; right: 0; opacity: 0.1; }
        }
        @media (max-width: 480px) {
          .hero h1 { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
}