import { ImageResponse } from "next/og";

export const alt = "Fimbo Consultants: security, risk and fraud consultancy in Dar es Salaam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          borderLeft: "28px solid #d7000f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 22, height: 22, background: "#d7000f", borderRadius: 11 }} />
          Fimbo Consultants
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
          <span>Fraud leaves a trail.</span>
          <span>We know how to read it.</span>
        </div>
        <div style={{ fontSize: 30, color: "#bbb" }}>
          Security, risk and fraud consultancy in Dar es Salaam, Tanzania
        </div>
      </div>
    ),
    size,
  );
}
