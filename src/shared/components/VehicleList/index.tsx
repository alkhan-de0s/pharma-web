import React, { FC } from "react";
import Image from "next/image";
import { IVehicleList } from "./models";
import styles from "./EventList.module.scss";
import { getImageUrl } from "@/shared/helper/getImageUrl";

const EventList: FC<IVehicleList> = ({
  imagePath,
  name,
  description,
  extraInfoTitle,
  extraInfoContent,
}) => {
  return (
    <div className={styles.List}>
      <div>
        <div className={styles.SingleEvent}>
          <div className={styles.SingleEventText}>
            <div>
              <div className={styles.Star}>
                <p>{name}</p>
              </div>
              <span>{description}</span>
            </div>

            <div className={styles.Distance}>
              <p>{extraInfoTitle}</p>
              <p>{extraInfoContent}</p>
            </div>
          </div>

          <div className={styles.SingleEventImage}>
            <Image src={getImageUrl(imagePath)} fill alt="single_event" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
