import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Nitin Bansal — product manager at JEFIT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const [serifRegular, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), "assets/InstrumentSerif-Regular.ttf")),
    readFile(join(process.cwd(), "assets/InstrumentSerif-Italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#faf9f5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 96px",
          fontFamily: "Instrument Serif",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b6b6b",
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
          }}
        >
          Nitin Bansal
        </div>

        <div
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#1a1a1a",
            maxWidth: 960,
            display: "flex",
          }}
        >
          Product manager at JEFIT, a fitness app used by over ten million
          lifters.
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#6b6b6b",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          Before that, Quora.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serifRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Instrument Serif",
          data: serifItalic,
          style: "italic",
          weight: 400,
        },
      ],
    },
  );
}
