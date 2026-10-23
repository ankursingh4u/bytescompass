"use client";

import { motion } from "framer-motion";
import { MessagesSquare, ShieldCheck, LayoutList } from "lucide-react";

const points = [
  {
    icon: MessagesSquare,
    title: "Plain-language explainers",
    body: "Refresh rates, codec support, mesh backhaul — we translate gadget marketing language into what it actually means for how you'll use the thing.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent disclosure",
    body: "Affiliate commissions fund this site, but they never determine a recommendation, and we say so next to every link — not just in a footer.",
  },
  {
    icon: LayoutList,
    title: "Criteria, not a catalog",
    body: "Every guide is built from explicit selection criteria and a clear verdict on who should buy and who should skip — not a reworded spec sheet.",
  },
];

export function Differentiators() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Why read BytesCompass</h2>
        <p className="mt-2 text-muted">What we try to do differently from a typical affiliate catalog.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {points.map((point) => (
          <div key={point.title} className="p-7">
            <div className="flex items-center gap-3">
              <point.icon className="h-5 w-5 text-accent" />
              <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{point.body}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
