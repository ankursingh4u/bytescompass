import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { AuthorBio } from "@/components/AuthorBio";

export const metadata: Metadata = {
  title: "About Us",
  description: "What BytesCompass covers, who writes it, and how we evaluate the tech gear we recommend.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <LegalLayout title="About BytesCompass">
      <p>
        BytesCompass is a consumer tech publication focused on one job: helping you buy the
        right gear the first time. We cover laptops, headphones and earbuds, Wi-Fi and
        networking gear, monitors, smart home devices, phones, and the accessories around
        them — the categories where a wrong purchase is common and an informed one is easy
        once you know which specs actually matter.
      </p>

      <h2>What we cover</h2>
      <p>
        We publish buying guides organized by use case and budget, reviews that weigh real
        trade-offs instead of restating a pricing page, side-by-side comparisons with explicit
        selection criteria, and explainers and troubleshooting guides for the technical concepts
        that show up in gadget marketing without much explanation.
      </p>

      <h2>How we evaluate products</h2>
      <p>
        Every piece we publish starts from the question &ldquo;what does this feature actually
        change for the person using it?&rdquo; rather than repeating vendor marketing copy. Where
        we reference specific tools, we disclose clearly when figures are illustrative
        placeholders versus a specific product we or our team has tested, and we keep pricing and
        &ldquo;last checked&rdquo; dates visible so you know how current a recommendation is.
        Our full methodology is detailed in our{" "}
        <a href="/editorial-policy">Editorial Policy</a>.
      </p>

      <h2>How we make money</h2>
      <p>
        BytesCompass is reader-supported. Some links on our site are affiliate links, meaning
        we may earn a commission if you buy after clicking through — at no
        additional cost to you. This never determines which tools we recommend; see our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a> for details.
      </p>

      <h2>Who writes BytesCompass</h2>
      <p>
        Our team covers specific categories so our recommendations are grounded in ongoing
        familiarity with that corner of the hardware market, not a single generalist writing
        about everything.
      </p>
      <div className="not-prose mt-6 grid gap-4 sm:grid-cols-1">
        <AuthorBio author="Rohan Mehta" role="Senior Reviewer, Laptops & Networking" />
        <AuthorBio author="Lena Fischer" role="Staff Writer, Audio & Displays" />
        <AuthorBio author="Tomás Rivera" role="Staff Writer, Smart Home & Mobile" />
      </div>

      <h2>Questions or feedback?</h2>
      <p>
        We correct errors when we find them and welcome feedback from readers. Reach us anytime
        through our <a href="/contact">Contact page</a> or at{" "}
        <a href="mailto:help@bytescompass.com">help@bytescompass.com</a>.
      </p>
    </LegalLayout>
  );
}
