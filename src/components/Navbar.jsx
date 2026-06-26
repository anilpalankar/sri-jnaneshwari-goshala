import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLang } from '../context/LanguageContext';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { tr, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const links = [
    { to: '/', label: tr.nav.home },
    { to: '/about', label: tr.nav.about },
    { to: '/seva', label: tr.nav.seva },
    { to: '/donations', label: tr.nav.donations },
    { to: '/gallery', label: tr.nav.gallery },
    { to: '/contact', label: tr.nav.contact },
  ];

  return (
    <motion.nav className={`navbar${scrolled ? ' scrolled' : ''}`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <img   className="brand-icon" />
          <span className="brand-text">{lang === 'kn' ? 'ಶ್ರೀ ಜ್ಞಾನೇಶ್ವರಿ ಗೋಶಾಲೆ' : 'Sri Jnaneshwari Goshala'}</span>
        </Link>
        <div className="navbar-links">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`nav-link${location.pathname === l.to ? ' active' : ''}`}>{l.label}</Link>
          ))}
        </div>
        <div className="navbar-actions">
          <button className="lang-toggle" onClick={toggleLang}>
            <span className={`lang-label${lang === 'en' ? ' active' : ''}`}>EN</span>
            <span className="lang-sep">/</span>
            <span className={`lang-label${lang === 'kn' ? ' active' : ''}`}>ಕನ್ನಡ</span>
          </button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`mobile-link${location.pathname === l.to ? ' active' : ''}`}>{l.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}