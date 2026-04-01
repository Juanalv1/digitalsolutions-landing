import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D1F3C",
          borderRadius: 6,
        }}
      >
        {/* Isotipo "D" en píxeles — fiel al SVG original */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 202 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.8008 0.519531H101.121C156.701 0.519531 201.761 45.5795 201.761 101.16C201.761 156.74 156.701 201.8 101.121 201.8V151.479C128.901 151.479 151.441 128.94 151.441 101.16C151.441 73.3795 128.901 50.8395 101.121 50.8395H50.8008V0.519531Z"
            fill="#2B7BE0"
          />
          <path d="M50.8005 50.8496H0.480469V101.17H50.8005V50.8496Z" fill="#2B7BE0" />
          <path d="M101.121 101.17H50.8008V151.49H101.121V101.17Z" fill="#2B7BE0" />
          <path d="M50.8005 151.489H0.480469V201.809H50.8005V151.489Z" fill="#2B7BE0" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
