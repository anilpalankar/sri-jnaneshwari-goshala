import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';

export default function Gallery() {
  const { tr } = useLang();
  const [selected, setSelected] = useState(null);

  const images = tr.gallery.images;
  const openLightbox = (i) => setSelected(i);
  const closeLightbox = () => setSelected(null);
  const prev = () => setSelected((selected - 1 + images.length) % images.length);
  const next = () => setSelected((selected + 1) % images.length);

  return (
    <div className="gallery-page">
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>{tr.gallery.title}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>{tr.gallery.subtitle}</motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="masonry-grid">
            {images.map((img, i) => (
              <motion.div key={i} className="masonry-item" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} onClick={() => openLightbox(i)}>
                <div className="masonry-img" style={{ background: `linear-gradient(135deg, ${img.color1}, ${img.color2})`, minHeight: img.h }}>
                  <span className="masonry-emoji">{img.emoji}</span>
                </div>
                <div className="masonry-caption">{img.caption}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox}>
            <button className="lb-close" onClick={closeLightbox}><FaTimes /></button>
            <button className="lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }}><FaChevronLeft /></button>
            <motion.div className="lb-content" onClick={(e) => e.stopPropagation()} key={selected} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
              <div className="lb-img" style={{ background: `linear-gradient(135deg, ${images[selected].color1}, ${images[selected].color2})` }}>
                <span className="lb-emoji">{images[selected].emoji}</span>
              </div>
              <p className="lb-caption">{images[selected].caption}</p>
            </motion.div>
            <button className="lb-next" onClick={(e) => { e.stopPropagation(); next(); }}><FaChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-hero { background: linear-gradient(135deg, #1a0a00, #5C0E0E, #8B1A1A); }
        .masonry-grid { columns: 3; column-gap: 16px; }
        .masonry-item { break-inside: avoid; margin-bottom: 16px; border-radius: var(--radius); overflow: hidden; cursor: pointer; transition: var(--transition); }
        .masonry-item:hover { transform: scale(1.02); box-shadow: var(--shadow-gold); }
        .masonry-img { display: flex; align-items: center; justify-content: center; border-radius: var(--radius) var(--radius) 0 0; }
        .masonry-emoji { font-size: 3rem; opacity: 0.8; }
        .masonry-caption { padding: 12px 16px; background: var(--white); font-size: 0.9rem; color: var(--brown-light); }
        .lightbox { position: fixed; inset: 0; z-index: 2000; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; }
        .lb-close { position: absolute; top: 20px; right: 20px; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; z-index: 10; }
        .lb-prev, .lb-next { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.1); border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 16px; border-radius: 50%; z-index: 10; }
        .lb-prev { left: 20px; }
        .lb-next { right: 20px; }
        .lb-content { text-align: center; max-width: 80vw; max-height: 80vh; }
        .lb-img { width: 500px; max-width: 80vw; height: 400px; max-height: 60vh; display: flex; align-items: center; justify-content: center; border-radius: var(--radius); margin: 0 auto; }
        .lb-emoji { font-size: 5rem; }
        .lb-caption { color: white; margin-top: 16px; font-size: 1.1rem; }
        @media (max-width: 768px) { .masonry-grid { columns: 2; } }
        @media (max-width: 480px) { .masonry-grid { columns: 1; } }
      `}</style>
    </div>
  );
}