import * as React from "react";

function SvgAccount(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 88 88" fill="none" {...props}>
      <g filter="url(#account_svg__filter0_i)">
        <circle cx={44} cy={44} r={44} fill="#4F1181" />
      </g>
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          d="M34.818 48c-2.272 0-3.969-1.716-3.969-3.994 0-2.29 1.697-4.006 3.97-4.006 1.956 0 3.47 1.317 3.774 3.248H36.51c-.256-.78-.9-1.288-1.686-1.288-1.057 0-1.833.867-1.833 2.046 0 1.175.776 2.03 1.833 2.03.828 0 1.48-.551 1.688-1.398h2.104C38.33 46.642 36.806 48 34.818 48zm-9.614-.193l.413-1.236h2.646l.412 1.236h2.264l-2.996-7.615h-2.01L23 47.807h2.204zm2.558-2.878h-1.644l.818-2.36.826 2.36zM43.11 48c1.988 0 3.512-1.36 3.796-3.361h-2.103c-.21.846-.86 1.396-1.689 1.396-1.057 0-1.832-.854-1.832-2.029 0-1.179.775-2.046 1.832-2.046.786 0 1.43.507 1.687 1.288h2.084C46.582 41.318 45.067 40 43.11 40c-2.272 0-3.97 1.716-3.97 4.006 0 2.278 1.698 3.994 3.97 3.994zm8.434 0c-2.4 0-4.113-1.673-4.113-4s1.713-4 4.113-4c2.393 0 4.1 1.666 4.1 4s-1.707 4-4.1 4zm0-1.952c-1.136 0-1.971-.863-1.971-2.048s.835-2.048 1.97-2.048c1.137 0 1.96.857 1.96 2.048 0 1.192-.823 2.048-1.96 2.048zm11.52-1.186c0 1.873-1.355 3.138-3.258 3.138s-3.259-1.265-3.259-3.138v-4.67h2.102v4.63c0 .745.47 1.226 1.157 1.226s1.157-.481 1.157-1.226v-4.63h2.102v4.67zm3.293 2.945v-4.132l2.966 4.132h1.7v-7.615h-1.992v3.995l-2.867-3.995h-1.8v7.615h1.993zm9.614-5.726v5.726h-2.065v-5.726h-2.028v-1.889H78v1.89h-2.028z"
          fill="#fff"
        />
        <path
          d="M17.42 47.953L13.71 40 10 47.953h7.42z"
          fill="url(#account_svg__paint0_linear)"
        />
        <path
          d="M20.913 47.953L17.203 40l-3.71 7.953h7.42z"
          fill="url(#account_svg__paint1_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="account_svg__paint0_linear"
          x1={6.29}
          y1={43.977}
          x2={14.224}
          y2={51.38}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5141E2" />
          <stop offset={1} stopColor="#DE39FF" />
        </linearGradient>
        <linearGradient
          id="account_svg__paint1_linear"
          x1={9.782}
          y1={43.977}
          x2={17.716}
          y2={51.38}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5141E2" />
          <stop offset={1} stopColor="#DE39FF" stopOpacity={0.01} />
        </linearGradient>
        <filter
          id="account_svg__filter0_i"
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

export default SvgAccount;
