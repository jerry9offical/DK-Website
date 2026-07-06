"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GALLERY_ITEMS } from "@/content/gallery";

export function Gallery() {
  return (
    <section id="media" className="relative overflow-hidden py-24 sm:py-32">
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-xl">
            <motion.div variants={fadeUp}>
              <Eyebrow>Media &amp; Showreel</Eyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-4xl text-cream sm:text-5xl"
            >
              See Me In Action
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base text-cream-dim sm:text-lg">
              A closer look at the energy, presence, and storytelling that
              define every appearance — on air, on camera, and on the ground.
            </motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <ButtonLink href="#contact" variant="outline">
              Watch Showreel
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-14 grid grid-flow-dense grid-cols-2 auto-rows-[170px] gap-4 sm:auto-rows-[200px] sm:gap-5 lg:grid-cols-4 lg:auto-rows-[180px] lg:gap-6"
        >
          {GALLERY_ITEMS.map(({ title, tag, image, span }, idx) => (
            <motion.div key={title} variants={fadeUp} className={span}>
              <TiltCard className="group relative h-full w-full overflow-hidden rounded-2xl border border-gold/15 transition-colors duration-300 hover:border-gold/40">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  quality={70}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

                <motion.div
                  initial={{ scaleX: 1 }}
                  whileInView={{ scaleX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-20 origin-right bg-ink"
                />

                <span className="absolute top-3 right-3 rounded-full bg-crimson/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-white">
                  Coming Soon
                </span>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ink/50 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-5 w-5 fill-gold text-gold" />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                    {tag}
                  </span>
                  <h3 className="mt-1 font-display text-base text-cream sm:text-lg">
                    {title}
                  </h3>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
