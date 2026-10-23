import Link from "next/link";
import { Compass, Mail, MapPin } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/articles", label: "Articles" },
      { href: "/reviews", label: "Reviews" },
      { href: "/comparisons", label: "Comparisons" },
      { href: "/guides", label: "Buying Guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/editorial-policy", label: "Editorial Policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/photo-credits", label: "Photo Credits" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold text-ink-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-dark text-accent-foreground ring-2 ring-accent/20">
                <Compass className="h-[18px] w-[18px]" />
              </span>
              <span className="font-serif-heading text-lg">BytesCompass</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">
              Honest tech &amp; gadget buying guides — plain-language breakdowns of what
              actually matters before you buy.
            </p>
            <a
              href="mailto:help@bytescompass.com"
              className="mt-3 flex items-center gap-1.5 text-sm font-medium text-teal-300 hover:text-teal-200"
            >
              <Mail className="h-3.5 w-3.5" /> help@bytescompass.com
            </a>
            <p className="mt-3 flex items-start gap-1.5 text-sm text-ink-muted">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-300" />
              <span>
                Punit Joshi, Kuchaman City, PO: Kuchamancity-d, Dist: Nagaur, Rajasthan — 341508,
                India
              </span>
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-sm font-semibold text-ink-foreground">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-muted transition-colors hover:text-teal-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} BytesCompass. All rights reserved.</p>
          <p className="max-w-xl">
            BytesCompass is reader-supported. When you buy through links on our site, we may
            earn an affiliate commission at no extra cost to you. See our{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-teal-200">
              affiliate disclosure
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
