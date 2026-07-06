import { Sparkles, CalendarCheck, Handshake, type LucideIcon } from "lucide-react";

export interface PackageItem {
  icon: LucideIcon;
  name: string;
  audience: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const PACKAGES: PackageItem[] = [
  {
    icon: Sparkles,
    name: "Starter Visibility Package",
    audience: "For athletes, small brands, and coaches.",
    features: [
      "Interview or feature",
      "Short promo content",
      "Caption / write-up",
      "Voiceover or announcement",
    ],
    cta: "Request Quote",
  },
  {
    icon: CalendarCheck,
    name: "Event Host Package",
    audience:
      "For tournaments, school sports, watch parties, award nights, and launches.",
    features: [
      "Professional event hosting",
      "Audience engagement",
      "Interview moments",
      "Event announcement support",
    ],
    cta: "Book Dorcas",
    featured: true,
  },
  {
    icon: Handshake,
    name: "Brand Partnership Package",
    audience: "For brands, academies, clubs, and campaigns.",
    features: [
      "Sponsored content",
      "Presenter-led campaign",
      "Voiceover",
      "Interviews",
      "Live appearance",
      "Social storytelling",
    ],
    cta: "Discuss Partnership",
  },
];
