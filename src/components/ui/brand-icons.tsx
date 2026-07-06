type IconProps = { className?: string };

const BASE_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...BASE_PROPS} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg {...BASE_PROPS} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
        fontFamily="sans-serif"
      >
        in
      </text>
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg {...BASE_PROPS} className={className} aria-hidden>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg {...BASE_PROPS} className={className} aria-hidden>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg {...BASE_PROPS} className={className} aria-hidden>
      <path d="M13 4v9.5a3 3 0 1 1-2-2.83" />
      <path d="M13 4c.4 2 1.9 3.6 4 4" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...BASE_PROPS} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M13.5 21v-6.5h2.2l.3-2.5h-2.5V10.3c0-.7.2-1.2 1.2-1.2h1.4V6.9c-.2 0-1-.1-2-.1-2 0-3.3 1.2-3.3 3.4v1.8H8.6v2.5h2.2V21" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...BASE_PROPS} className={className} aria-hidden>
      <path d="M7 19l-3.2 1 1-3.1A8 8 0 1 1 7 19z" />
      <path d="M8.7 8.4c-.4 2.1.6 4.5 2.6 6.3c2 1.8 4.5 2.5 6.6 2.1" />
    </svg>
  );
}
