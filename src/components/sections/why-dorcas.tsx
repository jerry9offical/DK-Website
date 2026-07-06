"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { WHY_POINTS } from "@/content/why";

export function WhyDorcas() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/IMG-20260603-WA0024.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/88 to-ink/95" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="justify-center">Why Me</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl"
          >
            More Than a Presenter —{" "}
            <span className="text-gold">A Sports Storyteller</span>
          </motion.h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2"
        >
          {WHY_POINTS.map((point, idx) => (
            <motion.li key={point} variants={fadeUp} className="flex items-start gap-4">
              <span className="w-10 shrink-0 font-display text-3xl leading-none text-gold/40">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-base leading-relaxed text-cream sm:text-lg">
                {point}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
