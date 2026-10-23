import Image from "next/image";
import type { Accent } from "@/lib/content/types";

const photoMap: Record<string, string> = {
  laptops: "/images/categories/laptops.jpg",
  "laptops-2": "/images/categories/laptops-2.jpg",
  "laptops-3": "/images/categories/laptops-3.jpg",
  "laptops-4": "/images/categories/laptops-4.jpg",
  phones: "/images/categories/phones.jpg",
  "phones-2": "/images/categories/phones-2.jpg",
  audio: "/images/categories/audio.jpg",
  "audio-2": "/images/categories/audio-2.jpg",
  "audio-3": "/images/categories/audio-3.jpg",
  smarthome: "/images/categories/smarthome.jpg",
  "smarthome-2": "/images/categories/smarthome-2.jpg",
  networking: "/images/categories/networking.jpg",
  "networking-2": "/images/categories/networking-2.jpg",
  "networking-3": "/images/categories/networking-3.jpg",
  monitors: "/images/categories/monitors.jpg",
  "monitors-2": "/images/categories/monitors-2.jpg",
  accessories: "/images/categories/accessories.jpg",
  "accessories-2": "/images/categories/accessories-2.png",
};

const accentRing: Record<Accent, string> = {
  indigo: "ring-indigo-500/40",
  amber: "ring-amber-500/40",
  teal: "ring-teal-500/40",
  rose: "ring-rose-500/40",
  sky: "ring-sky-500/40",
};

export function PlaceholderImage({
  iconKey,
  accent = "indigo",
  alt,
  className = "",
  priority = false,
}: {
  iconKey: string;
  accent?: Accent;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const src = photoMap[iconKey] ?? photoMap.laptops;

  return (
    <div className={`relative overflow-hidden ring-1 ring-inset ${accentRing[accent]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        priority={priority}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  );
}
