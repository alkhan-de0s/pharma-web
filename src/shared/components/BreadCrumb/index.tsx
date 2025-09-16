"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { BreadcrumbProps } from "./model";
import styles from "./Breadcrumb.module.scss";
import Container from "../Container";
import { ArrowBreadCrumb } from "@/shared/icons";
import { useTranslations } from "next-intl";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {

  const t = useTranslations("Our-Partners")

  const pathname = usePathname();

  return (
    <nav
      className={`${styles.breadcrumb} ${className || ""}`}
      aria-label="Breadcrumb"
    >
      <Container>
        <ol className={styles.breadcrumbList}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className={styles.breadcrumbItem}>
                {!isLast && !isActive ? (
                  <Link href={item.href} className={styles.breadcrumbLink}>
                    {t(item.label)}
                  </Link>
                ) : (
                  <span
                    className={`${styles.breadcrumbText} ${
                      isActive ? styles.active : ""
                    }`}
                  >
                    {t(item.label)}
                  </span>
                )}

                {!isLast && (
                 <ArrowBreadCrumb/>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
};

export default Breadcrumb;
