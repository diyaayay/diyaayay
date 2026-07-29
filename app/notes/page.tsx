import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { notes } from "../data/posts";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Notes on language servers, developer tooling, and open source work.",
  alternates: { canonical: "/notes" },
};

const listDateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  timeZone: "UTC",
});

export default function NotesPage() {
  return (
    <main className="mx-auto flex max-w-[720px] flex-col gap-14 px-[clamp(16px,5vw,24px)] pb-[72px] pt-[clamp(32px,7vw,56px)]">
      <header className="flex flex-col gap-4">
        <Link
          href="/"
          className="font-mono text-[13px] text-muted transition-colors hover:text-accent"
        >
          ← Diya Solanki
        </Link>
        <h1 className="text-[clamp(25px,6.5vw,32px)] font-semibold leading-[1.15] tracking-[-0.02em]">
          Notes
        </h1>
        <p className="max-w-[560px] text-pretty text-muted">
          Notes on language servers, developer tooling, and open source work.
        </p>
      </header>

      <section className="flex flex-col">
        {notes.map((note) => (
          <article
            key={note.url}
            className="flex flex-col gap-1.5 border-t border-border py-6 last:border-b"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold transition-colors hover:text-accent"
              >
                {note.title} ↗
              </a>
              <span className="whitespace-nowrap font-mono text-xs text-muted">
                {listDateFormatter.format(new Date(note.date))} ·{" "}
                {note.readingTime}
              </span>
            </div>
            <p className="text-pretty text-muted">{note.excerpt}</p>
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
