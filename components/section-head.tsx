"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHead({
  eyebrow,
  title,
  lede,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="section-head" id={id}>
      <motion.p
        className="eyebrow"
        initial={reduced ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="section-head__title"
        initial={reduced ? false : { opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.95, ease, delay: 0.04 }}
      >
        {title}
      </motion.h2>
      {lede && (
        <motion.p
          className="section-head__lede"
          initial={reduced ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease, delay: 0.14 }}
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
}

export function LinkArrow({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="link-arrow" href={href}>
      {children}
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 17 17 7M8 7h9v9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
