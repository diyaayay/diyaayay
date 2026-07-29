import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { education } from "./data/education";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import { openSource, skills } from "./data/skills";
import { site } from "./data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const heroLinkClass =
  "border-b border-border no-underline transition-colors hover:border-accent hover:text-accent";

const sectionLabelClass =
  "font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-muted";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[720px] flex-col gap-[72px] px-[clamp(16px,5vw,24px)] pb-[72px] pt-[clamp(32px,7vw,56px)]">
      {/* HERO */}
      <header className="flex flex-col gap-5">
        <h1 className="flex flex-wrap items-center gap-3.5 text-[clamp(30px,8vw,40px)] font-semibold leading-[1.15] tracking-[-0.02em]">
          <span className="flex text-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/barbie-light-on-dark.png"
              alt=""
              width={37}
              height={36}
              className="only-dark block flex-none"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/barbie-dark-on-light.png"
              alt=""
              width={37}
              height={36}
              className="only-light flex-none"
            />
          </span>
          <span>Diya Solanki</span>
        </h1>
        <p className="text-pretty text-[clamp(17px,4.4vw,20px)] font-medium leading-[1.4]">
          Software Engineer. Language Servers, Developer Tooling &amp; Backend
          Systems.
        </p>
        <p className="text-pretty text-muted">
          Software engineer building language servers and developer tooling in
          Rust and TypeScript. Shipped the Processing Language Server under a
          Processing Foundation pr05 grant, and a JSON Schema language server
          with json-schema-org. Processing Foundation pr05 grantee, Google
          Summer of Code alumna and mentor.
        </p>
        <p className="text-pretty text-muted">
          Passionate about open source, language servers, developer tooling, and
          systems programming.
        </p>
        <nav
          aria-label="Links and contact"
          className="mt-1 flex flex-wrap gap-6 font-mono text-sm"
        >
          <a href={site.socials.github} className={heroLinkClass}>
            GitHub
          </a>
          <a href={site.socials.linkedin} className={heroLinkClass}>
            LinkedIn
          </a>
          <a href={`mailto:${site.author.email}`} className={heroLinkClass}>
            Email
          </a>
          <a
            href="/Diya_Solanki_Resume.pdf"
            download="Diya_Solanki_Resume.pdf"
            className={heroLinkClass}
          >
            Resume ↓
          </a>
          <Link href="/notes" className={heroLinkClass}>
            Notes →
          </Link>
        </nav>
      </header>

      {/* EXPERIENCE */}
      <section id="experience" className="flex scroll-mt-[72px] flex-col">
        <h2 className={`mb-6 ${sectionLabelClass}`}>Experience</h2>

        <div className="min-w-0 border-l border-border">
          {experience.map((job) => (
            <article
              key={job.company + job.dates}
              className="relative flex flex-col gap-1 pb-[30px] pl-[26px]"
            >
              <span
                className={`absolute -left-[5px] top-[7px] box-border h-[9px] w-[9px] rounded-full border-[1.5px] ${
                  job.current
                    ? "border-accent bg-accent"
                    : "border-border bg-bg"
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="text-[clamp(17px,4.6vw,19px)] font-semibold leading-[1.2] tracking-[-0.01em]">
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {job.company}
                  </a>
                </h3>
                <span className="whitespace-nowrap font-mono text-xs text-muted">
                  {job.dates}
                </span>
              </div>
              <div className="text-sm font-semibold">
                {job.role}
                {job.detail ? (
                  <>
                    <span className="text-border"> • </span>
                    <span className="font-normal text-muted">{job.detail}</span>
                  </>
                ) : null}
              </div>
              <p className="mt-1 text-pretty text-[15px] text-muted">
                {job.summary}
              </p>
              {job.links ? (
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {job.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap rounded border border-border px-[9px] py-[3px] font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="flex scroll-mt-[72px] flex-col">
        <h2 className={`mb-3 ${sectionLabelClass}`}>Projects</h2>
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="grid grid-cols-[clamp(24px,6vw,44px)_1fr] gap-x-[clamp(10px,2.5vw,16px)] border-t border-border py-6 last:border-b"
          >
            <div className="pt-[3px] font-mono text-[13px] text-muted">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-[17px] font-semibold">{project.name}</h3>
                {project.status ? (
                  <span className="rounded border border-accent px-[7px] py-px font-mono text-[11px] text-accent">
                    {project.status}
                  </span>
                ) : null}
                {project.link ? (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted transition-colors hover:text-accent"
                  >
                    {project.link.label} ↗
                  </a>
                ) : null}
              </div>
              <p className="text-pretty text-muted">{project.summary}</p>
              <div className="flex flex-wrap gap-2 font-mono text-[12.5px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* SKILLS */}
      <section className="flex flex-col gap-3">
        <h2 className={sectionLabelClass}>Skills</h2>
        <div className="grid grid-cols-[150px_1fr] gap-x-4 gap-y-2.5 text-sm">
          {skills.map((category) => (
            <div key={category.label} className="contents">
              <span className="font-mono text-[12.5px] text-muted">
                {category.label}
              </span>
              <span>{category.items.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section className="flex flex-col gap-3">
        <h2 className={sectionLabelClass}>Open source</h2>
        <p className="text-pretty font-mono text-[13.5px] leading-[2]">
          {openSource.join("  ·  ")}
        </p>
      </section>

      {/* EDUCATION */}
      <section className="flex flex-col gap-3">
        <h2 className={sectionLabelClass}>Education</h2>
        {education.map((entry) => (
          <div key={entry.school} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-[17px] font-semibold leading-[1.2] tracking-[-0.01em]">
                {entry.school}
              </h3>
              <span className="whitespace-nowrap font-mono text-xs text-muted">
                {entry.dates}
              </span>
            </div>
            <p className="text-pretty text-[15px] text-muted">
              {entry.degree}
              {entry.gpa ? (
                <>
                  <span className="text-border"> • </span>
                  {entry.gpa}
                </>
              ) : null}
              <span className="text-border"> • </span>
              {entry.location}
            </p>
          </div>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
