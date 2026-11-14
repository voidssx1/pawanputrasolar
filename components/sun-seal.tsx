import { Sun } from "@/components/icons";

type SunSealProps = {
  text?: string;
  className?: string;
  size?: number;
};

/** Rotating circular badge used over imagery. */
export default function SunSeal({
  text = "PM SURYA GHAR · DELHI NCR · SUBSIDY HANDLED · ",
  className = "",
  size = 132,
}: SunSealProps) {
  return (
    <div
      className={`sun-seal ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="sun-seal__ring">
        <defs>
          <path
            id="sun-seal-path"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text>
          <textPath href="#sun-seal-path">{text}</textPath>
        </text>
      </svg>
      <span className="sun-seal__core">
        <Sun size={size * 0.2} />
      </span>
    </div>
  );
}
