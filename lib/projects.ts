export type Project = {
  slug: string;
  title: string;
  place: string;
  segment: "Home" | "Business" | "Society";
  size: string;
  image: string;
  metric: string;
  metricLabel: string;
  summary: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "vasant-kunj-villa",
    title: "A villa that runs on daylight",
    place: "Vasant Kunj, New Delhi",
    segment: "Home",
    size: "8.4 kWp",
    image: "/images/hero-rooftop-wide.webp",
    metric: "92%",
    metricLabel: "of annual bill offset",
    summary:
      "A south-facing roof, a tight inverter placement and a layout that keeps the terrace usable. Sized from a year of bills, not a rule of thumb.",
    year: "2025",
  },
  {
    slug: "okhla-packaging",
    title: "A factory roof, finally earning",
    place: "Okhla Phase II, New Delhi",
    segment: "Business",
    size: "180 kWp",
    image: "/images/commercial-roof.webp",
    metric: "68%",
    metricLabel: "of daytime load met",
    summary:
      "Three sheds, one interconnection point. The array was phased around production shifts so the line never stopped.",
    year: "2025",
  },
  {
    slug: "dwarka-society",
    title: "Common areas, common savings",
    place: "Dwarka Sector 12, New Delhi",
    segment: "Society",
    size: "120 kWp",
    image: "/images/society-aerial.webp",
    metric: "₹18.6 L",
    metricLabel: "estimated saving over 25 years",
    summary:
      "Lifts, pumps and corridor lighting moved off the society's diesel-heavy common meter. AGM documentation handled end to end.",
    year: "2024",
  },
  {
    slug: "uttam-nagar-home",
    title: "A five-kilowatt answer",
    place: "Uttam Nagar, New Delhi",
    segment: "Home",
    size: "5.2 kWp",
    image: "/images/house-close.webp",
    metric: "₹6,900",
    metricLabel: "average monthly saving",
    summary:
      "An ordinary terrace with a water tank, a clothesline and limited space. Careful rail planning kept every panel clear of shade.",
    year: "2024",
  },
  {
    slug: "gurugram-office",
    title: "An office with a smaller bill",
    place: "Sector 44, Gurugram",
    segment: "Business",
    size: "60 kWp",
    image: "/images/battery-room.webp",
    metric: "1.9 yr",
    metricLabel: "expected payback",
    summary:
      "Rooftop array plus critical-load battery backup for the server room, designed around the building's existing electrical room.",
    year: "2025",
  },
  {
    slug: "noida-society",
    title: "Ten towers, one decision",
    place: "Sector 76, Noida",
    segment: "Society",
    size: "240 kWp",
    image: "/images/society-aerial.webp",
    metric: "31%",
    metricLabel: "reduction in common-area spend",
    summary:
      "A staged rollout across clubhouse and tower roofs, with resident-facing generation reporting from day one.",
    year: "2025",
  },
];
