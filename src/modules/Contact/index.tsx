import React from "react";
import { BreadCrumb, Contact } from "@/shared/components";
import { useTranslations } from "next-intl";
import { Urls } from "@/shared/constants/urls";

const Index = () => {
  const t = useTranslations("Header");

  return (
    <main>
      <BreadCrumb
        items={[
          { label: t("home"), href: Urls.HOME },
          { label: t("contact-us"), href: Urls.CONTACT },
        ]}
      />
      <div>
        <Contact/>
      </div>
    </main>
  );
};

export default Index;
