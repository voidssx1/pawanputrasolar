import { Check, Sun } from "@/components/icons";

const items = [
  "PM Surya Ghar paperwork included",
  "DCR-compliant modules",
  "Tier-1 inverters",
  "25-year performance warranty",
  "Net metering handled",
  "Battery-ready hybrid designs",
  "Serving Delhi NCR",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-label="What we handle">
      <div className="ticker-track">
        {items.map((item) => (
          <span className="ticker-item" key={item}>
            <Sun size={13} />
            {item}
          </span>
        ))}
        {items.map((item) => (
          <span className="ticker-item" key={`${item}-dup`} aria-hidden="true">
            <Check size={13} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
