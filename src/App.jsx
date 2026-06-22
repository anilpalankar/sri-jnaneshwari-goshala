import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Seva from './pages/Seva';
import Donations from './pages/Donations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/seva" element={<Seva />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </LanguageProvider>
    </HashRouter>
  );
}