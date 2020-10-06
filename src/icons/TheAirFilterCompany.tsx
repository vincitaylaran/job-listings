import * as React from "react";

function SvgTheAirFilterCompany(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 88 88" fill="none" {...props}>
      <g filter="url(#the-air-filter-company_svg__filter0_i)">
        <circle cx={44} cy={44} r={44} fill="#1A7373" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.5 56.993A14.932 14.932 0 0052 59c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-2.732 0-5.294.73-7.5 2.007A14.932 14.932 0 0037 29v2.727c1.79 0 3.49.383 5.023 1.072A14.963 14.963 0 0037 44c0 4.454 1.94 8.454 5.023 11.201A12.23 12.23 0 0137 56.273c-6.778 0-12.273-5.495-12.273-12.273H22c0 8.284 6.716 15 15 15 2.732 0 5.294-.73 7.5-2.007zm2.477-1.792A12.23 12.23 0 0052 56.273c6.778 0 12.273-5.495 12.273-12.273S58.778 31.727 52 31.727c-1.79 0-3.49.383-5.023 1.072A14.963 14.963 0 0152 44c0 4.454-1.94 8.454-5.023 11.201zM44.5 53.715A12.252 12.252 0 0049.273 44c0-3.954-1.87-7.47-4.773-9.715A12.252 12.252 0 0039.727 44c0 3.954 1.87 7.47 4.773 9.715z"
        fill="#fff"
      />
      <defs>
        <filter
          id="the-air-filter-company_svg__filter0_i"
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

export default SvgTheAirFilterCompany;
