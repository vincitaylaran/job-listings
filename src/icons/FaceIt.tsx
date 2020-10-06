import * as React from "react";

function SvgFaceIt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 94 88" fill="none" {...props}>
      <g filter="url(#face-it_svg__filter0_i)">
        <circle
          cx={44}
          cy={44}
          r={44}
          fill="url(#face-it_svg__paint0_linear)"
        />
      </g>
      <circle cx={75} cy={44} r={19} fill="#fff" />
      <defs>
        <linearGradient
          id="face-it_svg__paint0_linear"
          x1={1.52}
          y1={3.04}
          x2={1.52}
          y2={88}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D961C3" />
          <stop offset={1} stopColor="#6858FF" />
        </linearGradient>
        <filter
          id="face-it_svg__filter0_i"
          x={0}
          y={0}
          width={88}
          height={88}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={17.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0452633 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgFaceIt;
