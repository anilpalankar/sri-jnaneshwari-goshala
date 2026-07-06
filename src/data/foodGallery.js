const foodGalleryData = [
  {
    id: 1,
    title: "Green Fodder",
    description:
      "Freshly harvested green fodder including napier grass, maize fodder, and sorghum — the staple diet of our cows, served twice daily.",
    image:
      "src/assets/green_fooder.png",
    category: "fodder",
  },
  {
    id: 2,
    title: "Dry Fodder & Hay",
    description:
      "Quality dry fodder and hay bales that provide essential roughage and fiber for healthy digestion throughout the year.",
    image:
      "src/assets/dry_fodder.png",
    category: "fodder",
  },
  {
    id: 3,
    title: "Grain Mix & Concentrates",
    description:
      "A nutritious blend of grains including wheat, maize, barley, and cottonseed cake — rich in protein and energy for strong, healthy cows.",
    image:
      "src/assets/grain_mix.png",
    category: "grains",
  },
  {
    id: 4,
    title: "Jaggery & Mineral Licks",
    description:
      "Pure jaggery and mineral blocks provided as daily supplements to boost immunity, improve digestion, and maintain overall health.",
    image:
      "src/assets/fooder_special.png",
    category: "supplements",
  },
  {
    id: 5,
    title: "Fresh Vegetables",
    description:
      "Seasonal vegetables like carrots, pumpkins, and beetroots — special treats that add variety and essential vitamins to the diet.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
    category: "supplements",
  },
  {
    id: 6,
    title: "Clean Drinking Water",
    description:
      "Fresh, clean water available 24/7 through automated water troughs — because hydration is the foundation of good health.",
    image:
      "https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=600&h=400&fit=crop",
    category: "fodder",
  },
  {
    id: 7,
    title: "Special Festival Treats",
    description:
      "On festivals and special occasions, cows are treated to a grand feast of fruits, sweets, and special grain preparations — celebrating our bond with them.",
    image:
      "https://images.unsplash.com/photo-1516467508483-8f9b44f676e5?w=600&h=400&fit=crop",
    category: "special",
  },
  {
    id: 8,
    title: "Morning Feeding Time",
    description:
      "The peaceful morning hours when our seva team serves the first meal of the day — a sight that fills the heart with devotion.",
    image:
      "https://images.unsplash.com/photo-1516467508483-8f9b44f676e5?w=600&h=400&fit=crop",
    category: "special",
  },
];

export const foodCategories = [
  { key: "all", label: "All" },
  { key: "fodder", label: "Fodder" },
  { key: "grains", label: "Grains" },
  { key: "supplements", label: "Supplements" },
  { key: "special", label: "Special Treats" },
];

export default foodGalleryData;