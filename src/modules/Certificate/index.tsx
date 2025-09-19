import React from "react";
import { BreadCrumb, CertificateCard, Container, MainTitle } from "@/shared/components";
import { Urls } from "@/shared/constants/urls";
import { useTranslations } from "next-intl";

const Index = () => {
  const t = useTranslations("Header");
  return (
    <main>
      <BreadCrumb
        items={[
          { label: t("home"), href: Urls.HOME },
          { label: t("certificates"), href: Urls.CERTIFICATES },
        ]}
      />

      <Container>
        <MainTitle title={t("certificates")} titleMaxWidth="300px"/>

        <CertificateCard/>
      </Container>
    </main>
  );
};

export default Index;
