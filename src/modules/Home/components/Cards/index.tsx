import React from "react";
import { Container } from "@/shared/components";
import { services } from "./data";
import { useTranslations } from "next-intl";
const Cards = () => {

    const t = useTranslations("HomePage")
  return (
    <section className="my-10!">
      <Container>
        <div className="flex flex-col items-center gap-2 mb-5">
            <span className="text-[#12b48b] font-semibold text-lg ">{t("card-title")}</span>
            <p className="text-[#204066] font-semibold text-[32px] max-w-[600px] text-center">{t("card-description")}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col shadow-[0_0_15px_0_rgba(0,0,0,0.13)] gap-3 p-5"
            >
              {service.icon}
              <span className="font-semibold text-xl text-[#204066]">
                {t(service.title)}
              </span>
              <span className="text-[#7a7a7a] font-semibold">
                {t(service.description)}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cards;
