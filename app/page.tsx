import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Differentiators } from "@/components/Differentiators";
import { CtaBand } from "@/components/CtaBand";
import { ContentCard } from "@/components/ContentCard";
import { CategoryCard } from "@/components/CategoryCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { contentItems, getFeatured, getTrending, getLatest, getBySection } from "@/lib/content";

export const metadata: Metadata = {
  title: "BytesCompass — Honest Tech & Gadget Buying Guides",
  alternates: { canonical: "/" },
};

const categories = [
  { label: "Laptops & PCs", description: "Notebooks, desktops & upgrades", iconKey: "laptops", accent: "teal" as const },
  { label: "Headphones & Audio", description: "Earbuds, headphones & speakers", iconKey: "audio", accent: "rose" as const },
  { label: "Wi-Fi & Networking", description: "Routers, mesh systems & cables", iconKey: "networking", accent: "indigo" as const },
  { label: "Monitors & Displays", description: "Home office & gaming screens", iconKey: "monitors", accent: "sky" as const },
  { label: "Smart Home", description: "Speakers, displays & automation", iconKey: "smarthome", accent: "amber" as const },
  { label: "Smartphones & Tablets", description: "Phones, tablets & batteries", iconKey: "phones", accent: "rose" as const },
  { label: "Accessories", description: "Keyboards, mice & cables", iconKey: "accessories", accent: "teal" as const },
];

function SectionHeader({
  eyebrow,
  title,
  sub,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-9 flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{eyebrow}</p>
        <h2 className="mt-2 font-serif-heading text-3xl font-semibold text-foreground">{title}</h2>
        {sub && <p className="mt-1.5 text-muted">{sub}</p>}
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="hidden shrink-0 items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:flex"
        >
          {linkLabel} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const featured = getFeatured(3);
  const trending = getTrending(4);
  const latest = getLatest(9);
  const recentArticles = [...getBySection("articles")]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 6);

  const writerCount = new Set(contentItems.map((i) => i.author)).size;
  const categoryCount = new Set(contentItems.map((i) => i.category)).size;
  const criteriaCount = contentItems.reduce((sum, item) => {
    const verdictCriteria = item.verdict ? item.verdict.buyIf.length + item.verdict.skipIf.length : 0;
    const comparisonCriteria = item.comparison ? item.comparison.rows.length : 0;
    return sum + verdictCriteria + comparisonCriteria;
  }, 0);

  return (
    <>
      <Hero />

      <StatsStrip
        published={contentItems.length}
        writers={writerCount}
        categories={categoryCount}
        criteria={criteriaCount}
      />

      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow="Editor's picks"
          title="Start here"
          sub="The guides we'd hand a friend who asked where to begin."
          href="/guides"
          linkLabel="All guides"
        />
        {featured.length > 0 && (
          <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
            <Link
              href={`/${featured[0].section}/${featured[0].slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-shadow hover:shadow-lifted"
            >
              <PlaceholderImage
                iconKey={featured[0].photoKey ?? featured[0].iconKey}
                accent={featured[0].accent}
                alt={featured[0].title}
                className="h-56 w-full sm:h-72"
                priority
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {featured[0].category} · {featured[0].readTime}
                </p>
                <h3 className="mt-2 font-serif-heading text-xl font-semibold text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {featured[0].title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{featured[0].dek}</p>
              </div>
            </Link>

            <div className="flex flex-col gap-6">
              {featured.slice(1).map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.section}/${item.slug}`}
                  className="group flex flex-1 gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-shadow hover:shadow-card"
                >
                  <PlaceholderImage
                    iconKey={item.photoKey ?? item.iconKey}
                    accent={item.accent}
                    alt={item.title}
                    className="h-full min-h-28 w-32 shrink-0 rounded-xl sm:w-40"
                  />
                  <div className="py-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {item.category}
                    </p>
                    <h3 className="mt-1.5 font-serif-heading font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted">{item.dek}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </AnimatedSection>

      <AnimatedSection as="section" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="Trending"
            title="Most read this week"
            sub="What readers are checking out right now."
          />
          <ol className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
            {trending.map((item, i) => (
              <li key={item.slug}>
                <Link href={`/${item.section}/${item.slug}`} className="group flex gap-5">
                  <span
                    aria-hidden
                    className="font-serif-heading text-4xl font-semibold leading-none text-accent/30 transition-colors group-hover:text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-accent">
                      {item.category} · {item.readTime}
                    </span>
                    <span className="mt-1.5 block font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {item.title}
                    </span>
                    <span className="mt-1.5 block line-clamp-2 text-sm text-muted">{item.dek}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow="Categories"
          title="Browse the gear"
          sub="Jump straight to the category you're researching."
        />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.label}
              href={`/search?category=${encodeURIComponent(cat.label)}`}
              label={cat.label}
              description={cat.description}
              iconKey={cat.iconKey}
              accent={cat.accent}
              count={contentItems.filter((i) => i.category === cat.label).length}
            />
          ))}
        </div>
      </AnimatedSection>

      <ProcessSteps />

      <AnimatedSection as="section" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeader
          eyebrow="How-tos & explainers"
          title="Learn the specs"
          sub="Practical walkthroughs and plain-language breakdowns."
          href="/articles"
          linkLabel="All articles"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((item, i) => (
            <ContentCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader
            eyebrow="Latest"
            title="Fresh from the test bench"
            sub="Freshly published and recently updated."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((item, i) => (
              <ContentCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Differentiators />

      <CtaBand />
    </>
  );
}
