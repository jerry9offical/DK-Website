import type { ComponentType } from "react";
import {
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  TikTokIcon,
  XIcon,
} from "@/components/ui/brand-icons";

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/dorcas_koki", icon: InstagramIcon },
  { label: "TikTok", href: "https://tiktok.com/@dorcaskoki", icon: TikTokIcon },
  { label: "X", href: "https://x.com/Dorcas_Koki", icon: XIcon },
  {
    label: "Facebook",
    href: "https://www.facebook.com/erenayo.dorcas.koki",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/erenayo-dorcas-koki-6b0133404/",
    icon: LinkedInIcon,
  },
];

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
