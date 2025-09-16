import React from "react";

export interface OurPartnersProps {
  title?: string | React.ReactNode;
  description?: string;
  lineColor?: string;
  titleMaxWidth? :`${number}px` | 'unset'
}