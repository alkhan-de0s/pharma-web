import * as React from "react";

const SvgIcon:React.FC<{variant?:'default'|'dark',className?:string}> = ({variant,className=""}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      stroke={variant=='dark' ? 'black' : 'white' }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M13 6 8.884 9.675a1.36 1.36 0 0 1-1.768 0L3 6"
    ></path>
  </svg>
);

export default SvgIcon;
