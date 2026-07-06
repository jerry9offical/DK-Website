import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/content/footer";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10 py-12">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="#home" className="font-display text-2xl tracking-wide text-cream">
              Dorcas <span className="text-gold">Koki</span>
            </Link>
            <p className="mt-2 text-sm text-cream-dim">
              Sports Presenter | Journalist | Event Host | Voiceover Artist
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream-dim transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-cream-dim transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-gold/10 pt-6 text-center text-xs text-cream-dim/70">
          © {year} Dorcas Koki. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
