"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { TESTIMONIALS } from "@/content/testimonials";

const AUTO_ADVANCE_MS = 6000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_ADVANCE_MS);
  }, [next]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.1),transparent_55%)]"
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
            <Eyebrow className="justify-center">Testimonials</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl text-cream sm:text-5xl"
          >
            What People Are Saying
          </motion.h2>
        </motion.div>

        <div
          onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
          onMouseLeave={startTimer}
          className="relative mx-auto mt-14 flex max-w-3xl items-center gap-4 sm:gap-8"
        >
          <button
            type="button"
            onClick={() => {
              prev();
              startTimer();
            }}
            aria-label="Previous testimonial"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative min-h-[220px] flex-1 overflow-hidden text-center sm:min-h-[200px]">
            <Quote
              className="mx-auto mb-4 h-8 w-8 text-gold/40"
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl italic leading-relaxed text-cream sm:text-3xl"
              >
                &ldquo;{TESTIMONIALS[index]}&rdquo;
              </motion.p>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => {
              next();
              startTimer();
            }}
            aria-label="Next testimonial"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center">
          {TESTIMONIALS.map((quote, i) => (
            <button
              key={quote}
              type="button"
              onClick={() => {
                setIndex(i);
                startTimer();
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className="flex h-8 w-8 items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold" : "w-2.5 bg-gold/25"
                }`}
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
