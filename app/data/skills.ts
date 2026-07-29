export type SkillCategory = {
  label: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: ["Rust", "TypeScript", "JavaScript", "Java", "Python", "GLSL"],
  },
  {
    label: "Backend & APIs",
    items: [
      "Tokio",
      "Poem",
      "Flask",
      "REST",
      "JSON-RPC",
      "LSP/LSIF",
      "OpenAPI",
      "Protobuf",
    ],
  },
  {
    label: "Graphics",
    items: ["WebGL", "GLSL", "p5.js", "Canvas", "Three.js", "glTF", ".obj/.mtl"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Diesel", "SQL", "JSON Schema"],
  },
  {
    label: "CI/CD & build",
    items: ["Docker", "GitHub Actions", "Jenkins", "Cargo", "Ant", "npm"],
  },
  {
    label: "Quality",
    items: ["Vitest", "Mocha", "pytest"],
  },
];

export const openSource: string[] = [
  "GSoC 2024 contributor",
  "pr05 software developer grantee, Processing Foundation",
  "GSoC 2025 & 2026 mentor, Processing Foundation",
  "Processing Foundation Advisory Committee member",
  "GSoC Mentor Summit 2025 delegate (Munich)",
];
