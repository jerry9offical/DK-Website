"use client";

import { motion } from "framer-motion";
import { Check, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { PACKAGES } from "@/content/packages";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_50%)]"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="justify-center">Packages</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl text-cream sm:text-5xl"
          >
            Premium Packages, Tailored to You
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base text-cream-dim sm:text-lg">
            Clear, professional packages built around how you actually want
            to work with me — no guesswork, no fixed price lists.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gold"
          >
            <Tag className="h-3.5 w-3.5" />
            Introductory Launch Packages Available
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {PACKAGES.map(({ icon: Icon, name, audience, features, cta, featured }) => (
            <motion.div key={name} variants={fadeUp} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8 backdrop-blur",
                  featured
                    ? "border-gold/50 bg-gradient-to-b from-gold/10 to-white/5 shadow-2xl shadow-gold/10"
                    : "border-gold/15 bg-white/5"
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                    Most Booked
                  </span>
                )}

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40">
                  <Icon className="h-5 w-5 text-gold" />
                </span>

                <h3 className="mt-5 font-display text-2xl text-cream">{name}</h3>
                <p className="mt-2 text-sm text-cream-dim">{audience}</p>
                <p className="mt-6 font-display text-xl text-gold">Custom Quote</p>

                <div className="my-6 border-t border-gold/10" />

                <ul className="flex flex-1 flex-col gap-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-cream-dim">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="#contact"
                  variant={featured ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {cta}
                </ButtonLink>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
