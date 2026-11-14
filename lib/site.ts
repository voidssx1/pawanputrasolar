export const site = {
  name: "Pawanputra Solar Solutions",
  shortName: "Pawanputra",
  legalName: "Pawanputra Solar Solutions Pvt. Ltd.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phoneDisplay: "+91 98058 45213",
  phoneHref: "tel:+919805845213",
  address: {
    line1: "Plot No. E-44, First Floor",
    line2: "Nawada Housing Complex, Uttam Nagar",
    city: "New Delhi",
    pin: "110059",
  },
  hours: "Mon–Sat · 9:30 AM – 7:00 PM",
  areas: ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Gurugram", "Faridabad"],
} as const;

export const primaryNav = [
  {
    label: "Solar for",
    children: [
      { label: "Homes", href: "/residential", note: "3–20 kW rooftop systems" },
      { label: "Businesses", href: "/commercial", note: "50 kW – 1 MW+" },
      { label: "Housing societies", href: "/societies", note: "Common-area savings" },
    ],
  },
  {
    label: "Systems",
    children: [
      { label: "On-grid", href: "/systems/on-grid", note: "Lowest cost per unit" },
      { label: "Hybrid", href: "/systems/hybrid", note: "Solar with backup" },
      { label: "Off-grid", href: "/systems/off-grid", note: "Independent supply" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Subsidy", href: "/subsidy" },
  {
    label: "Company",
    children: [
      { label: "About us", href: "/about", note: "The team behind the roof" },
      { label: "How it works", href: "/process", note: "Survey to net meter" },
      { label: "Guides", href: "/guides", note: "Subsidy and planning notes" },
      { label: "Contact", href: "/contact", note: "Talk to the Delhi team" },
    ],
  },
] as const;

export const footerNav = [
  {
    title: "Solar for",
    links: [
      { label: "Homes", href: "/residential" },
      { label: "Businesses", href: "/commercial" },
      { label: "Housing societies", href: "/societies" },
      { label: "On-grid systems", href: "/systems/on-grid" },
      { label: "Hybrid systems", href: "/systems/hybrid" },
      { label: "Off-grid systems", href: "/systems/off-grid" },
    ],
  },
  {
    title: "Plan",
    links: [
      { label: "Subsidy & pricing", href: "/subsidy" },
      { label: "Savings calculator", href: "/calculator" },
      { label: "Guides", href: "/guides" },
      { label: "Get a detailed quote", href: "/quote" },
      { label: "Book a survey", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "How it works", href: "/process" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const cityLinks = [
  { label: "Delhi", href: "/solar/delhi" },
  { label: "Noida", href: "/solar/noida" },
  { label: "Greater Noida", href: "/solar/greater-noida" },
  { label: "Ghaziabad", href: "/solar/ghaziabad" },
  { label: "Gurugram", href: "/solar/gurugram" },
  { label: "Faridabad", href: "/solar/faridabad" },
] as const;
