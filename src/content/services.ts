import {
  Mic,
  Users,
  Clapperboard,
  AudioLines,
  Handshake,
  Newspaper,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    icon: Mic,
    title: "Sports Event Hosting",
    description:
      "Professional hosting for tournaments, sports awards, watch parties, school competitions, and fan events — delivered with confidence, energy, and audience connection.",
    image: "/images/1000466714.jpg",
  },
  {
    icon: Users,
    title: "Athlete & Club Interviews",
    description:
      "Authentic, engaging interviews that help athletes, coaches, clubs, and sports personalities share their stories with clarity and impact.",
    image: "/images/1001913892.jpg",
  },
  {
    icon: Clapperboard,
    title: "Sports Content Production",
    description:
      "Compelling sports content including match previews, player features, reels, captions, announcements, and promotional storytelling for digital platforms.",
    image: "/images/IMG-20260603-WA0015.jpg",
  },
  {
    icon: AudioLines,
    title: "Voiceover & Audio Production",
    description:
      "Professional voiceovers for promos, podcasts, sports shows, documentaries, event ads, and branded media content.",
    image: "/images/1000961780.jpg",
  },
  {
    icon: Handshake,
    title: "Brand Partnerships",
    description:
      "Creative media collaborations that help sports brands connect with fans through presenter-led content, campaigns, interviews, and live appearances.",
    image: "/images/1001003500.jpg",
  },
  {
    icon: Newspaper,
    title: "Sports Journalism & Reporting",
    description:
      "Credible sports reporting, event coverage, live interviews, and story-driven journalism tailored for radio, digital, and broadcast audiences.",
    image: "/images/1001190931.jpg",
  },
];
