import * as React from "react";

const SvgIcon = ({color="#fff"}:{color?:string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="101"
    height="106"
    fill="none"
    viewBox="0 0 101 106"
  >
    <path stroke={color} strokeWidth="2" d="M1 0v96h97.5"></path>
    <path stroke={color} strokeWidth="2" d="m89.5 86 10 9.88-10 9.12"></path>
  </svg>
);

export default SvgIcon;
