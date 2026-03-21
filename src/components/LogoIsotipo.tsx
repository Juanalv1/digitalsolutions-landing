"use client";

interface LogoIsotipoProps {
  size?: number;
  white?: boolean;
}

export function LogoIsotipo({ size = 40, white = false }: LogoIsotipoProps) {
  const primary = white ? "#FFFFFF" : "#2B7BE0";
  const secondary = white ? "rgba(255,255,255,0.4)" : "#C8DFFE";

  // Pixel "D" shape: 5x5 grid of squares
  // D pattern: col 0 always on, top/bottom rows on, right side curves
  const pixels = [
    // row 0 (top): cols 0-3
    [0, 0], [1, 0], [2, 0], [3, 0],
    // row 1: cols 0 and 4
    [0, 1], [4, 1],
    // row 2: cols 0 and 4
    [0, 2], [4, 2],
    // row 3: cols 0 and 4
    [0, 3], [4, 3],
    // row 4 (bottom): cols 0-3
    [0, 4], [1, 4], [2, 4], [3, 4],
  ];

  const decorPixels = [
    [5, 0], [5, 1], [6, 1], [5, 2],
  ];

  const unit = size / 7;
  const gap = unit * 0.18;
  const squareSize = unit - gap;

  return (
    <svg
      width={size}
      height={size * (5 / 7)}
      viewBox={`0 0 ${size} ${size * (5 / 7)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {pixels.map(([col, row], i) => (
        <rect
          key={i}
          x={col * unit + gap / 2}
          y={row * unit + gap / 2}
          width={squareSize}
          height={squareSize}
          rx={squareSize * 0.15}
          fill={primary}
        />
      ))}
      {decorPixels.map(([col, row], i) => (
        <rect
          key={`d-${i}`}
          x={col * unit + gap / 2}
          y={row * unit + gap / 2}
          width={squareSize}
          height={squareSize}
          rx={squareSize * 0.15}
          fill={secondary}
          opacity={0.6}
        />
      ))}
    </svg>
  );
}

export function PixelPatternBg({ className = "" }: { className?: string }) {
  const positions = [
    [0, 0], [1, 0], [0, 1],
    [3, 1], [4, 0], [4, 1],
    [2, 2], [3, 2],
    [0, 3], [1, 3], [2, 3],
    [4, 3], [4, 4],
    [1, 4], [2, 5], [3, 5], [4, 5],
    [0, 5], [0, 6], [1, 6],
    [3, 6], [4, 6],
    [2, 7], [1, 8], [3, 8], [4, 7],
  ];

  const unit = 24;
  const squareSize = 14;
  const width = 5 * unit + squareSize;
  const height = 9 * unit + squareSize;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-hidden="true"
    >
      {positions.map(([col, row], i) => (
        <rect
          key={i}
          x={col * unit}
          y={row * unit}
          width={squareSize}
          height={squareSize}
          rx={3}
          fill="white"
          opacity={0.06 + (i % 4) * 0.04}
        />
      ))}
    </svg>
  );
}

export function DotGridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="2" fill="#2B7BE0" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}
