import { getImageUrl } from "@/shared/helper/getImageUrl";
import Image from "next/image";
import React, { FC } from "react";
import { HighlightEvent } from "../Highlights/models";
import styles from "./Info.module.scss";
import { ITableData } from "./data";
import { formatDate } from "@/shared/helper/formatDate";
import { useLocale, useTranslations } from "next-intl";
interface SlugPageProps {
  event: HighlightEvent;
}

const EventInfo = ({ event }: SlugPageProps) => {
  const locale = useLocale();
  const t = useTranslations("Events");

  const tableKeys = {
    date: formatDate(event.date, locale),
    hall: event.hallName,
    "number-of-participants": event.numberOfParticipants,
    partner: event.partner,
  };

  return (
    <React.Fragment>
      <div className={styles.Table}>
        {Object.entries(tableKeys).map(([key, value]) => (
          <SlugTable key={key} info={value} title={t(key)} />
        ))}
      </div>
      <div className={styles.Image}>
        <Image
          src={getImageUrl(event?.imagePath)}
          alt="inner_image"
          fill
          priority={false}
        />
      </div>
      <div className={styles.Text}>
        <span>{event.innerTitle}</span>
        <p>{event.innerDescription}</p>
      </div>
    </React.Fragment>
  );
};

export default EventInfo;
const SlugTable: FC<Omit<ITableData, "id">> = ({ title, info }) => {
  return (
    <div className={styles.TableWrapper}>
      <div className={styles.TableWrapperDivider}></div>
      <span>{title}</span>
      <p>{info}</p>
    </div>
  );
};
