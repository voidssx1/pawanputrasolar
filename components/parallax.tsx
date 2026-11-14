"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Moves its children gently against the scroll direction.
 * The child should fill the frame; the frame clips the overflow.
 */
export default function Parallax({
  children,
  className = "",
  strength = 28,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <div className={`parallax ${className}`} ref={ref}>
      <motion.div
        className="parallax__inner"
        style={reduced ? undefined : { y }}
      >
        {children}
      </motion.div>
    </div>
  );
}
