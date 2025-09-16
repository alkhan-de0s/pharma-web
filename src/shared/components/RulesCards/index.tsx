import { Link } from "@/i18n/navigation";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FC } from "react";
import { IRulesCards } from "./model";
import styles from "./Rules.module.scss";

const RulesCards: FC<IRulesCards & { isEven: boolean}> = ({
  borderColor,
  image,
  text,
  href,
  isEven,
  staticImage = false, 
  isStatic = false
}) => {

    const t = useTranslations("Plan-Visit")

    const titleText = isStatic ? t(text) : text
    const imagePath = Boolean(staticImage) ? image : getImageUrl(image)

  return (
    <Link href={href}>
      <div
        className={styles.Rules}
        style={
          {
            "--backgroundColor": borderColor,
            "--imageRight": isEven ? "0px" : "320px",
          } as React.CSSProperties
        }
      >
        <span className={styles.RulesText}>{titleText}</span>
        <div className={styles.RulesImage}>
          <Image src={imagePath} alt="rules" fill />
        </div>
      </div>
    </Link>
  );
};

export default RulesCards;
