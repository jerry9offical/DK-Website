"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/brand-icons";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CONTACT_DETAILS, SERVICE_OPTIONS } from "@/content/contact";

const FIELD_CLASS =
  "w-full rounded-lg border border-gold/15 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold/50 focus:outline-none transition-colors";

const LABEL_CLASS =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cream-dim";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const fields = {
      name: String(data.get("name") || ""),
      organisation: String(data.get("organisation") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      service: String(data.get("service") || ""),
      date: String(data.get("date") || ""),
      budget: String(data.get("budget") || ""),
      message: String(data.get("message") || ""),
    };

    const url = buildWhatsAppUrl(
      CONTACT_DETAILS.whatsappLink,
      fields,
      "New Booking Request — dorcaskoki.com"
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);

    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, source: "contact_form" }),
    }).catch(() => {
      // Non-blocking: the WhatsApp handoff above already succeeded either way.
    });
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.08),transparent_50%)]"
      />

      <Container className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Contact</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display text-4xl text-cream sm:text-5xl">
            Book Dorcas Koki
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-cream-dim sm:text-lg">
            Ready to give your event, brand, club, or sports story a
            professional media presence?
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4 flex flex-col gap-4">
            <a
              href={CONTACT_DETAILS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-cream-dim transition-colors hover:text-gold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30">
                <WhatsAppIcon className="h-4 w-4 text-gold" />
              </span>
              Chat with Dorcas on WhatsApp
            </a>
            <div className="flex items-center gap-3 text-sm text-cream-dim">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30">
                <Globe className="h-4 w-4 text-gold" />
              </span>
              {CONTACT_DETAILS.website}
            </div>
            <div className="flex items-center gap-3 text-sm text-cream-dim">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30">
                <MapPin className="h-4 w-4 text-gold" />
              </span>
              {CONTACT_DETAILS.location}
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="rounded-2xl border border-gold/15 bg-white/5 p-6 backdrop-blur sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <motion.div variants={fadeUp}>
              <label htmlFor="name" className={LABEL_CLASS}>
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className={FIELD_CLASS}
                placeholder="Your full name"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label htmlFor="organisation" className={LABEL_CLASS}>
                Organisation
              </label>
              <input
                id="organisation"
                name="organisation"
                className={FIELD_CLASS}
                placeholder="Brand, club, or company"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label htmlFor="email" className={LABEL_CLASS}>
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className={FIELD_CLASS}
                placeholder="you@example.com"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label htmlFor="phone" className={LABEL_CLASS}>
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                className={FIELD_CLASS}
                placeholder="+234..."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label htmlFor="service" className={LABEL_CLASS}>
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                required
                className={FIELD_CLASS}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </motion.div>
            <motion.div variants={fadeUp}>
              <label htmlFor="date" className={LABEL_CLASS}>
                Event / Project Date
              </label>
              <input id="date" type="date" name="date" className={FIELD_CLASS} />
            </motion.div>
            <motion.div variants={fadeUp} className="sm:col-span-2">
              <label htmlFor="budget" className={LABEL_CLASS}>
                Budget Range
              </label>
              <input
                id="budget"
                name="budget"
                className={FIELD_CLASS}
                placeholder="e.g. your estimated budget"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="sm:col-span-2">
              <label htmlFor="message" className={LABEL_CLASS}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className={FIELD_CLASS}
                placeholder="Tell me about your event, brand, or project"
              />
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3">
            <Button type="submit" size="lg" className="w-full">
              Send Booking Request
            </Button>
            <p className="text-center text-xs text-cream-dim/70">
              {sent
                ? "Opening WhatsApp with your booking details — send the message to complete your request."
                : "Submitting opens WhatsApp with your details pre-filled, so I can reply directly."}
            </p>
          </motion.div>
        </motion.form>
      </Container>
    </section>
  );
}
