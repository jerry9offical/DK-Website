"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/content/nav";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding,border-color] duration-300",
          scrolled
            ? "border-b border-gold/10 bg-ink/80 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link
            href="#home"
            className="font-display text-2xl tracking-wide text-cream"
          >
            Dorcas <span className="text-gold">Koki</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-xs font-semibold uppercase tracking-widest text-cream/80 transition-colors hover:text-gold"
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1.5 left-0 h-px w-full origin-left bg-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </Link>
            ))}
          </nav>

          <ButtonLink
            href="#contact"
            size="sm"
            className="hidden md:inline-flex"
          >
            Book Dorcas
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-cream md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/98 backdrop-blur-xl md:hidden"
          >
            <Container className="flex items-center justify-between py-6">
              <Link
                href="#home"
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-wide text-cream"
              >
                Dorcas <span className="text-gold">Koki</span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-cream"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </Container>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              className="flex flex-1 flex-col items-center justify-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-cream transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ButtonLink href="#contact" onClick={() => setOpen(false)} className="mt-4">
                  Book Dorcas
                </ButtonLink>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
