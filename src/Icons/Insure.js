import * as React from "react";

function SvgInsure(props) {
  return (
    <svg width={88} height={88} {...props}>
      <defs>
        <filter
          id="insure_svg__b"
          width="139.8%"
          height="139.8%"
          x="-19.9%"
          y="-19.9%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation={17.5}
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2={-1}
            k3={1}
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0452633304 0"
          />
        </filter>
        <circle id="insure_svg__a" cx={44} cy={44} r={44} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#403646" xlinkHref="#insure_svg__a" />
        <use
          fill="#000"
          filter="url(#insure_svg__b)"
          xlinkHref="#insure_svg__a"
        />
        <path
          fill="#F3D3CA"
          fillRule="nonzero"
          d="M16 40.112h1.801v8.765H16v-8.765zm4.071 0h1.79l5.5 2.86v-2.86h1.79v8.765h-1.79v-4.02l-5.5-2.844v6.864h-1.79v-8.765zM32.06 46.27c.32.18.644.341.974.485a7.825 7.825 0 002.14.592c.39.052.805.078 1.245.078.53 0 .983-.034 1.355-.103.373-.07.677-.165.912-.286.236-.122.407-.267.514-.435.107-.168.161-.351.161-.55a.871.871 0 00-.4-.754c-.268-.185-.68-.277-1.237-.277-.245 0-.503.016-.774.047l-.409.05-.413.054c-.276.037-.55.072-.819.104a6.432 6.432 0 01-.759.047 4.27 4.27 0 01-1.138-.15 3.02 3.02 0 01-.965-.455 2.254 2.254 0 01-.67-.757 2.174 2.174 0 01-.248-1.06c0-.24.033-.477.099-.712.066-.236.171-.46.316-.676a2.75 2.75 0 01.562-.6 3.37 3.37 0 01.833-.48 5.51 5.51 0 011.13-.316A8.327 8.327 0 0135.927 40c.395 0 .792.021 1.191.064a11.92 11.92 0 012.259.466c.35.11.676.233.977.367l-.785 1.436a8.44 8.44 0 00-.802-.3 9.513 9.513 0 00-.898-.239c-.312-.067-.635-.12-.968-.16a8.705 8.705 0 00-1.02-.058c-.493 0-.898.035-1.216.106a2.675 2.675 0 00-.76.272c-.188.11-.319.234-.392.37a.852.852 0 00-.11.407c0 .262.118.476.355.642.238.166.599.25 1.085.25.195 0 .42-.015.674-.043l.391-.044.411-.048c.28-.034.567-.065.859-.093.291-.028.575-.042.85-.042.519 0 .98.058 1.38.174.401.116.737.281 1.008.496.271.215.476.475.616.78.139.304.209.646.209 1.023 0 .505-.118.954-.353 1.349-.236.394-.57.727-1.006.998-.434.27-.959.477-1.572.617a9.22 9.22 0 01-2.05.21 11.288 11.288 0 01-2.82-.356c-.435-.114-.85-.25-1.243-.41a9.09 9.09 0 01-1.093-.524l.955-1.44zm10.82-6.157h1.79v4.828c0 .396.054.749.163 1.057.11.309.272.57.488.782.217.214.485.375.805.485.32.11.693.166 1.118.166a3.41 3.41 0 001.115-.166c.322-.11.591-.271.808-.485a2.03 2.03 0 00.488-.782c.11-.308.164-.66.164-1.057v-4.828h1.79v5.041c0 .576-.098 1.1-.293 1.57-.196.471-.48.875-.853 1.212-.373.336-.83.596-1.37.779-.54.183-1.156.275-1.849.275-.693 0-1.309-.092-1.85-.275a3.866 3.866 0 01-1.369-.78 3.334 3.334 0 01-.852-1.21 4.054 4.054 0 01-.294-1.57v-5.042zm10.909 0h4.49c.677 0 1.264.07 1.76.21.498.14.91.343 1.238.609.327.265.57.589.73.97.16.381.24.813.24 1.295 0 .325-.039.635-.118.928-.079.294-.2.564-.364.81a2.77 2.77 0 01-.618.66 3.37 3.37 0 01-.876.479l1.92 2.804h-2.19l-1.66-2.49-2.762-.006v2.496h-1.79v-8.765zm4.534 4.733c.34 0 .636-.04.89-.118a1.85 1.85 0 00.638-.33c.171-.143.299-.316.384-.52.084-.203.127-.43.127-.68 0-.49-.17-.869-.508-1.136-.34-.268-.85-.401-1.53-.401h-2.745v3.185h2.744zm6.042-4.733h7.516v1.559h-5.726v1.75h5.071v1.463h-5.07v2.44H72v1.553h-7.635v-8.765z"
        />
      </g>
    </svg>
  );
}

export default SvgInsure;