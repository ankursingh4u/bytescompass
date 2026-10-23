import { ShieldCheck } from "lucide-react";

const authorBios: Record<string, string> = {
  "Rohan Mehta":
    "Rohan covers laptops, PCs, and home networking, focusing on the specs that change real-world performance rather than the ones that pad a spec sheet.",
  "Lena Fischer":
    "Lena covers audio gear and monitors, with an emphasis on long-term comfort, durability, and whether premium features survive daily use.",
  "Tomás Rivera":
    "Tomás covers smartphones, smart home devices, and accessories, with a focus on ecosystem lock-in, battery life claims, and privacy trade-offs.",
};

export function AuthorBio({ author, role }: { author: string; role: string }) {
  const bio = authorBios[author] ?? "A BytesCompass staff writer focused on practical, evidence-based tech buying guidance.";

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-semibold text-accent-dark">
        {author
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted">{role}</p>
        <p className="mt-2 text-sm text-foreground/90">{bio}</p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          Reviewed against our{" "}
          <a href="/editorial-policy" className="text-accent underline hover:text-accent-dark">
            editorial standards
          </a>
        </p>
      </div>
    </div>
  );
}
