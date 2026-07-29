import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages. Note: custom response headers are not
  // supported on static hosts — the resume download relies on the anchor's
  // `download` attribute instead.
  output: "export",
};

export default nextConfig;
