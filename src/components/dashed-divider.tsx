const DashedDivider = () => {
  return (
    <div className="animated-divider">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "1px" }}
      >
        <line
          x1="0"
          x2="100%"
          y1="0.5"
          y2="0.5"
          stroke="#2C2D30"
          stroke-dasharray="4 6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-opacity="0.1"
          vector-effect="non-scaling-stroke"
          data-projection-id="626"
          stroke-dashoffset="0"
        ></line>
      </svg>
    </div>
  );
};

export default DashedDivider;
