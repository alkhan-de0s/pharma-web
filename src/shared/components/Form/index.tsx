"use client";
import React, { useState } from "react";
import { Container } from "@/shared/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useApiMutation } from "@/hooks/useApiQuery";

const Form = () => {
  const t = useTranslations("HomePage");

  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    message: ""
  });

  
  const { mutate, isPending } = useApiMutation(
    "/contact",  
    "POST",               
    {
      onSuccess: () => {
        alert("form-success"); 
        setFormData({ name: "", address: "", email: "", message: "" }); 
      },
      onError: () => {
        alert("form-error");
      }
    }
  );

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData); 
  };

  return (
    <section className="relative h-full bg-[#204066] bg-[url(/general/bg-form.png)] bg-fixed bg-cover bg-no-repeat my-10 p-4 xl:p-10">
      <Container classname="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
        <div className="w-full h-[200px] lg:h-full relative">
          <Image
            fill
            src='/general/bg-outer.png'
            alt="bg-outer"
            className="object-contain"
          />
        </div>
        <form
          className="flex flex-1 flex-col gap-[30px] bg-[#f1f1f1] p-[15px] md:p-10 w-full lg:w-[500px] rounded-xl"
          onSubmit={handleSubmit}
        >
          <span className="text-[#12b48b] text-semibold text-2xl text-center">
            {t("form-title")}
          </span>
          <p className="mb-5 text-center text-[#204066]">
            {t("form-description")}
          </p>

          <input
            className="bg-white rounded-xl text-[#7a7a7a] outline-none text-xl p-3"
            name="name"
            type="text"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            className="bg-white rounded-xl text-[#7a7a7a] outline-none text-xl p-3"
            name="address"
            type="text"
            placeholder={t("address")}
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input
            className="bg-white rounded-xl text-[#7a7a7a] outline-none text-xl p-3"
            name="email"
            type="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            className="bg-white rounded-xl text-[#7a7a7a] outline-none text-xl p-3"
            name="message"
            placeholder={t("message")}
            value={formData.message}
            onChange={handleInputChange}
            required
            cols={4}
          />

          <button
            className="bg-[#61ce70] hover:bg-violet-600! duration-300 ease-in p-3 rounded-xl cursor-pointer text-white text-semibold text-2xl"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "sending" : t("send")}
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Form;
