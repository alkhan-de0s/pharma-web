"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Container } from "@/shared/components";
import { MoveLeft, MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
export default function App() {

  const t = useTranslations("HomePage");

  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLElement | null>(null);
  const onAutoplayTimeLeft = (_: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      progressCircle.current.style.setProperty("stroke", "#039803");
      progressContent.current.style.setProperty("color", "#039803");
    }
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".home-slider-button-prev",
          nextEl: ".home-slider-button-next",
          disabledClass: "my-custom-button-disabled",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-[600px] lg:h-[500px] home-slider mb-10"
      >
        <SwiperSlide>
          <Image
            priority
            fetchPriority="high"
            sizes="100vw"
            src="/home-slider/slider_1.webp"
            fill
            alt="SLIDER"
          />
          <Container classname="h-full">
            <div className="flex flex-col items-center justify-center h-full z-99 relative gap-3">
              <span className="text-lg text-white font-semibold text-center ">
                {t("heartcare")}
              </span>
              <span className="text-4xl lg:text-6xl text-white font-semibold text-center max-w-[730px]">
              {t("more-need")}
              </span>
           
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/home-slider/slider_2.webp" fill alt="SLIDER" />
          <Container classname="h-full">
            <div className="flex flex-col items-center justify-center h-full z-99 relative gap-3">
              <span className="text-lg text-white font-semibold text-center ">
                {t("protect-anywhere")}
              </span>
              <span className="text-4xl lg:text-6xl text-white font-semibold text-center max-w-[730px]">
                {t("with-support")}
              </span>
            
            </div>
          </Container>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

        <div className="home-slider-button-prev hidden lg:block absolute top-1/2 z-3 bg-white p-3 rounded-full cursor-pointer ml-5  ">
          <MoveLeft size={20} color="black" />
        </div>
        <div className="home-slider-button-next hidden lg:block absolute top-1/2 right-0 z-3 bg-white p-3 rounded-full cursor-pointer mr-5 ">
          <MoveRight size={20} color="black" />
        </div>
      </Swiper>
    </>
  );
}
