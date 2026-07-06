import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const imagePath = join(process.cwd(), "public/images/1001952859.jpg");
  const imageData = readFileSync(imagePath).toString("base64");
  const imageSrc = `data:image/jpeg;base64,${imageData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#06090F",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
            padding: "0 56px",
            flex: 1.2,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#D4AF37",
              textTransform: "uppercase",
            }}
          >
            Sports Presenter · Journalist · Event Host
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#D4AF37",
              fontFamily: "serif",
              lineHeight: 1.05,
            }}
          >
            Dorcas Koki
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#F7F5F0",
              fontFamily: "serif",
              lineHeight: 1.25,
              maxWidth: 560,
            }}
          >
            The Voice of Sports, Stories &amp; Stadium Energy
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            width={500}
            height={630}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
