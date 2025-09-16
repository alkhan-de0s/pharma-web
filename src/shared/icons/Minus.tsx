import * as React from "react";

const SvgIcon = ({arrowColor="#0E0000"}:{arrowColor?:string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke={arrowColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 10h10"
    ></path>
  </svg>
);

export default SvgIcon;
