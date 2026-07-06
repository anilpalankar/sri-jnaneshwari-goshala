const adoptionPlans = [
  {
    id: 1,
    name: "Gopala Seva",
    duration: "Monthly",
    price: 1100,
    currency: "₹",
    features: [
      "Sponsor one cow's daily fodder",
      "Receive monthly update with photo",
      "Digital adoption certificate",
      "Prasad delivered quarterly",
    ],
    highlighted: false,
    icon: "🐄",
  },
  {
    id: 2,
    name: "Goseva Ratna",
    duration: "Monthly",
    price: 2500,
    currency: "₹",
    features: [
      "Sponsor full care for one cow",
      "Weekly photo & video updates",
      "Personalised adoption certificate",
      "Prasad delivered monthly",
      "Priority visit to the Goshala",
      "Name on our Seva Wall",
    ],
    highlighted: true,
    icon: "👑",
  },
  {
    id: 3,
    name: "Gomata Poshana",
    duration: "Yearly",
    price: 25000,
    currency: "₹",
    features: [
      "Full-year sponsorship of one cow",
      "Monthly photo & video updates",
      "Framed adoption certificate",
      "Prasad delivered monthly",
      "Annual Goshala visit with special puja",
      "Name on our Seva Wall",
      "Special blessing ceremony on your behalf",
    ],
    highlighted: false,
    icon: "🙏",
  },
];

const adoptionFaqs = [
  {
    question: "What does my sponsorship cover?",
    answer:
      "Your sponsorship covers the daily care of a cow including green fodder, dry fodder, grains, jaggery, mineral supplements, veterinary care, and clean drinking water. Every rupee goes directly towards cow welfare.",
  },
  {
    question: "Can I choose a specific cow to adopt?",
    answer:
      "Yes! Once you sign up, we will share profiles of cows available for adoption. You can pick the one that touches your heart, and we will assign them to you.",
  },
  {
    question: "How will I know my cow is being cared for?",
    answer:
      "Depending on your plan, you will receive regular updates — photos, videos, and health reports — so you can see exactly how your contribution is making a difference.",
  },
  {
    question: "Is this a legal adoption?",
    answer:
      "This is a symbolic adoption (sponsorship). The cow remains under the care of Sri Jnaneshwari Goshala, but you become its guardian through your generous support.",
  },
  {
    question: "Can I cancel my sponsorship?",
    answer:
      "Yes, you can cancel at any time. We just ask for a 30-day notice so we can arrange alternative care for the cow. There are no cancellation fees.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, donations to Sri Jnaneshwari Goshala are eligible for tax exemption under Section 80G of the Income Tax Act.",
  },
];

export { adoptionFaqs };
export default adoptionPlans;