import React from "react";
import Image from "next/image";
import { Cloud } from "@/shared/icons";
import { Container } from "@/shared/components";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#e9f3fa] to-[#fbfbfb] relative pt-[60px]">
      <Container classname="flex flex-col lg:flex-row">
        <div>
          <span>Medical Center</span>
          <p>Best Medical And Health Care Center</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button>Contact Us</button>
        </div>
        <div>
          <Image
            alt="DOCTOR_PAGE"
            src="/general/doctor.webp"
            width={515}
            height={515}
            className="animate-bgshape relative"

          />
        </div>
      </Container>

      <Cloud className="absolute bottom-[-40px]" />
    </section>
  );
};

export default Hero;
