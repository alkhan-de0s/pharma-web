"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Slider.module.scss";
import { RenderIf } from "@/shared/components";
import { classMap } from "./data";
import { HallImage } from "@/modules/Halls/model";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { useTranslations } from "next-intl";

export default function Gallery({
  withTitle = true,
  images,
}: {
  withTitle?: boolean;
  images: HallImage[] | undefined;
}) {
  const t = useTranslations("HomePage")
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <RenderIf condition={withTitle}>
        <h6 className={styles.Title}>{t("glorious")}</h6>
      </RenderIf>
      <div className={styles.parent}>
        {images?.map((src, i) => (
          <div
            key={src.id}
            className={`${styles.gridItem} ${styles[classMap[i]]}`}
            onClick={() => openModal(i)}
          >
            <Image
              src={getImageUrl(src.imagePath)}
              alt={`Image ${src.id}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw"
            />
          </div>
        ))}
      </div>

      <RenderIf condition={modalOpen}>
        <div className={styles.modal} onClick={() => setModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              initialSlide={currentIndex}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
              className="carousel-slider"
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              loop={false}
              style={{ height: "100%" }}
            >
              {images?.map((src, i) => (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={getImageUrl(src.imagePath)}
                      alt={`Slide ${i}`}
                      fill
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div
                className={`swiper-button-prev ${styles.swiperButton}`}
              ></div>
              <div
                className={`swiper-button-next ${styles.swiperButton}`}
              ></div>
            </Swiper>
          </div>
        </div>
      </RenderIf>
    </>
  );
}
