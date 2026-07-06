import { motion } from 'framer-motion';
import { FaUniversity, FaQrcode, FaCopy, FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

export default function Donations() {
  const { tr } = useLang();
  const [copied, setCopied] = useState(null);

  const recentDonors = [
    { id: 1, name: 'Prabhu Santhanam', timestamp: '05-07-2026 09:51:07', amount: '₹2,100' },
    { id: 2, name: 'Sharon', timestamp: '05-07-2026 09:47:04', amount: '₹500' },
    { id: 3, name: 'Prasenjit Sir', timestamp: '05-07-2026 09:45:22', amount: '₹5,000' },
    { id: 4, name: 'Nisha Agrawal', timestamp: '05-07-2026 03:51:37', amount: '₹1,000' },
    { id: 5, name: 'Mohit Kumar Sinha', timestamp: '05-07-2026 03:39:59', amount: '₹2,500' },
    { id: 6, name: 'Parteek Raj', timestamp: '05-07-2026 02:15:44', amount: '₹3,000' },
    { id: 7, name: 'Bhushan Bagul', timestamp: '05-07-2026 10:26:50', amount: '₹1,500' },
    { id: 8, name: 'Mayurkumar Patel', timestamp: '05-07-2026 10:21:07', amount: '₹2,000' },
    { id: 9, name: 'Ajay Todaria', timestamp: '05-07-2026 10:18:33', amount: '₹4,500' },
  ];

  const copyText = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="donations-page">
      <section className="page-hero donations-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>{tr.donations.title}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>{tr.donations.subtitle}</motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.p className="donations-intro" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {tr.donations.intro}
          </motion.p>

          {/* Progress Bar */}
          <motion.div className="goal-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="goal-header">
              <h3>{tr.donations.goalTitle}</h3>
              <span className="goal-label">{tr.donations.goalLabel}</span>
            </div>
            <div className="goal-bar">
              <motion.div className="goal-fill" initial={{ width: 0 }} whileInView={{ width: `${tr.donations.goalPct}%` }} viewport={{ once: true }} transition={{ duration: 1.5, ease: 'easeOut' }} />
            </div>
            <div className="goal-amounts">
              <span className="goal-current">{tr.donations.goalCurrent}</span>
              <span className="goal-target">{tr.donations.goalTarget}</span>
            </div>
          </motion.div>

          {/* Tiers */}
          <div className="tiers-grid">
            {tr.donations.tiers.map((tier, i) => (
              <motion.div key={i} className="tier-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="tier-badge">₹{tier.amount.toLocaleString()}</div>
                <h3>{tier.title}</h3>
                <p>{tier.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bank Details */}
          <div className="payment-section">
            <motion.div className="bank-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3><FaUniversity /> {tr.donations.bankTitle}</h3>
              <div className="bank-details">
                <div className="bank-row"><span className="bank-label">Bank</span><span className="bank-value">{tr.donations.bankName}<button className="copy-btn" onClick={() => copyText(tr.donations.bankName, 'bank')}>{copied === 'bank' ? <FaCheck /> : <FaCopy />}</button></span></div>
                <div className="bank-row"><span className="bank-label">Branch</span><span className="bank-value">{tr.donations.branch}<button className="copy-btn" onClick={() => copyText(tr.donations.branch, 'branch')}>{copied === 'branch' ? <FaCheck /> : <FaCopy />}</button></span></div>
                <div className="bank-row"><span className="bank-label">A/C Name</span><span className="bank-value">{tr.donations.accName}<button className="copy-btn" onClick={() => copyText(tr.donations.accName, 'accName')}>{copied === 'accName' ? <FaCheck /> : <FaCopy />}</button></span></div>
                <div className="bank-row"><span className="bank-label">A/C No</span><span className="bank-value">{tr.donations.accNo}<button className="copy-btn" onClick={() => copyText(tr.donations.accNo, 'accNo')}>{copied === 'accNo' ? <FaCheck /> : <FaCopy />}</button></span></div>
                <div className="bank-row"><span className="bank-label">IFSC</span><span className="bank-value">{tr.donations.ifsc}<button className="copy-btn" onClick={() => copyText(tr.donations.ifsc, 'ifsc')}>{copied === 'ifsc' ? <FaCheck /> : <FaCopy />}</button></span></div>
              </div>
            </motion.div>

            <motion.div className="upi-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3><FaQrcode /> {tr.donations.upiTitle}</h3>
              <div className="upi-id">
                <code>{tr.donations.upiId}</code>
                <button className="copy-btn" onClick={() => copyText(tr.donations.upiId, 'upi')}>{copied === 'upi' ? <FaCheck /> : <FaCopy />}</button>
              </div>
              <p className="upi-note">{tr.donations.qrNote}</p>
              <div className="qr-placeholder">
                <FaQrcode className="qr-icon" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Donors Section */}
      <section className="section recent-donors-section">
        <div className="container">
          <motion.div className="recent-donors-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>Recent Donors</h2>
            <p>Join our community of generous supporters</p>
          </motion.div>

          <div className="donors-grid">
            {recentDonors.map((donor, i) => (
              <motion.div key={donor.id} className="donor-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <div className="donor-avatar">
                  {donor.name.charAt(0).toUpperCase()}
                </div>
                <div className="donor-info">
                  <h3>{donor.name}</h3>
                  <p className="donor-time">{donor.timestamp}</p>
                  <p className="donor-amount">{donor.amount}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .donations-hero { background: linear-gradient(135deg, #1a0a00, #5C0E0E, #8B1A1A); }
        .donations-intro { text-align: center; max-width: 700px; margin: 0 auto 40px; font-size: 1.1rem; color: var(--brown-light); }
        .goal-card { background: var(--white); border-radius: var(--radius); padding: 30px; box-shadow: var(--shadow); margin-bottom: 50px; border: 1px solid rgba(212,175,55,0.15); }
        .goal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .goal-header h3 { font-size: 1.2rem; }
        .goal-label { font-size: 0.85rem; color: var(--gold-dark); font-weight: 600; background: rgba(212,175,55,0.1); padding: 4px 12px; border-radius: 20px; }
        .goal-bar { height: 20px; background: var(--cream-dark); border-radius: 10px; overflow: hidden; margin-bottom: 10px; }
        .goal-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--gold)); border-radius: 10px; position: relative; }
        .goal-fill::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); animation: shimmer 2s infinite; }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .goal-amounts { display: flex; justify-content: space-between; font-size: 0.9rem; }
        .goal-current { color: var(--primary); font-weight: 700; }
        .goal-target { color: var(--gray); }
        .tiers-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 50px; }
        .tier-card { background: var(--white); border-radius: var(--radius); padding: 30px; text-align: center; border: 1px solid rgba(212,175,55,0.15); box-shadow: var(--shadow); transition: var(--transition); }
        .tier-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-gold); border-color: var(--gold); }
        .tier-badge { display: inline-block; background: linear-gradient(135deg, var(--primary), var(--primary-light)); color: var(--white); padding: 6px 18px; border-radius: 20px; font-size: 0.9rem; font-weight: 700; margin-bottom: 14px; }
        .tier-card h3 { font-size: 1.05rem; margin-bottom: 10px; color: var(--primary); }
        .tier-card p { font-size: 0.88rem; color: var(--brown-light); line-height: 1.6; }
        .payment-section { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
        .bank-card, .upi-card { background: var(--white); border-radius: var(--radius); padding: 30px; box-shadow: var(--shadow); border: 1px solid rgba(212,175,55,0.15); }
        .bank-card h3, .upi-card h3 { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; margin-bottom: 20px; color: var(--primary); }
        .bank-details { display: flex; flex-direction: column; gap: 12px; }
        .bank-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
        .bank-label { font-weight: 600; color: var(--gray); font-size: 0.85rem; }
        .bank-value { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--brown); }
        .copy-btn { background: none; border: none; color: var(--gold-dark); cursor: pointer; font-size: 0.85rem; padding: 4px; transition: var(--transition); }
        .copy-btn:hover { color: var(--primary); }
        .upi-id { display: flex; align-items: center; gap: 10px; background: var(--cream); padding: 12px 16px; border-radius: 8px; margin-bottom: 12px; }
        .upi-id code { font-size: 1rem; color: var(--primary); font-weight: 600; }
        .upi-note { font-size: 0.85rem; color: var(--gray); margin-bottom: 16px; }
        .qr-placeholder { width: 160px; height: 160px; margin: 0 auto; display: flex; align-items: center; justify-content: center; background: var(--cream); border-radius: var(--radius); border: 2px dashed var(--gold); }
        .qr-icon { font-size: 4rem; color: var(--gold); opacity: 0.4; }
        
        /* Recent Donors Section */
        .recent-donors-section { background: var(--cream); }
        .recent-donors-header { text-align: center; margin-bottom: 40px; }
        .recent-donors-header h2 { font-size: 2rem; color: var(--primary); margin-bottom: 8px; }
        .recent-donors-header p { color: var(--gray); font-size: 1rem; }
        
        .donors-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
        .donor-card { background: var(--white); border: 1px solid rgba(212,175,55,0.15); border-radius: 16px; padding: 20px; display: flex; align-items: center; gap: 16px; transition: var(--transition); box-shadow: var(--shadow); cursor: pointer; }
        .donor-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-gold); border-color: var(--gold); }
        
        .donor-avatar { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--primary-light)); color: var(--white); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; flex-shrink: 0; border: 3px solid rgba(212,175,55,0.2); }
        
        .donor-info { flex: 1; min-width: 0; }
        .donor-info h3 { font-size: 1rem; color: var(--primary); margin: 0 0 6px 0; font-weight: 700; word-break: break-word; }
        .donor-time { font-size: 0.8rem; color: var(--gray); margin: 0; line-height: 1.4; }
        .donor-amount { font-size: 0.9rem; color: var(--gold-dark); font-weight: 600; margin: 4px 0 0 0; }
      `}</style>
    </div>
  );
}