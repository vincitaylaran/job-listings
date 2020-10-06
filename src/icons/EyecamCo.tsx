import * as React from "react";

function SvgEyecamCo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 88 88" fill="none" {...props}>
      <g filter="url(#eyecam-co_svg__filter0_i)">
        <circle
          cx={44}
          cy={44}
          r={44}
          fill="url(#eyecam-co_svg__paint0_linear)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.532 43.473c.037.324.064.522.08.593l1.01 4.562H74L71.793 39l-2.63 5.823c-.025.06-.062.143-.112.253-.187.408-.325.744-.412 1.01a65.99 65.99 0 00-.308-.796 12.733 12.733 0 00-.19-.46L65.448 39l-2.157 9.628h1.365l.979-4.55c.054-.23.094-.452.121-.665a5.84 5.84 0 00.047-.609 7.407 7.407 0 00.449 1.174L68.639 49l2.388-4.921c.104-.219.19-.433.258-.644.069-.21.122-.42.16-.63.024.176.053.399.087.668zm-12.066 5.155l-1.035-2.379h-3.616l-1.06 2.379h-1.558l4.42-9.603 4.413 9.603h-1.565zm-10.147-6.99a4.558 4.558 0 00-1.33-.815 4.051 4.051 0 00-1.475-.27c-.997 0-1.808.323-2.434.97-.625.648-.938 1.487-.938 2.518 0 .997.304 1.82.913 2.467.609.648 1.377.971 2.303.971a4.15 4.15 0 001.543-.29 4.88 4.88 0 001.406-.877v1.698c-.4.29-.833.506-1.303.65a5.22 5.22 0 01-1.527.214 5.272 5.272 0 01-1.936-.347 4.488 4.488 0 01-1.561-1.022 4.547 4.547 0 01-1.025-1.562 5.121 5.121 0 01-.359-1.915c0-.677.12-1.313.359-1.908a4.605 4.605 0 011.037-1.568 4.568 4.568 0 011.559-1.032 5.09 5.09 0 011.901-.35 4.94 4.94 0 011.533.237c.487.158.958.396 1.415.716l-.08 1.514zM14 48.627V39.39h5.093v1.275h-3.61v2.315h3.61V44.3h-3.61v2.984h3.61v1.344H14zm11.038 0V44.4l-3.073-5.01h1.558l1.913 3.136a10.412 10.412 0 01.38.738c.059-.147.12-.286.185-.416.064-.13.132-.25.202-.36l1.964-3.098h1.483l-3.141 5.01v4.227h-1.471zm7.883-9.237v9.237h5.093v-1.344h-3.61V44.3h3.61V42.98h-3.61v-2.315h3.61V39.39H32.92zM57.907 45h-2.543l.935-2.107a7.855 7.855 0 00.33-1.048c.059.215.117.41.175.584.058.175.114.33.168.464L57.907 45z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="eyecam-co_svg__paint0_linear"
          x1={0.861}
          y1={0}
          x2={0.861}
          y2={86.279}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43E2DF" />
          <stop offset={1} stopColor="#156A8D" />
        </linearGradient>
        <filter
          id="eyecam-co_svg__filter0_i"
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

export default SvgEyecamCo;
