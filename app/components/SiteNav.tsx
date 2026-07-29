import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[720px] flex-wrap items-center justify-between gap-4 px-[clamp(16px,5vw,24px)] py-3"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-[-0.01em] transition-colors hover:text-accent"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/barbie-light-on-dark.png"
            alt=""
            width={20}
            height={19}
            className="only-dark block flex-none"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/barbie-dark-on-light.png"
            alt=""
            width={20}
            height={19}
            className="only-light flex-none"
          />
          <span>Diya Solanki</span>
        </Link>
        <div className="flex flex-wrap items-center gap-[clamp(12px,3.5vw,22px)]">
          <Link
            href="/#experience"
            className="font-mono text-[13px] text-muted transition-colors hover:text-accent"
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className="font-mono text-[13px] text-muted transition-colors hover:text-accent"
          >
            Projects
          </Link>
          <Link
            href="/notes"
            className="font-mono text-[13px] text-muted transition-colors hover:text-accent"
          >
            Notes
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
