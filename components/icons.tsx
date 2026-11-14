import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

export function ArrowUR({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Phone({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M6.6 3h2.2l1.4 3.6-1.7 1.3a12 12 0 0 0 6.6 6.6l1.3-1.7L20 14.2v2.2a2.6 2.6 0 0 1-2.8 2.6C10.1 18.4 5.6 13.9 4 6.8A2.6 2.6 0 0 1 6.6 3Z" />
    </svg>
  );
}

export function Pin({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Clock({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Check({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function Sun({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </svg>
  );
}

export function Chevron({ size = 12, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Quote({ size = 22, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M10 7H6.5A2.5 2.5 0 0 0 4 9.5V12h4.5A2.5 2.5 0 0 1 11 14.5v0A2.5 2.5 0 0 1 8.5 17H7" />
      <path d="M20 7h-3.5A2.5 2.5 0 0 0 14 9.5V12h4.5A2.5 2.5 0 0 1 21 14.5v0A2.5 2.5 0 0 1 18.5 17H17" />
    </svg>
  );
}

export function Mail({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Shield({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3 5 6v5.5c0 4.4 3 7.7 7 9.5 4-1.8 7-5.1 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Home({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  );
}

export function Building({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M5 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16M14 9h4a1 1 0 0 1 1 1v11M3 21h18" />
      <path d="M8 8h3M8 12h3M8 16h3M17 13h1M17 17h1" />
    </svg>
  );
}

export function Users({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" />
      <path d="M16 5.4a3.2 3.2 0 0 1 0 6.1M17.5 14.6c1.9.6 3.2 2.4 3.2 4.9" />
    </svg>
  );
}

export function Wrench({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M14.5 6.5a4 4 0 0 0 5 5L11 20a2.8 2.8 0 0 1-4-4l8.5-8.5a4 4 0 0 0-1-1Z" />
      <path d="M6 18h.01" />
    </svg>
  );
}

export function Chart({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 20V4M4 20h16" />
      <path d="m7.5 15 3.5-4 3 2.5 4-6" />
    </svg>
  );
}

export function Star({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 9.7l5.9-.8L12 3.5Z" />
    </svg>
  );
}
