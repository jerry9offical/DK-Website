import { Mic, Newspaper, Users, AudioLines, Sparkles } from "lucide-react";

export const TRUST_CHIPS = [
  { label: "Sports Journalism", icon: Newspaper },
  { label: "Event Hosting", icon: Mic },
  { label: "Athlete Interviews", icon: Users },
  { label: "Voiceover", icon: AudioLines },
  { label: "Brand Content", icon: Sparkles },
] as const;
