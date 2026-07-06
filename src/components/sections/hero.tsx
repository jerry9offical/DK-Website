"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { FloatingImageCard } from "@/components/ui/floating-image-card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { TRUST_CHIPS } from "@/content/hero";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Ambient stadium-light glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold/20 blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-crimson/20 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-ink)_75%)]" />
      </div>

      <Container className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-7"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Sports Presenter · Journalist · Event Host</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          >
            <span className="block text-gold">Dorcas Koki</span>
            <span className="mt-2 block">
              The Voice of Sports, Stories &amp; Stadium Energy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-base text-cream-dim sm:text-lg"
          >
            I&apos;m a sports presenter, journalist, event host, and media
            personality helping athletes, clubs, brands, and sports events
            tell unforgettable stories.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-1">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <ButtonLink href="#contact" size="lg">
                Book Dorcas
              </ButtonLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <ButtonLink href="#services" variant="outline" size="lg">
                View Services
              </ButtonLink>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-3">
            {TRUST_CHIPS.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-cream/90 backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-gold" />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[520px] lg:h-[640px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto h-full w-[78%] overflow-hidden rounded-[2rem] border border-gold/20 shadow-2xl shadow-black/70"
          >
            <Image
              src="/images/1001952859.jpg"
              alt="Dorcas Koki, sports presenter and media personality"
              fill
              priority
              sizes="(max-width: 1024px) 70vw, 32vw"
              className="object-cover"
            />
            <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-crimson px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />
              On Air
            </div>
          </motion.div>

          <FloatingImageCard
            src="/images/1001913892.jpg"
            alt="Dorcas Koki interviewing a young athlete pitch-side"
            className="absolute -top-6 -left-2 h-32 w-44 sm:-left-8 sm:h-36 sm:w-52"
            rotate={-6}
            duration={6}
            delay={0.5}
          />

          <FloatingImageCard
            src="/images/1001913886.jpg"
            alt="Dorcas Koki presenting live from the stadium"
            className="absolute -bottom-8 -right-2 h-32 w-44 sm:-right-8 sm:h-40 sm:w-56"
            rotate={5}
            duration={7}
            delay={0.8}
          />
        </div>
      </Container>
    </section>
  );
}
