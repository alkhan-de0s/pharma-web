"use client";
import Image from "next/image";
import React, { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.scss";

import { getImageUrl } from "@/shared/helper/getImageUrl";
import { ArrowRightSlider } from "@/shared/icons";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ThumbnailGallery({
  images,
}: {
  images: { imagePath: string; id: number; bonusAreaId: number }[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <div className="custom-swiper-bonus-button-prev">
        <ArrowRightSlider />
      </div>
      <div className="custom-swiper-bonus-button-next">
        <ArrowRightSlider />
      </div>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={{
          prevEl: ".custom-swiper-bonus-button-prev",
          nextEl: ".custom-swiper-bonus-button-next",
          disabledClass: "my-custom-button-disabled",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbnail-gallery"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={getImageUrl(img.imagePath)}
              alt={"Thumbnail Image"}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbnail-gallery-second"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={getImageUrl(img.imagePath)}
              alt={"Thumbnail Image"}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
