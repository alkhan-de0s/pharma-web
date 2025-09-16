import React from "react";
import { OurPartnersProps } from "./model";
import styles from "./Title.module.scss";

const MainTitle: React.FC<OurPartnersProps> = ({
  title = "",
  description = "",
  lineColor = "",
  titleMaxWidth = "150px",
}) => {
  return (
    <section
      className={styles.mainTitle}
      style={
        {
          "--line-color": lineColor,
          "--title-max-width": titleMaxWidth,
        } as React.CSSProperties
      }
    >
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <div className={styles.redLine}></div>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default MainTitle;
