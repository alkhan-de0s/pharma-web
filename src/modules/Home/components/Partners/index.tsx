import React from "react";
import { Container } from "@/shared/components";
import { useTranslations } from "next-intl";
import Marquee from "@/shared/components/Marquee";

const data = [
  { id: "1", imagePath: "/home-slider/slider_1.webp" },
  { id: "2", imagePath: "/general/bg-outer.png" },
  { id: "3", imagePath: "/general/doctor.webp" },
]

const Partners = () => {
  const t = useTranslations("Header");
  return (
    <section className="py-10">
      <Container>
        <p className="text-lg lg:text-2xl text-[#61ce70] font-semibold mb-10">
          {t("partners")}
        </p>

        <Marquee data={data}/>
      </Container>
    </section>
  );
};

export default Partners;
