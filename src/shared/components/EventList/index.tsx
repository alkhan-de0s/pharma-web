import { Link } from "@/i18n/navigation";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { ArrowCard } from "@/shared/icons";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import RenderIf from "../RenderIf";
import styles from "./EventList.module.scss";
interface EventItem {
  id: number;
  date: string;
  title: string;
  innerDescription: string;
  timeRange: string;
  imagePath: string;
}

interface CategoryProps {
  data: EventItem[];
  categoryId?: number;
}

const groupEventsByMonth = (events: EventItem[]) => {
  const grouped: Record<string, EventItem[]> = {};

  events.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  events.forEach((event) => {
    const date = new Date(event.date);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const key = `${year}-${month}`;

    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(event);
  });

  return grouped;
};

const getMonthName = (key: string, locale: string) => {
  const date = new Date(`${key}-01`);
  return date
    .toLocaleString(locale + "-AZ", {
      month: "long",
      year: "numeric",
    })
    .toUpperCase();
};
const EventList = ({ data, categoryId }: CategoryProps) => {
  const groupedData = groupEventsByMonth(data);
  const locale = useLocale();

  return (
    <div className={styles.List}>
      <RenderIf condition={data.length > 0}>
        {Object.entries(groupedData).map(([key, events], index) => (
          <div
            className={(index + 1) % 2 !== 0 ? styles.Even : styles.Odd}
            key={key}
          >
            <span className={styles.Date}>{getMonthName(key, locale)}</span>

            <RenderIf condition={events.length > 0}>
              {events?.map((event, i) => {
                const dateObj = new Date(event.date);
                const day = dateObj.getDate();
                const time = event.timeRange;

                return (
                  <React.Fragment key={event.id}>
                    <Link href={`${categoryId}/${event.id}`}>
                      <div className={styles.SingleEvent}>
                        <div className={styles.SingleEventTime}>
                          <p>{day}</p>
                          <span>{time}</span>
                        </div>
                        <div className={styles.SingleEventText}>
                          <div>
                            <p>{event.title}</p>
                            <span>{event.innerDescription}</span>
                          </div>
                          <div className={styles.arrow}>
                            <ArrowCard />
                          </div>
                        </div>
                        <div className={styles.SingleEventImage}>
                          <Image
                            src={getImageUrl(event.imagePath)}
                            fill
                            alt="single_event"
                          />
                          <div className={styles.arrowMobile}>
                            <ArrowCard />
                          </div>
                        </div>
                      </div>
                    </Link>

                    <RenderIf condition={i !== events.length - 1}>
                      <div className={styles.Divider}></div>
                    </RenderIf>
                  </React.Fragment>
                );
              })}
            </RenderIf>
          </div>
        ))}
      </RenderIf>
    </div>
  );
};

export default EventList;
