"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { ContentItem } from "@/lib/content/types";
import { PlaceholderImage } from "./ui/PlaceholderImage";

const sectionKickers: Record<ContentItem["section"], string> = {
  articles: "Article",
  reviews: "Review",
  comparisons: "Comparison",
  guides: "Buying Guide",
};

export function ContentCard({ item, index = 0 }: { item: ContentItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.07, 0.35), ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Link href={`/${item.section}/${item.slug}`} className="flex h-full flex-col">
        <div className="relative overflow-hidden rounded-xl">
          <PlaceholderImage
            iconKey={item.photoKey ?? item.iconKey}
            accent={item.accent}
            alt={`${item.title} photo`}
            className="aspect-[3/2] w-full transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <span className="absolute bottom-3 left-3 rounded-md bg-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink-foreground backdrop-blur-sm">
            {sectionKickers[item.section]}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2 pt-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {item.category}
          </p>
          <h3 className="font-serif-heading text-lg font-semibold leading-snug text-foreground underline-offset-4 transition-colors group-hover:text-accent group-hover:underline">
            {item.title}
          </h3>
          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted">{item.dek}</p>
          <p className="flex items-center gap-2 border-t border-border pt-3 text-xs text-muted">
            <span className="font-medium text-foreground/80">{item.author}</span>
            <span aria-hidden>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {item.readTime}
            </span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
