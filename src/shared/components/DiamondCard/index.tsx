"use client";
import { FC } from "react";
import { Rhombus } from "@/shared/icons";
import styles from "./Diamond.module.scss";

const DiamondCard:FC<{backgroundColor:string,title:string,src:string}> = ({backgroundColor='#C45086',title="International events",src}) => {
  return (
    <div
      style={
        {
          "--background-color": backgroundColor,
        } as React.CSSProperties
      }
      className={styles.diamondWrapper}
    >
      <div className={styles.diamondFigure}>
      <Rhombus src={src} /> 
      </div>

      <span>{title}</span>

    </div>
  );
};

export default DiamondCard;
