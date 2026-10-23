"use client";

import { motion } from "framer-motion";
import { Target, Microscope, MessageSquareWarning, RefreshCcw } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Target,
    title: "Define real criteria",
    body: "Before we write a word, we list what actually changes how a product performs for its intended use — not whatever the spec sheet leads with.",
  },
  {
    icon: Microscope,
    title: "Check real-world fit, not just the spec list",
    body: "We weigh real-world behavior — battery under actual use, comfort in hour three, what breaks first — over marketing-friendly spec checklists.",
  },
  {
    icon: MessageSquareWarning,
    title: "Disclose clearly, near the link",
    body: "Affiliate relationships are disclosed right next to the recommendation itself, not buried in a footer you'd never scroll to.",
  },
  {
    icon: RefreshCcw,
    title: "Revisit and update",
    body: "Prices and product generations change. We track a last-checked date and come back to update guides instead of leaving them static indefinitely.",
  },
];

export function ProcessSteps() {
  return (
    <section className="border-y border-border bg-surface-alt py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Our methodology</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">How we review</h2>
          <p className="mt-3 max-w-sm text-muted">
            The same four-step process behind every guide, review, and comparison we publish.
          </p>
          <Link
            href="/editorial-policy"
            className="mt-6 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Read our full editorial policy →
          </Link>
        </div>

        <ol className="relative space-y-10 border-l-2 border-accent/20 pl-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.95rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent/30 bg-background font-serif-heading text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <div className="flex items-center gap-2.5">
                <step.icon className="h-5 w-5 text-accent" />
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
