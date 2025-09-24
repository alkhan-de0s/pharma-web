import { BreadCrumb, Container, MainTitle } from "@/shared/components";
import { Urls } from "@/shared/constants/urls";
import { useTranslations } from "next-intl";
import React from "react";
import Hero from "../Home/components/HeroSection";

const About = () => {
  const t = useTranslations("Header");
  return (
    <>
      <BreadCrumb
        items={[
          { label: t("home"), href: Urls.HOME },
          { label: t("about-us"), href: Urls.ABOUT },
        ]}
      />
      <Hero heroDescFirstTitle="about-us-first" heroDescSecondTitle="about-us-second" heroDescThirdTitle="abous-us-third" heroTitle="about-us" imagePath="/general/doctor.webp" key='ABOUT'  />
    </>
  );
};

export default About;


