import { Link } from "@/i18n/navigation";
import { type Partners as PartnerType } from "@/modules/Home/model";
import { Urls } from "@/shared/constants/urls";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import RenderIf from "../RenderIf";
import styles from "./Partners.module.scss";
import { useTranslations } from "next-intl";
import { MarqueeList } from "..";
interface IPartnersProps {
  data: PartnerType[];
}
const Partners: React.FC<IPartnersProps> = ({ data }) => {
  const t = useTranslations("HomePage");
  return (
    <Container extendRight>
      <section className={styles.Partners}>
        <React.Fragment>
          <h2>{t("crystall-hall-hosts")}</h2>
          <RenderIf condition={data?.length}>
            <div className={styles.PartnersWrapper}>
              <MarqueeList data={data}/>
              
            </div>
          </RenderIf>
          <p>
            {t("support-partner")}
            <Link href={Urls.OUR_PARTNERS}>
              <span> {t("partner")}</span>
            </Link>
          </p>
        </React.Fragment>
      </section>
    </Container>
  );
};

export default Partners;
