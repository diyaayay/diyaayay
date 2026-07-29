export type Note = {
  title: string;
  date: string; // ISO date
  readingTime: string; // e.g. "6 min"
  excerpt: string;
  url: string;
};

const allNotes: Note[] = [
  {
    title: "Building the Processing Language Server under a pr05 grant",
    date: "2024-12-20",
    readingTime: "6 min",
    excerpt:
      "Grammar, parser, sketch runner, and the symlink packaging that let Processing run headless from the extension. Shipped to the VS Code Marketplace.",
    url: "https://medium.com/@diya.solanki.31/my-journey-with-pr05-processing-foundation-2e6c629d59da",
  },
  {
    title: "GSoC 2024 with JSON Schema, and the org that fell through",
    date: "2024-08-26",
    readingTime: "3 min",
    excerpt:
      "Four months contributing to an org that did not get accepted, 25 days to find another, and a language server for VS Code and Neovim at the end of it.",
    url: "https://medium.com/@diya.solanki.31/my-experience-with-gsoc-2024-json-schema-d86cb705b54a",
  },
  {
    title: "GSoC'24 Final Report @JSON-SCHEMA",
    date: "2024-08-26",
    readingTime: "9 min",
    excerpt:
      "The technical final report: 19 merged PRs across completion, go-to-definition, custom dialects, and the pub/sub JSON-RPC core — plus the test suites that lifted line coverage to 85%.",
    url: "https://gist.github.com/diyaayay/177173bc76abbac2cbb11bba5961017a",
  },
];

export const notes: Note[] = [...allNotes].sort((a, b) =>
  b.date.localeCompare(a.date),
);
