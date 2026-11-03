import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#171715",
          color: "#f4efe5",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 12, color: "#c3a66b" }}>
          AN ENGINEER&apos;S ODYSSEY
        </div>
        <div style={{ fontSize: 88, fontFamily: "serif", marginTop: 16 }}>Aayushi Shah</div>
        <div style={{ fontSize: 28, color: "#c3a66b", marginTop: 12 }}>
          Building systems with structure. Exploring ideas with curiosity.
        </div>
      </div>
    ),
    { ...size },
  );
}
