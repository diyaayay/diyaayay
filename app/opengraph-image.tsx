import { ImageResponse } from "next/og";
import { site } from "./data/site";

export const dynamic = "force-static";

export const alt = `${site.name} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e1116",
          color: "#e6edf3",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#8b949e",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#3fb950",
            }}
          />
          Software Developer at Oracle, Bengaluru
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#8b949e",
              marginTop: 16,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Software Engineer. Language Servers, Developer Tooling &amp; Backend
            Systems.
          </div>
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#3fb950",
            fontWeight: 600,
          }}
        >
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
