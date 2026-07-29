import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[720px] flex-col items-start px-[clamp(16px,5vw,24px)] py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-[clamp(25px,6.5vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em]">
        This page wandered off.
      </h1>
      <p className="mt-3 text-pretty text-muted">
        The link is broken or the page no longer exists. Let&apos;s get you back
        to something that does.
      </p>

      <nav
        aria-label="Recovery links"
        className="mt-8 flex flex-wrap gap-6 font-mono text-sm"
      >
        <Link
          href="/"
          className="border-b border-border transition-colors hover:border-accent hover:text-accent"
        >
          ← Home
        </Link>
        <Link
          href="/notes"
          className="text-muted transition-colors hover:text-accent"
        >
          Notes
        </Link>
      </nav>
    </main>
  );
}
