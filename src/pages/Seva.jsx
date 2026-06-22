import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaw, FaStethoscope, FaSeedling, FaHome, FaHandsHelping, FaPray } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

const iconMap = { cow: FaPaw, medical: FaStethoscope, food: FaSeedling, shelter: FaHome, rescue: FaHandsHelping, puja: FaPray };

export default function Seva() {
  const { tr } = useLang();
  const [flipped, setFlipped] = useState(null);

  return (
    <div className="seva-page">
      <section className="page-hero seva-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>{tr.seva.title}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>{tr.seva.subtitle}</motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="seva-grid">
            {tr.seva.items.map((item, i) => {
              const Icon = iconMap[item.icon] || FaPaw;
              const isFlipped = flipped === i;
              return (
                <motion.div key={i} className="seva-card-wrapper" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <div className={`seva-card${isFlipped ? ' flipped' : ''}`} onClick={() => setFlipped(isFlipped ? null : i)}>
                    <div className="seva-card-front">
                      <div className="seva-icon"><Icon /></div>
                      <h3>{item.title}</h3>
                      <p className="seva-hint">↻ Tap to read more</p>
                    </div>
                    <div className="seva-card-back">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <span className="seva-back-hint">↻ Tap to flip back</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .seva-hero { background: linear-gradient(135deg, #1a0a00, #5C0E0E, #8B1A1A); }
        .seva-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .seva-card-wrapper { perspective: 1000px; height: 280px; }
        .seva-card { position: relative; width: 100%; height: 100%; cursor: pointer; transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .seva-card.flipped { transform: rotateY(180deg); }
        .seva-card-front, .seva-card-back { position: absolute; inset: 0; backface-visibility: hidden; border-radius: var(--radius); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px; text-align: center; }
        .seva-card-front { background: var(--white); border: 1px solid rgba(212,175,55,0.2); box-shadow: var(--shadow); }
        .seva-card-front:hover { border-color: var(--gold); box-shadow: var(--shadow-gold); }
        .seva-icon { width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--primary), var(--primary-light)); color: var(--white); border-radius: 50%; font-size: 1.6rem; margin-bottom: 16px; box-shadow: 0 4px 15px rgba(139,26,26,0.3); }
        .seva-card-front h3 { font-size: 1.15rem; color: var(--primary); margin-bottom: 8px; }
        .seva-hint { font-size: 0.8rem; color: var(--gold); opacity: 0.7; margin-top: 8px; }
        .seva-card-back { background: linear-gradient(135deg, var(--primary), var(--primary-light)); color: var(--white); transform: rotateY(180deg); }
        .seva-card-back h3 { color: var(--gold-light); font-size: 1.15rem; margin-bottom: 12px; }
        .seva-card-back p { color: rgba(255,255,255,0.9); font-size: 0.95rem; line-height: 1.6; }
        .seva-back-hint { font-size: 0.75rem; color: var(--gold-light); opacity: 0.6; margin-top: 12px; }
      `}</style>
    </div>
  );
}