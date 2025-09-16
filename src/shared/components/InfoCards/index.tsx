import { Link } from "@/i18n/navigation";
import { IInfoCards } from "@/modules/YourVisits/Hotels/Inner/data";
import { FC } from "react";
import RenderIf from "../RenderIf";
import styles from "./Cards.module.scss";
import { useTranslations } from "next-intl";
import { ArrowWebsite } from "@/shared/icons";

interface ICards {
  listDatas: IInfoCards;
}

const Cards: FC<ICards> = ({ listDatas }) => {
  
  const t = useTranslations("Plan-Visit")
  

  const {
    capacityInfo,
    eventIdeas,
    sizeInfo,
    leftIcon,
    middleIcon,
    rightIcon,
    leftIconName,
    middleIconName,
    rightIconName,
    url
  } = listDatas ?? "";

  return (
    <div className={styles.Card}>
      <RenderIf condition={sizeInfo && sizeInfo?.trim()?.length > 0}>
        <div className={styles.CardWrapper}>
          <div className={styles.CardWrapperIcon}>
            {leftIcon}
            <span>{leftIconName}</span>
          </div>
          <ul>
            {sizeInfo
              ?.replace(/,/g, "")
              ?.split(/\r?\n/)
              ?.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
        </div>
      </RenderIf>
      <RenderIf condition={capacityInfo && capacityInfo?.trim()?.length > 0}>
        <div className={styles.CardWrapper}>
          <div className={styles.CardWrapperIcon}>
            {middleIcon}
            <span>{middleIconName}</span>
          </div>
          <ul>
            {capacityInfo
              ?.replace(/,/g, "")
              ?.split(/\r?\n/)
              ?.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
        
          <RenderIf condition={url}>
            <div className={styles.CardWrapperUrl}>
            <Link
              href={url as string}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("website")}

              <ArrowWebsite/>

              </Link>
              </div>
          </RenderIf>
        </div>
      </RenderIf>
      <RenderIf condition={eventIdeas && eventIdeas?.trim()?.length > 0}>
        <div className={styles.CardWrapper}>
          <div className={styles.CardWrapperIcon}>
            {rightIcon}
            <span>{rightIconName}</span>
          </div>
          <ul>
            {eventIdeas
              ?.replace(/,/g, "")
              ?.split(/\r?\n/)
              ?.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
        </div>
      </RenderIf>
    </div>
  );
};

export default Cards;
