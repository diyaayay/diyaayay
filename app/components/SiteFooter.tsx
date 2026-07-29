import { site } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-6 font-mono text-[13px] text-muted">
      <a
        href={`mailto:${site.author.email}`}
        className="transition-colors hover:text-accent"
      >
        {site.author.email}
      </a>
      <span>Bengaluru, India</span>
    </footer>
  );
}
