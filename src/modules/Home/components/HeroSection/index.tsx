import React from "react";
import Image from "next/image";
import { Cloud } from "@/shared/icons";
import { Container } from "@/shared/components";
import { useTranslations } from "next-intl";



interface HeroProps {
  heroTitle: string;
  heroDescFirstTitle: string;
  heroDescSecondTitle: string;
  heroDescThirdTitle: string;
  imagePath: string;
}

const Hero:React.FC<HeroProps> = ({heroDescFirstTitle,heroDescSecondTitle,heroDescThirdTitle,heroTitle,imagePath}) => {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-gradient-to-r from-[#e9f3fa] to-[#fbfbfb] relative pt-[60px]">
      <Container classname="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-1 flex-col gap-5">
          <span className="text-[#12b48b] text-2xl lg:text-4xl">{t(heroTitle)}</span>
          <p>{t(heroDescFirstTitle)}</p>
          <p>{t(heroDescSecondTitle)}</p>
          <p className="relative z-1">{t(heroDescThirdTitle)}</p>
        </div>
        <div className="flex justify-end flex-1">
          <Image
            alt="DOCTOR_PAGE"
            src={imagePath}
            width={515}
            height={515}
            className="animate-bgshape relative"
          />
        </div>
      </Container>

      <Cloud className="absolute bottom-[-20px]" />
    </section>
  );
};

export default Hero;
