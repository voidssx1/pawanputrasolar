export type Faq = { q: string; a: string };

export const processFaqs: Faq[] = [
  {
    q: "What does the free site survey actually include?",
    a: "A trained surveyor measures the roof, checks the electrical panel and meter, maps shade through the day and photographs the mounting points. You leave with a system size, a layout and a realistic savings range — no obligation.",
  },
  {
    q: "How long does the whole process take?",
    a: "For a typical home, survey to commissioned system is 4–6 weeks. Commercial and society projects run longer because of DISCOM approvals and AGM timelines. We give you a written schedule after the survey.",
  },
  {
    q: "Who handles the subsidy and net-metering paperwork?",
    a: "We do. That includes the PM Surya Ghar application, DISCOM forms, net-meter inspection and the final commissioning report. You sign where needed; we keep the file moving.",
  },
  {
    q: "What warranty comes with the system?",
    a: "Panel linear-performance warranties are typically 25 years, inverters carry 5–10 years depending on model, and our workmanship warranty covers installation for 5 years. Exact terms are written into your proposal.",
  },
  {
    q: "Will the system work during a power cut?",
    a: "A standard on-grid system shuts down during an outage for safety. If you need backup, we design a hybrid system with a battery for the circuits you choose — lights, fans, internet and refrigeration, for example.",
  },
  {
    q: "Is my roof suitable?",
    a: "Most concrete and metal roofs are. We need roughly 80–100 sq ft of shade-free area per kW, a structurally sound roof and a DISCOM connection. If shade is unavoidable, we design around it or recommend a smaller, better-placed array.",
  },
];

export const residentialFaqs: Faq[] = [
  {
    q: "Will solar really cut my bill by 90%?",
    a: "It can, but the honest answer depends on how much you consume during daylight and how your DISCOM credits exports. We size the system against your actual bill and show you a conservative saving range before you commit.",
  },
  {
    q: "On-grid, off-grid or hybrid — which one should I choose?",
    a: "On-grid is the simplest and cheapest if outages are rare. Hybrid adds battery backup for selected circuits. Off-grid is for sites without a reliable connection. Most Delhi NCR homes are best served by on-grid or a modest hybrid.",
  },
  {
    q: "How much subsidy will I get?",
    a: "Under PM Surya Ghar, central support is ₹30,000 per kW for the first 2 kW and ₹18,000 for the third kW, capped at ₹78,000. Delhi adds a top-up that can take a 3 kW system to ₹1.08 lakh. Your final amount depends on eligibility and approval.",
  },
  {
    q: "Can I expand the system later?",
    a: "Often yes, if the inverter, wiring and roof space allow it. We plan the initial design with headroom where it makes sense, and document the expansion path in your handover file.",
  },
  {
    q: "What maintenance does a home system need?",
    a: "Panel cleaning every few weeks in Delhi's dust season, an annual electrical check and a look at the monitoring app. We offer an annual maintenance plan that covers cleaning, tightening and performance review.",
  },
];

export const commercialFaqs: Faq[] = [
  {
    q: "What size system does a commercial roof need?",
    a: "It follows your load profile, tariff and roof area rather than a fixed formula. Most SME rooftops fall between 50 kW and 500 kW; larger industrial sites can go past 1 MW. We model generation against your half-hourly usage.",
  },
  {
    q: "Capex, OPEX or PPA — what is the difference?",
    a: "Capex means you own the asset and take the depreciation benefits. OPEX/leasing lowers upfront outflow but costs more over time. A PPA sells you units at a fixed discount to grid tariff. We model all three when financing is part of the brief.",
  },
  {
    q: "How do you protect production during installation?",
    a: "Installation is phased around shifts, with agreed shutdown windows and a site-specific safety plan. Cable routes and interconnection points are planned before material lands on site.",
  },
  {
    q: "What about accelerated depreciation and tax?",
    a: "Commercial solar can qualify for accelerated depreciation and other benefits depending on entity and asset classification. We provide the technical documentation; your CA should confirm the tax treatment.",
  },
  {
    q: "How is performance monitored?",
    a: "Every system gets string-level monitoring with alerts for underperformance. You receive a monthly generation report and an annual review against the modelled yield.",
  },
];

export const societyFaqs: Faq[] = [
  {
    q: "Who signs the agreement for a society system?",
    a: "Usually the registered society through its managing committee, following an AGM resolution. We provide the technical proposal, financial model and draft resolution to make the AGM straightforward.",
  },
  {
    q: "Can solar run lifts, pumps and common lighting?",
    a: "Yes. Common-area loads are a good match for rooftop solar, especially when the society has a separate common meter. We design to the common-meter consumption and keep residential connections separate.",
  },
  {
    q: "How are savings shared with residents?",
    a: "Savings sit on the society's common account and typically reduce maintenance charges or build a sinking fund. The committee decides the accounting treatment; we provide monthly generation and offset reports.",
  },
  {
    q: "What roof area does a society need?",
    a: "Roughly 80–100 sq ft per kW of shade-free area. A 100 kW system needs about 8,000–10,000 sq ft across one or more roofs, plus a safe cable path to the common meter room.",
  },
  {
    q: "Do you handle DISCOM NOCs and subsidy?",
    a: "Yes. We prepare the NOC application, coordinate inspections and complete the PM Surya Ghar paperwork for eligible common-area systems.",
  },
];

export const subsidyFaqs: Faq[] = [
  {
    q: "Who is eligible for the PM Surya Ghar subsidy?",
    a: "Indian homeowners with a valid electricity connection, ownership of the roof, and an installation through a registered vendor. The scheme is for residential rooftops; commercial and society common areas follow separate rules.",
  },
  {
    q: "How is the subsidy calculated?",
    a: "For residential systems: ₹30,000 per kW for the first 2 kW, ₹18,000 for the third kW, and a cap of ₹78,000. Delhi's state top-up can bring a 3 kW system to ₹1.08 lakh, subject to approval.",
  },
  {
    q: "When does the subsidy money arrive?",
    a: "It is usually disbursed after commissioning, net-meter installation and DISCOM verification, directly to the homeowner's bank account. Timelines vary; we track the file and flag delays.",
  },
  {
    q: "Can I get a loan for the balance?",
    a: "Several banks offer collateral-free rooftop solar loans under the scheme. We can share the documentation pack your bank will ask for, but loan approval and terms remain with the lender.",
  },
  {
    q: "Does the subsidy apply to batteries?",
    a: "The standard PM Surya Ghar residential subsidy is for the solar system, not batteries. Battery costs are usually borne by the homeowner unless a specific state or lender programme applies.",
  },
];
