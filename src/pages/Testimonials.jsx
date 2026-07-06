import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Business Owner',
      image: '👨‍💼',
      rating: 5,
      text: 'The work done by Sri Jnaneshwari Goshala is truly commendable. Their dedication to cow welfare and community service is inspiring. I\'m proud to be a part of this sacred mission.',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Social Worker',
      image: '👩‍💼',
      rating: 5,
      text: 'What impressed me most is their transparent approach to funds and care. The regular updates with photos and health reports show their commitment to accountability.',
    },
    {
      id: 3,
      name: 'Amit Singh',
      title: 'Spiritual Guide',
      image: '🧑‍🤝‍🧑',
      rating: 5,
      text: 'In my 20 years of community service, I haven\'t seen such dedication. The team at Sri Jnaneshwari Goshala is changing lives and protecting our sacred cows with utmost care.',
    },
    {
      id: 4,
      name: 'Anjali Verma',
      title: 'Teacher',
      image: '👩‍🏫',
      rating: 5,
      text: 'I bring my students here for educational visits. It\'s a wonderful place to learn about compassion, responsibility, and our cultural heritage.',
    },
    {
      id: 5,
      name: 'Vikram Patel',
      title: 'Veterinarian',
      image: '👨‍⚕️',
      rating: 5,
      text: 'The health standards maintained here are exemplary. Every cow receives the best care and nutrition. This is a model facility for animal welfare.',
    },
    {
      id: 6,
      name: 'Deepa Reddy',
      title: 'Donor',
      image: '👩‍🦰',
      rating: 5,
      text: 'Supporting Sri Jnaneshwari Goshala has been one of the most fulfilling decisions of my life. Every contribution makes a real difference.',
    },
  ];

  return (
    <div className="testimonials-page">
      <section className="page-hero testimonials-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Testimonials
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Words of Appreciation from Our Community
          </motion.p>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <motion.div className="testimonials-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p>
              Hear from the people whose lives have been touched by Sri Jnaneshwari Goshala. Their words of appreciation inspire us to continue our sacred mission of protecting and caring for cows.
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.image}</div>
                  <div className="testimonial-meta">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-title">{testimonial.title}</p>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .testimonials-hero {
          background: linear-gradient(135deg, #1a0a00, #5C0E0E, #8B1A1A);
        }

        .testimonials-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
          font-size: 1.05rem;
          color: var(--brown-light);
          line-height: 1.8;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
        }

        .testimonial-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 30px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(212, 175, 55, 0.15);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-gold);
          border-color: var(--gold);
        }

        .testimonial-header {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .testimonial-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border: 3px solid rgba(212, 175, 55, 0.2);
          flex-shrink: 0;
        }

        .testimonial-meta {
          flex: 1;
          min-width: 0;
        }

        .testimonial-meta h3 {
          font-size: 1rem;
          margin: 0 0 4px 0;
          color: var(--primary);
        }

        .testimonial-title {
          font-size: 0.85rem;
          color: var(--gray);
          margin: 0;
          font-weight: 500;
        }

        .testimonial-rating {
          display: flex;
          gap: 4px;
        }

        .star-icon {
          color: var(--gold);
          font-size: 0.9rem;
        }

        .testimonial-text {
          font-size: 0.95rem;
          color: var(--brown-light);
          line-height: 1.7;
          margin: 0;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
