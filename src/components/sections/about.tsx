"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FloatingImageCard } from "@/components/ui/floating-image-card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ABOUT_CARDS, ABOUT_PARAGRAPHS } from "@/content/about";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.07),transparent_45%)]"
      />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px] lg:h-[560px] lg:max-w-none"
        >
          <div className="relative mx-auto h-full w-[80%] overflow-hidden rounded-[2rem] border border-gold/20 shadow-2xl shadow-black/70">
            <Image
              src="/images/1000961783.jpg"
              alt="Dorcas Koki on-air at the radio mic"
              fill
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 28vw"
              quality={70}
              className="object-cover"
            />
          </div>

          <FloatingImageCard
            src="/images/1001233521.jpg"
            alt="Dorcas Koki close up wearing a headset at the mic"
            className="absolute -top-6 -right-2 h-32 w-44 sm:-right-8 sm:h-36 sm:w-52"
            rotate={6}
            duration={6.5}
            delay={0.3}
          />

          <FloatingImageCard
            src="/images/1000370475.jpg"
            alt="Dorcas Koki preparing notes on-air with headphones"
            className="absolute -bottom-8 -left-2 h-32 w-44 sm:-left-8 sm:h-40 sm:w-56"
            rotate={-5}
            duration={7.5}
            delay={0.6}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>About</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl text-cream sm:text-5xl"
          >
            Meet Dorcas Koki
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-base text-cream-dim sm:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {ABOUT_CARDS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-gold/15 bg-white/5 p-4 backdrop-blur"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30">
                  <Icon className="h-4 w-4 text-gold" />
                </span>
                <span className="text-sm font-semibold text-cream">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
