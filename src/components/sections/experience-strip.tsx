"use client";

import { motion } from "framer-motion";
import { STATS } from "@/content/stats";

const BASE_ITEMS = [...STATS, ...STATS, ...STATS];
const LOOP_ITEMS = [...BASE_ITEMS, ...BASE_ITEMS];

export function ExperienceStrip() {
  return (
    <section className="relative overflow-hidden border-y border-gold/10 bg-navy py-10 sm:py-12">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] opacity-30 [background:repeating-linear-gradient(90deg,var(--color-gold)_0px,var(--color-gold)_2px,transparent_2px,transparent_14px)]"
      />

      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_60%)]"
      />

      <div className="relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee-ltr flex w-max items-center">
          {LOOP_ITEMS.map(({ icon: Icon, label }, idx) => (
            <div
              key={`${label}-${idx}`}
              className="flex items-center gap-3 px-6 sm:px-8"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30"
                style={{
                  animation: `icon-pulse 1.8s ease-in-out ${(idx % 4) * 0.25}s infinite`,
                }}
              >
                <Icon className="h-5 w-5 text-gold" />
              </span>
              <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-cream sm:text-base">
                {label}
              </span>
              <span className="ml-6 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50 sm:ml-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
