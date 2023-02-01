import { color1, color2 } from "../../App/utils";

export const TopCornerBorder = ({ fill }: { fill?: number[] }) => {
  return (
    <svg
      width="300"
      height="300"
      data-name="corner-top-left"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
      data-inlinesvg=".inlineSvgFile-1"
    >
      <defs>
        <linearGradient id="grad0" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" stop-color={color1} />
          <stop offset=".5" stop-color={color2} />
          <stop offset="1" stop-color={color1} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#grad${fill}`}
        d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
      ></path>
    </svg>
  );
};

export const BottomCornerBorder = ({ fill }: { fill?: number[] }) => {
  return (
    <svg
      width="300"
      height="300"
      data-name="corner-bottom-right"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
      data-inlinesvg=".inlineSvgFile-7"
    >
      <path
        fill={`url(#grad${fill}`}
        d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
      ></path>
    </svg>
  );
};
