"use client";

import { motion } from "framer-motion";
import { CountUp } from "./ui/CountUp";

export function StatsStrip({
  published,
  writers,
  categories,
  criteria,
}: {
  published: number;
  writers: number;
  categories: number;
  criteria: number;
}) {
  const stats = [
    { value: published, label: "Guides & reviews published" },
    { value: writers, label: "Specialist staff writers" },
    { value: categories, label: "Gadget categories covered" },
    { value: criteria, suffix: "+", label: "Selection criteria documented" },
  ];

  return (
    <div className="border-b border-ink-border bg-ink">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-ink-border px-4 sm:grid-cols-4 sm:px-6"
      >
        {stats.map(({ value, suffix, label }) => (
          <div key={label} className="flex flex-col items-center gap-1 px-3 py-7 text-center">
            <p className="font-serif-heading text-3xl font-semibold text-teal-200 sm:text-4xl">
              <CountUp value={value} suffix={suffix} />
            </p>
            <p className="text-[11px] uppercase tracking-widest text-ink-muted">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
