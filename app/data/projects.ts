export type Project = {
  name: string;
  summary: string;
  status?: string;
  link?: { label: string; href: string };
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Processing Language Server",
    link: {
      label: "marketplace",
      href: "https://marketplace.visualstudio.com/items?itemName=DiyaSolanki.processing-language-server-extension",
    },
    summary:
      "LSP for the Processing language, built in a Rust workspace with the runtime embedded headlessly.",
    tags: ["2,000+ installs", "Rust workspace", "pr05 grant funded"],
  },
  {
    name: "JSON Schema Language Server",
    link: {
      label: "repo",
      href: "https://github.com/hyperjump-io/json-schema-language-tools/pulls?q=is%3Apr+is%3Aclosed+author%3Adiyaayay",
    },
    summary:
      "TypeScript language server on a pub/sub JSON-RPC core: diagnostics, completion, hover, go-to-definition, dialect-aware behavior. Built during GSoC 2024 with json-schema-org.",
    tags: ["19 PRs merged", "coverage 23% → 85%"],
  },
  {
    name: "groundwire",
    status: "in progress",
    link: { label: "repo", href: "https://github.com/diyaayay/groundwire" },
    summary:
      "An LSP to MCP bridge in Rust: correctness-first, token-efficient code intelligence for coding agents like Claude Code.",
    tags: ["Rust", "LSP → MCP"],
  },
  {
    name: "p5.js core library",
    link: {
      label: "repo",
      href: "https://github.com/processing/p5.js/pulls?q=is%3Apr+is%3Aclosed+author%3Adiyaayay",
    },
    summary:
      "Contractor on the core library, Nov 2023 to Jun 2025. Library and tooling engineering in the WebGL/3D pipeline; drove the JavaScript to TypeScript migration of public APIs.",
    tags: ["12 merged PRs", "JS → TS migration"],
  },
  {
    name: "Better Uptime Monitor",
    link: { label: "repo", href: "https://github.com/diyaayay/better-uptime" },
    summary:
      "Uptime monitoring backend in Rust with Tokio, Diesel, and PostgreSQL.",
    tags: ["multi-crate workspace", "integration tests vs real Postgres gate CI"],
  },
  {
    name: "Cove",
    link: { label: "repo", href: "https://github.com/bitcoinppl/cove" },
    summary:
      "Merged regression tests into bitcoinppl/cove, an open-source Rust Bitcoin wallet.",
    tags: ["110+ stars", "Rust"],
  },
];
