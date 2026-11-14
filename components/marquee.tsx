import { Sun } from "@/components/icons";

type MarqueeProps = {
  items: string[];
  className?: string;
  duration?: number;
};

/**
 * Oversized kinetic strip. Duplicated once for a seamless loop; hidden
 * from assistive tech because the same words appear elsewhere on the page.
 */
export default function Marquee({
  items,
  className = "",
  duration = 32,
}: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div
        className="marquee__track"
        style={{ animationDuration: `${duration}s` }}
      >
        {row.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            <Sun size={18} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
