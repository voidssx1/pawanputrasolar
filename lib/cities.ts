export type City = {
  slug: string;
  name: string;
  state: string;
  discom: string;
  intro: string;
  image: string;
  imageAlt: string;
  areas: string[];
  local: { title: string; body: string }[];
  note: string;
  faqs: { q: string; a: string }[];
};

export const cities: City[] = [
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCT",
    discom: "BSES Rajdhani, BSES Yamuna or Tata Power-DDL",
    intro:
      "From Uttam Nagar and Dwarka to Rohini, Saket and Vasant Kunj, Delhi roofs carry some of the highest retail tariffs in the country. That makes a well-sized system pay back faster here than almost anywhere in NCR.",
    image: "/images/hero-rooftop-wide.webp",
    imageAlt: "Rooftop solar over a South Delhi neighbourhood at sunset",
    areas: [
      "Dwarka",
      "Uttam Nagar",
      "Janakpuri",
      "Rohini",
      "Pitampura",
      "Saket",
      "Vasant Kunj",
      "Greater Kailash",
      "Mayur Vihar",
      "Preet Vihar",
    ],
    local: [
      {
        title: "Delhi's top-up matters",
        body: "Residential systems can access the central PM Surya Ghar slabs plus Delhi's state top-up, which is why a 3 kW home system can reach ₹1.08 lakh of combined support. Eligibility is confirmed against your connection and meter.",
      },
      {
        title: "Three distribution companies",
        body: "The process differs slightly between BRPL, BYPL and Tata Power-DDL — portal, inspection sequence and net-meter timeline. We file with the one that serves your address, not a generic checklist.",
      },
      {
        title: "Terrace stock is varied",
        body: "Builder floors, DDA flats, farmhouses and old colonies all have different structural and access constraints. The survey decides the mounting detail before anything is ordered.",
      },
    ],
    note: "Delhi's state top-up is subject to the current notification and your DISCOM connection. We show the eligible amount in writing.",
    faqs: [
      {
        q: "How much subsidy can a Delhi home get?",
        a: "Under PM Surya Ghar, central support is ₹30,000/kW for the first 2 kW and ₹18,000 for the third, capped at ₹78,000. Delhi adds a top-up of up to ₹10,000/kW for eligible residential systems, taking the combined figure to about ₹1.08 lakh at 3 kW.",
      },
      {
        q: "Which DISCOM will process my file?",
        a: "It depends on your address. Uttam Nagar and Dwarka usually fall under BRPL, parts of East Delhi under BYPL or Tata Power-DDL. We confirm from your bill before applying.",
      },
      {
        q: "Do I need society permission for a rooftop system?",
        a: "For an independent house, no. For a flat or builder floor with shared terrace rights, written consent from the RWA or owner is needed and we help frame the request.",
      },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    discom: "Noida Power Company Limited (NPCL)",
    intro:
      "Noida's mix of plotted houses, high-rise societies and commercial towers makes it one of the most active rooftop markets in NCR. NPCL's process is well established — the work is in getting the roof, the load and the paperwork aligned.",
    image: "/images/society-aerial.webp",
    imageAlt: "Aerial view of solar arrays across Noida apartment towers",
    areas: [
      "Sector 50",
      "Sector 51",
      "Sector 62",
      "Sector 93",
      "Sector 100",
      "Sector 110",
      "Sector 137",
      "Sector 150",
      "Greater Noida West",
    ],
    local: [
      {
        title: "Plotted houses and villas",
        body: "Independent roofs in sectors 50–55 and the newer expressway sectors are straightforward on-grid candidates. Shade from water tanks and neighbouring floors is mapped before layout.",
      },
      {
        title: "High-rise societies",
        body: "Common-area loads — lifts, pumps, corridor and podium lighting — are usually the best starting point. The RWA resolution, NOC and net-metering route are handled as one file.",
      },
      {
        title: "Commercial buildings",
        body: "Offices and retail in sectors 62, 63 and 18 use most of their power in daylight, which suits solar without a battery. We model the tariff against generation hour by hour.",
      },
    ],
    note: "Delhi's state top-up does not apply in Uttar Pradesh. Central PM Surya Ghar support is available for eligible residential systems; any UP scheme is confirmed separately.",
    faqs: [
      {
        q: "Is the Delhi subsidy available in Noida?",
        a: "No. Delhi's ₹10,000/kW top-up is a Delhi NCT scheme. Noida residents can access central PM Surya Ghar support, subject to eligibility, and we confirm any additional UP notification in writing.",
      },
      {
        q: "Can a society install solar on common areas?",
        a: "Yes. It needs an RWA or AOA resolution, a no-objection from the builder where applicable, and a net-metering application for the common-area connection. We prepare the technical annexure for the resolution.",
      },
      {
        q: "How long does NPCL net metering take?",
        a: "Timelines move with inspection queues, but a realistic survey-to-meter window is four to eight weeks. We track the file and tell you what stage it is at rather than quoting a best case.",
      },
    ],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    state: "Uttar Pradesh",
    discom: "Noida Power Company Limited (NPCL)",
    intro:
      "Larger plots, newer roofs and a growing stock of low-rise societies make Greater Noida a strong fit for systems that cover a bigger share of the bill — sometimes with battery backup where supply is uneven.",
    image: "/images/house-close.webp",
    imageAlt: "Solar panels on the roof of a modern Greater Noida home",
    areas: [
      "Alpha",
      "Beta",
      "Gamma",
      "Delta",
      "Zeta",
      "Omega",
      "Knowledge Park",
      "Noida Extension",
      "Sector 1–16",
    ],
    local: [
      {
        title: "Bigger roofs, more room",
        body: "Independent houses and low-rise floors often have the area for 5–10 kW without compromising the terrace. Layout can respect future tank, lift or garden use.",
      },
      {
        title: "Institutions and campuses",
        body: "Schools, hostels, hospitals and institutional buildings have predictable daytime demand and large flat roofs — a natural fit for commercial-scale arrays.",
      },
      {
        title: "Backup where supply dips",
        body: "Some pockets see voltage swings and outages. A hybrid design with a modest battery keeps essential circuits stable without sizing for the whole house.",
      },
    ],
    note: "Systems are designed to NPCL's current metering and safety requirements. Structural loading is checked for older buildings before mounting is finalised.",
    faqs: [
      {
        q: "How much roof does a 5 kW system need?",
        a: "Roughly 35–45 square metres of shadow-free area for a standard tilted layout, depending on module wattage and row spacing. A survey gives the exact usable number.",
      },
      {
        q: "Can I run a tubewell on solar?",
        a: "Yes, with the right inverter and starting current. For agricultural or farm use, we size for pump surge and decide whether a battery or a small grid top-up makes more sense.",
      },
      {
        q: "Do you handle NPCL paperwork?",
        a: "We prepare the application, single-line diagram and inspection documents, and coordinate the net meter installation. You sign where the DISCOM requires the consumer.",
      },
    ],
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    state: "Haryana",
    discom: "Dakshin Haryana Bijli Vitran Nigam (DHBVN)",
    intro:
      "Gurugram combines high-rise condominiums, corporate offices and large villas. The bills are high, the daytime load is real, and the engineering question is usually how to share a single roof between many owners.",
    image: "/images/commercial-roof.webp",
    imageAlt: "Large solar installation on a Gurugram commercial roof",
    areas: [
      "DLF Phase 1–5",
      "Golf Course Road",
      "Sohna Road",
      "Sector 56",
      "Sector 65",
      "New Gurugram",
      "Manesar",
      "Palam Vihar",
    ],
    local: [
      {
        title: "Condominiums with common loads",
        body: "Lifts, pumps, clubhouses and basement lighting are the natural first phase. The RWA resolution and common-area metering are planned before the array is sized.",
      },
      {
        title: "Corporate and retail roofs",
        body: "Offices on Golf Course Road and Sohna Road can offset a large share of daytime consumption. We model capex versus third-party options honestly.",
      },
      {
        title: "Villas and farmhouses",
        body: "Larger roofs allow 10–20 kW systems, often hybrid where backup matters. Structural checks and cable routes are agreed before installation.",
      },
    ],
    note: "Haryana's net-metering rules and DHBVN's approval sequence apply. Society projects need the common-area connection details, not individual flat meters.",
    faqs: [
      {
        q: "Can individual flat owners install solar?",
        a: "Only with a defined roof right and society consent. Most Gurugram projects are therefore common-area systems owned by the RWA, with savings reflected in maintenance charges.",
      },
      {
        q: "Is net metering available for commercial roofs?",
        a: "DHBVN allows net metering within prescribed capacity limits. We check the sanctioned load and the current cap before promising export credits.",
      },
      {
        q: "What does a society project involve?",
        a: "A feasibility note, RWA resolution, technical annexure, DHBVN application, installation and net meter. We attend the AGM or committee meeting where needed.",
      },
    ],
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    discom: "Paschimanchal Vidyut Vitran Nigam (PVVNL)",
    intro:
      "From Vaishali and Indirapuram to Raj Nagar Extension, Ghaziabad has a deep stock of independent houses and mid-rise societies where a 3–10 kW system can remove a serious slice of the monthly bill.",
    image: "/images/family-home.webp",
    imageAlt: "A family at home in Ghaziabad with rooftop solar above",
    areas: [
      "Indirapuram",
      "Vaishali",
      "Vasundhara",
      "Kaushambi",
      "Raj Nagar",
      "Raj Nagar Extension",
      "Crossings Republik",
      "Sahibabad",
    ],
    local: [
      {
        title: "Independent houses first",
        body: "A 3–5 kW on-grid system suits most families here. The roof is usually accessible and the meter room close, which keeps installation simple.",
      },
      {
        title: "Society common areas",
        body: "Mid-rise societies along the NH-9 corridor can put lifts and pumps on solar. We help the RWA frame the resolution and the common-area application.",
      },
      {
        title: "Small commercial loads",
        body: "Shops, clinics and coaching centres with daytime demand see a quick payback. Load and tariff are checked before recommending a size.",
      },
    ],
    note: "PVVNL's sanction and net-meter process applies. Central subsidy is available for eligible residential systems; state support is confirmed against current notifications.",
    faqs: [
      {
        q: "How long does the PVVNL process take?",
        a: "Plan for roughly four to eight weeks from survey to net meter, depending on inspection queues. We file early and keep the installation sequence moving in parallel.",
      },
      {
        q: "Can I install solar on a rented house?",
        a: "With the owner's written consent and clarity on who owns the asset at the end of the tenancy. We help put that in the proposal so the economics are transparent.",
      },
      {
        q: "Will solar work during a power cut?",
        a: "An on-grid system will not. If backup is essential, choose a hybrid system with a battery and a clearly defined backup panel.",
      },
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana",
    discom: "Dakshin Haryana Bijli Vitran Nigam (DHBVN)",
    intro:
      "Faridabad's industrial estates, older sectors and newer group housing give it a broad mix of solar candidates — from a 5 kW home roof to a factory shed that can carry a few hundred kilowatts.",
    image: "/images/crew-install.webp",
    imageAlt: "Installers fitting solar panels on a Faridabad roof",
    areas: [
      "Sector 15",
      "Sector 21",
      "Sector 31",
      "Sector 46",
      "Sector 86",
      "Neharpar",
      "Ballabgarh",
      "DLF Industrial Area",
    ],
    local: [
      {
        title: "Industrial sheds",
        body: "Large metal roofs in the industrial estates suit high-capacity arrays. We check sheet load capacity, purlin spacing and access before design.",
      },
      {
        title: "Older residential sectors",
        body: "Many houses have the roof area but older wiring. The survey includes the meter room and earthing, not just the panels.",
      },
      {
        title: "Group housing",
        body: "Common-area solar for lifts and pumps follows the RWA route. Savings are visible in the maintenance budget rather than an individual bill.",
      },
    ],
    note: "DHBVN approval and net-metering rules apply. Industrial and commercial systems are quoted with a generation model and a clear capex/OPEX comparison.",
    faqs: [
      {
        q: "Can a factory run on rooftop solar?",
        a: "A rooftop array can carry a large share of daytime load. Most factories stay grid-connected and use solar to cut the expensive top slabs rather than to go off-grid.",
      },
      {
        q: "What roof type is best?",
        a: "Metal sheds need different clamps and spacing from RCC terraces. Both work; the structure and waterproofing detail decide the cost.",
      },
      {
        q: "Do you serve Ballabgarh and Neharpar?",
        a: "Yes. Survey slots are grouped by zone to keep travel efficient, so give us a preferred day and we will fit you into the nearest route.",
      },
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
