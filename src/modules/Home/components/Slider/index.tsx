"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const progressCircle = useRef<SVGSVGElement|null>(null);
  const progressContent = useRef<HTMLElement|null>(null);
  const onAutoplayTimeLeft = (_: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", (1 - progress).toString());
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-[500px] home-slider"
      >
        <SwiperSlide>
          <Image
          src="/home-slider/slider_1.webp"
          fill
          alt="SLIDER"
          />
        </SwiperSlide>
        <SwiperSlide>
           <Image
          src="/home-slider/slider_2.webp"
          fill
          alt="SLIDER"
          />
        </SwiperSlide>
      
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
