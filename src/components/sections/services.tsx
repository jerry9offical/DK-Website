"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SERVICES } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(212,175,55,0.07),transparent_45%)]"
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
            <Eyebrow className="justify-center">Services</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl text-cream sm:text-5xl"
          >
            Built for Broadcast. Ready for Brands.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base text-cream-dim sm:text-lg">
            From live events to branded sports content, I deliver the
            voice, presence, and storytelling power that help athletes,
            clubs, and brands stand out.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, description, image }) => (
            <motion.div key={title} variants={fadeUp}>
              <TiltCard className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/15 transition-colors duration-300 hover:border-gold/40">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  quality={70}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/10" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ink/60 backdrop-blur transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5 text-gold" />
                  </span>
                  <h3 className="font-display text-xl text-cream">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                    {description}
                  </p>
                  <ButtonLink
                    href="#contact"
                    variant="outline"
                    size="sm"
                    className="mt-5 self-start group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                  >
                    Book This Service
                  </ButtonLink>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
