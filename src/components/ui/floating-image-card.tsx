"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FloatingImageCard({
  src,
  alt,
  className,
  rotate,
  duration,
  delay,
}: {
  src: string;
  alt: string;
  className: string;
  rotate: number;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ rotate }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-gold/30 bg-navy shadow-2xl shadow-black/60"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="180px"
          quality={65}
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
