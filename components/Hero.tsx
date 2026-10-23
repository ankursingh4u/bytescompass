"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, ListChecks, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { SearchBox } from "./SearchBox";

const trustPoints = [
  { icon: ListChecks, label: "Criteria-based, not catalog copy" },
  { icon: ShieldCheck, label: "Commissions disclosed, never hidden" },
  { icon: Users, label: "Written by category specialists" },
];

const categoryChips = [
  "Laptops & PCs",
  "Headphones & Audio",
  "Wi-Fi & Networking",
  "Monitors & Displays",
  "Smart Home",
  "Smartphones & Tablets",
  "Accessories",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink-border bg-ink text-ink-foreground">
      <div className="bg-mesh-ink absolute inset-0 -z-10" />
      <div className="bg-grain absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" />

      <motion.div
        aria-hidden
        className="absolute -top-24 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-elevated px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink-muted"
        >
          <Compass className="h-3.5 w-3.5 text-accent" aria-hidden />
          Honest tech &amp; gadget buying guides
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl"
        >
          Find your way to{" "}
          <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent">
            the right tech.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg text-ink-muted"
        >
          Laptops, headphones, Wi-Fi gear, monitors, and smart home tech — broken down in
          plain language, so you buy with confidence instead of guesswork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 max-w-md"
        >
          <SearchBox placeholder="Search laptops, earbuds, routers, monitors…" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2"
        >
          {categoryChips.map((label) => (
            <Link
              key={label}
              href={`/search?category=${encodeURIComponent(label)}`}
              className="rounded-full border border-ink-border bg-ink-elevated/70 px-3.5 py-1.5 text-xs font-medium text-ink-foreground/90 transition-colors hover:border-accent hover:text-white"
            >
              {label}
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm"
        >
          <Link
            href="/guides"
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-medium text-accent-foreground shadow-glow transition-all hover:bg-accent-dark hover:shadow-lifted"
          >
            Browse buying guides{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-border bg-transparent px-5 py-2.5 font-medium text-ink-foreground transition-colors hover:border-accent hover:text-white"
          >
            Read latest reviews
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-9 flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center"
        >
          {trustPoints.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-ink-muted">
              <Icon className="h-3.5 w-3.5 text-accent" /> {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
