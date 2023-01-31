const BottomCornerBorder = () => {
  return (
    <svg
      width="300"
      height="300"
      data-name="corner-bottom-right"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
      data-inlinesvg=".inlineSvgFile-7"
    >
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" style={{ background: "green" }}></stop>
          <stop offset=".5" className="gradient2"></stop>
          <stop offset="1" className="gradient1"></stop>
        </linearGradient>
      </defs>
      <path
        fill="linear-gradient(#00d4ff,#2658a9,#3131b1,#2658a9,#00d4ff)10"
        d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
      ></path>
    </svg>
  );
};

export default BottomCornerBorder;
