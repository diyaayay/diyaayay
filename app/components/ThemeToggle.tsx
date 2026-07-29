"use client";

export function ThemeToggle() {
  function toggle() {
    const light = document.documentElement.classList.toggle("light");
    try {
      localStorage.setItem("theme", light ? "light" : "dark");
    } catch {
      // ignore write failures (e.g. private mode)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      title="Toggle theme"
      aria-label="Toggle theme"
      className="flex h-7 w-[30px] cursor-pointer items-center justify-center rounded-[5px] border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <svg
        className="only-dark block"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg
        className="only-light"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
