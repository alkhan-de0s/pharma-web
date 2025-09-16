import React from "react";
import styles from "./Additonal.module.scss";
import { Link } from "@/i18n/navigation";
import { additionalData } from "./data";
import RenderIf from "../RenderIf";
import { useTranslations } from "next-intl";
const AdditionalInfo = () => {
  const t = useTranslations("Events");
  return (
    <div className={styles.Additional}>
      <h6>{t("additional-info")}</h6>
      <div className={styles.AdditionalComponent}>
        {additionalData.map((data, index) => (
          <React.Fragment key={data.id}>
            <Link href={data.href as string}>
              <span>{t(data.title)}</span>
              <div className={styles.arrow}>
                {data.icon}
              </div>
            </Link>
            <RenderIf condition={index !== additionalData.length - 1}>
              <div className={styles.Divider}></div>
            </RenderIf>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInfo;
