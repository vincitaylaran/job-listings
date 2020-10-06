import * as React from "react";

function SvgMyHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 88 88" fill="none" {...props}>
      <g filter="url(#my-home_svg__filter0_i)">
        <circle cx={44} cy={44} r={44} fill="#68A4A4" />
      </g>
      <circle
        opacity={0.25}
        r={24}
        transform="matrix(-1 0 0 1 45 44)"
        fill="url(#my-home_svg__paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.12 47c1.774 0 3.188-1.35 3.188-3 0-1.66-1.414-3-3.189-3-1.775 0-3.188 1.34-3.188 3 0 1.65 1.413 3 3.188 3zm-40.737-.11v-3.35l1.682 2.62h.206l1.682-2.62v3.35h1.382V41.1h-1.382l-1.785 2.72-1.785-2.72H8v5.79h1.383zm15.683 0v-1.95l2.147-3.84h-1.476l-1.362 2.51-1.352-2.51h-1.475l2.146 3.84v1.95h1.372zm10.742-2.01v2.01h-1.383V41.1h1.383v2.56h2.197V41.1h1.383v5.79h-1.383v-2.01h-2.197zM48.365 44c0 .96.774 1.77 1.754 1.77s1.754-.81 1.754-1.77a1.753 1.753 0 10-3.508 0zm13.868 2.89v-3.35l1.682 2.62h.206l1.682-2.62v3.35h1.383V41.1h-1.383l-1.785 2.72-1.785-2.72H60.85v5.79h1.383zM79 45.66v1.23h-4.169V41.1H79v1.23h-2.786v1.1h2.57v1.23h-2.57v1H79z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="my-home_svg__paint0_linear"
          x1={24}
          y1={-24}
          x2={-24}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.01} />
        </linearGradient>
        <filter
          id="my-home_svg__filter0_i"
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

export default SvgMyHome;
