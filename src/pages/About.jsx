import { motion } from 'framer-motion';
import { FaUsers, FaEye } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

export default function About() {
  const { tr } = useLang();

  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {tr.about.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {tr.about.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.p className="about-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {tr.about.intro}
          </motion.p>

          <div className="about-cards">
            <motion.div className="about-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="about-card-icon"><FaUsers /></div>
              <h3>{tr.about.community}</h3>
              <p>{tr.about.communityText}</p>
            </motion.div>
            <motion.div className="about-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="about-card-icon"><FaEye /></div>
              <h3>{tr.about.vision}</h3>
              <p>{tr.about.visionText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {tr.about.timeline}
          </motion.h2>
          <div className="divider">🕉️</div>
          <div className="timeline">
            <div className="timeline-line" />
            {tr.timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`timeline-item${i % 2 === 0 ? ' left' : ' right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="timeline-dot">
                  <span>{item.year}</span>
                </div>
                <div className="timeline-card">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #2a0808, #5C0E0E, #8B1A1A);
        }
        .about-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          font-size: 1.1rem;
          color: var(--brown-light);
          line-height: 1.8;
        }
        .about-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 20px;
        }
        .about-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 40px;
          border: 1px solid rgba(212,175,55,0.15);
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        .about-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-gold);
          border-color: var(--gold);
        }
        .about-card-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: var(--white);
          border-radius: 50%;
          font-size: 1.4rem;
          margin-bottom: 20px;
        }
        .about-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: var(--primary);
        }
        .about-card p {
          color: var(--brown-light);
          line-height: 1.7;
        }
        .timeline-section {
          background: var(--white);
        }
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--gold), var(--primary));
          transform: translateX(-50%);
          border-radius: 2px;
        }
        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          margin-bottom: 30px;
        }
        .timeline-item.left {
          left: 0;
          text-align: right;
        }
        .timeline-item.right {
          left: 50%;
          text-align: left;
        }
        .timeline-dot {
          position: absolute;
          top: 28px;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--primary), var(--gold));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 0 4px var(--white), 0 0 15px rgba(139,26,26,0.3);
        }
        .timeline-dot span {
          color: var(--white);
          font-size: 0.6rem;
          font-weight: 700;
        }
        .timeline-item.left .timeline-dot {
          right: -22px;
        }
        .timeline-item.right .timeline-dot {
          left: -22px;
        }
        .timeline-card {
          background: var(--cream);
          padding: 24px;
          border-radius: var(--radius);
          border: 1px solid rgba(212,175,55,0.15);
          transition: var(--transition);
        }
        .timeline-card:hover {
          box-shadow: var(--shadow-gold);
          border-color: var(--gold);
        }
        .timeline-card h4 {
          color: var(--primary);
          margin-bottom: 8px;
          font-size: 1.1rem;
        }
        .timeline-card p {
          color: var(--brown-light);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .timeline-line { left: 20px; }
          .timeline-item { width: 100%; left: 0 !important; text-align: left !important; padding-left: 60px; padding-right: 20px; }
          .timeline-dot { left: -2px !important; right: auto !important; }
        }
      `}</style>
    </div>
  );
}