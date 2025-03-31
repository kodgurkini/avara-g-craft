import { shapes } from "./shape-data";

const patterns = (patternKey: number, id: number) => {
  const patternKey4 = patternKey % 4;

  switch (patternKey4) {
    case 0:
      return (
        <pattern
          id={`pattern-${id}`}
          patternUnits="userSpaceOnUse"
          width="36"
          height="36"
        >
          <path
            d="M0 30 L120 30"
            stroke="var(--symbol-color-dark)"
            strokeWidth="6"
            fill="none"
            style={{ opacity: 0.25 }}
          />
        </pattern>
      );
    case 1:
      return (
        <pattern
          id={`pattern-${id}`}
          patternUnits="userSpaceOnUse"
          width="120"
          height="120"
        >
          <path
            d="M30 0 Q50 30, 30 60 Q10 90, 30 120"
            stroke="var(--symbol-color-dark)"
            strokeWidth="6"
            fill="none"
            style={{ opacity: 0.25 }}
          />
        </pattern>
      );
    case 2:
      return (
        <pattern
          id={`pattern-${id}`}
          patternUnits="userSpaceOnUse"
          width="120"
          height="120"
        >
          <circle
            cx="120"
            cy="120"
            r="12"
            fill="var(--symbol-color-dark)"
            style={{ opacity: 0.25 }}
          />
        </pattern>
      );
    case 3:
      return (
        <pattern
          id={`pattern-${id}`}
          patternUnits="userSpaceOnUse"
          width="120"
          height="120"
        >
          <path
            d="M60 0 Q80 30, 60 60 Q40 90, 60 120"
            stroke="var(--symbol-color-dark)"
            strokeWidth="6"
            fill="none"
            style={{ opacity: 0.25 }}
          />
        </pattern>
      );
  }
};

const AppSymbol = ({
  shapeKey = 0,
  shapeOnly = false,
  className = "",
  onClick = () => {},
}: {
  shapeKey?: number;
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
          fill="none"
          stroke="var(--color-gray-800)"
          strokeWidth="8"
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
      <defs>{patterns(shapeKey, shapeKey)}</defs>
      <path
        d={shape.path}
        fill={`url(#pattern-${shapeKey})`}
        stroke="var(--symbol-color-dark)"
        strokeWidth="3"
        transform="translate(10 10) scale(0.96)"
      />
      <path
        d={shape.path}
        fill="var(--symbol-color)"
        fillOpacity="0.2"
        stroke="var(--symbol-color-dark)"
        strokeWidth="1"
        transform="translate(10 10) scale(0.96)"
      />
    </svg>
  );
};

export default AppSymbol;
