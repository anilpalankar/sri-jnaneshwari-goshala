import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import adoptionPlans, { adoptionFaqs } from '../data/adoption';

export default function AdoptionProgram() {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    { step: '01', icon: '📋', title: 'Choose Your Plan', desc: 'Select a sponsorship plan that fits your budget and devotion.' },
    { step: '02', icon: '🐄', title: 'Meet Your Cow', desc: 'Pick the cow that touches your heart and form a lifelong bond.' },
    { step: '03', icon: '📸', title: 'Stay Connected', desc: 'Receive regular updates with photos, videos, and health reports.' },
  ];

  const stats = [
    { n: '150+', l: 'Cows Under Our Care' },
    { n: '₹2,100', l: 'Monthly Cost Per Cow' },
    { n: '500+', l: 'Active Sponsors' },
    { n: '100%', l: 'Funds to Cow Welfare' },
  ];

  return (
    <section id="adoption" className="adoption-section">
      <div className="section-inner adoption-inner">
        {/* Header */}
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-badge">🐄 Adopt a Cow</span>
          <h2 className="section-title">Symbolic Adoption Program</h2>
          <p className="section-subtitle">Become a guardian of a cow through our symbolic adoption program. Your sponsorship ensures complete care for a cow in need.</p>
        </motion.div>

        {/* How It Works */}
        <div className="adoption-steps">
          {steps.map((item, i) => (
            <motion.div key={item.step} className="adoption-step-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
              <span className="adoption-step-badge">Step {item.step}</span>
              <div className="step-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="adoption-plans">
          {adoptionPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`adoption-plan-card ${plan.highlighted ? 'highlighted' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {plan.highlighted && <span className="plan-badge">MOST POPULAR</span>}
              <div className="plan-icon">{plan.icon}</div>
              <h3>{plan.name}</h3>
              <p className="plan-duration">{plan.duration} Sponsorship</p>
              <div className="plan-price">
                <strong>{plan.currency}{plan.price.toLocaleString('en-IN')}</strong>
                <span>/{plan.duration.toLowerCase()}</span>
              </div>
              <ul className="adoption-plan-features">
                {plan.features.map((f, idx) => (
                  <li key={idx}>
                    <FaCheck />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="primary">Adopt Now</button>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div className="adoption-stats" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3>Your Seva Makes a Difference</h3>
          <div className="adoption-stats-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="adoption-stat">
                <div className="adoption-stat-number">{s.n}</div>
                <div className="adoption-stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <div className="adoption-faqs">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-list">
            {adoptionFaqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <button
                  className="faq-toggle"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <span className={openFaq === idx ? 'faq-icon open' : 'faq-icon'}>▾</span>
                </button>
                {openFaq === idx && (
                  <motion.div className="faq-answer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="adoption-cta" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="adoption-cta-emoji">🙏</div>
          <h3>Ready to Begin Your Goseva Journey?</h3>
          <p>Every cow deserves love, care, and a full stomach. Your sponsorship can change a life.</p>
          <div className="adoption-actions">
            <a href="#adoption" className="primary">🐄 Adopt a Cow</a>
            <a href="/contact" className="secondary">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}