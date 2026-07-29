export type ExperienceLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  link: string;
  dates: string;
  role: string;
  detail?: string;
  summary: string;
  current?: boolean;
  links?: ExperienceLink[];
};

export const experience: Experience[] = [
  {
    company: "Oracle",
    link: "https://www.oracle.com",
    dates: "Jul 2025 – Present",
    role: "Software Developer",
    summary:
      "Built a VS Code extension that authenticates to Oracle databases, runs SQL through the Oracle client, and commits changes from the editor. Automated pre-drop VM preparation over SSH behind Jenkins release triggers.",
    current: true,
  },
  {
    company: "p5.js, Processing Foundation",
    link: "https://github.com/processing/p5.js/pulls?q=is%3Apr+is%3Aclosed+author%3Adiyaayay",
    dates: "Nov 2023 – Jun 2025",
    role: "Software Engineer",
    detail: "Core library, contract",
    summary:
      "Extended the WebGL/3D pipeline with .obj/.mtl mesh export and texture bindings, reworked the input stack for 2.0, and drove the JavaScript to TypeScript migration of public APIs.",
    links: [
      {
        label: "p5.js repo",
        href: "https://github.com/processing/p5.js/pulls?q=is%3Apr+is%3Aclosed+author%3Adiyaayay",
      },
    ],
  },
  {
    company: "Processing Foundation",
    link: "https://processingfoundation.org",
    dates: "Jul – Oct 2024",
    role: "pr05 Grant Recipient",
    detail: "Language servers",
    summary:
      "Designed a client/server language server for Java-based Processing over JSON-RPC with the runtime embedded headlessly. Shipped to the VS Code Marketplace, 2,000+ installs.",
    links: [
      {
        label: "marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=DiyaSolanki.processing-language-server-extension",
      },
    ],
  },
  {
    company: "json-schema-org",
    link: "https://github.com/json-schema-org",
    dates: "May – Aug 2024",
    role: "GSoC Fellow",
    detail: "Open source SWE",
    summary:
      "Implemented a JSON Schema language server in TypeScript for VS Code and Neovim clients, handling draft skew and custom dialects. 19 PRs merged, line coverage raised from 23% to 85%.",
    links: [
      {
        label: "repo",
        href: "https://github.com/hyperjump-io/json-schema-language-tools/pulls?q=is%3Apr+is%3Aclosed+author%3Adiyaayay",
      },
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    link: "https://www.hpe.com",
    dates: "Feb – Jun 2024",
    role: "Software Engineer Intern",
    detail: "Data protection APIs",
    summary:
      "Built a Flask and MongoDB API for HPE protection policies with JSON schema validation on ingest, plus recovery-point forecasting and schedule overlap simulation.",
  },
];
