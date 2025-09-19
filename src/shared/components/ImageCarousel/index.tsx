"use client";
import { Container, MainTitle, RenderIf } from "@/shared/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { classMap, images } from "./data";
import styles from "./Slider.module.scss";
export default function Gallery({}: {
  withTitle?: boolean;
  images?: { id: number; imagePath: string }[];
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };
  const t = useTranslations("Header");
  return (
    <>
      <Container>
        <MainTitle titleMaxWidth="300px" title={t("gallery")} />
        <div className={styles.parent}>
          {images?.map((src, i) => (
            <div
              key={src.id}
              className={`${styles.gridItem} ${styles[classMap[i]]}`}
              onClick={() => openModal(i)}
            >
              <Image
                src={src.imagePath}
                alt={`Image ${src.id}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </Container>

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
                      src={src.imagePath}
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
