import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { IParnterCardsProps } from "./model";
import { ArrowCard } from "@/shared/icons";
import styles from "./Card.module.scss";

const ParnterCards: React.FC<IParnterCardsProps> = ({
  image,
  title,
  logoMain = "Luyu",
  logoSub = "IPSUM",
}) => {
  return (
    <div className={styles.Redirect}>
      <Link
        href={title}
        className={styles.Redirect}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.card}>
          <div className={styles.logo}>
            {image ? (
              <div className={styles.logoImage}>
                <Image
                  src={getImageUrl(image)}
                  alt={`${logoMain} logo`}
                  width={80}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              <div className={styles.logoText}>
                <span className={styles.logoMain}>{logoMain}</span>
                <span className={styles.logoSub}>{logoSub}</span>
              </div>
            )}
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>{title.substring(0,20) +"..." }</h2>
            <div className={styles.arrow}>
              <ArrowCard />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ParnterCards;
