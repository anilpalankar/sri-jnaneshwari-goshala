import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

const contactIcons = [FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock];

export default function Contact() {
  const { tr } = useLang();

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>{tr.contact.title}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>{tr.contact.subtitle}</motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-cards">
              {tr.contact.items.map((item, i) => {
                const Icon = contactIcons[i] || FaMapMarkerAlt;
                return (
                  <motion.div key={i} className="contact-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <div className="contact-icon"><Icon /></div>
                    <div>
                      <h4>{item.label}</h4>
                      <p>{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div className="contact-map-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="map-container">
                <iframe
                  title="Sri Jnaneshwari Goshala Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d123886.97601206276!2d75.4325453!3d13.9902417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbaf7fa9551df9%3A0xbbf1400856f3787b!2sShree%20jnaneshwari%20goshala!5e0!3m2!1sen!2sin!4v1782137678934!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d123886.97601206276!2d75.4325453!3d13.9902417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbaf7fa9551df9%3A0xbbf1400856f3787b!2sShree%20jnaneshwari%20goshala!5e0!3m2!1sen!2sin!4v1782137678934!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
              <a href={tr.contact.mapLink} target="_blank" rel="noopener noreferrer" className="btn-primary map-btn">
                📍 {tr.contact.mapBtn}
              </a>
            </motion.div>
          </div>

          <motion.div className="whatsapp-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <a href={`https://wa.me/${tr.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <FaWhatsapp /> {tr.contact.whatsappLabel}
            </a>
          </motion.div>
        </div>
      </section>

      <style>{`
        .contact-hero { background: linear-gradient(135deg, #1a0a00, #5C0E0E, #8B1A1A); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .contact-cards { display: flex; flex-direction: column; gap: 20px; }
        .contact-card { display: flex; align-items: flex-start; gap: 16px; background: var(--white); padding: 24px; border-radius: var(--radius); border: 1px solid rgba(212,175,55,0.15); box-shadow: var(--shadow); transition: var(--transition); }
        .contact-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-gold); border-color: var(--gold); }
        .contact-icon { width: 50px; height: 50px; min-width: 50px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--primary), var(--primary-light)); color: var(--white); border-radius: 50%; font-size: 1.2rem; }
        .contact-card h4 { font-size: 0.95rem; color: var(--primary); margin-bottom: 4px; }
        .contact-card p { font-size: 0.9rem; color: var(--brown-light); }
        .contact-map-card { background: var(--white); border-radius: var(--radius); padding: 24px; border: 1px solid rgba(212,175,55,0.15); box-shadow: var(--shadow); }
        .map-container { height: 300px; border-radius: var(--radius); overflow: hidden; margin-bottom: 16px; border: 2px solid rgba(212,175,55,0.2); }
        .map-container iframe { width: 100%; height: 100%; border: none; }
        .map-btn { width: 100%; justify-content: center; }
        .whatsapp-section { text-align: center; padding: 30px 0; }
        .whatsapp-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 36px; background: #25D366; color: white; border-radius: 50px; font-size: 1.1rem; font-weight: 600; text-decoration: none; transition: var(--transition); box-shadow: 0 4px 15px rgba(37,211,102,0.3); }
        .whatsapp-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 25px rgba(37,211,102,0.4); }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}