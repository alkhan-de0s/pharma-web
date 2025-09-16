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
export default function App() {
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
                Buildin your heartcare
              </span>
              <span className="text-4xl lg:text-6xl text-white font-semibold text-center max-w-[730px]">
                More ways than ever to get the care you need.
              </span>
              <span className="text-lg lg:text-2xl text-white font-semibold text-center max-w-[730px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                eligendi at beatae. Animi, cupiditate qui!
              </span>
              <button className="bg-[#61ce70]! text-white rounded-md hover:bg-violet-600! duration-300 ease-in p-3 ">
                Learn more
                <span className="ml-2 text-white transform rotate-0 hover:rotate-90 transition-transform duration-300 ease-in-out">
                  →
                </span>
              </button>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/home-slider/slider_2.webp" fill alt="SLIDER" />
          <Container classname="h-full">
            <div className="flex flex-col items-center justify-center h-full z-99 relative gap-3">
              <span className="text-lg text-white font-semibold text-center ">
                Buildin your heartcare
              </span>
              <span className="text-4xl lg:text-6xl text-white font-semibold text-center max-w-[730px]">
                More ways than ever to get the care you need.
              </span>
              <span className="text-lg lg:text-2xl text-white font-semibold text-center max-w-[730px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                eligendi at beatae. Animi, cupiditate qui!
              </span>
              <button className="bg-[#61ce70]! text-white rounded-md hover:bg-violet-600! duration-300 ease-in p-3 ">
                Learn more
                <span className="ml-2 text-white transform rotate-0 hover:rotate-90 transition-transform duration-300 ease-in-out">
                  →
                </span>
              </button>
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
