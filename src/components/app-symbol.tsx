import { shapes, Pattern } from "./shape-data";

const AppSymbol = ({
  shapeKey = 0,
  color,
  shapeOnly = false,
  className = "",
  onClick = () => {},
}: {
  shapeKey?: number;
  color?: string;
  shapeOnly?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  const shape = shapes[shapeKey];

  if (shapeOnly) {
    return (
      <svg
        key={shapeKey}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 500 500"
        className={`${className} spin`}
        style={{ padding: "8px" }}
        onClick={onClick}
      >
        <path
          d={shape.path}
          fill="#808183"
          transform="translate(10 10) scale(0.96)"
        />
      </svg>
    );
  }

  return (
    <svg
      key={shapeKey}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10 -10 500 500"
      className={`${className} spin`}
      style={{ padding: "12px" }}
    >
      <defs>
        {generatePattern(shape.pattern, shapeKey, color || shape.pattern.color)}
      </defs>
      <path
        d={shape.path}
        fill={`url(#pattern-${shapeKey})`}
        stroke="var(--symbol-color-dark)"
        strokeWidth="10"
        transform="translate(10 10) scale(0.96)"
      />
      <path
        d={shape.path}
        fill="var(--symbol-color)"
        fillOpacity="0.6"
        stroke="var(--symbol-color-dark)"
        strokeWidth="1"
        transform="translate(10 10) scale(0.96)"
      />
    </svg>
  );
};

// Function to generate SVG pattern definitions based on pattern type
const generatePattern = (
  pattern: Pattern,
  id: number,
  overrideColor?: string
): string => {
  const patternColor = overrideColor || pattern.color;

  switch (pattern.type) {
    case "lines":
      return `
          <pattern id="pattern-${id}" patternUnits="userSpaceOnUse" width="${
        pattern.size * 2
      }" height="${pattern.size * 2}" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="${
              pattern.size * 2
            }" stroke="${patternColor}" stroke-width="3"/>
          </pattern>
        `;
    case "dots":
      return `
          <pattern id="pattern-${id}" patternUnits="userSpaceOnUse" width="${
        pattern.size * 2
      }" height="${pattern.size * 2}">
            <circle cx="${pattern.size}" cy="${pattern.size}" r="${
        pattern.size / 3
      }" fill="${patternColor}"/>
          </pattern>
        `;
    case "wavy":
      return `
          <pattern id="pattern-${id}" patternUnits="userSpaceOnUse" width="${
        pattern.size * 4
      }" height="${pattern.size * 2}">
            <path d="M0 ${pattern.size} C ${pattern.size} 0, ${
        pattern.size * 2
      } ${pattern.size * 2}, ${pattern.size * 4} ${
        pattern.size
      }" stroke="${patternColor}" fill="none" stroke-width="${
        pattern.size / 2
      }"/>
          </pattern>
        `;
    case "grid":
      return `
          <pattern id="pattern-${id}" patternUnits="userSpaceOnUse" width="${
        pattern.size * 2
      }" height="${pattern.size * 2}">
            <rect width="${pattern.size * 2}" height="${
        pattern.size * 2
      }" fill="none" stroke="${patternColor}" stroke-width="${
        pattern.size / 4
      }"/>
            <line x1="0" y1="${pattern.size}" x2="${pattern.size * 2}" y2="${
        pattern.size
      }" stroke="${patternColor}" stroke-width="${pattern.size / 4}"/>
            <line x1="${pattern.size}" y1="0" x2="${pattern.size}" y2="${
        pattern.size * 2
      }" stroke="${patternColor}" stroke-width="${pattern.size / 4}"/>
          </pattern>
        `;
    default:
      return "";
  }
};

export default AppSymbol;
