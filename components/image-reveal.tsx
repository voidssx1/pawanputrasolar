"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ImageRevealProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  delay?: number;
  imgClassName?: string;
  absolute?: boolean;
};

export default function ImageReveal({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  delay = 0,
  imgClassName = "",
  absolute = false,
}: ImageRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        overflow: "hidden",
        position: absolute ? "absolute" : "relative",
        inset: absolute ? 0 : undefined,
      }}
    >
      <motion.div
        initial={reduced ? false : { scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`img-cover ${imgClassName}`}
        />
      </motion.div>
    </motion.div>
  );
}
