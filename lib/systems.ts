export type SolarSystem = {
  slug: "on-grid" | "off-grid" | "hybrid";
  name: string;
  kicker: string;
  tagline: string;
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
  sizes: string;
  battery: string;
  subsidy: string;
  payback: string;
  bestFor: string[];
  ideal: { title: string; body: string }[];
  components: { name: string; note: string }[];
  steps: { title: string; body: string }[];
  watchouts: string[];
  faqs: { q: string; a: string }[];
};

export const systems: SolarSystem[] = [
  {
    slug: "on-grid",
    name: "On-grid",
    kicker: "Grid-tied solar",
    tagline: "The grid is your battery.",
    short: "Lowest cost per unit",
    summary:
      "Solar panels, a string inverter and a net meter. Daylight runs the building first; the surplus is exported and credited against your next bill. No battery to buy, replace or maintain.",
    image: "/images/hero-rooftop-wide.webp",
    imageAlt: "An on-grid rooftop solar array above a Delhi home at sunset",
    sizes: "3 kW – 100 kW",
    battery: "None",
    subsidy: "Eligible",
    payback: "2 – 4 years",
    bestFor: [
      "Homes and offices with a stable grid",
      "Owners optimising for the fastest payback",
      "Roofs where every square foot counts",
    ],
    ideal: [
      {
        title: "You have a dependable connection",
        body: "On-grid systems switch off during a outage, by regulation. If the grid is stable, there is little to gain from paying for a battery.",
      },
      {
        title: "Your daytime load is real",
        body: "Air conditioning, pumps, cold storage, offices and shops use power while the sun is up. That is when solar is worth the most.",
      },
      {
        title: "You want the simplest economics",
        body: "No battery replacement cycle, no extra maintenance, the smallest equipment footprint and the lowest cost per generated unit.",
      },
    ],
    components: [
      { name: "DCR solar modules", note: "Domestic-content cells for subsidy eligibility" },
      { name: "String inverter", note: "Tier-1, monitoring-ready, sized with headroom" },
      { name: "DC and AC protection", note: "Isolators, SPDs, earthing and cable routing" },
      { name: "Bi-directional net meter", note: "Installed and sealed by the DISCOM" },
      { name: "Mounting structure", note: "Wind-rated, galvanised, roof-specific" },
      { name: "Monitoring", note: "App-based generation and fault alerts" },
    ],
    steps: [
      {
        title: "Measure and model",
        body: "We map the roof, shade and meter room, then model generation against your actual consumption.",
      },
      {
        title: "Apply and install",
        body: "The subsidy file and DISCOM application go in first. Installation is sequenced around your routine.",
      },
      {
        title: "Net meter and handover",
        body: "The DISCOM seals the meter, we configure monitoring and walk you through the first readings.",
      },
    ],
    watchouts: [
      "No backup during a power cut — this is a grid-tied system.",
      "Export credits are usually carried forward, not paid in cash.",
      "The sanction depends on DISCOM feasibility at your meter.",
    ],
    faqs: [
      {
        q: "What happens to extra units I export?",
        a: "They are credited against your consumption, typically carried forward for a year under net metering. The exact settlement follows your DISCOM's current regulations.",
      },
      {
        q: "Can I add a battery later?",
        a: "Often yes, but it is cheaper to plan the inverter and wiring for it now. If backup matters, start with a hybrid design instead of retrofitting.",
      },
      {
        q: "Is on-grid eligible for PM Surya Ghar?",
        a: "Residential on-grid systems with DCR modules and an approved installer are the standard route for the subsidy. We confirm eligibility in writing before you pay.",
      },
    ],
  },
  {
    slug: "hybrid",
    name: "Hybrid",
    kicker: "Grid + battery",
    tagline: "Daylight, with a safety net.",
    short: "Backup for critical circuits",
    summary:
      "A grid-tied system with a battery for the circuits that matter — lights, fans, internet, refrigeration. Solar charges the battery first, then the building, then exports the surplus.",
    image: "/images/battery-room.webp",
    imageAlt: "A home battery and inverter installation in a utility room",
    sizes: "3 kW – 30 kW",
    battery: "5 – 20 kWh",
    subsidy: "Eligible",
    payback: "3 – 5 years",
    bestFor: [
      "Homes with frequent or long outages",
      "Clinics, shops and home offices",
      "Owners planning for an EV or heat pump",
    ],
    ideal: [
      {
        title: "The power cut is the problem",
        body: "If outages disrupt work, medication storage or security, a battery is not a luxury — it is the reason to go solar.",
      },
      {
        title: "You can name the critical circuits",
        body: "We design a backup panel for specific loads rather than trying to run the whole house. That keeps the battery honest and affordable.",
      },
      {
        title: "You want room to grow",
        body: "Hybrid inverters can accept more panels and a larger battery later, so the system does not need to be perfect on day one.",
      },
    ],
    components: [
      { name: "DCR solar modules", note: "Subsidy-compliant, shade-tolerant layout" },
      { name: "Hybrid inverter", note: "Solar, battery and grid managed in one unit" },
      { name: "Lithium battery", note: "LFP chemistry, indoors, sized to your backup list" },
      { name: "Backup sub-panel", note: "Selected circuits only, clearly labelled" },
      { name: "Protection and earthing", note: "DC/AC isolation and surge protection" },
      { name: "Monitoring", note: "Solar, battery and grid flows in one view" },
    ],
    steps: [
      {
        title: "List what must stay on",
        body: "We walk through your appliances and agree the backup load before sizing the battery.",
      },
      {
        title: "Design the two panels",
        body: "One panel for everything, one for backup circuits. The drawing is part of your proposal.",
      },
      {
        title: "Commission and test",
        body: "We simulate an outage and confirm changeover, battery runtime and monitoring before handover.",
      },
    ],
    watchouts: [
      "A battery sized for the whole house gets expensive quickly.",
      "Runtime depends on load, depth of discharge and battery temperature.",
      "Battery warranties differ — read cycles and throughput, not just years.",
    ],
    faqs: [
      {
        q: "How long will the battery last?",
        a: "It depends on the load you keep on it. A 5 kWh battery running lights, fans, internet and a fridge usually covers a typical evening outage; air conditioning needs a much larger bank.",
      },
      {
        q: "Can I start on-grid and add a battery later?",
        a: "Yes if the inverter and wiring are hybrid-ready. Retrofitting a grid-only inverter usually means replacing it, so decide before you buy.",
      },
      {
        q: "Does a battery affect the subsidy?",
        a: "The solar component is assessed separately. Battery costs are generally not subsidised, and we show the eligible and ineligible amounts separately in the quote.",
      },
    ],
  },
  {
    slug: "off-grid",
    name: "Off-grid",
    kicker: "Standalone solar",
    tagline: "Independent by design.",
    short: "Power without a connection",
    summary:
      "Panels, a charge controller, a battery bank and an inverter, with no reliance on the grid. Sized around daily consumption and days of autonomy, because there is nothing to fall back on.",
    image: "/images/dusk-home.webp",
    imageAlt: "A farmhouse lit at dusk with a standalone solar installation",
    sizes: "1 kW – 20 kW",
    battery: "10 – 60 kWh",
    subsidy: "Case by case",
    payback: "5 – 8 years",
    bestFor: [
      "Farmhouses and remote sites",
      "Tubewells, cabins and guard posts",
      "Places where a connection is unreliable or absent",
    ],
    ideal: [
      {
        title: "There is no dependable grid",
        body: "If the connection is absent, weak or seasonal, a standalone system is often the only way to run a site properly.",
      },
      {
        title: "Loads can be controlled",
        body: "Off-grid rewards discipline: efficient fans, LED lighting, variable-speed pumps and a clear priority list.",
      },
      {
        title: "You value independence",
        body: "No bill, no outage, no export paperwork — but also no grid to lean on during a cloudy week. The battery bank carries that risk.",
      },
    ],
    components: [
      { name: "Solar array", note: "Oversized slightly for monsoon and winter yield" },
      { name: "MPPT charge controller", note: "Efficient charging, protected against reverse current" },
      { name: "Battery bank", note: "LFP or tubular, sized for autonomy and cycles" },
      { name: "Standalone inverter", note: "Pure sine wave, surge-rated for pumps" },
      { name: "Changeover and protection", note: "Generator input where one exists" },
      { name: "Remote monitoring", note: "Useful for sites that are not visited daily" },
    ],
    steps: [
      {
        title: "Audit the daily load",
        body: "We list every appliance, its wattage and hours, then add a realistic margin for inefficiency and cloudy days.",
      },
      {
        title: "Size array and autonomy",
        body: "The array is matched to the worst month; the battery is matched to the number of days the site must ride through.",
      },
      {
        title: "Install and train",
        body: "Commissioning includes a load-priority walkthrough so the site is run within its design envelope.",
      },
    ],
    watchouts: [
      "Oversizing the battery is common; an honest load audit usually saves money.",
      "Air conditioning, geysers and welding loads make off-grid expensive.",
      "Batteries age — plan for a replacement reserve in the lifecycle cost.",
    ],
    faqs: [
      {
        q: "Can an off-grid system run air conditioning?",
        a: "It can, but the array and battery grow sharply. For a farmhouse, it is often cheaper to cool one room well than to size for the whole building.",
      },
      {
        q: "Do I need a generator as well?",
        a: "Not always. If the site must run through an unusually long monsoon spell, a small generator input is a sensible belt-and-braces measure.",
      },
      {
        q: "Is there a subsidy?",
        a: "Residential rooftop support is linked to grid-connected systems. Off-grid eligibility depends on the scheme and site; we confirm the position for your location before quoting.",
      },
    ],
  },
];

export function getSystem(slug: string) {
  return systems.find((system) => system.slug === slug);
}
