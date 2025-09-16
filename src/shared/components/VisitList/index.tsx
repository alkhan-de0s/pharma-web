import { Link } from "@/i18n/navigation";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { ArrowCard, StarEmpty, StarFull } from "@/shared/icons";
import Image from "next/image";
import RenderIf from "../RenderIf";
import styles from "./EventList.module.scss";
import { IVisitList } from "./model";
import { useTranslations } from "next-intl";

interface IPropsEventList<T extends IVisitList> {
  eventListData: T[];
  url?: string;
}
const EventList = <T extends IVisitList>({
  eventListData,
  url = "",
}: IPropsEventList<T>) => {
  const t = useTranslations("Plan-Visit");
  return (
    <div className={styles.List}>
      <RenderIf condition={eventListData.length}>
        {eventListData.map((event) => (
          <div key={event?.id}>
            <Link href={`${url}/${String(event.id)}`}>
              <div className={styles.SingleEvent}>
                <div className={styles.SingleEventText}>
                  <div>
                    <div className={styles.Star}>
                      <p>{event.name}</p>
                      <RenderIf condition={event.stars}>
                        <div>
                          {Array.from({ length: 5 }, (_, i) =>
                            i < Math.round(Number(event.stars)) ? (
                              <StarFull key={i} />
                            ) : (
                              <StarEmpty key={i} />
                            )
                          )}
                        </div>
                      </RenderIf>
                    </div>
                    <span>{event.description}</span>
                  </div>
                  <div className={styles.Distance}>
                    <p>{t("distance-to-crystall")}</p>
                    <span>
                      {event.distance} {t("km")}
                    </span>
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

            <div className={styles.Divider}></div>
          </div>
        ))}
      </RenderIf>
    </div>
  );
};

export default EventList;
