import { useState } from "react";
import foodGalleryData, { foodCategories } from "../data/foodGallery";

const FoodGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? foodGalleryData
      : foodGalleryData.filter((item) => item.category === activeCategory);

  return (
    <section id="food-gallery" className="food-gallery-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">🍃 What We Feed</span>
          <h2 className="section-title">Daily Food Gallery</h2>
          <p className="section-subtitle">
            Transparency is at the heart of our seva. See exactly how your
            donations nourish our cows every single day — from fresh green fodder
            to special festival treats.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {foodCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`filter-button ${
                activeCategory === cat.key ? "active" : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="gallery-card-media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-card-image"
                  loading="lazy"
                />
              </div>
              <div className="gallery-card-overlay">
                <h3>{item.title}</h3>
                <p className="line-clamp-2">{item.description}</p>
              </div>
              <div className="gallery-card-body">
                <h3>{item.title}</h3>
                <p className="line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="lightbox-backdrop"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="lightbox-card"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="lightbox-image"
              />
              <div className="lightbox-content">
                <div className="lightbox-header">
                  <h3>{selectedItem.title}</h3>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="lightbox-close"
                  >
                    <svg
                      className="icon-close"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p>{selectedItem.description}</p>
                <span className="tag-pill">{selectedItem.category}</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="gallery-cta">
          <p>
            Every meal is prepared with love and devotion. Your contribution
            ensures no cow goes hungry.
          </p>
          <a href="#donate" className="btn btn-primary">
            <span>Feed a Cow Today</span>
            <svg
              className="icon-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;