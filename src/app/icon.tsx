import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await readFile(
    join(process.cwd(), "assets/InstrumentSerif-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#faf9f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Instrument Serif",
          fontSize: 56,
          color: "#1a1a1a",
          letterSpacing: "-0.04em",
          paddingBottom: 6,
        }}
      >
        n
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: font, style: "normal", weight: 400 },
      ],
    },
  );
}
