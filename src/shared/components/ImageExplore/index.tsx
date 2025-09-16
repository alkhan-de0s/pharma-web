import React from "react";
import Image from "next/image";
import styles from './Explore.module.scss'
import { Link } from "@/i18n/navigation";
import { Urls } from "@/shared/constants/urls";
import { useTranslations } from "next-intl";
const index = () => {
  const t = useTranslations("HomePage")
  return (
    <section className={styles.Virtual}>
      <div className={styles.VirtualImages}>
        <Image src="/explore.webp" alt="explore" fill />
      </div>
      <div className={styles.VirtualContent}>
        <Link href={Urls.TOUR}>{t("click-to-explore")}</Link>
      </div>
    </section>
  );
};

export default index;
