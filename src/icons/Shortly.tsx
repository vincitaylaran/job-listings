import * as React from "react";

function SvgShortly(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 88 88" fill="none" {...props}>
      <g filter="url(#shortly_svg__filter0_i)">
        <circle cx={44} cy={44} r={44} fill="#19ACDE" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.614 50.723h-3.568L25.152 39h3.568l-.74 4.135a3.918 3.918 0 013.022-1.41c2.09 0 3.054 1.505 2.636 3.818l-.932 5.18h-3.552l.852-4.737c.16-.855-.258-1.378-1.03-1.378-.787 0-1.35.523-1.51 1.378v-.016l-.852 4.753zm-7.332-5.424c1.329.384 3.113.9 3.113 2.62 0 1.885-1.832 2.915-4.307 2.915-2.604 0-4.372-1.3-4.05-3.2h3.423c-.016.538.37.776.916.776.37 0 .675-.19.675-.428 0-.375-.61-.542-1.38-.752-1.313-.359-3.088-.844-3.088-2.701 0-1.6 1.543-2.852 3.938-2.852 2.668 0 4.098 1.442 4.034 3.2H19.39c0-.475-.306-.76-.884-.76-.354 0-.643.142-.643.412 0 .36.629.542 1.419.77zm24.763.133c0-2.282-1.656-3.755-4.067-3.755-3.262 0-5.705 2.281-5.705 5.418 0 2.281 1.655 3.739 4.066 3.739 3.263 0 5.706-2.234 5.706-5.402zm-4.613-.713c-.98 0-1.495 1.093-1.495 1.996 0 .744.402 1.077.949 1.077.98 0 1.494-1.093 1.494-1.996 0-.745-.418-1.077-.948-1.077zm8.864 2.344c.225-1.22.964-1.584 2.25-1.584h1.013l.659-3.754c-1.174 0-2.38.713-3.263 1.71l.29-1.647h-3.569l-1.607 8.935h3.568l.659-3.66zm7.369 3.66c-2.122 0-3.568-.887-3.07-3.66l.418-2.344h-1.125l.53-2.93h1.125l.386-2.155h3.568l-.386 2.154h1.48l-.531 2.93H56.58l-.434 2.409c-.064.412.097.602.563.602h.852l-.547 2.994h-1.35zm2.515 0h3.568L63.854 39h-3.568L58.18 50.723zm5.618-8.935l2.25 8.491L62.93 55h3.905L75 41.788h-3.938l-2.41 4.53-.885-4.53h-3.97z"
        fill="#fff"
      />
      <defs>
        <filter
          id="shortly_svg__filter0_i"
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

export default SvgShortly;
