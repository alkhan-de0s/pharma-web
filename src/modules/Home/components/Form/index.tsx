"use client";
import { Container } from "@/shared/components";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

const Form = () => {
  const t = useTranslations("HomePage");

 

  return (
    <section className="relative  h-[700px] bg-[#204066] bg-[url(/general/bg-form.png)] bg-fixed bg-cover bg-no-repeat my-10 p-4">
      <Container classname="flex items-center h-full justify-center">
        <form
          className="flex flex-col gap-[30px] bg-[#f1f1f1] p-[15px]   md:p-10 w-full lg:w-[500px]  rounded-xl"
          action="#"
        >
          <span className="text-[#12b48b] text-semibold text-2xl text-center">
            {t("form-title")}
          </span>
          <p className="mb-5 text-center text-[#204066] text-transform: capitalize">
            {t("form-description")}
          </p>

          <input className="bg-white rounded-xl text-[#7a7a7a] outline-none text-xl p-3" name="name" type="text" placeholder={t("name")} required />
          <input className="bg-white rounded-xl text-[#7a7a7a] outline-none text-xl p-3" name="address" type="text" placeholder={t("address")} required />
          <input className="bg-white rounded-xl text-[#7a7a7a] outline-none text-xl p-3" name="email" type="text"  placeholder={t("email")}  required />
          <textarea className="bg-white rounded-xl text-[#7a7a7a] outline-none text-xl p-3" name="message"  placeholder={t("message")}  required cols={4} />

          <button className="bg-[#61ce70] hover:bg-violet-600! duration-300 ease-in p-3 rounded-xl p-3 cursor-pointer text-white text-semibold text-2xl" type="submit">{t("send")}</button>
        </form>
      </Container>
    </section>
  );
};

export default Form;
