export type GuideSection = {
  heading: string;
  paras?: string[];
  list?: string[];
  note?: string;
  table?: { head: string[]; rows: string[][] };
};

export type Guide = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: GuideSection[];
  takeaways: string[];
  faqs: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: "pm-surya-ghar-delhi",
    title: "PM Surya Ghar in Delhi, step by step",
    subtitle:
      "What the scheme pays, who qualifies, and where applications actually get stuck.",
    excerpt:
      "The central slabs, the Delhi top-up, the documents that matter and a realistic timeline — without the brochure language.",
    category: "Subsidy",
    readTime: "8 min read",
    date: "Updated November 2026",
    image: "/images/panel-macro.webp",
    imageAlt: "Close-up of a solar module under bright sunlight",
    intro:
      "PM Surya Ghar is a central scheme for residential rooftop solar. In Delhi it combines with a state top-up, which is why the headline figure for a 3 kW home system reaches about ₹1.08 lakh. The money is real, but it is paid against a process — not against a photograph of panels on a roof.",
    sections: [
      {
        heading: "What the scheme actually pays",
        paras: [
          "Central support is released in slabs, not as a flat percentage of your invoice. The first two kilowatts attract the highest rate; the third is lower; anything beyond three kilowatts is capped.",
        ],
        table: {
          head: ["System size", "Central support", "Delhi top-up (eligible homes)", "Combined"],
          rows: [
            ["1 kW", "₹30,000", "Up to ₹10,000", "Up to ₹40,000"],
            ["2 kW", "₹60,000", "Up to ₹20,000", "Up to ₹80,000"],
            ["3 kW", "₹78,000", "Up to ₹30,000", "Up to ₹1,08,000"],
            ["Above 3 kW", "₹78,000 cap", "Up to ₹30,000", "Up to ₹1,08,000"],
          ],
        },
        note: "Delhi's top-up is a state scheme and applies to eligible residential connections in Delhi NCT. Noida, Gurugram, Ghaziabad and Faridabad follow central support and their own state notifications — always confirm the current position before signing.",
      },
      {
        heading: "Who qualifies",
        list: [
          "A residential connection in your own name, or written consent from the connection holder.",
          "A roof you have the right to use, with society or owner consent where the terrace is shared.",
          "DCR-compliant modules — cells and modules made in India — installed by a registered vendor.",
          "A net-metering application processed through your DISCOM.",
          "No duplicate subsidy on the same connection or capacity.",
        ],
      },
      {
        heading: "The documents that matter",
        paras: [
          "Most delays are documentary, not technical. Keep a single folder with the latest electricity bill, identity proof, proof of ownership or consent, and the bank details that will receive the subsidy.",
          "If the meter is in a family member's name, an NOC and a joint declaration are usually needed. If the roof belongs to a society, the resolution and NOC have to be in the file before the application moves.",
        ],
      },
      {
        heading: "How the process runs",
        list: [
          "Survey and feasibility: roof area, shade, structure, meter room and sanctioned load.",
          "Proposal and agreement: size, equipment, subsidy amount, net-metering responsibility and payment stages.",
          "Application: vendor uploads the technical documents and consumer details on the national portal.",
          "Installation: modules, inverter, protection, earthing and cabling, with a commissioning report.",
          "Inspection and net meter: the DISCOM verifies the installation, seals the meter and activates net metering.",
          "Subsidy release: credited to the registered bank account after verification, typically several weeks after commissioning.",
        ],
      },
      {
        heading: "Where applications get stuck",
        list: [
          "Name mismatch between the electricity bill, Aadhaar and bank account.",
          "A vendor who is not registered for the scheme, or who substitutes non-DCR modules after approval.",
          "Sanctioned load too low for the proposed inverter, requiring an upgrade first.",
          "Society NOC missing for a terrace that is legally shared.",
          "Net-metering queue delays that the installer does not actively follow up.",
        ],
        note: "A quote that promises subsidy 'adjustment' before disbursal is offering you a loan or a discount, not the scheme. Ask exactly who receives the money and when.",
      },
      {
        heading: "A realistic timeline",
        paras: [
          "In Delhi NCR, plan for four to eight weeks from survey to net meter, with subsidy credited later. Monsoon, inspection queues and load-sanction changes can stretch that. A vendor who quotes a fixed ten-day end-to-end timeline is describing the best case, not the median.",
        ],
      },
    ],
    takeaways: [
      "Subsidy is slab-based and capped at ₹78,000 centrally for residential systems.",
      "Delhi's top-up can take a 3 kW home to roughly ₹1.08 lakh combined.",
      "DCR modules and a registered vendor are non-negotiable.",
      "Document mismatches cause more delays than installation does.",
    ],
    faqs: [
      {
        q: "Is the subsidy paid to me or to the installer?",
        a: "For the residential scheme, it is normally credited to the consumer's registered bank account after inspection and commissioning. Any arrangement where the installer keeps it should be documented as a discount and explained clearly.",
      },
      {
        q: "Can I claim subsidy on a system I already installed?",
        a: "Generally no. The application and approval sequence has to precede commissioning, and the installation must meet the scheme's equipment and vendor conditions.",
      },
      {
        q: "Does a battery qualify?",
        a: "The solar component is assessed separately. Battery storage is usually outside the subsidy and should be shown as a separate line in your quote.",
      },
    ],
  },
  {
    slug: "right-size-rooftop",
    title: "How to size a rooftop system without overpaying",
    subtitle:
      "Start with units, not kilowatts. Then check the roof, the shade and the life you are planning for.",
    excerpt:
      "A practical method for choosing 3, 5 or 10 kW — and the three places where buyers routinely spend money they do not need to.",
    category: "Planning",
    readTime: "7 min read",
    date: "Updated November 2026",
    image: "/images/house-close.webp",
    imageAlt: "A rooftop solar array on a contemporary Indian house",
    intro:
      "Most solar quotations begin with a kilowatt number. That is backwards. The number should fall out of three things: how many units you actually consume, how much shadow-free roof you have, and what you want the system to do when the grid fails.",
    sections: [
      {
        heading: "Step one: read the bill in units",
        paras: [
          "Your bill has a consumption figure in kWh — units — usually for one or two months. A typical Delhi NCR home on a ₹6,000 monthly bill consumes roughly 700–800 units a month at an all-in rate near ₹8. Your own tariff slabs will differ, but the method does not.",
          "A well-oriented 1 kW system in this region generates about 4 units a day on an annual average — around 120–140 units a month. So a 5 kW array is roughly a 600–700 unit monthly generator, before any shading losses.",
        ],
        table: {
          head: ["Monthly bill (indicative)", "Monthly units", "Sensible starting size"],
          rows: [
            ["₹1,500 – ₹2,500", "180 – 300", "2 – 3 kW"],
            ["₹3,000 – ₹4,500", "350 – 550", "3 – 4 kW"],
            ["₹5,000 – ₹8,000", "600 – 950", "5 – 7 kW"],
            ["₹9,000 – ₹15,000", "1,000 – 1,700", "8 – 12 kW"],
          ],
        },
        note: "These are starting points, not quotes. Tariff slabs, sanctioned load, roof orientation and future consumption all move the answer.",
      },
      {
        heading: "Step two: measure usable roof, not total roof",
        paras: [
          "Plan on roughly 8–10 square metres of shadow-free area per kilowatt for a tilted layout, including row spacing. A 1,000 sq ft terrace is not 93 square metres of usable array — water tanks, staircases, lift rooms, parapets and future access all take a slice.",
          "Shade is the harder constraint. A parapet shadow in December, a neighbouring tower, a water tank or a cable run can knock out a row. A shade study at different times of day is worth more than a bigger module.",
        ],
      },
      {
        heading: "Step three: decide what happens in a power cut",
        paras: [
          "A grid-tied system switches off during an outage. If that is acceptable, an on-grid design gives you the lowest cost per unit and the fastest payback.",
          "If lights, fans, internet, a fridge or a medical device must stay on, plan a hybrid system with a backup panel. Name the circuits before the battery is sized. A battery sized for the whole house is usually the single largest avoidable cost in a residential quote.",
        ],
      },
      {
        heading: "Where buyers overpay",
        list: [
          "Oversizing for a bill that is already falling after efficiency upgrades or tariff changes.",
          "Buying a battery for the whole house instead of a defined backup panel.",
          "Choosing a premium module for a roof that is shaded for half the day — layout beats wattage.",
          "Paying for export capacity that the DISCOM will not credit beyond its sanctioned limit.",
        ],
      },
      {
        heading: "A sanity check before you sign",
        list: [
          "Does the proposal show estimated monthly units, not just kW?",
          "Is the inverter within the sanctioned load, or is a load upgrade included?",
          "Is the subsidy amount separated from the system price?",
          "Are mounting, cabling, protection, earthing and net-metering fees itemised?",
          "Is there a written workmanship warranty and a named service contact?",
        ],
      },
    ],
    takeaways: [
      "Convert the bill to units first; size the array second.",
      "Assume 8–10 sq m of usable roof per kW.",
      "Decide the outage requirement before comparing prices.",
      "A smaller, well-laid-out array often beats a larger, shaded one.",
    ],
    faqs: [
      {
        q: "Is a bigger system always better?",
        a: "No. Export credits have limits, roofs have shade and consumption changes. The right size is the one that serves your load without stranding capital.",
      },
      {
        q: "Can I add panels later?",
        a: "Often yes, if the inverter, structure and wiring have headroom. It is cheaper to plan that headroom now than to replace the inverter in two years.",
      },
      {
        q: "How accurate is a remote estimate?",
        a: "Useful for a first conversation, not for a quote. Structure, shade and meter-room details need a physical survey.",
      },
    ],
  },
  {
    slug: "society-solar-playbook",
    title: "Housing society solar: from AGM to net meter",
    subtitle:
      "How an RWA can put lifts, pumps and corridor lighting on daylight — without a year of meetings.",
    excerpt:
      "The resolution, the common-area meter, the cost-sharing models and the checklist that keeps a society project moving.",
    category: "Societies",
    readTime: "9 min read",
    date: "Updated November 2026",
    image: "/images/society-aerial.webp",
    imageAlt: "Aerial view of solar panels on apartment society rooftops",
    intro:
      "A housing society is not a bigger house. It is a small institution with shared property, a committee, a maintenance budget and members who will ask what happens when they sell. Solar works well in societies when the project is framed as an infrastructure decision, not a green gesture.",
    sections: [
      {
        heading: "Start with the common-area bill",
        paras: [
          "Lifts, water pumps, corridor and podium lighting, STP, clubhouse and security systems usually run on one or more common-area connections. Those bills are predictable, paid by the society and unaffected by individual flat metering disputes — which makes them the cleanest place to start.",
          "Get twelve months of bills, the sanctioned load and the tariff category before discussing array size. A society with a 40 kW common load in daylight is a very different proposition from one that mostly runs pumps at night.",
        ],
      },
      {
        heading: "The resolution that actually helps",
        paras: [
          "A one-line resolution ('approved in principle') creates more work later. Ask the committee to approve the project scope, the budget ceiling, the agency selection method, the roof area allocated and the authority to sign the DISCOM application.",
          "Record the roof area and access route in the minutes. Disputes usually appear when a terrace is later claimed for a garden, a clubhouse extension or a private use.",
        ],
        list: [
          "Project scope and capacity range.",
          "Budget ceiling and payment stages.",
          "Roof area, access and restoration responsibility.",
          "Authority to file and sign the net-metering application.",
          "Who owns the asset and how savings appear in the budget.",
        ],
      },
      {
        heading: "Cost sharing, plainly",
        paras: [
          "Most societies fund the system from reserves or a one-time maintenance contribution, and then retain the savings. A third-party or OPEX model avoids capital but usually gives the society a lower effective tariff than ownership.",
          "If flats are billed by area, the savings are shared by area. If common charges are equal, they are shared equally. Decide the principle before the money is spent, not after the first reduced bill arrives.",
        ],
      },
      {
        heading: "Metering and approval",
        paras: [
          "The application goes against the common-area connection, not individual flats. The DISCOM will check sanctioned load, the single-line diagram, protection and the net-meter location. Some societies have multiple common-area meters; the design should state which one is being offset and how surplus is treated.",
          "For a hybrid or battery-backed design, the backup panel and changeover need to be clearly separated from the lift and pump circuits. Safety documentation matters more in a shared building than in a home.",
        ],
      },
      {
        heading: "A realistic sequence",
        list: [
          "Week 1–2: bill and load study, roof access, shade survey.",
          "Week 2–3: feasibility note and budget range for the committee.",
          "Week 3–4: resolution, agency selection, agreement.",
          "Week 4–6: DISCOM application, structural and electrical design.",
          "Week 6–9: installation, testing, inspection.",
          "Week 9–12: net meter, commissioning, savings review with the committee.",
        ],
      },
      {
        heading: "Pitfalls to write down",
        list: [
          "Roof rights that are assumed rather than recorded.",
          "Maintenance responsibility falling between the society and the installer.",
          "A system sized for the whole campus when only one meter can be offset.",
          "No plan for cleaning, vegetation or future terrace works.",
          "Quotes that omit cable runs from the roof to a distant meter room.",
        ],
      },
    ],
    takeaways: [
      "Anchor the project to the common-area bill, not individual flats.",
      "Approve scope, budget and authority in one resolution.",
      "Confirm which meter is being offset before design.",
      "Record roof rights, access and maintenance in the minutes.",
    ],
    faqs: [
      {
        q: "Can a society use the residential subsidy?",
        a: "PM Surya Ghar is framed around residential households. Society common-area systems are usually treated separately; the applicable support depends on the connection category and current scheme rules. We confirm before the committee commits.",
      },
      {
        q: "How long does an RWA project take?",
        a: "Three months is a realistic survey-to-meter window for a straightforward common-area system. Committee approvals and DISCOM queues are the usual variables.",
      },
      {
        q: "What if the society later adds a lift or EV chargers?",
        a: "Plan inverter and distribution headroom now. A modular design that can add a second array or battery is cheaper than replacing the first one.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
