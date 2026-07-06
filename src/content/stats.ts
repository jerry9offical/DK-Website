import { Trophy, Mic2, Radio, Users2, type LucideIcon } from "lucide-react";

export interface StatItem {
  icon: LucideIcon;
  label: string;
}

export const STATS: StatItem[] = [
  { icon: Trophy, label: "5+ Years Media Experience" },
  { icon: Mic2, label: "Sports Presenter & Journalist" },
  { icon: Radio, label: "Radio, TV & Event Hosting Experience" },
  { icon: Users2, label: "Athlete Interviews & Sports Storytelling" },
];
