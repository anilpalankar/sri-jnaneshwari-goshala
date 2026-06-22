import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { tr } = useLang();

  return (
    <footer className="footer">
      <div className="footer-decor">
        <span>🕉️</span><span>🐄</span><span>🕉️</span>
      </div>
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-icon">🐄</span>
          <h3>{tr.hero.title}</h3>
          <p>{tr.hero.location}</p>
        </div>
        <div className="footer-links">
          <h4>{tr.nav.home}</h4>
          <Link to="/about">{tr.nav.about}</Link>
          <Link to="/seva">{tr.nav.seva}</Link>
          <Link to="/donations">{tr.nav.donations}</Link>
        </div>
        <div className="footer-links">
          <h4>{tr.nav.contact}</h4>
          <Link to="/gallery">{tr.nav.gallery}</Link>
          <Link to="/contact">{tr.nav.contact}</Link>
        </div>
        <div className="footer-links">
          <h4>{tr.donations.title}</h4>
          <Link to="/donations">{tr.donations.subtitle}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>{tr.footer.rights.replace('{year}', new Date().getFullYear())}</p>
          <p className="footer-made"><FaHeart className="heart-icon" /> {tr.footer.made}</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          color: var(--white);
          padding-top: 50px;
          margin-top: 0;
        }
        .footer-decor {
          display: flex;
          justify-content: center;
          gap: 30px;
          font-size: 2rem;
          margin-bottom: 30px;
          opacity: 0.6;
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }
        .footer-brand h3 {
          color: var(--gold);
          font-size: 1.3rem;
          margin: 8px 0;
        }
        .footer-brand p {
          opacity: 0.7;
          font-size: 0.9rem;
        }
        .footer-brand .brand-icon {
          font-size: 2.5rem;
        }
        .footer-links h4 {
          color: var(--gold);
          font-size: 1rem;
          margin-bottom: 12px;
          font-family: 'Inter', sans-serif;
        }
        .footer-links a {
          display: block;
          color: rgba(255,255,255,0.75);
          font-size: 0.9rem;
          padding: 4px 0;
          transition: all 0.3s;
        }
        .footer-links a:hover {
          color: var(--gold-light);
          padding-left: 6px;
        }
        .footer-bottom {
          padding: 20px 0;
          background: rgba(0,0,0,0.2);
        }
        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-bottom p {
          font-size: 0.85rem;
          opacity: 0.8;
        }
        .footer-made {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .heart-icon {
          color: #ff6b6b;
          font-size: 0.8rem;
          animation: heartbeat 1.5s infinite;
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @media (max-width: 768px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }
        @media (max-width: 480px) {
          .footer-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}