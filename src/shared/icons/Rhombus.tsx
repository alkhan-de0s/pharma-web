'use client';
interface IRhombus {
    src : string;
    className? :string
}
import React, { FC } from "react";

const Rhombus:FC<IRhombus> = ({ src }) => {
  
  return (
   
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 580 467"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        <defs>
          <clipPath id={'photo'}>
            <path d="M579.995 283.83 386.412 467l-98.108-109.954L168.619 467 0 283.516 174.315 0l116.081 170.106L391.942 0z" />
          </clipPath>
        </defs>
        <image
          href={src}
          x="0"
          y="0"
          width="580"
          height="467"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#photo)`}
        />
      </svg>

  );
};

export default Rhombus;

